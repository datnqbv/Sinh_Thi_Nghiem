const fs = require('fs');

const filePath = 'modules/Lop_10/SH10_B05_M02/SH10_B05_M02.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update CSS for .step-flow-bar and .step-indicator
const oldStepBarCss = `    /* Step Flow Indicator */
    .step-flow-bar {
      display:flex;
      align-items:center;
      gap:6px;
      margin-bottom:16px;
      background:var(--cream);
      padding:6px;
      border-radius:8px;
      border:1px solid var(--paper-line);
    }
    .step-indicator {
      flex:1;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:4px;
      padding:6px 8px;
      border-radius:6px;
      font-size:.74rem;
      font-weight:700;
      color:var(--ink-3);
      background:transparent;
      border:none;
      cursor:pointer;
      transition:all .18s ease;
      white-space:nowrap;
    }`;

const newStepBarCss = `    /* Step Flow Indicator */
    .step-flow-bar {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:4px;
      margin-bottom:16px;
      background:var(--cream);
      padding:4px;
      border-radius:8px;
      border:1px solid var(--paper-line);
      width:100%;
      box-sizing:border-box;
    }
    .step-indicator {
      min-width:0;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:3px;
      padding:6px 2px;
      border-radius:6px;
      font-size:.69rem;
      font-weight:700;
      color:var(--ink-3);
      background:transparent;
      border:none;
      cursor:pointer;
      transition:all .18s ease;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .step-indicator i {
      font-size:.82rem;
      flex-shrink:0;
    }
    .step-indicator span {
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }`;

if (content.includes(oldStepBarCss)) {
  content = content.replace(oldStepBarCss, newStepBarCss);
  console.log('1. Updated step-flow-bar CSS');
} else {
  console.log('1. step-flow-bar CSS already updated or not found');
}

// 2. Check if .pl-assembly-diagram CSS is present
if (!content.includes('.pl-assembly-diagram')) {
  const oldPlCss = `    /* Direct Manipulation: Phospholipid Builder (S04A) */
    .pl-assembly-board {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:12px;
      width:100%;
      max-width:440px;
      background:#fff;
      border:1px solid var(--paper-line);
      border-radius:12px;
      padding:16px;
    }
    .pl-part-slot {
      border:2px dashed var(--paper-line-2);
      border-radius:8px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:.8rem;
      font-weight:700;
      color:var(--ink-3);
      cursor:pointer;
      transition:all .2s ease;
      text-align:center;
      padding:8px;
    }
    .pl-part-slot.active-target {
      border-color:var(--accent);
      background:var(--accent-pale);
    }
    .pl-part-slot.bonded {
      border-style:solid;
      border-color:var(--correct);
      background:var(--correct-bg);
      color:var(--jade-text);
    }`;

  const newPlCss = `    /* Direct Manipulation: Phospholipid Builder (S04A) */
    .pl-assembly-board {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:12px;
      width:100%;
      max-width:480px;
      background:#fff;
      border:1px solid var(--paper-line);
      border-radius:12px;
      padding:16px;
      box-sizing:border-box;
    }
    .pl-assembly-diagram {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:10px;
      width:100%;
      margin:6px 0;
    }
    .pl-slot-head {
      min-width:210px;
      min-height:50px;
      padding:8px 16px;
      border-radius:26px;
      border:2px dashed var(--paper-line-2);
      background:var(--cream);
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      font-size:.84rem;
      font-weight:700;
      color:var(--ink-3);
      cursor:pointer;
      transition:all .2s ease;
      text-align:center;
      line-height:1.35;
      box-sizing:border-box;
    }
    .pl-slot-glycerol {
      min-width:170px;
      min-height:40px;
      padding:6px 14px;
      border-radius:8px;
      background:var(--cream-2);
      border:1.5px solid var(--paper-line-2);
      display:flex;
      align-items:center;
      justify-content:center;
      gap:6px;
      font-size:.82rem;
      font-weight:800;
      color:var(--jade-dark);
      box-sizing:border-box;
    }
    .pl-tails-row {
      display:flex;
      gap:12px;
      width:100%;
      justify-content:center;
    }
    .pl-slot-tail {
      flex:0 1 155px;
      min-height:68px;
      padding:8px 10px;
      border-radius:8px;
      border:2px dashed var(--paper-line-2);
      background:var(--cream);
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:4px;
      font-size:.80rem;
      font-weight:700;
      color:var(--ink-3);
      cursor:pointer;
      transition:all .2s ease;
      text-align:center;
      line-height:1.3;
      box-sizing:border-box;
    }
    .pl-slot-head.active-target,
    .pl-slot-tail.active-target {
      border-color:var(--accent);
      background:var(--accent-pale);
      color:var(--accent-text);
      box-shadow:0 0 8px rgba(232,162,74,.35);
    }
    .pl-slot-head.bonded,
    .pl-slot-tail.bonded {
      border-style:solid;
      border-color:var(--correct);
      background:var(--correct-bg);
      color:var(--jade-text);
    }

    @keyframes shake {
      0%, 100% { transform:translateX(0); }
      20%, 60% { transform:translateX(-6px); }
      40%, 80% { transform:translateX(6px); }
    }
    .shake { animation:shake .45s ease; }`;

  if (content.includes(oldPlCss)) {
    content = content.replace(oldPlCss, newPlCss);
    console.log('2. Updated Phospholipid Builder CSS');
  }
} else {
  console.log('2. Phospholipid Builder CSS already has .pl-assembly-diagram');
}

// 3. Update HTML for all 6 step-flow-bar
// S01
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s01Step1A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s01Step1B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s01Step1C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s01Step1D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s01Step1A"><i class="ti ti-link"></i><span>1A. Kết nối</span></button>
          <button class="step-indicator" id="s01Step1B"><i class="ti ti-eye"></i><span>1B. Quan sát</span></button>
          <button class="step-indicator" id="s01Step1C"><i class="ti ti-flask-2"></i><span>1C. Nhỏ dầu</span></button>
          <button class="step-indicator" id="s01Step1D"><i class="ti ti-help-circle"></i><span>1D. Cốt lõi</span></button>
        </div>`
);

// S02
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s02Step2A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s02Step2B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s02Step2C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s02Step2D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s02Step2A"><i class="ti ti-puzzle"></i><span>2A. Ghép mạch</span></button>
          <button class="step-indicator" id="s02Step2B"><i class="ti ti-dna"></i><span>2B. No / K.no</span></button>
          <button class="step-indicator" id="s02Step2C"><i class="ti ti-temperature"></i><span>2C. Dầu & Mỡ</span></button>
          <button class="step-indicator" id="s02Step2D"><i class="ti ti-meat"></i><span>2D. Thực phẩm</span></button>
        </div>`
);

// S03
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s03Step3A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s03Step3B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s03Step3C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s03Step3D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s03Step3A"><i class="ti ti-battery-charging"></i><span>3A. Dự trữ</span></button>
          <button class="step-indicator" id="s03Step3B"><i class="ti ti-shield"></i><span>3B. Cách nhiệt</span></button>
          <button class="step-indicator" id="s03Step3C"><i class="ti ti-pill"></i><span>3C. Vitamin</span></button>
          <button class="step-indicator" id="s03Step3D"><i class="ti ti-help"></i><span>3D. Lạc đà</span></button>
        </div>`
);

// S04
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s04Step4A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s04Step4B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s04Step4C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s04Step4D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s04Step4A"><i class="ti ti-puzzle"></i><span>4A. Cấu tạo</span></button>
          <button class="step-indicator" id="s04Step4B"><i class="ti ti-arrows-shuffle"></i><span>4B. Dự đoán</span></button>
          <button class="step-indicator" id="s04Step4C"><i class="ti ti-layers-subtract"></i><span>4C. Lớp kép</span></button>
          <button class="step-indicator" id="s04Step4D"><i class="ti ti-plug"></i><span>4D. Cầu nối</span></button>
        </div>`
);

// S05
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s05Step5A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s05Step5B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s05Step5C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s05Step5D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s05Step5A"><i class="ti ti-hexagon"></i><span>5A. Khung 4 vòng</span></button>
          <button class="step-indicator" id="s05Step5B"><i class="ti ti-route"></i><span>5B. Cholesterol</span></button>
          <button class="step-indicator" id="s05Step5C"><i class="ti ti-gender-intergender"></i><span>5C. Hormone</span></button>
          <button class="step-indicator" id="s05Step5D"><i class="ti ti-leaf"></i><span>5D. Sáp & Khác</span></button>
        </div>`
);

// S06
content = content.replace(
  /<div class="step-flow-bar">\s*<button class="step-indicator active" id="s06Step6A">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s06Step6B">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s06Step6C">[\s\S]*?<\/button>\s*<button class="step-indicator" id="s06Step6D">[\s\S]*?<\/button>\s*<\/div>/,
  `<div class="step-flow-bar">
          <button class="step-indicator active" id="s06Step6A"><i class="ti ti-vector-bezier-2"></i><span>6A. Ghép 3 cột</span></button>
          <button class="step-indicator" id="s06Step6B"><i class="ti ti-checkbox"></i><span>6B. Câu hỏi</span></button>
          <button class="step-indicator" id="s06Step6C"><i class="ti ti-salad"></i><span>6C. Dinh dưỡng</span></button>
          <button class="step-indicator" id="s06Step6D"><i class="ti ti-arrow-forward"></i><span>6D. Sang M03</span></button>
        </div>`
);
console.log('3. Updated all 6 step-flow-bar in HTML');

// 4. Update Visual 5A HTML to Inline SVG
const oldVisual5A = `          <!-- Visual 5A & 5C: Bộ ba steroid -->
          <div id="s05Visual5A" class="visual-pane" style="width:100%;text-align:center;">
            <div style="display:flex;gap:10px;justify-content:center;margin-bottom:8px;">
              <button class="btn btn-outline btn-sm" id="btnHighlightRings" style="padding:4px 10px;font-size:.76rem;">
                <i class="ti ti-sparkles"></i> Làm sáng khung 4 vòng carbon chung
              </button>
            </div>
            <object type="image/svg+xml" data="images/SH10-B05-M02-A16.svg" class="visual-media" id="a16SvgObj"></object>
            <div id="steroidNamesRow" class="hidden" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:8px;font-size:.82rem;font-weight:700;color:var(--jade-dark);">
              <span>Cholesterol</span>
              <span>Testosterone</span>
              <span>Estradiol (Estrogen)</span>
            </div>
          </div>`;

const newVisual5A = `          <!-- Visual 5A & 5C: Bộ ba steroid -->
          <div id="s05Visual5A" class="visual-pane" style="width:100%;text-align:center;">
            <div style="display:flex;gap:10px;justify-content:center;margin-bottom:8px;">
              <button class="btn btn-outline btn-sm" id="btnHighlightRings" style="padding:5px 12px;font-size:.8rem;font-weight:700;">
                <i class="ti ti-sparkles"></i> Làm sáng khung 4 vòng carbon chung
              </button>
            </div>
            <div style="width:100%;max-width:100%;overflow:hidden;border-radius:10px;border:1px solid var(--paper-line);background:#fff;">
              <svg id="a16Svg" viewBox="0 0 1500 620" class="visual-media" style="width:100%;height:auto;display:block;" role="img" aria-labelledby="a16Title a16Desc">
                <title id="a16Title">Bộ ba steroid</title>
                <desc id="a16Desc">Cholesterol, testosterone và estradiol đặt ngang hàng, cùng hệ nét và cùng khung bốn vòng carbon nhưng có các nhóm chức và nhánh khác nhau.</desc>
                <defs>
                  <g id="inline-steroid-rings" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linejoin="round" stroke-linecap="round">
                    <path d="M0 0 70-40 140 0 140 82 70 122 0 82Z"/>
                    <path d="M140 0 210-40 280 0 280 82 210 122 140 82Z"/>
                    <path d="M280 0 350-40 420 0 420 82 350 122 280 82Z"/>
                    <path d="M420 0 478-28 526 20 505 86 420 82Z"/>
                  </g>
                </defs>
                <g fill="#FFFFFF" stroke="#D6CCB6" stroke-width="4">
                  <rect x="25" y="25" width="450" height="570" rx="18"/>
                  <rect x="525" y="25" width="450" height="570" rx="18"/>
                  <rect x="1025" y="25" width="450" height="570" rx="18"/>
                </g>
                <g id="inline-cholesterol" transform="translate(90 260) scale(.58)">
                  <use href="#inline-steroid-rings"/>
                  <path d="M0 0-48-42" fill="none" stroke="#1A1A1A" stroke-width="7"/>
                  <text x="-82" y="-50" font-family="'Be Vietnam Pro',system-ui,sans-serif" font-size="36" font-weight="700">HO</text>
                  <path d="M505 86 535 125 565 100 595 135 625 110 635 80M625 110 635 140" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M140 82 205 120M280 0 325-55" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                </g>
                <g id="inline-testosterone" transform="translate(590 260) scale(.58)">
                  <use href="#inline-steroid-rings"/>
                  <path d="M0 0-45-38M5 8-40-30" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                  <text x="-68" y="-40" font-family="'Be Vietnam Pro',system-ui,sans-serif" font-size="36" font-weight="700">O</text>
                  <path d="M505 86 548 125" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                  <text x="575" y="155" font-family="'Be Vietnam Pro',system-ui,sans-serif" font-size="36" font-weight="700">OH</text>
                  <path d="M140 82 195 124M280 0 322-52" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                </g>
                <g id="inline-estradiol" transform="translate(1090 260) scale(.58)">
                  <use href="#inline-steroid-rings"/>
                  <path d="M0 0-48-42" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                  <text x="-82" y="-50" font-family="'Be Vietnam Pro',system-ui,sans-serif" font-size="36" font-weight="700">HO</text>
                  <path d="M505 86 548 125" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                  <text x="575" y="155" font-family="'Be Vietnam Pro',system-ui,sans-serif" font-size="36" font-weight="700">OH</text>
                  <path d="M6 14 70-24M74-31 134 4M5 68 70 106M75 113 134 78" fill="none" stroke="#1A1A1A" stroke-width="4"/>
                  <path d="M280 0 322-52" fill="none" stroke="#1A1A1A" stroke-width="7" stroke-linecap="round"/>
                </g>
                <g id="common-ring-highlight" opacity="0" fill="#F7E7CD" fill-opacity=".35" stroke="#CE8A33" stroke-width="6" stroke-dasharray="12 10" style="transition:opacity .3s ease;">
                  <rect x="70" y="205" width="345" height="160" rx="24"/>
                  <rect x="570" y="205" width="345" height="160" rx="24"/>
                  <rect x="1070" y="205" width="345" height="160" rx="24"/>
                </g>
              </svg>
            </div>
            <div id="steroidNamesRow" class="hidden" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:8px;font-size:.84rem;font-weight:700;color:var(--jade-dark);">
              <span>Cholesterol</span>
              <span>Testosterone</span>
              <span>Estradiol (Estrogen)</span>
            </div>
          </div>`;

if (content.includes(oldVisual5A)) {
  content = content.replace(oldVisual5A, newVisual5A);
  console.log('4. Updated Visual 5A to Inline SVG');
} else {
  console.log('4. Visual 5A already updated or old string not found');
}

// 5. Add btnReset-s02 listener if missing
if (!content.includes("getElementById('btnReset-s02')")) {
  const s02Prev = `  document.getElementById('btnPrev-s02').addEventListener('click', () => showStage(0));
  btnNextS02.addEventListener('click', () => showStage(2));`;

  const s02ResetCode = `  document.getElementById('btnPrev-s02').addEventListener('click', () => showStage(0));
  btnNextS02.addEventListener('click', () => showStage(2));

  document.getElementById('btnReset-s02').addEventListener('click', () => {
    state.s02_sub = 0;
    state.s02_slots = { 1: null, 2: null, 3: null };
    state.s02_selected_acid = null;
    state.s02_q1_done = false;
    state.s02_chain_selected = null;
    state.s02_q2_done = false;
    state.s02_q3_done = false;
    state.s02_food_selected = null;
    state.s02_food_classified = 0;

    branchSlots.forEach(s => {
      s.className = 'branch-slot';
      const slotNum = s.getAttribute('data-slot');
      s.innerHTML = \`<i class="ti ti-circle-dashed"></i> Vị trí \${slotNum}: Bấm để gắn acid béo\`;
    });
    faChips.forEach(c => { c.className = 'fa-chip'; });
    a06RevealBox.classList.add('hidden');
    s02Q1Box.classList.add('hidden');
    btnNext2Ato2B.classList.add('hidden');

    const tagNo = document.getElementById('tagNo');
    const tagKhongNo = document.getElementById('tagKhongNo');
    if (tagNo) tagNo.classList.add('hidden');
    if (tagKhongNo) tagKhongNo.classList.add('hidden');
    document.getElementById('s02Q2Box').classList.add('hidden');
    btnNext2Bto2C.classList.add('hidden');
    document.querySelectorAll('#s02Screen2B .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));

    btnNext2Cto2D.classList.add('hidden');
    document.querySelectorAll('#s02Screen2C .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));

    const pool = document.getElementById('foodPool');
    document.querySelectorAll('.food-chip').forEach(c => {
      c.className = 'food-chip';
      c.style.borderColor = '';
      c.style.background = '';
      c.style.color = '';
      pool.appendChild(c);
    });
    cntAnimal.textContent = '0';
    cntPlant.textContent = '0';

    s02StepBtns.forEach(p => p.classList.remove('done'));
    showS02Sub(0);
    s02Feedback.className = 'inline-feedback info';
    s02Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-compass"></i> Hướng dẫn</div><span>Bấm chọn một acid béo rồi bấm vào vị trí liên kết trên phân tử glycerol.</span>';
    reportHeight();
  });`;

  if (content.includes(s02Prev)) {
    content = content.replace(s02Prev, s02ResetCode);
    console.log('5. Added Stage 2 Reset handler');
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('ALL REMAINING UPDATES APPLIED SUCCESSFULLY!');
