---
trigger: always_on
---

# QUY TẮC BẮT BUỘC & TIÊU CHUẨN KỸ THUẬT (BIOLOGY AI WORKFLOW)

Áp dụng bắt buộc cho mọi trợ lý AI khi sửa đổi, viết mới hoặc refactor code trong dự án học liệu số Sinh học (`SInh_Thi_Nghiem`):

## 1. Quy trình 4 bước bắt buộc trước khi code
- **Bước 1 (BẮT BUỘC):** Đọc đối chiếu các file quy chuẩn tại thư mục gốc:
  - `Rule_Design_Sinh.md`: Chuẩn thiết kế sư phạm, bảng màu Tom Haugomat, đồ họa sinh học, font chữ.
  - `Rule_Thiet_Ke_Chung.md`: Chuẩn kiến trúc trang Khung mẹ (`shells/GIAODIEN_SH10_V10.html`) và iframe con.
- **Bước 2:** Đọc file kịch bản nội dung (`*_KICH_BAN_NOI_DUNG.txt`) và kịch bản tạo ảnh (`Kich_Ban_Tao_Anh_*.md`) mang tên gốc trong thư mục module hoặc thí nghiệm đang sửa.
- **Bước 3:** So sánh yêu cầu của người dùng với hai file quy chuẩn và kịch bản.
- **Bước 4:** Chỉ sau đó mới tiến hành chỉnh sửa code.
- **KHÔNG ĐƯỢC BỎ QUA BƯỚC 1 TRONG BẤT KỲ TRƯỜNG HỢP NÀO.**

## 2. Quy định về Kiểm thử & Trình duyệt (Browser Tool)
- **TUYỆT ĐỐI KHÔNG TỰ Ý BẬT BROWSER TEST**: Không sử dụng `browser_subagent` hay mở trình duyệt tự động trừ khi người dùng có yêu cầu rõ ràng.
- **Kiểm thử cú pháp an toàn**: Luôn dùng Node.js (`vm.Script`) để kiểm tra tính toàn vẹn cú pháp HTML/JS sau mỗi lần chỉnh sửa trước khi báo cáo người dùng.

## 3. Quy chuẩn Tương tác Sinh học (Direct Manipulation)
- **Ưu tiên thao tác trực tiếp trên dụng cụ**: Học sinh tương tác bằng cách click/kéo-thả trực tiếp trên canvas (ví dụ: đặt tiêu bản lên bàn kính hiển vi, xoay ốc sơ cấp/vi cấp điều chỉnh tiêu cự, kéo ống pipet nhỏ giọt hóa chất, kéo lam kính dàn mẫu).
- **Thanh điều khiển (`controls`)**: Giữ tinh gọn, chỉ đặt các nút hành động cấp độ toàn cục (như *"Làm lại"*, *"Tự động thực hiện"*, *"Chuyển bước"*).

## 4. Kiến trúc Repository & Tích hợp Shell - Module
- **Phân định rạch ròi**:
  - `modules/`: Chứa các bài học lý thuyết tương tác.
  - `experiments/`: Chứa các thí nghiệm thực hành sinh học ảo.
  - `shells/`: Chứa trang Portal/Shell mẹ (`GIAODIEN_SH10_V10.html`) nhúng các bài học/thí nghiệm qua `iframe`.
- **Bảo toàn giao tiếp iframe**: Giữ nguyên cơ chế tự động co giãn chiều cao (`reportHeight()`, `postMessage`) để trang mẹ không bị thanh cuộn đôi (double scrollbar).
- **Không dùng lưu trữ cục bộ**: Tuyệt đối không dùng `localStorage`, `sessionStorage` hoặc `cookie`.
