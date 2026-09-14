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

1. **Quy Định Loại Bỏ Header Banner (BẮT BUỘC)**:
   - **Tuyệt đối KHÔNG DÙNG khối `<header>` banner**: Không dùng banner nền gradient xanh đậm, không dùng `.header-badge`, tiêu đề `<h1>` hay `.header-goal` ở đầu trang.
   - Bài học bắt đầu trực tiếp từ **Thanh tiến trình Sticky Top 0 (`.progress-nav-container`)** hoặc vùng làm việc tương tác, tối ưu toàn bộ chiều cao cho học sinh và tương thích tuyệt đối với file mẫu chuẩn [`SH10_B02_M02.html`](modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html).
2. **Thanh Tiến Trình Sticky Top 0 (`.progress-nav-container`)**:
   - Cố định dính trên đỉnh khi cuộn trang (`position: sticky; top: 0; z-index: 100;`).
   - Hỗ trợ cuộn ngang mượt mà trên mobile (`overflow-x: auto; white-space: nowrap; scrollbar-width: none;`).
   - Các tab bước `.step-tab`: hiển thị rõ trạng thái `active` (đang học) và `completed` (kèm biểu tượng check `✓`).
3. **Quy Tắc Chống Trùng Lặp Hướng Dẫn & Chống Tự Bịa Văn Bản (Anti-Duplication & Zero-Hallucination — BẮT BUỘC)**:
   - **Nguyên tắc "Đơn điểm hướng dẫn" (Single Point of Instruction):** Khung Hướng dẫn (`.guide-box` / `.guidance-box`) **CHỈ xuất hiện 1 lần duy nhất và nằm NGAY PHÍA TRÊN khu vực làm bài/thao tác** (dưới tiêu đề/lời dẫn ngắn, trước sơ đồ/hình ảnh/canvas/khay thẻ).
   - **Lọc sạch trùng lặp từ kịch bản gốc (Clean-up Lead Text):** Nếu file kịch bản gốc lỡ viết câu lệnh thao tác vào cả Lời dẫn (ví dụ: *"Quan sát hai hình dưới đây. Nhấn vào từng hình để xem..."*), AI khi render HTML **BẮT BUỘC phải lược bỏ vế câu lệnh thao tác ở `.lead-text`**, chỉ giữ lại câu bối cảnh khoa học thuần túy (ví dụ: *"Quan sát hai hình đối chiếu dưới đây để tìm hiểu sự khác biệt..."*). Câu lệnh hành động chỉ được phép xuất hiện duy nhất ở `.guide-box`.
   - **Tuyệt đối KHÔNG tự bịa badge và hướng dẫn phụ:**
     - **CẤM tự tạo huy hiệu đè lên ảnh:** Không tự ý chèn các badge như `.touch-hint-badge` (*"Chạm để khám phá"*, *"Nhấn để xem"*). Trên ảnh chỉ đặt các nút hotspot số tròn (1, 2, 3...) chuẩn.
     - **CẤM tự bịa câu hướng dẫn ở khung kết quả/caption box bên dưới:** Tuyệt đối không tự viết thêm các câu như *"Chạm vào điểm trên tán lá để xem hoạt động"*, *"Chạm vào chú thỏ..."*, *"Nhấn vào hình để xem..."*. Khung chú thích trước khi click chỉ hiển thị placeholder trạng thái trung tính ngắn gọn (ví dụ: *“Chọn một điểm trên hình để xem thông tin chi tiết”*); sau khi click chỉ hiển thị đúng kiến thức sinh học từ kịch bản.
     - **CẤM tự nối thêm chữ vào hướng dẫn:** Không tự thêm câu *" (Trên thiết bị cảm ứng: chạm chọn thẻ rồi chạm nhóm đích)"* nếu kịch bản không yêu cầu.
4. **Hàng Nút Điều Hướng Stage (`.controls-row` / `.stage-actions`)**:
   - Đặt ở cuối mỗi stage: Nút "QUAY LẠI" (`.btn-secondary`), nút "TIẾP TỤC" (`.btn-primary`).
   - Nút "TIẾP TỤC" mặc định bị khóa (`disabled`) và chỉ sáng lên khi học sinh đã hoàn thành 100% nhiệm vụ của stage.
5. **Modal Chúc Mừng Hoàn Thành V10 + Pháo Hoa Canvas (`#completionModal`)**:
   - Khi hoàn thành bài học, bắt buộc hiển thị Modal overlay chúc mừng chuẩn V10 với biểu tượng cúp vàng (`ti ti-trophy`) và 2 nút hành động ("Xem lại bài", "Đóng thông báo").
   - Kích hoạt hiệu ứng pháo hoa bằng hàm `launchConfetti()` vẽ Canvas tự sinh độc lập, không dùng thư viện ngoài, không dùng popup `alert()` sơ sài.
   - **Quy tắc ẩn Modal khi tải trang (CHỐNG LỖI TỰ ĐỘNG HIỆN MODAL)**:
     - Thẻ modal ban đầu trong HTML bắt buộc phải có class `hidden`: `<div class="congrats-overlay hidden" id="completionModal" role="dialog" aria-modal="true">`.
     - Trong CSS bắt buộc phải có quy tắc độ ưu tiên cao:
       ```css
       .hidden { display: none !important; }
       .congrats-overlay.hidden,
       .modal-backdrop.hidden,
       #completionModal.hidden {
         display: none !important;
       }
       ```
     - *Tuyệt đối không được thiếu `.congrats-overlay.hidden` hoặc thiếu `!important`*, vì nếu không selector `.congrats-overlay { display: grid; }` ở cuối CSS sẽ ghi đè `.hidden`, làm modal tự hiện đè lên toàn trang ngay khi vừa mở file khiến học sinh không thao tác được.
6. **Bảo toàn Tích Hợp LMS & Chiều Cao Tự Động**:
   - State lưu trong biến JS runtime `window.lmsState = { ... }`. Tuyệt đối không dùng `localStorage`, `sessionStorage` hoặc cookie.
   - Duy trì hàm `reportHeight()` tự động tính `document.documentElement.scrollHeight` và gửi `postMessage` để sẵn sàng nhúng vào bất kỳ hệ thống LMS/iframe nào mà không bị lỗi thanh cuộn đôi.
7. **Chuẩn Tương Tác Nối Kéo & Bộ Micro-Animations Mượt Mà (BẮT BUỘC)**:
   - **Kéo thả thẻ đa nền tảng (Hybrid Drag & Drop + Touch Fallback):** Hỗ trợ kéo thả chuột trên desktop và cơ chế chạm chọn nguồn $\rightarrow$ chạm đích trên thiết bị cảm ứng (`.selected` viền nét đứt phát sáng). Có tính năng hoàn tác (chạm thẻ trong vùng đích để trả về khay). Khay rỗng hiện thông báo ghi nhận `.source-tray-empty`.
   - **Ghép đôi 2 cột bằng đường tia SVG (`2-Column Vertical Match with SVG Lines`):** Vẽ đường nối xanh ngọc trực tiếp nối giữa 2 chấm tròn `.dot` của thẻ trái và thẻ phải qua `getBoundingClientRect()`.
   - **Bộ micro-animations mượt mà:** Bắt buộc có vòng xung nhịp lan tỏa ở hotspot (`.pulse-ring` & `pulseAnim`, tắt khi đã xem); hiệu ứng chuyển stage và panel êm dịu (`fadeIn`, `slideUp`); hiệu ứng rung nhẹ cảnh báo khi làm sai (`shake`); hiệu ứng viền xoay Canvas (`canvasBorderSpin`); hiệu ứng modal pop-in (`modalPop`) và pháo hoa giấy Confetti Canvas (`launchConfetti`).

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