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
  console.log('=== ' + f + ' ===');
  
  // Search for completion modal usage in JS
  const regex = /completionModal[\s\S]{0,200}/g;
  let match;
  let count = 0;
  while ((match = regex.exec(content)) !== null && count < 5) {
    console.log('Match ' + (++count) + ':', match[0].replace(/\n/g, ' '));
  }
});
