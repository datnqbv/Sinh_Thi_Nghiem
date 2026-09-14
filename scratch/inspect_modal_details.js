const fs = require('fs');

const files = [
  'modules/Lop_11/SH11_M01_B01/SH11_M01_B01.html',
  'modules/Lop_11/SH11_B01_M02/SH11_B01_M02.html',
  'modules/Lop_11/SH11_B01_M03/SH11_B01_M03.html',
  'modules/Lop_11/SH11_B01_M04/SH11_B01_M04.html',
  'modules/Lop_11/SH11_B01_M05/SH11_B01_M05.html',
  'modules/Lop_11/SH11_B01_M06/SH11_B01_M06.html',
  'modules/Lop_12/SH12-B01-M01-A01/SH12-B01-M01-A01.html',
  'modules/Lop_12/SH12-B01-A01-M02/SH12-B01-A01-M02.html',
  'modules/Lop_12/SH12-B01-A01-M03/SH12-B01-A01-M03.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('==============================');
  console.log('FILE:', f);
  
  // Find modal backdrop or congrats-overlay CSS
  const matches = content.match(/(\.congrats-overlay[^{]*\{[^}]+\}|\.modal-backdrop[^{]*\{[^}]+\}|#completionModal[^{]*\{[^}]+\})/g);
  console.log('MODAL CSS:');
  if (matches) {
    matches.forEach(m => console.log(m.replace(/\s+/g, ' ')));
  } else {
    console.log('None found');
  }
  
  // Find completionModal markup
  const modalHTML = content.match(/<div[^>]*id=["']completionModal["'][\s\S]*?<\/div>\s*<\/div>/i);
  console.log('MODAL HTML opening tag:');
  const tagMatch = content.match(/<div[^>]*id=["']completionModal["'][^>]*>/i);
  console.log(tagMatch ? tagMatch[0] : 'None');

  // Find showCompletion or modal show logic in JS
  const jsMatches = content.match(/(showCompletion|completionModal\.classList|\.congrats-overlay)[^;]{0,100}/g);
  console.log('JS mentions (first 3):', jsMatches ? jsMatches.slice(0, 3) : 'None');
});
