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

const results = [];

allFiles.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  
  // Find nav element
  const navMatch = c.match(/<(nav|div)[^>]*class=["']([^"']*(?:progress|step-nav|stepper|moduleNav|nav-tabs|stage-nav)[^"']*)["'][^>]*>/i);
  if (!navMatch) {
    results.push({ file, status: 'NO_NAV', note: 'Không có thanh nav (có thể dùng controls row)' });
    return;
  }

  const tag = navMatch[1];
  const classes = navMatch[2].split(/\s+/).filter(Boolean);
  
  // Check CSS for these classes
  let hasRowRule = false;
  let hasVerticalMobileRule = false;
  let matchedRule = '';

  classes.forEach(cls => {
    const reg = new RegExp('\\.' + cls + '[^{]*\\{([^}]+)\\}', 'g');
    let m;
    while ((m = reg.exec(c)) !== null) {
      const b = m[1].replace(/\s+/g, ' ');
      matchedRule += `.${cls}: ${b} | `;
      if (b.includes('grid-template-columns: repeat') || b.includes('display: flex') || b.includes('display:flex') || b.includes('display: grid') || b.includes('display:grid')) {
        hasRowRule = true;
      }
      if (b.includes('grid-template-columns: 1fr') || b.includes('flex-direction: column')) {
        hasVerticalMobileRule = true;
      }
    }
  });

  results.push({
    file,
    tag: navMatch[0],
    classes,
    hasRowRule,
    hasVerticalMobileRule,
    matchedRule: matchedRule.slice(0, 120)
  });
});

console.log(JSON.stringify(results, null, 2));
