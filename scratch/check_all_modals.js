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

const allHtml = [
  ...checkDir('modules/Lop_10'),
  ...checkDir('modules/Lop_11'),
  ...checkDir('modules/Lop_12')
];

allHtml.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check completionModal or congrats-overlay
  const hasModal = content.includes('id="completionModal"') || content.includes('congrats-overlay');
  if (!hasModal) return;

  const modalMatch = content.match(/<div[^>]*id=["']completionModal["'][^>]*>/i);
  const classes = modalMatch ? (modalMatch[0].match(/class=["']([^"']+)["']/i) || [])[1] : '';
  
  // Check if .hidden has !important
  const hiddenImportant = content.match(/\.hidden\s*\{[^}]*display\s*:\s*none\s*!important/i);
  // Check if .congrats-overlay.hidden or similar exists
  const specificHidden = content.match(/(\.congrats-overlay|\.modal-backdrop|#completionModal)\.hidden\s*\{[^}]*display\s*:\s*none/i);
  
  console.log(file);
  console.log('  Tag:', modalMatch ? modalMatch[0] : 'None');
  console.log('  Classes on modal:', classes);
  console.log('  Has .hidden !important:', !!hiddenImportant);
  console.log('  Has specific .hidden rule:', !!specificHidden);
});
