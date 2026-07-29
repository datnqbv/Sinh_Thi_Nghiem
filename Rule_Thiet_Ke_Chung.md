# 📐 NGUYÊN TẮC THIẾT KẾ FILE HTML MẸ (Parent HTML Shell Standard)

> **Mục đích:** Quy chuẩn cách xây dựng trang Khung mẹ (Parent Portal/Shell) quản lý và nhúng các Module học liệu tương tác con (Virtual Labs) theo đúng phong cách **Tom Haugomat Editorial Flat** của Aiducation LMS.  
> **Trục chuẩn:** Dựa trên file tham chiếu [GIAODIEN_SH10 V10.html](file:///d:/download2004/BMH_AI/AIEDU/SInh_Thi_Nghiem/GIAODIEN_SH10%20V10.html).

---

## 1. TỔNG QUAN KIẾN TRÚC GIAO DIỆN (Single-Column Centered Layout)

- **Bố cục 1 cột trung tâm (Single-Column Centered)**: Độ rộng tối đa toàn trang là **`1200px`** (`max-width: var(--lesson-width)`), căn giữa màn hình (`margin: 0 auto`).
- **Loại bỏ Sidebar 2 bên**: Tuyệt đối không dùng 2 thanh cố định 2 bên. Toàn bộ không gian được ưu tiên lấp đầy cho trải nghiệm học tập mô phỏng tương tác.
- **Bảng màu Design Tokens (`:root`)**:
  ```css
  :root {
    --deep:#064E3B; --deep2:#083B32; --green:#10B981; --green2:#059669;
    --mint:#ECFDF5; --mint-strong:#D1FAE5; --teal:#0D9488; --teal-light:#CCFBF1;
    --blue:#2563EB; --blue-light:#EFF6FF; --gold:#F59E0B; --gold-light:#FEF3C7;
    --purple:#8B5CF6; --purple-light:#F5F3FF; --orange:#F97316; --orange-light:#FFF7ED;
    --bg:#F6FAF8; --surface:#FFFFFF; --line:#DDE8E2; --text:#10231C; --muted:#64776F;
    --radius:20px; --lesson-width:1200px;
    --shadow-sm:0 4px 12px rgba(15,23,42,.05); --shadow-md:0 12px 28px rgba(15,23,42,.08);
  }
  ```
- **Font & Icon**: Dùng 1 font duy nhất **`Be Vietnam Pro`** (weights 400, 500, 600, 700, 800) kết hợp hệ thống biểu tượng **`Tabler Icons`** (`<i class="ti ti-[icon-name]">`). Không dùng emoji hay clipart.

---

## 2. CẤU TRÚC PHÂN TẦNG TỪ TRÊN XUỐNG (Top-Down Flow)

Toàn bộ file mẹ được tổ chức thành 6 tầng rõ ràng:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Thanh Top Bar (Lời chúc học tập + Tên tài khoản)         │
├─────────────────────────────────────────────────────────────┤
│ 2. Header Bài học (.moduleHead: Tên bài + Yêu cầu cần đạt)  │
├─────────────────────────────────────────────────────────────┤
│ 3. Thanh Chuyển Module Cuộn Ngang (.progress-nav-scroll)    │
├─────────────────────────────────────────────────────────────┤
│ 4. Khung Nhúng Học Liệu Tương Tác (iframe module con)       │
├─────────────────────────────────────────────────────────────┤
│ 5. Khối Bổ Trợ (.flowBox: Lý thuyết, Lưu ý, Thí nghiệm, Quiz) │
├─────────────────────────────────────────────────────────────┤
│ 6. Banner Chân Trang Footer (.footer-link)                  │
└─────────────────────────────────────────────────────────────┘
```

### Chi tiết các khối giao diện:

### 2.1. Thanh Top Bar (`.top-bar`)
Dùng hiển thị thông điệp động lực và thông tin học sinh:
```html
<div class="top-bar">
  <div class="search-banner">
    <i class="ti ti-sparkles" style="color:var(--green)"></i>
    <span>Tiến bộ không đến trong một ngày, mà từ sự cố gắng tương tác mỗi ngày.</span>
  </div>
  <div class="user-badge">
    <i class="ti ti-user-circle" style="color:var(--teal)"></i>
    <span>Nguyễn Thị Thao</span>
  </div>
</div>
```

### 2.2. Header Thông Tin Bài Học & Thanh Module Tích Hợp (`.moduleHead` & `.module-tabs-inline`)
Chứa thông tin tổng quan của Bài học hiện tại. **BẮT BUỘC đặt các nút chuyển Module (`Module 1`, `Module 2`, `Module 3`...) nằm NGHÈN NGHANG bên cạnh nhãn xanh lá (`.moduleLabel`)**:
- Cỡ chữ các nút `Module 1`, `Module 2`... **bắt buộc nhỏ hơn (`font-size: 0.75rem`)** cỡ chữ nhãn xanh lá (`0.85rem`).
- Khi ở bài/module nào, nút đó sẽ **phát sáng nổi bật (glowing effect: `box-shadow: 0 0 12px rgba(16,185,129,0.5);`)**.

```html
<div class="moduleHead">
  <div class="moduleHead-top">
    <div class="moduleLabel" id="moduleLabel"><i class="ti ti-dna"></i> Sinh học 10 · Bài 1 · Module 01</div>
    <nav class="module-tabs-inline" aria-label="Danh sách Module bài học">
      <button class="module-tab-btn active" onclick="loadModule('SH10_B01_M02.html', this, 'm1', 'Sinh học 10 · Bài 1 · Module 01', 'Mục tiêu và vai trò của môn Sinh học', 'Yêu cầu...')">
        Module 1
      </button>
      <button class="module-tab-btn" onclick="loadModule('SH10_B02_M02.html', this, 'm2', 'Sinh học 10 · Bài 2 · Module 02', 'Thiết bị nghiên cứu và học tập môn Sinh học', 'Yêu cầu...')">
        Module 2
      </button>
      <button class="module-tab-btn" onclick="loadModule('SH10_B02_M03.html', this, 'm3', 'Sinh học 10 · Bài 2 · Module 03', 'Quy trình nghiên cứu khoa học và xử lí dữ liệu', 'Yêu cầu...')">
        Module 3
      </button>
    </nav>
  </div>
  <h2 id="moduleTitle">Mục tiêu và vai trò của môn Sinh học</h2>
  <div class="outcome" id="moduleOutcome">Yêu cầu cần đạt: Phân biệt các mục tiêu học tập môn Sinh học...</div>
</div>
```

```css
.moduleHead-top {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.moduleLabel {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--mint);
  color: var(--teal);
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 800;
  border: 1px solid #A7F3D0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.module-tabs-inline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.module-tab-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 14px;
  border-radius: 99px;
  border: 1.5px solid var(--line);
  background: #fff;
  color: var(--text);
  font-size: 0.75rem; /* Nhỏ hơn nhãn xanh lá 0.85rem */
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: .25s ease;
  box-shadow: var(--shadow-sm);
}
.module-tab-btn.active {
  background: var(--deep);
  border-color: var(--green);
  color: #fff;
  box-shadow: 0 0 12px rgba(16,185,129,0.5), 0 2px 6px rgba(6,78,59,0.3); /* Hiệu ứng phát sáng rực rỡ */
}
```

### 2.3. Khung Nhúng Học Liệu Tương Tác Con (`.flowBox.interactive` + `<iframe>`)
Bắt buộc bọc container `iframe` học liệu tương tác trong thẻ `.flowBox.interactive` có tiêu đề nhãn **"Kiến thức"** (icon `🧪` hoặc `ti-flask-2`), và vừa vặn chiều cao (`height: 620px`) để không bị thừa khoảng trắng phía dưới:
```html
<div class="flowBox interactive">
  <div class="flowTitle">
    <div class="iconBox">🧪</div>
    <div>
      <h3>Kiến thức</h3>
      <p>Thực hiện các thao tác mô phỏng khoa học và trả lời câu hỏi ở từng Màn.</p>
    </div>
  </div>
  <div class="module-content-card">
    <iframe id="moduleIframe" class="module-iframe" src="SH10_B01_M02.html" title="Module học liệu tương tác Sinh học 10"></iframe>
  </div>
</div>
```
```css
.module-content-card {
  width: 100%;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.module-iframe {
  width: 100%;
  height: 620px;
  border: none;
  display: block;
}
```

### 2.4. Các Khối Bổ Trợ Phía Dưới (`.flowBox`)
Nằm bên dưới ô học liệu tương tác. Bao gồm 3 khối tiêu chuẩn thứ tự từ trên xuống:
1. `.flowBox.theory` (Viền xanh lá): **Kiến thức cốt lõi cần nhớ**.
2. `.flowBox.note` (Viền vàng/hổ phách): **Lưu ý quan trọng**.
3. `.flowBox.interactive` (Viền xanh teal): **Mô hình / Thí nghiệm / Tương tác** (chứa khung đồ họa mô phỏng `.interactiveBox`, nhãn mô hình `.modelTitle`, ghi chú `.modelText` và hướng dẫn thao tác `.guide`).
*(Đã loại bỏ khối Luyện tập & Củng cố `.flowBox.quiz` khỏi giao diện file mẹ).*

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

1. **KHÔNG CÓ Header riêng**: Các file con **BẮT BUỘC XÓA BỎ** khối `<header>` banner riêng (vì tiêu đề và mục tiêu đã hiển thị ở Header của file mẹ).
2. **KHÔNG CÓ Thanh Tab Màn riêng (`.progress-nav`)**: Các file con **BẮT BUỘC XÓA BỎ** thanh tab chuyển màn (`01 · Đời sống`, `02 · Lĩnh vực`,... vì thanh Module cuộn ngang trên file mẹ đã quản lý điều hướng cấp cao, còn chuyển màn bên trong file con do 2 nút Quay lại / Tiếp tục đảm nhiệm).
3. **KHÔNG CÓ Footer Link riêng**: Các file con **BẮT BUỘC XÓA BỎ** khối `.link-section` (*Sinh Học Aiducation - Truy cập aiducation.edu.vn*) ở chân trang.
4. **Bắt đầu trực tiếp từ Split Workspace**:
   - File con bắt đầu trực tiếp từ Lưới 2 cột `.split-workspace` với Cột trái Canvas (`.canvas-card`) và Cột phải Bài tập (`.workspace-card`).
5. **Bắt buộc có CSS `.hidden`**:
   - Khai báo `.hidden { display: none !important; }` để tránh tự động hiện Modal chúc mừng khi vừa tải trang.
6. **Cảnh báo Thông Báo khi Thao Tác Sai / Thiếu Bước Qua Màn**:
   - Khi người học **thao tác sai**, **chọn chưa đúng**, hoặc **chưa hoàn thành đủ bước bắt buộc của Màn**, hệ thống phải hiển thị thông báo phản hồi màu Cảnh báo/Lỗi `bad` (`border-left: 4px solid var(--wrong); background: var(--wrong-bg);`) tại ô `#globalFeedback` hoặc `.inline-feedback`.
   - Nút "Tiếp tục" (`#btnNext`) giữ trạng thái vô hiệu hóa (`disabled`) cho đến khi người học hoàn thành chính xác 100% nhiệm vụ của Màn.


