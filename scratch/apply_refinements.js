const fs = require('fs');

let html = fs.readFileSync('modules/Lop_10/SH10_B07_M02/SH10_B07_M02.html', 'utf8');

console.log('Original length:', html.length);

// 1. Add CSS rules before </style>
const cssAdditions = `
/* --- S04 Layer Highlight Indicator --- */
.lps-img-wrap {
  position: relative;
}
.layer-highlight-indicator {
  position: absolute;
  left: 0;
  right: 0;
  border: 2.5px solid var(--jade);
  background: rgba(60, 165, 122, 0.2);
  pointer-events: none;
  opacity: 0;
  border-radius: 4px;
  transition: top 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
  box-shadow: 0 0 14px rgba(60, 165, 122, 0.45);
}
.layer-highlight-indicator.active {
  opacity: 1;
}

/* --- S05 Membrane Layout with Companion Thumbnail Card --- */
.membrane-stage-layout {
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 16px;
  align-items: start;
}
@media (max-width: 900px) {
  .membrane-stage-layout {
    grid-template-columns: 1fr;
  }
}
.membrane-sim-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.membrane-companion-card {
  background: #FFFFFF;
  border: 1.5px solid var(--paper-line);
  border-radius: var(--radius);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: var(--shadow-sm);
}
.companion-header {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.companion-tag {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--gram-neg);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
}
.companion-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--ink);
}
.companion-thumb-wrap {
  width: 100%;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--paper-line-2);
}
.companion-thumb-wrap img {
  width: 100%;
  height: auto;
  display: block;
}
.companion-notes {
  font-size: 0.78rem;
  color: var(--ink-2);
  line-height: 1.45;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.companion-notes .note-row {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}
.companion-notes .note-row i {
  color: var(--jade);
  font-size: 0.9rem;
  margin-top: 2px;
  flex-shrink: 0;
}
`;

html = html.replace('</style>', cssAdditions + '\n</style>');

// 2. S01 Action buttons
const s01ActionsOld = `<div class="stage-actions">
      <button class="btn btn-primary" id="btnNextStage1" disabled><i class="ti ti-arrow-right"></i> TIẾP TỤC</button>
    </div>`;

const s01ActionsNew = `<div class="stage-actions">
      <button class="btn btn-secondary" id="btnStartStage1"><i class="ti ti-eye"></i> BẮT ĐẦU QUAN SÁT</button>
      <button class="btn btn-primary hidden" id="btnNextStage1"><i class="ti ti-arrow-right"></i> TIẾP TỤC</button>
    </div>`;

if (html.includes(s01ActionsOld)) {
  html = html.replace(s01ActionsOld, s01ActionsNew);
  console.log('Replaced S01 actions');
} else {
  console.error('Could not find S01 actions!');
}

// 3. S04 Indicator element inside lps-img-wrap
const s04ImgOld = `<div class="lps-img-wrap">
          <img src="images/SH10-B07-M02-A04.jpg" alt="Siêu cấu trúc màng ngoài Gram âm và phân tử LPS">
        </div>`;

const s04ImgNew = `<div class="lps-img-wrap" id="lpsImgWrap">
          <img src="images/SH10-B07-M02-A04.jpg" alt="Siêu cấu trúc màng ngoài Gram âm và phân tử LPS">
          <div class="layer-highlight-indicator" id="layerHighlightIndicator"></div>
        </div>`;

if (html.includes(s04ImgOld)) {
  html = html.replace(s04ImgOld, s04ImgNew);
  console.log('Added S04 layer highlight indicator');
} else {
  console.error('Could not find S04 img wrap!');
}

// 4. S05 Companion thumbnail layout
const s05SimArenaOld = `    <div class="membrane-sim-arena">
      <!-- SVG Bilayer Interactive Arena -->
      <div class="sim-svg-wrapper">
        <svg viewBox="0 0 800 280" id="membraneBilayerSvg">
          <!-- External Environment Background -->
          <rect x="0" y="0" width="800" height="90" fill="#F0F9FF"/>
          <text x="20" y="30" font-size="12" font-weight="700" fill="#0369A1" font-family="'Be Vietnam Pro', sans-serif">MÔI TRƯỜNG NGOÀI TẾ BÀO (Aqueous exterior)</text>

          <!-- Cytoplasm Background -->
          <rect x="0" y="190" width="800" height="90" fill="#FEFCE8"/>
          <text x="20" y="260" font-size="12" font-weight="700" fill="#854D0E" font-family="'Be Vietnam Pro', sans-serif">TẾ BÀO CHẤT (Cytoplasm)</text>

          <!-- Phospholipid Bilayer Graphic -->
          <g id="phospholipidHeadsTop">
            <!-- Row of Top Heads (Hydrophilic facing up) -->
            <!-- Dynamically generated or repeated circles with tails -->
          </g>
          <g id="phospholipidHeadsBottom">
            <!-- Row of Bottom Heads (Hydrophilic facing down) -->
          </g>

          <!-- Transmembrane Protein Channel in Center -->
          <g id="proteinChannelGroup" transform="translate(360, 75)">
            <rect x="0" y="0" width="32" height="130" rx="10" fill="#14B8A6" stroke="#0F766E" stroke-width="2"/>
            <rect x="48" y="0" width="32" height="130" rx="10" fill="#14B8A6" stroke="#0F766E" stroke-width="2"/>
            <text x="40" y="65" font-size="11" font-weight="800" fill="#042F2E" text-anchor="middle" font-family="'Be Vietnam Pro', sans-serif">KÊNH</text>
          </g>

          <!-- Animated Particle Element -->
          <g id="simParticleObj" style="transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transform: translate(400px, 40px); opacity: 0;">
            <circle cx="0" cy="0" r="12" id="simParticleCircle" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
            <text x="0" y="4" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle" id="simParticleLetter">P</text>
          </g>

          <!-- Transport Indicator Icon -->
          <g id="simResultIndicator" style="opacity:0; transition: opacity 0.3s;" transform="translate(400, 140)">
            <circle cx="0" cy="0" r="16" id="simIndicatorBg" fill="#10B981"/>
            <path id="simIndicatorIcon" d="M -6 0 L -2 4 L 6 -4" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      </div>

      <!-- Interactive Particles Control Strip -->
      <div class="particles-control-strip">
        <button class="particle-btn" data-particle="water">
          <span class="p-dot small-water"></span>
          <span>Hạt A: Phân tử nhỏ phù hợp kênh</span>
        </button>
        <button class="particle-btn" data-particle="sugar">
          <span class="p-dot large-sugar"></span>
          <span>Hạt B: Phân tử kích thước lớn</span>
        </button>
        <button class="particle-btn" data-particle="ion">
          <span class="p-dot charged-ion"></span>
          <span>Hạt C: Phân tử không tương thích</span>
        </button>
      </div>

      <div style="font-size:0.85rem; font-weight:700; color:var(--ink-2); text-align:center;" id="simStatusFeedback">
        Nhấn vào một loại hạt phân tử ở trên để quan sát phản ứng tương tác với màng tế bào.
      </div>

      <!-- Multiple Choice Question -->
      <div class="lps-qa-box" style="margin-top:10px;">`;

const s05SimArenaNew = `    <div class="membrane-sim-arena">
      <!-- 2-Column Responsive Layout: Simulation Arena & Companion Thumbnail Card -->
      <div class="membrane-stage-layout">
        <div class="membrane-sim-col">
          <!-- SVG Bilayer Interactive Arena -->
          <div class="sim-svg-wrapper">
            <svg viewBox="0 0 800 280" id="membraneBilayerSvg">
              <!-- External Environment Background -->
              <rect x="0" y="0" width="800" height="90" fill="#F0F9FF"/>
              <text x="20" y="30" font-size="12" font-weight="700" fill="#0369A1" font-family="'Be Vietnam Pro', sans-serif">MÔI TRƯỜNG NGOÀI TẾ BÀO (Aqueous exterior)</text>

              <!-- Cytoplasm Background -->
              <rect x="0" y="190" width="800" height="90" fill="#FEFCE8"/>
              <text x="20" y="260" font-size="12" font-weight="700" fill="#854D0E" font-family="'Be Vietnam Pro', sans-serif">TẾ BÀO CHẤT (Cytoplasm)</text>

              <!-- Phospholipid Bilayer Graphic -->
              <g id="phospholipidHeadsTop">
                <!-- Row of Top Heads (Hydrophilic facing up) -->
              </g>
              <g id="phospholipidHeadsBottom">
                <!-- Row of Bottom Heads (Hydrophilic facing down) -->
              </g>

              <!-- Transmembrane Protein Channel in Center -->
              <g id="proteinChannelGroup" transform="translate(360, 75)">
                <rect x="0" y="0" width="32" height="130" rx="10" fill="#14B8A6" stroke="#0F766E" stroke-width="2"/>
                <rect x="48" y="0" width="32" height="130" rx="10" fill="#14B8A6" stroke="#0F766E" stroke-width="2"/>
                <text x="40" y="65" font-size="11" font-weight="800" fill="#042F2E" text-anchor="middle" font-family="'Be Vietnam Pro', sans-serif">KÊNH</text>
              </g>

              <!-- Animated Particle Element -->
              <g id="simParticleObj" style="transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transform: translate(400px, 40px); opacity: 0;">
                <circle cx="0" cy="0" r="12" id="simParticleCircle" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
                <text x="0" y="4" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle" id="simParticleLetter">P</text>
              </g>

              <!-- Transport Indicator Icon -->
              <g id="simResultIndicator" style="opacity:0; transition: opacity 0.3s;" transform="translate(400, 140)">
                <circle cx="0" cy="0" r="16" id="simIndicatorBg" fill="#10B981"/>
                <path id="simIndicatorIcon" d="M -6 0 L -2 4 L 6 -4" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              </g>
            </svg>
          </div>

          <!-- Interactive Particles Control Strip -->
          <div class="particles-control-strip">
            <button class="particle-btn" data-particle="water">
              <span class="p-dot small-water"></span>
              <span>Hạt A: Phân tử nhỏ phù hợp kênh</span>
            </button>
            <button class="particle-btn" data-particle="sugar">
              <span class="p-dot large-sugar"></span>
              <span>Hạt B: Phân tử kích thước lớn</span>
            </button>
            <button class="particle-btn" data-particle="ion">
              <span class="p-dot charged-ion"></span>
              <span>Hạt C: Phân tử không tương thích</span>
            </button>
          </div>

          <div style="font-size:0.85rem; font-weight:700; color:var(--ink-2); text-align:center;" id="simStatusFeedback">
            Nhấn vào một loại hạt phân tử ở trên để quan sát phản ứng tương tác với màng tế bào.
          </div>
        </div>

        <!-- Companion Thumbnail Card: Màng ngoài Gram âm vs Màng tế bào per kịch bản line 96 -->
        <div class="membrane-companion-card">
          <div class="companion-header">
            <span class="companion-tag"><i class="ti ti-layers-subtract"></i> Hình thu nhỏ đối chiếu</span>
            <span class="companion-title">Màng ngoài (Gram âm)</span>
          </div>
          <div class="companion-thumb-wrap">
            <img src="images/SH10-B07-M02-A04.jpg" alt="Hình thu nhỏ siêu cấu trúc màng ngoài Gram âm">
          </div>
          <div class="companion-notes">
            <div class="note-row">
              <i class="ti ti-point"></i>
              <span><strong>Màng ngoài (Gram âm):</strong> Nằm ở ngoài cùng, bất đối xứng (lá ngoài chứa LPS, lá trong là phospholipid), có kênh porin lọc thô.</span>
            </div>
            <div class="note-row">
              <i class="ti ti-point"></i>
              <span><strong>Màng tế bào (mọi vi khuẩn):</strong> Nằm sát tế bào chất, là lớp kép phospholipid với protein vận chuyển kiểm soát trao đổi có chọn lọc.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Multiple Choice Question -->
      <div class="lps-qa-box" style="margin-top:10px;">`;

if (html.includes(s05SimArenaOld)) {
  html = html.replace(s05SimArenaOld, s05SimArenaNew);
  console.log('Replaced S05 layout with companion thumbnail card');
} else {
  console.error('Could not find S05 sim arena!');
}

// 5. S06 penicillin question heading
const s06QOld = `<p style="font-size:0.95rem; font-weight:700; color:var(--ink);">Cấu trúc nào là đích tác động trực tiếp của kháng sinh penicillin?</p>`;
const s06QNew = `<p style="font-size:0.95rem; font-weight:700; color:var(--ink);">Cấu trúc nào là đích của penicillin?</p>`;
if (html.includes(s06QOld)) {
  html = html.replace(s06QOld, s06QNew);
  console.log('Updated S06 question title to match script verbatim');
}

// 6. Update JavaScript Logic
// Find window.lmsState and replace with full variables
const lmsStateOld = `window.lmsState = {
  currentStage: 1,
  totalStages: 6,
  stage1: { viewed: new Set() },
  stage2: { placed: {}, correct: false },
  stage3: { stained: false, placed: {}, correct: false },
  stage4: { layersExplored: new Set(), answer: null, correct: false },
  stage5: { particleTested: false, answer: null, correct: false },
  stage6: { layersPlaced: {}, answer: null, correct: false },
  completed: false
};`;

const lmsStateNew = `window.lmsState = {
  currentStage: 1,
  totalStages: 6,

  // Script-mandated DEV_ONLY variables:
  viewed_structures: [], // ['fimbriae', 'flagellum', 'outer_membrane', 'cell_wall', 'plasma_membrane']
  pairing_fimbriae_flagellum: {}, // { fimbriae: 'adhesion', flagellum: 'motility' }
  attempts_s02: 0,
  gram_stain_viewed: false,
  gram_pairing: {},
  attempts_s03: 0,
  layers_seen: [],
  membrane_trials: 0,
  s05_answer: null,
  attempts_s05: 0,
  gram_positive_layers: [],
  gram_negative_layers: [],
  beta_lactam_target: null,
  m02_completed: false,

  // Runtime helper state
  stage1: { viewed: new Set() },
  stage2: { placed: {}, correct: false },
  stage3: { stained: false, placed: {}, correct: false },
  stage4: { layersExplored: new Set(), answer: null, correct: false },
  stage5: { particleTested: false, answer: null, correct: false },
  stage6: { layersPlaced: {}, answer: null, correct: false },
  completed: false
};`;

if (html.includes(lmsStateOld)) {
  html = html.replace(lmsStateOld, lmsStateNew);
  console.log('Replaced LMS state definition');
} else {
  console.error('Could not find LMS state definition!');
}

// Update Stage 1 JS
const s01JsOld = `const mapCounter = document.getElementById('mapCounter');
const btnNextStage1 = document.getElementById('btnNextStage1');
const fbStage1 = document.getElementById('fbStage1');

document.querySelectorAll('.map-hotspot').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.dataset.code;
    const info = hsData[code];
    if (!info) return;

    // Show popover
    popoverTitle.textContent = info.title;
    popoverDesc.textContent = info.desc;
    popover.classList.remove('hidden');

    // Mark hotspot
    btn.classList.add('viewed');

    // Mark list item
    const listItem = document.getElementById(info.item);
    if (listItem) listItem.classList.add('viewed');

    // Update state
    window.lmsState.stage1.viewed.add(code);
    const count = window.lmsState.stage1.viewed.size;
    mapCounter.textContent = 'Đã xem ' + count + '/5';

    if (count === 5) {
      btnNextStage1.removeAttribute('disabled');
      fbStage1.classList.remove('hidden');
    }
    reportHeight();
  });
});

btnClosePopover.addEventListener('click', () => {
  popover.classList.add('hidden');
});

btnNextStage1.addEventListener('click', () => {
  switchStage(2);
});`;

const s01JsNew = `const mapCounter = document.getElementById('mapCounter');
const btnStartStage1 = document.getElementById('btnStartStage1');
const btnNextStage1 = document.getElementById('btnNextStage1');
const fbStage1 = document.getElementById('fbStage1');
let popoverAutoTimer = null;

if (btnStartStage1) {
  btnStartStage1.addEventListener('click', () => {
    // Guide student to the first unviewed hotspot
    const nextHotspot = document.querySelector('.map-hotspot:not(.viewed)');
    if (nextHotspot) {
      nextHotspot.click();
    }
  });
}

document.querySelectorAll('.map-hotspot').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.dataset.code;
    const info = hsData[code];
    if (!info) return;

    // Show popover (kịch bản: mở thẻ tên 2 giây hoặc đến khi đóng)
    popoverTitle.textContent = info.title;
    popoverDesc.textContent = info.desc;
    popover.classList.remove('hidden');
    clearTimeout(popoverAutoTimer);
    popoverAutoTimer = setTimeout(() => {
      popover.classList.add('hidden');
      reportHeight();
    }, 2500);

    // Mark hotspot
    btn.classList.add('viewed');

    // Mark list item
    const listItem = document.getElementById(info.item);
    if (listItem) listItem.classList.add('viewed');

    // Update state
    window.lmsState.stage1.viewed.add(code);
    if (!window.lmsState.viewed_structures.includes(code)) {
      window.lmsState.viewed_structures.push(code);
    }
    const count = window.lmsState.stage1.viewed.size;
    mapCounter.textContent = 'Đã xem ' + count + '/5';

    if (count === 5) {
      if (btnStartStage1) btnStartStage1.classList.add('hidden');
      btnNextStage1.classList.remove('hidden');
      btnNextStage1.removeAttribute('disabled');
      fbStage1.classList.remove('hidden');
    }
    reportHeight();
  });
});

btnClosePopover.addEventListener('click', () => {
  clearTimeout(popoverAutoTimer);
  popover.classList.add('hidden');
  reportHeight();
});

btnNextStage1.addEventListener('click', () => {
  switchStage(2);
});`;

if (html.includes(s01JsOld)) {
  html = html.replace(s01JsOld, s01JsNew);
  console.log('Replaced S01 JS logic');
} else {
  console.error('Could not find S01 JS logic!');
}

// Update Stage 2 check listener
const s02CheckOld = `btnCheckStage2.addEventListener('click', () => {
  const cFimbriae = zoneFimbriae.querySelector('.drag-card');
  const cFlagellum = zoneFlagellum.querySelector('.drag-card');

  const correct = (cFimbriae && cFimbriae.dataset.role === 'adhesion') &&
                  (cFlagellum && cFlagellum.dataset.role === 'motility');

  if (correct) {
    zoneFimbriae.classList.add('locked-correct');
    zoneFlagellum.classList.add('locked-correct');
    cFimbriae.setAttribute('draggable', 'false');
    cFlagellum.setAttribute('draggable', 'false');
    btnCheckStage2.classList.add('hidden');
    btnRetryStage2.classList.add('hidden');
    btnNextStage2.removeAttribute('disabled');
    fbStage2.className = 'inline-feedback correct';
    fbStage2.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Lông ngắn, nhiều và chủ yếu giúp bám dính; roi dài hơn, ít hơn và tạo vận động. Tiếp theo, ta so sánh các lớp vỏ của hai nhóm Gram.</span>';
    fbStage2.classList.remove('hidden');
  } else {
    btnCheckStage2.classList.add('hidden');
    btnRetryStage2.classList.remove('hidden');
    fbStage2.className = 'inline-feedback wrong';
    fbStage2.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Hãy nhìn lại độ dài và số lượng: cấu trúc dài, ít là roi; cấu trúc ngắn, nhiều là lông. Bấm LÀM LẠI để thử lại.</span>';
    fbStage2.classList.remove('hidden');
  }
  reportHeight();
});`;

const s02CheckNew = `btnCheckStage2.addEventListener('click', () => {
  const cFimbriae = zoneFimbriae.querySelector('.drag-card');
  const cFlagellum = zoneFlagellum.querySelector('.drag-card');

  window.lmsState.attempts_s02++;
  window.lmsState.pairing_fimbriae_flagellum = {
    fimbriae: cFimbriae ? cFimbriae.dataset.role : null,
    flagellum: cFlagellum ? cFlagellum.dataset.role : null
  };

  const correct = (cFimbriae && cFimbriae.dataset.role === 'adhesion') &&
                  (cFlagellum && cFlagellum.dataset.role === 'motility');

  if (correct) {
    window.lmsState.stage2.correct = true;
    zoneFimbriae.classList.add('locked-correct');
    zoneFlagellum.classList.add('locked-correct');
    cFimbriae.setAttribute('draggable', 'false');
    cFlagellum.setAttribute('draggable', 'false');
    btnCheckStage2.classList.add('hidden');
    btnRetryStage2.classList.add('hidden');
    btnNextStage2.removeAttribute('disabled');
    fbStage2.className = 'inline-feedback correct';
    fbStage2.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Lông ngắn, nhiều và chủ yếu giúp bám dính; roi dài hơn, ít hơn và tạo vận động. Tiếp theo, ta so sánh các lớp vỏ của hai nhóm Gram.</span>';
    fbStage2.classList.remove('hidden');
  } else {
    btnCheckStage2.classList.add('hidden');
    btnRetryStage2.classList.remove('hidden');
    fbStage2.className = 'inline-feedback wrong';
    fbStage2.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Hãy nhìn lại độ dài và số lượng: cấu trúc dài, ít là roi; cấu trúc ngắn, nhiều là lông.</span>';
    fbStage2.classList.remove('hidden');
  }
  reportHeight();
});`;

if (html.includes(s02CheckOld)) {
  html = html.replace(s02CheckOld, s02CheckNew);
  console.log('Replaced S02 check listener');
} else {
  console.error('Could not find S02 check listener!');
}

// Update Stage 3 stain and check listener
const s03CheckOld = `btnCheckStage3.addEventListener('click', () => {
  const cPos = zoneGramPos.querySelector('.drag-card');
  const cNeg = zoneGramNeg.querySelector('.drag-card');

  const correct = (cPos && cPos.dataset.type === 'pos') &&
                  (cNeg && cNeg.dataset.type === 'neg');

  if (correct) {
    zoneGramPos.classList.add('locked-correct');
    zoneGramNeg.classList.add('locked-correct');
    cPos.setAttribute('draggable', 'false');
    cNeg.setAttribute('draggable', 'false');
    btnCheckStage3.classList.add('hidden');
    btnRetryStage3.classList.add('hidden');
    btnNextStage3.removeAttribute('disabled');
    fbStage3.className = 'inline-feedback correct';
    fbStage3.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Điểm phân biệt không chỉ là màu, mà còn là độ dày peptidoglycan và sự có mặt của màng ngoài ở Gram âm.</span>';
    fbStage3.classList.remove('hidden');
  } else {
    btnCheckStage3.classList.add('hidden');
    btnRetryStage3.classList.remove('hidden');
    fbStage3.className = 'inline-feedback wrong';
    fbStage3.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Kiểm tra lại: Gram dương có peptidoglycan dày; Gram âm có peptidoglycan mỏng và thêm màng ngoài. Bấm LÀM LẠI để thử lại.</span>';
    fbStage3.classList.remove('hidden');
  }
  reportHeight();
});`;

const s03CheckNew = `btnCheckStage3.addEventListener('click', () => {
  const cPos = zoneGramPos.querySelector('.drag-card');
  const cNeg = zoneGramNeg.querySelector('.drag-card');

  window.lmsState.attempts_s03++;
  window.lmsState.gram_pairing = {
    gramPos: cPos ? cPos.dataset.type : null,
    gramNeg: cNeg ? cNeg.dataset.type : null
  };

  const correct = (cPos && cPos.dataset.type === 'pos') &&
                  (cNeg && cNeg.dataset.type === 'neg');

  if (correct) {
    window.lmsState.stage3.correct = true;
    zoneGramPos.classList.add('locked-correct');
    zoneGramNeg.classList.add('locked-correct');
    cPos.setAttribute('draggable', 'false');
    cNeg.setAttribute('draggable', 'false');
    btnCheckStage3.classList.add('hidden');
    btnRetryStage3.classList.add('hidden');
    btnNextStage3.removeAttribute('disabled');
    fbStage3.className = 'inline-feedback correct';
    fbStage3.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Điểm phân biệt không chỉ là màu, mà còn là độ dày peptidoglycan và sự có mặt của màng ngoài ở Gram âm.</span>';
    fbStage3.classList.remove('hidden');
  } else {
    btnCheckStage3.classList.add('hidden');
    btnRetryStage3.classList.remove('hidden');
    fbStage3.className = 'inline-feedback wrong';
    fbStage3.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Kiểm tra lại: Gram dương có peptidoglycan dày; Gram âm có peptidoglycan mỏng và thêm màng ngoài.</span>';
    fbStage3.classList.remove('hidden');
  }
  reportHeight();
});`;

if (html.includes(s03CheckOld)) {
  html = html.replace(s03CheckOld, s03CheckNew);
  console.log('Replaced S03 check listener');
} else {
  console.error('Could not find S03 check listener!');
}

// In S03 stain button, set gram_stain_viewed = true
html = html.replace('window.lmsState.stage3.stained = true;', 'window.lmsState.stage3.stained = true;\n    window.lmsState.gram_stain_viewed = true;');

// Update Stage 4 layer highlight logic and check listener
const s04LayerOld = `layerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    layerBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.lmsState.stage4.layersExplored.add(btn.dataset.layer);

    if (window.lmsState.stage4.layersExplored.size >= 5) {
      boxQuestionLps.classList.remove('hidden');
    }
    reportHeight();
  });
});`;

const s04LayerNew = `const highlightPositions = {
  '1': { top: '4%', height: '22%' },   // LPS chain
  '2': { top: '22%', height: '26%' },  // Porin protein
  '3': { top: '38%', height: '20%' },  // Outer membrane phospholipid
  '4': { top: '56%', height: '20%' },  // Peptidoglycan & periplasm
  '5': { top: '74%', height: '22%' }   // Inner plasma membrane
};

layerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    layerBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.lmsState.stage4.layersExplored.add(btn.dataset.layer);
    if (!window.lmsState.layers_seen.includes(btn.dataset.layer)) {
      window.lmsState.layers_seen.push(btn.dataset.layer);
    }

    const ind = document.getElementById('layerHighlightIndicator');
    if (ind && highlightPositions[btn.dataset.layer]) {
      ind.style.top = highlightPositions[btn.dataset.layer].top;
      ind.style.height = highlightPositions[btn.dataset.layer].height;
      ind.classList.add('active');
    }

    if (window.lmsState.stage4.layersExplored.size >= 5) {
      boxQuestionLps.classList.remove('hidden');
    }
    reportHeight();
  });
});`;

if (html.includes(s04LayerOld)) {
  html = html.replace(s04LayerOld, s04LayerNew);
  console.log('Replaced S04 layer logic');
} else {
  console.error('Could not find S04 layer logic!');
}

const s04CheckOld = `btnCheckStage4.addEventListener('click', () => {
  const ans = window.lmsState.stage4.answer;
  if (ans === 'A') {
    window.lmsState.stage4.correct = true;
    btnCheckStage4.classList.add('hidden');
    btnRetryStage4.classList.add('hidden');
    btnNextStage4.removeAttribute('disabled');
    fbStage4.className = 'inline-feedback correct';
    fbStage4.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Lipid A là phần quyết định hoạt tính nội độc tố của LPS. Tiếp theo, hãy phân biệt màng ngoài với màng tế bào.</span>';
    fbStage4.classList.remove('hidden');
  } else {
    btnCheckStage4.classList.add('hidden');
    btnRetryStage4.classList.remove('hidden');
    fbStage4.className = 'inline-feedback wrong';
    fbStage4.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Xem lại cấu tạo LPS ở lá ngoài của màng ngoài; nội độc tố không được “tạo ra do LPS phân hủy”. Bấm LÀM LẠI để thử lại.</span>';
    fbStage4.classList.remove('hidden');
  }
  reportHeight();
});`;

const s04CheckNew = `btnCheckStage4.addEventListener('click', () => {
  const ans = window.lmsState.stage4.answer;
  if (ans === 'A') {
    window.lmsState.stage4.correct = true;
    btnCheckStage4.classList.add('hidden');
    btnRetryStage4.classList.add('hidden');
    btnNextStage4.removeAttribute('disabled');
    fbStage4.className = 'inline-feedback correct';
    fbStage4.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Lipid A là phần quyết định hoạt tính nội độc tố của LPS. Tiếp theo, hãy phân biệt màng ngoài với màng tế bào.</span>';
    fbStage4.classList.remove('hidden');
  } else {
    btnCheckStage4.classList.add('hidden');
    btnRetryStage4.classList.remove('hidden');
    fbStage4.className = 'inline-feedback wrong';
    fbStage4.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Xem lại cấu tạo LPS ở lá ngoài của màng ngoài; nội độc tố không được ‘tạo ra do LPS phân hủy’.</span>';
    fbStage4.classList.remove('hidden');
  }
  reportHeight();
});`;

if (html.includes(s04CheckOld)) {
  html = html.replace(s04CheckOld, s04CheckNew);
  console.log('Replaced S04 check listener');
} else {
  console.error('Could not find S04 check listener!');
}

// Update Stage 5 trials and check listener
html = html.replace("window.lmsState.stage5.particleTested = true;", "window.lmsState.stage5.particleTested = true;\n      window.lmsState.membrane_trials++;");

const s05CheckOld = `btnCheckStage5.addEventListener('click', () => {
  const ans = window.lmsState.stage5.answer;
  if (ans === 'A') {
    window.lmsState.stage5.correct = true;
    btnCheckStage5.classList.add('hidden');
    btnRetryStage5.classList.add('hidden');
    btnNextStage5.removeAttribute('disabled');
    fbStage5.className = 'inline-feedback correct';
    fbStage5.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Màng tế bào có ở mọi tế bào và kiểm soát trao đổi có chọn lọc. Sang màn cuối, bạn sẽ ghép toàn bộ các lớp theo đúng thứ tự.</span>';
    fbStage5.classList.remove('hidden');
  } else {
    btnCheckStage5.classList.add('hidden');
    btnRetryStage5.classList.remove('hidden');
    fbStage5.className = 'inline-feedback wrong';
    fbStage5.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Hãy xem lại vị trí sát tế bào chất và vai trò của protein màng; màng tế bào có ở cả Gram dương và Gram âm. Bấm LÀM LẠI để chọn lại.</span>';
    fbStage5.classList.remove('hidden');
  }
  reportHeight();
});`;

const s05CheckNew = `btnCheckStage5.addEventListener('click', () => {
  const ans = window.lmsState.stage5.answer;
  window.lmsState.attempts_s05++;
  window.lmsState.s05_answer = ans;

  if (ans === 'A') {
    window.lmsState.stage5.correct = true;
    btnCheckStage5.classList.add('hidden');
    btnRetryStage5.classList.add('hidden');
    btnNextStage5.removeAttribute('disabled');
    fbStage5.className = 'inline-feedback correct';
    fbStage5.innerHTML = '<i class="ti ti-circle-check"></i><span>Đúng. Màng tế bào có ở mọi tế bào và kiểm soát trao đổi có chọn lọc. Sang màn cuối, bạn sẽ ghép toàn bộ các lớp theo đúng thứ tự.</span>';
    fbStage5.classList.remove('hidden');
  } else {
    btnCheckStage5.classList.add('hidden');
    btnRetryStage5.classList.remove('hidden');
    fbStage5.className = 'inline-feedback wrong';
    fbStage5.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Hãy xem lại vị trí sát tế bào chất và vai trò của protein màng; màng tế bào có ở cả Gram dương và Gram âm.</span>';
    fbStage5.classList.remove('hidden');
  }
  reportHeight();
});`;

if (html.includes(s05CheckOld)) {
  html = html.replace(s05CheckOld, s05CheckNew);
  console.log('Replaced S05 check listener');
} else {
  console.error('Could not find S05 check listener!');
}

// Update Stage 6 drag check and penicillin options listener
const s06CheckOld = `btnCheckStage6.addEventListener('click', () => {
  let correct = true;
  slotsStage6.forEach(slot => {
    const card = slot.querySelector('.drag-card');
    if (!card || card.dataset.role !== slot.dataset.expect) {
      correct = false;
    }
  });

  if (correct) {
    slotsStage6.forEach(slot => {
      slot.classList.add('locked-correct');
      const card = slot.querySelector('.drag-card');
      if (card) card.setAttribute('draggable', 'false');
    });
    boxQuestionPenicillin.classList.remove('hidden');
    btnCheckStage6.classList.add('hidden');
    btnRetryStage6.classList.add('hidden');
    fbStage6.className = 'inline-feedback correct';
    fbStage6.innerHTML = '<i class="ti ti-circle-check"></i><span>Ghép sơ đồ chính xác! Hãy trả lời câu hỏi ứng dụng y học bên dưới để hoàn thành bài học.</span>';
    fbStage6.classList.remove('hidden');
  } else {
    btnCheckStage6.classList.add('hidden');
    btnRetryStage6.classList.remove('hidden');
    fbStage6.className = 'inline-feedback wrong';
    fbStage6.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Sơ đồ chưa chính xác: Gram dương có peptidoglycan dày ở ngoài màng tế bào; Gram âm có màng ngoài, peptidoglycan mỏng và màng tế bào. Bấm LÀM LẠI để thử lại.</span>';
    fbStage6.classList.remove('hidden');
  }
  reportHeight();
});`;

const s06CheckNew = `btnCheckStage6.addEventListener('click', () => {
  let correct = true;
  slotsStage6.forEach(slot => {
    const card = slot.querySelector('.drag-card');
    if (!card || card.dataset.role !== slot.dataset.expect) {
      correct = false;
    }
  });

  const p1 = document.getElementById('slotPos1').querySelector('.drag-card');
  const p2 = document.getElementById('slotPos2').querySelector('.drag-card');
  const n1 = document.getElementById('slotNeg1').querySelector('.drag-card');
  const n2 = document.getElementById('slotNeg2').querySelector('.drag-card');
  const n3 = document.getElementById('slotNeg3').querySelector('.drag-card');

  window.lmsState.gram_positive_layers = [p1 ? p1.dataset.role : null, p2 ? p2.dataset.role : null];
  window.lmsState.gram_negative_layers = [n1 ? n1.dataset.role : null, n2 ? n2.dataset.role : null, n3 ? n3.dataset.role : null];

  if (correct) {
    slotsStage6.forEach(slot => {
      slot.classList.add('locked-correct');
      const card = slot.querySelector('.drag-card');
      if (card) card.setAttribute('draggable', 'false');
    });
    boxQuestionPenicillin.classList.remove('hidden');
    btnCheckStage6.classList.add('hidden');
    btnRetryStage6.classList.add('hidden');
    fbStage6.className = 'inline-feedback correct';
    fbStage6.innerHTML = '<i class="ti ti-circle-check"></i><span>Ghép sơ đồ các lớp vỏ chính xác! Hãy trả lời câu hỏi chốt về ứng dụng y học bên dưới.</span>';
    fbStage6.classList.remove('hidden');
  } else {
    btnCheckStage6.classList.add('hidden');
    btnRetryStage6.classList.remove('hidden');
    fbStage6.className = 'inline-feedback wrong';
    fbStage6.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Sơ đồ chưa chính xác: Gram dương có peptidoglycan dày ở ngoài màng tế bào; Gram âm có màng ngoài, peptidoglycan mỏng và màng tế bào.</span>';
    fbStage6.classList.remove('hidden');
  }
  reportHeight();
});`;

if (html.includes(s06CheckOld)) {
  html = html.replace(s06CheckOld, s06CheckNew);
  console.log('Replaced S06 check listener');
} else {
  console.error('Could not find S06 check listener!');
}

const s06OptsOld = `document.querySelectorAll('#optsPenicillin .qa-option-label').forEach(lbl => {
  lbl.addEventListener('click', () => {
    if (window.lmsState.completed) return;
    document.querySelectorAll('#optsPenicillin .qa-option-label').forEach(l => l.classList.remove('selected'));
    lbl.classList.add('selected');
    window.lmsState.stage6.answer = lbl.dataset.value;

    if (lbl.dataset.value === 'A') {
      window.lmsState.completed = true;
      btnFinishStage6.classList.remove('hidden');
      fbStage6.className = 'inline-feedback correct';
      fbStage6.innerHTML = '<i class="ti ti-circle-check"></i><span>Chính xác! Penicillin ức chế enzyme tổng hợp lớp peptidoglycan của thành tế bào, khiến vi khuẩn dễ bị vỡ do áp suất thẩm thấu khi sinh trưởng. Bạn đã hoàn thành xuất sắc toàn bộ Module!</span>';
      fbStage6.classList.remove('hidden');
    } else {
      fbStage6.className = 'inline-feedback wrong';
      fbStage6.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Đích trực tiếp được nhắc ở đây là quá trình tạo peptidoglycan của thành tế bào, không phải DNA hay ribosome. Hãy chọn lại.</span>';
      fbStage6.classList.remove('hidden');
    }
    reportHeight();
  });
});`;

const s06OptsNew = `document.querySelectorAll('#optsPenicillin .qa-option-label').forEach(lbl => {
  lbl.addEventListener('click', () => {
    if (window.lmsState.completed) return;
    document.querySelectorAll('#optsPenicillin .qa-option-label').forEach(l => l.classList.remove('selected'));
    lbl.classList.add('selected');
    window.lmsState.stage6.answer = lbl.dataset.value;
    window.lmsState.beta_lactam_target = lbl.dataset.value;

    if (lbl.dataset.value === 'A') {
      window.lmsState.completed = true;
      window.lmsState.m02_completed = true;
      btnFinishStage6.classList.remove('hidden');
      fbStage6.className = 'inline-feedback correct';
      fbStage6.innerHTML = '<i class="ti ti-circle-check"></i><span>Chính xác. Bạn đã phân biệt lông–roi, hai kiểu vỏ Gram và màng tế bào. Module tiếp theo sẽ đi vào tế bào chất, vùng nhân và plasmid.</span>';
      fbStage6.classList.remove('hidden');
    } else {
      fbStage6.className = 'inline-feedback wrong';
      fbStage6.innerHTML = '<i class="ti ti-alert-triangle"></i><span>Đích trực tiếp được nhắc ở đây là quá trình tạo peptidoglycan, không phải DNA hay ribosome.</span>';
      fbStage6.classList.remove('hidden');
    }
    reportHeight();
  });
});`;

if (html.includes(s06OptsOld)) {
  html = html.replace(s06OptsOld, s06OptsNew);
  console.log('Replaced S06 opts listener');
} else {
  console.error('Could not find S06 opts listener!');
}

fs.writeFileSync('modules/Lop_10/SH10_B07_M02/SH10_B07_M02.html', html, 'utf8');
console.log('Successfully written updated file! New length:', html.length);
