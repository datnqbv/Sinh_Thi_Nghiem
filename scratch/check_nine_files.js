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

files.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  console.log('--- ' + file + ' ---');
  
  // 1. Check modal tag
  const tag = c.match(/<div[^>]*id=["']completionModal["'][^>]*>/i);
  console.log('Tag:', tag ? tag[0] : 'MISSING');

  // 2. Check CSS rules
  const hasHiddenGlobal = c.includes('.hidden { display: none !important; }') || c.includes('.hidden{display:none!important}');
  const hasHiddenNoImp = c.includes('.hidden { display: none; }') || c.includes('.hidden{display:none}');
  const hasOverlayHidden = c.includes('.congrats-overlay.hidden') || c.includes('#completionModal.hidden');
  console.log('CSS .hidden !important:', hasHiddenGlobal, '| .hidden without !important:', hasHiddenNoImp, '| overlay.hidden:', hasOverlayHidden);

  // 3. Check JS
  const hasCloseFn = c.includes('function closeCompletionModal');
  const hasConfetti = c.includes('function launchConfetti');
  console.log('JS closeCompletionModal:', hasCloseFn, '| launchConfetti:', hasConfetti);
});
