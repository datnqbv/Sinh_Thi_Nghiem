# Học liệu tương tác Sinh học Aiducation

Repository chứa các bài học HTML tương tác và thí nghiệm Sinh học THPT cho lớp 10, 11 và lớp 12 trong tương lai. Mỗi bài học hoặc thí nghiệm được đóng gói độc lập để dễ phát triển, kiểm tra và nhúng vào trang mẹ.

## Quy tắc bắt buộc

Trước khi sửa hoặc tạo code, phải đọc đầy đủ:

1. [`Rule_Design_Sinh.md`](Rule_Design_Sinh.md)
2. [`Rule_Thiet_Ke_Chung.md`](Rule_Thiet_Ke_Chung.md)
3. Hai file kịch bản trong module đang làm.

Quy tắc này cũng được khai báo trong `AGENTS.md`, `.agents/rules/read-design.md` và hook `.claude/settings.json`.

## Cấu trúc

```text
.
├── AGENTS.md
├── README.md
├── Rule_Design_Sinh.md
├── Rule_Thiet_Ke_Chung.md
├── shells/
│   └── GIAODIEN_SH10_V10.html
├── modules/
    ├── Lop_10/
    │   ├── SH10_B01_M02/
    │   ├── SH10_B02_M02/
    │   └── SH10_B02_M03/
    ├── Lop_11/
    └── Lop_12/
└── experiments/
    ├── Lop_10/
    ├── Lop_11/
    │   └── SH11_B05_M03/
    └── Lop_12/
```

Mỗi bài học trong `modules/` hoặc thí nghiệm trong `experiments/` có cấu trúc:

```text
<MA_MODULE>/
├── <MA_MODULE>.html
├── <TEN_GOC_KICH_BAN_NOI_DUNG>.txt
├── <TEN_GOC_KICH_BAN_TAO_ANH>.md
└── images/
    └── <MA_MODULE>-A01.png
```

Tên hai file kịch bản được giữ nguyên như lúc đưa vào dự án. Thí nghiệm có nhiều phần được phép có nhiều HTML, như `SH11_B05_M03`.

## Bài học hiện có

| Lớp | Module | Nội dung | HTML |
|---|---|---|---|
| 10 | `SH10_B01_M02` | Vai trò và ứng dụng của Sinh học | `modules/Lop_10/SH10_B01_M02/SH10_B01_M02.html` |
| 10 | `SH10_B02_M02` | Thiết bị nghiên cứu và học tập môn Sinh học | `modules/Lop_10/SH10_B02_M02/SH10_B02_M02.html` |
| 10 | `SH10_B02_M03` | Quy trình nghiên cứu khoa học và xử lí dữ liệu | `modules/Lop_10/SH10_B02_M03/SH10_B02_M03.html` |

## Thí nghiệm hiện có

| Lớp | Thí nghiệm | Nội dung | HTML |
|---|---|---|---|
| 11 | `SH11_B05_M03` | Sự hình thành tinh bột trong quang hợp | `experiments/Lop_11/SH11_B05_M03/` — 3 HTML P1–P3 |

### Tên kịch bản hiện có

| Module | Kịch bản nội dung | Kịch bản tạo ảnh |
|---|---|---|
| `SH10_B01_M02` | `SH10_B01_M02_KICH_BAN_NOI_DUNG.txt` | `Kich_Ban_Tao_Anh_AI_SH10_B01_M02.md` |
| `SH10_B02_M02` | `SH10_B02_M02_HTML_HOC_LI_THUYET_v2.0.txt` | `Kich_Ban_Tao_Anh_AI_SH10_B02_M02.md` |
| `SH10_B02_M03` | `SH10_B02_M03_HTML_HOC_LI_THUYET_v2.0.txt` | `Kich_Ban_Tao_Anh_AI_SH10_B03_M02.md` |
| `SH11_B05_M03` (thí nghiệm) | `SH11_B05_M03_KICH_BAN_NOI_DUNG.txt` | `Kich_Ban_Tao_Anh_AI_SH11-B05-M03.md` |

## Thêm module lớp 12

Tạo thư mục:

```text
modules/Lop_12/SH12_Bxx_Mxx/
```

Sau đó thêm HTML, hai file kịch bản giữ nguyên tên được bàn giao và `images/` theo đúng cấu trúc module. Không dùng lại mã ảnh hoặc mã LMS của module khác.

Thí nghiệm lớp 12 đặt tại:

```text
experiments/Lop_12/SH12_Bxx_Mxx/
```

Trang mẹ trong `shells/` có thể nhúng đồng thời bài học từ `modules/` và thí nghiệm từ `experiments/`.

## Chạy thử

Mở repository bằng VS Code và chạy Live Server ở thư mục gốc. Cấu hình hiện dùng cổng `5503`.

- Trang mẹ lớp 10: `shells/GIAODIEN_SH10_V10.html`
- Bài học hoặc thí nghiệm độc lập: mở trực tiếp HTML trong thư mục tương ứng.
