
/* =========================================================================
   LMS RUNTIME STATE MANAGEMENT (KHÔNG DÙNG LOCALSTORAGE / COOKIE)
========================================================================= */
window.lmsState = {
  currentStage: 'st01',
  stagesCompleted: {
    st01: false,
    st02: false,
    st03: false,
    st04: false,
    st05: false,
    st06: false,
    st07: true
  },
  st01: { hotspotViewed: [false, false, false], quizPassed: false },
  st02: { assembled: { P: false, Sugar: false, Base: false }, quiz2A: false, quiz2B: false },
  st03: { matchedSlots: { 1: null, 2: null, 3: null, 4: null }, quiz3C: false, quizPassed: false },
  st04: { quiz4A: false, quiz4B: false },
  st05: { quiz5A: false, bandsChecked: false },
  st06: { quiz6A: false, quiz6D: false, rolesMatched: { mRNA: null, tRNA: null, rRNA: null } }
};

/* Báo cáo chiều cao tự động tới LMS iframe */
function reportHeight() {
  if (window.parent && window.parent.postMessage) {
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.parent.postMessage({ type: 'setHeight', height: height }, '*');
  }
}

window.addEventListener('load', reportHeight);
window.addEventListener('resize', reportHeight);

/* Chuyển Stage */
function goStage(stageId) {
  document.querySelectorAll('.stage').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById(stageId);
  if (target) {
    target.classList.remove('hidden');
    window.lmsState.currentStage = stageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(reportHeight, 50);
  }
}

/* =========================================================================
   STAGE 1 LOGIC: HOTSPOTS VÀ TRẮC NGHIỆM
========================================================================= */
function showHotspot(id, btn) {
  document.querySelectorAll('.hotspot-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const titleEl = document.querySelector('#cellInfoBox .hotspot-info-title');
  const descEl = document.querySelector('#cellInfoBox .hotspot-info-desc');

  window.lmsState.st01.hotspotViewed[id - 1] = true;

  if (id === 1) {
    titleEl.innerHTML = '<i class="ti ti-dna"></i> 1. DNA trong nhân tế bào';
    descEl.textContent = 'Ở tế bào nhân thực, phần lớn DNA nằm trong nhân, liên kết với protein tạo thành chất nhiễm sắc (nhiễm sắc thể), lưu giữ thông tin di truyền thiết yếu.';
  } else if (id === 2) {
    titleEl.innerHTML = '<i class="ti ti-activity"></i> 2. DNA trong ti thể (và lục lạp)';
    descEl.textContent = 'Ti thể (và lục lạp ở thực vật) chứa các phân tử DNA mạch vòng nhỏ, có khả năng tự nhân đôi độc lập với DNA trong nhân.';
  } else if (id === 3) {
    titleEl.innerHTML = '<i class="ti ti-molecule"></i> 3. RNA trong nhân và tế bào chất';
    descEl.textContent = 'RNA được tổng hợp trong nhân, sau đó di chuyển ra tế bào chất và ribosome để thực hiện chức năng làm khuôn và dịch mã tổng hợp protein.';
  }

  checkStage1Progress();
}

function checkQuiz1(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb1');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Trình tự nucleotide trong DNA quy định trình tự các amino acid trong chuỗi polypeptide của protein.';
    window.lmsState.st01.quizPassed = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Hãy nhớ lại: DNA lưu thông tin di truyền để tổng hợp nên phân tử nào?';
    window.lmsState.st01.quizPassed = false;
  }
  checkStage1Progress();
  reportHeight();
}

function checkStage1Progress() {
  const allHotspots = window.lmsState.st01.hotspotViewed.every(v => v === true);
  if (allHotspots && window.lmsState.st01.quizPassed) {
    document.getElementById('btnNext1').disabled = false;
    window.lmsState.stagesCompleted.st01 = true;
  }
}

/* =========================================================================
   STAGE 2 LOGIC: LẮP GHÉP NUCLEOTIDE
========================================================================= */
let selectedPart = null;

function selectNucPart(type, btn) {
  document.querySelectorAll('#trayNuc .drag-part').forEach(b => b.classList.remove('selected'));
  if (selectedPart === type) {
    selectedPart = null;
  } else {
    selectedPart = type;
    btn.classList.add('selected');
  }
}

function dropNucPart(targetSlot) {
  if (!selectedPart) return;
  if (selectedPart === targetSlot) {
    const slotEl = document.getElementById('slot' + targetSlot);
    slotEl.classList.add('filled');
    if (targetSlot === 'Sugar') {
      slotEl.innerHTML = '<span style="font-weight:800;color:#0284c7">Đường Deoxyribose ✓</span>';
    } else if (targetSlot === 'P') {
      slotEl.innerHTML = '<span style="font-weight:800;color:#d97706">Nhóm Phosphate ✓</span>';
    } else if (targetSlot === 'Base') {
      slotEl.innerHTML = '<span style="font-weight:800;color:#7e22ce">Base Nitrogen ✓</span>';
    }
    const partBtn = document.getElementById('part' + targetSlot);
    if (partBtn) partBtn.style.display = 'none';

    window.lmsState.st02.assembled[targetSlot] = true;
    selectedPart = null;
    checkStage2Progress();
    reportHeight();
  }
}

function checkQuiz2A(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb2A');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Base nitrogen (A, T, G hoặc C) quyết định tên gọi và đặc trưng của từng loại nucleotide.';
    window.lmsState.st02.quiz2A = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Nhóm phosphate và đường deoxyribose giống hệt nhau ở mọi nucleotide DNA.';
    window.lmsState.st02.quiz2A = false;
  }
  checkStage2Progress();
  reportHeight();
}

function checkQuiz2B(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb2B');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Đúng! Khung đường – phosphate lặp lại đều đặn tạo xương sống vững chắc cho mạch DNA.';
    window.lmsState.st02.quiz2B = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Khung chính chạy dọc mạch do đường và phosphate liên kết tạo thành.';
    window.lmsState.st02.quiz2B = false;
  }
  checkStage2Progress();
  reportHeight();
}

function checkStage2Progress() {
  const { P, Sugar, Base } = window.lmsState.st02.assembled;
  if (P && Sugar && Base && window.lmsState.st02.quiz2A && window.lmsState.st02.quiz2B) {
    document.getElementById('btnNext2').disabled = false;
    window.lmsState.stagesCompleted.st02 = true;
  }
}

/* =========================================================================
   STAGE 3 LOGIC: GHÉP BASE BỔ SUNG & B-DNA CANVAS 3D
========================================================================= */
let activeMatchSlot = null;
const correctBases = { 1: 'T', 2: 'A', 3: 'C', 4: 'G' };

function selectMatchSlot(slotIndex) {
  activeMatchSlot = slotIndex;
  document.querySelectorAll('.slot-drop').forEach(s => s.style.borderColor = '');
  const el = document.getElementById('slotMatch' + slotIndex);
  if (el) el.style.borderColor = 'var(--accent)';
}

function pickBaseForSlot(baseChar) {
  if (!activeMatchSlot) return;
  const slotEl = document.getElementById('slotMatch' + activeMatchSlot);
  const correct = correctBases[activeMatchSlot];
  const fbEl = document.getElementById('baseMatchFb');

  if (baseChar === correct) {
    slotEl.textContent = baseChar;
    slotEl.className = 'slot-drop filled base-' + baseChar.toLowerCase();
    window.lmsState.st03.matchedSlots[activeMatchSlot] = baseChar;

    const bridgeEl = document.getElementById('hBond' + activeMatchSlot);
    if (baseChar === 'T' || baseChar === 'A') {
      bridgeEl.textContent = '2H';
    } else {
      bridgeEl.textContent = '3H';
    }

    fbEl.style.color = 'var(--correct)';
    fbEl.textContent = `Chính xác! Ghép cặp bổ sung chuẩn xác.`;

    activeMatchSlot = null;
  } else {
    fbEl.style.color = 'var(--wrong)';
    fbEl.textContent = `Sai cặp! Nguyên tắc bổ sung: A chỉ liên kết với T, G chỉ liên kết với C.`;
  }

  checkStage3Progress();
}


function checkQuiz3C(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb3C');
  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Cặp G–C liên kết bằng 3 liên kết hydrogen, cặp A–T liên kết bằng 2 liên kết hydrogen.';
    window.lmsState.st03.quiz3C = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. A–T có 2 liên kết H, G–C có 3 liên kết H.';
    window.lmsState.st03.quiz3C = false;
  }
  checkStage3Progress();
  reportHeight();
}

function checkQuiz3(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb3');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Vì A luôn liên kết với T và G luôn liên kết với C nên trong DNA mạch kép: A = T và G = C.';
    window.lmsState.st03.quizPassed = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Hãy nhớ nguyên tắc cặp base bổ sung A-T và G-C.';
    window.lmsState.st03.quizPassed = false;
  }
  checkStage3Progress();
  reportHeight();
}

function checkStage3Progress() {
  const allSlots = Object.values(window.lmsState.st03.matchedSlots).every(v => v !== null);
  if (allSlots && window.lmsState.st03.quiz3C && window.lmsState.st03.quizPassed) {
    document.getElementById('btnNext3').disabled = false;
    window.lmsState.stagesCompleted.st03 = true;
  }
}

/* Canvas B-DNA Xoắn phải 3D toán học */
function initDnaCanvas() {
  const canvas = document.getElementById('dnaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let angle = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const numPairs = 24;
    const spacing = 28;
    const startX = 20;
    const centerY = canvas.height / 2;
    const radius = 55;

    for (let i = 0; i < numPairs; i++) {
      const x = startX + i * spacing;
      const currentAngle = angle + (i * 0.35);

      const y1 = centerY + Math.sin(currentAngle) * radius;
      const y2 = centerY + Math.sin(currentAngle + Math.PI) * radius;
      const z1 = Math.cos(currentAngle);
      const z2 = Math.cos(currentAngle + Math.PI);

      // Đường liên kết hydrogen giữa cặp base
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Điểm mạch 1 (Xanh dương)
      ctx.beginPath();
      ctx.arc(x, y1, 5 + z1 * 2, 0, Math.PI * 2);
      ctx.fillStyle = z1 > 0 ? '#38bdf8' : '#0369a1';
      ctx.fill();

      // Điểm mạch 2 (Cam đỏ)
      ctx.beginPath();
      ctx.arc(x, y2, 5 + z2 * 2, 0, Math.PI * 2);
      ctx.fillStyle = z2 > 0 ? '#f87171' : '#b91c1c';
      ctx.fill();
    }

    angle += 0.02;
    requestAnimationFrame(render);
  }
  render();
}
window.addEventListener('load', initDnaCanvas);

/* =========================================================================
   STAGE 4 LOGIC: TRÌNH TỰ VÀ TRUYỀN THÔNG TIN
========================================================================= */
function checkQuiz4A(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb4A');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Thông tin di truyền được quyết định bởi trình tự sắp xếp các nucleotide, không chỉ bởi số lượng.';
    window.lmsState.st04.quiz4A = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Hai đoạn DNA có thứ tự nucleotide khác nhau nên thông tin mã hóa hoàn toàn khác nhau.';
    window.lmsState.st04.quiz4A = false;
  }
  checkStage4Progress();
  reportHeight();
}

function checkQuiz4B(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb4B');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Đúng! Cơ chế sao chép bán bảo toàn: Mỗi mạch làm khuôn tổng hợp mạch bổ sung chính xác.';
    window.lmsState.st04.quiz4B = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Nhờ nguyên tắc bổ sung, trình tự mạch mới luôn được xác định chính xác từ mạch khuôn.';
    window.lmsState.st04.quiz4B = false;
  }
  checkStage4Progress();
  reportHeight();
}

function checkStage4Progress() {
  if (window.lmsState.st04.quiz4A && window.lmsState.st04.quiz4B) {
    document.getElementById('btnNext4').disabled = false;
    window.lmsState.stagesCompleted.st04 = true;
  }
}

/* =========================================================================
   STAGE 5 LOGIC: HÌNH THÁI DNA & ĐIỆN DI HUYẾT THỐNG
========================================================================= */
function checkQuiz5A(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb5A');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Plasmid là các phân tử DNA mạch vòng nhỏ, nằm ngoài nhiễm sắc thể trong tế bào chất của vi khuẩn.';
    window.lmsState.st05.quiz5A = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Hãy nhớ lại sơ đồ 3 dạng DNA ở hình trên.';
    window.lmsState.st05.quiz5A = false;
  }
  checkStage5Progress();
  reportHeight();
}

const checkedBands = { 1: false, 2: false, 3: false, 4: false };

function checkBand(num) {
  const el = document.getElementById('bandC' + num);
  el.classList.add('active-select');
  checkedBands[num] = true;

  if (checkedBands[1] && checkedBands[2] && checkedBands[3] && checkedBands[4]) {
    window.lmsState.st05.bandsChecked = true;
  }
  checkStage5Progress();
}

function checkStage5Progress() {
  if (window.lmsState.st05.quiz5A && window.lmsState.st05.bandsChecked) {
    document.getElementById('btnNext5').disabled = false;
    window.lmsState.stagesCompleted.st05 = true;
  }
}

/* =========================================================================
   STAGE 6 LOGIC: RNA VÀ GHÉP CHỨC NĂNG
========================================================================= */
function checkQuiz6A(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb6A');

  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Phân tử RNA sử dụng Uracil (U) thay thế cho Thymine (T) trong DNA.';
    window.lmsState.st06.quiz6A = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Quan sát lại bảng đối chiếu DNA và RNA ở hình trên.';
    window.lmsState.st06.quiz6A = false;
  }
  checkStage6Progress();
  reportHeight();
}


function checkQuiz6D(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb6D');
  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Lá chẻ ba là cấu trúc bậc 2, còn chữ L là dạng 3D không gian của cùng một phân tử tRNA.';
    window.lmsState.st06.quiz6D = true;
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa chính xác. Đây là hai cách biểu diễn mức cấu trúc của cùng một phân tử tRNA.';
    window.lmsState.st06.quiz6D = false;
  }
  checkStage6Progress();
  reportHeight();
}

let activeRnaRole = null;
let activeRoleText = '';

function pickRnaRole(roleId, btn) {
  document.querySelectorAll('#trayRnaRoles .drag-part').forEach(b => b.classList.remove('selected'));
  activeRnaRole = roleId;
  activeRoleText = btn.textContent.trim();
  btn.classList.add('selected');
}

function assignRna(rnaType) {
  if (!activeRnaRole) return;
  const isCorrect = (rnaType === 'mRNA' && activeRnaRole === 'role1') ||
                    (rnaType === 'tRNA' && activeRnaRole === 'role2') ||
                    (rnaType === 'rRNA' && activeRnaRole === 'role3');

  if (isCorrect) {
    document.getElementById('txt' + rnaType).innerHTML = `<span style="color:var(--jade-text);font-weight:700">✓ ${activeRoleText}</span>`;
    document.getElementById('slot' + rnaType).classList.add('filled');
    window.lmsState.st06.rolesMatched[rnaType] = true;
    activeRnaRole = null;
  }
  checkStage6Progress();
  reportHeight();
}

function checkStage6Progress() {
  const { mRNA, tRNA, rRNA } = window.lmsState.st06.rolesMatched;
  if (window.lmsState.st06.quiz6A && window.lmsState.st06.quiz6D && mRNA && tRNA && rRNA) {
    document.getElementById('btnNext6').disabled = false;
    window.lmsState.stagesCompleted.st06 = true;
  }
}

/* =========================================================================
   STAGE 7 & MODAL HOÀN THÀNH + PHÁO HOA CANVAS
========================================================================= */

function checkQuiz7A(btn, isCorrect) {
  const card = btn.closest('.quiz-card');
  card.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));
  const fb = document.getElementById('quizFb7A');
  if (isCorrect) {
    btn.classList.add('selected-correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = '<i class="ti ti-check"></i> Chính xác! Hai mạch bổ sung là cơ sở để mỗi mạch làm khuôn tạo mạch mới chính xác.';
  } else {
    btn.classList.add('selected-wrong');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = '<i class="ti ti-x"></i> Chưa đúng. Hãy nhớ lại cơ chế sao chép bán bảo toàn nhờ hai mạch bổ sung.';
  }
  reportHeight();
}

let expectedFlowStep = 1;
function stepCentralFlow(stepNum, btn) {
  if (stepNum === expectedFlowStep) {
    btn.style.background = 'var(--correct-bg)';
    btn.style.borderColor = 'var(--correct)';
    btn.style.color = 'var(--jade-dark)';
    expectedFlowStep++;
    if (expectedFlowStep > 5) {
      document.getElementById('flowSuccessBox').style.display = 'block';
      reportHeight();
    }
  }
}

function finishLesson() {
  const modal = document.getElementById('completionModal');
  modal.classList.remove('hidden');
  launchConfetti();
  reportHeight();
}

function closeModal() {
  document.getElementById('completionModal').classList.add('hidden');
  reportHeight();
}

function restartLesson() {
  closeModal();
  goStage('st01');
}

/* Hiệu ứng pháo hoa tự sinh độc lập trên Canvas */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;

  const particles = [];
  const colors = ['#10b981', '#38bdf8', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.8) * 14,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
      gravity: 0.25
    });
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      if (p.life > 0) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        active = true;
      }
    });

    if (active) {
      requestAnimationFrame(frame);
    }
  }
  frame();
}
