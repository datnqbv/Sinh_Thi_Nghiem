const fs = require('fs');

const content = fs.readFileSync('modules/Lop_12/SH12-B01-A01-M03/SH12-B01-A01-M03.html', 'utf8');

// 1. Tag balance check
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const stack = [];
const tagRegex = /<\/?([a-zA-Z0-9_-]+)(?:\s+[^>]*)?>/g;
let match;
let lineNum = 1;
let lastIndex = 0;

while ((match = tagRegex.exec(content)) !== null) {
  const fullTag = match[0];
  const tagName = match[1].toLowerCase();
  
  // Count lines
  const textBefore = content.substring(lastIndex, match.index);
  lineNum += (textBefore.match(/\n/g) || []).length;
  lastIndex = match.index;

  if (voidTags.has(tagName) || fullTag.endsWith('/>')) {
    continue;
  }

  if (fullTag.startsWith('</')) {
    // Closing tag
    if (stack.length === 0) {
      console.log(`ERROR: Unexpected closing tag </${tagName}> at line ${lineNum}`);
    } else {
      const top = stack.pop();
      if (top.name !== tagName) {
        console.log(`ERROR: Tag mismatch at line ${lineNum}: expected </${top.name}> (from line ${top.line}), but found </${tagName}>`);
      }
    }
  } else {
    // Opening tag
    if (tagName === 'script') {
      // Skip until </script>
      const endScriptIdx = content.indexOf('</script>', match.index);
      if (endScriptIdx !== -1) {
        tagRegex.lastIndex = endScriptIdx + 9;
        lastIndex = endScriptIdx + 9;
      }
    } else if (tagName === 'style') {
      const endStyleIdx = content.indexOf('</style>', match.index);
      if (endStyleIdx !== -1) {
        tagRegex.lastIndex = endStyleIdx + 8;
        lastIndex = endStyleIdx + 8;
      }
    } else {
      stack.push({ name: tagName, line: lineNum });
    }
  }
}

if (stack.length > 0) {
  console.log('UNCLOSED TAGS:');
  stack.forEach(t => console.log(`  <${t.name}> opened at line ${t.line}`));
} else {
  console.log('ALL TAGS PROPERLY BALANCED!');
}
