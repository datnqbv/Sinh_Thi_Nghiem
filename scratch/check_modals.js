const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const files = [];
  function walk(d) {
    fs.readdirSync(d).forEach(f => {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith('.html')) files.push(p);
    });
  }
  walk(dir);
  return files;
}

const files = [
  ...checkDir('modules/Lop_10'),
  ...checkDir('modules/Lop_11'),
  ...checkDir('modules/Lop_12')
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const modalMatch = content.match(/<div[^>]*id=["']completionModal["'][^>]*>/i);
  const overlayDef = content.match(/\.congrats-overlay\s*\{[^}]+\}/);
  const overlayHiddenDef = content.match(/\.congrats-overlay\.hidden\s*\{[^}]+\}/);
  const hiddenDef = content.match(/\.hidden\s*\{[^}]+\}/);
  
  console.log('--- ' + f + ' ---');
  console.log('Modal tag:', modalMatch ? modalMatch[0] : 'None');
  console.log('.hidden rule:', hiddenDef ? hiddenDef[0].replace(/\s+/g, ' ') : 'None');
  console.log('.congrats-overlay rule:', overlayDef ? overlayDef[0].replace(/\s+/g, ' ').slice(0, 80) : 'None');
  console.log('.congrats-overlay.hidden rule:', overlayHiddenDef ? overlayHiddenDef[0].replace(/\s+/g, ' ') : 'None');
});
