#!/bin/bash

# Load ORS_API_KEY from .env file, handling multiline values
export ORS_API_KEY=$(awk -F'"' '/^ORS_API_KEY=/ {print $2}' .env | tr -d '\n' | tr -d ' ')

# Debug: uncomment to see the key
# echo "DEBUG: ORS_API_KEY=$ORS_API_KEY"

# Run the Node.js script
node scripts/update-bike-routes.js

# Format the updated file with Prettier to match project standards
echo ""
echo "🎨 Formatting with Prettier..."
npx prettier --write src/constants/surroundings.ts

echo "✅ Done!"
