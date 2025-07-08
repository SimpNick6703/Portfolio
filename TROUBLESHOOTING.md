# GitHub Actions Troubleshooting Guide

If your GitHub Actions build is failing, follow these steps to diagnose and fix the issue.

## ✅ Quick Checklist

1. **Repository is public** (required for free GitHub Pages)
2. **GitHub Pages source is set to "GitHub Actions"** in Settings → Pages
3. **All required files are present** in the repository
4. **Configuration files have been updated** with your GitHub username

## 🔍 Common Build Failures

### "Some specified paths were not resolved, unable to cache dependencies"

**Cause**: Missing package-lock.json or dependency caching issues  
**Solution**: Fixed in latest workflow - now uses simple dependency installation

### "Module not found" or "Cannot resolve module"

**Cause**: Missing dependencies or incorrect file paths  
**Solutions**:
1. Check that all files are committed to the repository
2. Verify import paths in React components are correct
3. Make sure `frontend/src/index.js` exists

### "Build failed" or "npm run build failed"

**Cause**: JavaScript/React errors in the code  
**Solutions**:
1. Check the build logs for specific error messages
2. Look for syntax errors in `.jsx` files
3. Verify all imports are correct

## 🛠️ How to Check Build Status

1. **Go to your repository on GitHub**
2. **Click the "Actions" tab**
3. **Look for the latest workflow run**
4. **Click on it to see detailed logs**

### Build Status Indicators:
- ✅ **Green checkmark**: Build successful
- ❌ **Red X**: Build failed - click to see error details
- 🟡 **Yellow circle**: Build in progress

## 🔧 How to Fix Common Issues

### Step 1: Check Required Files

Make sure these files exist in your repository:

```
Portfolio/
├── .github/workflows/deploy.yml
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.jsx
│       └── (other files...)
```

### Step 2: Verify Configuration

**File**: `frontend/src/api/githubService.js`
```javascript
const USERNAME = 'YourActualGitHubUsername'; // Must match your GitHub username exactly
```

**File**: `frontend/package.json`
```json
"homepage": "https://YourActualGitHubUsername.github.io/Portfolio"
```

### Step 3: Re-trigger Build

After making fixes:
1. Commit your changes
2. Push to the main branch
3. GitHub Actions will automatically start a new build

## 🚨 Emergency Reset

If nothing works, try this complete reset:

1. **Delete the repository** (make sure you have backups of any custom changes)
2. **Fork the original repository again**
3. **Start over with configuration**
4. **Make sure to only change the 2 required configuration values**

## 📧 Getting Help

If you're still having issues:

1. **Check the GitHub Actions logs** for the specific error message
2. **Copy the error message** and search for solutions online
3. **Make sure you followed the setup guide exactly**
4. **Verify your GitHub username is spelled correctly** in both configuration files

## 💡 Prevention Tips

- **Test locally** if possible before committing (though not required)
- **Make small changes** and commit frequently to isolate issues
- **Double-check usernames** and URLs for typos
- **Keep the repository public** during setup
