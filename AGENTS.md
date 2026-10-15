# HƯỚNG DẪN BẮT BUỘC CHO AI (BIOLOGY AI WORKFLOW)

> [!CAUTION]
> ### CHỈ THỊ TIÊN QUYẾT: ĐỌC KỊCH BẢN TRƯỚC KHI HÀNH ĐỘNG (MANDATORY GATEKEEPER)
> 1. **BẮT BUỘC DÙNG `view_file` ĐỌC KỊCH BẢN TRƯỚC:** Trước khi trả lời, tạo mới hoặc chỉnh sửa bất kỳ file code nào, AI **BẮT BUỘC phải dùng công cụ `view_file`** để đọc toàn bộ file kịch bản nội dung (`*_Kich_Ban.md` / `*_KICH_BAN_NOI_DUNG.txt` / `*.md` / `*.txt`) trong thư mục bài học hoặc thí nghiệm liên quan.
> 2. **CẤM TỰ PHỎNG ĐOÁN:** Tuyệt đối KHÔNG ĐƯỢC sinh code, viết HTML, hoặc phỏng đoán nội dung sinh học khi chưa thực hiện `view_file` đọc kịch bản gốc. Mọi hành vi tự ý code khi chưa đọc kịch bản đều bị coi là vi phạm nghiêm trọng.
> 3. **ĐỌC FILE QUY CHUẨN CHI TIẾT KHI CẦN:** Nếu làm việc với thư mục `html_text/`, bắt buộc `view_file` đọc [`Rule_HTML_Ly_Thuyet.md`](Rule_HTML_Ly_Thuyet.md); nếu cần chi tiết về đồ họa/thí nghiệm thực hành, đọc [`Rule_Design_Sinh.md`](Rule_Design_Sinh.md) hoặc [`Rule_Thiet_Ke_Chung.md`](Rule_Thiet_Ke_Chung.md).

Tài liệu này là quy chuẩn tối thượng áp dụng cho toàn bộ repository `Sinh_Thi_Nghiem`. Mọi trợ lý AI khi làm việc, sửa đổi, viết mới hoặc refactor mã nguồn trong dự án bắt buộc phải tuân thủ nghiêm ngặt các quy định dưới đây.

---

## 1. QUY TRÌNH 4 BƯỚC BẮT BUỘC TRƯỚC KHI CODE

Trước mọi thao tác viết mới, chỉnh sửa hoặc refactor code, AI phải:
1. **Bước 1:** Đọc đầy đủ các file quy chuẩn tại thư mục gốc:
   - `Rule_Design_Sinh.md`: Chuẩn thiết kế sư phạm, bảng màu Tom Haugomat, đồ họa sinh học, font chữ, quy tắc chống lặp hướng dẫn.
   - `Rule_Thiet_Ke_Chung.md`: Quy chuẩn cấu trúc hai khối (Two-Block Module) và token giao diện V10.
   - `Rule_HTML_Ly_Thuyet.md`: **BẮT BUỘC ĐỌC** khi làm việc với thư mục `html_text/` (HTML bài học lý thuyết cô đọng + bài tập trắc nghiệm).
2. **Bước 2:** Đọc file kịch bản nội dung (`*_Kich_Ban.md` / `*_KICH_BAN_NOI_DUNG.txt` / `*.txt` / `*.md`) và kịch bản tạo ảnh (`Kich_Ban_Tao_Anh_*.md`) mang tên gốc trong thư mục bài học hoặc thí nghiệm liên quan. Không giả định các file này đã được đổi tên chuẩn hóa.
3. **Bước 3:** So sánh yêu cầu của người dùng với quy chuẩn và kịch bản:
   - Kịch bản / file Markdown là **nguồn chuẩn cho nội dung khoa học, câu chữ và logic sư phạm**.
   - Các file rule là **nguồn chuẩn cho thiết kế, kỹ thuật, responsive, LMS/Athena và khả năng tiếp cận**.
4. **Bước 4:** Chỉ bắt đầu sửa sau khi hoàn thành 3 bước trên. **Tuyệt đối không bỏ qua Bước 1 và Bước 2 trong bất kỳ trường hợp nào.**

---

## 2. KIẾN TRÚC DỰ ÁN & CẤU TRÚC THƯ MỤC

### 2.1. Module Tự Chứa Hoàn Toàn (Standalone Modules)
- **Không còn phát triển qua file HTML mẹ (Shell/Portal):** Mọi sự phát triển tập trung 100% vào các file HTML **Module học liệu tự chứa độc lập** chạy trực tiếp trên trình duyệt hoặc nhúng iframe vào LMS.
- **Phân loại thư mục rõ ràng theo 3 nhánh học liệu:**
  1. `modules/Lop_10/`, `modules/Lop_11/`, `modules/Lop_12/`: Module bài học tương tác lý thuyết (Interactive theory modules) với đồ họa, hotspot, sơ đồ nhánh kiến thức hoặc bài tập tương tác.
  2. `experiments/Lop_10/`, `experiments/Lop_11/`, `experiments/Lop_12/`: Thí nghiệm ảo sinh học thực hành (Virtual Lab / Interactive experiments).
  3. `html_text/Lop10/`, `html_text/Lop11/`, `html_text/Lop12/`: Module học liệu lý thuyết cô đọng kết hợp bài tập trắc nghiệm (`<MA_MODULE>_LT.html` và `<MA_MODULE>.md`).
  4. `shells/`: Trang mẹ lưu trữ (chỉ lưu trữ tham khảo, dự án không còn phụ thuộc).
- **Mỗi bài học/thí nghiệm đặt trong thư mục riêng:** Chứa file HTML độc lập, các file kịch bản/markdown giữ nguyên tên gốc và thư mục `images/`. **Không đặt bài học, thí nghiệm hoặc ảnh mới trực tiếp ra thư mục gốc.**
- **Mã module nhất quán:** Giữ mã module thống nhất giữa tên thư mục, tên file HTML, Athena manifest và LMS state.

---

## 3. TIÊU CHUẨN THIẾT KẾ & GIAO DIỆN (TOM HAUGOMAT EDITORIAL FLAT & V10)

File mẫu tham chiếu trục chuẩn cho toàn bộ dự án: [`modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html`](modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html).

### 3.1. Design Tokens Duy Nhất (Không Tự Ý Bịa Token Mới)
```css
:root {
  --cream:#FAF7F0; --cream-2:#F0EADD; --cream-3:#E7DECC;
  --paper-line:#E5DECF; --paper-line-2:#D6CCB6;
  --ink:#1A1A1A; --ink-2:#514C44; --ink-3:#7C756A; --ink-faint:#ABA396;
  --jade:#3CA57A; --jade-deep:#2D8B6F; --jade-dark:#14432F;
  --jade-text:#1B5E48; --jade-soft:#A9D0BE; --jade-pale:#DCEAE1;
  --sage:#A8C9B8; --sage-deep:#7CA792; --sage-text:#46685A; --sage-pale:#E1ECE4;
  --accent:#E8A24A; --accent-deep:#CE8A33; --accent-text:#8A551A; --accent-pale:#F7E7CD;
  --correct:#2D8B6F; --correct-bg:#DCEAE1;
  --wrong:#C15F3C; --wrong-bg:#F3E2D6;
  --warning:#C58A2E; --warning-bg:#F5E7CB;
  --info:#4E7F92; --info-bg:#DCE7EB;
  --radius:10px; --radius-lg:14px; --radius-sm:6px;
  --shadow:0 4px 14px rgba(45,139,111,.10);
  --shadow-sm:0 2px 6px rgba(26,26,26,.05);
}
```

### 3.2. Typography & Cỡ Chữ Chuẩn
- **Font duy nhất:** `Be Vietnam Pro`, Google Fonts weights `400, 500, 600, 700, 800`.
- **Cỡ chữ Body:** Desktop `17px` (hoặc `16.5px`), mobile `< 700px` là `16px`. Line-height: `1.65`.
- **Tiêu đề h1/h2:** `clamp(1.25rem, 2.2vw, 1.75rem)`, weight `700–800`.
- **Hướng dẫn thao tác (`.instruction`):** `.91rem`, line-height `1.55`.
- **Phản hồi (`.inline-feedback`):** `.92rem`, line-height `1.55`.
- **Không chữ nhìn thấy nào nhỏ hơn `.75rem`.**

### 3.3. Loại Bỏ Header Banner Cồng Kềnh
- **Tuyệt đối KHÔNG DÙNG khối `<header>` banner cồng kềnh:** Không dùng banner nền gradient xanh đậm, không dùng `.header-badge`, tiêu đề `<h1>` to đè nền xanh hay `.header-goal`.
- **Giao diện tinh gọn ở đầu trang:** Tiêu đề trang tinh gọn trên nền kem tự nhiên. Tuyệt đối KHÔNG DÙNG `.eyebrow` hay các nhãn phụ phía trên tiêu đề `h2` của card.
- **Không dùng sidebar cố định 2 bên.**

### 3.4. Bố Cục Hai Khối Chuẩn (Two-Block Layout: Trái - Lý Thuyết & Hướng Dẫn, Phải - Hoạt Động & Bài Tập)
- **Cơ chế bám theo động (Mutual Sticky & Zero Nested Scroll):**
  - Cả `.visual-card` và `.workspace-card` đều nằm trong lưới `.split-workspace` (`align-items: start;`) và có `position: sticky; top: 16px;`.
  - **Bên nào ngắn hơn sẽ tự động trôi theo bên dài hơn** khi cuộn trang, giữ nội dung bài tập hoặc lý thuyết luôn song hành trong tầm mắt người học.
- **Bên Trái (`.visual-card`):**
  - **Tuyệt đối KHÔNG DÙNG `max-height` hay `overflow-y: auto`**: Mở rộng tự nhiên 100% chiều cao để người học cuộn toàn trang mượt mà, không bị thanh cuộn con lồng nhau.
  - Chứa tiêu đề nội dung tự nhiên, câu hỏi dẫn dắt.
  - Khung Hướng dẫn thao tác duy nhất (`.instruction` / `.guide-box`).
  - **Nội dung bài học dạng KHỐI DỌC theo đúng thứ tự:** Nếu phần nào có nội dung bài học, bắt buộc thiết kế theo **dạng các khối dọc (`.theory-block`) xếp chồng theo đúng thứ tự tuần tự trong kịch bản**. Không dồn thành một đoạn văn dài.
  - Hình ảnh, sơ đồ minh họa hoặc canvas trực quan hỗ trợ lý thuyết.
- **Bên Phải (`.workspace-card`):**
  - Mang `position: sticky; top: 16px;`. Khi bên trái dài (chứa lý thuyết dọc, bảng số liệu, canvas), bên phải sẽ **bám dính trôi theo** suốt quá trình cuộn trang.
  - Có `max-height: calc(100vh - 32px); overflow-y: auto; scrollbar-width: thin;` dự phòng cho các màn hình có chiều dọc thấp để luôn bấm được nút thao tác.
  - Toàn bộ không gian dành cho **Hoạt động tương tác** (mô phỏng, kéo thả, ghép đôi, thao tác trực tiếp) và **Bài tập củng cố** (trắc nghiệm, kiểm tra).
  - Khung phản hồi kết quả (`.inline-feedback`).
  - **TUYỆT ĐỐI KHÔNG lặp lại lý thuyết hay hướng dẫn từ bên trái.**
- **Responsive (`<= 980px`):** Chuyển layout 1 cột (`grid-template-columns: 1fr;`), cả hai khối chuyển sang `position: static; max-height: none; overflow-y: visible;`.

### 3.5. Quy Tắc Thiết Kế Khối Dọc Cho Nội Dung Bài Học (Vertical Theory Blocks)
- Mọi đơn vị kiến thức (khái niệm, đặc điểm, cơ chế, các bước quy trình...) phải được chia thành các khối dọc (`.theory-block`) có tiêu đề nhỏ (`.theory-block__title`) và nội dung mạch lạc.
- Sắp xếp tuần tự từ trên xuống dưới theo đúng thứ tự logic trong kịch bản.

### 3.6. Nguyên Tắc Chống Trùng Lặp Nội Dung Tuyệt Đối (Strict Zero-Duplication)
- **Đơn điểm hướng dẫn (Single Point of Instruction):** Khung Hướng dẫn (`.instruction` / `.guide-box`) **CHỈ xuất hiện 1 lần duy nhất ở bên trái**.
- **Icon thao tác nhấn chuẩn:** Mọi khung Hướng dẫn (`.instruction` / `.guide-box`) hoặc phần có thao tác nhấn / chạm / chọn tương tác bắt buộc sử dụng icon `<i class="ti ti-hand-click"></i>` (ngón tay phát sóng nhấp chuột của Tabler Icons).
- **Không lặp lý thuyết ở bên phải:** Bên phải chỉ tập trung vào nhiệm vụ hoạt động và bài tập, không tóm tắt hay chép lại lý thuyết bên trái.
- **Lọc sạch trùng lặp:** Lược bỏ toàn bộ câu lệnh thao tác khỏi `.lead` (chỉ giữ bối cảnh khoa học thuần túy).
- **CẤM tự bịa badge đè lên ảnh:** Không tự tạo badge như *"Chạm để khám phá"*, *"Nhấn để xem"*. Trên sơ đồ/ảnh chỉ dùng hotspot số tròn tiêu chuẩn.
- **CẤM tự bịa câu gợi ý/hướng dẫn trong caption box:** Trước khi chọn chỉ để placeholder trung tính ngắn gọn; sau khi chọn chỉ hiển thị nội dung khoa học từ kịch bản.
- **Khung phản hồi (`.inline-feedback`):** Chỉ giải thích kết quả làm bài, không copy lại toàn bộ khối lý thuyết bên trái.

## 4. QUY CHUẨN HỆ THỐNG BÀI TẬP (QUIZ SYSTEM)

Áp dụng đồng bộ cho mọi module có câu hỏi trắc nghiệm, bài tập ôn tập trong `modules/`, `experiments/` và `html_text/`:

1. **Bỏ mã ID câu hỏi kỹ thuật:**
   - Không hiển thị ID kỹ thuật (như `SH10_B01_OT_Q01`) ở giao diện làm bài.
   - Thay bằng nhãn thứ tự câu trực quan, thân thiện: `<i class="ti ti-help-circle"></i> Câu X / Y` (`.question-index-label`).
   - Trước khi kiểm tra, không hiển thị trước metadata (chủ đề, dạng bài, cấp độ tư duy) để học sinh tập trung tư duy giải đề độc lập.
2. **Không đặt nút "Làm lại câu này":**
   - Tránh gây phân tâm và làm rối thao tác của học sinh.
   - Thanh tác vụ câu hỏi (`.quiz-actions`) gồm các nút điều hướng rõ ràng:
     - `[← Câu trước]` (`#prevQuestion`)
     - `[✓ Kiểm tra]` (`#checkAnswer` - nút chính nổi bật)
     - `[Câu sau →]` (`#nextQuestion`)
3. **Phản hồi sau khi bấm "Kiểm tra" (`#checkAnswer`):**
   - **Trạng thái:** Thông báo rõ `✓ Chính xác!` (nền xanh `.ok`) hoặc `⚠ Chưa chính xác!` (nền cam đất `.bad`).
   - **Khung Đáp án đúng (`.correct-answer-box` - BẮT BUỘC):** Hiển thị rõ ràng đáp án chuẩn ngay trên lời giải:
     - *Trắc nghiệm một lựa chọn:* Hiển thị rõ chữ cái và toàn bộ nội dung phương án đúng (ví dụ: `✓ Đáp án đúng: A. [Nội dung phương án đúng]`).
     - *Trắc nghiệm Đúng–Sai:* Liệt kê từng ý (ví dụ: `✓ Đáp án đúng: a) Đúng • b) Sai • c) Đúng • d) Đúng`).
     - *Trả lời ngắn:* Hiển thị đáp số chuẩn đã khóa (ví dụ: `✓ Đáp án đúng: 3` hoặc `✓ Đáp án đúng: 2413 (Thứ tự: 2 → 4 → 1 → 3)`).
   - **Lời giải chi tiết (`.explanation`):** Lập luận khoa học giải thích cặn kẽ vì sao chọn đáp án đó theo đúng kịch bản gốc.
   - **Khối thông tin sư phạm (`.pedagogy-meta`):** Đặt ngay dưới phần lời giải, hiển thị dạng lưới gồm đủ 5 trường:
     1. `Chủ đề`: Tên chủ đề kiến thức (`q.topic`).
     2. `Dạng bài`: Dạng bài tập (`q.taskType`).
     3. `Cấp độ tư duy`: Cấp độ nhận thức (`q.level`) — **bắt buộc dùng thẻ `<strong>` chữ đen đậm đồng bộ với các mục khác**, không dùng huy hiệu màu gây lệch tone.
     4. `Năng lực sinh học`: Thành phần năng lực môn học (`q.competency`).
     5. `Định dạng`: Định dạng câu hỏi (`q.format`, ví dụ: *Trắc nghiệm nhiều lựa chọn*, *Trắc nghiệm Đúng–Sai*, *Trả lời ngắn*).

---

## 5. QUY CHUẨN RIÊNG CHO THƯ MỤC `html_text/` (HTML LÝ THUYẾT & BÀI TẬP)

Áp dụng chi tiết theo tài liệu [`Rule_HTML_Ly_Thuyet.md`](Rule_HTML_Ly_Thuyet.md):

### 5.1. Mục Tiêu & Định Danh File
- **Bản chất:** Module học liệu tự chứa trình bày lý thuyết cô đọng kết hợp hệ thống bài tập trắc nghiệm củng cố kiến thức.
- **Quy tắc đặt tên:** File HTML có hậu tố `_LT.html` (ví dụ `SH10_B01_M01_LT.html`), đặt cùng file dữ liệu Markdown nguồn `.md` (ví dụ `SH10_B01_M01.md`) trong thư mục:
  `html_text/Lop10/<MA_MODULE>/`, `html_text/Lop11/<MA_MODULE>/`, `html_text/Lop12/<MA_MODULE>/`.

### 5.2. Cấu Trúc 3 Khối Bắt Buộc (Three-Block Theory Layout)
Trong thẻ `<main class="container">`, nội dung HTML lý thuyết bắt buộc chia thành 3 khối tuần tự:
1. **Khối 1: Trọng tâm kiến thức cần ghi nhớ (`.flow-box.theory`):**
   - Trình bày tóm tắt lý thuyết cốt lõi bằng các gạch đầu dòng khoa học, ngắn gọn, súc tích.
   - Mỗi ý chỉ chứa một đơn vị kiến thức chính.
2. **Khối 2: Hiểu sai cần tránh (`.flow-box.note`):**
   - Làm rõ các quan niệm sai lầm, nhầm lẫn phổ biến của học sinh và đưa ra giải thích/đính chính khoa học chính xác.
3. **Khối 3: Luyện tập / Bài tập củng cố (`.flow-box.practice`):**
   - Hệ thống các câu hỏi trắc nghiệm kiểm tra hiểu biết lấy trực tiếp từ file Markdown.
   - Chấm điểm, phản hồi đáp án đúng, lời giải chi tiết và siêu dữ liệu sư phạm (theo chuẩn Mục 4).

### 5.3. Phân Biệt Tuyệt Đối Với HTML Mô Phỏng (`modules/` & `experiments/`)
- **KHÔNG đưa vào HTML lý thuyết:**
  - `<canvas>` và animation mô phỏng thí nghiệm phức tạp.
  - Vòng lặp hạt (particle), state machine thí nghiệm.
  - Khay dụng cụ kéo-thả ống nghiệm, pipet, hóa chất.
- **Đồng bộ thiết kế:** Vẫn kế thừa 100% token `:root`, font `Be Vietnam Pro`, màu sắc Tom Haugomat và khả năng responsive, iframe LMS auto-resize (`reportHeight`) từ file chuẩn `SH10_B01_M02.html`.

---

## 6. TỐI ƯU MOBILE-FIRST & CHỐNG TRÀN LỀ

- **Khung bao `.app` / `.container` an toàn:**
  ```css
  *, *::before, *::after { box-sizing: border-box; min-width: 0; }
  .app, .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px clamp(10px, 2.5vw, 24px) 32px;
    overflow-x: clip;
  }
  ```
- **Không dùng `width: 100vw`:** Sử dụng `width: 100%` để tránh thanh cuộn ngang do thanh cuộn dọc của trình duyệt gây ra.
- **Responsive bài tập & nút bấm trên màn hình nhỏ (`< 600px`):**
  - Chuyển layout 2 cột sang 1 cột.
  - Thanh chọn câu hỏi nhanh: Bố trí lưới đều (ví dụ `grid-template-columns: repeat(6, 1fr)`).
  - Hàng nút `.quiz-actions`: Bố trí 2 hàng — hàng 1 gồm `[← Câu trước]` và `[Câu sau →]`; hàng 2 gồm `[✓ Kiểm tra]` full-width dễ thao tác bằng ngón cái.
  - Khối `.pedagogy-meta`: Tự động chuyển từ 2 cột sang 1 cột mượt mà.

---

## 7. MODAL CHÚC MỪNG HOÀN THÀNH & MICRO-ANIMATIONS

- **Modal hoàn thành V10 (`#completionModal`):**
  - Hiển thị cúp vàng (`ti ti-trophy`), tổng kết số câu đúng / tổng số câu, kèm 2 nút: "Xem lại bài" và "Đóng thông báo".
  - Kích hoạt pháo hoa giấy Canvas tự sinh `launchConfetti()` độc lập, không dùng thư viện ngoài, không dùng `alert()` sơ sài.
- **Quy tắc ẩn Modal khi tải trang (CHỐNG LỖI TỰ ĐỘNG HIỆN MODAL):**
  - Thẻ HTML ban đầu bắt buộc có class `hidden`.
  - CSS bắt buộc có độ ưu tiên cao:
    ```css
    .hidden { display: none !important; }
    .congrats-overlay.hidden,
    .modal-backdrop.hidden,
    #completionModal.hidden {
      display: none !important;
    }
    ```
- **Micro-animations mượt mà:**
  - Hotspot có vòng xung nhịp lan tỏa (`.pulse-ring` & `pulseAnim`, tự tắt khi đã bấm xem).
  - Chuyển cảnh êm ái bằng `@keyframes fadeIn`.
  - Rung nhẹ cảnh báo khi học sinh chưa chọn đáp án mà bấm kiểm tra (`@keyframes shake`).
  - Hỗ trợ `prefers-reduced-motion: reduce` cho học sinh nhạy cảm thị giác.

---

## 8. CHUẨN TƯƠNG TÁC SINH HỌC & THAO TÁC TRỰC TIẾP (DIRECT MANIPULATION)

1. **Ưu tiên thao tác trực tiếp (Direct Manipulation):**
   - Học sinh tương tác bằng cách click/kéo-thả trực tiếp trên canvas/vật thể (đặt tiêu bản lên kính hiển vi, xoay ốc điều chỉnh tiêu cự, kéo pipet nhỏ giọt hóa chất, kéo thả thẻ phân loại, chạm cặp thẻ nối dây).
   - **Thanh điều khiển (`controls`):** Giữ tinh gọn, chỉ đặt các nút hành động cấp độ toàn cục (như *"Làm lại"*, *"Quay lại"*, *"Tiếp tục"*).
2. **Kéo thả thẻ đa nền tảng (Hybrid Drag & Drop + Touch Fallback):**
   - Hỗ trợ kéo thả chuột trên desktop và cơ chế chạm chọn nguồn $\rightarrow$ chạm đích trên thiết bị cảm ứng (`.selected` viền nét đứt phát sáng).
   - Có tính năng hoàn tác (chạm thẻ trong vùng đích để trả về khay).
   - Khay rỗng hiện thông báo ghi nhận `.source-tray-empty`.
3. **Ghép đôi 2 cột bằng đường tia SVG (2-Column Vertical Match with SVG Lines):**
   - Vẽ đường nối xanh ngọc trực tiếp nối giữa 2 chấm tròn `.dot` của thẻ trái và thẻ phải qua `getBoundingClientRect()`.
   - Cập nhật tọa độ đường vẽ mượt mà khi cửa sổ resize hoặc cuộn.

---

## 9. BẢO TOÀN TÍCH HỢP LMS & POSTMESSAGE

- **Lưu trữ trạng thái:** State lưu hoàn toàn trong biến JavaScript runtime `window.lmsState = { ... }`.
- **TUYỆT ĐỐI KHÔNG DÙNG:** `localStorage`, `sessionStorage` hoặc `cookie` (để tránh lỗi sandbox iframe trên các nền tảng LMS).
- **Tự động báo chiều cao (Auto-resize):** Luôn duy trì hàm `reportHeight()` dùng `ResizeObserver` gửi `postMessage` (`{type: 'setHeight', height: ...}`) lên trang mẹ để không bao giờ bị thanh cuộn đôi.

---

## 10. QUY ĐỊNH VỀ KIỂM THỬ & AN TOÀN HỆ THỐNG

1. **TUYỆT ĐỐI KHÔNG TỰ Ý BẬT BROWSER TEST:**
   - Không sử dụng công cụ `browser_subagent` hay mở trình duyệt tự động trừ khi người dùng có yêu cầu rõ ràng bằng lời.
2. **Kiểm thử cú pháp an toàn bằng Node.js:**
   - Sau mỗi lần chỉnh sửa hoặc tạo mới file HTML, AI **bắt buộc** phải chạy kiểm tra tính toàn vẹn cú pháp qua Node.js (`vm.Script`) trước khi hoàn tất phản hồi người dùng.
3. **Bảo vệ tài nguyên ảnh:**
   - Không tự ý thay đổi các URL ảnh online đã được phê duyệt trong `assetFiles`.
   - Khi di chuyển vị trí file, phải rà soát và cập nhật đường dẫn ảnh cục bộ tương ứng.
