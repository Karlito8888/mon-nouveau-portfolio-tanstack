#!/bin/bash
# Compress GLB models with Draco compression using gltf-transform
# Reduces file size by 50-90% for complex geometries

set -e

MODELS_DIR="public/models"
BACKUP_DIR="public/models/backup"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting GLB compression with Draco...${NC}"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Process each GLB file
for file in "$MODELS_DIR"/*.glb; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")

        # Get original size
        original_size=$(stat -c%s "$file")
        original_size_kb=$((original_size / 1024))

        echo -e "\nProcessing: ${filename}"
        echo "  Original size: ${original_size_kb} KB"

        # Backup original
        cp "$file" "$BACKUP_DIR/$filename"

        # Compress with Draco
        # --compress draco: Apply Draco mesh compression
        # --texture-compress webp: Also compress textures to WebP (optional)
        bunx gltf-transform optimize "$file" "$file" --compress draco

        # Get compressed size
        compressed_size=$(stat -c%s "$file")
        compressed_size_kb=$((compressed_size / 1024))

        # Calculate reduction
        reduction=$((100 - (compressed_size * 100 / original_size)))

        echo -e "  ${GREEN}Compressed: ${compressed_size_kb} KB (${reduction}% reduction)${NC}"
    fi
done

echo -e "\n${GREEN}Compression complete!${NC}"
echo "Backups saved to: $BACKUP_DIR"
