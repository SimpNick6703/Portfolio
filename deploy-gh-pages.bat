@echo off
REM GitHub Pages Deployment Script for Windows
REM This script helps deploy the portfolio to GitHub Pages

echo 🚀 Portfolio GitHub Pages Deployment Script
echo ===========================================

REM Check if we're in the right directory
if not exist "frontend\package.json" (
    echo ❌ Error: Please run this script from the root of the Portfolio project
    exit /b 1
)

REM Navigate to frontend directory
cd frontend

echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Error: Failed to install dependencies
    exit /b 1
)

echo 🔨 Building the application...
call npm run build

if errorlevel 1 (
    echo ❌ Error: Failed to build the application
    exit /b 1
)

echo 🌐 Deploying to GitHub Pages...
call npm run deploy

if errorlevel 1 (
    echo ❌ Error: Failed to deploy to GitHub Pages
    echo 📝 Make sure you have:
    echo    1. Configured GitHub Pages in your repository settings
    echo    2. Updated the homepage URL in package.json
    echo    3. Updated the GitHub username in the code
    exit /b 1
)

echo ✅ Successfully deployed to GitHub Pages!
echo 🔗 Your portfolio should be available at your GitHub Pages URL
echo 📝 Remember to:
echo    - Update your GitHub username in frontend/src/api/githubService.js
echo    - Update the homepage URL in frontend/package.json
echo    - Enable GitHub Pages in your repository settings

pause
