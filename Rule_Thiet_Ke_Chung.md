# 📐 NGUYÊN TẮC THIẾT KẾ CHUNG — TWO-BLOCK MODULE & PARENT SHELL

> **Mục đích:** Quy chuẩn cấu trúc hai khối của học liệu con và cách shell bên ngoài nhúng học liệu, theo phong cách **Tom Haugomat Editorial Flat** của Aiducation LMS.
> **Trục chuẩn cấu trúc và giao diện:** [`modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html`](modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html).
> **Tham chiếu riêng cho shell ngoài:** [`shells/GIAODIEN_SH10_V10.html`](shells/GIAODIEN_SH10_V10.html). Shell không được áp đặt lại bố cục bên trong module con.
> **Chuẩn thiết kế học liệu con:** [`modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html`](modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html). Màu, font, cỡ chữ, card, nút, spacing và breakpoint của học liệu con phải theo file này. Nếu ví dụ cũ phía dưới khác chuẩn, ưu tiên Mục 0 và file chuẩn.

---

## 0. DESIGN CONTRACT CHUNG — KHÓA THEO SH10_B01_M02

### 0.1. Token giao diện duy nhất

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
  --shadow:0 4px 12px rgba(45,139,111,.10);
  --shadow-sm:0 2px 6px rgba(26,26,26,.05);
}
```

Không tạo thêm bộ token `--deep`, `--green`, `--mint`, `--bg`, `--text` cho file mới. Khi bảo trì file cũ, chuyển dần các alias đó sang bộ token trên.

### 0.2. Font và cỡ chữ

- Font duy nhất: `Be Vietnam Pro`, weights `400,500,600,700,800`.
- Body desktop: `17px`, line-height `1.65`.
- Body dưới `700px`: `16px`.
- Tiêu đề card/stage: `clamp(1.25rem,2.2vw,1.75rem)`, line-height `1.28`.
- Câu hỏi chính: `1rem/700/1.55`.
- Text giảng: `.96rem`.
- Hướng dẫn: `.91rem/1.55`.
- Phản hồi: `.92rem/1.55`.
- Nhãn in hoa: `.78rem/800`, letter-spacing `.6px`.
- Eyebrow: `.76rem/800`, letter-spacing `.65px`.
- Chú thích nhỏ nhất: `.75rem`; không dùng chữ nhìn thấy nhỏ hơn mức này.
- Nút kế thừa cỡ chữ body, weight `700`, cao tối thiểu `44px`.

### 0.3. Khung file con

```css
body {
  margin:0;
  background:var(--cream);
  color:var(--ink);
  font-family:'Be Vietnam Pro',system-ui,sans-serif;
  font-size:17px;
  line-height:1.65;
  overflow-x:hidden;
}
.app {
  width:100%;
  max-width:1200px;
  margin:0 auto;
  padding:18px clamp(12px,2.4vw,28px) 12px;
}
.split-workspace {
  display:grid;
  grid-template-columns:minmax(0,58fr) minmax(340px,42fr);
  gap:20px;
  align-items:start;
}
.visual-card {
  position:sticky; top:0; z-index:10;
  border:1px solid var(--paper-line);
  border-radius:var(--radius-lg);
  background:#fff;
  overflow:hidden;
  box-shadow:var(--shadow-sm);
}
.workspace-card {
  min-width:0;
  padding:18px;
  border:1px solid var(--paper-line);
  border-radius:var(--radius-lg);
  background:var(--cream-2);
  box-shadow:var(--shadow-sm);
}
```

### 0.4. Card hướng dẫn, phản hồi và nút

```css
.instruction {
  display:flex; align-items:flex-start; gap:10px;
  margin:0 0 16px; padding:12px 14px;
  border-left:4px solid var(--info);
  border-radius:var(--radius-sm);
  background:var(--info-bg);
  color:var(--ink-2); font-size:.91rem; line-height:1.55;
}
.inline-feedback {
  margin-top:14px; padding:13px 14px;
  border-radius:var(--radius-sm);
  color:var(--ink-2); font-size:.92rem; line-height:1.55;
}
.inline-feedback.info { border-left:4px solid var(--info); background:var(--info-bg); }
.inline-feedback.bad { border-left:4px solid var(--wrong); background:var(--wrong-bg); }
.inline-feedback.ok { border-left:4px solid var(--correct); background:var(--correct-bg); color:var(--jade-text); }
.btn {
  min-height:44px;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:9px 15px;
  border:1.5px solid var(--jade); border-radius:9px;
  background:transparent; color:var(--jade-text);
  font:inherit; font-weight:700; cursor:pointer;
  transition:background .18s ease,border-color .18s ease,transform .18s ease;
}
.btn-primary { border-color:var(--jade); background:var(--jade); color:var(--cream); }
.btn-primary:hover:not(:disabled) { background:var(--jade-deep); border-color:var(--jade-deep); }
.btn:disabled { cursor:not-allowed; opacity:.48; transform:none; }
```

### 0.5. Responsive

```css
@media (max-width:980px) {
  .split-workspace { grid-template-columns:1fr; }
  .visual-card { position:static; }
  .workspace-card { padding:16px; }
}
@media (max-width:700px) {
  body { font-size:16px; }
  .app { padding:10px 10px 8px; }
  .visual-card__head { padding:12px; }
  .visual-body { padding:10px; }
  .workspace-card { padding:13px; }
}
@media (max-width:420px) {
  /* Chỉ tinh chỉnh thành phần; không bỏ dữ kiện học tập. */
}
```

Ba breakpoint chuẩn: `980px`, `700px`, `420px`. Card dùng radius `14px`; thành phần con dùng `6–10px`; không dùng pill trừ chip trạng thái thực sự cần thiết. Không dùng gradient, glow, glassmorphism hoặc shadow nặng.

---

## 1. TỔNG QUAN KIẾN TRÚC GIAO DIỆN (Centered Two-Block Workspace)

- **Phân loại nguồn học liệu:** `modules/` chỉ chứa bài học; `experiments/` chỉ chứa thí nghiệm Sinh học; `shells/` chứa file mẹ và được phép nhúng nội dung từ cả hai thư mục bằng đường dẫn tương đối.
- **Cấu trúc ưu tiên:** Mỗi stage trong học liệu con dùng hai khối `.visual-card` và `.workspace-card`; chỉ chuyển thành một cột khi viewport dưới `980px`.
- **Loại bỏ Sidebar 2 bên**: Tuyệt đối không dùng 2 thanh cố định 2 bên. Toàn bộ không gian được ưu tiên lấp đầy cho trải nghiệm học tập mô phỏng tương tác.
- **Bố cục tinh gọn & Linh hoạt theo kịch bản nội dung**:
  - Không dùng các khối header banner cồng kềnh với nền gradient xanh đậm; không dùng sidebar 2 bên chiếm diện tích.
  - Cấu trúc các bước học, số lượng màn và cơ chế điều hướng **phải bám sát theo kịch bản nội dung cụ thể của từng bài học/thí nghiệm**, không áp đặt máy móc một khuôn mẫu cứng nhắc.
  - Khi bài học đã có luồng chuyển bước thông qua các nút thao tác trong bài, ưu tiên giữ giao diện tinh gọn, không cần hiển thị thanh tab bước học ở đầu trang. Nếu bài học có thanh tiến trình, giữ dạng thanh ngang gọn gàng, tuyệt đối không để rớt dòng thành cột dọc.
- **Bảng màu Design Tokens (`:root`)**: Bắt buộc dùng bộ token tại Mục 0.1. Khối dưới đây đã được cập nhật theo file chuẩn:
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
    --shadow:0 4px 12px rgba(45,139,111,.10);
    --shadow-sm:0 2px 6px rgba(26,26,26,.05);
  }
  ```
- **Font & Icon**: Dùng 1 font duy nhất **`Be Vietnam Pro`** (weights 400, 500, 600, 700, 800) kết hợp hệ thống biểu tượng **`Tabler Icons`** (`<i class="ti ti-[icon-name]">`). Không dùng emoji hay clipart.

---

## 2. CẤU TRÚC ƯU TIÊN HAI KHỐI (TWO-BLOCK WORKSPACE)

Cấu trúc mặc định không còn là sáu tầng giao diện xếp dọc. Mỗi stage phải bắt đầu trực tiếp bằng hai khối song song, đúng file chuẩn SH10_B01_M02.html:

    ┌─────────────────────────────────────┬──────────────────────────────┐
    │ KHỐI TRÁI — .visual-card            │ KHỐI PHẢI — .workspace-card  │
    │ Tiêu đề, câu hỏi dẫn dắt             │ Hướng dẫn thao tác duy nhất  │
    │ Text giảng ngắn                     │ Nhiệm vụ tương tác            │
    │ Hình ảnh hoặc dữ kiện trực quan     │ Trạng thái và phản hồi        │
    ├─────────────────────────────────────┴──────────────────────────────┤
    │ .controls-row: Quay lại · Làm lại · Tiếp tục/Hoàn thành            │
    └────────────────────────────────────────────────────────────────────┘

### 2.1. Cấu trúc HTML chuẩn của một stage

    <main class="app" id="app">
      <section class="stage" id="stage-s01" data-stage="0" aria-labelledby="s01-title">
        <div class="split-workspace">
          <article class="visual-card">
            <div class="visual-card__head">
              <h2 id="s01-title">Tên nội dung đang học</h2>
              <p class="question">Câu hỏi dẫn dắt?</p>
              <p class="lesson-copy">Nội dung giảng giải ngắn gọn theo kịch bản.</p>
            </div>
            <div class="visual-body">
              <!-- Hình ảnh, sơ đồ, canvas hoặc dữ kiện trực quan -->
            </div>
          </article>

          <article class="workspace-card">
            <div class="instruction">
              <i class="ti ti-hand-click"></i>
              <span>Hướng dẫn thao tác duy nhất của stage.</span>
            </div>
            <div class="workspace" id="workspaceS01"></div>
            <div class="inline-feedback hidden" id="feedbackS01"
                 role="status" aria-live="polite"></div>
          </article>
        </div>

        <div class="controls-row">
          <button class="btn" type="button" data-prev>Quay lại</button>
          <button class="btn" type="button" data-reset>Làm lại màn</button>
          <span class="spacer"></span>
          <button class="btn btn-primary" type="button" data-next disabled>Tiếp tục</button>
        </div>
      </section>
    </main>

### 2.2. Khối trái — .visual-card

Khối trái cung cấp bối cảnh và dữ kiện học tập, theo đúng thứ tự:

1. h2: tên nội dung tự nhiên của phần đang học.
2. .question: câu hỏi dẫn dắt.
3. .lesson-copy: nội dung giảng ngắn, không lặp hướng dẫn.
4. .visual-body: ảnh, sơ đồ, canvas hoặc dữ kiện trực quan.

Không hiển thị `.eyebrow`, `.stage-badge`, `.stage-step-indicator` hay bất kỳ nhãn nào có chữ `Stage`, `Giai đoạn`, `Màn x/y`, `Bước x/y`, `ST01`, `Phase 1`. Các tên này chỉ được dùng nội bộ trong mã, ID và LMS state.

Quy tắc:

- Trên desktop, khối trái sticky tại top:0.
- Khối trái bắt buộc có ảnh, SVG, Canvas, sơ đồ hoặc bảng dữ kiện trực quan; không dùng một đoạn văn đơn thuần để thay cho phần hình.
- Hình ảnh phải là dữ kiện học tập, không chỉ trang trí.
- Không đặt nút kiểm tra hoặc phản hồi đúng/sai trong khối trái.
- Không lặp câu mệnh lệnh thao tác trong .lesson-copy.
- Nếu kịch bản không có ảnh riêng, tạo sơ đồ hoặc bảng dữ kiện trực quan từ nội dung; không chuyển nhiệm vụ tương tác sang cột trái.

### 2.3. Khối phải — .workspace-card

Khối phải chứa:

1. Một khung .instruction duy nhất.
2. Nhiệm vụ tương tác.
3. Trạng thái trung gian hoặc danh sách kết quả.
4. Nút Kiểm tra/Làm lại nếu kịch bản yêu cầu.
5. Khung .inline-feedback đúng/sai.

Toàn bộ nút, thẻ lựa chọn, vùng kéo thả, trường nhập và thao tác chấm bài phải nằm ở khối phải.

Quy tắc:

- Nền var(--cream-2); khối trái dùng nền trắng.
- Không lặp lại tiêu đề stage ở khối phải.
- Phản hồi mặc định ẩn.
- Nút kiểm tra chỉ mở khi đủ dữ liệu đầu vào.
- Khi sai, đưa gợi ý hoặc giải thích nguyên nhân.
- Khi đúng, xác nhận và giải thích căn cứ.

### 2.4. Hàng điều khiển — .controls-row

Hàng điều khiển nằm ngoài .split-workspace, ngay dưới hai khối và trải toàn chiều rộng:

    .controls-row {
      display:flex;
      align-items:center;
      gap:10px;
      width:100%;
      margin-top:16px;
      padding:14px 0 2px;
      border-top:1px solid var(--paper-line);
      overflow-x:auto;
      scrollbar-width:none;
    }
    .controls-row .spacer { flex:1; }
    .controls-row .btn { flex:0 0 auto; white-space:nowrap; }

Trên mobile, hàng điều khiển có thể sticky ở đáy nhưng phải giữ một hàng cuộn ngang; không xếp thành cột che nội dung.

### 2.5. Tỉ lệ và responsive

Desktop mặc định:

    .split-workspace {
      display:grid;
      grid-template-columns:minmax(0,58fr) minmax(340px,42fr);
      gap:20px;
      align-items:start;
    }

Nhiệm vụ nối ghép có thể dùng tỉ lệ 52/48, với cột phải tối thiểu 390px:

    .stage.matching-stage .split-workspace {
      grid-template-columns:minmax(0,52fr) minmax(390px,48fr);
    }

Dưới 980px:

    .split-workspace { grid-template-columns:1fr; }
    .visual-card { position:static; }
    .workspace-card { padding:16px; }

Dưới 700px:

    body { font-size:16px; }
    .app { padding:10px 10px 8px; }
    .visual-card__head { padding:12px; }
    .visual-body { padding:10px; }
    .workspace-card { padding:13px; }

### 2.6. Thành phần bị loại khỏi cấu trúc mặc định

Không đặt các thành phần sau trong file học liệu con:

- Top bar lời chúc hoặc tài khoản.
- Header banner lớn.
- Thanh module hoặc thanh tab stage ở đầu trang.
- Iframe lồng thêm một học liệu khác.
- Các flow box lặp lại nội dung.
- Banner liên kết hoặc footer quảng bá.
- Sidebar cố định hai bên.

Điều hướng cấp khóa học chỉ thuộc shell bên ngoài nếu hệ thống thực sự cần. Nó không được thay đổi cấu trúc hai khối của module con.

### 2.7. Nhiều stage

- Mỗi stage dùng lại đúng cấu trúc hai khối.
- Chỉ stage hiện tại được hiển thị; stage khác dùng thuộc tính hidden.
- Trạng thái hoàn thành được giữ khi quay lại.
- Không tạo một trang dài hiển thị đồng thời toàn bộ stage.
- Số stage, nội dung và điều kiện chuyển bám sát kịch bản.

---
## 3. CƠ CHẾ DYNAMIC CHUYỂN MODULE (JavaScript Logic)

File mẹ quản lý việc chuyển đổi giữa các module con và cập nhật nội dung 4 khối bổ trợ phía dưới thông qua cấu trúc dữ liệu `moduleData` và hàm `loadModule()`:

```js
const moduleData = {
  m1: {
    label: "Sinh học 10 · Bài 1 · Module 02",
    title: "Mục tiêu và vai trò của môn Sinh học",
    outcome: "Yêu cầu cần đạt: Phân biệt các mục tiêu...",
    theory: [["Tiêu đề 1", "Nội dung 1"], ["Tiêu đề 2", "Nội dung 2"]],
    note: ["Lưu ý 1", "Lưu ý 2"],
    modelTitle: "Tên mô hình bổ trợ",
    modelText: "Mô tả mô hình",
    guide: "Hướng dẫn thao tác"
  },
  m2: { ... },
  m3: { ... }
};

function loadModule(fileUrl, btnElement, modId, labelText, titleText, outcomeText) {
  // 1. Cập nhật nút active ở thanh cuộn ngang
  document.querySelectorAll('.module-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  // 2. Cập nhật Header Bài học
  if (labelText) document.getElementById('moduleLabel').innerHTML = '<i class="ti ti-dna"></i> ' + labelText;
  if (titleText) document.getElementById('moduleTitle').textContent = titleText;
  if (outcomeText) document.getElementById('moduleOutcome').textContent = outcomeText;

  // 3. Cập nhật nội dung động cho 4 khối bổ trợ (.flowBox) phía dưới
  const data = moduleData[modId];
  if (data) {
    document.getElementById('theoryList').innerHTML = data.theory.map(t => `<div class="theoryItem"><b>${t[0]}</b><span>${t[1]}</span></div>`).join('');
    document.getElementById('noteBox').innerHTML = '<ul>' + data.note.map(n => `<li>${n}</li>`).join('') + '</ul>';
    document.getElementById('modelTitle').textContent = data.modelTitle;
    document.getElementById('modelText').textContent = data.modelText;
    document.getElementById('modelGuide').innerHTML = '<b>Hướng dẫn thao tác:</b> ' + data.guide;
  }

  // 4. Tải file HTML con vào iframe
  const iframe = document.getElementById('moduleIframe');
  if (iframe) {
    iframe.src = fileUrl;
  }
}

// 5. Tự động điều chỉnh chiều cao iframe khi file con gửi message
window.addEventListener('message', function(e) {
  if (e.data && e.data.height) {
    const iframe = document.getElementById('moduleIframe');
    if (iframe) {
      iframe.style.height = Math.max(750, e.data.height + 20) + 'px';
    }
  }
});
```

---

## 4. QUY ĐỊNH VỀ CÁC FILE HTML CON KHI NHÚNG VÀO FILE MẸ

Để đảm bảo hiển thị sạch sẽ, đồng bộ và **không bị trùng lặp giao diện** khi nhúng vào `iframe` của file mẹ:

1. **Bắt buộc có CSS `.hidden`**: Khai báo `.hidden { display: none !important; }` để tránh tự động hiện Modal chúc mừng khi vừa tải trang.
2. **Cảnh báo Thông Báo khi Thao Tác Sai / Thiếu Bước Qua Màn**:
   - Khi người học **thao tác sai**, **chọn chưa đúng**, hoặc **chưa hoàn thành đủ bước bắt buộc của Màn**, hệ thống phải hiển thị thông báo phản hồi màu Cảnh báo/Lỗi `bad` (`border-left: 4px solid var(--wrong); background: var(--wrong-bg);`) tại ô `#globalFeedback` hoặc `.inline-feedback`.
   - Nút "Tiếp tục" (`#btnNext`) giữ trạng thái vô hiệu hóa (`disabled`) cho đến khi người học hoàn thành chính xác 100% nhiệm vụ của Màn.
3. **Báo cáo chiều cao tự động qua `postMessage`**: Mọi file con phải có hàm `reportHeight()` để file mẹ tự co giãn `iframe.style.height`, triệt tiêu hoàn toàn thanh cuộn đôi (double scrollbar).

---

## 5. TIÊU CHUẨN THIẾT KẾ MODULE CON CHUẨN V10 (Tham chiếu: `SH10_B02_M02.html`)
> **Mục tiêu:** Định nghĩa bộ khung cấu trúc chuẩn V10 để chạy kịch bản tự sinh cho toàn bộ bài học (Lớp 10, Lớp 11, Lớp 12) đảm bảo **"10 file như một"**.

### 5.1. Quy Định Loại Bỏ Header Banner (BẮT BUỘC)
- **Tuyệt đối KHÔNG DÙNG khối `<header>` banner**: Không tạo banner màu xanh gradient (`linear-gradient(135deg, var(--jade-dark), #1c523d)`), không có thẻ `<header>` chứa `.header-badge`, tiêu đề `<h1>` hay hộp mục tiêu `.header-goal` ở đầu trang.
- **Lý do:** Tối ưu tối đa không gian màn hình chiều dọc cho học sinh, giúp học sinh mở bài là tương tác ngay, không bị chiếm 140–180px chiều cao và không gây trùng lặp tiêu đề khi nhúng vào hệ thống LMS/Portal.
- **Trang bắt đầu trực tiếp từ:**
  1. **Thanh tiến trình Sticky Top 0 (`.progress-nav-container`)**: Dính trên đỉnh viewport để học sinh chuyển đổi giữa các màn học.
  2. **Vùng làm việc tương tác**: Các thẻ card/stage hoặc lưới 2 cột `.split-workspace`, đúng theo chuẩn file mẫu [`SH10_B02_M02.html`](modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html).

### 5.2. Thanh Tiến Trình Dính Đỉnh (`.progress-nav-container` Sticky Top 0 — BẮT BUỘC THEO CHIỀU NGANG)
- Dính cố định ở `top: 0; z-index: 100;` để học sinh luôn nắm được tiến độ học tập.
- **BẮT BUỘC 100% THEO CHIỀU NGANG, TUYỆT ĐỐI CẤM XẾP DỌC:**
  - **Trên Desktop:** Dàn đều trên 1 hàng ngang duy nhất (`display: grid; grid-template-columns: repeat(N, 1fr); gap: 8px;` hoặc `display: flex; gap: 8px;`).
  - **Trên Mobile / Màn hình nhỏ:** Bắt buộc giữ **1 HÀNG DUY NHẤT cuộn ngang** (`display: flex !important; flex-wrap: nowrap !important; overflow-x: auto !important; white-space: nowrap !important; scrollbar-width: none;`).
  - **TUYỆT ĐỐI CẤM** dùng `grid-template-columns: 1fr` hay `flex-direction: column` làm các tab rớt dòng xếp chồng thành cột dọc chiếm diện tích và gây vỡ layout.
- Các tab bước `.step-tab` / `.step-tab-btn`: có trạng thái `.active` (đang học) và `.completed` (kèm biểu tượng check `✓`).

### 5.3. QUY TẮC CHỐNG TRÙNG LẶP HƯỚNG DẪN & CHỐNG TỰ BỊA VĂN BẢN (Anti-Duplication & Zero-Hallucination — BẮT BUỘC)
Để loại bỏ tình trạng lặp chữ hoặc xuất hiện 2–3 lần hướng dẫn gây rối mắt:
1. **Nguyên tắc "Đơn điểm hướng dẫn" (Khung Hướng Dẫn `.guide-box` là duy nhất)**:
   - **Vị trí bắt buộc:** Nằm **NGAY TRÊN** khu vực thao tác/làm bài (dưới tiêu đề hoặc dẫn dắt ngắn của màn, trước sơ đồ/ảnh/canvas).
   - **Cấu trúc:** Icon Tabler + nhãn in hoa:
     ```html
     <div class="guide-box">
       <i class="ti ti-info-circle"></i>
       <span><strong>HƯỚNG DẪN:</strong> Nhấn vào từng điểm đánh dấu trên hình để xem thông tin chi tiết. Khi xem đủ các điểm, nút TIẾP TỤC sẽ xuất hiện.</span>
     </div>
     ```
2. **Loại bỏ trùng lặp ở câu dẫn (`.lead-text`):**
   - Câu dẫn chỉ mang tính định hướng bối cảnh khoa học (ví dụ: *"Quan sát hai hình đối chiếu dưới đây để tìm hiểu sự khác biệt..."*).
   - **TUYỆT ĐỐI KHÔNG** viết câu mệnh lệnh thao tác (*"Nhấn vào từng hình để xem..."*, *"Hãy khám phá từng vị trí..."*) trong `.lead-text`. Nếu kịch bản gốc có lỡ viết vế này vào mục Lời dẫn, AI khi sinh HTML **BẮT BUỘC phải lọc bỏ vế mệnh lệnh** để tránh lặp với `.guide-box` bên dưới.
3. **Tuyệt đối CẤM AI tự bịa huy hiệu và câu hướng dẫn phụ (Zero UI Hallucination):**
   - **CẤM tự tạo huy hiệu chạm trên ảnh:** Tuyệt đối KHÔNG tự tạo các thẻ `.touch-hint-badge` như *"Chạm để khám phá"*, *"Nhấn để xem"*. Trên ảnh chỉ đặt các nút hotspot số tròn (1, 2, 3...) theo đúng kịch bản.
   - **CẤM tự bịa câu lệnh ở khung chú thích bên dưới:** Tuyệt đối không tự viết thêm các câu như *"Chạm vào điểm trên tán lá để xem hoạt động"*, *"Chạm vào chú thỏ..."*, *"Nhấn vào hình để xem..."*. Khung chú thích trước khi click chỉ hiển thị placeholder trạng thái trung tính ngắn gọn (ví dụ: *“Chọn một điểm trên hình để xem thông tin chi tiết”* hoặc ẩn đi); sau khi click thì cập nhật kiến thức sinh học từ kịch bản, không lặp lại câu mệnh lệnh dài dòng.
   - **CẤM tự nối thêm chữ vào hướng dẫn:** Giữ nguyên văn bản hướng dẫn từ kịch bản, không tự ý nối thêm các vế như *" (Trên thiết bị cảm ứng: chạm chọn thẻ rồi chạm nhóm đích)"*.

### 5.4. Hàng Nút Điều Hướng Stage (`.controls-row` / `.stage-actions`)
Nằm ở cuối mỗi stage:
- Nút "QUAY LẠI" (`.btn-secondary`): Trở về stage trước.
- Nút "TIẾP TỤC" (`.btn-primary`): Bị vô hiệu hoá (`disabled`) khi chưa hoàn thành nhiệm vụ của stage; sáng lên khi hoàn thành xong.

### 5.5. Modal Chúc Mừng Hoàn Thành V10 & Canvas Confetti (`#completionModal`)
Khi hoàn thành stage cuối cùng:
- Hiển thị Modal overlay mờ đục với cúp vàng (`ti ti-trophy`), tiêu đề chúc mừng và 2 nút "Xem lại bài" / "Đóng thông báo".
- Bắn pháo hoa hạt rơi bằng hàm `launchConfetti()` tạo canvas tự động, tự hủy sau khi kết thúc hiệu ứng (không phụ thuộc thư viện ngoài).
- **Quy tắc ẩn Modal khi tải trang (CHỐNG LỖI TỰ ĐỘNG HIỆN MODAL)**:
  - Thẻ modal ban đầu trong HTML bắt buộc phải có class `hidden`: `<div class="congrats-overlay hidden" id="completionModal" role="dialog" aria-modal="true">`.
  - Trong CSS bắt buộc phải có khai báo với độ ưu tiên cao:
    ```css
    .hidden { display: none !important; }
    .congrats-overlay.hidden,
    .modal-backdrop.hidden,
    #completionModal.hidden,
    #congratsModal.hidden {
      display: none !important;
    }
    ```
  - *Tuyệt đối không được thiếu `.congrats-overlay.hidden` hoặc thiếu `!important`*, vì nếu không selector `.congrats-overlay { display: grid; }` ở cuối file CSS sẽ ghi đè `.hidden`, khiến modal tự hiện đè lên toàn màn hình ngay khi tải trang và làm học sinh không thao tác được.

### 5.6. Bảng State LMS & Truyền Chiều Cao (Zero Storage)
- Toàn bộ tiến trình lưu trong biến `const lmsState = { ... }; window.lmsState = lmsState;`. Tuyệt đối không dùng `localStorage`/cookie.
- Hàm `reportHeight()` tự động tính `document.documentElement.scrollHeight` và gọi `window.parent.postMessage({ type: 'setHeight', height: h }, '*')`.

### 5.7. TIÊU CHUẨN TƯƠNG TÁC NỐI KÉO ĐA NỀN TẢNG (Drag & Drop, Tap-to-Place & SVG Line Matching)
Nhằm đem lại trải nghiệm thao tác trực quan, sống động và mượt mà trên cả máy tính lẫn thiết bị cảm ứng:

1. **Kéo thả thẻ phân loại đa nền tảng (Hybrid Drag & Drop + Touch Fallback — BẮT BUỘC)**:
   - **Trên Desktop (Chuột):** Dùng HTML5 Drag & Drop API chuẩn:
     - Thẻ nguồn: `draggable="true"`, khi kéo thêm class `.is-dragging` (`opacity: 0.5; transform: scale(0.98); cursor: grabbing;`).
     - Vùng đích: bắt sự kiện `dragover` (gọi `e.preventDefault()`), khi thẻ di chuột qua thì thêm class `.drag-over` (`border-color: var(--jade); background: var(--jade-pale); transition: all 0.2s ease;`), khi `dragleave` hoặc `drop` thì gỡ bỏ class.
   - **Trên Mobile / Tablet (Màn hình cảm ứng):** Người học không thể kéo thả mượt mà trên điện thoại. Bắt buộc tích hợp cơ chế **"Chạm chọn $\rightarrow$ Chạm đích" (Tap-to-select, Tap-to-place)**:
     - **Chạm chọn thẻ:** Thẻ nguồn nhận class `.selected` (viền nét đứt phát sáng `outline: 2px dashed var(--jade); box-shadow: 0 0 0 4px var(--jade-pale); transform: translateY(-2px);`).
     - **Chạm vùng đích:** Thẻ lập tức chuyển vào vùng đích đã chạm, gỡ bỏ class `.selected`.
   - **Hoàn tác dễ dàng (Undo):** Cho phép học sinh chạm vào thẻ đã nằm trong vùng đích để hoàn trả ngay về khay nguồn (`returnCard`), không bắt học sinh phải làm lại từ đầu.
   - **Trạng thái khay rỗng:** Khi toàn bộ thẻ đã được đưa vào vùng đích, khay nguồn tự động hiển thị thông báo ghi nhận trung tính `.source-tray-empty` (ví dụ: *“Đã xếp hết các thẻ vào nhóm.”*).

2. **Ghép đôi 2 cột dọc nối bằng đường tia SVG (`2-Column Vertical Match with SVG Lines` — BẮT BUỘC)**:
   - **Bố cục 2 cột dọc:** Cột trái là thẻ nguồn, cột phải là thẻ đích, mỗi thẻ có chấm tròn nối (`.dot`).
   - **Vẽ đường nối động SVG:** Khi người học chọn 1 thẻ trái và 1 thẻ phải ghép đúng, JS tính tọa độ tâm của 2 chấm `.dot` bằng hàm `getBoundingClientRect()` và vẽ thẻ `<line x1="..." y1="..." x2="..." y2="..." stroke="var(--jade)" stroke-width="3" stroke-linecap="round" />` vào khung `<svg class="matching-svg">`.
   - Giữ đường nối bám sát thẻ khi cuộn hoặc co giãn màn hình bằng cách gọi hàm vẽ lại `renderLines()` khi cửa sổ resize.

### 5.8. BỘ MICRO-ANIMATIONS MƯỢT MÀ CHUẨN V10 (Smooth Micro-Animations)
Mọi chuyển động trong bài học phải tinh tế, mượt mà, tạo cảm giác phần mềm cao cấp, không giật cục:

1. **Hiệu ứng Vòng Xung Nhịp Hotspot (`.pulse-ring` & `@keyframes pulseAnim`)**:
   - Các nút hotspot số tròn (1, 2, 3...) bắt buộc có vòng xung nhịp lan tỏa liên tục để thu hút sự chú ý:
     ```css
     .pulse-ring {
       position: absolute;
       width: 100%;
       height: 100%;
       border-radius: 50%;
       box-shadow: 0 0 0 0 rgba(60, 165, 122, 0.7);
       animation: pulseAnim 1.8s infinite;
       pointer-events: none;
     }
     @keyframes pulseAnim {
       0% { box-shadow: 0 0 0 0 rgba(60, 165, 122, 0.7); }
       70% { box-shadow: 0 0 0 14px rgba(60, 165, 122, 0); }
       100% { box-shadow: 0 0 0 0 rgba(60, 165, 122, 0); }
     }
     .hook-hotspot.viewed .pulse-ring { display: none; }
     ```
   - Khi điểm đã xem (`.viewed`), vòng xung nhịp tự động tắt, nút chuyển sang màu xanh tĩnh biểu thị đã hoàn thành.

2. **Hiệu ứng Chuyển Màn & Xuất Hiện Panel Mượt (`@keyframes fadeIn` & `@keyframes slideUp`)**:
   - Các khung nhận xét kết luận (`.conclude-card`), phản hồi đúng/sai (`.feedback-panel`), câu hỏi củng cố hoặc khi đổi stage bắt buộc có transition êm dịu:
     ```css
     @keyframes fadeIn {
       from { opacity: 0; transform: translateY(6px); }
       to { opacity: 1; transform: translateY(0); }
     }
     @keyframes slideUp {
       from { opacity: 0; transform: translateY(16px); }
       to { opacity: 1; transform: translateY(0); }
     }
     ```

3. **Hiệu ứng Cảnh Báo Lỗi Rung Nhẹ (`@keyframes shake`)**:
   - Khi người học chọn sai câu hỏi hoặc phân loại sai nhóm, khung phản hồi hoặc thẻ lựa chọn rung nhẹ:
     ```css
     @keyframes shake {
       0%, 100% { transform: translateX(0); }
       20%, 60% { transform: translateX(-6px); }
       40%, 80% { transform: translateX(6px); }
     }
     ```

4. **Hiệu ứng Viền Phát Sáng Canvas Xoay Tròn (`@keyframes canvasBorderSpin`)**:
   - Khung viền Canvas tự quay 360° bằng `conic-gradient` êm dịu quanh khung `.canvas-glow-wrap`.

5. **Hiệu ứng Modal Pop-in & Pháo Hoa Canvas (`@keyframes modalPop` & `launchConfetti`)**:
   - Modal chúc mừng nảy nhẹ (`from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); }`).
   - Pháo hoa giấy Confetti tự vẽ và rơi lơ lửng đa góc độ bằng Canvas độc lập.

