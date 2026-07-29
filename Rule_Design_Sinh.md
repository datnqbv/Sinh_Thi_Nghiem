# 🧬 PROMPT THIẾT KẾ — MÔN SINH HỌC (Virtual Lab / Mô phỏng tương tác)

> **Cách dùng:** Dán nguyên file này + KỊCH BẢN nội dung của bài (đã duyệt) vào cuối, sau đó yêu cầu:
> *"Sinh ra file HTML mô phỏng Sinh học hoàn chỉnh theo prompt và kịch bản này."*
>
> **Nguồn gốc:** rút ra và Việt hoá cho môn Sinh từ 3 tài liệu chuẩn của Aiducation —
> `prompt-Hoa.md` (engine vẽ canvas thí nghiệm), `02_design_toan_final_v2.md` (design tokens +
> tích hợp LMS/Athena + responsive), `AIDUCATION_UI_REDESIGN_PLAYBOOK.md` (chuẩn hoá màu/font khi nhúng).
> **Khác biệt cốt lõi so với Hoá/Toán:** màu "khoa học" của Sinh (diệp lục, tinh bột–iốt, tế bào,
> chỉ thị hô hấp...) và bộ dụng cụ, hiệu ứng đặc thù sinh học; nguyên tắc an toàn + kết luận có giới hạn.

---

## 0. VAI TRÒ & TRIẾT LÝ THIẾT KẾ (đọc trước khi viết dòng code đầu tiên)

Đóng vai chuyên gia **Frontend (HTML5/Canvas/JS)** kiêm **Thiết kế học liệu điện tử tương tác môn Sinh học**.
Viết **MỘT file HTML tự chứa** (toàn bộ CSS + JS inline, chỉ import font/icon qua CDN), tuân thủ nghiêm ngặt
design system **"Tom Haugomat editorial flat"** của Aiducation LMS.

Phong cách: **phẳng, tiết chế, sang** — như một trang tạp chí khoa học biên tập. Không gradient màu mè
trong UI, không shadow nặng, không bo góc kiểu "app trẻ con". Ưu tiên khoảng trắng, phân cấp bằng
cỡ chữ + khoảng trắng (không bằng nhiều box màu). Cảm giác mục tiêu: **bình tĩnh, đáng tin, chính xác** —
đây là công cụ học Sinh cho học sinh THPT: đọc dễ, hình khoa học đúng, quan trọng hơn hoa mỹ.

**3 trụ cột không được vi phạm:**
1. **Chính xác khoa học** > trang trí. Mọi hình/màu/hiện tượng phải đúng sinh học thực tế (xem MỤC 4B + MỤC 14).
2. **An toàn thí nghiệm** hiện diện ngay trong mô phỏng (xem MỤC 14) — không để học sinh "thao tác sai nguy hiểm".
3. **Kết luận có giới hạn** — không suy diễn vượt điều kiện thí nghiệm đã kiểm chứng.

---

## 1. TYPOGRAPHY & FONT

- Toàn bộ chữ dùng **MỘT font duy nhất: `Be Vietnam Pro`** — import Google Fonts, **BẮT BUỘC** kèm
  subset tiếng Việt, weights 400, 500, 600, 700, 800.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<!-- Chỉ thêm khi bài CÓ số liệu động trên canvas (nhiệt độ, pH, đếm ngược...) — gộp JetBrains Mono vào cùng 1 request:
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"> -->
```
```css
font-family: 'Be Vietnam Pro', system-ui, sans-serif;
```
- Phân cấp bằng **size + weight, KHÔNG đổi font**:
  - Heading / số lớn: 700–800 · Nhấn mạnh / label: 600 · Body: 400, line-height 1.7, dòng tối đa ~64ch
- **Body tối thiểu 17–18px** (tiếng Việt nhiều dấu, chữ nhỏ dễ bể). Không dùng weight < 400.
- Label nhỏ/badge: **≥ 12px**, weight 600, uppercase, letter-spacing 0.6px.
- Type scale responsive: display `clamp(2rem,5vw,3rem)` · h1 `clamp(1.7rem,4vw,2.4rem)` ·
  h2 `clamp(1.4rem,3vw,1.9rem)` · h3 `1.25rem` · body `1.075rem` · small `0.9rem`.
- **Chữ trên canvas** (`ctx.font`): cũng dùng `"Be Vietnam Pro"` (ví dụ `ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif'`).
  Ngoại lệ: số liệu động đổi liên tục trên canvas (nhiệt độ/pH trong bài enzyme, đếm ngược thời gian...) → dùng
  **`JetBrains Mono`** thay vì `Courier New` — `ctx.font = "bold 13px 'JetBrains Mono', monospace"`, kèm
  `font-variant-numeric: tabular-nums` ở phần HTML tương ứng nếu có. Lý do: `Courier New` là font hệ điều hành,
  có thể thiếu trên một số máy/trình duyệt và bị âm thầm thay thế; `JetBrains Mono` tải qua Google Fonts nên
  hiển thị đồng nhất mọi thiết bị và không giật số khi giá trị đổi mỗi frame (hiếm dùng trong Sinh — chỉ thêm
  font này vào `<head>` khi bài thực sự có số liệu động dạng này, xem MỤC 1 phía trên).

---

## 2. ICON

- Nhúng **Tabler Icons webfont**: `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont/tabler-icons.min.css`
- Dùng `<i class="ti ti-[tên]">` thay cho emoji ở **mọi** button, label, badge. **Không emoji, không clipart.**
- Màu icon: `--ink` hoặc `--jade` (icon trong nút jade thì màu `--cream`).
- Icon hay dùng cho Sinh: `ti-leaf` `ti-plant-2` `ti-microscope` `ti-flask-2` `ti-test-pipe`
  `ti-droplet` `ti-flame` `ti-temperature` `ti-eye` `ti-ruler-2` `ti-clipboard-list`
  `ti-checklist` `ti-target` `ti-alert-triangle` `ti-circle-check` `ti-dna-2` `ti-bug`.

---

## 3. MÀU SẮC UI — DESIGN SYSTEM (chỉ dùng cho GIAO DIỆN)

Khai báo đúng khối `:root` này, **CHỈ dùng các màu này cho UI** (nền, nút, card, chữ, phản hồi) — không tự chế màu lạ:

```css
:root {
  /* Neutrals · giấy & mực */
  --cream:#FAF7F0; --cream-2:#F0EADD; --cream-3:#E7DECC;
  --paper-line:#E5DECF; --paper-line-2:#D6CCB6;
  --ink:#1A1A1A; --ink-2:#514C44; --ink-3:#7C756A; --ink-faint:#ABA396;

  /* Jade · hành động chính */
  --jade:#3CA57A; --jade-deep:#2D8B6F; --jade-dark:#14432F;
  --jade-text:#1B5E48; --jade-soft:#A9D0BE; --jade-pale:#DCEAE1;

  /* Sage · phụ trợ */
  --sage:#A8C9B8; --sage-deep:#7CA792; --sage-text:#46685A; --sage-pale:#E1ECE4;

  /* Accent · điểm nhấn ấm — RẤT tiết chế, tối đa 1–2 chỗ mỗi màn */
  --accent:#E8A24A; --accent-deep:#CE8A33; --accent-text:#8A551A; --accent-pale:#F7E7CD;

  /* Semantic · phản hồi */
  --correct:#2D8B6F; --correct-bg:#DCEAE1;
  --wrong:#C15F3C;   --wrong-bg:#F3E2D6;
  --warning:#C58A2E; --warning-bg:#F5E7CB;
  --info:#4E7F92;    --info-bg:#DCE7EB;

  /* Bán kính & bóng */
  --radius:10px; --radius-lg:14px; --radius-sm:6px;
  --shadow:0 4px 12px rgba(45,139,111,.10); --shadow-sm:0 2px 6px rgba(26,26,26,.05);
}
```

**Quy tắc UI:**
- Nền body `var(--cream)`, chữ `var(--ink)`.
- Card/surface: `var(--cream-2)` hoặc `#FFF`, viền 1px `var(--paper-line)`, radius 10–12px, padding 16–24px; shadow (nếu có) cực nhẹ.
- Nút chính (primary): nền `var(--jade)`, chữ `var(--cream)`, radius **8–10px (KHÔNG pill)**, hover `var(--jade-deep)`, transition 150–200ms.
- Nút phụ: viền `var(--jade)` 1.5px, chữ `var(--jade-text)`, nền trong suốt; hover nền `var(--jade-pale)`.
- Call-out: `border-left:4px solid var(--jade)` trên nền `var(--jade-pale)`.
- **KHÔNG gradient trong UI (CSS), KHÔNG shadow nặng, KHÔNG glassmorphism, KHÔNG dark theme, KHÔNG emoji.**
- **UI colors và "science colors" (MỤC 4) TUYỆT ĐỐI không trộn lẫn** — màu khoa học không bao giờ dùng cho nút/trạng thái phản hồi, và ngược lại.

---

## 4. MÀU "KHOA HỌC" — NGOẠI LỆ QUAN TRỌNG (chỉ dùng BÊN TRONG canvas)

**Màu của hiện tượng sinh học vẽ trong canvas PHẢI theo màu THỰC TẾ, KHÔNG ép theo token UI.**
Bảng token ở MỤC 3 chỉ áp dụng cho UI và phần trang trí canvas (lưới nền, nhãn, giá đỡ). Diệp lục, dung dịch,
chỉ thị, kết tủa, máu, tế bào... vẽ đúng màu sinh học. `ctx.fillStyle` không đọc được biến CSS nên viết thẳng hex/rgb.

### 4A. Bảng màu khoa học Sinh học (tra nhanh cho `ctx.fillStyle`)

| Hiện tượng / vật thể | Màu | Hex |
|---|---|---|
| Lá cây sống / diệp lục | Xanh lá đậm | `#3E7B3A` (biên `#2F5E2C`) |
| Lá sau đun nước sôi (mềm, sẫm) | Xanh olive sẫm | `#4B6B33` |
| Cồn (ethanol) đã hoà diệp lục | Xanh lục trong | `#6FA84B` → đậm dần `#4E8233` |
| Lá đã tẩy diệp lục (mất màu) | Vàng ngà nhạt | `#E4DEC8` |
| Dung dịch iốt (thuốc thử) | Nâu hổ phách | `#9A6420` (loãng `#C89A5A`) |
| **Kết quả DƯƠNG (có tinh bột, vùng chiếu sáng)** | **Xanh tím đậm/đen** | `#241C3D` (viền `#181229`) |
| **Kết quả ÂM (không tinh bột, vùng bị che)** | **Vàng nâu nhạt** | `#C9A24B` |
| Nước / dung dịch trong | Xanh dương rất nhạt | `rgba(210,230,238,0.5)` |
| Nước sôi (bọt + hơi) | như nước + bọt trắng | bọt `rgba(255,255,255,0.75)` |
| Ngọn lửa đèn cồn | Vàng cam → xanh gốc | ngoài `#F6A623`, trong `#E8641A`, gốc `#5B8DEF` |
| Bọt khí O₂ (quang hợp) | Trắng trong | `rgba(255,255,255,0.7)` viền `rgba(180,210,225,0.8)` |
| Nước vôi trong vẩn đục (CO₂) | Trắng sữa | `rgba(245,245,240,0.85)` |
| Chỉ thị BTB — có CO₂ (hô hấp) | Vàng | `#E0B020` |
| Chỉ thị BTB — không CO₂ | Xanh dương | `#2E7CC4` |
| Thuốc thử Benedict/Phêling (kết tủa đường khử) | Đỏ gạch | `#B5471F` (dung dịch xanh `#1C6FB0`) |
| Máu / mô sống | Đỏ trầm | `#A01B1B` (nhạt `#C65B5B`) |
| Nhân tế bào | Tím xanh | `#6A5AA8` |
| Tế bào chất | Xanh nhạt trong | `rgba(180,210,170,0.35)` |
| Thành/màng tế bào | Xanh lục viền | `#5E8C52` |
| Kim loại (giá đỡ, kẹp, kim mũi mác) | Xám thép gradient | `#4A5568`→`#2D3748`→`#1A202C` |
| Thủy tinh (cốc, ống, đĩa Petri) | Xanh xám rất nhạt | thân `rgba(220,235,240,0.4)`, viền `#94A3B8` |

> Sắc phụ rất nhỏ ngoài bảng (gỗ bàn, nhãn giấy, da tay...) không bắt buộc chuẩn hoá — miễn hài hoà, không phá thẩm mỹ.

### 4B. Nguyên tắc màu khoa học BẤT BIẾN (không được "chế" khác đi)
- **Iốt là thuốc thử PHÁT HIỆN tinh bột có sẵn — KHÔNG tạo ra tinh bột.** Không mô tả/ám chỉ iốt "sinh" tinh bột.
- **Kết quả tinh bột–iốt chỉ có 2 màu khoá:** dương = **xanh tím đậm**, âm = **vàng nâu nhạt**. Không bao giờ trắng tinh, không tự chế màu khác, **không tô cả lá** — chỉ tô đúng vùng tương ứng (vùng chiếu sáng vs vùng bị che).
- Diệp lục **tan trong cồn nóng** (cồn chuyển xanh, lá nhạt màu) — đây là **tẩy màu**, không phải "phá huỷ lá".
- Đun **cách thủy (gián tiếp)**: cồn + lá đặt trong cốc nhỏ, cốc nhỏ đặt trong **nồi/cốc nước nóng** — KHÔNG hơ cồn trực tiếp trên lửa (xem MỤC 14 an toàn).
- Bọt khí quang hợp là **O₂** (thoát ra khi có ánh sáng); vẩn đục nước vôi là **CO₂** (hô hấp). Không nhầm hai khí.
- **Kết quả đọc-bằng-màu PHẢI kèm dấu hiệu thứ hai (khả năng đọc cho người mù màu — đặc thù Sinh).** Gần như mọi kết quả Sinh đọc bằng màu (iốt xanh tím/vàng nâu, BTB vàng/xanh, Benedict xanh/đỏ gạch, co nguyên sinh...), mà xanh–đỏ và xanh–vàng đúng là các cặp người mù màu khó phân biệt nhất. Do đó **màu không bao giờ là kênh thông tin DUY NHẤT**: mỗi vùng/mẫu cho kết quả phải kèm ít nhất một trong — **nhãn chữ rõ** ("Dương tính (+)" / "Âm tính (−)"), **ký hiệu/hoa văn** (nét gạch chéo vs chấm), hoặc **vị trí cố định có nhãn** (vùng chiếu sáng vs vùng che luôn có viền + chú thích). Bảng quan sát (MỤC 9) điền cả tên màu bằng CHỮ, không chỉ tô ô màu. Điều này KHÔNG thay màu khoa học ở 4A — chỉ bổ sung kênh đọc thứ hai.

---

## 5. LAYOUT TỔNG THỂ — Single-Column / Bố cục 1 cột trung tâm (quan trọng)

- `body`: `display:flex; flex-direction:column; align-items:center; gap:16px; padding:20px clamp(14px,2.5vw,32px)`.
  **KHÔNG** đặt `min-height:100vh`/`height:100vh` trên body (gây khoảng trắng khi nhúng LMS — xem MỤC 15).
- Độ rộng tối đa khối chính (`header`, `.goal-bar`, `.main`, `.moduleNav`, `.link-section`): **1200px** — căn giữa màn hình, lấp đầy không gian PC/Laptop hiện đại, không dùng 2 sidebar cố định hai bên.
- Thứ tự từ trên xuống: ① Header / Top bar → ② Thanh mục tiêu (`.goal-bar`) → ③ Thanh điều hướng Module (`.moduleNav`) → ④ Thanh hướng dẫn (`.guide-bar`) & Nút điều khiển (`.controls-row`) → ⑤ Khối Canvas / Workspace chính (`.canvas-card` / `.workspace`) → ⑥ Khối thông tin hỗ trợ & Bằng chứng học tập (`.support-panel`) → ⑦ Link section.

```css
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
}
.main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}
.moduleNav, .progress-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 22px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--cream);
  padding: 12px 0;
  box-shadow: 0 4px 12px rgba(26,26,26,0.06);
}
.moduleMini {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: .2s;
  box-shadow: var(--shadow-sm);
}
.moduleMini:hover {
  border-color: var(--green);
  background: var(--mint);
  transform: translateY(-1px);
}
.moduleMini.active {
  background: var(--deep);
  border-color: var(--deep);
  color: #fff;
  box-shadow: var(--shadow-md);
}
.canvas-card { width:100%; display:flex; flex-direction:column; gap:14px; }
.canvas-glow-wrap {
  position:relative; width:100%; padding:2px; border-radius:10px; overflow:hidden;
  background:var(--jade); aspect-ratio:2/1;
}
.canvas-glow-wrap::before {
  content:''; position:absolute; inset:-100%;
  background: conic-gradient(from 0deg, transparent 0deg, transparent 170deg, var(--jade) 220deg, var(--jade) 340deg, transparent 360deg);
  animation: canvasBorderSpin 5.5s linear infinite; z-index:0;
}
@keyframes canvasBorderSpin { to { transform: rotate(360deg); } }
#labCanvas { position:relative; z-index:1; width:100%; height:100%; display:block; border-radius:8px; background:var(--cream); touch-action:none; }
```
HTML — canvas PHẢI bọc trong `.canvas-glow-wrap`:
```html
<div class="card canvas-card">
  <div class="canvas-glow-wrap">
    <canvas id="labCanvas" width="1200" height="600" role="img" aria-label="Mô phỏng thí nghiệm ..."></canvas>
  </div>
</div>
```

**Cấu trúc Đơn Cột (Single Column Flow) & Bố cục từng phần (Flow Boxes / Section Cards):**
- **Quy tắc thiết kế từng phần (giống `GIAODIEN_SH10 V10.html`):** Mọi nội dung bài học phải được phân chia thành các phần/thẻ bài học rõ ràng (`.flowBox` hoặc `.card`) với icon Tabler, tiêu đề và đường viền nhận diện màu sắc riêng:
  - `.flowBox.video`: Khối Video kiến thức (icon `ti-video`, viền `var(--info)`)
  - `.flowBox.theory`: Khối Lý thuyết cốt lõi (icon `ti-book-2`, viền `var(--jade)`)
  - `.flowBox.note`: Khối Lưu ý quan trọng (icon `ti-bulb`, viền `var(--accent)`)
  - `.flowBox.interactive`: Khối Mô hình / Thí nghiệm (icon `ti-flask-2`, viền `var(--jade-deep)`)
  - `.flowBox.quiz`: Khối Luyện tập & Củng cố (icon `ti-edit-3`, viền `var(--info)`)
- **Bố cục Chia 2 Cột Dưới Stage Nav (Split Workspace Grid — BẮT BUỘC KHI CÓ CANVAS & CÂU HỎI SONG SONG):**
  - **Header, Mục tiêu, Stage Tabs & Footer:** Luôn giữ full-width 100% trong khung 1200px.
  - **Vùng Làm Việc Chính (Dưới Stage Tabs):** Chia đôi 2 cột song song (`display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;`):
    - **Cột Bên Trái — CANVAS KHÓA ĐI THEO KHI CUỘN (`position: sticky; top: 64px;` — BẮT BUỘC):** Cột chứa Canvas (`.canvas-card`) phải dùng `position: sticky; top: 64px;` để luôn trượt đi theo người học khi họ cuộn xuống làm bài tập ở cột bên phải. Nhờ đó, người học vừa thao tác trả lời vừa quan sát trực tiếp mô hình/hình ảnh minh họa không bị che hay phải cuộn ngược lên.
    - **Cột Bên Phải (`.workspace-card` Minimal & Tối Giản):** Loại bỏ hoàn toàn thanh hướng dẫn rườm rà (`.guide-bar`), thanh phản hồi (`#feedbackPanel`) và các tiền tố "Bước 1, Bước 2" rườm rà. Cột bên phải chỉ tập trung chứa tiêu đề bài tập `<h2>`, ghi chú nhiệm vụ gọn gàng `.workspace-note` và khung tương tác `#workspace`.
- **Quy tắc Ghép đôi Dạng Nối 2 Cột Dọc kèm Đường Tia SVG (`2-Column Vertical Match with SVG Lines` — BẮT BUỘC):**
  - **Bố cục 2 Cột Dọc:** Xếp 2 danh sách ghép đôi song song theo chiều dọc (`.matching-container` với 2 cột `left` và `right`). Cột bên trái là danh sách thẻ nguồn, cột bên phải là danh sách thẻ đích.
  - **Điểm nối & Đường nối SVG (`<svg class="matching-svg">`):** Mỗi thẻ có chấm tròn nối (`.dot`). Khi người học chọn 1 thẻ vế trái và 1 thẻ vế phải ghép đúng, JS sẽ vẽ 1 đường tia nối màu xanh ngọc (`stroke="var(--jade)" stroke-width="3"`) nối trực tiếp giữa 2 chấm tròn.
  - **Trải nghiệm trực quan:** Người học nhìn rõ nét đường nối vật lý giữa 2 thẻ, tăng cảm giác tương tác học tập sinh động.
```js
// Hàm đổi hình minh họa/mô hình Canvas đơn giản (Canvas đã sticky ở cột trái)
function setAsset(key) {
  if (activeAsset !== key) {
    activeAsset = key;
    canvasDirty = true;
  }
}
- **Hiệu ứng Chúc mừng Hoàn thành Bài học (`Confetti Burst & Congrats Modal` — BẮT BUỘC):**
  - Khi học sinh hoàn thành bài học/module (nhấn nút "Hoàn thành" ở Màn cuối), hệ thống **bắt buộc kích hoạt hiệu ứng pháo hoa giấy Confetti rơi rực rỡ (`launchConfetti()`)** bằng Canvas.
  - Đồng thời hiển thị **Cửa sổ Modal Chúc mừng sang trọng (`.congrats-overlay`)** với biểu tượng cúp chiến thắng (`ti-trophy`), thống kê kết quả 100% đạt và lời khen ngợi kích thích động lực học tập.

```js
// Hàm kích hoạt hiệu ứng pháo hoa giấy chúc mừng
function launchConfetti() { ... }
```

**Responsive Mobile (≤900px) — Thanh Stage Nav / Module Nav Chỉ 1 Hàng Nút Cuộn Ngang (BẮT BUỘC):**
Trên giao diện di động, thanh điều hướng Module / Stage (`.moduleNav` / `.progress-nav`) **BẮT BUỘC giữ trên 1 DÒNG DUY NHẤT (`flex-wrap: nowrap; overflow-x: auto;`)**, tuyệt đối không tự xếp chồng thành 2-4 dòng dọc chiếm diện tích. Học sinh cuộn/vuốt ngang mượt mà để chuyển giữa các Màn:

```css
@media (max-width:900px){
  .main { padding: 16px 12px 36px; }
  .moduleNav, .progress-nav {
    display: flex!important;
    flex-wrap: nowrap!important;
    overflow-x: auto!important;
    overflow-y: hidden!important;
    -webkit-overflow-scrolling: touch;
    gap: 8px!important;
    padding: 6px 4px!important;
    scrollbar-width: none;
  }
  .moduleNav::-webkit-scrollbar, .progress-nav::-webkit-scrollbar {
    display: none;
  }
  .moduleMini, .stage-tab {
    flex: 0 0 auto!important;
    white-space: nowrap!important;
    padding: 10px 14px!important;
    font-size: 0.88rem!important;
  }
}
```

---

## 6. HEADER (GỘP MỤC TIÊU) + THANH ĐIỀU HƯỚNG MODULE & CHỐNG ĐÈ CANVAS

**Header (Banner phong cách Flat/Editorial — Gộp Mục tiêu):**
- Không dùng ảnh nền URL ngoài; sử dụng nền gradient CSS màu thương hiệu (`var(--jade-dark)` đến `var(--jade-deep)`).
- **Loại bỏ dòng mô tả phụ `<p>`** phía dưới tên bài học.
- **Gộp trực tiếp khối Mục tiêu (`.header-goal`) vào bên trong Header**:
```html
<header>
  <div class="header-badge"><i class="ti ti-dna"></i> SINH HỌC 10 · BÀI 1 · MODULE 02</div>
  <h1>Vai trò và ứng dụng của Sinh học</h1>
  <div class="header-goal">
    <span class="goal-label"><i class="ti ti-target"></i> MỤC TIÊU</span>
    <span class="goal-divider"></span>
    <span class="goal-text" id="goalText">Ghép hiểu biết Sinh học với tình huống phù hợp trong đời sống.</span>
  </div>
</header>
```
```css
header {
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  padding: 1.6rem 2rem;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, var(--jade-dark), var(--jade-deep));
  box-shadow: var(--shadow);
  color: #fff;
}
.header-goal {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 8px;
  padding: 8px 14px;
}
.header-goal .goal-label { color: #fff; font-weight: 700; font-size: 0.82rem; }
.header-goal .goal-divider { width: 1px; height: 14px; background: rgba(255,255,255,0.4); }
.header-goal .goal-text { font-size: 0.92rem; font-weight: 500; color: rgba(255,255,255,0.95); }
```

**Thanh điều hướng Module / Màn (`.moduleNav` / `.progress-nav`) & Quy tắc Khóa Canvas không bị đè che (`position: sticky; top: 64px;`):**
- **Thanh Nav cố định đỉnh (`top: 0`, `z-index: 100`, tổng chiều cao vừa tròn `64px`):**
  Đặt ngay trên vùng học chính. Bắt buộc cài đặt `padding: 10px 0;` và các nút tab màn học (`.stage-tab`) trên 1 dòng nằm ngang (`min-height: 44px`) để tổng chiều cao thanh Nav chiếm vừa đúng **64px** trên đỉnh viewport.
  ```css
  .progress-nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--cream);
    padding: 10px 0;
    box-shadow: 0 4px 12px rgba(26,26,26,0.06);
  }
  .stage-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 14px;
    border-radius: var(--radius);
    border: 1.5px solid var(--paper-line-2);
    background: var(--cream-2);
    color: var(--ink-2);
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    transition: .18s;
  }
  ```
- **Cột Trái Canvas (`.canvas-card`) Dính Đúng `top: 64px` (`z-index: 10`):**
  Thẻ chứa Canvas (`.canvas-card`) trực tiếp làm cột bên trái của Lưới 2 cột (`.split-workspace`). Bắt buộc cài đặt:
  ```css
  .canvas-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    top: 64px; /* Khóa dính ngay dưới mép thanh Nav 64px, không bao giờ bị đè che */
    z-index: 10;
  }
  ```
- **Đặt Ô Phản Hồi (`#globalFeedback`) Ở Cột Phải (`.workspace-card`):**
  Không đặt ô phản hồi hoặc nội dung dài dưới cột Canvas bên trái. Đưa `#globalFeedback` sang cuối cột bên phải trong `.workspace-card`, giữ cho cột Canvas bên trái luôn gọn gàng và lọt hoàn toàn trong màn hình.
- **Khai Báo Lớp CSS `.hidden` Bắt Buộc:**
  Luôn có quy tắc `.hidden { display: none !important; }` ở phần Reset CSS để tránh lỗi tự động hiển thị Modal chúc mừng (`#congratsModal`) hoặc các phần ẩn khi vừa tải trang.
```html
<nav class="moduleNav">
  <button class="moduleMini active" onclick="openModule('m1',event)"><i class="ti ti-virus"></i> Module 1. Virus là gì?</button>
  <button class="moduleMini" onclick="openModule('m2',event)"><i class="ti ti-dna"></i> Module 2. Cấu tạo virus</button>
  <button class="moduleMini" onclick="openModule('m3',event)"><i class="ti ti-refresh"></i> Module 3. Quá trình nhân lên</button>
  <button class="moduleMini" onclick="openModule('m4',event)"><i class="ti ti-shield-check"></i> Module 4. Phòng bệnh & Ứng dụng</button>
</nav>
```

---

## 7. KHỐI CÁCH LÀM & DỤNG CỤ VẬT LIỆU

Card chung: nền `var(--cream-2)`, viền 1px `var(--paper-line)`, radius 12px, padding 16px 18px. Tiêu đề: icon Tabler + chữ weight 700 ~1.05rem, màu `var(--ink)`.

**Card 1 — "Dụng cụ & vật liệu"** (icon `ti-flask-2`): danh sách dạng CHIP (icon + tên), nền `var(--cream)`, viền 1px `var(--paper-line)`, radius 8px, weight 600, cỡ 0.9rem, icon `var(--jade)`. Xếp flex-wrap gap 8px. Chip của dụng cụ đang dùng ở bước hiện tại: viền `var(--jade)` + nền `var(--jade-pale)`. Chiều cao tự nhiên (không flex-grow). Ví dụ vật liệu Sinh: *chậu cây khoai (đã che sáng)*, *lá thí nghiệm*, *giấy đen + kẹp*, *cốc thủy tinh*, *đèn cồn*, *cồn 90°*, *dung dịch iốt*, *đĩa Petri*, *kẹp gắp*, *nước sạch*.

**Card 2 — "Cách làm"** (icon `ti-list-numbers`):
- **Danh sách bước dạng GRID 2 CỘT** (`display:grid; grid-template-columns:1fr 1fr; gap:8px 10px`) — tiết kiệm chiều cao. Mỗi ô: card nhỏ padding 8px 10px, radius 8px, nền `var(--cream)`, viền `var(--paper-line)`; bên trong số thứ tự trong vòng tròn (20–22px, nền `var(--jade-pale)`, chữ `var(--jade-text)` weight 700) + mô tả ngắn (0.8rem, line-height 1.4).
- Đồng bộ với `currentStep` (thí nghiệm kiểu B — stepper): bước ĐANG làm → nền ô `var(--jade-pale)`, viền `var(--jade)`, số tròn nền `var(--jade)` chữ `var(--cream)`; bước ĐÃ xong → số tròn thay bằng icon `ti-check` màu `var(--jade)`; bước CHƯA đến → chữ `var(--ink-2)`.
- Nếu có lưu ý an toàn → khung cảnh báo dưới cùng: icon `ti-alert-triangle`, nền `var(--wrong-bg)`, `border-left:4px solid var(--accent)`, chữ `var(--ink-2)` 0.85rem, `flex-shrink:0`.

---

## 8. KHỐI TƯƠNG TÁC CHÍNH — Thanh hướng dẫn + Hàng nút tương tác

### 8A. Phong cách Thiết Kế Tối Giản (Minimal & Tinh Gọn — BẮT BUỘC)
- **Loại bỏ rườm rà (`.guide-bar` & `#feedbackPanel`):** Không sử dụng các thanh banner chỉ dẫn rườm rà hay ô phản hồi cố định gây chiếm diện tích thị giác của học sinh.
- **Loại bỏ tiền tố "Bước 1, Bước 2":** Tránh làm rối mắt học sinh. Tập trung trực tiếp vào:
  - Tiêu đề câu hỏi / bài tập `<h2>`
  - Ghi chú nhiệm vụ gọn gàng `<p class="workspace-note">`
  - Khung nội dung tương tác chính `#workspace`
- **Thông báo phản hồi (Feedback) gọn gàng:** Khi học sinh thao tác, sử dụng các hộp thông báo kết luận gọn gàng (`.summary` hoặc `.summary.module-final`) đặt ngay bên dưới bài tập.

### 8B. Hàng nút tương tác (`.controls-row`) — ĐẶT NẰM TRÊN FOOTER (BẮT BUỘC)
`display:flex; align-items:center; gap:10px`. **Bắt buộc đặt nằm ở cuối vùng làm việc chính, ngay TRÊN khối Footer (`.link-section`)**. Khi học sinh hoàn thành thao tác/stage, nút "Tiếp tục" sẽ sáng lên để bấm chuyển màn.

**Cấu trúc nút trong `.controls-row`:**
- **Nút "Quay lại"** (`#btnPrev` — icon `ti-arrow-left`): Thay thế hoàn toàn nút nghe đọc. Cho phép quay lại stage/màn trước đó.
- **Nút "Làm lại màn"** (`#btnReset` — icon `ti-refresh`): Đặt lại bài tập của màn hiện tại.
- `<span class="spacer"></span>` (Đẩy nút tiếp theo sang góc phải).
- **Nút "Tiếp tục"** (`#btnNext` — icon `ti-arrow-right`): Mặc định `disabled`, chỉ sáng lên khi học sinh đã hoàn thành stage/màn hiện tại.

```html
<div class="controls-row">
  <button class="btn" id="btnPrev" type="button"><i class="ti ti-arrow-left"></i> Quay lại</button>
  <button class="btn" id="btnReset" type="button"><i class="ti ti-refresh"></i> Làm lại màn</button>
  <span class="spacer"></span>
  <button class="btn btn-primary" id="btnNext" disabled type="button"><span>Tiếp tục</span><i class="ti ti-arrow-right"></i></button>
</div>
```

---

## 9. KHỐI BẢNG QUAN SÁT & KẾT LUẬN CÂU HỎI

Card chung được đặt xếp tầng ở vùng hỗ trợ bên dưới hoặc trong các tab tương tác.

**Card 1 — "Bảng quan sát"** (icon `ti-table`): `<table>` gọn — header nền `var(--jade-pale)`, chữ `var(--jade-text)` uppercase 12px weight 600; ô border-bottom 1px `var(--paper-line)`, nội dung 0.9rem `var(--ink)`. Cột/hàng do kịch bản quy định (điều kiện thí nghiệm ↔ hiện tượng quan sát). Giá trị chưa quan sát: "?" màu `var(--ink-2)`; khi bước hoàn thành → JS điền giá trị thật kèm fade + nền ô nháy `var(--jade-pale)` ~1s. Nhiều cột → bọc `overflow-x:auto`. Chiều cao tự nhiên (không flex-grow).

**Card 2 — "Kết luận & câu hỏi"** (icon `ti-checklist`):
- Mỗi bước hoàn thành → **thêm 1 khối kết luận nhỏ + câu trắc nghiệm** (nếu có) vào cuối; khối mới tự `scrollIntoView({behavior:'smooth', block:'nearest'})`.
- Khối con — chờ trả lời: nền `var(--sage-pale)`, viền `var(--sage)`, `border-left:4px solid var(--accent)`. Sau khi đúng: nền `var(--correct-bg)`, `border-left:4px solid var(--correct)`.
- **Quiz — căn hàng chống lệch (BẮT BUỘC):** mỗi option là `<button>` full-width `display:flex; align-items:flex-start; text-align:left; gap:10px; padding:10px 14px`; ký hiệu A/B/C/D trong `<span>` riêng `flex:0 0 24px`; nội dung `<span>` `flex:1`; icon feedback đặt ở CUỐI (không chèn đầu text); `<ul>` reset `list-style:none; margin:0; padding:0`.
- Chọn đúng → viền/nền `var(--correct)`/`var(--correct-bg)` + icon check. Chọn sai → `var(--wrong)`/`var(--wrong-bg)` **nhẹ nhàng** + chỉ dẫn tới chỗ cần xem lại, **không "phạt", không đỏ gắt, không reset tiến trình đúng trước đó** (xem MỤC 13). Feedback tức thì + transition.

---

## 10. LINK SECTION (khối cuối trang — bắt buộc)
```html
<div class="link-section">
  <div class="link-fish"><img src="[URL_MASCOT_AIDUCATION]" alt="Mascot Aiducation"></div>
  <div class="link-info">
    <h3>Sinh Học Aiducation – Học liệu tương tác</h3>
    <p>Module tiếp theo: [tên module kế].</p>
    <a class="link-url" href="https://www.aiducation.edu.vn" target="_blank" rel="noopener"><i class="ti ti-external-link"></i> Truy cập aiducation.edu.vn</a>
  </div>
</div>
```
`.link-section`: flex ngang, gap 18px, max-width 1200px, nền `var(--cream-2)`, viền `var(--paper-line)`, radius 12px, padding 18px 22px. `.link-fish img`: tròn ~72px, `object-fit:cover`, viền 2px `var(--sage)`. `.link-url`: `var(--jade-text)` weight 600, hover `var(--jade-deep)` + gạch chân. Dưới 480px: `flex-direction:column`, căn giữa, ảnh ~56px.

---

## 11. YÊU CẦU CANVAS — Kích thước, lưới, loop, particle

Gradient/glow/shadow **bị cấm trong UI (CSS)** nhưng **được phép trong canvas** khi mô phỏng vật thật (ánh thủy tinh, ánh kim loại, ngọn lửa, độ sâu chất lỏng) — tiết chế, phục vụ chân thực.

### 11A. Kích thước & utility (bắt buộc)
```js
const canvas = document.getElementById('labCanvas');
const ctx = canvas.getContext('2d');
const W = 760, H = [CHIỀU_CAO]; // LOGIC cố định, H 480–680 tuỳ nội dung. MỌI toạ độ vẽ theo hệ W×H này.
let canvasW = W, canvasH = H;   // PIXEL BUFFER THẬT — resizeCanvas() cập nhật theo CSS size × DPR

function resizeCanvas(){
  const r = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const nextW = Math.max(1, Math.round(r.width * dpr));
  const nextH = Math.max(1, Math.round(r.height * dpr));
  if (canvas.width !== nextW || canvas.height !== nextH){
    canvas.width = nextW; canvas.height = nextH;
    canvasW = canvas.width; canvasH = canvas.height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
  }
}
function lerp(a,b,t){ return a+(b-a)*t; }
function clamp(v,lo,hi){ return Math.max(lo, Math.min(hi, v)); }
function easeOut(t){ return 1-(1-t)*(1-t); }
function easeInOut(t){ return t<.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }
function lerpColor(c1,c2,t){ t=clamp(t,0,1); return `rgb(${Math.round(c1.r+(c2.r-c1.r)*t)},${Math.round(c1.g+(c2.g-c1.g)*t)},${Math.round(c1.b+(c2.b-c1.b)*t)})`; }
```

> **Nét trên màn Retina/2x (bắt buộc):** buffer canvas phải bằng kích thước CSS nhân với `devicePixelRatio`, nhưng giới hạn tối đa `2` để cân bằng độ nét với RAM/GPU. Bật `imageSmoothingEnabled` và `imageSmoothingQuality='high'` sau khi đổi kích thước buffer. Giữ CSS `width/height:100%`; `fitScale = canvasW/W` tự bù nên nội dung vẫn đúng tỉ lệ. **Không gọi thêm `ctx.scale(dpr,dpr)`**, vì engine đã scale qua `fitScale`; gọi thêm sẽ làm nội dung phóng to hai lần. Nếu sim có **bắt click/tap trên canvas**, bắt buộc dùng đúng công thức MỤC 11E, không chia hoặc nhân DPR thêm lần nữa.

**Biến trạng thái toàn cục cần khai báo** (đầu script, trước `loop()` — `loop()` ở MỤC 11C có tham chiếu tới chúng):
```js
let time = 0, flashTimer = 0;          // đồng hồ animation + hiệu ứng flash toàn canvas
let tweens = [], rings = [], particles = [];   // KHAI BÁO 1 LẦN DUY NHẤT — không `let particles` lại ở MỤC 11D
const state = { stage: 1, subStep: 0, isAnimating: false }; // stage = giai đoạn thí nghiệm hiện tại
// Biến RIÊNG theo bài — khai báo thêm 1 lần duy nhất tuỳ kịch bản (tránh khai báo trùng `let`):
// vd flameOn (MỤC 12B), currentStep, currentGuideText, leafState/coveredRegion/iodineProgress, cells/cellTurgor.
```

### 11A-bis. Tween + ripple ring (bắt buộc — `loop()` có gọi `updateTweens`/`updateRings`)
```js
// Tween 1 giá trị a→b trong dur (ms), gọi onUpdate mỗi frame, onDone khi xong. Đây là "động cơ" của mọi đổi màu/di chuyển.
function tween(from, to, dur, onUpdate, onDone, ease = easeInOut){
  tweens.push({ from, to, dur, t: 0, onUpdate, onDone, ease });
}
function updateTweens(dt){
  for (let i = tweens.length-1; i >= 0; i--){
    const tw = tweens[i]; tw.t = Math.min(1, tw.t + dt/tw.dur);
    tw.onUpdate(tw.from + (tw.to - tw.from) * tw.ease(tw.t));
    if (tw.t >= 1){ tw.onDone && tw.onDone(); tweens.splice(i, 1); }
  }
}
// Ripple ring — gọi spawnRing(x,y) khi giọt/vật chạm bề mặt (impact splash, MỤC 13 #6)
function spawnRing(x, y, color){ rings.push({ x, y, r: 2, color: color || 'rgba(60,165,122,0.6)', a: 0.6 }); }
function updateRings(){
  for (let i = rings.length-1; i >= 0; i--){
    const g = rings[i]; g.r += 0.6; g.a -= 0.025;
    if (g.a <= 0){ rings.splice(i, 1); continue; }
    ctx.save(); ctx.globalAlpha = g.a; ctx.strokeStyle = g.color; ctx.lineWidth = Math.max(0.5, 2 - g.r*0.05);
    ctx.beginPath(); ctx.arc(g.x, g.y, g.r, 0, Math.PI*2); ctx.stroke(); ctx.restore();
  }
}
// Splash — 3–5 micro-particle bắn toả tại điểm giọt/dòng chạm bề mặt (gọi KÈM spawnRing; dùng spawnParticle ở MỤC 11D)
function spawnSplash(x, y, color){
  const n = 3 + (Math.random()*3|0);
  for (let i=0;i<n;i++) spawnParticle({ x, y, vx:(Math.random()-0.5)*3, vy:-(Math.random()*2+1), size:1.5, color: color||'rgba(200,225,245,0.9)' });
}
```

### 11B. Lưới nền (vẽ đầu mỗi frame — theo kích thước THẬT)
```js
function drawGrid(){
  ctx.save(); ctx.strokeStyle='rgba(26,26,26,0.05)'; ctx.lineWidth=1;
  for(let x=0;x<=canvasW;x+=30){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvasH); ctx.stroke(); }
  for(let y=0;y<=canvasH;y+=30){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvasW,y); ctx.stroke(); }
  ctx.restore();
}
```

### 11C. `loop()` — canvas lấp đầy KHÔNG méo nội dung
Nội dung vẽ theo hệ logic `W×H`; chỉ `loop()` bọc trong translate/scale để quy đổi sang kích thước thật:
```js
function loop(){
  resizeCanvas();
  time += 0.045;
  updateTweens(16.7);
  ctx.clearRect(0,0,canvasW,canvasH);
  drawGrid(); // NGOÀI khối scale — luôn phủ kín

  const fitScale = Math.min(canvasW/W, canvasH/H);
  const offsetX = (canvasW - W*fitScale)/2, offsetY = (canvasH - H*fitScale)/2;

  if (flashTimer>0){ ctx.save(); ctx.fillStyle=`rgba(60,165,122,${flashTimer/45})`; ctx.fillRect(0,0,canvasW,canvasH); ctx.restore(); flashTimer--; }

  ctx.save();
  ctx.translate(offsetX, offsetY); ctx.scale(fitScale, fitScale);
  switch(state.stage){ case 1: drawStage1(); break; /* ... */ }
  updateRings();                      // vừa cập nhật vừa vẽ ripple ring (MỤC 11A-bis)
  updateParticles(); drawParticles(); // cập nhật rồi vẽ hạt (MỤC 11D)
  ctx.restore(); // BẮT BUỘC

  requestAnimationFrame(loop);
}
```
`drawGrid()` theo kích thước thật → phủ kín 100%; nội dung theo 1 tỉ lệ đều `fitScale` → không méo, chỉ to/nhỏ + canh giữa.

### 11D. Hệ thống particle (bắt buộc)
`particles[]` **đã khai báo ở khối biến toàn cục (MỤC 11A) — KHÔNG `let particles` lại ở đây** (khai báo `let` hai lần trong cùng scope = `SyntaxError`, cả file JS ngừng chạy). Mỗi hạt: `{ x, y, vx, vy, life, size, color, targetY?, wobble?, alpha? }`.
```js
function spawnParticle(p){ particles.push(Object.assign({ life:1, size:2, wobble:0 }, p)); }
function updateParticles(){
  for (let i=particles.length-1; i>=0; i--){
    const p = particles[i];
    p.x += p.vx + (p.wobble ? Math.sin(p.y*0.15 + time)*p.wobble : 0); // wobble ngang cho hạt lắng/kết tủa
    p.y += p.vy;
    if (p.targetY!=null && ((p.vy>0 && p.y>=p.targetY) || (p.vy<0 && p.y<=p.targetY))){ p.y=p.targetY; p.vy=0; } // đọng lại
    else p.life -= 0.012;                                             // hạt tự do mờ dần rồi biến mất
    if (p.life<=0) particles.splice(i,1);
  }
}
function drawParticles(){
  particles.forEach(p=>{
    ctx.save(); ctx.globalAlpha = clamp(p.alpha!=null ? p.alpha : p.life, 0, 1);
    ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill(); ctx.restore();
  });
}
```
Kiểu particle đặc thù Sinh:
- **Bọt khí O₂ (quang hợp)**: spawn tại mép lá thủy sinh/đáy bình, `vy` âm (bay lên), `size` dao động nhẹ, pop khi chạm mặt nước.
- **Bọt nước sôi (đun cách thủy)**: spawn đáy cốc nước ngoài, `vy` âm, size tăng dần theo độ cao.
- **Hơi nước/hơi cồn**: spawn trên mặt chất lỏng, `vy` âm, fade + spread ngang.
- **Hạt tinh bột lắng / kết tủa Benedict**: spawn trên, `vy` dương, dừng ở `targetY`, `wobble` ngang nhẹ (mỗi hạt `targetY` lệch ±5–10px → lớp cặn tự nhiên).

### 11E. Bắt click/tap TRÊN canvas — quy đổi toạ độ (BẮT BUỘC nếu sim có hotspot trên canvas)

Nhiều sim Sinh cho học sinh **bấm thẳng lên hình trong canvas** (chọn vùng giữa lá chét, bấm khay dụng cụ, chọn thẻ hình, bấm vùng lá trên ảnh kết quả). Toạ độ chuột/chạm nằm ở hệ **pixel màn hình**, còn mọi hình lại vẽ ở hệ **logic `W×H`** rồi bị `loop()` (MỤC 11C) dịch–co bằng `translate(offsetX,offsetY)` + `scale(fitScale,fitScale)`. Muốn biết học sinh bấm trúng vật nào, phải **nghịch đảo đúng phép biến đổi đó** — tính lại `fitScale/offsetX/offsetY` bằng CÙNG công thức trong `loop()`, không hardcode:

```js
// Gắn 1 lần; trả về toạ độ theo hệ LOGIC W×H để so trực tiếp với toạ độ vẽ trong drawStageX()
function canvasEventToLogic(e){
  const r = canvas.getBoundingClientRect();
  const p = e.touches ? e.touches[0] : e;                 // hỗ trợ cả chuột lẫn cảm ứng
  // (clientX-r.left) là px theo CSS; nhân canvas.width/r.width để ra px BUFFER thật
  // → chạy đúng cho cả bản thường (buffer=CSS px) lẫn bản DPR (buffer=CSS px×dpr), không cần biết có dpr hay không
  const bx = (p.clientX - r.left) * (canvas.width  / r.width);
  const by = (p.clientY - r.top)  * (canvas.height / r.height);
  // Nghịch đảo ĐÚNG phép biến đổi của loop() — 3 dòng này PHẢI khớp từng chữ với loop()
  const fitScale = Math.min(canvasW / W, canvasH / H);
  const offsetX  = (canvasW - W * fitScale) / 2;
  const offsetY  = (canvasH - H * fitScale) / 2;
  return { x: (bx - offsetX) / fitScale, y: (by - offsetY) / fitScale };
}
canvas.addEventListener('click', e => {
  if (state.isAnimating) return;                          // MỤC 13: đang animate thì khoá tương tác
  const { x, y } = canvasEventToLogic(e);
  // so (x,y) với vùng vẽ ở hệ logic, vd hotspot tròn tâm (hx,hy) bán kính hr:
  // if ((x-hx)**2 + (y-hy)**2 <= hr*hr) { ... }
});
```

- **Vùng bấm (hotspot) tối thiểu ~44px** ở hệ hiển thị thật để chạm được trên mobile → ở hệ logic đặt bán kính/cạnh ≥ `44/fitScale` (canvas nhỏ thì `fitScale`<1 nên hotspot logic phải to hơn 44).
- Nếu dùng bản DPR sắc nét ở 11A, công thức trên **vẫn đúng nguyên** vì `canvas.width/r.width` đã gộp luôn hệ số dpr — KHÔNG chia thêm `dpr` lần nữa (chia 2 lần = lệch một nửa).
- Vẽ **viền/nhấp nháy hotspot** (nét đứt, glow nhẹ) khi vùng đang chờ bấm để học sinh biết bấm ở đâu; ẩn đi sau khi đã bấm đúng.

---

## 12. CODE VẼ DỤNG CỤ & HIỆU ỨNG SINH HỌC

**Nguyên tắc vẽ chung** (áp cho mọi dụng cụ tự vẽ thêm):
- *Thủy tinh:* thân fill rgba nhạt (opacity .3–.5), stroke `#94A3B8` lineWidth 2–2.5; luôn có **vệt sáng** trắng dọc trái (`rgba(255,255,255,.6)` lineWidth 3); đáy bo tròn bằng `quadraticCurveTo`; miệng có gờ đậm hơn.
- *Chất lỏng trong bình:* `clip` theo hình bình; mặt lõm bằng `quadraticCurveTo` (meniscus, control point thấp hơn 2–4px ở tâm — **không kẻ ngang phẳng**); gradient dọc nhạt trên → đậm đáy; shimmer trắng mỏng tại mặt (`rgba(255,255,255,.2)`, y dao động ±1px theo `Math.sin(time*2)`).
- *Kim loại (giá đỡ, kẹp, kim):* `createLinearGradient` sáng→tối→sáng `#4A5568→#2D3748→#1A202C`; highlight mỏng trái.

### 12A. Cốc thủy tinh (beaker) + chất lỏng
```js
function drawBeaker(cx, topY, w, h, liquidColor, fillRatio){ // fillRatio 0..1
  const halfW=w/2, botY=topY+h;
  ctx.save();
  // thân
  ctx.beginPath();
  ctx.moveTo(cx-halfW, topY); ctx.lineTo(cx-halfW, botY-10);
  ctx.quadraticCurveTo(cx-halfW, botY, cx-halfW+12, botY);
  ctx.lineTo(cx+halfW-12, botY);
  ctx.quadraticCurveTo(cx+halfW, botY, cx+halfW, botY-10);
  ctx.lineTo(cx+halfW, topY);
  ctx.fillStyle='rgba(220,235,240,0.4)'; ctx.fill();
  // chất lỏng (clip trong thân)
  const liqTop = botY-10 - (h-14)*clamp(fillRatio,0,1);
  ctx.save(); ctx.clip();
  ctx.fillStyle=liquidColor;
  ctx.fillRect(cx-halfW, liqTop, w, botY-liqTop);
  // mặt lõm + shimmer
  ctx.beginPath(); ctx.moveTo(cx-halfW, liqTop);
  ctx.quadraticCurveTo(cx, liqTop+3, cx+halfW, liqTop);
  ctx.strokeStyle='rgba(255,255,255,0.35)'; ctx.lineWidth=2; ctx.stroke();
  ctx.restore();
  // viền + vệt sáng + miệng
  ctx.strokeStyle='#94A3B8'; ctx.lineWidth=2.2; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-halfW+5, topY+8); ctx.lineTo(cx-halfW+5, botY-16);
  ctx.strokeStyle='rgba(255,255,255,0.6)'; ctx.lineWidth=3; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-halfW-3, topY); ctx.lineTo(cx+halfW+3, topY);
  ctx.strokeStyle='#7C8A99'; ctx.lineWidth=3; ctx.lineCap='round'; ctx.stroke();
  ctx.restore();
}
```

### 12B. Đèn cồn + ngọn lửa (flicker) — kèm khoá an toàn
```js
let flameOn = false; // BẮT BUỘC: khi đun cồn/mở lọ cồn phải = false (xem MỤC 14)
function drawAlcoholLamp(cx, baseY){
  ctx.save();
  // bình chứa
  ctx.fillStyle='#B8895A'; ctx.strokeStyle='#7A5A38'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.ellipse(cx, baseY, 26, 12, 0, 0, Math.PI*2); ctx.fill();
  ctx.fillRect(cx-26, baseY-22, 52, 22); ctx.strokeRect(cx-26, baseY-22, 52, 22);
  // cổ + bấc
  ctx.fillStyle='#C9C2B0'; ctx.fillRect(cx-6, baseY-34, 12, 12);
  ctx.fillStyle='#6B4A2A'; ctx.fillRect(cx-2, baseY-40, 4, 8);
  // NGỌN LỬA chỉ vẽ khi flameOn
  if (flameOn){
    const f = Math.sin(time*8)*2; // flicker
    const fx = cx, fy = baseY-42;
    ctx.beginPath(); ctx.moveTo(fx, fy-30-f);
    ctx.quadraticCurveTo(fx-9, fy-12, fx-6, fy);
    ctx.quadraticCurveTo(fx, fy+4, fx+6, fy);
    ctx.quadraticCurveTo(fx+9, fy-12, fx, fy-30-f);
    ctx.fillStyle='#F6A623'; ctx.fill();               // lửa ngoài
    ctx.beginPath(); ctx.moveTo(fx, fy-20-f);
    ctx.quadraticCurveTo(fx-5, fy-8, fx-3, fy);
    ctx.quadraticCurveTo(fx, fy+3, fx+3, fy);
    ctx.quadraticCurveTo(fx+5, fy-8, fx, fy-20-f);
    ctx.fillStyle='#E8641A'; ctx.fill();               // lửa trong
    ctx.beginPath(); ctx.ellipse(fx, fy-4, 2.5, 6, 0, 0, Math.PI*2);
    ctx.fillStyle='#5B8DEF'; ctx.fill();               // gốc xanh
  }
  ctx.restore();
}
```

### 12C. Lá cây (lá chét) đổi màu theo trạng thái — trung tâm bài quang hợp
```js
// leafState: 'living' | 'boiled' | 'decolorized' | 'iodine'
// coveredRegion: {x,y,w,h} vùng bị giấy đen che (kết quả ÂM). Giữ NGUYÊN vùng này qua mọi state.
function drawLeaflet(cx, cy, leafState, iodineProgress){
  ctx.save();
  const base = {
    living:      {r:62,g:123,b:58},
    boiled:      {r:75,g:107,b:51},
    decolorized: {r:228,g:222,b:200},
    iodine:      {r:228,g:222,b:200}
  }[leafState];
  // phiến lá (hình bầu dục có mũi nhọn)
  ctx.beginPath();
  ctx.moveTo(cx, cy-70);
  ctx.quadraticCurveTo(cx+48, cy-40, cx+40, cy);
  ctx.quadraticCurveTo(cx+30, cy+55, cx, cy+72);
  ctx.quadraticCurveTo(cx-30, cy+55, cx-40, cy);
  ctx.quadraticCurveTo(cx-48, cy-40, cx, cy-70);
  ctx.closePath();
  ctx.fillStyle=`rgb(${base.r},${base.g},${base.b})`; ctx.fill();
  ctx.strokeStyle='#2F5E2C'; ctx.lineWidth=1.5; ctx.stroke();
  // gân lá
  ctx.strokeStyle='rgba(47,94,44,0.5)'; ctx.lineWidth=1.2;
  ctx.beginPath(); ctx.moveTo(cx,cy-66); ctx.lineTo(cx,cy+68); ctx.stroke();
  for(let i=-2;i<=2;i++){ ctx.beginPath(); ctx.moveTo(cx, cy+i*22); ctx.lineTo(cx+ (i%2?26:-26), cy+i*22-14); ctx.stroke(); }
  // KẾT QUẢ IỐT: chỉ tô 2 vùng, KHÔNG tô cả lá
  if (leafState==='iodine'){
    ctx.save();
    // clip theo hình lá để màu không tràn
    ctx.clip();
    // vùng chiếu sáng (phần lá trừ coveredRegion) → xanh tím đậm
    const posColor = lerpColor({r:228,g:222,b:200}, {r:36,g:28,b:61}, iodineProgress);
    ctx.fillStyle=posColor; ctx.fillRect(cx-42, cy-72, 84, 150);
    // vùng bị che → vàng nâu nhạt (đè lên trên)
    const negColor = lerpColor({r:228,g:222,b:200}, {r:201,g:162,b:75}, iodineProgress);
    ctx.fillStyle=negColor;
    ctx.fillRect(coveredRegion.x, coveredRegion.y, coveredRegion.w, coveredRegion.h);
    ctx.restore();
    // viền vùng che (nét đứt mảnh) để học sinh nhận ra ranh giới
    ctx.setLineDash([5,4]); ctx.strokeStyle='rgba(26,26,26,0.4)'; ctx.lineWidth=1;
    ctx.strokeRect(coveredRegion.x, coveredRegion.y, coveredRegion.w, coveredRegion.h);
    ctx.setLineDash([]);
  }
  ctx.restore();
}
```

### 12D. Đĩa Petri, kẹp gắp, giọt thuốc thử, ống nghiệm
```js
function drawPetriDish(cx, cy, r){
  ctx.save();
  ctx.beginPath(); ctx.ellipse(cx, cy, r, r*0.42, 0, 0, Math.PI*2);
  ctx.fillStyle='rgba(220,235,240,0.35)'; ctx.fill();
  ctx.strokeStyle='#94A3B8'; ctx.lineWidth=2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(cx, cy-3, r, r*0.42, 0, Math.PI*0.15, Math.PI*0.85);
  ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.restore();
}
function drawTongs(x, y, angle){ // kẹp gắp — LUÔN dùng khi gắp vật nóng, không dùng tay trần
  ctx.save(); ctx.translate(x,y); ctx.rotate(angle);
  const g=ctx.createLinearGradient(-4,0,4,0); g.addColorStop(0,'#4A5568'); g.addColorStop(.5,'#2D3748'); g.addColorStop(1,'#1A202C');
  ctx.strokeStyle=g; ctx.lineWidth=5; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,60); ctx.moveTo(-6,-4); ctx.lineTo(0,10); ctx.moveTo(6,-4); ctx.lineTo(0,10); ctx.stroke();
  ctx.restore();
}
function drawDrop(x, y, color){ // giọt iốt/thuốc thử đang rơi — đầu tròn, đuôi nhọn
  ctx.save(); ctx.fillStyle=color||'rgba(154,100,32,0.9)';
  ctx.beginPath(); ctx.moveTo(x,y-9);
  ctx.quadraticCurveTo(x-5,y-2,x-4,y+1); ctx.quadraticCurveTo(x,y+5,x+4,y+1); ctx.quadraticCurveTo(x+5,y-2,x,y-9);
  ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.arc(x-1,y-4,1.5,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawDropper(x, y, liquidColor, label){ // ống nhỏ giọt (nhỏ iốt lên lá) — bóp cao su + thân thủy tinh thon
  ctx.save();
  // bóp cao su
  ctx.fillStyle='#C0563C';
  ctx.beginPath(); ctx.moveTo(x-9,y-10); ctx.quadraticCurveTo(x-14,y-35,x,y-40); ctx.quadraticCurveTo(x+14,y-35,x+9,y-10); ctx.closePath(); ctx.fill();
  // thân thủy tinh thon dần xuống đầu tip
  ctx.fillStyle='rgba(220,235,240,0.45)'; ctx.strokeStyle='rgba(148,163,184,0.7)'; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.moveTo(x-7,y-10); ctx.lineTo(x-7,y+22); ctx.lineTo(x-2,y+50); ctx.lineTo(x+2,y+50); ctx.lineTo(x+7,y+22); ctx.lineTo(x+7,y-10); ctx.closePath(); ctx.fill(); ctx.stroke();
  // dung dịch bên trong ống
  if(liquidColor){ ctx.fillStyle=liquidColor; ctx.beginPath(); ctx.moveTo(x-5,y); ctx.lineTo(x-2,y+45); ctx.lineTo(x+2,y+45); ctx.lineTo(x+5,y); ctx.closePath(); ctx.fill(); }
  // vệt sáng
  ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect(x-6,y-8,3,55);
  if(label){ ctx.fillStyle='#1A1A1A'; ctx.font='bold 13px "Be Vietnam Pro", sans-serif'; ctx.textAlign='center'; ctx.fillText(label, x, y-50); }
  ctx.restore();
}
function drawStream(sx, sy, targetCx, targetHalfW, ty, color){ // dòng rót nước/cồn/thuốc thử
  // ENDPOINT X BẮT BUỘC clamp trong miệng bình nhận — lỗi hay gặp nhất: dòng đổ trượt ra ngoài miệng
  const ex = clamp(sx, targetCx - targetHalfW + 2, targetCx + targetHalfW - 2);
  ctx.save(); ctx.strokeStyle = color || 'rgba(210,230,238,0.85)'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(sx, sy);
  ctx.quadraticCurveTo(sx + (ex-sx)*0.5 + 10, (sy+ty)/2, ex, ty); // control lệch ngang 8–12px → cảm giác quán tính
  ctx.lineWidth = 3.5; ctx.stroke();                              // rộng ở nguồn
  ctx.beginPath(); ctx.moveTo(ex, ty-8); ctx.lineTo(ex, ty); ctx.lineWidth = 1.5; ctx.stroke(); // thu về 1–2px ở cuối
  ctx.restore();
  // Khi dòng chạm mặt chất lỏng: spawnRing(ex, ty) + spawnSplash(ex, ty)
}
```
### 12D-bis. Ống nghiệm (`drawTestTube`) — dùng cho bài hô hấp (BTB/nước vôi), thử đường Benedict...
Nhiều bài Sinh ở MỤC 16 cần ống nghiệm (chỉ thị BTB đổi màu, kết tủa Benedict). Dùng nguyên hàm dưới đây — **màu chất lỏng lấy từ bảng khoa học MỤC 4A**, nhãn dùng Be Vietnam Pro:
```js
// cx: tâm ngang; topY: đỉnh miệng ống; h: chiều cao thân; liquidColor/fillRatio: dung dịch (0..1); label: nhãn dưới ống
function drawTestTube(cx, topY, h, liquidColor, fillRatio, label){
  const halfW = 16, botY = topY + h, r = halfW; // đáy bán nguyệt bán kính = nửa bề rộng
  ctx.save();
  // giá đỡ (kẹp) ngang qua miệng ống
  ctx.strokeStyle='#CBD5E1'; ctx.lineWidth=4; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(cx-halfW-12, topY+14); ctx.lineTo(cx+halfW+12, topY+14); ctx.stroke();
  // thân + đáy bo tròn (đường bao dùng chung cho fill thân, clip chất lỏng, stroke viền)
  function tubePath(){
    ctx.beginPath();
    ctx.moveTo(cx-halfW, topY); ctx.lineTo(cx-halfW, botY-r);
    ctx.arc(cx, botY-r, r, Math.PI, 0, true);           // đáy bán nguyệt
    ctx.lineTo(cx+halfW, topY);
  }
  tubePath(); ctx.fillStyle='rgba(220,235,240,0.4)'; ctx.fill();  // thuỷ tinh
  // chất lỏng: clip trong thân rồi đổ từ đáy lên theo fillRatio, mặt cong lõm (meniscus)
  if (liquidColor && fillRatio>0){
    ctx.save(); tubePath(); ctx.clip();
    const liqTop = botY - r - (h - r - 6) * clamp(fillRatio,0,1);
    ctx.fillStyle = liquidColor; ctx.fillRect(cx-halfW, liqTop, halfW*2, botY-liqTop);
    ctx.beginPath(); ctx.moveTo(cx-halfW, liqTop); ctx.quadraticCurveTo(cx, liqTop+3, cx+halfW, liqTop);
    ctx.strokeStyle='rgba(255,255,255,0.35)'; ctx.lineWidth=2; ctx.stroke();
    ctx.restore();
  }
  tubePath(); ctx.strokeStyle='#94A3B8'; ctx.lineWidth=2; ctx.stroke();  // viền
  // vệt sáng trái + gờ miệng
  ctx.beginPath(); ctx.moveTo(cx-halfW+5, topY+8); ctx.lineTo(cx-halfW+5, botY-r);
  ctx.strokeStyle='rgba(255,255,255,0.6)'; ctx.lineWidth=3; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-halfW-3, topY); ctx.lineTo(cx+halfW+3, topY);
  ctx.strokeStyle='#7C8A99'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.stroke();
  if (label){ ctx.fillStyle='#1A1A1A'; ctx.font='bold 13px "Be Vietnam Pro", sans-serif'; ctx.textAlign='center'; ctx.fillText(label, cx, botY+22); }
  ctx.restore();
}
```
Đổi màu chỉ thị: nội suy `liquidColor` bằng `lerpColor` theo bảng 4A — BTB xanh `#2E7CC4`→vàng `#E0B020` (có CO₂); nước vôi trong `rgba(210,230,238,0.5)`→trắng sữa `rgba(245,245,240,0.85)` (vẩn đục); Benedict xanh `#1C6FB0`→đỏ gạch `#B5471F` (kèm particle kết tủa lắng, MỤC 11D).

### 12E. Trường quan sát kính hiển vi + tế bào (bài tế bào/thẩm thấu)
```js
function drawMicroField(cx, cy, R){ // vòng tròn thị trường sáng
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2);
  ctx.fillStyle='#F3F1E4'; ctx.fill(); ctx.clip();
  // tế bào — thẩm thấu: cellTurgor 0(co nguyên sinh) .. 1(trương)
  cells.forEach(c=>{
    const rr = lerp(c.rMin, c.rMax, cellTurgor);
    ctx.beginPath(); ctx.ellipse(c.x, c.y, rr, rr*0.72, c.rot, 0, Math.PI*2);
    ctx.fillStyle='rgba(180,210,170,0.35)'; ctx.fill();          // tế bào chất
    ctx.strokeStyle='#5E8C52'; ctx.lineWidth=2; ctx.stroke();     // thành tế bào
    // màng co lại khi mất nước (co nguyên sinh)
    if (cellTurgor<0.5){ ctx.beginPath(); ctx.ellipse(c.x,c.y, rr*lerp(0.6,1,cellTurgor), rr*0.72*lerp(0.6,1,cellTurgor), c.rot,0,Math.PI*2); ctx.strokeStyle='rgba(94,140,82,0.6)'; ctx.lineWidth=1.2; ctx.stroke(); }
    ctx.beginPath(); ctx.arc(c.x+rr*0.2, c.y-rr*0.15, rr*0.22, 0, Math.PI*2); ctx.fillStyle='#6A5AA8'; ctx.fill(); // nhân
  });
  ctx.restore();
  ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.strokeStyle='#2D3748'; ctx.lineWidth=6; ctx.stroke(); // viền ống kính
}
```

---

## 13. QUY TẮC ANIMATION (cực kỳ quan trọng)

### #1 — KHÔNG BAO GIỜ đổi trạng thái tức thì
SAI: `onClick → leafState='iodine'; iodineProgress=1;`
ĐÚNG: `onClick → khởi động chuỗi animation → mỗi frame tăng progress → xong mới chốt state`

### #2 — Mỗi thao tác = chuỗi nhiều pha (progress 0→1)
| Thao tác Sinh học | Các pha bắt buộc | Thời gian tối thiểu |
|---|---|---|
| Nhỏ giọt iốt lên lá | ① Ống nhỏ giọt lerp đến vị trí → ② giọt hình thành ở đầu (r 0→4) → ③ giọt rơi (đầu tròn/đuôi nhọn) → ④ chạm lá: ripple + 3–5 micro-particle → ⑤ màu vùng lá `lerpColor` → xanh tím / vàng nâu | 1.8s |
| Đun cách thủy (tẩy diệp lục) | ① đèn cồn đun cốc nước ngoài (bọt sôi) → ② **tắt/dời đèn (flameOn=false)** → ③ đặt cốc cồn+lá vào nước nóng → ④ cồn chuyển xanh dần + lá nhạt màu dần (2 lerpColor song song) | 3s |
| Nhúng lá vào nước sôi | ① kẹp gắp lá lerp tới miệng cốc → ② thả lá vào → ③ lá đổi 'living'→'boiled' + vài bọt khí | 1.5s |
| Rửa lá | ① kẹp nhúng lá vào cốc nước → ② vài gợn nước + hạt cồn khuếch tán tan | 1.2s |
| Rót dung dịch (nước/cồn/thuốc thử vào cốc) | ① bình/ống nghiêng (rotate) → ② dòng bézier từ miệng bình (`drawStream`, rộng 3–4px nguồn → 1–2px cuối), **endpoint X clamp trong miệng cốc nhận** → ③ `spawnRing` + `spawnSplash` tại điểm chạm → ④ mực chất lỏng dâng (lerp `fillRatio`) → ⑤ bình nghiêng về | 2.5s |
| Khuấy / lắc ống nghiệm | ① đũa thuỷ tinh/ống xuất hiện → ② quay tròn hoặc lắc góc ±5° (`Math.sin(time*speed)`) → ③ particle xoáy nhẹ → ④ màu dung dịch `lerpColor` nếu có phản ứng | 2s |
| Bọt khí quang hợp (cây thủy sinh) | ① tăng cường ánh sáng (slider) → ② bọt O₂ spawn nhanh dần ở mép lá → ③ bọt bay lên gom vào ống nghiệm úp | liên tục theo slider |
| Thẩm thấu tế bào | ① đổi môi trường (ưu/nhược trương) → ② `cellTurgor` lerp (trương/co nguyên sinh) → ③ nhân + màng dịch chuyển theo | 2.5s |
| Đổi màu chỉ thị (BTB / nước vôi) | ① thổi/ sục CO₂ → ② bọt → ③ `lerpColor` xanh→vàng (BTB) hoặc trong→đục (nước vôi) | 2.5s |

### #3 — State machine mỗi bước (`subStep`)
`0` Idle (chờ bấm, nút enabled) → `1` Animating (mọi nút disabled) → `2` (tuỳ chọn) yêu cầu tương tác thêm → `3` Animating tương tác → `4` Done (mở khóa bước tiếp / hiện kết quả). Bước đơn giản: nhảy thẳng 1→4.

### #4 — Timing & easing
Di chuyển vật: `easeOut`. Đổi màu chất lỏng/mô: `lerp` tuyến tính. Lắc/rung/flicker: `Math.sin(time*speed)*amp`. Progress/frame ~0.015–0.04. Tổng 1 thao tác 1.5–4s. Transition UI 150–250ms.

### #5 — Thứ tự vẽ mỗi frame
`clearRect` → `drawGrid()` → dụng cụ cố định (giá đỡ, bàn, cốc) → chất lỏng (clip) → particle trong bình → **vật đang di chuyển vẽ TRÊN CÙNG** (kẹp, ống nhỏ giọt, giọt rơi, lá đang gắp) → nhãn/chỉ số.

### #6 — Visual polish (checklist bắt buộc)
- **Reaction flash**: glow pulse tại điểm phản ứng khi bắt đầu đổi màu (r 0→30, opacity .6→0 ~0.3s) TRƯỚC `lerpColor`.
- **Impact splash**: ripple ring + micro-particle mỗi khi giọt chạm bề mặt.
- **Meniscus**: mặt chất lỏng luôn cong lõm, không phẳng ngang.
- **Bubble size gradient**: bọt nhỏ ở đáy, lớn dần khi gần mặt.
- **Particle wobble**: hạt lắng dao động ngang `Math.sin()`.
- **Stream alignment**: khi rót, endpoint X của dòng chảy PHẢI `clamp` vào trong miệng bình nhận (`clamp(sourceX, targetCx−halfW+2, targetCx+halfW−2)`) — tuyệt đối không để dòng đổ trượt ra ngoài miệng (lỗi phổ biến nhất khi vẽ rót).

### #7 — `prefers-reduced-motion`
```css
@media (prefers-reduced-motion: reduce){ /* tắt transition trang trí */ }
```
Canvas: tắt hiệu ứng lặp thuần trang trí (shimmer, wave), **GIỮ** animation thao tác thí nghiệm (nhỏ giọt, đổi màu, tẩy diệp lục) vì đó là nội dung sư phạm — có thể rút ngắn thời gian.

### #8 — Nhãn thời gian cho quá trình sinh học bị nén (time-lapse) — đặc thù Sinh
Nhiều quá trình Sinh kéo dài **giờ/ngày thật** nhưng nén còn vài giây trên màn: xử lí tối, chiếu sáng tích luỹ tinh bột, nảy mầm, hướng sáng, phân bào, lên men. Học sinh dễ hiểu nhầm đó là thời gian thực nếu không nói rõ.
- Mọi hoạt cảnh nén thời gian **PHẢI hiện nhãn mốc thời gian THẬT** ngay trên/cạnh vùng đang chạy — vd `"Xử lí tối · ~48 giờ"`, `"Chiếu sáng · vài giờ"`, `"Nảy mầm · 5 ngày"` (dùng `~`/"vài" khi kịch bản không cho số chính xác). Kiểu C timeline (MỤC 8B) đặt nhãn ở 2 đầu thanh trượt + badge phase; kiểu B đặt trong thanh guide hoặc caption dưới canvas.
- Có thể kèm 1 tín hiệu "đang tua nhanh" (biểu tượng `ti-player-track-next`/đồng hồ) để phân biệt rõ với thao tác diễn ra thời gian thực (nhỏ iốt, rót nước).
- **Không** để tốc độ nén ám chỉ sai sinh học (vd không làm cây "nảy mầm tức thì" như phép màu); nén là quy ước hiển thị, nhãn thời gian giữ đúng nhận thức về nhịp sinh học thật.

### #9 — Đưa canvas vào vùng nhìn trước khi chạy hiệu ứng từ nút ở xa
Khi nút **“Xem…” / “Chạy mô phỏng” / “Quan sát hiệu ứng”** nằm bên dưới hoặc cách canvas quá một màn hình, không được khởi chạy hoạt cảnh ngay lúc canvas còn ngoài vùng nhìn. Trình tự bắt buộc:
1. Khóa tạm nút vừa bấm và đặt `aria-busy="true"` để chống bấm lặp.
2. Nếu canvas chưa nhìn thấy đầy đủ, cuộn canvas vào giữa vùng nhìn.
3. Chỉ bắt đầu hiệu ứng sau sự kiện `scrollend`; luôn có fallback khoảng **700–900 ms** cho trình duyệt chưa hỗ trợ sự kiện này.
4. Mở lại nút khi hiệu ứng đã bắt đầu; không tự cuộn ngược về nội dung vì dễ gây mất phương hướng.
5. Với `prefers-reduced-motion: reduce`, dùng cuộn tức thời và bắt đầu hiệu ứng ngay.

Chỉ áp dụng quy tắc này cho nút **trực tiếp khởi chạy một hiệu ứng có thời gian hoặc chuỗi hình cần quan sát**. Không tự kéo trang sau mọi câu trả lời/quiz thông thường, vì sẽ tạo trải nghiệm cuộn lên–xuống liên tục.

Nếu `.canvas-card` hoặc tổ tiên có `overflow:hidden`, ưu tiên tính tọa độ tài liệu và dùng `window.scrollTo()`; `element.scrollIntoView()` có thể chọn nhầm tổ tiên bị ẩn làm vùng cuộn:
```js
let effectFocusTimer = 0;
function showEffectOnCanvas(triggerButton, runEffect){
  clearTimeout(effectFocusTimer);
  const wrap = document.querySelector('.canvas-glow-wrap');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rect = wrap.getBoundingClientRect();
  const visible = rect.top >= 0 && rect.bottom <= innerHeight;
  const maxY = Math.max(0, document.documentElement.scrollHeight - innerHeight);
  const targetY = Math.max(0, Math.min(maxY, scrollY + rect.top - (innerHeight - rect.height) / 2));
  let started = false;

  triggerButton.disabled = true;
  triggerButton.setAttribute('aria-busy', 'true');

  const start = ()=>{
    if (started) return;
    started = true;
    clearTimeout(effectFocusTimer);
    removeEventListener('scrollend', start);
    triggerButton.disabled = false;
    triggerButton.removeAttribute('aria-busy');
    runEffect();
  };

  if (!reduce && !visible) addEventListener('scrollend', start, { once:true });
  scrollTo({ top:targetY, behavior:reduce ? 'auto' : 'smooth' });
  effectFocusTimer = setTimeout(start, reduce || visible ? 0 : 900);
}
```
Khi nghiệm thu trong LMS, phải thử cả trường hợp trang tự cuộn bên trong iframe và trường hợp LMS đã resize iframe theo nội dung.

---

## 14. TƯ DUY LOGIC & AN TOÀN — SINH HỌC (gate correctness, không được vi phạm)

### 14A. An toàn thí nghiệm (khoá cứng trong animation)
- **Cồn và ngọn lửa KHÔNG BAO GIỜ xuất hiện đồng thời trong bất kỳ frame nào.** Trình tự đúng bắt buộc:
  đun cốc nước ngoài bằng đèn cồn → **tắt đèn + xác nhận lửa đã tắt** (`flameOn=false`) → **dời đèn ra xa** → mới mở cồn → đặt cốc nhỏ (cồn + lá) vào cốc nước nóng để **đun cách thủy**. Học sinh chỉ **chọn sơ đồ bố trí an toàn (A/B)**; hệ thống chạy đúng animation — **không cho kéo cốc cồn qua vùng lửa**.
- Vật/dụng cụ nóng: **luôn dùng kẹp gắp** (`drawTongs`), không tay trần.
- Giấy đen che phải đặt **xa nguồn nhiệt**, che **cùng một vùng ở CẢ HAI mặt** lá chét (giữ nguyên `coveredRegion` qua mọi state).

### 14B. Chính xác sinh học (không regress)
- Iốt **phát hiện** tinh bột có sẵn — không tạo ra tinh bột.
- Xử lý tối (che sáng trước thí nghiệm) làm **giảm ảnh hưởng của tinh bột tích luỹ trước đó** — **không** nói "đã dùng hết hoàn toàn".
- Lá khoai tây là **lá kép**; thí nghiệm làm trên **một lá chét đủ lớn**, không phải cả lá kép vẽ như 1 phiến. Giữ **cùng một lá chét** xuyên suốt mọi state (liên tục thị giác).
- Kết quả dương = **xanh tím đậm**, âm = **vàng nâu nhạt** — không trắng tinh, không tự chế, **không tô cả lá**.

### 14C. Kết luận có giới hạn
- Kết luận **không vượt quá điều kiện đã kiểm chứng** — không suy rộng cho mọi loài, **không** "chứng minh tuyệt đối". Kết luận đúng phải gắn phạm vi *"trong điều kiện thí nghiệm này"*.

### 14D. Phản hồi khi sai (sư phạm)
- Phản hồi sai phải **nêu đúng lỗi cụ thể + giải thích vì sao + cho làm lại đúng bước đó** — **không reset tiến trình đã đúng**, không quy về một nguyên nhân ép buộc, không "làm ngu hoá" câu hỏi.
- Ngôn ngữ **trung tính, trực tiếp**; **không xưng "em"**.
- Không có dụng cụ gây nhiễu (kính hiển vi/giấy sắc ký/axeton... nếu bài không dùng) và không bừa bộn trong cảnh lab.

### 14E. TTS (nếu bài yêu cầu)
TTS chỉ phát khi **người dùng chủ động bấm nút "Nghe"** — không autoplay, không lặp tự động, **không đọc đáp án**.
```js
document.getElementById('btnTTS').addEventListener('click', ()=>{
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();                                  // dừng lần đọc trước, không chồng tiếng
  const u = new SpeechSynthesisUtterance(currentGuideText);   // CHỈ đọc hướng dẫn/mô tả bước hiện tại — KHÔNG đọc đáp án đúng
  u.lang = 'vi-VN'; u.rate = 1;
  speechSynthesis.speak(u);
});
```

---
## 15. TỐI ƯU MOBILE & NHÚNG LMS

### 15A. Checklist responsive (bắt buộc)
- [ ] Breakpoint chính: **1100px** (3 cột → 1 cột), phụ 768px / 640px.
- [ ] Mọi nút/tab/input/checkbox **≥ 44×44px** trên mobile.
- [ ] Canvas **KHÔNG** `height` px cố định — tự giãn qua `resizeCanvas()` (MỤC 11) hoặc `aspect-ratio` khi tách riêng.
- [ ] Không tràn ngang ở 360–375px. Padding trang thu gọn (`clamp`).
- [ ] Hàng controls: nếu tràn → cuộn ngang trong hàng, không wrap.
- [ ] Menu/tab ngang (nếu có): `overflow-x:auto` + `scrollbar-width:none` + `::-webkit-scrollbar{display:none}`.
- [ ] 1 cột: thứ tự guide → controls → canvas → sideRight → sideLeft (phần tương tác lên đầu).

### 15B. "Nút gom" — collapsible cho nội dung dài phía trên canvas
Nếu có khối hướng dẫn/giải thích dài >~4 dòng đặt trên canvas: bọc trong panel đóng/mở, **mặc định thu gọn trên mobile, mở sẵn trên desktop** — để canvas lọt màn hình đầu, không phải cuộn. Không bọc canvas/thanh guide 1 dòng.
```js
function toggleCollapsible(id){ document.getElementById(id).classList.toggle('collapsed'); }
document.querySelectorAll('.collapsible-panel').forEach(p=>{ if (matchMedia('(max-width:768px)').matches) p.classList.add('collapsed'); });
```

### 15C. Tích hợp LMS & Athena (bắt buộc mọi file mới)
Module nhúng iframe vào LMS Aiducation; gia sư AI "Athena" **không đọc DOM** — chỉ biết bài qua manifest + state phát ra. Viết instrumentation **cùng lúc** với logic thật (gọi từ trong handler chọn đáp án / chuyển bước).

**Ràng buộc sandbox:** không `fetch`/XHR/WebSocket; tài nguyên ngoài chỉ từ `cdn.jsdelivr.net`, `fonts.googleapis.com`, `fonts.gstatic.com` (ảnh: inline SVG / `data:` / `https:`); **KHÔNG `localStorage`/cookie** — lưu qua `LMS().state()`; 1 file self-contained, không build step, không `eval`.

**Safe accessor** (đầu `<script>` đầu tiên — để file vẫn chạy độc lập ngoài LMS):
```js
function LMS(){return window.AiducationLMS||{ready(){},progress(){},event(){},state(){},complete(){},resize(){}};}
```
**Athena manifest** (trong `<head>`):
```html
<script type="application/json" id="athena-context">
{
  "title":"...", "subject":"Sinh học", "grade":"11", "track":"...",
  "objectives":["...","..."],
  "structure":[{"id":"p1","title":"Phần 1 — ..."}],
  "athenaGuidance":"(a) 1–2 câu bài dạy gì, học sinh thao tác gì. (b) LIỆT KÊ ĐÁNH SỐ từng câu hỏi kèm NGUYÊN VĂN lựa chọn A/B/C/D — không tóm tắt, KHÔNG ghi đáp án đúng. (c) Athena chỉ gợi ý, không nói thẳng đáp án."
}
</script>
```
**Gọi từ logic thật:**
```js
LMS().progress({ done, total });                 // mỗi section bắt buộc hoàn thành
LMS().event('answered', { id:'q2', chosen:'B', correct:false });
LMS().state({ currentStep, totalSteps, answeredSoFar:{...}, lastAction:'...' }); // mỗi thay đổi UI có nghĩa
LMS().complete({ summary:"...", score, max, items:[ /* 1 phần tử / câu hỏi thật, không bịa */ ] }); // ĐÚNG 1 LẦN, guard boolean
if (window.AiducationLMS) window.AiducationLMS.onResume = function(s){ /* áp lại state */ };
```
**Resize — chống khoảng trắng thừa khi nhúng:**
```js
function reportHeight(){ LMS().resize({ height: document.documentElement.scrollHeight }); }
addEventListener('load', reportHeight);
const ro = new ResizeObserver(()=>{ clearTimeout(window._rz); window._rz=setTimeout(reportHeight,100); });
ro.observe(document.body);
```
Đồng thời: **bỏ hẳn** `min-height:100vh`/`height:100vh` trên `body`; xoá margin/padding thừa cuối trang.

### 15D. Quản lý đường dẫn ảnh — sẵn sàng thay bằng URL/CDN/Google Drive

Các ảnh bài học dùng trong canvas hoặc thẻ HTML **PHẢI được khai báo tập trung** trong một bảng `assetFiles`. Mỗi giá trị
trong bảng là **đường dẫn hoàn chỉnh mà `Image.src` có thể dùng trực tiếp**: có thể là đường dẫn tương đối trong dự án,
URL HTTPS của CDN/máy chủ ảnh, hoặc URL xem trực tiếp của Google Drive.

```js
const assetFiles = {
  A01: 'images/SH11-B05-M03/SH11-B05-M03-A01.png',
  A02: 'images/SH11-B05-M03/SH11-B05-M03-A02.png'
};

const assets = {};
Object.entries(assetFiles).forEach(([code, url]) => {
  const img = new Image();
  img.addEventListener('load', () => {
    assets[code] = img;
  });
  img.src = url;
});
```

Khi chuyển sang ảnh online, **chỉ thay giá trị trong `assetFiles`**, không sửa bộ nạp ảnh:

```js
const assetFiles = {
  A01: 'https://cdn.example.edu/SH11-B05-M03-A01.png',
  A02: 'https://drive.google.com/uc?export=view&id=FILE_ID_A02'
};
```

**Không dùng kiểu nối bắt buộc `ASSET_BASE + file`** cho các bài cần khả năng thay từng ảnh bằng URL riêng, vì mỗi file
Google Drive có một `FILE_ID` khác nhau. Bộ nạp chuẩn luôn dùng:

```js
img.src = url;
```

Nếu cùng một ảnh vừa được vẽ lên canvas vừa xuất hiện trong HTML (ví dụ ảnh ở `.link-fish`), không lặp đường dẫn tại
hai nơi. Gán một `id` cho thẻ ảnh và lấy URL từ cùng bảng:

```html
<img id="linkFishImage" alt="Mẫu vật minh họa">
```

```js
document.getElementById('linkFishImage').src = assetFiles.A02;
```

**Quy tắc khi dùng Google Drive:**
- File phải được chia sẻ ở chế độ **“Bất kỳ ai có đường liên kết — Người xem”**.
- Lấy `FILE_ID` từ link chia sẻ và dùng URL dạng
  `https://drive.google.com/uc?export=view&id=FILE_ID`.
- Không dùng nguyên link `/file/d/.../view` làm `src`, vì đó là trang xem chứ không phải URL ảnh trực tiếp.
- Google Drive không phải CDN; có thể chuyển hướng, giới hạn lượt tải hoặc thay đổi hành vi nhúng. Bài dùng cho sản xuất
  nên ưu tiên máy chủ Aiducation/CDN có URL HTTPS ổn định.
- Nếu chỉ gọi `ctx.drawImage()` và không đọc pixel, không tự thêm `crossOrigin='anonymous'`. Chỉ thêm `crossOrigin`
  khi máy chủ ảnh đã cấu hình CORS phù hợp; cấu hình sai có thể khiến ảnh không tải.

**Nghiệm thu đường dẫn ảnh:**
- Mọi mã ảnh trong kịch bản phải tồn tại đúng một khóa trong `assetFiles`.
- Không còn đường dẫn ảnh bài học bị viết rải rác trong nhiều hàm.
- Thay thử một khóa bằng URL HTTPS vẫn tải được ảnh mà không cần sửa `drawAsset()` hoặc bộ nạp.
- Có xử lý ảnh chưa tải/lỗi tải để canvas không phát sinh exception hoặc làm hỏng luồng tương tác.

---

## 16. VÍ DỤ MÔN SINH — Bài "Sự hình thành tinh bột trong quang hợp"

*(Ví dụ minh hoạ cách áp prompt vào 1 bài Sinh thực tế — tương ứng module `SH11_B05_M03` của bộ.)*

- **Câu hỏi nghiên cứu:** Lá chỉ tạo tinh bột ở phần được chiếu sáng?
- **Biến:** độc lập = có/không chiếu sáng (vùng bị giấy đen che vs vùng chiếu sáng); phụ thuộc = màu với iốt; kiểm soát = cùng lá chét, cùng cây, cùng thời gian.
- **Layout:** 3 cột dashboard; controls **Kiểu B (stepper)**; canvas `H=560`.
- **Trình tự bước (canvas stages + guide):**
  1. **Xử lý tối** cây trước → che 1 vùng lá chét bằng giấy đen (2 mặt, cùng vùng) → **chiếu sáng** vài giờ. `leafState='living'`, hiện `coveredRegion`.
  2. **Ngắt lá, nhúng nước sôi** (dùng kẹp) → `living→boiled` + bọt khí. *An toàn: dùng kẹp, không tay trần.*
  3. **Tẩy diệp lục — đun cách thủy:** đun cốc nước ngoài → **tắt & dời đèn (`flameOn=false`)** → đặt cốc cồn+lá vào nước nóng → cồn xanh dần, lá nhạt dần → `boiled→decolorized`. *An toàn: cồn không gặp lửa; học sinh chọn sơ đồ bố trí A/B.*
  4. **Rửa lá** trong nước sạch.
  5. **Nhỏ iốt** → `decolorized→iodine`, `iodineProgress` lerp: vùng chiếu sáng → **xanh tím đậm** (dương), vùng che → **vàng nâu nhạt** (âm). Điền "Bảng quan sát".
  6. **Kết luận & câu hỏi:** giải thích vai trò giấy đen / cồn / iốt; kết luận **giới hạn**: *"Trong điều kiện thí nghiệm này, lá chỉ tạo tinh bột ở phần được chiếu sáng."* — **không** khái quát mọi loài, **không** "chứng minh tuyệt đối".
- **Màu khoá:** dương `#241C3D`, âm `#C9A24B` (MỤC 4A). Iốt **phát hiện** tinh bột, không tạo ra.
- **Dụng cụ vẽ:** `drawBeaker` (nước sôi + cốc cồn), `drawAlcoholLamp` (flame khoá an toàn), `drawLeaflet` (5 state), `drawTongs`, `drawDrop` (iốt), `drawPetriDish`.

*Bài Sinh khác áp tương tự:* quang hợp thải O₂ (bọt khí + slider ánh sáng, Kiểu C) · hô hấp thải CO₂ (BTB/nước vôi đổi màu) · thẩm thấu/co nguyên sinh (`drawMicroField`, `cellTurgor`, Kiểu A hoặc C) · hoạt tính enzyme theo nhiệt độ/pH (Kiểu C timeline).

---

## 17. CHECKLIST KỸ THUẬT TRƯỚC KHI GIAO FILE

**Cấu trúc & self-contained:**
- [ ] 1 file HTML, CSS/JS inline; chỉ import Be Vietnam Pro + Tabler qua CDN; ảnh header/mascot từ aiducation.edu.vn (ngoại lệ). Không phụ thuộc file ngoài khác.
- [ ] Ảnh bài học khai báo tập trung trong `assetFiles`; mỗi giá trị là đường dẫn hoàn chỉnh; bộ nạp dùng `img.src = url`; ảnh dùng lại trong HTML không lặp URL.
- [ ] `<meta charset="UTF-8">` + `<meta name="viewport" ...>`; toàn bộ UI tiếng Việt, đúng dấu, không tràn chữ.
- [ ] **Không** `localStorage`/`sessionStorage`/cookie — state bằng biến JS trong session (+ `LMS().state()`).

**Design system:**
- [ ] Font Be Vietnam Pro toàn trang **kể cả `ctx.font`**; không sót font khác (`grep -i "playfair\|inter\|jakarta\|roboto"`).
- [ ] Chỉ dùng token UI ở MỤC 3 cho giao diện; **không** gradient/shadow nặng/glassmorphism/dark theme/emoji/robot.
- [ ] Màu khoa học trong canvas theo MỤC 4; UI và science color **không trộn**.

**Canvas & animation:**
- [ ] `resizeCanvas()` gọi đầu mỗi frame; `drawGrid()` theo kích thước thật (lấp đầy, không méo).
- [ ] Buffer canvas = kích thước CSS × `Math.min(devicePixelRatio, 2)`; bật `imageSmoothingEnabled` + `imageSmoothingQuality='high'`; không gọi thêm `ctx.scale(dpr,dpr)`.
- [ ] Không đổi state tức thì — mọi thao tác chạy chuỗi animation (MỤC 13); nút disabled khi đang animate.
- [ ] Nút xem hiệu ứng nằm xa canvas phải tự đưa canvas vào vùng nhìn, chờ cuộn xong mới chạy và có fallback 700–900 ms (MỤC 13 #9); không áp dụng máy móc cho mọi quiz.
- [ ] Meniscus cong lõm; reaction flash trước lerpColor; impact splash khi giọt chạm; particle wobble.
- [ ] Nếu có click/tap trên canvas: quy đổi toạ độ theo MỤC 11E (khớp `fitScale`/offset của `loop()`, không chia `dpr` hai lần); hotspot ≥ `44/fitScale`.

**Sinh học & an toàn:**
- [ ] Cồn & lửa **không** đồng thời 1 frame; kẹp gắp vật nóng; `coveredRegion` giữ nguyên qua mọi state.
- [ ] Kết quả iốt chỉ 2 màu khoá, tô đúng vùng, **không tô cả lá**; iốt phát hiện (không tạo) tinh bột.
- [ ] Mọi kết quả đọc-bằng-màu có **dấu hiệu thứ hai** (nhãn +/−, hoa văn, hoặc vị trí có chú thích) — mù màu vẫn đọc được (MỤC 4B); bảng quan sát ghi tên màu bằng chữ.
- [ ] Quá trình sinh học nén thời gian có **nhãn mốc thời gian thật** ("~48 giờ", "vài ngày") + tín hiệu tua nhanh (MỤC 13 #8).
- [ ] Kết luận có giới hạn; phản hồi sai nêu lỗi cụ thể + cho làm lại, không reset tiến trình đúng; không xưng "em".

**Mobile & LMS:**
- [ ] ≤1100px về 1 cột, phần tương tác lên đầu; tap target ≥44px; không tràn ngang 360px.
- [ ] `LMS()` safe accessor + `#athena-context` hợp lệ (id `structure[]` khớp progress/complete/state).
- [ ] `athenaGuidance` liệt kê đủ câu hỏi + nguyên văn lựa chọn, không lộ đáp án.
- [ ] `LMS().complete()` bắn đúng 1 lần (guard); `LMS().resize()` gọi lúc load + khi đổi chiều cao.
- [ ] `body` **không** `min-height:100vh`; không khoảng đệm thừa cuối trang.

**Đặt tên & accessibility:**
- [ ] Dùng **1 bộ ID nhất quán** xuyên file, khớp `structure[].id` của Athena manifest — vd `p1`/`p2` (phần), `q1`/`q2` (câu hỏi), `labCanvas`, `btnTTS`, `guideText`.
- [ ] Class prefix theo vai trò (gợi ý, miễn nhất quán trong file): khung layout `lab-*`/`canvas-*`, `goal-*` (mục tiêu), `guide-*` (hướng dẫn), `ctrl-*` (hàng nút), `obs-*` (bảng quan sát), `eb-*` (kết luận/quiz), `link-*` (khối cuối).
- [ ] Thẻ ngữ nghĩa (`<button>`, `<h1>`…); `:focus-visible` rõ ràng; contrast đủ; `<canvas>` có `role="img"` + `aria-label`; vùng guide `aria-live="polite"`.
- [ ] Nhãn hoá học trong text nút dùng subscript Unicode (`O₂`, `CO₂`); trong `ctx.fillText` có thể dùng ASCII (`O2`, `CO2`) nếu font render hạn chế.

---

## 18. GIỚI HẠN VÒNG LẶP (khi sửa lỗi)
- Sau **2 lần** fix vẫn sai → dừng, hỏi 3 câu: *(1) Bạn thấy gì trên màn hình? (kèm ảnh) (2) Bạn muốn nó trông thế nào? (3) Lỗi xảy ra khi thao tác gì?*
- Lỗi canvas Sinh hay gặp: nội dung lệch/méo → kiểm tra khối `translate/scale` + `ctx.restore()` trong `loop()`; canvas không lấp đầy → kiểm tra `resizeCanvas()` gọi đầu frame; màu tràn cả lá → kiểm tra `clip()` + chỉ tô `coveredRegion`/vùng sáng; lửa còn khi đun cồn → kiểm tra `flameOn=false` trước pha đặt cốc cồn.
- Mỗi phiên build **1 file HTML**; bài khác → conversation mới.

---

> **KỊCH BẢN & KIẾN THỨC CỦA BÀI** được cung cấp ở **file riêng** (không nằm trong prompt này).
> Đọc file kịch bản đó, rồi sinh toàn bộ HTML/CSS/JS **hoàn chỉnh, không cắt xén** theo prompt này —
> ưu tiên giao diện đẹp, chính xác khoa học, an toàn, đúng design system "Haugomat editorial flat"
> trước khi nghĩ đến logic phức tạp.
