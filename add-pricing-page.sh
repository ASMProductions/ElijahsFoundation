#!/bin/bash

# Add pricing.js to elijahs.foundation and push to GitHub

PROJECT_DIR="/Users/amin/Desktop/Elijahs Foundation/elijahs-foundation-platform"
PRICING_FILE="/home/claude/pricing.js"

echo "Adding pricing page to elijahs.foundation..."
echo ""

# Copy pricing.js to pages/
echo "Copying pricing.js to pages/ directory..."
cp "$PRICING_FILE" "$PROJECT_DIR/pages/pricing.js"

if [ ! -f "$PROJECT_DIR/pages/pricing.js" ]; then
  echo "ERROR: Failed to copy pricing.js"
  exit 1
fi

echo "✓ pricing.js copied to pages/"
echo ""

# Navigate to project
cd "$PROJECT_DIR"

# Git operations
echo "Adding to Git..."
git add pages/pricing.js

echo "✓ Committing..."
git commit -m "Add pricing page with 5-tier model"

echo "✓ Pushing to GitHub..."
git push

echo ""
echo "=========================================="
echo "Complete!"
echo "=========================================="
echo "Pricing page has been added and pushed."
echo ""
echo "The /pricing route is now live:"
echo "https://www.elijahs.foundation/pricing"
echo ""
echo "Vercel will auto-deploy in ~1-2 minutes."
