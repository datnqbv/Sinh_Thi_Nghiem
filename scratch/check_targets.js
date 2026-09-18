const fs = require('fs');
let html = fs.readFileSync('modules/Lop_10/SH10_B07_M02/SH10_B07_M02.html', 'utf8');

console.log('Original length:', html.length);

// 1. Check S01 actions row
const s01ActionsOld = `<div class="stage-actions">
      <button class="btn btn-primary" id="btnNextStage1" disabled><i class="ti ti-arrow-right"></i> TIẾP TỤC</button>
    </div>`;

const s01ActionsNew = `<div class="stage-actions">
      <button class="btn btn-secondary" id="btnStartStage1"><i class="ti ti-eye"></i> BẮT ĐẦU QUAN SÁT</button>
      <button class="btn btn-primary hidden" id="btnNextStage1"><i class="ti ti-arrow-right"></i> TIẾP TỤC</button>
    </div>`;

console.log('s01ActionsOld present:', html.includes(s01ActionsOld));

// 2. Check S04 img wrap
const s04ImgOld = `<div class="lps-img-wrap">
          <img src="images/SH10-B07-M02-A04.jpg" alt="Siêu cấu trúc màng ngoài Gram âm và phân tử LPS">
        </div>`;
console.log('s04ImgOld present:', html.includes(s04ImgOld));

// 3. Check S06 question
const s06QOld = `<p style="font-size:0.95rem; font-weight:700; color:var(--ink);">Cấu trúc nào là đích tác động trực tiếp của kháng sinh penicillin?</p>`;
console.log('s06QOld present:', html.includes(s06QOld));
