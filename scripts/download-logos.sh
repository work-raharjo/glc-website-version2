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