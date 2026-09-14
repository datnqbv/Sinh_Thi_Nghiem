const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('modules/Lop_12/SH12-B01-A01-M03/SH12-B01-A01-M03.html', 'utf8');

// 1. Check JS
const scriptMatches = content.match(/<script(?![^>]*type=["']application\/json["'])[^>]*>([\s\S]*?)<\/script>/gi) || [];
scriptMatches.forEach((s, idx) => {
  const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
  try {
    new vm.Script(code);
    console.log(`JS #${idx+1} valid!`);
  } catch (e) {
    console.error(`JS #${idx+1} ERROR:`, e.message);
  }
});

// 2. Check JSON
const jsonMatches = content.match(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
jsonMatches.forEach((s, idx) => {
  const jsonStr = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
  try {
    JSON.parse(jsonStr);
    console.log(`JSON #${idx+1} valid!`);
  } catch (e) {
    console.error(`JSON #${idx+1} ERROR:`, e.message);
  }
});

// 3. Check CSS for unclosed braces or syntax issues
const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  const css = styleMatch[1];
  let openBraces = 0;
  const lines = css.split('\n');
  lines.forEach((l, i) => {
    for (let char of l) {
      if (char === '{') openBraces++;
      if (char === '}') openBraces--;
    }
    if (openBraces < 0) {
      console.error(`CSS error: extra '}' around CSS line ${i+1}: ${l}`);
      openBraces = 0;
    }
  });
  console.log('CSS open braces remaining at end of style:', openBraces);
}

// 4. Check duplicate IDs
const idMatches = content.matchAll(/\bid=["']([^"']+)["']/g);
const ids = {};
for (const m of idMatches) {
  const id = m[1];
  if (ids[id]) {
    console.log('DUPLICATE ID FOUND:', id);
  }
  ids[id] = true;
}
