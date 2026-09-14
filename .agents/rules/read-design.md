---
trigger: always_on
---

# QUY TẮC BẮT BUỘC & TIÊU CHUẨN KỸ THUẬT (BIOLOGY AI WORKFLOW)

Áp dụng bắt buộc cho mọi trợ lý AI khi sửa đổi, viết mới hoặc refactor code trong dự án học liệu số Sinh học (`SInh_Thi_Nghiem`):

## 1. Kiến trúc Dự án: Module Tự Chứa Hoàn Toàn (Không Dùng File HTML Mẹ)
- **Dự án không còn làm file HTML mẹ (Shell/Portal)**: Mọi sự phát triển tập trung 100% vào các file HTML **Module học liệu tự chứa (Standalone Modules)** chạy độc lập trực tiếp trên trình duyệt.
- **Phân loại rõ ràng thư mục**:
  - `modules/Lop_10/`, `modules/Lop_11/`, `modules/Lop_12/`: Chứa các bài học tương tác lý thuyết theo module.
  - `experiments/Lop_10/`, `experiments/Lop_11/`, `experiments/Lop_12/`: Chứa các bài thí nghiệm thực hành sinh học ảo.
  - Mỗi thư mục module/thí nghiệm chứa file HTML độc lập, các file kịch bản giữ nguyên tên gốc và thư mục ảnh `images/`. Không đặt file lung tung ra thư mục gốc.

## 2. Tiêu Chuẩn Thiết Kế Module V10 Thống Nhất ("10 File Như Một")
Mọi file module được tạo mới hoặc nâng cấp bắt buộc tuân theo khuôn mẫu chuẩn V10 tham chiếu từ [`modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html`](modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html):

1. **Header Banner Gradient V10 Phẳng & Mục Tiêu Động**:
   - Nền gradient thương hiệu (`linear-gradient(135deg, var(--jade-dark), #1c523d)`), không dùng ảnh nền ngoài.
   - Có badge định danh `.header-badge`, tiêu đề `<h1>`.
   - **Hộp mục tiêu động `.header-goal` (`#headerGoal` / `#goalText`)**: Cập nhật tự động nội dung mục tiêu tương ứng theo từng Stage khi chuyển màn qua dictionary `stageGoals = { 0: '...', 1: '...', ... }`.
2. **Thanh Tiến Trình Sticky Top 0 (`.progress-nav-container`)**:
   - Cố định dính trên đỉnh khi cuộn trang (`position: sticky; top: 0; z-index: 100;`).
   - Hỗ trợ cuộn ngang mượt mà trên mobile (`overflow-x: auto; white-space: nowrap; scrollbar-width: none;`).
   - Các tab bước `.step-tab`: hiển thị rõ trạng thái `active` (đang học) và `completed` (kèm biểu tượng check `✓`).
3. **Quy Tắc Chống Trùng Lặp Hướng Dẫn (Anti-Duplication Guidance Rule — BẮT BUỘC)**:
   - **Vị trí DUY NHẤT:** Khung Hướng dẫn (`.guide-box` / `.guidance-box`) **CHỈ xuất hiện 1 lần duy nhất và nằm NGAY PHÍA TRÊN khu vực làm bài/thao tác** (dưới tiêu đề/lời dẫn ngắn, trước sơ đồ/hình ảnh/canvas/khay thẻ).
   - **Không lặp lại câu lệnh hướng dẫn ("Nhấn vào...") trong lời dẫn đầu (`.lead-text`)**: `lead-text` chỉ mang tính định hướng bối cảnh khoa học.
   - **Không lặp lại mệnh lệnh ở các huy hiệu hoặc khung kết quả bên dưới**: Trên card/ảnh chỉ dùng badge chạm ngắn gọn (`Chạm để khám phá`); khung giải thích bên dưới chỉ hiển thị trạng thái chờ hoặc nội dung kiến thức sinh học, tuyệt đối không lặp lại nguyên văn câu mệnh lệnh hướng dẫn.
4. **Hàng Nút Điều Hướng Stage (`.controls-row` / `.stage-actions`)**:
   - Đặt ở cuối mỗi stage: Nút "QUAY LẠI" (`.btn-secondary`), nút "TIẾP TỤC" (`.btn-primary`).
   - Nút "TIẾP TỤC" mặc định bị khóa (`disabled`) và chỉ sáng lên khi học sinh đã hoàn thành 100% nhiệm vụ của stage.
5. **Modal Chúc Mừng Hoàn Thành V10 + Pháo Hoa Canvas (`#completionModal`)**:
   - Khi hoàn thành bài học, bắt buộc hiển thị Modal overlay chúc mừng chuẩn V10 với biểu tượng cúp vàng (`ti ti-trophy`) và 2 nút hành động ("Xem lại bài", "Đóng thông báo").
   - Kích hoạt hiệu ứng pháo hoa bằng hàm `launchConfetti()` vẽ Canvas tự sinh độc lập, không dùng thư viện ngoài, không dùng popup `alert()` sơ sài.
6. **Bảo toàn Tích Hợp LMS & Chiều Cao Tự Động**:
   - State lưu trong biến JS runtime `window.lmsState = { ... }`. Tuyệt đối không dùng `localStorage`, `sessionStorage` hoặc cookie.
   - Duy trì hàm `reportHeight()` tự động tính `document.documentElement.scrollHeight` và gửi `postMessage` để sẵn sàng nhúng vào bất kỳ hệ thống LMS/iframe nào mà không bị lỗi thanh cuộn đôi.

## 3. Quy Trình 4 Bước Bắt Buộc Trước Khi Code
- **Bước 1 (BẮT BUỘC):** Đọc đối chiếu các file quy chuẩn tại thư mục gốc:
  - `Rule_Design_Sinh.md`: Chuẩn thiết kế sư phạm, bảng màu Tom Haugomat, đồ họa sinh học, font chữ, quy tắc chống lặp hướng dẫn.
  - `Rule_Thiet_Ke_Chung.md`: Quy chuẩn cấu trúc module V10.
- **Bước 2:** Đọc file kịch bản nội dung (`*_KICH_BAN_NOI_DUNG.txt` hoặc `*_Kich_Ban.md`) và kịch bản tạo ảnh (`Kich_Ban_Tao_Anh_*.md`) mang tên gốc trong thư mục module hoặc thí nghiệm đang sửa.
- **Bước 3:** So sánh yêu cầu của người dùng với các file quy chuẩn và kịch bản.
- **Bước 4:** Chỉ sau đó mới tiến hành chỉnh sửa code.
- **KHÔNG ĐƯỢC BỎ QUA BƯỚC 1 TRONG BẤT KỲ TRƯỜNG HỢP NÀO.**

## 4. Quy Định Về Kiểm Thử & Trình Duyệt (Browser Tool)
- **TUYỆT ĐỐI KHÔNG TỰ Ý BẬT BROWSER TEST**: Không sử dụng `browser_subagent` hay mở trình duyệt tự động trừ khi người dùng có yêu cầu rõ ràng.
- **Kiểm thử cú pháp an toàn**: Luôn dùng Node.js (`vm.Script`) để kiểm tra tính toàn vẹn cú pháp HTML/JS sau mỗi lần chỉnh sửa trước khi báo cáo người dùng.

## 5. Quy Chuẩn Tương Tác Sinh Học (Direct Manipulation)
- **Ưu tiên thao tác trực tiếp**: Học sinh tương tác bằng cách click/kéo-thả trực tiếp trên canvas/vật thể (đặt tiêu bản lên kính hiển vi, xoay ốc điều chỉnh tiêu cự, kéo pipet nhỏ giọt hóa chất, kéo thả thẻ phân loại, chạm cặp thẻ nối dây).
- **Thanh điều khiển (`controls`)**: Giữ tinh gọn, chỉ đặt các nút hành động cấp độ toàn cục (như *"Làm lại"*, *"Quay lại"*, *"Tiếp tục"*).