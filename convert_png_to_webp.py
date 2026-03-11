import os
import re
import requests
from io import BytesIO
from PIL import Image
from urllib.parse import urlparse

# Base directories
PUBLIC_DIR = "public"
ICONS_DIR = os.path.join(PUBLIC_DIR, "icons")
SRC_DIR = "src"

os.makedirs(ICONS_DIR, exist_ok=True)

# Regex to match URLs ending in .png and local absolute paths ending in .png
# Excludes quotes, whitespace, parenthesis, and braces
png_reference_pattern = re.compile(r'(https?://[^\s\'"<>\(\)\{\}]+\.png|/[^\s\'"<>\(\)\{\}]+\.png)(?!\w)')

url_cache = {}

def convert_image_to_webp(image, output_path):
    # Ensure mode is compatible with WebP
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGBA")
    else:
        image = image.convert("RGB")
    image.save(output_path, "webp", quality=85)

def process_external_url(url):
    print(f"Downloading {url}...")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))
        
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        name, _ = os.path.splitext(filename)
        
        # Include the previous path segment to prevent naming collisions
        parts = [p for p in parsed_url.path.split('/') if p]
        if len(parts) >= 2:
            safe_name = f"{parts[-2]}_{name}"
        else:
            safe_name = name
            
        safe_name = re.sub(r'[^a-zA-Z0-9_]', '_', safe_name)
        webp_filename = f"{safe_name}.webp"
        output_path = os.path.join(ICONS_DIR, webp_filename)
        
        convert_image_to_webp(img, output_path)
        return f"/icons/{webp_filename}"
    except Exception as e:
        print(f"Failed to process {url}: {e}")
        return url

def process_local_png(file_path):
    print(f"Converting local file {file_path}...")
    try:
        img = Image.open(file_path)
        output_path = os.path.splitext(file_path)[0] + ".webp"
        convert_image_to_webp(img, output_path)
    except Exception as e:
        print(f"Failed to convert {file_path}: {e}")

# Step 1: Process local public PNGs
print("--- Processing local PNGs in public/ ---")
for root, dirs, files in os.walk(PUBLIC_DIR):
    for file in files:
        if file.lower().endswith(".png"):
            file_path = os.path.join(root, file)
            process_local_png(file_path)

# Step 2: Scan src/ for .png references
print("--- Scanning src/ for .png references ---")

def replace_match(match):
    matched_str = match.group(1)
    
    if matched_str.startswith("http"):
        if matched_str not in url_cache:
            new_path = process_external_url(matched_str)
            url_cache[matched_str] = new_path
        return url_cache[matched_str]
    elif matched_str.startswith("/"):
        # Just swap the extension
        return matched_str[:-4] + ".webp"
        
    return matched_str

# File types to process
extensions = (".ts", ".tsx", ".js", ".jsx", ".json", ".css")

for root, dirs, files in os.walk(SRC_DIR):
    for file in files:
        if file.endswith(extensions):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = png_reference_pattern.sub(replace_match, content)
                
                if new_content != content:
                    print(f"Updated references in {file_path}")
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
            except Exception as e:
                print(f"Skipping {file_path}: {e}")

print("------------------------------------------")
print(f"Done! Created {len(url_cache)} webp icons from external URLs.")
print("Original .png files in public/ are still there; you can delete them after verifying they are no longer needed.")
