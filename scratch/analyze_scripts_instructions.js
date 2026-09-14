const fs = require('fs');

const scriptFiles = [
  'modules/Lop_11/SH11_M01_B01/Sh11-B01-M01_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M02/SH11_B01_M02_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M03/SH11_B01_M03_Kich_Ban.md',
  'modules/Lop_11/SH11_B01_M04/SH11_B01_M04_Kichban.md',
  'modules/Lop_11/SH11_B01_M05/SH11_B01_M05_KichBan.md',
  'modules/Lop_11/SH11_B01_M06/SH11_B01_M06_KichBan.md',
  'modules/Lop_12/SH12-B01-M01-A01/SH12-B01-M01-A01_Kich_Ban.md',
  'modules/Lop_12/SH12-B01-A01-M02/Sh12-B01-M02_Kichban.md',
  'modules/Lop_12/SH12-B01-A01-M03/SH12-B01-A01-M03_Kich_Ban.md',
  'modules/Lop_10/SH10_B01_M02/SH10_B01_M02_KICH_BAN_NOI_DUNG.txt',
  'modules/Lop_10/SH10_B05_M01/SH10_B05_M01_KICH_BAN_NOI_DUNG.txt',
  'modules/Lop_10/SH10_B05_M02/FILE_1_SH10_B05_M02_KICH_BAN_HTML_v3.txt'
];

scriptFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log('================================================================');
  console.log('FILE:', file);

  const lines = content.split('\n');
  let currentStage = '';
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('ST0') || trimmed.startsWith('ST1') || trimmed.startsWith('===') || trimmed.startsWith('## ST')) {
      currentStage = trimmed.replace(/=/g, '').trim();
    }
    const lower = trimmed.toLowerCase();
    if (lower.startsWith('lời dẫn') || lower.startsWith('hướng dẫn') || lower.startsWith('thao tác:') || lower.startsWith('- hướng dẫn:')) {
      console.log('  [' + currentStage + '] L' + (idx + 1) + ': ' + trimmed);
    }
  });
});
