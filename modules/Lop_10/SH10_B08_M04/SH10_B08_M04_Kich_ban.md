Nội dung này là SH10_B08_M04-HTML, đã hết phần HTML của module.

ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC.

SH10_B08_M04 — Tế bào chất, khung xương tế bào, Trung thể và Màng tế bào
Phiên bản: v2 FINAL
Ngày biên tập: 02/08/2026
**Yêu cầu cần đạt (nguyên văn):** "Nêu được cấu tạo và chức năng của tế bào chất. Phân tích được mối quan hệ phù hợp giữa cấu tạo và chức năng của màng sinh chất." (phần tế bào chất, khung xương, trung thể, màng tế bào)
**Câu hỏi nghiên cứu:** Điều gì nâng đỡ và duy trì hình dạng cho tế bào, và màng tế bào có cấu trúc như thế nào để vừa là "ranh giới" vừa là "cửa khẩu" của tế bào?
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
PRODUCTION-GATE: PASSED Ở CẤP KỊCH BẢN; ASSET/CODE CHỈ ĐƯỢC ĐÁNH DẤU ĐẠT SAU KHI SẢN XUẤT VÀ KIỂM THỬ.

## STAGE S01 — Tế bào chất: bào tương và khung xương

### HS_VIEW
- Tiêu đề màn: Không gian làm việc chung của tế bào
- Box lời giảng: "Tế bào chất là nơi diễn ra các hoạt động sống của tế bào. Tế bào chất gồm bào tương và các bào quan khác. Bào tương là vật chất dạng keo có thành phần chủ yếu là nước và các phân tử sinh học. Ngoài các bào quan, trong bào tương còn có mạng lưới các protein liên kết với nhau hình thành nên bộ khung của tế bào giống như bộ xương của cơ thể người."
- Text/nhãn hiển thị: "Bào tương", "Bộ khung xương tế bào"
- Hình học sinh khai thác: Tế bào chất với bào tương và mạng lưới protein (khung xương) rải rác — đúng theo Hình 8.10 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; chọn đáp án câu hỏi "Bộ khung xương tế bào được ví như bộ phận nào của cơ thể người?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Bộ xương" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — SGK ví bộ khung xương tế bào giống BỘ XƯƠNG của cơ thể người, vì vai trò nâng đỡ và duy trì hình dạng."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu tạo tế bào chất (bào tương + bào quan + khung xương)
- Kiến thức khóa: tế bào chất = bào tương (dạng keo) + bào quan + mạng lưới protein (khung xương)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 54, Mục 10.a "Tế bào chất" — tái sử dụng A02 (Hình 8.1 từ M1), bổ sung chi tiết (mã tạm: `SH10-B08-M04-A01`)
- Đối tượng/lớp hình: bào tương, mạng lưới khung xương (A01)
- Quan hệ khoa học và hình học: khung xương rải khắp tế bào chất, kết nối các bào quan
- Trạng thái đầu: tế bào chất hiện, chưa làm nổi bật khung xương
- Trình tự/trạng thái trung gian: bấm để làm nổi bật mạng lưới khung xương
- Trạng thái cuối: đã xem đủ, phân biệt được bào tương/khung xương
- Timeline: khung xương sáng lên 300ms khi bấm
- Đáp án/điều kiện đúng: "Bộ xương"
- Điều kiện sai: "Hệ tuần hoàn" hoặc "Hệ thần kinh"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ khung xương dạng khối đặc; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S02 — Khung xương tế bào: vai trò và liên hệ bệnh lý

### HS_VIEW
- Tiêu đề màn: Khi bộ khung xương tế bào bị tổn thương
- Box lời giảng: "Bộ khung xương tế bào là hệ thống mạng vi sợi, sợi trung gian và vi ống kết nối với nhau. Vai trò chính của bộ khung xương tế bào là nâng đỡ, duy trì hình dạng tế bào, neo giữ bào quan và các enzyme, hình thành nên trung thể có vai trò trong quá trình phân bào, hỗ trợ các bộ phận hay cả tế bào di chuyển. Nếu bộ khung xương tế bào bị tổn thương sẽ dẫn đến nhiều bệnh nguy hiểm. Ví dụ: nếu các tế bào xương, cơ tim thiếu một loại protein của bộ khung xương tế bào, chúng sẽ bị thoái hóa và có thể gây ra các bệnh hiểm nghèo. Các tế bào hồng cầu, nếu bị tổn thương bộ khung xương tế bào sẽ không còn giữ được hình dạng tối ưu, dẫn đến giảm khả năng vận chuyển oxygen."
- Text/nhãn hiển thị: "Vi ống", "Sợi trung gian", "Vi sợi"
- Hình học sinh khai thác: 3 loại sợi (vi ống, sợi trung gian, vi sợi) kết nối nhau — đúng theo Hình 8.10 SGK; tế bào hồng cầu bình thường (hình đĩa lõm 2 mặt) và tế bào hồng cầu tổn thương khung xương (biến dạng)
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; chọn đáp án câu hỏi "Hồng cầu tổn thương khung xương tế bào ảnh hưởng đến chức năng gì?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Giảm khả năng vận chuyển oxygen" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — theo nội dung vừa học, tổn thương khung xương tế bào ở hồng cầu làm MẤT HÌNH DẠNG TỐI ƯU, dẫn đến GIẢM KHẢ NĂNG VẬN CHUYỂN OXYGEN, không liên quan trực tiếp đến tổng hợp protein."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc 3 loại sợi và vai trò khung xương; liên hệ bệnh lý thực tiễn
- Kiến thức khóa: khung xương = vi ống + sợi trung gian + vi sợi; vai trò nâng đỡ/neo giữ/di chuyển; tổn thương gây bệnh (xương/cơ tim thoái hóa; hồng cầu mất hình dạng, giảm vận chuyển oxygen)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: xếp dọc
- Asset tham chiếu: SGK trang 54, Hình 8.10 "Bộ khung xương tế bào" — cần asset chính xác (mã tạm: `SH10-B08-M04-A02` 3 loại sợi, `A03` hồng cầu bình thường/tổn thương)
- Đối tượng/lớp hình: vi ống, sợi trung gian, vi sợi (A02); hồng cầu bình thường và tổn thương (A03)
- Quan hệ khoa học và hình học: 3 loại sợi kết nối thành mạng lưới, độ dày khác biệt rõ theo thứ tự vi ống>sợi trung gian>vi sợi
- Trạng thái đầu: 3 loại sợi hiện tách biệt
- Trình tự/trạng thái trung gian: bấm từng loại sợi để xem tên; sau đó bấm "Hồng cầu tổn thương" để xem hoạt cảnh biến dạng
- Trạng thái cuối: đã xem đủ 3 loại sợi và hoạt cảnh hồng cầu
- Timeline: hồng cầu biến dạng dần khi khung xương "tổn thương" (1 giây)
- Đáp án/điều kiện đúng: "Giảm khả năng vận chuyển oxygen"
- Điều kiện sai: "Mất khả năng tổng hợp protein"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ 3 loại sợi cùng độ dày; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S03 — Trung thể: tổ chức vi ống cho phân bào

### HS_VIEW
- Tiêu đề màn: Hai "cột ăng-ten" vuông góc điều khiển phân chia tế bào
- Box lời giảng: "Trung thể là nơi lắp ráp và tổ chức của các vi ống trong tế bào động vật. Trung thể gồm hai trung tử nằm vuông góc với nhau. Trung tử gồm nhiều bộ ba vi ống xếp thành vòng. Trung thể là bào quan hình thành nên thoi phân bào giúp nhiễm sắc thể di chuyển khi tế bào phân chia. Tế bào thực vật bậc cao không có trung thể kiểu chứa cặp trung tử nhưng vẫn có trung tâm tổ chức vi ống để hình thành thoi phân bào."
- Text/nhãn hiển thị: "Trung thể", "Trung tử"
- Hình học sinh khai thác: Trung thể với 2 trung tử vuông góc, mỗi trung tử có cấu trúc vòng gồm nhiều bộ ba vi ống
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh; chọn đáp án câu hỏi "Tế bào thực vật có trung thể không?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không — nhưng vẫn có tổ chức vi ống tạo thoi phân bào" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "có trung thể" → "Không đúng — trung thể có cặp trung tử là cấu trúc điển hình ở nhiều tế bào động vật; thực vật bậc cao không có trung thể kiểu này nhưng vẫn tổ chức được thoi phân bào."; "không có thoi phân bào" → "Không đúng — dù không có trung thể, tế bào thực vật/nấm VẪN CÓ tổ chức vi ống tạo thoi phân bào theo cách khác."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc trung thể và vai trò trong phân bào; biết thực vật/nấm không có trung thể
- Kiến thức khóa: trung thể = 2 trung tử vuông góc, mỗi trung tử nhiều bộ ba vi ống xếp vòng; vai trò hình thành thoi phân bào; CHỈ ở tế bào động vật (thực vật/nấm không có nhưng vẫn có tổ chức vi ống tạo thoi phân bào)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 54, Mục 10.c "Trung thể" — cần asset chính xác (mã tạm: `SH10-B08-M04-A04`)
- Đối tượng/lớp hình: 2 trung tử vuông góc (A04), hoạt cảnh thoi phân bào
- Quan hệ khoa học và hình học: 2 trung tử tạo góc 90 độ chính xác
- Trạng thái đầu: trung thể hiện tĩnh
- Trình tự/trạng thái trung gian: bấm "Phân bào" để xem hoạt cảnh trung thể tổ chức thoi phân bào kéo NST
- Trạng thái cuối: đã xem hoạt cảnh phân bào đơn giản hóa
- Timeline: thoi phân bào hình thành từ trung thể, kéo NST về 2 cực (1,5 giây)
- Đáp án/điều kiện đúng: "Không — nhưng vẫn có tổ chức vi ống tạo thoi phân bào"
- Điều kiện sai: "Có, giống hệt tế bào động vật" hoặc "Không, và cũng không có thoi phân bào"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ 2 trung tử song song; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S04 — Màng tế bào: mô hình khảm động

### HS_VIEW
- Tiêu đề màn: 1972 — mô hình thay đổi cách hiểu về màng tế bào
- Box lời giảng: "Năm một nghìn chín trăm bảy mươi hai, hai nhà khoa học là Seymour Jonathan Singer và Garth Nicolson đã đưa ra mô hình cấu trúc màng tế bào được gọi là mô hình khảm lỏng, khảm động. Theo mô hình này, màng tế bào được cấu tạo từ thành phần chính là lớp kép phospholipid và các loại protein. Các phân tử phospholipid được giữ với nhau tạo nên lớp màng nhờ các tương tác kị nước giữa các phân tử. Do vậy, phân tử phospholipid trong cùng lớp không cố định tại một vị trí mà luôn di chuyển. Ước tính một phân tử phospholipid di chuyển từ đầu này tới đầu kia của một tế bào mất khoảng một giây. Lớp kép phospholipid có cấu trúc lỏng lẻo. Nhờ đó, các phân tử protein màng dễ dàng di chuyển và tế bào cũng dễ dàng biến đổi hình dạng khi cần."
- Text/nhãn hiển thị: "Mô hình khảm động"
- Hình học sinh khai thác: Mô hình khảm động với lớp kép phospholipid và các protein "trôi nổi" — đúng theo Hình 8.11 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ chuyển động; chọn đáp án câu hỏi "Phân tử phospholipid trong màng có cố định vị trí không?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không — luôn di chuyển" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — đây chính là bản chất của mô hình 'khảm ĐỘNG': phospholipid chủ yếu chuyển động ngang trong cùng lớp màng; chúng không bị cố định tuyệt đối. Đây là điểm hiểu sai phổ biến cần tránh."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết mô hình khảm động và tính linh động của lớp kép phospholipid
- Kiến thức khóa: mô hình khảm động (Singer-Nicolson 1972); phospholipid không cố định vị trí, luôn di chuyển (~1 giây/tế bào); cấu trúc lỏng lẻo → protein di chuyển dễ, tế bào dễ biến hình
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 55, Hình 8.11 "Mô hình màng tế bào với cấu trúc khảm động" — cần asset chính xác (mã tạm: `SH10-B08-M04-A05`)
- Đối tượng/lớp hình: lớp kép phospholipid, các protein màng (dạng khảm), cholesterol (A05)
- Quan hệ khoa học và hình học: protein "khảm" rải rác không đều trong lớp kép, không xếp thành hàng cố định
- Trạng thái đầu: màng tế bào hiện tĩnh (chưa chuyển động)
- Trình tự/trạng thái trung gian: bấm "Kích hoạt chuyển động" để xem phospholipid và protein di chuyển ngang liên tục
- Trạng thái cuối: đã xem chuyển động liên tục đủ lâu để hiểu tính "động"
- Timeline: phospholipid/protein di chuyển ngang ngẫu nhiên, liên tục (2-3 giây lặp)
- Đáp án/điều kiện đúng: "Không — luôn di chuyển"
- Điều kiện sai: "Có, cố định hoàn toàn tại 1 vị trí"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ màng đứng yên hoàn toàn (mất ý nghĩa "khảm động"); chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S05 — Điều chỉnh độ linh hoạt của màng

### HS_VIEW
- Tiêu đề màn: Cá sống ở Nam Cực và cá nhiệt đới — màng tế bào khác nhau thế nào?
- Box lời giảng: "Tế bào có thể điều chỉnh độ linh hoạt của màng sinh chất bằng cách chèn thêm các phân tử cholesterol — ở tế bào động vật — và sterol — ở tế bào thực vật — vào giữa lớp kép phospholipid, cũng như thay đổi thành phần của các acid béo trong phân tử phospholipid. Nhiệt độ cũng ảnh hưởng tới mức độ ổn định của màng tế bào. Vì vậy, nhiều sinh vật thay đổi thành phần lipid của màng nhằm đảm bảo cho màng tế bào vẫn hoạt động bình thường trong điều kiện nhiệt độ môi trường bị thay đổi."
- Text/nhãn hiển thị: "Cholesterol/Sterol", "Nhiệt độ"
- Hình học sinh khai thác: Màng tế bào với cholesterol chèn giữa lớp kép, đối chiếu giữa môi trường lạnh và nóng
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: đọc đủ nội dung; chọn đáp án câu hỏi về cá "Cá Nam Cực có xu hướng dùng loại acid béo nào nhiều hơn để màng không bị 'đông cứng' trong nước lạnh?"
- Dấu hiệu hệ thống đã ghi nhận: đọc đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Acid béo không no (không bão hòa) — giúp màng giữ được độ linh hoạt ở nhiệt độ thấp" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — ở nhiệt độ thấp, acid béo NO (bão hòa) dễ làm màng bị đông cứng, mất tính linh hoạt. Sinh vật vùng lạnh có xu hướng tăng tỉ lệ acid béo KHÔNG NO để màng vẫn giữ được độ linh hoạt cần thiết."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Hiểu cách tế bào điều chỉnh độ linh hoạt màng qua cholesterol/sterol và thành phần acid béo
- Kiến thức khóa: cholesterol (ĐV)/sterol (TV) chèn giữa lớp kép điều chỉnh độ linh hoạt; nhiệt độ ảnh hưởng độ ổn định màng; sinh vật thay đổi lipid màng thích nghi nhiệt độ môi trường
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: xếp dọc
- Asset tham chiếu: SGK trang 55, đoạn "Tế bào có thể điều chỉnh độ linh hoạt..." — cần ảnh minh họa (mã tạm: `SH10-B08-M04-A06` cá Nam Cực/nhiệt đới)
- Đối tượng/lớp hình: màng tế bào với cholesterol (kế thừa A05), cá Nam Cực và cá nhiệt đới (A06)
- Quan hệ khoa học và hình học: cholesterol xen giữa các phân tử phospholipid
- Trạng thái đầu: câu hỏi về cá hiện trước
- Trình tự/trạng thái trung gian: học sinh đọc nội dung, xem hoạt cảnh cholesterol chèn vào màng
- Trạng thái cuối: đã đọc đủ, đã xem hoạt cảnh
- Timeline: cholesterol chèn vào giữa lớp kép (1 giây)
- Đáp án/điều kiện đúng: "Acid béo không no (không bão hòa) — giúp màng giữ được độ linh hoạt ở nhiệt độ thấp"
- Điều kiện sai: "Acid béo no (bão hòa) — vì cứng hơn nên chịu lạnh tốt hơn"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không đưa kết luận ngược (acid béo no giúp chịu lạnh); chuyển Stage khi đọc đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S06 — Protein màng: 2 loại và các chức năng

### HS_VIEW
- Tiêu đề màn: Những "hòn đảo" protein trên biển phospholipid
- Box lời giảng: "Các protein của màng sinh chất được chia thành hai loại. Protein xuyên qua lớp kép phospholipid được gọi là protein xuyên màng. Protein bám màng, hay protein ngoại vi, liên kết lỏng lẻo với một mặt của màng hoặc với protein xuyên màng; chúng không xuyên qua vùng kị nước của lớp kép. Nhiều protein màng liên kết với các phân tử đường ngắn tạo nên glycoprotein hay liên kết với lipid tạo nên lipoprotein. Protein màng có các chức năng: vận chuyển các chất qua màng; xúc tác — enzyme; cấu tạo nên thụ thể tiếp nhận các tín hiệu và truyền tin tế bào; tạo nên các đặc điểm nhận diện đặc trưng cho từng loại tế bào; một số có chức năng tạo nên các mối nối gắn kết giữa các tế bào; số khác có chức năng neo giữ, kết nối protein màng với bộ khung xương bên trong tế bào hay với mạng lưới protein bên ngoài tế bào."
- Text/nhãn hiển thị: "Protein xuyên màng", "Protein bám màng", "Vận chuyển", "Xúc tác", "Thụ thể", "Neo giữ"
- Hình học sinh khai thác: Protein xuyên màng và protein bám màng đối chiếu; 4 chức năng minh họa (vận chuyển, xúc tác, thụ thể, neo giữ) — đúng theo Hình 8.12 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; ghép đúng: "Vận chuyển chất" ↔ icon kênh protein; "Xúc tác" ↔ icon enzyme; "Thụ thể" ↔ icon nhận tín hiệu; "Neo giữ" ↔ icon kết nối khung xương
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, ghép đúng cả 4/4
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. ghép đúng như trên Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Chưa đúng — xem lại mô tả từng chức năng và ghép lại."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Phân biệt protein xuyên màng và protein bám màng; nhận biết ≥4 chức năng protein màng
- Kiến thức khóa: protein xuyên màng (qua cả lớp kép) vs protein bám màng/ngoại vi (chỉ 1 phía); glycoprotein/lipoprotein; 4 chức năng: vận chuyển, xúc tác, thụ thể, neo giữ (+ nhận diện, mối nối)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: lưới 2x2
- Asset tham chiếu: SGK trang 56, Hình 8.12 "Một số chức năng của protein màng tế bào" — cần asset chính xác (mã tạm: `SH10-B08-M04-A07` 2 loại protein, `A08` 4 chức năng)
- Đối tượng/lớp hình: protein xuyên màng, protein bám màng (A07); 4 icon chức năng (A08)
- Quan hệ khoa học và hình học: protein xuyên màng thò ra 2 phía màng; protein bám màng chỉ ở 1 phía
- Trạng thái đầu: 2 loại protein hiện, 4 thẻ chức năng đóng
- Trình tự/trạng thái trung gian: bấm phân biệt 2 loại protein; bấm từng thẻ chức năng để xem minh họa
- Trạng thái cuối: đã xem đủ 2 loại protein và 4/4 chức năng
- Timeline: mở rộng 200ms khi bấm thẻ chức năng
- Đáp án/điều kiện đúng: ghép đúng như trên
- Điều kiện sai: ghép sai bất kỳ cặp nào
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ protein bám màng xuyên cả 2 lớp (sai định nghĩa); chuyển Stage khi xem đủ và ghép đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S07 — Chức năng tổng thể màng tế bào và kết luận

### HS_VIEW
- Tiêu đề màn: Bốn nhiệm vụ lớn của "ranh giới sống"
- Box lời giảng: "Màng tế bào có chức năng quan trọng trong việc duy trì sự sống ở cấp độ tế bào. Có thể kể ra một số chức năng chính của màng như sau: ngăn cách phần tế bào chất với môi trường bên ngoài, đảm bảo cho các cấu trúc tế bào cũng như môi trường bên trong tế bào không bị ảnh hưởng bởi các yếu tố bất lợi của môi trường. Kiểm soát các chất ra vào tế bào theo cách có thể điều chỉnh số lượng, tốc độ các chất ra vào tế bào theo nhu cầu — cho phép những chất cần thiết đi vào tế bào và loại bỏ những sản phẩm trao đổi chất không sử dụng ra khỏi tế bào. Nói cách khác, màng tế bào có tính thấm chọn lọc, chỉ cho những chất nhất định ra vào tế bào. Tiếp nhận thông tin từ môi trường và truyền tín hiệu vào trong tế bào, nhờ đó tế bào có thể đưa ra các đáp ứng thích nghi với điều kiện môi trường. Quy định hình dạng tế bào phù hợp với chức năng của chúng."
- Text/nhãn hiển thị: "Ngăn cách", "Kiểm soát", "Tiếp nhận thông tin", "Quy định hình dạng"
- Hình học sinh khai thác: Màng tế bào với O2 và phân tử nhỏ không phân cực khuếch tán qua lớp lipid; nước chủ yếu đi qua kênh aquaporin; ion và phân tử lớn bị chặn hoặc cần protein vận chuyển — minh họa "thấm chọn lọc"
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ 4 thẻ; chọn đáp án câu hỏi "Màng tế bào có 'thấm chọn lọc' nghĩa là gì?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ 4/4, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Cho một số chất nhất định đi qua, không cho mọi chất đi qua tự do" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — 'thấm chọn lọc' nghĩa là màng CÓ CHO một số chất đi qua (một số phân tử nhỏ không phân cực; nước chủ yếu đi qua các kênh aquaporin) nhưng kiểm soát chặt chẽ, không phải hoàn toàn ngăn cản mọi chất."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Tổng hợp 4 chức năng chính của màng tế bào; sửa hiểu sai tổng hợp về "thấm chọn lọc"
- Kiến thức khóa: 4 chức năng: ngăn cách, kiểm soát (thấm chọn lọc), tiếp nhận thông tin, quy định hình dạng; "thấm chọn lọc" ≠ "không thấm"
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: lưới 2x2
- Asset tham chiếu: SGK trang 56, Mục 11.b "Chức năng" — cần ảnh minh họa (mã tạm: `SH10-B08-M04-A09` thấm chọn lọc)
- Đối tượng/lớp hình: màng tế bào với các phân tử qua được/không qua được (A09); 4 thẻ chức năng
- Quan hệ khoa học và hình học: phân tử nhỏ/không phân cực đi qua dễ dàng; ion/phân tử lớn bị chặn hoặc cần kênh protein riêng
- Trạng thái đầu: 4 thẻ chức năng đóng
- Trình tự/trạng thái trung gian: bấm từng thẻ để xem mô tả + minh họa
- Trạng thái cuối: đã xem đủ 4/4 chức năng
- Timeline: mở rộng 200ms khi bấm
- Đáp án/điều kiện đúng: "Cho một số chất nhất định đi qua, không cho mọi chất đi qua tự do"
- Điều kiện sai: "Hoàn toàn không cho bất kỳ chất nào đi qua"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ màng hoàn toàn không cho chất nào qua; hoàn thành module khi xem đủ 4/4 và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.