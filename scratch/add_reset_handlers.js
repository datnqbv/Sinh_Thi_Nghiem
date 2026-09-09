const fs = require('fs');

const filePath = 'modules/Lop_10/SH10_B05_M02/SH10_B05_M02.html';
let content = fs.readFileSync(filePath, 'utf8');

// Stage 3 Reset
const s03End = `  document.getElementById('btnPrev-s03').addEventListener('click', () => showStage(1));
  btnNextS03.addEventListener('click', () => showStage(3));`;

const s03EndNew = `  document.getElementById('btnPrev-s03').addEventListener('click', () => showStage(1));
  btnNextS03.addEventListener('click', () => showStage(3));

  document.getElementById('btnReset-s03').addEventListener('click', () => {
    state.s03_sub = 0;
    state.s03_q1_done = false;
    state.s03_q2_done = false;
    state.s03_q3_done = false;
    btnNext3Ato3B.classList.add('hidden');
    btnNext3Bto3C.classList.add('hidden');
    btnNext3Cto3D.classList.add('hidden');
    document.querySelectorAll('#stage-s03 .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
    s03StepBtns.forEach(p => p.classList.remove('done'));
    showS03Sub(0);
    s03Feedback.className = 'inline-feedback info';
    s03Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-compass"></i> Hướng dẫn</div><span>Trả lời câu hỏi trắc nghiệm về đặc điểm dự trữ năng lượng lâu dài của triglyceride.</span>';
    reportHeight();
  });`;

if (!content.includes(s03End)) {
  console.error('ERROR: s03End not found');
  process.exit(1);
}
content = content.replace(s03End, s03EndNew);
console.log('Stage 3 reset added successfully');

// Stage 4 Reset
const s04End = `  document.getElementById('btnPrev-s04').addEventListener('click', () => showStage(2));
  btnNextS04.addEventListener('click', () => showStage(4));`;

const s04EndNew = `  document.getElementById('btnPrev-s04').addEventListener('click', () => showStage(2));
  btnNextS04.addEventListener('click', () => showStage(4));

  document.getElementById('btnReset-s04').addEventListener('click', () => {
    state.s04_sub = 0;
    state.s04_pl_slots = { head: false, tail1: false, tail2: false };
    state.s04_selected_pl_part = null;
    state.s04_q1_done = false;
    state.s04_q2_done = false;

    const headSlot = document.querySelector('.pl-part-slot[data-part="head"]');
    const tail1Slot = document.querySelector('.pl-part-slot[data-part="tail1"]');
    const tail2Slot = document.querySelector('.pl-part-slot[data-part="tail2"]');
    if (headSlot) {
      headSlot.className = 'pl-slot-head pl-part-slot';
      headSlot.innerHTML = '<i class="ti ti-circle-dashed"></i> <span>Gắn Nhóm Phosphate</span>';
    }
    if (tail1Slot) {
      tail1Slot.className = 'pl-slot-tail pl-part-slot';
      tail1Slot.innerHTML = '<i class="ti ti-line"></i> <span>Đuôi Acid béo 1</span>';
    }
    if (tail2Slot) {
      tail2Slot.className = 'pl-slot-tail pl-part-slot';
      tail2Slot.innerHTML = '<i class="ti ti-angle"></i> <span>Đuôi Acid béo 2 (cis)</span>';
    }
    plChips.forEach(c => { c.className = 'fa-chip'; });
    plFinishedCard.classList.add('hidden');
    plLabelsInfo.classList.add('hidden');
    s04Q1Box.classList.add('hidden');
    btnNext4Ato4B.classList.add('hidden');
    btnNext4Bto4C.classList.add('hidden');

    document.querySelectorAll('#stage-s04 .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
    s04StepBtns.forEach(p => p.classList.remove('done'));
    showS04Sub(0);
    s04Feedback.className = 'inline-feedback info';
    s04Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-compass"></i> Hướng dẫn</div><span>Bấm chọn các thành phần (nhóm phosphate, acid béo) để lắp ráp phospholipid.</span>';
    reportHeight();
  });`;

if (!content.includes(s04End)) {
  console.error('ERROR: s04End not found');
  process.exit(1);
}
content = content.replace(s04End, s04EndNew);
console.log('Stage 4 reset added successfully');

// Stage 5 Reset
const s05End = `  document.getElementById('btnPrev-s05').addEventListener('click', () => showStage(3));
  btnNextS05.addEventListener('click', () => showStage(5));`;

const s05EndNew = `  document.getElementById('btnPrev-s05').addEventListener('click', () => showStage(3));
  btnNextS05.addEventListener('click', () => showStage(5));

  document.getElementById('btnReset-s05').addEventListener('click', () => {
    state.s05_sub = 0;
    state.s05_rings_highlighted = false;
    state.s05_q1_done = false;
    state.s05_q2_done = false;
    state.s05_q3_done = false;

    const hl = document.getElementById('common-ring-highlight');
    if (hl) hl.style.opacity = '0';
    btnHighlightRings.style.background = '';
    btnHighlightRings.style.color = '';
    btnHighlightRings.innerHTML = '<i class="ti ti-sparkles"></i> Làm sáng khung 4 vòng carbon chung';
    steroidNamesRow.classList.add('hidden');
    btnNext5Ato5B.classList.add('hidden');
    btnNext5Bto5C.classList.add('hidden');

    document.querySelectorAll('#stage-s05 .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
    s05StepBtns.forEach(p => p.classList.remove('done'));
    showS05Sub(0);
    s05Feedback.className = 'inline-feedback info';
    s05Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-compass"></i> Hướng dẫn</div><span>Bấm nút làm sáng khung bốn vòng carbon và trả lời câu hỏi nhận diện.</span>';
    reportHeight();
  });`;

if (!content.includes(s05End)) {
  console.error('ERROR: s05End not found');
  process.exit(1);
}
content = content.replace(s05End, s05EndNew);
console.log('Stage 5 reset added successfully');

// Stage 6 Reset
const s06End = `  document.getElementById('btnPrev-s06').addEventListener('click', () => showStage(4));`;

const s06EndNew = `  document.getElementById('btnPrev-s06').addEventListener('click', () => showStage(4));

  document.getElementById('btnReset-s06').addEventListener('click', () => {
    state.s06_sub = 0;
    state.s06_selected = { col1: null, col2: null, col3: null };
    state.s06_connections = { triglyceride: false, phospholipid: false, steroid: false };
    state.s06_wrong_attempts = 0;
    state.s06_central_done = false;
    state.s06_nutrition_done = false;

    connections.length = 0;
    renderConnections();
    matchBtns.forEach(b => { b.className = 'match-card-btn'; });
    btnNext6Ato6B.classList.add('hidden');
    btnNext6Bto6C.classList.add('hidden');

    checkOpts.forEach(o => {
      o.classList.remove('checked');
      o.querySelector('i').classList.add('hidden');
    });
    document.querySelectorAll('#stage-s06 .quiz-opt').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
    s06StepBtns.forEach(p => p.classList.remove('done'));
    showS06Sub(0);
    s06Feedback.className = 'inline-feedback info';
    s06Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-compass"></i> Hướng dẫn</div><span>Ghép đúng 3 nhóm phân tử lipid với đặc điểm cấu trúc và vai trò tương ứng.</span>';
    reportHeight();
  });`;

if (!content.includes(s06End)) {
  console.error('ERROR: s06End not found');
  process.exit(1);
}
content = content.replace(s06End, s06EndNew);
console.log('Stage 6 reset added successfully');

fs.writeFileSync(filePath, content, 'utf8');
console.log('All remaining reset handlers added successfully!');
