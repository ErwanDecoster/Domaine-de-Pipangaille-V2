#!/usr/bin/env node

/**
 * Update Bike Routes - Version 2
 * Uses JSON to reliably manipulate data
 *
 * Workflow:
 * 1. Read surroundings.ts and extract raw JSON data
 * 2. Parse JSON to get JavaScript objects
 * 3. Update objects with bikeRoute data
 * 4. Regenerate surroundings.ts with new data
 *
 * Usage: node scripts/update-bike-routes-v2.js
 *
 * @global fetch - Node.js 18+ has native fetch
 * @global setTimeout - Node.js native timer
 */

import "dotenv/config.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  lat: 45.252593,
  lng: 4.809788,
};

const RATE_LIMIT = {
  pauseMs: 60 * 500,
  itemsPerPause: 10,
};

// ============================================================================
// Utility Functions
// ============================================================================

function extractGPSFromMapsUrl(mapsUrl) {
  if (!mapsUrl) return null;
  const latMatch = mapsUrl.match(/!3d(-?\d+\.?\d*)/);
  const lngMatch = mapsUrl.match(/!2d(-?\d+\.?\d*)/);
  if (!latMatch || !lngMatch) return null;
  return {
    lat: Number.parseFloat(latMatch[1]),
    lng: Number.parseFloat(lngMatch[1]),
  };
}

function calculateTotalGainFromArray(
  elevationArray,
  extractValue = (val) => val,
) {
  let totalGain = 0;
  for (let i = 1; i < elevationArray.length; i++) {
    const curr = extractValue(elevationArray[i]);
    const prev = extractValue(elevationArray[i - 1]);
    const diff = curr - prev;
    if (diff > 0) totalGain += diff;
  }
  return Math.max(0, totalGain);
}

function extractElevationGain(routeData) {
  if (routeData.summary?.ascent) return routeData.summary.ascent;
  if (routeData.summary?.ascending) return routeData.summary.ascending;
  if (routeData.properties?.summary?.ascent)
    return routeData.properties.summary.ascent;
  if (routeData.ascent) return routeData.ascent;

  if (Array.isArray(routeData.elevation)) {
    const gain = calculateTotalGainFromArray(routeData.elevation);
    if (gain > 0) return gain;
  }

  if (
    routeData.extras?.elevation?.values &&
    Array.isArray(routeData.extras.elevation.values)
  ) {
    const gain = calculateTotalGainFromArray(
      routeData.extras.elevation.values,
      (val) => val[0] || 0,
    );
    if (gain > 0) return gain;
  }

  return 0;
}

function calculateDifficulty(elevationGain, distance) {
  if (distance === 0) return "easy";
  const elevationPerKm = elevationGain / distance;

  // High elevation on short distance is harder than on long distance
  // Use weighted formula: base difficulty from elevation/km ratio,
  // but reduce impact for longer distances
  const distanceFactor = Math.min(1, distance / 20); // Normalize at 20km
  const adjustedElevationPerKm = elevationPerKm / (1 + distanceFactor * 0.3);

  if (adjustedElevationPerKm < 25 && elevationGain < 150) return "easy";
  if (adjustedElevationPerKm < 40 && elevationGain < 400) return "moderate";
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

function getShortRideTag(elevationPerKm, difficulty) {
  if (elevationPerKm > 40) {
    return "short_but_steep_climb";
  }
  if (difficulty === "easy") {
    return "easy_short_ride";
  }
  return "short_scenic_ride";
}

function getMediumRideTag(elevation, elevationPerKm, difficulty) {
  if (elevationPerKm > 30) {
    return "challenging_hills";
  }
  if (elevation < 100) {
    return "pleasant_flat_ride";
  }
  if (difficulty === "easy") {
    return "easy_half_day_ride";
  }
  return "moderate_trip";
}

function getLongRideTag(elevation, elevationPerKm) {
  if (elevationPerKm > 25) {
    return "long_hilly_adventure";
  }
  if (elevation < 200) {
    return "long_scenic_route";
  }
  return "half_day_expedition";
}

function getVeryLongRideTag(elevationPerKm, difficulty) {
  if (elevationPerKm > 20) {
    return "epic_mountain_challenge";
  }
  if (difficulty === "easy") {
    return "long_easy_touring_route";
  }
  return "full_day_adventure";
}

function generateRouteTag(distance, duration, elevation, difficulty) {
  const elevationPerKm = distance > 0 ? elevation / distance : 0;

  // Very short, easy rides
  if (distance < 5 && difficulty === "easy") {
    return "quick_neighborhood_ride";
  }

  // Short rides (< 10km)
  if (distance < 10) {
    return getShortRideTag(elevationPerKm, difficulty);
  }

  // Medium distance rides (10-25km)
  if (distance < 25) {
    return getMediumRideTag(elevation, elevationPerKm, difficulty);
  }

  // Long distance rides (25-50km)
  if (distance < 50) {
    return getLongRideTag(elevation, elevationPerKm);
  }

  // Very long rides (50km+)
  return getVeryLongRideTag(elevationPerKm, difficulty);
}

function calculateBikeScore(route) {
  const distance = route.summary.distance / 1000;
  const duration = route.summary.duration / 60;
  const elevation = extractElevationGain(route);
  const elevationPerKm = distance > 0 ? elevation / distance : 0;

  // Distance score: optimal range 5-25km
  let distanceScore;
  if (distance <= 5) {
    distanceScore = distance / 5;
  } else if (distance <= 25) {
    distanceScore = 1;
  } else {
    distanceScore = Math.max(0, 1 - (distance - 25) / 75);
  }

  // Duration score: optimal range 15-90 minutes
  let durationScore;
  if (duration <= 15) {
    durationScore = duration / 15;
  } else if (duration <= 90) {
    durationScore = 1;
  } else {
    durationScore = Math.max(0, 1 - (duration - 90) / 180);
  }

  // Elevation score: penalize steep gradients on short distances more
  // For long distances, high elevation is less of a penalty
  const distanceFactor = Math.min(1, distance / 30);
  const baseElevationPenalty = elevationPerKm / 60; // 60m/km = full penalty
  const adjustedElevationPenalty =
    baseElevationPenalty * (1 - distanceFactor * 0.4);
  const elevationScore = Math.max(0, 1 - adjustedElevationPenalty);

  const score = Math.round(
    distanceScore * SCORING_WEIGHTS.distance * 100 +
      durationScore * SCORING_WEIGHTS.duration * 100 +
      elevationScore * SCORING_WEIGHTS.elevation * 100 +
      0.8 * SCORING_WEIGHTS.surface * 100 +
      0.75 * SCORING_WEIGHTS.popularity * 100,
  );

  const difficulty = calculateDifficulty(elevation, distance);
  const tag = generateRouteTag(distance, duration, elevation, difficulty);

  return {
    score: Math.min(100, Math.max(0, score)),
    tag, // Single tag object instead of array
  };
}

// ============================================================================
// API Functions
// ============================================================================

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
// TypeScript File Manipulation
// ============================================================================

/**
 * Extract data section from TS file (without imports)
 * @param {string} content - Content of the TS file
 * @returns {string} Data object string
 */
function extractDataFromTS(content) {
  const exportRegex = /export const surroundings = ({[\s\S]*});/;
  const exportMatch = exportRegex.exec(content);
  if (!exportMatch) throw new Error("Could not find surroundings export");

  // Evaluate this object in a safe context
  // Replace image variable references with temporary strings
  let dataString = exportMatch[1];

  // Extract all image variable names used
  const imageVarRegex = /import (\w+) from/g;
  const imageVars = [];
  let match;
  while ((match = imageVarRegex.exec(content)) !== null) {
    imageVars.push(match[0]);
  }
  if (imageVars.length > 0) {
    const varNameRegex = /import (\w+)/;
    imageVars.forEach((imp) => {
      const varMatch = varNameRegex.exec(imp);
      const varName = varMatch[1];
      // Replace with placeholder
      dataString = dataString.replaceAll(varName, `"__IMAGE__${varName}"`);
    });
  }

  return dataString;
}

/**
 * Parse data string into JavaScript object
 * @param {string} dataString - Data string to parse
 * @returns {Object} Parsed data object
 */
function parseData(dataString) {
  // Use eval in a controlled context (only for our own code)

  const data = eval(`(${dataString})`);
  return data;
}

/**
 * Regenerate TypeScript file with new data
 * @param {Object} data - Updated data object
 * @param {string} originalContent - Original file content
 * @returns {string} Regenerated TS file content
 */
function generateTS(data, originalContent) {
  // Extract all content before the export statement (all imports)
  const exportIndex = originalContent.indexOf("export const surroundings");
  const imports =
    exportIndex === -1 ? "" : originalContent.substring(0, exportIndex).trim();

  // Convert data to TypeScript string
  const dataString = JSON.stringify(data, null, 2)
    // Restore image variable references
    .replaceAll(/"__IMAGE__(\w+)"/g, "$1")
    // Clean up quotes on object keys
    .replaceAll(/"(\w+)":/g, "$1:");

  return `${imports}\n\nexport const surroundings = ${dataString};\n`;
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  if (!ORS_API_KEY) {
    console.error("❌ Error: ORS_API_KEY environment variable not set");
    console.error(
      "   Make sure your .env file contains: ORS_API_KEY=your_api_key",
    );
    process.exit(1);
  }

  try {
    console.log("🚴 Starting bike routes update (JSON method)...\n");

    // Read and parse the file
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
        const { score, tag } = calculateBikeScore(routeData);

        item.bikeRoute = {
          durationMinutes: Math.round(duration),
          distanceKm: Math.round(distance * 10) / 10,
          elevationGainMeters: Math.round(elevation),
          routeType: calculateRouteType(routeData),
          bikeScore: score,
          difficulty: calculateDifficulty(elevation, distance),
          tag,
        };

        console.log(
          `  ✅ Updated (${Math.round(distance)}km, ${Math.round(duration)}min)`,
        );
        updated++;
      } else {
        console.log(`  ❌ Failed to fetch route`);
      }

      // Rate limiting - pause between API calls
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

    // Regenerate the TypeScript file
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

await main();
