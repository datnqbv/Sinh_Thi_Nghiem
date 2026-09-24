# QUY CHUẨN TẠO HTML LÝ THUYẾT MÔN SINH HỌC

> Phiên bản: 1.0  
> Phạm vi: các file HTML lý thuyết tự chứa trong `html_text/`  
> Không áp dụng cho: Virtual Lab, mô phỏng, canvas hoặc HTML simulation/stimulate

**File chuẩn thiết kế bắt buộc:**

```text
modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html
```

Mọi HTML lý thuyết sinh mới phải kế thừa trực tiếp hệ màu, font, cỡ chữ, khoảng cách, bán kính, bóng, nút, phản hồi và breakpoint của file chuẩn này. Cấu trúc nội dung có thể khác vì HTML trong `html_text/` gồm các khối kiến thức, hiểu sai và luyện tập, nhưng ngôn ngữ thiết kế phải đồng nhất.

---

## 1. Mục tiêu

Quy chuẩn này dùng để tạo hoặc cập nhật hàng loạt HTML lý thuyết môn Sinh học theo cùng một cấu trúc, giao diện và hành vi.

Mỗi file phải:

- Chạy độc lập bằng cách mở trực tiếp trong trình duyệt, không cần build step.
- Hiển thị tốt khi nhúng vào iframe của LMS/Athena.
- Giữ nguyên nội dung khoa học từ nguồn Markdown hoặc kịch bản.
- Có ba khối chính: trọng tâm kiến thức, hiểu sai cần tránh và luyện tập.
- Chấm được câu hỏi, hiện đồng thời đáp án đúng/sai và chỉ mở lời giải khi người học yêu cầu.
- Không trộn kiến trúc của HTML lý thuyết với HTML mô phỏng.

Các quy chuẩn nền vẫn phải được đọc và tuân thủ:

1. `Rule_Design_Sinh.md`: màu, font, responsive, khả năng tiếp cận và LMS.
2. `Rule_Thiet_Ke_Chung.md`: kiến trúc chung và nguyên tắc nhúng.
3. File kịch bản nội dung của đúng module đang xử lý.
4. File kịch bản ảnh nếu module có sử dụng ảnh.

Nếu có xung đột, nội dung khoa học trong kịch bản là nguồn chuẩn cho câu chữ; hai file rule chung là nguồn chuẩn cho kỹ thuật và thiết kế.

---

## 2. Phân biệt HTML lý thuyết và HTML mô phỏng

### 2.1. HTML lý thuyết

HTML lý thuyết có hậu tố `_LT.html` và thuộc thư mục `html_text/`.

Đặc trưng:

- Trình bày kiến thức bằng văn bản ngắn gọn.
- Có khối hiểu sai cần tránh.
- Có câu hỏi trắc nghiệm và lời giải.
- Không có canvas, state machine, particle, drag-and-drop thí nghiệm hoặc tiến trình nhiều stage.

### 2.2. HTML mô phỏng

HTML mô phỏng thuộc `modules/` hoặc `experiments/` và tuân thủ quy chuẩn mô phỏng riêng.

Không sao chép vào HTML lý thuyết các thành phần sau:

- `<canvas>` và vòng lặp animation.
- Thanh tiến trình stage.
- Modal pháo hoa hoàn thành.
- Khay kéo thả, hotspot hoặc dụng cụ thí nghiệm.
- Logic an toàn thí nghiệm không liên quan.

---

## 3. Cấu trúc thư mục và tên file

Mỗi module lý thuyết đặt trong một thư mục riêng:

```text
html_text/
  Lop10|Lop11|Lop12/
    <MA_MODULE>/
      <MA_MODULE>.md
      <MA_MODULE>_LT.html
      images/                 # chỉ tạo khi có ảnh cục bộ
```

Ví dụ:

```text
html_text/Lop12/SH12_B01_M01/
  SH12_B01_M01.md
  SH12_B01_M01_LT.html
```

Quy tắc bắt buộc:

- Mã module trong thư mục, Markdown, HTML và nội dung phải nhất quán.
- Không đổi tên file nguồn nếu người dùng không yêu cầu.
- Không đặt file lý thuyết mới ở thư mục gốc.
- Không dùng `localStorage`, `sessionStorage` hoặc cookie.

---

## 4. Hai chế độ xử lý hàng loạt

### 4.1. Chế độ A — cập nhật HTML đã tồn tại

Khi thư mục đã có HTML và Markdown:

1. Đọc toàn bộ Markdown cùng thư mục.
2. Xác nhận `MODULE_ID` khớp với tên thư mục và HTML.
3. Chỉ thay nội dung phần luyện tập bằng dữ liệu Markdown.
4. Giữ nguyên khối kiến thức và hiểu sai nếu Markdown không cung cấp hai phần này.
5. Giữ nguyên URL ảnh online và đường dẫn tài nguyên không thuộc phần luyện tập.
6. Không tự sửa câu chữ ngoài phạm vi nguồn.

### 4.2. Chế độ B — tạo HTML mới hoàn toàn

Chỉ tạo mới khi nguồn có đủ:

- Mã và tên module.
- Trọng tâm kiến thức cần ghi nhớ.
- Hiểu sai cần tránh.
- Danh sách câu hỏi luyện tập.

Nếu thiếu phần kiến thức hoặc hiểu sai:

- Không tự suy diễn hay tự viết nội dung khoa học.
- Báo rõ trường dữ liệu còn thiếu.
- Có thể tạo bản nháp kỹ thuật chỉ khi người dùng cho phép và phải đánh dấu placeholder rõ ràng.

---

## 5. Markdown đầu vào cho phần luyện tập

Định dạng chuẩn:

```text
MODULE_ID: SH12_B01_M01
TEN_MODULE: Chức năng của DNA
SO_CAU: 5

[BEGIN_CAU]
ID_CAU: SH12_B01_M01_Q01
CHU_DE: DNA: cấu trúc và chức năng
DANG_BAI: A1 – Nhận biết/xác định khái niệm, thuật ngữ, đặc điểm, đối tượng
CAP_DO_TU_DUY: Nhận biết
NANG_LUC_SINH_HOC: Nhận thức sinh học
DINH_DANG: Trắc nghiệm
MA_ANH:

CAU_HOI:
Nội dung câu hỏi?

A. Phương án A.
B. Phương án B.
C. Phương án C.
D. Phương án D.

DAP_AN: B

LOI_GIAI:
Nội dung lời giải.
[END_CAU]
```

Mỗi câu bắt buộc có:

- `ID_CAU` duy nhất.
- `CHU_DE`.
- `DANG_BAI`.
- `CAP_DO_TU_DUY`.
- `NANG_LUC_SINH_HOC`.
- `CAU_HOI`.
- Đúng bốn phương án A, B, C, D.
- `DAP_AN` là một trong A, B, C hoặc D.
- `LOI_GIAI`.

`SO_CAU` phải bằng số khối `[BEGIN_CAU]...[END_CAU]` thực tế.

---

## 6. Nguyên tắc lấy nội dung

### 6.1. Nguồn chuẩn

Markdown là nguồn chuẩn tuyệt đối cho:

- Câu hỏi.
- Bốn lựa chọn.
- Đáp án đúng.
- Lời giải.
- Chủ đề.
- Dạng bài.
- Cấp độ tư duy.
- Năng lực Sinh học.

Không được:

- Chép câu hỏi của module khác.
- Rút gọn hoặc diễn đạt lại câu hỏi và lời giải.
- Tự sửa đáp án dựa trên suy đoán.
- Tự bổ sung thuộc tính không có trong nguồn.
- Trộn dữ liệu giữa các thư mục.

### 6.2. Unicode tiếng Việt

- Ghi trực tiếp ký tự UTF-8 vào HTML.
- Bắt buộc có `<meta charset="UTF-8">`.
- Không chuyển chữ tiếng Việt thành numeric entity như `&#236;`, `&#234;`.
- Chỉ escape các ký tự có ý nghĩa cú pháp HTML: `&`, `<`, `>` và dấu nháy khi nằm trong thuộc tính.
- Giữ nguyên các ký hiệu khoa học như `5′`, `3′`, `→`, `–`, `CO₂`, `O₂`.

---

## 7. Cấu trúc HTML bắt buộc

Thứ tự cấp cao:

```html
<body>
  <main class="container">
    <section class="flow-box theory">...</section>
    <section class="flow-box note">...</section>
    <section class="flow-box practice">...</section>
  </main>
  <script>...</script>
</body>
```

Không tạo header banner lớn, footer quảng bá hoặc thanh tab tiến trình trong HTML lý thuyết.

### 7.1. Khối trọng tâm kiến thức

```html
<section class="flow-box theory" aria-labelledby="theoryTitle">
  <div class="flow-header">
    <div class="icon-box" aria-hidden="true"><i class="ti ti-book-2"></i></div>
    <div class="flow-title-group">
      <h2 id="theoryTitle">Trọng tâm kiến thức cần ghi nhớ</h2>
    </div>
  </div>
  <div class="theory-container">
    <ul class="theory-list">
      <li class="theory-item">...</li>
    </ul>
  </div>
</section>
```

Mỗi ý chỉ chứa một đơn vị kiến thức chính. Không tạo đoạn văn quá dài nếu nguồn có thể chia thành các ý độc lập mà không đổi nghĩa.

### 7.2. Khối hiểu sai cần tránh

```html
<section class="flow-box note" aria-labelledby="noteTitle">
  <div class="flow-header">
    <div class="icon-box" aria-hidden="true"><i class="ti ti-bulb"></i></div>
    <div class="flow-title-group">
      <h2 id="noteTitle">Hiểu sai cần tránh</h2>
    </div>
  </div>
  <div class="note-container">
    <ul class="note-list">
      <li class="note-item">...</li>
    </ul>
  </div>
</section>
```

Không tự tạo hiểu sai nếu nguồn không nêu rõ.

### 7.3. Khối luyện tập

```html
<section class="flow-box practice" aria-labelledby="practiceTitle">
  <div class="flow-header">
    <div class="icon-box" aria-hidden="true"><i class="ti ti-checklist"></i></div>
    <div class="flow-title-group"><h2 id="practiceTitle">Luyện tập</h2></div>
  </div>
  <p class="practice-intro">
    Chọn một phương án cho mỗi câu, sau đó nhấn “Nộp bài” để xem kết quả.
  </p>
  <div class="question-list">...</div>
  <div class="practice-actions">...</div>
  <div class="practice-summary hidden" id="practiceSummary" role="status" aria-live="polite"></div>
</section>
```

---

## 8. Cấu trúc một câu hỏi

Mỗi câu dùng đúng một `.question-card`:

```html
<article class="question-card" data-correct="B">
  <div class="question-heading">
    <span class="question-number">Câu 1</span>
    <p class="question-text">Nội dung câu hỏi?</p>
  </div>

  <details class="question-classification">
    <summary class="classification-toggle">
      <span>Phân loại câu hỏi</span>
      <span class="classification-hint closed">Bấm để xem đầy đủ thông tin</span>
      <span class="classification-hint open">Bấm để thu gọn</span>
    </summary>
    <div class="question-meta">
      <div class="meta-item"><strong>Chủ đề</strong>...</div>
      <div class="meta-item"><strong>Dạng bài</strong>...</div>
      <div class="meta-item"><strong>Cấp độ tư duy</strong>...</div>
      <div class="meta-item"><strong>Năng lực Sinh học</strong>...</div>
    </div>
  </details>

  <div class="answer-options">
    <button class="answer-option" type="button" data-option="A">
      <span class="option-key">A.</span><span>...</span>
    </button>
    <!-- B, C, D cùng cấu trúc -->
  </div>

  <div class="question-feedback" role="status" aria-live="polite"></div>
  <div class="answer-reveal hidden">
    <div class="blur-content"><strong>Đáp án: B.</strong> Nội dung lời giải.</div>
  </div>
</article>
```

Quy tắc:

- Số câu phải ghi đầy đủ `Câu 1`, `Câu 2`, không chỉ ghi `1`, `2`.
- `question-number` và `question-text` nằm cùng `.question-heading` để căn giữa theo chiều cao.
- Không tạo thêm một thẻ `question-text` trùng nội dung.
- `data-correct` phải khớp chính xác `DAP_AN`.
- Không thêm nút đáp án/lời giải riêng trong từng câu.
- Khối phân loại đóng mặc định; không thêm thuộc tính `open`.

---

## 9. Phân loại câu hỏi thu gọn

Mặc định chỉ hiện một ô mờ gồm:

- Nhãn `Phân loại câu hỏi`.
- Chỉ dẫn `Bấm để xem đầy đủ thông tin`.
- Mũi tên thể hiện trạng thái.

Khi mở, hiển thị đủ đúng bốn trường. Không được thiếu hoặc thêm trường khác.

Yêu cầu CSS:

```css
.question-classification {
  order: -1;
  margin-bottom: 12px;
  border: 1px solid var(--paper-line);
  border-radius: 9px;
  background: #fff;
  opacity: .72;
  overflow: hidden;
}
.question-classification:hover,
.question-classification[open] { opacity: 1; }
.classification-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 9px 12px;
  cursor: pointer;
  list-style: none;
}
.classification-toggle::-webkit-details-marker { display: none; }
.question-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px 18px;
  padding: 12px 14px;
}
@media (max-width: 640px) {
  .question-meta { grid-template-columns: 1fr; }
}
```

Không dùng JavaScript để giả lập đóng/mở khi `<details>` đã đáp ứng được yêu cầu.

---

## 10. Hai nút hành động cuối phần luyện tập

Chỉ có hai nút chung ở cuối danh sách câu hỏi:

```html
<div class="practice-actions">
  <button class="practice-button primary" id="submitPractice" type="button">
    <i class="ti ti-send"></i> Nộp bài
  </button>
  <button class="practice-button" id="showSolutions" type="button"
          disabled aria-expanded="false">
    <i class="ti ti-eye"></i> Xem đáp án chi tiết
  </button>
</div>
```

Không đặt nút “Hiện đáp án”, “Xem lời giải” hoặc “Kiểm tra” trong từng câu.

---

## 11. Logic chọn đáp án và nộp bài

### 11.1. Trước khi nộp

- Mỗi câu chỉ được chọn một phương án.
- Phương án đang chọn có trạng thái `.selected`.
- Người học có thể đổi lựa chọn.
- Nút xem đáp án chi tiết bị `disabled`.

### 11.2. Khi còn câu chưa chọn

- Không chấm bài.
- Hiện số câu chưa trả lời trong `#practiceSummary`.
- Cuộn tới câu chưa trả lời đầu tiên.

### 11.3. Khi nộp đủ câu

- Khóa toàn bộ lựa chọn.
- Luôn đánh dấu phương án đúng bằng `.correct` màu xanh lá.
- Nếu người học chọn sai, đánh dấu lựa chọn sai bằng `.wrong` màu đỏ.
- Như vậy ở câu sai phải đồng thời thấy cả đáp án đúng và đáp án sai.
- Hiện phản hồi ngắn ở từng câu.
- Hiện tổng điểm dạng `Kết quả: x/y câu đúng.`.
- Vô hiệu hóa nút nộp bài.
- Kích hoạt nút xem đáp án chi tiết.

### 11.4. Xem đáp án chi tiết

- Chỉ được mở sau khi đã nộp bài hợp lệ.
- Mở/ẩn đồng thời `.answer-reveal` của mọi câu.
- Cập nhật `aria-expanded`.
- Đổi nhãn nút giữa `Xem đáp án chi tiết` và `Ẩn đáp án chi tiết`.

---

## 12. Màu sắc và typography

### 12.1. Triết lý thiết kế

HTML lý thuyết sử dụng phong cách **editorial flat**: giống một trang tài liệu khoa học được biên tập kỹ, bình tĩnh và dễ đọc.

Nguồn chuẩn của toàn bộ quyết định thiết kế trong chương này là `modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html`. Không tự đổi cỡ chữ hoặc làm giao diện nhỏ hơn để nhét thêm nội dung.

Nguyên tắc thị giác:

- Phân cấp bằng cỡ chữ, độ đậm và khoảng trắng; không dùng quá nhiều màu để phân cấp.
- Một màn hình chỉ có một hướng đọc chính từ trên xuống dưới.
- Card có viền mảnh, nền sáng và bóng rất nhẹ; không tạo cảm giác các hộp nổi chồng lên nhau.
- Mỗi loại nội dung có một màu nhận diện ổn định:
  - Kiến thức: xanh jade.
  - Hiểu sai: vàng hổ phách.
  - Luyện tập: xanh info.
  - Đúng: xanh lá.
  - Sai: đỏ đất.
- Nội dung khoa học phải nổi bật hơn trang trí.
- Không dùng gradient, hiệu ứng phát sáng, glassmorphism hoặc bóng đổ nặng.
- Không dùng quá nhiều badge, nhãn pill hoặc icon trang trí.

### 12.2. Hệ khoảng cách

Chỉ dùng các mức khoảng cách chính sau để giao diện đồng nhất:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
}
```

Áp dụng:

- Khoảng cách giữa các khối lớn: `20px`.
- Padding card lớn: `24px` desktop, `14–18px` mobile.
- Khoảng cách giữa các câu hỏi: `16px`.
- Padding câu hỏi: `18px` desktop, `14px` mobile.
- Khoảng cách giữa các phương án: `8px`.
- Khoảng cách giữa icon và tiêu đề: `12–14px`.
- Không dùng các giá trị tùy ý nếu một token gần tương đương đã tồn tại.

### 12.3. Kích thước và bố cục trang

```css
body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: 'Be Vietnam Pro', system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.65;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px clamp(12px, 2.4vw, 28px) 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
```

Quy tắc:

- Nội dung nằm trong một cột trung tâm.
- Chiều rộng tối đa luôn là `1200px`, đúng file chuẩn.
- Padding ngoài luôn theo công thức `18px clamp(12px,2.4vw,28px) 12px` trên desktop.
- Không dùng sidebar.
- Không đặt `min-height:100vh` hoặc `height:100vh` cho body.
- Không tạo khoảng trắng lớn ở đầu hoặc cuối iframe.

### 12.4. Thiết kế khối nội dung chung

```css
.flow-box {
  padding: 18px;
  background: #fff;
  border: 1px solid var(--paper-line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.flow-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.icon-box {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 22px;
}

.flow-title-group h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  font-weight: 800;
  line-height: 1.28;
  letter-spacing: -.02em;
}
```

Không cho toàn bộ card di chuyển hoặc phóng to khi hover. Nếu dùng hover, chỉ được đổi bóng rất nhẹ và không làm bố cục nhảy.

### 12.5. Thiết kế khối trọng tâm kiến thức

```css
.flow-box.theory { border-left: 6px solid var(--jade); }
.flow-box.theory .icon-box {
  color: var(--jade-dark);
  background: var(--jade-pale);
  border: 1px solid var(--jade-soft);
}
.theory-container {
  padding: 18px 22px;
  background: var(--sage-pale);
  border: 1px solid var(--jade-soft);
  border-radius: 12px;
}
.theory-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.theory-item {
  position: relative;
  padding-left: 20px;
  color: var(--jade-dark);
  line-height: 1.65;
}
.theory-item::before {
  content: '';
  position: absolute;
  top: .72em;
  left: 2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--jade);
}
```

Không dùng emoji làm dấu đầu dòng. Dùng chấm CSS hoặc icon Tabler.

### 12.6. Thiết kế khối hiểu sai cần tránh

```css
.flow-box.note { border-left: 6px solid var(--accent); }
.flow-box.note .icon-box {
  color: var(--accent-text);
  background: var(--accent-pale);
  border: 1px solid var(--accent);
}
.note-container {
  padding: 18px 22px;
  background: var(--accent-pale);
  border: 1px solid var(--accent);
  border-radius: 12px;
}
.note-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.note-item {
  position: relative;
  padding-left: 20px;
  color: var(--accent-text);
  line-height: 1.65;
}
.note-item::before {
  content: '';
  position: absolute;
  top: .72em;
  left: 2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-deep);
}
```

Màu vàng chỉ dùng cho khối cảnh báo/hiểu sai, không rải rác ở các thành phần khác.

### 12.7. Thiết kế khối luyện tập

```css
.flow-box.practice { border-left: 6px solid var(--info); }
.flow-box.practice .icon-box {
  color: var(--info);
  background: var(--info-bg);
  border: 1px solid var(--info);
}
.practice-intro {
  margin: -2px 0 18px;
  color: var(--ink-3);
  font-size: .96rem;
}
.question-list {
  display: grid;
  gap: 16px;
}
.question-card {
  display: flex;
  flex-direction: column;
  padding: 18px;
  background: var(--cream-2);
  border: 1px solid var(--paper-line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
```

Khối câu hỏi không dùng nền xanh/xám quá đậm. Độ tương phản giữa nền trang, flow box và question card phải nhẹ nhưng vẫn nhận biết được ranh giới.

### 12.8. Thiết kế tiêu đề câu hỏi

```css
.question-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.question-number {
  min-width: 72px;
  min-height: 36px;
  padding: 6px 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--info);
  background: var(--info-bg);
  border-radius: 8px;
  font-weight: 800;
  white-space: nowrap;
}
.question-text {
  flex: 1;
  margin: 0;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.55;
}
```

`Câu 1` và câu hỏi phải căn giữa theo chiều cao. Nếu câu hỏi dài, chỉ phần câu hỏi xuống dòng; nhãn số câu giữ nguyên.

### 12.9. Thiết kế phương án trả lời

```css
.answer-options {
  display: grid;
  gap: 8px;
}
.answer-option {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  display: flex;
  align-items: flex-start;
  color: var(--ink);
  background: #fff;
  border: 1px solid var(--paper-line);
  border-radius: 9px;
  font: inherit;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: border-color .18s ease, background-color .18s ease;
}
.answer-option:hover,
.answer-option:focus-visible {
  border-color: var(--info);
}
.answer-option:focus-visible {
  outline: 3px solid var(--info-bg);
  outline-offset: 2px;
}
.option-key {
  flex: 0 0 30px;
  color: var(--info);
  font-weight: 800;
}
.answer-option.selected:not(.correct):not(.wrong) {
  border-color: var(--info);
  background: var(--info-bg);
}
.answer-option.correct {
  color: var(--jade-text);
  background: var(--correct-bg);
  border-color: var(--correct);
}
.answer-option.wrong {
  color: var(--wrong);
  background: var(--wrong-bg);
  border-color: var(--wrong);
}
.answer-option:disabled {
  cursor: default;
  opacity: 1;
}
```

Không giảm opacity của phương án sau khi nộp vì người học vẫn cần đọc rõ đáp án.

### 12.10. Thiết kế phản hồi và lời giải

```css
.question-feedback {
  min-height: 24px;
  margin-top: 10px;
  color: var(--ink-3);
  font-size: .84rem;
}
.question-feedback.ok { color: var(--correct); }
.question-feedback.bad { color: var(--wrong); }
.answer-reveal {
  margin-top: 10px;
  padding: 12px 14px;
  color: var(--jade-text);
  background: var(--correct-bg);
  border-left: 4px solid var(--correct);
  border-radius: 8px;
  font-size: .88rem;
  line-height: 1.65;
}
.hidden { display: none !important; }
```

Không làm mờ nội dung lời giải bằng CSS blur. “Chưa xem được” phải được thực hiện bằng `display:none`, không để chữ mờ vẫn có thể đoán hoặc sao chép trước khi nộp.

### 12.11. Thiết kế nút hành động

```css
.practice-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 18px;
}
.practice-button {
  min-height: 44px;
  padding: 10px 16px;
  color: var(--jade-text);
  background: transparent;
  border: 1.5px solid var(--jade);
  border-radius: 9px;
  font: inherit;
  font-size: .88rem;
  font-weight: 700;
  cursor: pointer;
}
.practice-button:hover:not(:disabled) {
  background: var(--jade-pale);
}
.practice-button.primary {
  color: var(--cream);
  background: var(--jade);
  border-color: var(--jade);
}
.practice-button.primary:hover:not(:disabled) {
  background: var(--jade-deep);
}
.practice-button:focus-visible {
  outline: 3px solid var(--jade-pale);
  outline-offset: 2px;
}
.practice-button:disabled {
  cursor: not-allowed;
  opacity: .5;
}
.practice-summary {
  margin-top: 12px;
  padding: 10px 12px;
  color: var(--ink-2);
  background: var(--info-bg);
  border-left: 4px solid var(--info);
  border-radius: 6px;
}
```

Nút chính và nút phụ không dùng dạng pill; bán kính chỉ 8–10px.

### 12.12. Chuyển động

- Chỉ dùng transition 150–200ms cho màu, viền và mũi tên mở/đóng.
- Không animate chiều cao của nội dung `<details>` bằng JavaScript.
- Không rung, nảy hoặc phát sáng liên tục trong trang lý thuyết.
- Khi `prefers-reduced-motion: reduce`, rút ngắn transition về gần 0.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

### 12.13. Responsive chuẩn

```css
@media (max-width: 980px) {
  .container { gap: 16px; }
}

@media (max-width: 700px) {
  body { font-size: 16px; }
  .container { padding: 10px 10px 8px; }
  .flow-box { padding: 13px; border-radius: var(--radius-lg); }
  .flow-header { gap: 12px; margin-bottom: 14px; }
  .icon-box { width: 38px; height: 38px; flex-basis: 38px; }
  .theory-container,
  .note-container { padding: 14px 16px; }
  .question-card { padding: 14px; }
  .question-heading { align-items: flex-start; }
  .question-number { min-width: 68px; min-height: 34px; }
  .question-meta { grid-template-columns: 1fr; }
  .practice-actions { flex-direction: column; }
  .practice-button { width: 100%; }
}

@media (max-width: 420px) {
  .question-heading { gap: 8px; }
  .question-number { min-width: 64px; padding-inline: 8px; }
  .answer-option { padding: 9px 10px; }
}
```

Ở màn hình rất hẹp, không đặt nhãn “Câu 1” thành một dòng riêng nếu câu hỏi vẫn còn đủ không gian đọc. Chỉ cho xuống dòng khi thực sự cần để tránh chật.

### 12.14. Thứ tự ưu tiên khi thiết kế

Khi phải lựa chọn, ưu tiên theo thứ tự:

1. Nội dung khoa học chính xác.
2. Khả năng đọc và thao tác.
3. Responsive và khả năng tiếp cận.
4. Tính đồng nhất giữa các file.
5. Trang trí.

### 12.15. Bộ token bắt buộc

Khai báo tối thiểu đúng hệ thống màu:

```css
:root {
  --cream:#FAF7F0;
  --cream-2:#F0EADD;
  --cream-3:#E7DECC;
  --paper-line:#E5DECF;
  --paper-line-2:#D6CCB6;
  --ink:#1A1A1A;
  --ink-2:#514C44;
  --ink-3:#7C756A;
  --ink-faint:#ABA396;
  --jade:#3CA57A;
  --jade-deep:#2D8B6F;
  --jade-dark:#14432F;
  --jade-text:#1B5E48;
  --jade-soft:#A9D0BE;
  --jade-pale:#DCEAE1;
  --sage-pale:#E1ECE4;
  --accent:#E8A24A;
  --accent-deep:#CE8A33;
  --accent-text:#8A551A;
  --accent-pale:#F7E7CD;
  --correct:#2D8B6F;
  --correct-bg:#DCEAE1;
  --wrong:#C15F3C;
  --wrong-bg:#F3E2D6;
  --warning:#C58A2E;
  --warning-bg:#F5E7CB;
  --info:#4E7F92;
  --info-bg:#DCE7EB;
  --radius:10px;
  --radius-lg:14px;
  --radius-sm:6px;
  --shadow:0 4px 12px rgba(45,139,111,.10);
  --shadow-sm:0 2px 6px rgba(26,26,26,.05);
}
```

Quy tắc:

- Nền trang: `var(--cream)`.
- Nền card: trắng hoặc `var(--cream-2)`.
- Chữ chính: `var(--ink)`.
- Đúng: `var(--correct)` và `var(--correct-bg)`.
- Sai: `var(--wrong)` và `var(--wrong-bg)`.
- Không dùng gradient, shadow nặng hoặc glassmorphism.
- Dùng duy nhất font `Be Vietnam Pro` với subset tiếng Việt.
- Body tối thiểu 17px nếu bố cục cho phép; văn bản câu hỏi không được quá nhỏ.
- Icon dùng Tabler Icons, không dùng emoji làm icon giao diện.

---

## 13. Responsive và khả năng tiếp cận

### Desktop

- Container một cột, `max-width` khoảng 960–1200px, căn giữa.
- Bốn thuộc tính phân loại hiển thị lưới 2 × 2 khi mở.
- Hai nút cuối nằm cùng hàng và căn phải.

### Mobile dưới 640px

- Giảm padding nhưng giữ vùng bấm tối thiểu 44px.
- Phân loại chuyển thành một cột.
- Hai nút cuối xếp dọc và rộng toàn hàng.
- Nội dung không tràn ngang.

### Accessibility

- Dùng `button` thật cho phương án và nút hành động.
- Có `type="button"` cho mọi button.
- Phản hồi dùng `role="status" aria-live="polite"`.
- Nút xem lời giải có `aria-expanded`.
- `<details>/<summary>` phải thao tác được bằng bàn phím.
- Trạng thái đúng/sai không chỉ thể hiện bằng màu; phải kèm câu chữ phản hồi.
- Có `:focus-visible` rõ ràng.
- Tôn trọng `prefers-reduced-motion`.

---

## 14. Nhúng LMS và chiều cao iframe

Mỗi file phải có:

```js
function reportHeight() {
  if (window.parent && window.parent !== window) {
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.parent.postMessage({ type: 'setHeight', height }, '*');
  }
}

window.addEventListener('load', reportHeight);
window.addEventListener('resize', reportHeight);

document.querySelectorAll('.question-classification').forEach((details) => {
  details.addEventListener('toggle', () => requestAnimationFrame(reportHeight));
});
```

Gọi lại `reportHeight()` sau các thao tác làm thay đổi chiều cao:

- Báo thiếu câu trả lời.
- Nộp bài.
- Mở hoặc ẩn lời giải.
- Mở hoặc đóng phân loại câu hỏi.

Không đặt `min-height:100vh` hoặc `height:100vh` cho body vì có thể tạo khoảng trắng khi nhúng.

---

## 15. Quy trình sinh hàng loạt bắt buộc

Với mỗi thư mục module:

1. Liệt kê HTML và Markdown trong đúng thư mục.
2. Đọc toàn bộ Markdown bằng UTF-8.
3. Đọc HTML hiện có nếu chạy chế độ cập nhật.
4. Kiểm tra `MODULE_ID`, `SO_CAU` và số khối câu hỏi.
5. Parse từng trường theo ranh giới `[BEGIN_CAU]` và `[END_CAU]`.
6. Kiểm tra mỗi câu có đúng A–D, một đáp án và một lời giải.
7. Escape cú pháp HTML nhưng giữ Unicode tiếng Việt trực tiếp.
8. Sinh `.question-card` theo đúng thứ tự trong Markdown.
9. Không thay đổi các phần ngoài phạm vi được yêu cầu.
10. Ghi file HTML bằng UTF-8.
11. Chạy kiểm tra hậu kỳ ở Mục 16.
12. Báo riêng module lỗi; không âm thầm bỏ qua hoặc dùng dữ liệu module khác thay thế.

Khi một module lỗi, ưu tiên tiếp tục kiểm tra các module còn lại và lập danh sách lỗi cuối cùng. Không tạo HTML sai chỉ để đủ số lượng file.

---

## 16. Kiểm tra tự động sau khi tạo

Với mỗi file, bắt buộc xác nhận:

- Số `.question-card` bằng `SO_CAU`.
- Số `.answer-option` bằng `SO_CAU × 4`.
- Số `.meta-item` bằng `SO_CAU × 4`.
- Số `.answer-reveal` bằng `SO_CAU`.
- Chuỗi `data-correct` theo thứ tự khớp toàn bộ `DAP_AN` trong Markdown.
- Mỗi câu có đúng một `question-number` và một `question-text`.
- Có đúng một `#submitPractice`, một `#showSolutions`, một `#practiceSummary`.
- Không có numeric entity tiếng Việt dạng `&#...;`.
- Không có `localStorage`, `sessionStorage` hoặc cookie.
- Không có ID trùng lặp.
- Không có thuộc tính `open` trên `.question-classification` mặc định.
- Không có nội dung luyện tập của module khác.
- `git diff --check` không báo lỗi whitespace.

Chuỗi đáp án nên được báo trong kết quả kiểm tra, ví dụ:

```text
SH12_B01_M01_LT.html: questions=5, options=20, metadata=20,
solutions=5, answers=BCBAC, expected=BCBAC, numeric_entities=0
```

---

## 17. Những lỗi bị cấm

- Dùng HTML của bài trước rồi quên thay câu hỏi.
- Chuyển tiếng Việt thành `&#236;` hoặc entity số tương tự.
- Hiển thị chuỗi bốn thuộc tính dài trên một dòng gây tràn.
- Luôn mở phân loại câu hỏi khi tải trang.
- Đặt nút xem đáp án trong từng câu.
- Chỉ tô đỏ phương án sai mà không hiện phương án đúng.
- Hiện lời giải trước khi nộp bài.
- Đổi nội dung Markdown theo suy đoán của AI.
- Gộp `question-number` và một tiêu đề tự đặt không phải câu hỏi.
- Tạo thêm thẻ `question-text` trùng lặp.
- Dùng màu nền trang khác `#FAF7F0` nếu không có yêu cầu thiết kế mới.
- Dùng canvas hoặc kiến trúc stage của mô phỏng trong HTML lý thuyết.
- Ghi đè thay đổi không liên quan đang có trong file.

---

## 18. Tiêu chí bàn giao

Một file chỉ được coi là hoàn thành khi:

1. Nội dung khớp nguồn Markdown/kịch bản.
2. Giao diện đúng design system.
3. Chấm bài đúng ở cả câu đúng và câu sai.
4. Lời giải chỉ hiện sau khi người học chủ động bấm.
5. Phân loại câu hỏi đóng mặc định và mở được bằng chuột lẫn bàn phím.
6. Responsive không tràn ngang.
7. Nhúng iframe không tạo thanh cuộn đôi bất thường.
8. Tất cả kiểm tra ở Mục 16 đều đạt.

File tham chiếu kiến trúc hiện hành:

```text
html_text/Lop12/SH12_B01_M01/SH12_B01_M01_LT.html
```

Khi file tham chiếu và quy chuẩn này khác nhau, ưu tiên yêu cầu mới nhất của người dùng, sau đó đến quy chuẩn này, rồi mới đến file tham chiếu.
