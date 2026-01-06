#!/usr/bin/env tsx
/**
 * Rename image files so their names become lowercase, accent-free, hyphen-separated slugs.
 * Usage: tsx scripts/normalize-image-filenames.ts <directory> [--dry-run]
 */
import { readdir, rename, stat } from "node:fs/promises";
import path from "node:path";

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

const args = process.argv.slice(2);
const targetDir = args[0];
const dryRun = args.includes("--dry-run");

if (!targetDir) {
  console.error("Usage: tsx scripts/normalize-image-filenames.ts <directory> [--dry-run]");
  process.exit(1);
}

function slugify(basename: string): string {
  return basename
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureUniqueName(dir: string, desired: string, extension: string): Promise<string> {
  let candidate = desired || "image";
  let counter = 1;
  while (true) {
    const filePath = path.join(dir, candidate + extension);
    try {
      await stat(filePath);
      candidate = `${desired || "image"}-${counter++}`;
    } catch {
      return candidate + extension;
    }
  }
}

(async () => {
  const absoluteDir = path.resolve(targetDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const oldName = entry.name;
    const extension = path.extname(oldName).toLowerCase();
    if (!allowedExtensions.has(extension)) continue;

    const base = path.basename(oldName, path.extname(oldName));
    const slug = slugify(base);
    const normalized = slug || "image";
    const targetName = await ensureUniqueName(absoluteDir, normalized, extension);

    if (oldName === targetName) {
      console.log(`Skipping ${oldName} (already normalized)`);
      continue;
    }

    const sourcePath = path.join(absoluteDir, oldName);
    const destinationPath = path.join(absoluteDir, targetName);

    if (dryRun) {
      console.log(`[dry-run] ${oldName} -> ${targetName}`);
    } else {
      await rename(sourcePath, destinationPath);
      console.log(`${oldName} -> ${targetName}`);
    }
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
