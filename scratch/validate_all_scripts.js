const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

let totalErrors = 0;

allFiles.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const scriptMatches = html.match(/<script(?![^>]*type=["']application\/json["'])[^>]*>([\s\S]*?)<\/script>/gi);

  if (!scriptMatches) return;

  scriptMatches.forEach((sTag, idx) => {
    const code = sTag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
      console.log(`[PASS] ${file} - script #${idx + 1}`);
    } catch (err) {
      console.error(`[FAIL] ${file} - script #${idx + 1}:`, err.message);
      totalErrors++;
    }
  });
});

console.log(`\nSyntax validation completed with ${totalErrors} error(s).`);
process.exit(totalErrors > 0 ? 1 : 0);
