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
  const c = fs.readFileSync(f, 'utf8');
  console.log('----------------------------------------------------');
  console.log(f);
  console.log('has closeCompletionModal:', c.includes('closeCompletionModal'));
  console.log('has launchConfetti:', c.includes('launchConfetti'));
  console.log('has completionModal in HTML:', c.includes('id="completionModal"'));
  console.log('has .congrats-overlay in CSS:', c.includes('.congrats-overlay'));
  console.log('has .hidden { display: none !important; }:', c.includes('.hidden { display: none !important; }') || c.includes('.hidden{display:none!important}'));
  console.log('has .congrats-overlay.hidden:', c.includes('.congrats-overlay.hidden'));
});
