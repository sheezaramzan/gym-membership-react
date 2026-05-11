const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../project Gym membership/sources');
const dst = path.resolve(__dirname, 'public/images');

fs.mkdirSync(dst, { recursive: true });

const files = fs.readdirSync(src).filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
files.forEach(f => {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
  console.log('Copied:', f);
});

console.log('\nDone! ' + files.length + ' image(s) copied to public/images/');
