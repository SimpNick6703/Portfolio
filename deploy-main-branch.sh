#!/bin/bash

# GitHub Pages Deployment Script - Deploy from Main Branch
# This script builds the frontend and commits the built files to the main branch

echo "🚀 Portfolio Main Branch Deployment Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    echo "❌ Error: Please run this script from the root of the Portfolio project"
    exit 1
fi

# Check if git is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Please commit or stash them first."
    git status --short
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
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

# Go back to root directory
cd ..

echo "📁 Copying built files to root directory..."

# Remove old built files (but keep important files)
find . -maxdepth 1 -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.json" -o -name "*.ico" -o -name "*.png" -o -name "*.svg" | grep -v package.json | grep -v "docker-compose" | xargs rm -f 2>/dev/null
rm -rf static 2>/dev/null

# Copy new built files
cp -r frontend/build/* .

# Create .nojekyll file to bypass Jekyll processing
echo "" > .nojekyll

echo "📝 Committing built files..."
git add .
git add .nojekyll

if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    git commit -m "Deploy portfolio to GitHub Pages from main branch - $(date)"
    
    echo "⬆️  Pushing to GitHub..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully deployed to GitHub Pages!"
        echo "🔗 Your portfolio should be available at your GitHub Pages URL in a few minutes"
        echo "📝 Make sure GitHub Pages is configured to use the main branch in repository settings"
    else
        echo "❌ Error: Failed to push to GitHub"
        exit 1
    fi
fi

echo ""
echo "📋 Next steps:"
echo "   1. Go to your GitHub repository settings"
echo "   2. Navigate to Pages section"
echo "   3. Set Source to 'Deploy from a branch'"
echo "   4. Select 'main' branch and '/ (root)' folder"
