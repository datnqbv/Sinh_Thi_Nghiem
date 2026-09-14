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

const allFiles = [
  ...checkDir('modules/Lop_10'),
  ...checkDir('modules/Lop_11'),
  ...checkDir('modules/Lop_12')
];

allFiles.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  console.log('================================================================');
  console.log('FILE:', file);
  
  // Find nav markup
  const navMatches = c.match(/<(nav|div)[^>]*class=["'][^"']*(?:progress|step-nav|stepper|moduleNav|nav-tabs|stage-nav)[^"']*["'][^>]*>/gi);
  console.log('Nav tags in HTML:', navMatches);

  // Check if those classes have display: flex or display: grid in CSS
  if (navMatches) {
    navMatches.forEach(tag => {
      const classAttr = (tag.match(/class=["']([^"']+)["']/i) || [])[1] || '';
      const classes = classAttr.split(/\s+/);
      classes.forEach(cls => {
        const regex = new RegExp('\\.' + cls + '[^{]*\\{([^}]+)\\}', 'g');
        let m;
        let foundCSS = false;
        while ((m = regex.exec(c)) !== null) {
          foundCSS = true;
          const body = m[1].replace(/\s+/g, ' ');
          const isRow = body.includes('grid-template-columns') || body.includes('display: flex') || body.includes('display:grid');
          console.log(`  CSS .${cls} -> isRow: ${isRow} -> ${body.slice(0, 100)}`);
        }
        if (!foundCSS) {
          console.log(`  CSS .${cls} -> NOT DEFINED IN CSS! (POTENTIAL VERTICAL BUG)`);
        }
      });
    });
  }
});
