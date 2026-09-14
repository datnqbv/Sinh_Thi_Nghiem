const fs = require('fs');

const files = [
  'modules/Lop_11/SH11_M01_B01/Sh11-B01-M01_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M02/SH11_B01_M02_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M03/SH11_B01_M03_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M04/SH11_B01_M04_Kichban.md',
  'modules/Lop_11/SH11_B01_M05/SH11_B01_M05_KichBan.md',
  'modules/Lop_11/SH11_B01_M06/SH11_B01_M06_KichBan.md',
  'modules/Lop_12/SH12-B01-M01-A01/SH12-B01-M01-A01_Kich_Ban.md',
  'modules/Lop_12/SH12-B01-A01-M02/Sh12-B01-M02_Kichban.md',
  'modules/Lop_12/SH12-B01-A01-M03/SH12-B01-A01-M03_Kich_Ban.md'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('------------------------------------------------------------');
  console.log('FILE:', f);
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('HS_VIEW')) {
      console.log(`[Line ${i+1}] HS_VIEW block:`);
      for (let j = i; j < Math.min(lines.length, i + 15); j++) {
        if (lines[j].includes('DEV_ONLY') || lines[j].includes('ASSET')) break;
        console.log(`  L${j+1}: ${lines[j].trim()}`);
      }
    }
  });
});
