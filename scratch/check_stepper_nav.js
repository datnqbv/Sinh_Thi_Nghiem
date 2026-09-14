const fs = require('fs');

const files = [
  'modules/Lop_11/SH11_B01_M02/SH11_B01_M02.html',
  'modules/Lop_11/SH11_B01_M03/SH11_B01_M03.html',
  'modules/Lop_11/SH11_B01_M04/SH11_B01_M04.html',
  'modules/Lop_11/SH11_B01_M05/SH11_B01_M05.html',
  'modules/Lop_12/SH12-B01-M01-A01/SH12-B01-M01-A01.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  // Check if stepper-nav is in HTML markup
  const inHTML = /class=["'][^"']*stepper-nav[^"']*["']/.test(c);
  // Check if progress-nav is in HTML markup
  const progInHTML = /class=["'][^"']*progress-nav[^"']*["']/.test(c);
  console.log(f);
  console.log('  stepper-nav in HTML:', inHTML, '| progress-nav in HTML:', progInHTML);
});
