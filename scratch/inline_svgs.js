const fs = require('fs');

let html = fs.readFileSync('modules/Lop_10/SH10_B07_M03/SH10_B07_M03.html', 'utf8');
const svg1 = fs.readFileSync('modules/Lop_10/SH10_B07_M03/images/SH10-B07-M03-A02-eukaryote.svg', 'utf8').trim();
const svg2 = fs.readFileSync('modules/Lop_10/SH10_B07_M03/images/SH10-B07-M03-A04-mechanisms.svg', 'utf8').trim();

console.log('Original HTML size:', html.length);

const target1 = '<img src="images/SH10-B07-M03-A02-eukaryote.svg" alt="Hình đối chiếu nhân tế bào nhân thực có màng kép">';
const target2 = '<img src="images/SH10-B07-M03-A04-mechanisms.svg" alt="Sơ đồ 4 cơ chế kháng kháng sinh tiêu biểu ở vi khuẩn">';

if (!html.includes(target1)) {
  console.error('Target 1 not found!');
  process.exit(1);
}
if (!html.includes(target2)) {
  console.error('Target 2 not found!');
  process.exit(1);
}

html = html.replace(target1, svg1);
html = html.replace(target2, svg2);

fs.writeFileSync('modules/Lop_10/SH10_B07_M03/SH10_B07_M03.html', html, 'utf8');
console.log('Successfully inlined both SVGs! New HTML size:', html.length);
