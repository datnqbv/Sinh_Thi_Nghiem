const fs = require('fs');

const filePath = 'modules/Lop_10/SH10_B05_M02/SH10_B05_M02.html';
let content = fs.readFileSync(filePath, 'utf8');

// 6. Update JS logic for Stage 2D Food Classification (add shake animation)
const oldFoodClassify = `      } else {
        s02Feedback.className = 'inline-feedback bad';
        s02Feedback.innerHTML = \`<div class="feedback-head"><i class="ti ti-alert-triangle"></i> Chưa đúng</div><span>\${chip.textContent} không thuộc nhóm \${targetGroup === 'animal' ? 'động vật' : 'thực vật'}. Hãy thử lại!</span>\`;
      }`;

const newFoodClassify = `      } else {
        chip.classList.add('shake');
        chip.style.borderColor = 'var(--wrong)';
        setTimeout(() => {
          chip.classList.remove('shake');
          chip.style.borderColor = '';
        }, 500);
        s02Feedback.className = 'inline-feedback bad';
        s02Feedback.innerHTML = \`<div class="feedback-head"><i class="ti ti-alert-triangle"></i> Chưa đúng</div><span><b>\${chip.textContent.trim()}</b> không thuộc nhóm \${targetGroup === 'animal' ? 'Động vật' : 'Thực vật'}. Hãy thử lại!</span>\`;
      }`;

if (!content.includes(oldFoodClassify)) {
  console.error('ERROR: oldFoodClassify not found');
  process.exit(1);
}
content = content.replace(oldFoodClassify, newFoodClassify);
console.log('Step 6: Updated Food Classification logic successfully');

// 7. Update JS logic for Phospholipid assembly (Stage 4A bonded text)
const oldPlBonded = `        slot.innerHTML = \`<i class="ti ti-check"></i> \${selPart === 'head' ? 'Nhóm Phosphate (PO₄)' : selPart === 'tail1' ? 'Acid béo thẳng' : 'Acid béo gấp khúc cis'}\`;`;
const newPlBonded = `        if (selPart === 'head') {
          slot.innerHTML = '<i class="ti ti-circle-check" style="color:var(--correct);font-size:1.05rem;"></i> <span>Nhóm Phosphate (Ưa nước)</span>';
        } else if (selPart === 'tail1') {
          slot.innerHTML = '<i class="ti ti-check" style="color:var(--correct);"></i> <span>Acid béo thẳng (Kị nước)</span>';
        } else {
          slot.innerHTML = '<i class="ti ti-check" style="color:var(--correct);"></i> <span>Acid béo cis (Kị nước)</span>';
        }`;

if (!content.includes(oldPlBonded)) {
  console.error('ERROR: oldPlBonded not found');
  process.exit(1);
}
content = content.replace(oldPlBonded, newPlBonded);
console.log('Step 7: Updated Phospholipid slot bonded innerHTML successfully');

// 8. Update JS logic for Stage 5A Highlight Rings
const oldHighlight = `  btnHighlightRings.addEventListener('click', () => {
    state.s05_rings_highlighted = true;
    btnHighlightRings.style.background = 'var(--accent)';
    btnHighlightRings.style.color = '#fff';
    s05Feedback.className = 'inline-feedback info';
    s05Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-sparkles"></i> Khung bốn vòng carbon</div><span>Quan sát thấy cả ba phân tử đều sở hữu chung bộ khung gồm bốn vòng carbon liên kết với nhau (3 vòng sáu cạnh + 1 vòng năm cạnh).</span>';
  });`;

const newHighlight = `  btnHighlightRings.addEventListener('click', () => {
    state.s05_rings_highlighted = !state.s05_rings_highlighted;
    const hl = document.getElementById('common-ring-highlight');
    if (hl) hl.style.opacity = state.s05_rings_highlighted ? '1' : '0';
    if (state.s05_rings_highlighted) {
      btnHighlightRings.style.background = 'var(--accent)';
      btnHighlightRings.style.color = '#fff';
      btnHighlightRings.innerHTML = '<i class="ti ti-check"></i> Đang làm sáng khung 4 vòng';
      s05Feedback.className = 'inline-feedback info';
      s05Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-sparkles"></i> Khung bốn vòng carbon</div><span>Quan sát thấy cả ba phân tử đều sở hữu chung bộ khung gồm bốn vòng carbon liên kết với nhau (3 vòng sáu cạnh + 1 vòng năm cạnh).</span>';
    } else {
      btnHighlightRings.style.background = '';
      btnHighlightRings.style.color = '';
      btnHighlightRings.innerHTML = '<i class="ti ti-sparkles"></i> Làm sáng khung 4 vòng carbon chung';
    }
  });`;

if (!content.includes(oldHighlight)) {
  console.error('ERROR: oldHighlight not found');
  process.exit(1);
}
content = content.replace(oldHighlight, newHighlight);
console.log('Step 8: Updated btnHighlightRings logic successfully');

// 9. Add missing reset handlers for Stages 2, 3, 4, 5, 6
const s02ResetCode = `  document.getElementById('btnPrev-s02').addEventListener('click', () => showStage(0));
  btnNextS02.addEventListener('click', () => showStage(2));`;

const s02ResetReplacement = `  document.getElementById('btnPrev-s02').addEventListener('click', () => showStage(0));
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

if (!content.includes(s02ResetCode)) {
  console.error('ERROR: s02ResetCode not found');
  process.exit(1);
}
content = content.replace(s02ResetCode, s02ResetReplacement);
console.log('Step 9: Added Stage 2 Reset handler');

// Stage 3 Reset
const s03ResetCode = `  btnNext3Cto3D.addEventListener('click', () => {
    showS03Sub(3);
    s03StepBtns[3].classList.add('done');
    state.stagesCompleted[2] = true;
    btnNextS03.disabled = false;
    tabBtns[2].classList.add('done');
    LMS().progress({ done: 3, total: 6 });
    s03Feedback.className = 'inline-feedback ok';
    s03Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-trophy"></i> Hoàn thành Giai đoạn 3!</div><span>Bạn đã hiểu rõ vai trò dự trữ năng lượng, cách nhiệt và hòa tan vitamin của lipid. Bấm <b>Tiếp tục sang Giai đoạn 4</b>.</span>';
  });`;

const s03ResetReplacement = `  btnNext3Cto3D.addEventListener('click', () => {
    showS03Sub(3);
    s03StepBtns[3].classList.add('done');
    state.stagesCompleted[2] = true;
    btnNextS03.disabled = false;
    tabBtns[2].classList.add('done');
    LMS().progress({ done: 3, total: 6 });
    s03Feedback.className = 'inline-feedback ok';
    s03Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-trophy"></i> Hoàn thành Giai đoạn 3!</div><span>Bạn đã hiểu rõ vai trò dự trữ năng lượng, cách nhiệt và hòa tan vitamin của lipid. Bấm <b>Tiếp tục sang Giai đoạn 4</b>.</span>';
  });

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

if (!content.includes(s03ResetCode)) {
  console.error('ERROR: s03ResetCode not found');
  process.exit(1);
}
content = content.replace(s03ResetCode, s03ResetReplacement);
console.log('Step 10: Added Stage 3 Reset handler');

// Stage 4 Reset
const s04ResetCode = `  document.getElementById('btnPrev-s04').addEventListener('click', () => showStage(2));
  btnNextS04.addEventListener('click', () => showStage(4));`;

const s04ResetReplacement = `  document.getElementById('btnPrev-s04').addEventListener('click', () => showStage(2));
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

if (!content.includes(s04ResetCode)) {
  console.error('ERROR: s04ResetCode not found');
  process.exit(1);
}
content = content.replace(s04ResetCode, s04ResetReplacement);
console.log('Step 11: Added Stage 4 Reset handler');

// Stage 5 Reset
const s05ResetCode = `  btnNext5Cto5D.addEventListener('click', () => {
    showS05Sub(3);
    s05StepBtns[3].classList.add('done');
    state.stagesCompleted[4] = true;
    btnNextS05.disabled = false;
    tabBtns[4].classList.add('done');
    LMS().progress({ done: 5, total: 6 });
    s05Feedback.className = 'inline-feedback ok';
    s05Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-trophy"></i> Hoàn thành Giai đoạn 5!</div><span>Steroid có khung bốn vòng carbon. Cholesterol vừa tham gia màng tế bào, vừa là tiền chất hormone. Bấm <b>Tiếp tục sang Giai đoạn 6</b>.</span>';
  });`;

const s05ResetReplacement = `  btnNext5Cto5D.addEventListener('click', () => {
    showS05Sub(3);
    s05StepBtns[3].classList.add('done');
    state.stagesCompleted[4] = true;
    btnNextS05.disabled = false;
    tabBtns[4].classList.add('done');
    LMS().progress({ done: 5, total: 6 });
    s05Feedback.className = 'inline-feedback ok';
    s05Feedback.innerHTML = '<div class="feedback-head"><i class="ti ti-trophy"></i> Hoàn thành Giai đoạn 5!</div><span>Steroid có khung bốn vòng carbon. Cholesterol vừa tham gia màng tế bào, vừa là tiền chất hormone. Bấm <b>Tiếp tục sang Giai đoạn 6</b>.</span>';
  });

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

if (!content.includes(s05ResetCode)) {
  console.error('ERROR: s05ResetCode not found');
  process.exit(1);
}
content = content.replace(s05ResetCode, s05ResetReplacement);
console.log('Step 12: Added Stage 5 Reset handler');

// Stage 6 Reset
const s06ResetCode = `  document.getElementById('btnPrev-s06').addEventListener('click', () => showStage(4));`;

const s06ResetReplacement = `  document.getElementById('btnPrev-s06').addEventListener('click', () => showStage(4));

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

if (!content.includes(s06ResetCode)) {
  console.error('ERROR: s06ResetCode not found');
  process.exit(1);
}
content = content.replace(s06ResetCode, s06ResetReplacement);
console.log('Step 13: Added Stage 6 Reset handler');

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: All fixes applied to SH10_B05_M02.html!');
