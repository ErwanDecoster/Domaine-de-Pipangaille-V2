#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const localesDir = path.join(projectRoot, "src/i18n/locales");

const languages = ["fr", "en", "de", "es", "it", "nl"];

// Check that all languages have the same structure
function validateI18n() {
  const errors = [];

  languages.forEach((lang) => {
    try {
      const indexPath = path.join(localesDir, lang, "index.ts");

      if (!fs.existsSync(indexPath)) {
        errors.push(`❌ Missing index.ts for language: ${lang}`);
        return;
      }

      const content = fs.readFileSync(indexPath, "utf-8");

      // Check that all imported modules are present
      const importMatches = content.matchAll(
        /import\s+(\w+)\s+from\s+['"](.*?)['"]/g,
      );

      for (const match of importMatches) {
        const moduleName = match[2];
        const modulePath = path.join(localesDir, lang, `${moduleName}.ts`);

        if (!fs.existsSync(modulePath)) {
          errors.push(
            `❌ Missing module for language ${lang}: ${moduleName}.ts`,
          );
        }
      }
    } catch {
      // Error reading language, skip
    }
  });

  // Check that all languages have the same modules
  const moduleSets = {};

  languages.forEach((lang) => {
    const langDir = path.join(localesDir, lang);
    const files = fs.readdirSync(langDir).filter((f) => f.endsWith(".ts"));
    moduleSets[lang] = files.toSorted((a, b) => a.localeCompare(b));
  });

  const referenceModules = moduleSets[languages[0]];

  languages.forEach((lang) => {
    if (lang === languages[0]) return;

    const missingModules = referenceModules.filter(
      (m) => !moduleSets[lang].includes(m),
    );
    const extraModules = moduleSets[lang].filter(
      (m) => !referenceModules.includes(m),
    );

    if (missingModules.length > 0) {
      errors.push(
        `❌ Language ${lang} is missing modules: ${missingModules.join(", ")}`,
      );
    }

    if (extraModules.length > 0) {
      errors.push(
        `❌ Language ${lang} has extra modules: ${extraModules.join(", ")}`,
      );
    }
  });

  if (errors.length > 0) {
    console.error("\n🔴 i18n Validation Failed:\n");
    errors.forEach((error) => console.error(error));
    process.exit(1);
  }

  console.log(
    "✅ i18n validation passed - all languages have matching structures",
  );
  console.log(`\n📋 Validated ${languages.length} languages:`);
  languages.forEach((lang) => {
    const langDir = path.join(localesDir, lang);
    const files = fs.readdirSync(langDir).filter((f) => f.endsWith(".ts"));
    console.log(`   ${lang}: ${files.length} modules`);
  });
}

validateI18n();
