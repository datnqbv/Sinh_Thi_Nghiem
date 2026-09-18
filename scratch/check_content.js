const fs = require('fs');
const html = fs.readFileSync('modules/Lop_10/SH10_B07_M02/SH10_B07_M02.html', 'utf8');

const s4Idx = html.indexOf('id="stage-4"');
console.log('--- Stage 4 Image and Buttons ---');
console.log(html.substring(s4Idx, s4Idx + 2200));
