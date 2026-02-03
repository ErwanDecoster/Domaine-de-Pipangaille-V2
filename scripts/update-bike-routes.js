#!/usr/bin/env node

/**
 * Update Bike Routes - Version 2
 * Utilise JSON pour manipuler les données de manière fiable
 *
 * Workflow:
 * 1. Lit surroundings.ts et extrait les données JSON brutes
 * 2. Parse le JSON pour obtenir des objets JavaScript
 * 3. Met à jour les objets avec les données de bikeRoute
 * 4. Régénère surroundings.ts avec les nouvelles données
 *
 * Usage: node scripts/update-bike-routes-v2.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ORS_API_KEY = process.env.ORS_API_KEY;
const SURROUNDINGS_FILE = path.join(
  __dirname,
  "../src/constants/surroundings.ts",
);
const ORS_BASE_URL = "https://api.openrouteservice.org/v2";

const SCORING_WEIGHTS = {
  distance: 0.1,
  duration: 0.1,
  elevation: 0.4,
  surface: 0.2,
  popularity: 0.2,
};

const ACCOMMODATION = {
  lat: 45.25,
  lng: 4.78,
};

const RATE_LIMIT = {
  pauseMs: 60 * 500,
  itemsPerPause: 10,
};

// ============================================================================
// Utilitaires
// ============================================================================

function extractGPSFromMapsUrl(mapsUrl) {
  if (!mapsUrl) return null;
  const latMatch = mapsUrl.match(/!3d(-?\d+\.?\d*)/);
  const lngMatch = mapsUrl.match(/!2d(-?\d+\.?\d*)/);
  if (!latMatch || !lngMatch) return null;
  return {
    lat: parseFloat(latMatch[1]),
    lng: parseFloat(lngMatch[1]),
  };
}

function extractElevationGain(routeData) {
  if (routeData.summary?.ascent) return routeData.summary.ascent;
  if (routeData.summary?.ascending) return routeData.summary.ascending;
  if (routeData.properties?.summary?.ascent)
    return routeData.properties.summary.ascent;
  if (routeData.ascent) return routeData.ascent;

  if (Array.isArray(routeData.elevation)) {
    let totalGain = 0;
    for (let i = 1; i < routeData.elevation.length; i++) {
      const diff = routeData.elevation[i] - routeData.elevation[i - 1];
      if (diff > 0) totalGain += diff;
    }
    if (totalGain > 0) return totalGain;
  }

  if (
    routeData.extras?.elevation?.values &&
    Array.isArray(routeData.extras.elevation.values)
  ) {
    let totalGain = 0;
    for (let i = 1; i < routeData.extras.elevation.values.length; i++) {
      const curr = routeData.extras.elevation.values[i][0] || 0;
      const prev = routeData.extras.elevation.values[i - 1][0] || 0;
      const diff = curr - prev;
      if (diff > 0) totalGain += diff;
    }
    if (totalGain > 0) return totalGain;
  }

  return 0;
}

function calculateDifficulty(elevationGain, distance) {
  if (distance === 0) return "easy";
  const elevationPerKm = elevationGain / distance;
  if (elevationPerKm < 30 && elevationGain < 100) return "easy";
  if (elevationPerKm < 50 && elevationGain < 300) return "moderate";
  return "challenging";
}

function calculateRouteType(routeData) {
  const distance = routeData.summary.distance / 1000;
  const duration = routeData.summary.duration / 60;
  const elevation = extractElevationGain(routeData);
  const averageSpeed = distance / (duration / 60);
  const elevationPerKm = elevation / distance;

  if (averageSpeed >= 22) return "Road";
  if (averageSpeed >= 15) return "Path";
  if (elevation > 150 || elevationPerKm > 30) return "Gravel";
  return "Cycletrack";
}

function calculateBikeScore(route) {
  const distance = route.summary.distance / 1000;
  const duration = route.summary.duration / 60;
  const elevation = extractElevationGain(route);

  const distanceScore =
    distance <= 20 ? 1 : Math.max(0, 1 - (distance - 20) / 50);
  const durationScore =
    duration <= 60 ? 1 : Math.max(0, 1 - (duration - 60) / 120);
  const elevationScore = Math.max(0, 1 - elevation / 500);

  const score = Math.round(
    distanceScore * SCORING_WEIGHTS.distance * 100 +
      durationScore * SCORING_WEIGHTS.duration * 100 +
      elevationScore * SCORING_WEIGHTS.elevation * 100 +
      0.8 * SCORING_WEIGHTS.surface * 100 +
      0.75 * SCORING_WEIGHTS.popularity * 100,
  );

  const tags = [];
  if (distance < 10) tags.push({ icon: "bike", label: "Short ride" });
  if (distance > 30) tags.push({ icon: "trending-up", label: "Long distance" });
  if (elevation < 50) tags.push({ icon: "star", label: "Flat route" });
  if (elevation > 200) tags.push({ icon: "trending-up", label: "Hilly" });
  if (duration > 60) tags.push({ icon: "clock", label: "Half day" });
  if (score > 80) tags.push({ icon: "star", label: "Recommended" });

  return {
    score: Math.min(100, Math.max(0, score)),
    tags,
  };
}

async function fetchBikeRoute(startLat, startLng, endLat, endLng) {
  const url = `${ORS_BASE_URL}/directions/cycling-regular?api_key=${ORS_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coordinates: [
          [startLng, startLat],
          [endLng, endLat],
        ],
        elevation: true,
        extra_info: ["surface", "suitability"],
      }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`  Failed to fetch route: ${error.message}`);
    return null;
  }
}

// ============================================================================
// Manipulation du fichier TypeScript
// ============================================================================

/**
 * Extrait la partie données du fichier TS (sans les imports)
 */
function extractDataFromTS(content) {
  const exportMatch = content.match(/export const surroundings = ({[\s\S]*});/);
  if (!exportMatch) throw new Error("Could not find surroundings export");

  // On va évaluer cet objet dans un contexte sécurisé
  // Remplacer les références d'images par des strings temporaires
  let dataString = exportMatch[1];

  // Extraire tous les noms de variables d'images utilisés
  const imageVars = content.match(/import (\w+) from/g);
  if (imageVars) {
    imageVars.forEach((imp) => {
      const varName = imp.match(/import (\w+)/)[1];
      // Remplacer par un placeholder
      dataString = dataString.replaceAll(varName, `"__IMAGE__${varName}"`);
    });
  }

  return dataString;
}

/**
 * Parse les données en objet JavaScript
 */
function parseData(dataString) {
  // Utiliser eval dans un contexte contrôlé (seulement pour notre propre code)
  const data = eval(`(${dataString})`);
  return data;
}

/**
 * Régénère le fichier TypeScript avec les nouvelles données
 */
function generateTS(data, originalContent) {
  // Extraire la partie imports
  const importsMatch = originalContent.match(/(import[\s\S]*?from.*?;[\s]*)+/);
  const imports = importsMatch ? importsMatch[0] : "";

  // Convertir les données en string TypeScript
  const dataString = JSON.stringify(data, null, 2)
    // Restaurer les références d'images
    .replace(/"__IMAGE__(\w+)"/g, "$1")
    // Nettoyer les quotes sur les clés d'objet
    .replace(/"(\w+)":/g, "$1:");

  return `${imports}\nexport const surroundings = ${dataString};\n`;
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  if (!ORS_API_KEY) {
    console.error("❌ Error: ORS_API_KEY environment variable not set");
    process.exit(1);
  }

  try {
    console.log("🚴 Starting bike routes update (JSON method)...\n");

    // Lire et parser le fichier
    const fileContent = fs.readFileSync(SURROUNDINGS_FILE, "utf-8");
    const dataString = extractDataFromTS(fileContent);
    const data = parseData(dataString);

    const allItems = [...data.toVisit, ...data.toEat];
    const itemsWithMaps = allItems.filter((item) => item.mapsUrl);

    console.log(`Found ${itemsWithMaps.length} items with maps URLs\n`);

    let updated = 0;

    for (let i = 0; i < itemsWithMaps.length; i++) {
      const item = itemsWithMaps[i];
      const endCoords = extractGPSFromMapsUrl(item.mapsUrl);

      if (!endCoords) {
        console.log(`⏭️  Skipping ${item.title} (no valid coordinates)`);
        continue;
      }

      console.log(`Fetching route for ${item.title}...`);
      const route = await fetchBikeRoute(
        ACCOMMODATION.lat,
        ACCOMMODATION.lng,
        endCoords.lat,
        endCoords.lng,
      );

      if (route?.routes?.[0]) {
        const routeData = route.routes[0];
        const distance = routeData.summary.distance / 1000;
        const duration = routeData.summary.duration / 60;
        const elevation = extractElevationGain(routeData);
        const { score, tags } = calculateBikeScore(routeData);

        item.bikeRoute = {
          durationMinutes: Math.round(duration),
          distanceKm: Math.round(distance * 10) / 10,
          elevationGainMeters: Math.round(elevation),
          routeType: calculateRouteType(routeData),
          bikeScore: score,
          difficulty: calculateDifficulty(elevation, distance),
          tags: tags,
        };

        console.log(
          `  ✅ Updated (${Math.round(distance)}km, ${Math.round(duration)}min)`,
        );
        updated++;
      } else {
        console.log(`  ❌ Failed to fetch route`);
      }

      // Rate limiting
      if (
        (i + 1) % RATE_LIMIT.itemsPerPause === 0 &&
        i + 1 < itemsWithMaps.length
      ) {
        console.log(
          `\n⏸️  Pausing for ${RATE_LIMIT.pauseMs / 1000}s (rate limiting)...\n`,
        );
        await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT.pauseMs));
      }
    }

    // Régénérer le fichier TS
    const newContent = generateTS(data, fileContent);
    fs.writeFileSync(SURROUNDINGS_FILE, newContent);

    console.log(
      `\n✅ Success: ${updated}/${itemsWithMaps.length} items updated`,
    );
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

main();
