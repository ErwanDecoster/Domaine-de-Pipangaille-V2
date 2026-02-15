#!/usr/bin/env node

/**
 * Script to fetch business hours from Google Places API
 * Updates src/constants/businessHours.json with current data
 *
 * Usage:
 *   npm run update-business-hours
 *   node scripts/update-business-hours.js
 *
 * Environment Variables Required:
 *   GOOGLE_PLACES_API_KEY - Google Cloud API key
 */
import "dotenv/config.js";
import fs from "node:fs";
import path from "node:path";
import { placeIds } from "../src/constants/placeIds.ts";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

async function fetchPlaceDetails(placeId) {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY,
      "X-Goog-FieldMask": "regularOpeningHours",
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Google Places API error: ${response.status} ${response.statusText}\n${errorBody}`,
    );
  }

  return response.json();
}

function convertGoogleHoursToFormat(googleResponse) {
  const hours = {
    sunday: { isOpen: false },
    monday: { isOpen: false },
    tuesday: { isOpen: false },
    wednesday: { isOpen: false },
    thursday: { isOpen: false },
    friday: { isOpen: false },
    saturday: { isOpen: false },
  };

  if (!googleResponse.regularOpeningHours?.periods) {
    console.warn(
      `No opening hours found for ${googleResponse.displayName?.text || "unknown place"}`,
    );
    return hours;
  }

  const periods = googleResponse.regularOpeningHours.periods;

  // Group periods by day
  const dayPeriods = {};

  periods.forEach((period) => {
    const dayValue = period.open.day;
    const dayName =
      typeof dayValue === "number"
        ? DAYS[dayValue]
        : String(dayValue).toLowerCase();

    if (!dayName) {
      return;
    }

    if (!dayPeriods[dayName]) {
      dayPeriods[dayName] = [];
    }

    // New API format: {hour: 8, minute: 0} instead of time: "0800"
    const openTime = `${String(period.open.hour).padStart(2, "0")}${String(period.open.minute || 0).padStart(2, "0")}`;
    const closeTime = period.close
      ? `${String(period.close.hour).padStart(2, "0")}${String(period.close.minute || 0).padStart(2, "0")}`
      : "2359";

    dayPeriods[dayName].push({
      open: openTime,
      close: closeTime,
    });
  });

  // Populate hours object
  DAYS.forEach((day) => {
    if (dayPeriods[day] && dayPeriods[day].length > 0) {
      hours[day] = {
        isOpen: true,
        periods: dayPeriods[day],
      };
    }
  });

  return hours;
}

async function updateBusinessHours() {
  if (!GOOGLE_PLACES_API_KEY) {
    console.error("❌ GOOGLE_PLACES_API_KEY environment variable is not set");
    console.error(
      "   Make sure your .env file contains: GOOGLE_PLACES_API_KEY=your_api_key",
    );
    process.exit(1);
  }

  try {
    console.log("⏳ Fetching business hours from Google Places API...");

    const entries = Object.entries(placeIds || {});

    if (entries.length === 0) {
      console.error("❌ No Place IDs found in src/constants/placeIds.ts");
      process.exit(1);
    }

    const results = await Promise.all(
      entries.map(async ([key, placeId]) => {
        const placeData = await fetchPlaceDetails(placeId);

        return {
          key,
          placeId,
          data: placeData,
        };
      }),
    );

    const businessHours = results.reduce((acc, { key, placeId, data }) => {
      acc[key] = {
        googlePlaceId: placeId,
        hours: convertGoogleHoursToFormat(data),
      };
      return acc;
    }, {});

    const fileContent = JSON.stringify(businessHours, null, 2);

    const filePath = path.join(
      process.cwd(),
      "src/constants/businessHours.json",
    );
    await fs.promises.writeFile(filePath, `${fileContent}\n`, "utf-8");

    console.log("✅ Business hours updated successfully!");
    console.log(`📝 File: ${filePath}`);
    console.log(`⏰ Updated at: ${new Date().toISOString()}`);
  } catch (error) {
    console.error("❌ Error updating business hours:", error.message);
    process.exit(1);
  }
}

// Run the update
await updateBusinessHours().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
