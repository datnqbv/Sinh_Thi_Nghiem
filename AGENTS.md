# Hướng dẫn bắt buộc cho AI

Các quy tắc trong file này áp dụng cho toàn bộ repository.

## Kiểm tra bắt buộc trước khi sửa

Trước mọi thao tác viết mới, chỉnh sửa hoặc refactor code, AI phải:

1. Đọc đầy đủ `Rule_Design_Sinh.md`.
2. Đọc đầy đủ `Rule_Thiet_Ke_Chung.md`.
3. Đọc file kịch bản nội dung và file kịch bản tạo ảnh mang tên gốc trong thư mục bài học hoặc thí nghiệm liên quan. Không giả định hai file này đã được đổi tên chuẩn hóa.
4. So sánh yêu cầu của người dùng với quy chuẩn và kịch bản.
5. Chỉ bắt đầu sửa sau khi hoàn thành bốn bước trên.

Không được bỏ qua hai file rule vì thay đổi nhỏ. Nếu kịch bản quy định nội dung, câu chữ hoặc logic sư phạm cụ thể thì kịch bản là nguồn chuẩn cho phần nội dung; hai file rule là nguồn chuẩn cho thiết kế, kỹ thuật, responsive, LMS/Athena và khả năng tiếp cận.

## Cấu trúc repository

- `modules/Lop_10/<MA_MODULE>/`: module lớp 10.
- `modules/Lop_11/<MA_MODULE>/`: module lớp 11.
- `modules/Lop_12/<MA_MODULE>/`: module lớp 12 trong tương lai.
- `experiments/Lop_10/<MA_THI_NGHIEM>/`: thí nghiệm lớp 10.
- `experiments/Lop_11/<MA_THI_NGHIEM>/`: thí nghiệm lớp 11.
- `experiments/Lop_12/<MA_THI_NGHIEM>/`: thí nghiệm lớp 12 trong tương lai.
- `shells/`: trang mẹ nhúng bài học từ `modules/` và thí nghiệm từ `experiments/`.
- Mỗi bài học hoặc thí nghiệm chứa HTML, các file kịch bản giữ nguyên tên gốc và thư mục `images/`.

Không đặt bài học, thí nghiệm hoặc ảnh mới trực tiếp ở thư mục gốc.

## Nguyên tắc thay đổi

- Giữ mã module nhất quán ở tên thư mục, tên HTML, Athena manifest và LMS state.
- Giữ nguyên tên gốc của file kịch bản nội dung và kịch bản tạo ảnh, trừ khi người dùng yêu cầu đổi tên.
- Bài học lý thuyết đặt trong `modules/`; thí nghiệm Sinh học đặt trong `experiments/`; không trộn hai loại.
- Không đổi URL ảnh online của người dùng nếu không được yêu cầu.
- Khi di chuyển file, cập nhật và kiểm tra tất cả đường dẫn iframe/ảnh liên quan.
- Không dùng `localStorage`, `sessionStorage` hoặc cookie.
- HTML bàn giao phải tiếp tục chạy độc lập, không có build step bắt buộc.
