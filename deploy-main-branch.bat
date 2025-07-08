@echo off
REM GitHub Pages Deployment Script - Deploy from Main Branch
REM This script builds the frontend and commits the built files to the main branch

echo 🚀 Portfolio Main Branch Deployment Script
echo ==========================================

REM Check if we're in the right directory
if not exist "frontend\package.json" (
    echo ❌ Error: Please run this script from the root of the Portfolio project
    exit /b 1
)

REM Check if git is clean
git status --porcelain > temp_status.txt
for /f %%i in (temp_status.txt) do (
    echo ⚠️  Warning: You have uncommitted changes. Please commit or stash them first.
    git status --short
    set /p "continue=Do you want to continue anyway? (y/N): "
    if /i not "!continue!"=="y" (
        del temp_status.txt
        exit /b 1
    )
    goto :continue
)
:continue
del temp_status.txt

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

REM Go back to root directory
cd ..

echo 📁 Copying built files to root directory...

REM Remove old built files (but keep important files)
for %%f in (*.html *.js *.css *.ico *.png *.svg) do (
    if not "%%f"=="package.json" if not "%%f"=="docker-compose.yml" del "%%f" 2>nul
)
if exist static rmdir /s /q static 2>nul

REM Copy new built files
xcopy "frontend\build\*" "." /E /I /Y

REM Create .nojekyll file to bypass Jekyll processing
echo. > .nojekyll

echo 📝 Committing built files...
git add .
git add .nojekyll

git diff --staged --quiet
if errorlevel 1 (
    git commit -m "Deploy portfolio to GitHub Pages from main branch - %date% %time%"
    
    echo ⬆️  Pushing to GitHub...
    git push origin main
    
    if errorlevel 1 (
        echo ❌ Error: Failed to push to GitHub
        exit /b 1
    )
    
    echo ✅ Successfully deployed to GitHub Pages!
    echo 🔗 Your portfolio should be available at your GitHub Pages URL in a few minutes
    echo 📝 Make sure GitHub Pages is configured to use the main branch in repository settings
) else (
    echo ℹ️  No changes to commit
)

echo.
echo 📋 Next steps:
echo    1. Go to your GitHub repository settings
echo    2. Navigate to Pages section
echo    3. Set Source to 'Deploy from a branch'
echo    4. Select 'main' branch and '/ (root)' folder

pause
