#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/portfolio

# Function to download and optimize image
download_and_optimize() {
    local url=$1
    local output=$2
    
    # Download image
    curl -o "temp.jpg" "$url"
    
    # Optimize image
    convert temp.jpg -strip -quality 85 -resize "1200x>" "$output"
    
    # Remove temporary file
    rm temp.jpg
}

# Digital Twin images
download_and_optimize "https://img.freepik.com/free-vector/digital-twin-concept_23-2148947329.jpg" "public/images/portfolio/digital-twin-hero.jpg"
download_and_optimize "https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148404122.jpg" "public/images/portfolio/digital-twin-dashboard.jpg"
download_and_optimize "https://img.freepik.com/free-vector/3d-modeling-concept_23-2148547155.jpg" "public/images/portfolio/digital-twin-modeling.jpg"
download_and_optimize "https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration_335657-2137.jpg" "public/images/portfolio/digital-twin-analytics.jpg"

# Security images
download_and_optimize "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532928.jpg" "public/images/portfolio/security-hero.jpg"
download_and_optimize "https://img.freepik.com/free-vector/security-control-room-empty-interior_33099-1735.jpg" "public/images/portfolio/security-command.jpg"
download_and_optimize "https://img.freepik.com/free-vector/biometric-security-concept_23-2148541802.jpg" "public/images/portfolio/security-biometrics.jpg"
download_and_optimize "https://img.freepik.com/free-vector/smart-home-monitoring-abstract-concept-illustration_335657-2145.jpg" "public/images/portfolio/security-monitoring.jpg"

# Infrastructure images
download_and_optimize "https://img.freepik.com/free-vector/smart-city-concept_23-2148390275.jpg" "public/images/portfolio/infrastructure-hero.jpg"
download_and_optimize "https://img.freepik.com/free-vector/smart-grid-concept-illustration_23-2148537491.jpg" "public/images/portfolio/infrastructure-energy.jpg"
download_and_optimize "https://img.freepik.com/free-vector/smart-traffic-lights-abstract-concept-illustration_335657-2150.jpg" "public/images/portfolio/infrastructure-traffic.jpg"
download_and_optimize "https://img.freepik.com/free-vector/smart-city-monitoring-abstract-concept-illustration_335657-2140.jpg" "public/images/portfolio/infrastructure-monitoring.jpg" 