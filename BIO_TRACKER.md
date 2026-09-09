# DANH MỤC TIẾN ĐỘ HỌC LIỆU SỐ SINH HỌC (BIOLOGY LESSONS TRACKER)

Tài liệu này dùng để theo dõi tiến độ, cấu trúc tích hợp giữa Khung Portal mẹ (`shells/GIAODIEN_SH10_V10.html`) và toàn bộ các module lý thuyết (`modules/`), thí nghiệm thực hành ảo (`experiments/`).

---

## 🏛️ 1. KHUNG SHELL MẸ (PORTAL/SHELL STANDARD)

| File Shell | Phạm vi | Module nhúng mặc định | Cơ chế kỹ thuật |
| :--- | :--- | :--- | :--- |
| `shells/GIAODIEN_SH10_V10.html` | Sinh học 10 | 3 Tab: B01-M02, B02-M02, B02-M03 | • Bố cục 1 cột 1200px canh giữa (Tom Haugomat flat).<br>• Tự động chỉnh chiều cao iframe qua `postMessage` (`reportHeight`).<br>• 6 tầng giao diện: Top Bar $\rightarrow$ Header $\rightarrow$ Tabs $\rightarrow$ Iframe $\rightarrow$ FlowBox $\rightarrow$ Footer. |

---

## 🧬 2. MODULES BÀI HỌC LÝ THUYẾT (`modules/`)

### Sinh học 10 (`modules/Lop_10/`)

| Mã Module | Tên bài & Nội dung | File HTML chính | Kịch bản nội dung | Kịch bản tạo ảnh AI | Trạng thái |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **SH10_B01_M02** | Bài 1 - M02: Vai trò và ứng dụng của Sinh học | `SH10_B01_M02.html` | Có | Có | ✅ Sẵn sàng |
| **SH10_B02_M02** | Bài 2 - M02: Thiết bị nghiên cứu và học tập môn Sinh học | `SH10_B02_M02.html` | Có | Có | ✅ Sẵn sàng |
| **SH10_B02_M03** | Bài 2 - M03: Quy trình nghiên cứu khoa học và xử lí dữ liệu | `SH10_B02_M03.html` | Có | Có | ✅ Sẵn sàng |
| **SH10_B05_M01** | Bài 5 - M01: Các phân tử sinh học - Carbohydrate | `SH10_B05_M01.html` (chờ dựng) | Chờ kịch bản | Có (14 asset) | ⏳ Đang triển khai |

### Sinh học 11 & 12
*Thư mục `modules/Lop_11/` và `modules/Lop_12/` đang được chuẩn bị.*

---

## 🔬 3. THÍ NGHIỆM THỰC HÀNH ẢO (`experiments/`)

### Sinh học 11 (`experiments/Lop_11/`)

| Mã Thí nghiệm | Tên thí nghiệm | Cấu trúc 3 Part | Kịch bản nội dung | Kịch bản tạo ảnh AI | Trạng thái |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **SH11_B05_M03** | Bài 5 - M03: Thí nghiệm Quang hợp ở thực vật | • `P1_MUC_TIEU_CHUAN_BI.html`<br>• `P2_TIEN_TRINH_THUC_HIEN.html`<br>• `P3_BAO_CAO_GIAI_THICH.html` | Có | Có | ✅ Hoàn thiện 3 Part |

---

## 📌 HƯỚNG DẪN BẮT BUỘC DÀNH CHO TRỢ LÝ AI
1. Trước khi chỉnh sửa bất kỳ module hay thí nghiệm nào, đối chiếu đúng mã thư mục trong bảng trên.
2. Kiểm tra kịch bản nội dung (`*.txt`) và kịch bản tạo ảnh (`*.md`) tương ứng trong thư mục đó trước khi can thiệp code.
3. Luôn giữ nguyên tính tương thích với file Khung mẹ `shells/GIAODIEN_SH10_V10.html`.
