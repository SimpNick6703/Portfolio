#!/bin/bash

# GitHub Pages Deployment Script
# This script helps deploy the portfolio to GitHub Pages

echo "🚀 Portfolio GitHub Pages Deployment Script"
echo "==========================================="

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    echo "❌ Error: Please run this script from the root of the Portfolio project"
    exit 1
fi

# Navigate to frontend directory
cd frontend

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

echo "🔨 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to build the application"
    exit 1
fi

echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to deploy to GitHub Pages"
    echo "📝 Make sure you have:"
    echo "   1. Configured GitHub Pages in your repository settings"
    echo "   2. Updated the homepage URL in package.json"
    echo "   3. Updated the GitHub username in the code"
    exit 1
fi

echo "✅ Successfully deployed to GitHub Pages!"
echo "🔗 Your portfolio should be available at your GitHub Pages URL"
echo "📝 Remember to:"
echo "   - Update your GitHub username in frontend/src/api/githubService.js"
echo "   - Update the homepage URL in frontend/package.json"
echo "   - Enable GitHub Pages in your repository settings"
