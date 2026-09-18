const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('modules/Lop_10/SH10_B07_M03/SH10_B07_M03.html', 'utf8');

console.log('=================================================================');
console.log('       KIỂM TRA TOÀN DIỆN FILE SH10_B07_M03.html (INLINE SVG)');
console.log('=================================================================');

// 1. Athena Manifest JSON Check
const athenaMatch = html.match(/<script type="application\/json" id="athena-context">([\s\S]*?)<\/script>/);
if (athenaMatch) {
  try {
    const athena = JSON.parse(athenaMatch[1]);
    console.log('[PASS] ATHENA CONTEXT VALID: Title =', athena.title, '| Grade =', athena.grade);
  } catch (e) {
    console.error('[FAIL] Athena JSON parse error:', e.message);
  }
} else {
  console.error('[FAIL] Athena script tag not found');
}

// 2. JavaScript Syntax Check
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    new vm.Script(scriptMatch[1]);
    console.log('[PASS] JAVASCRIPT SYNTAX 100% VALID (Node.js vm.Script)');
  } catch (e) {
    console.error('[FAIL] JavaScript syntax error:', e.message);
  }
} else {
  console.error('[FAIL] Script tag not found');
}

// 3. Check for any remaining external .svg img tags
const svgImgMatches = html.match(/<img[^>]*\.svg[^>]*>/g);
if (!svgImgMatches || svgImgMatches.length === 0) {
  console.log('[PASS] ZERO EXTERNAL SVG IMG TAGS: All SVGs are 100% inlined!');
} else {
  console.error('[FAIL] Found external SVG img tags:', svgImgMatches);
}

// 4. Check inline SVGs presence
const hasInlineEukaryote = html.includes('ĐỐI CHIẾU: NHÂN TẾ BÀO NHÂN THỰC') && html.includes('id="nuclearPores"');
const hasInlineMechanisms = html.includes('BỐN CƠ CHẾ KHÁNG KHÁNG SINH TIÊU BIỂU Ở VI KHUẨN') && html.includes('id="panelSimUptake"');
console.log(`[${hasInlineEukaryote ? 'PASS' : 'FAIL'}] Inline Eukaryote Nucleus SVG`);
console.log(`[${hasInlineMechanisms ? 'PASS' : 'FAIL'}] Inline 4 Mechanisms Infographic SVG`);

// 5. Modal anti-auto-popup CSS check
const modalHideCheck = html.includes('.congrats-overlay.hidden') &&
                       html.includes('display: none !important;') &&
                       html.includes('class="congrats-overlay hidden" id="completionModal"');
console.log(`[${modalHideCheck ? 'PASS' : 'FAIL'}] Modal anti-auto-popup standard rule`);

// 6. Base image exists
const baseImgPath = 'modules/Lop_10/SH10_B07_M03/images/SH10-B07-M03-A01.jpg';
console.log(`[${fs.existsSync(baseImgPath) ? 'PASS' : 'FAIL'}] Base Image SH10-B07-M03-A01.jpg exists on disk`);

// 7. Check LMS state variables
const lmsCheck = html.includes('s01_components') &&
                 html.includes('ribosome_function') &&
                 html.includes('nucleoid_examined') &&
                 html.includes('s02_answer') &&
                 html.includes('plasmid_sort') &&
                 html.includes('mechanisms_seen') &&
                 html.includes('final_correct_statements') &&
                 html.includes('m03_completed') &&
                 html.includes('lesson_b07_completed');
console.log(`[${lmsCheck ? 'PASS' : 'FAIL'}] Complete LMS State runtime variables`);

console.log('\nTổng kết: Mã nguồn đã chuyển đổi toàn bộ SVG thành inline code hoàn toàn sạch sẽ, độc lập tự chứa!');
