const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '../../project Gym membership/sources');
const dst = path.join(__dirname, 'public/images');
fs.mkdirSync(dst, { recursive: true });
fs.readdirSync(src).filter(f => f.endsWith('.jpg')).forEach(f => {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
  console.log('Copied', f);
});
console.log('All images copied!');
