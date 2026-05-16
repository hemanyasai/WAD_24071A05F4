const fs = require('fs');
const path = 'C:/Users/hemanya/.gemini/antigravity/brain/639384a7-fc4a-4feb-8208-3fc9ecece1f2/.system_generated/logs/overview.txt';
const content = fs.readFileSync(path, 'utf8');
const regex = /data:image\/[a-zA-Z]+;base64,[A-Za-z0-9+\/]+=*/g;
const matches = content.match(regex);
if (matches) {
  let imagesCode = '';
  matches.forEach((m, i) => {
    imagesCode += `export const img${i+1} = '${m}';\n`;
  });
  fs.writeFileSync('c:/External/Question 1/src/images.js', imagesCode);
  console.log('Saved ' + matches.length + ' images.');
} else {
  console.log('No images found.');
}
