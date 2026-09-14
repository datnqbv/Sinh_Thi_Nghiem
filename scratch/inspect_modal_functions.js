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
  console.log('=== ' + f + ' ===');
  
  // modal block
  const modalMatch = c.match(/<div[^>]*id=["']completionModal["'][\s\S]*?<\/div>\s*<\/div>/i);
  if (modalMatch) {
    console.log('Modal HTML:', modalMatch[0].replace(/\s+/g, ' ').slice(0, 200));
  } else {
    console.log('No completionModal match');
  }

  // Find functions related to completion modal
  const funcs = c.match(/function\s+(showCompletion[a-zA-Z0-9_]*|closeCompletion[a-zA-Z0-9_]*|completeLesson|finishLesson)[^{]*\{[\s\S]{0,200}\}/g);
  if (funcs) {
    funcs.forEach(fn => console.log('Function:', fn.replace(/\s+/g, ' ')));
  } else {
    console.log('No specific completion functions found');
  }
});
