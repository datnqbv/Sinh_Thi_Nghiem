const fs = require('fs');
const html = fs.readFileSync('modules/Lop_10/SH10_B05_M02/SH10_B05_M02.html', 'utf8');

console.log('1. Has span in s01Step1A:', html.includes('<span>1A. Kết nối</span>'));
console.log('2. Has pl-slot-head in html:', html.includes('pl-slot-head'));
console.log('3. Has id="a16Svg":', html.includes('id="a16Svg"'));
console.log('4. Has common-ring-highlight in html:', html.includes('id="common-ring-highlight"'));
console.log('5. Has btnReset-s02 listener:', html.includes("getElementById('btnReset-s02')"));
console.log('6. Has btnReset-s03 listener:', html.includes("getElementById('btnReset-s03')"));
console.log('7. Has btnReset-s04 listener:', html.includes("getElementById('btnReset-s04')"));
console.log('8. Has btnReset-s05 listener:', html.includes("getElementById('btnReset-s05')"));
console.log('9. Has btnReset-s06 listener:', html.includes("getElementById('btnReset-s06')"));
