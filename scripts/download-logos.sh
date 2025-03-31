#!/bin/bash

# Create the clients directory if it doesn't exist
mkdir -p public/images/clients

# Function to download and optimize logo
download_logo() {
  local name="$1"
  local url="$2"
  local output_file="$3"
  
  echo "Downloading $name logo..."
  
  # Download the image
  curl -L -o "public/images/clients/$output_file" "$url"
  
  # Optimize the image
  convert "public/images/clients/$output_file" \
    -resize "400x240>" \
    -background none \
    -gravity center \
    -extent 400x240 \
    "public/images/clients/$output_file"
}

# Download and optimize each logo with direct URLs
download_logo "Pertamina" "https://upload.wikimedia.org/wikipedia/commons/b/b8/Pertamina_logo.png" "pertamina.png"
download_logo "Gerindra" "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logo_Gerindra.png" "gerindra.png"
download_logo "Waskita" "https://upload.wikimedia.org/wikipedia/commons/2/24/Waskita_Karya.png" "waskita.png"
download_logo "DKI Jakarta" "https://upload.wikimedia.org/wikipedia/commons/e/eb/DKI_Jakarta_Logo.png" "dki-jakarta.png"
download_logo "Allo Bank" "https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo_Allo_Bank.png" "allobank.png"
download_logo "LKPP" "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_LKPP.png" "lkpp.png"
download_logo "Persija" "https://upload.wikimedia.org/wikipedia/en/8/85/Persija_Jakarta_logo.png" "persija.png"
download_logo "PLN" "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png" "pln.png"

echo "Logo download and optimization complete!"

# Create directories if they don't exist
mkdir -p public/images/partners

# Function to download and optimize logo
download_logo() {
  local name="$1"
  local url="$2"
  local output_file="$3"
  
  echo "Downloading $name logo..."
  
  # Download the image with error handling
  if curl -L -o "public/images/partners/$output_file" "$url"; then
    echo "Successfully downloaded $name logo"
  else
    echo "Failed to download $name logo"
  fi
}

# Download partner logos with reliable sources
download_logo "51World" "https://www.51world.com/static/images/logo.png" "51world-logo.png"
download_logo "DJI" "https://www.dji.com/static/images/logo.png" "dji-logo.png"
download_logo "Vertiv" "https://www.vertiv.com/static/images/logo.png" "vertiv-logo.png"
download_logo "Eaton" "https://www.eaton.com/content/dam/eaton/logo/eaton-logo.png" "eaton-logo.png"
download_logo "APC" "https://www.apc.com/static/images/logo.png" "apc-logo.png"
download_logo "Schneider" "https://www.se.com/static/images/logo.png" "schneider-logo.png"
download_logo "Fortinet" "https://www.fortinet.com/static/images/logo.png" "fortinet-logo.png"
download_logo "Hikvision" "https://www.hikvision.com/static/images/logo.png" "hikvision-logo.png"
download_logo "Delta UPS" "https://www.deltaups.com/static/images/logo.png" "delta-ups-logo.png"
download_logo "Uptime Institute" "https://uptimeinstitute.com/static/images/logo.png" "uptime-institute-logo.png"

# For logos that can't be downloaded automatically, create placeholder images
for logo in "dwimitra-dme-logo.png" "avirtech-logo.png" "msp-logo.png" "falco-vms-logo.png"; do
  if [ ! -f "public/images/partners/$logo" ]; then
    echo "Creating placeholder for $logo"
    convert -size 400x240 xc:white -gravity center -pointsize 20 -annotate 0 "Logo Coming Soon" "public/images/partners/$logo"
  fi
done

echo "Logo download and optimization complete!"

# Make the script executable
chmod +x scripts/download-logos.sh 