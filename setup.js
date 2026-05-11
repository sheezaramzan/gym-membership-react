const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Copy images from original project
const src = path.join(__dirname, '..', 'project Gym membership', 'sources');
const dst = path.join(__dirname, 'public', 'images');
fs.mkdirSync(dst, { recursive: true });
if (fs.existsSync(src)) {
  fs.readdirSync(src).filter(f => f.endsWith('.jpg')).forEach(f => {
    fs.copyFileSync(path.join(src, f), path.join(dst, f));
    console.log('Copied:', f);
  });
  console.log('Images copied to public/images/');
} else {
  console.warn('Sources folder not found at:', src);
}

// Install dependencies
console.log('\nInstalling dependencies...');
execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
console.log('\nDone! Run: npm run dev');
