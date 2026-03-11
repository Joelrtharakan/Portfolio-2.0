import os
import re
import requests
from urllib.parse import urlparse

ICONS_DIR = os.path.join("public", "icons")
os.makedirs(ICONS_DIR, exist_ok=True)

# Find all SVG URLs
svg_pattern = re.compile(r'(https?://[^\s\'"<>\(\)\{\}]+\.svg)')

def process_svg_url(url):
    print(f"Downloading {url}...")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        name, _ = os.path.splitext(filename)
        
        # Prevent collisions
        parts = [p for p in parsed_url.path.split('/') if p]
        if len(parts) >= 2:
            safe_name = f"{parts[-2]}_{name}"
        else:
            safe_name = name
            
        safe_name = re.sub(r'[^a-zA-Z0-9_]', '_', safe_name)
        svg_filename = f"{safe_name}.svg"
        output_path = os.path.join(ICONS_DIR, svg_filename)
        
        with open(output_path, "wb") as f:
            f.write(response.content)
            
        return f"/icons/{svg_filename}"
    except Exception as e:
        print(f"Failed to process {url}: {e}")
        return url

file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

url_cache = {}
def replace_match(match):
    matched_str = match.group(1)
    if matched_str not in url_cache:
        new_path = process_svg_url(matched_str)
        url_cache[matched_str] = new_path
    return url_cache[matched_str]

new_content = svg_pattern.sub(replace_match, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Done! Downloaded {len(url_cache)} SVGs and updated {file_path}.")
