const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CONFETTI_CODE = `
    function launchConfetti() {
      const canvas = document.createElement('canvas');
      canvas.id = 'confettiCanvas';
      canvas.style.position = 'fixed';
      canvas.style.inset = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9998';
      document.body.appendChild(canvas);
      const cctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particles = [];
      const colors = ['#3CA57A', '#2D8B6F', '#E8A24A', '#4E7F92', '#C15F3C'];
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 18,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rSpeed: (Math.random() - 0.5) * 10,
          life: 1,
          decay: Math.random() * 0.015 + 0.008
        });
      }
      function animate() {
        cctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        particles.forEach(p => {
          if (p.life > 0) {
            active = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.3;
            p.life -= p.decay;
            p.rotation += p.rSpeed;
            cctx.save();
            cctx.translate(p.x, p.y);
            cctx.rotate((p.rotation * Math.PI) / 180);
            cctx.globalAlpha = Math.max(0, p.life);
            cctx.fillStyle = p.color;
            cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            cctx.restore();
          }
        });
        if (active) requestAnimationFrame(animate);
        else canvas.remove();
      }
      requestAnimationFrame(animate);
    }
`;

const CLOSE_MODAL_CODE = `
    function closeCompletionModal() {
      const modal = document.getElementById('completionModal') || document.getElementById('congratsModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('show');
      }
      if (typeof reportHeight === 'function') reportHeight();
    }
`;

function fixFile(filePath) {
  console.log('Processing:', filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure .hidden { display: none !important; } exists in <style>
  if (!content.includes('.hidden { display: none !important; }') && !content.includes('.hidden{display:none!important}')) {
    // Replace non-important .hidden
    if (content.match(/\.hidden\s*\{\s*display\s*:\s*none\s*;?\s*\}/)) {
      content = content.replace(/\.hidden\s*\{\s*display\s*:\s*none\s*;?\s*\}/g, '.hidden { display: none !important; }');
    } else {
      // Add right after <style>
      content = content.replace(/<style>/i, '<style>\n    .hidden { display: none !important; }');
    }
  }

  // 2. Ensure .congrats-overlay.hidden, .modal-backdrop.hidden, #completionModal.hidden exists in CSS
  const overlayHiddenRule = `
    .congrats-overlay.hidden,
    .modal-backdrop.hidden,
    #completionModal.hidden,
    #congratsModal.hidden {
      display: none !important;
    }
`;
  if (!content.includes('.congrats-overlay.hidden') && !content.includes('#completionModal.hidden')) {
    // Place it right after .congrats-overlay { ... } or .modal-backdrop { ... }
    if (content.includes('.congrats-overlay')) {
      content = content.replace(/(\.congrats-overlay[^{]*\{[^}]+\})/, '$1' + overlayHiddenRule);
    } else if (content.includes('.modal-backdrop')) {
      content = content.replace(/(\.modal-backdrop[^{]*\{[^}]+\})/, '$1' + overlayHiddenRule);
    } else {
      content = content.replace(/<\/style>/i, overlayHiddenRule + '\n  </style>');
    }
  }

  // 3. Ensure completionModal tag has class="... hidden"
  content = content.replace(/<div([^>]*id=["']completionModal["'][^>]*)>/gi, (match, attrs) => {
    let newAttrs = attrs;
    if (!attrs.includes('class=')) {
      newAttrs = ' class="congrats-overlay hidden"' + newAttrs;
    } else if (!attrs.includes('hidden')) {
      newAttrs = newAttrs.replace(/class=["']([^"']+)["']/, 'class="$1 hidden"');
    }
    return '<div' + newAttrs + '>';
  });

  // 4. Ensure closeCompletionModal function exists
  if (!content.includes('function closeCompletionModal')) {
    // Insert into <script>
    content = content.replace(/<script>/i, '<script>\n' + CLOSE_MODAL_CODE);
  }

  // 5. Ensure launchConfetti function exists
  if (!content.includes('function launchConfetti')) {
    content = content.replace(/<script>/i, '<script>\n' + CONFETTI_CODE);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed:', filePath);
}

const targetFiles = [
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

targetFiles.forEach(fixFile);
console.log('All files fixed!');
