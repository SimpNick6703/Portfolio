# Deployment Configuration

This file explains the different deployment options available for your portfolio.

## Quick Start - Main Branch Deployment

**This is the simplest option and recommended for most users.**

### Step 1: Run the deployment script
```bash
# Linux/Mac
./deploy-main-branch.sh

# Windows
deploy-main-branch.bat
```

### Step 2: Configure GitHub Pages
1. Go to your repository on GitHub
2. Settings > Pages
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"

## Alternative Deployment Options

### Option A: gh-pages Branch
```bash
cd frontend
npm run deploy
```
Then set GitHub Pages source to "gh-pages" branch.

### Option B: GitHub Actions
Keep the existing `.github/workflows/deploy.yml` file and set GitHub Pages source to "GitHub Actions".

## How Each Option Works

### Main Branch Deployment
- Builds the React app
- Copies built files to repository root
- Commits and pushes to main branch
- GitHub Pages serves directly from main branch root

### gh-pages Branch
- Builds the React app  
- Creates/updates a separate `gh-pages` branch
- GitHub Pages serves from the gh-pages branch

### GitHub Actions
- Automatically builds on every push
- Uses GitHub's build servers
- Deploys to GitHub Pages automatically

## Pros and Cons

| Method | Pros | Cons |
|--------|------|------|
| Main Branch | Simple, one-step deployment | Build files mixed with source code |
| gh-pages | Clean separation | Extra branch to manage |
| GitHub Actions | Fully automated | Requires workflow knowledge |

## Configuration Files

- `deploy-main-branch.sh/.bat` - Main branch deployment scripts
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Contains deployment scripts
- `.gitignore` - Controls which files are tracked

## Environment Variables

The portfolio automatically detects the deployment environment:
- **Development**: Uses local FastAPI backend if available
- **Production**: Uses GitHub API directly

## Troubleshooting

### Common Issues
1. **Permission denied**: Make sure deployment script is executable
   ```bash
   chmod +x deploy-main-branch.sh
   ```

2. **Git not clean**: Commit your changes before deploying
   ```bash
   git add .
   git commit -m "Update configuration"
   ```

3. **GitHub Pages not updating**: 
   - Check GitHub Pages settings
   - Wait a few minutes for changes to propagate
   - Clear browser cache

### Getting Help
- Check GitHub Pages status in repository settings
- Review deployment script output for errors
- Ensure repository is public (required for free GitHub Pages)
