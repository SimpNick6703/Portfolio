# Quick Configuration Template

This file shows exactly what to change for your portfolio. Copy these values and update the files mentioned.

## 1. Update Your GitHub Username

**File**: `frontend/src/api/githubService.js`  
**Line**: 6  
**Change**:
```javascript
const USERNAME = 'YourGitHubUsername'; // ← Put your GitHub username here
```

## 2. Update Your Portfolio URL

**File**: `frontend/package.json`  
**Line**: 5  
**Change**:
```json
"homepage": "https://YourGitHubUsername.github.io/Portfolio", // ← Put your GitHub username here
```

## 3. GitHub Pages Configuration

**Location**: GitHub Repository Settings → Pages  
**Setting**: Source → **"GitHub Actions"**

## 4. That's All!

After making these changes:
1. Commit to your repository (GitHub web interface or git)
2. GitHub will automatically build and deploy
3. Your portfolio will be live at: `https://YourGitHubUsername.github.io/Portfolio`

## Example Configuration

If your GitHub username is `johnsmith`, then:
- `githubService.js`: `const USERNAME = 'johnsmith';`
- `package.json`: `"homepage": "https://johnsmith.github.io/Portfolio"`
- Portfolio URL: `https://johnsmith.github.io/Portfolio`

## Need Help?

- **Build fails**: Check the "Actions" tab in your repository for error details
- **Portfolio doesn't load**: Wait 5-10 minutes, GitHub Pages takes time to activate  
- **No projects showing**: Make sure you have public repositories on GitHub
- **Detailed troubleshooting**: See `TROUBLESHOOTING.md` for complete debugging guide

## 🔧 If Build Keeps Failing

1. **Check the Actions tab** in your repository for error details
2. **Make sure repository is public** (required for free GitHub Pages)
3. **Verify GitHub Pages source is set to "GitHub Actions"**
4. **Double-check your username spelling** in both configuration files
5. **See TROUBLESHOOTING.md** for detailed debugging steps
