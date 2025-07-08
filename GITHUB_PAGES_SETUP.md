# GitHub Pages Setup Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## 🔧 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Node.js**: Install Node.js (version 16 or higher)
3. **Git**: Install Git on your computer

## 📝 Step-by-Step Setup

### 1. Fork or Clone the Repository

If you forked this repository:
```bash
git clone https://github.com/YourUsername/Portfolio.git
cd Portfolio
```

### 2. Update Configuration

#### A. Update GitHub Username
Edit `frontend/src/api/githubService.js`:
```javascript
const USERNAME = 'SimpNick6703'; // Replace with your actual GitHub username
```

#### B. Update Homepage URL
Edit `frontend/package.json`:
```json
"homepage": "https://simpnick6703.github.io/Portfolio"
```

#### C. Update About Page (Optional)
Edit `frontend/src/pages/About.jsx` with your personal information.

### 3. Install Dependencies

```bash
cd frontend
npm install
```

### 4. Test Locally (Optional)

```bash
npm start
```

Visit http://localhost:3000 to test your portfolio locally.

### 5. Deploy to GitHub Pages

#### Option A: Deploy from Main Branch (Recommended)

1. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Go to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder

2. **Build and commit the built files**:
   ```bash
   cd frontend
   npm run build
   
   # Copy built files to root for GitHub Pages
   cp -r build/* ../
   cd ..
   
   # Commit the built files
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment**: GitHub will automatically serve your site from the main branch.

#### Option B: Deploy using gh-pages branch

```bash
cd frontend
npm run deploy
```

This will create a `gh-pages` branch with your built files. Then configure GitHub Pages to use the `gh-pages` branch.

#### Option C: Automatic Deployment with GitHub Actions

1. **Enable GitHub Actions**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Go to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push your changes**: GitHub Actions will automatically build and deploy your site.

### 6. Access Your Portfolio

Your portfolio will be available at:
```
https://simpnick.github.io/Portfolio
```

## 🔍 Verification Checklist

- [ ] Updated GitHub username in `githubService.js`
- [ ] Updated homepage URL in `package.json`
- [ ] Enabled GitHub Pages in repository settings
- [ ] Repository is public (required for free GitHub Pages)
- [ ] All changes are committed and pushed to GitHub

## 🛠️ Customization

### Adding Your Own Projects
The portfolio automatically fetches your public GitHub repositories. To feature specific projects:
1. Make sure your repositories have good descriptions
2. Add topics/tags to your repositories
3. Include README files with project details

### Styling Changes
- Edit files in `frontend/src/components/` and `frontend/src/pages/`
- Modify Tailwind CSS classes for styling
- Update `frontend/src/index.css` for global styles

### Adding New Pages
1. Create a new component in `frontend/src/pages/`
2. Add the route in `frontend/src/App.jsx`
3. Add navigation links in `frontend/src/components/Header.jsx`

## 🚨 Troubleshooting

### Common Issues

**Portfolio not loading:**
- Check if GitHub Pages is enabled in repository settings
- Verify the homepage URL in package.json matches your GitHub Pages URL
- Ensure the repository is public

**No repositories showing:**
- Verify the GitHub username in `githubService.js` is correct
- Make sure you have public repositories
- Check browser console for API errors

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in your modifications
- Try deleting `node_modules` and running `npm install` again

**Deployment fails:**
- Make sure you have the correct permissions
- Check if the repository name matches the homepage URL
- Verify GitHub Actions are enabled

### Getting Help

1. Check the GitHub Actions logs for build errors
2. Review browser console for runtime errors
3. Ensure all required files are present and correctly configured

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎉 Next Steps

After successful deployment:
1. Share your portfolio URL
2. Add the link to your GitHub profile
3. Include it in your resume and LinkedIn profile
4. Keep your repositories updated to showcase your latest work
