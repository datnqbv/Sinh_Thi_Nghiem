const fs = require('fs');

const files = [
  'modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html',
  'modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html',
  'modules/Lop_10/SH10_B02_M03/SH10_B02_M03.html',
  'modules/Lop_10/SH10_B05_M01/SH10_B05_M01.html',
  'modules/Lop_10/SH10_B05_M02/SH10_B05_M02.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('--- ' + f + ' ---');
  const modalMatch = c.match(/<div[^>]*(id=["'](?:completionModal|congratsModal)["']|class=["'][^"']*(?:congrats-overlay|modal-backdrop)[^"']*["'])[^>]*>/gi);
  console.log('Modals found:', modalMatch);
});
