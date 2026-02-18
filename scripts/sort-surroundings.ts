#!/usr/bin/env node
/**
 * Sort script for surroundings.ts
 * Execution: npm run sort-surroundings
 *
 * This script sorts activities and restaurants by:
 * 1. Route duration (durationMinutes * 10)
 * 2. Categories: "loved" (-500), "family" (-100), "bike" (-100)
 * 3. BikeScore: <70 (+100), >=80 (-50)
 * 4. No category: (+500)
 *
 * Score = durationMinutes * 10 + categoryBonus + bikeScoreBonus + categoryPenalty
 * Sort: lower score → higher score (more priority first)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SURROUNDINGS_FILE = path.join(
  __dirname,
  "../src/constants/surroundings.ts",
);

interface BikeRoute {
  durationMinutes?: number;
  distanceKm?: number;
  elevationGainMeters?: number;
  routeType?: string;
  bikeScore?: number;
  difficulty?: string;
  tag?: string;
}

interface Activity {
  title: string;
  category?: string[];
  shortDesc: string;
  longDesc: string[];
  gallery: Array<{ src: unknown; altKey: string }>;
  mapsUrl?: string;
  website?: string;
  bookLink?: string;
  socialMedia?: Array<{ platform: string; link: string }>;
  phoneNumber?: string;
  slug: string;
  bikeRoute?: BikeRoute;
}

function calculateSortScore(activity: Activity): number {
  let score = 1000;

  if (activity.bikeRoute?.durationMinutes) {
    score = activity.bikeRoute.durationMinutes * 10;
  }

  if (activity.category?.includes("loved")) score -= 300;
  if (activity.category?.includes("family")) score -= 100;
  if (activity.category?.includes("bike")) score -= 100;

  if (activity.bikeRoute?.bikeScore !== undefined) {
    if (activity.bikeRoute.bikeScore < 70) score += 100;
    else if (activity.bikeRoute.bikeScore >= 80) score -= 50;
  }

  if (!activity.category) score += 500;

  return score;
}

function sortActivities(activities: Activity[]): Activity[] {
  return [...activities].sort(
    (a, b) => calculateSortScore(a) - calculateSortScore(b),
  );
}

function generateReport(title: string, sorted: Activity[]): string {
  let report = `\n${"=".repeat(80)}\n`;
  report += `📋 ${title} (${sorted.length} items)\n`;
  report += `${"=".repeat(80)}\n`;

  sorted.forEach((activity, index) => {
    const score = calculateSortScore(activity);
    const duration = activity.bikeRoute?.durationMinutes || "N/A";
    const bikeScore = activity.bikeRoute?.bikeScore || "N/A";

    report += `${String(index + 1).padStart(2, " ")}. ${activity.title.padEnd(40)} | Score: ${String(score).padStart(5)} | Duration: ${String(duration).padStart(4)}min | BikeScore: ${bikeScore}\n`;
  });

  report += `${"=".repeat(80)}\n`;
  return report;
}

/**
 * Extract data section from TS file (without imports)
 * @param {string} content - Content of the TS file
 * @returns {string} Data object string
 */
function extractDataFromTS(content: string): string {
  const exportRegex = /export const surroundings = ({[\s\S]*});/;
  const exportMatch = exportRegex.exec(content);
  if (!exportMatch) throw new Error("Could not find surroundings export");

  let dataString = exportMatch[1];
  const imageVarRegex = /import (\w+) from/g;
  let match;
  while ((match = imageVarRegex.exec(content)) !== null) {
    dataString = dataString.replaceAll(match[1], `"__IMAGE__${match[1]}"`);
  }
  return dataString;
}

function parseData(dataString: string): any {
  return eval(`(${dataString})`);
}

function generateTS(data: any, originalContent: string): string {
  const exportIndex = originalContent.indexOf("export const surroundings");
  const imports =
    exportIndex === -1 ? "" : originalContent.substring(0, exportIndex).trim();

  const dataString = JSON.stringify(data, null, 2)
    .replaceAll(/"__IMAGE__(\w+)"/g, "$1")
    .replaceAll(/"(\w+)":/g, "$1:");

  return `${imports}\n\nexport const surroundings = ${dataString};\n`;
}

async function main() {
  try {
    console.log("🔄 Sorting activities and restaurants from surroundings.ts\n");

    const fileContent = fs.readFileSync(SURROUNDINGS_FILE, "utf-8");
    const dataString = extractDataFromTS(fileContent);
    const data = parseData(dataString);

    if (!data.toVisit || !data.toEat) {
      throw new Error("Could not parse toVisit or toEat arrays");
    }

    const allItems = [...data.toVisit, ...data.toEat];
    console.log(`✓ Loaded ${data.toVisit.length} activities (toVisit)`);
    console.log(`✓ Loaded ${data.toEat.length} restaurants (toEat)`);
    console.log(`✓ Total: ${allItems.length} items\n`);

    if (allItems.length === 0) {
      console.warn("⚠️  No items found");
      process.exit(1);
    }

    const sortedToVisit = sortActivities(data.toVisit);
    const sortedToEat = sortActivities(data.toEat);

    console.log(generateReport("🎯 PLACES TO VISIT (toVisit)", sortedToVisit));
    console.log(generateReport("🍽️  PLACES TO EAT (toEat)", sortedToEat));

    const sortedData = {
      toVisit: sortedToVisit,
      toEat: sortedToEat,
    };

    const newContent = generateTS(sortedData, fileContent);
    fs.writeFileSync(SURROUNDINGS_FILE, newContent, "utf-8");

    console.log(`\n✅ File ${SURROUNDINGS_FILE} updated successfully!\n`);
  } catch (error) {
    console.error(
      "❌ Error:",
      error instanceof Error ? error.message : String(error),
    );
    if (error instanceof Error && error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

await main();
