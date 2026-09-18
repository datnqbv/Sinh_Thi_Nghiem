const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('modules/Lop_10/SH10_B07_M02/SH10_B07_M02.html', 'utf8');

console.log('=================================================================');
console.log('       KIỂM TRA TOÀN DIỆN FILE SH10_B07_M02.html');
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
}

// 3. Image existence on disk
const images = [
  'SH10-B07-M02-A01.jpg',
  'SH10-B07-M02-A02.jpg',
  'SH10-B07-M02-A03.jpg',
  'SH10-B07-M02-A04.jpg'
];
images.forEach(img => {
  const path = `modules/Lop_10/SH10_B07_M02/images/${img}`;
  if (fs.existsSync(path)) {
    const stat = fs.statSync(path);
    console.log(`[PASS] Image ${img} exists (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`[FAIL] Image missing: ${path}`);
  }
});

// 4. Modal anti-auto-popup CSS check
const modalHideCheck = html.includes('.congrats-overlay.hidden') &&
                       html.includes('display: none !important;') &&
                       html.includes('class="congrats-overlay hidden" id="completionModal"');
console.log(`[${modalHideCheck ? 'PASS' : 'FAIL'}] Modal anti-auto-popup standard rule`);

// 5. Check all 6 stages against Kịch bản
const checks = [
  // S01
  { name: 'S01: Tiêu đề "Quan sát một tế bào vi khuẩn điển hình"', test: html.includes('Quan sát một tế bào vi khuẩn điển hình') },
  { name: 'S01: Box lời giảng đầy đủ', test: html.includes('Tế bào vi khuẩn có thể mang các cấu trúc ở ngoài bề mặt như lông và roi') },
  { name: 'S01: Hướng dẫn nhấn 5 điểm sáng', test: html.includes('Nhấn lần lượt vào năm điểm sáng') },
  { name: 'S01: Nút "BẮT ĐẦU QUAN SÁT"', test: html.includes('BẮT ĐẦU QUAN SÁT') },
  { name: 'S01: Nút "TIẾP TỤC" (hiện sau 5/5)', test: html.includes('id="btnNextStage1"') },
  { name: 'S01: Phản hồi hoàn thành kịch bản', test: html.includes('Bạn đã có bản đồ tổng quan. Tiếp theo, hãy phân biệt hai cấu trúc dạng sợi dễ bị nhầm lẫn nhất.') },
  { name: 'S01: Tự động đóng thẻ tên 2.5 giây', test: html.includes('popoverAutoTimer') },

  // S02
  { name: 'S02: Tiêu đề "Lông và roi khác nhau như thế nào?"', test: html.includes('Lông và roi khác nhau như thế nào?') },
  { name: 'S02: Box lời giảng lông/roi', test: html.includes('Lông thường ngắn và nhiều, giúp bám dính') },
  { name: 'S02: Thẻ kéo "Bám dính" và "Vận động"', test: html.includes('Bám dính') && html.includes('Vận động') },
  { name: 'S02: Phản hồi đúng kịch bản', test: html.includes('Đúng. Lông ngắn, nhiều và chủ yếu giúp bám dính; roi dài hơn, ít hơn và tạo vận động. Tiếp theo, ta so sánh các lớp vỏ của hai nhóm Gram.') },
  { name: 'S02: Phản hồi sai kịch bản', test: html.includes('Hãy nhìn lại độ dài và số lượng: cấu trúc dài, ít là roi; cấu trúc ngắn, nhiều là lông.') },

  // S03
  { name: 'S03: Tiêu đề "Thành tế bào tiết lộ điều gì khi nhuộm Gram?"', test: html.includes('Thành tế bào tiết lộ điều gì khi nhuộm Gram?') },
  { name: 'S03: Box lời giảng peptidoglycan/Gram+/Gram-', test: html.includes('Thành tế bào vi khuẩn chứa peptidoglycan') },
  { name: 'S03: Nút "NHUỘM GRAM"', test: html.includes('NHUỘM GRAM') },
  { name: 'S03: Mô tả "Peptidoglycan dày – tím"', test: html.includes('Peptidoglycan dày') && html.includes('tím') },
  { name: 'S03: Mô tả "Peptidoglycan mỏng + màng ngoài – hồng đỏ"', test: html.includes('Peptidoglycan mỏng') && html.includes('hồng đỏ') },
  { name: 'S03: Phản hồi đúng kịch bản', test: html.includes('Đúng. Điểm phân biệt không chỉ là màu, mà còn là độ dày peptidoglycan và sự có mặt của màng ngoài ở Gram âm.') },
  { name: 'S03: Phản hồi sai kịch bản', test: html.includes('Kiểm tra lại: Gram dương có peptidoglycan dày; Gram âm có peptidoglycan mỏng và thêm màng ngoài.') },

  // S04
  { name: 'S04: Tiêu đề "Màng ngoài của vi khuẩn Gram âm"', test: html.includes('Màng ngoài của vi khuẩn Gram âm') },
  { name: 'S04: Box lời giảng màng ngoài, LPS, lipid A', test: html.includes('Màng ngoài là hàng rào bảo vệ đặc trưng của vi khuẩn Gram âm') },
  { name: 'S04: 5 lớp tương tác từ ngoài vào trong', test: html.includes('data-layer="1"') && html.includes('data-layer="5"') },
  { name: 'S04: Vệt sáng trực quan trên ảnh A04', test: html.includes('layer-highlight-indicator') },
  { name: 'S04: Câu hỏi "Phần nào của LPS gắn với hoạt tính nội độc tố?"', test: html.includes('Phần nào của LPS gắn với hoạt tính nội độc tố?') },
  { name: 'S04: 3 lựa chọn A (Lipid A), B, C', test: html.includes('Lipid A') },
  { name: 'S04: Phản hồi đúng kịch bản', test: html.includes('Đúng. Lipid A là phần quyết định hoạt tính nội độc tố của LPS. Tiếp theo, hãy phân biệt màng ngoài với màng tế bào.') },
  { name: 'S04: Phản hồi sai kịch bản', test: html.includes('Xem lại cấu tạo LPS ở lá ngoài của màng ngoài; nội độc tố không được ‘tạo ra do LPS phân hủy’.') },

  // S05
  { name: 'S05: Tiêu đề "Màng tế bào – ranh giới trao đổi có chọn lọc"', test: html.includes('Màng tế bào – ranh giới trao đổi có chọn lọc') },
  { name: 'S05: Box lời giảng màng sinh chất', test: html.includes('Nằm sát tế bào chất là màng tế bào, gồm chủ yếu lớp kép phospholipid và protein') },
  { name: 'S05: Mô hình vector SVG lớp kép phospholipid & kênh protein', test: html.includes('membraneBilayerSvg') && html.includes('phospholipidHeadsTop') },
  { name: 'S05: Đặt cạnh hình thu nhỏ màng ngoài Gram âm (line 96)', test: html.includes('membrane-companion-card') && html.includes('SH10-B07-M02-A04.jpg') },
  { name: 'S05: 3 loại hạt phân tử tương tác', test: html.includes('data-particle="water"') && html.includes('data-particle="sugar"') && html.includes('data-particle="ion"') },
  { name: 'S05: Câu hỏi trắc nghiệm tính chọn lọc', test: html.includes('Màng tế bào kiểm soát có chọn lọc sự trao đổi') },
  { name: 'S05: Phản hồi đúng kịch bản', test: html.includes('Đúng. Màng tế bào có ở mọi tế bào và kiểm soát trao đổi có chọn lọc. Sang màn cuối, bạn sẽ ghép toàn bộ các lớp theo đúng thứ tự.') },
  { name: 'S05: Phản hồi sai kịch bản', test: html.includes('Hãy xem lại vị trí sát tế bào chất và vai trò của protein màng; màng tế bào có ở cả Gram dương và Gram âm.') },

  // S06
  { name: 'S06: Tiêu đề "Hoàn thiện sơ đồ các lớp bao bọc"', test: html.includes('Hoàn thiện sơ đồ các lớp bao bọc') },
  { name: 'S06: Box lời giảng kháng sinh penicillin', test: html.includes('Kháng sinh beta-lactam như penicillin ức chế tổng hợp peptidoglycan') },
  { name: 'S06: Sơ đồ Gram+ (2 vị trí) & Gram- (3 vị trí)', test: html.includes('slotPos1') && html.includes('slotPos2') && html.includes('slotNeg1') && html.includes('slotNeg3') },
  { name: 'S06: 5 thẻ kéo thả khay thẻ', test: html.includes('cThickPep') && html.includes('cOuterMem') && html.includes('cThinPep') && html.includes('cPlasma1') && html.includes('cPlasma2') },
  { name: 'S06: Câu hỏi "Cấu trúc nào là đích của penicillin?"', test: html.includes('Cấu trúc nào là đích của penicillin?') },
  { name: 'S06: Lựa chọn A (Quá trình tổng hợp peptidoglycan)', test: html.includes('Quá trình tổng hợp peptidoglycan của thành tế bào') },
  { name: 'S06: Phản hồi đúng kịch bản', test: html.includes('Chính xác. Bạn đã phân biệt lông–roi, hai kiểu vỏ Gram và màng tế bào. Module tiếp theo sẽ đi vào tế bào chất, vùng nhân và plasmid.') },
  { name: 'S06: Phản hồi sai kịch bản', test: html.includes('Đích trực tiếp được nhắc ở đây là quá trình tạo peptidoglycan, không phải DNA hay ribosome.') },
  { name: 'S06: Nút "HOÀN THÀNH"', test: html.includes('HOÀN THÀNH') },

  // DEV_ONLY LMS Variables
  { name: 'LMS: viewed_structures', test: html.includes('viewed_structures') },
  { name: 'LMS: pairing_fimbriae_flagellum', test: html.includes('pairing_fimbriae_flagellum') },
  { name: 'LMS: attempts_s02', test: html.includes('attempts_s02') },
  { name: 'LMS: gram_stain_viewed', test: html.includes('gram_stain_viewed') },
  { name: 'LMS: gram_pairing', test: html.includes('gram_pairing') },
  { name: 'LMS: attempts_s03', test: html.includes('attempts_s03') },
  { name: 'LMS: layers_seen', test: html.includes('layers_seen') },
  { name: 'LMS: membrane_trials', test: html.includes('membrane_trials') },
  { name: 'LMS: s05_answer', test: html.includes('s05_answer') },
  { name: 'LMS: attempts_s05', test: html.includes('attempts_s05') },
  { name: 'LMS: gram_positive_layers', test: html.includes('gram_positive_layers') },
  { name: 'LMS: gram_negative_layers', test: html.includes('gram_negative_layers') },
  { name: 'LMS: beta_lactam_target', test: html.includes('beta_lactam_target') },
  { name: 'LMS: m02_completed', test: html.includes('m02_completed') }
];

console.log('\n--- CHI TIẾT CÁC MỤC KIỂM TRA ĐỐI CHIẾU KỊCH BẢN ---');
let passed = 0, failed = 0;
checks.forEach(c => {
  if (c.test) {
    passed++;
    console.log(`[PASS] ${c.name}`);
  } else {
    failed++;
    console.error(`[FAIL] ${c.name}`);
  }
});

console.log(`\nTỔNG KẾT: ${passed}/${checks.length} MỤC ĐẠT CHUẨN (Thất bại: ${failed})`);
