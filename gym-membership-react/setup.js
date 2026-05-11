/**
 * Run this once with: node setup.js
 * It copies images and installs react-router-dom
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Copy images
const src = path.join(__dirname, '..', '..', 'project Gym membership', 'sources');
const dst = path.join(__dirname, 'public', 'images');
fs.mkdirSync(dst, { recursive: true });
if (fs.existsSync(src)) {
  fs.readdirSync(src).filter(f => f.endsWith('.jpg')).forEach(f => {
    fs.copyFileSync(path.join(src, f), path.join(dst, f));
    console.log('Copied', f);
  });
} else {
  console.log('Sources folder not found at:', src);
}

// 2. Install react-router-dom
console.log('\nInstalling react-router-dom...');
try {
  execSync('npm install react-router-dom', { cwd: __dirname, stdio: 'inherit' });
  console.log('react-router-dom installed!');
} catch(e) {
  console.error('npm install failed:', e.message);
}

console.log('\nSetup complete! Run: npm run dev');
