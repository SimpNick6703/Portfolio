const fs = require('fs');
const path = require('path');

// Paths
const buildDir = path.join(__dirname, '..', 'build');
const docsDir = path.join(__dirname, '..', '..', 'docs');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Function to remove directory recursively
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

try {
  console.log('Moving build files to docs directory...');
  
  // Remove existing docs directory
  removeDir(docsDir);
  
  // Copy build to docs
  copyDir(buildDir, docsDir);
  
  console.log('Successfully moved build files to docs directory!');
  console.log('You can now commit the changes and configure GitHub Pages to use /docs folder.');
} catch (error) {
  console.error('Error moving files:', error);
  process.exit(1);
}
