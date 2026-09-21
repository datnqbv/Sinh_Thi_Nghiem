Nội dung này là SH10_B08_M05-HTML, đã hết phần HTML của module.

ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC.

SH10_B08_M05 — Thành tế bào, Lông và roi, Chất nền ngoại bào, Mối nối giữa các tế bào
Phiên bản: v2 FINAL
Ngày biên tập: 02/08/2026
**Yêu cầu cần đạt (nguyên văn):** "Dựa vào sơ đồ, hình ảnh, phân biệt được cấu tạo tế bào động vật và tế bào thực vật. Trình bày được cấu tạo và chức năng của thành tế bào, chất nền ngoại bào, mối nối giữa các tế bào."
**Câu hỏi nghiên cứu:** Điều gì quy định hình dạng cứng cáp của tế bào thực vật? Các tế bào trong cùng 1 mô liên kết và giao tiếp với nhau bằng cách nào?
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
PRODUCTION-GATE: PASSED Ở CẤP KỊCH BẢN; ASSET/CODE CHỈ ĐƯỢC ĐÁNH DẤU ĐẠT SAU KHI SẢN XUẤT VÀ KIỂM THỬ.

## STAGE S01 — Thành tế bào: cellulose và chitin

### HS_VIEW
- Tiêu đề màn: Vì sao cây đứng vững mà không cần xương?
- Box lời giảng: "Thành tế bào có ở tế bào thực vật và nấm, không có ở tế bào động vật. Ở thực vật, thành tế bào cấu tạo chủ yếu từ cellulose. Ở nấm, thành tế bào cấu tạo chủ yếu từ chitin. Thành tế bào có vai trò quy định hình dạng tế bào và bảo vệ tế bào."
- Text/nhãn hiển thị: "Thành tế bào — Cellulose (thực vật)", "Thành tế bào — Chitin (nấm)"
- Hình học sinh khai thác: Thành tế bào thực vật (cellulose) và thành tế bào nấm (chitin) đối chiếu — đúng theo Hình 8.13 SGK; đối chiếu với tế bào động vật không có thành tế bào
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ 3 loại; ghép đúng: "Thực vật" ↔ "Cellulose"; "Nấm" ↔ "Chitin"; "Động vật" ↔ "Không có thành tế bào"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, ghép đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. ghép đúng như trên Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Chưa đúng — thực vật dùng CELLULOSE, nấm dùng CHITIN, còn động vật KHÔNG CÓ thành tế bào. Ghép lại."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu tạo-chức năng thành tế bào ở thực vật (cellulose) và nấm (chitin)
- Kiến thức khóa: thành tế bào có ở thực vật (cellulose)/nấm (chitin), KHÔNG có ở động vật; vai trò quy định hình dạng và bảo vệ
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: xếp dọc
- Asset tham chiếu: SGK trang 56, Hình 8.13 "Thành tế bào thực vật (a) và thành tế bào nấm (b)" — cần asset chính xác (mã tạm: `SH10-B08-M05-A01` thành tế bào thực vật, `A02` thành tế bào nấm)
- Đối tượng/lớp hình: thành tế bào thực vật (A01), thành tế bào nấm (A02), tế bào động vật không thành (đối chiếu)
- Quan hệ khoa học và hình học: 3 loại tế bào (thực vật, nấm, động vật) xếp ngang hàng để đối chiếu có/không thành tế bào
- Trạng thái đầu: 3 tế bào hiện, chưa phân biệt
- Trình tự/trạng thái trung gian: bấm từng loại để xem chi tiết thành phần (cellulose/chitin/không có)
- Trạng thái cuối: đã xem đủ 3 loại
- Timeline: phóng to 300ms khi bấm
- Đáp án/điều kiện đúng: ghép đúng như trên
- Điều kiện sai: ghép sai bất kỳ cặp nào (ví dụ nấm-cellulose)
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ thành tế bào ở tế bào động vật; chuyển Stage khi xem đủ và ghép đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S02 — Lông và roi ở tế bào nhân thực

### HS_VIEW
- Tiêu đề màn: Cùng tên gọi, khác bản chất — lông/roi nhân thực và nhân sơ
- Box lời giảng: "Lông và roi ở tế bào nhân thực được cấu tạo từ vi ống và có màng bao bọc — khác với roi vi khuẩn cấu tạo chủ yếu từ protein flagellin và không được màng sinh chất bao bọc; các cấu trúc bề mặt của vi khuẩn khác về nguồn gốc và cấu trúc so với lông, roi nhân thực. Ví dụ: tinh trùng có một roi giúp di chuyển. Tế bào biểu mô đường hô hấp có nhiều lông giúp đẩy chất nhầy và bụi bẩn ra ngoài."
- Text/nhãn hiển thị: "Lông/roi nhân thực — vi ống, có màng"
- Hình học sinh khai thác: Roi tinh trùng và lông biểu mô hô hấp với cấu trúc vi ống có màng bao — đúng theo Hình 8.14 SGK, đối chiếu với lông/roi nhân sơ đã học
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; chọn đáp án câu hỏi "Điểm khác biệt chính giữa lông/roi nhân thực và nhân sơ là gì?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Nhân thực: vi ống + có màng bao; Nhân sơ: cấu trúc protein khác, không có màng bao" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — đây là 2 cấu trúc khác nhau về THÀNH PHẦN (vi ống vs protein) và có/không CÓ MÀNG BAO — dù tên gọi giống nhau (lông, roi)."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Phân biệt lông/roi ở tế bào nhân thực với lông/roi ở tế bào nhân sơ đã học ở Bài 7
- Kiến thức khóa: lông/roi nhân thực: cấu tạo từ vi ống, CÓ màng bao bọc (khác nhân sơ: protein, KHÔNG màng); ví dụ tinh trùng (roi), biểu mô hô hấp (lông)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 57, Hình 8.14 "Cấu trúc roi và lông của tế bào nhân thực" — cần asset chính xác (mã tạm: `SH10-B08-M05-A03` roi tinh trùng, `A04` lông biểu mô hô hấp)
- Đối tượng/lớp hình: roi tinh trùng (A03), lông biểu mô hô hấp (A04), đối chiếu lông/roi nhân sơ (tham chiếu Bài 7)
- Quan hệ khoa học và hình học: roi/lông nhân thực phải có đường viền màng bao quanh rõ ràng — khác lông/roi nhân sơ không có viền màng
- Trạng thái đầu: roi tinh trùng và lông biểu mô hiện
- Trình tự/trạng thái trung gian: bấm để phóng to xem cấu trúc vi ống + màng bao
- Trạng thái cuối: đã xem đủ, đã so sánh với nhân sơ
- Timeline: phóng to 300ms
- Đáp án/điều kiện đúng: "Nhân thực: vi ống + có màng bao; Nhân sơ: cấu trúc protein khác, không có màng bao"
- Điều kiện sai: "Không có khác biệt gì, cả 2 giống hệt nhau"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ lông/roi nhân thực thiếu màng bao; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S03 — Chất nền ngoại bào

### HS_VIEW
- Tiêu đề màn: "Chất keo" gắn kết các tế bào động vật thành mô
- Box lời giảng: "Chất nền ngoại bào nằm bên ngoài màng tế bào của tế bào động vật, cấu tạo chủ yếu từ glycoprotein — chủ yếu là collagen — kết hợp với các chất vô cơ và hữu cơ khác. Chất nền ngoại bào giúp các tế bào liên kết với nhau tạo nên các mô nhất định, đồng thời thu nhận thông tin để truyền vào bên trong tế bào."
- Text/nhãn hiển thị: "Chất nền ngoại bào — Collagen"
- Hình học sinh khai thác: Chất nền ngoại bào với các sợi collagen bao quanh nhiều tế bào động vật — đúng theo Hình 8.15 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh; chọn đáp án câu hỏi "Chất nền ngoại bào của động vật có phải là thành tế bào thực vật không?"
- Dấu hiệu hệ thống đã ghi nhận: xem hoạt cảnh, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không — chất nền ngoại bào của động vật khác về cấu trúc và chức năng với thành tế bào thực vật" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — chất nền ngoại bào và thành tế bào là 2 cấu trúc HOÀN TOÀN KHÁC NHAU, thuộc 2 nhóm sinh vật khác nhau (chất nền ngoại bào ở động vật; thành tế bào ở thực vật/nấm)."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu tạo-chức năng chất nền ngoại bào
- Kiến thức khóa: chất nền ngoại bào ở NGOÀI màng tế bào ĐỘNG VẬT, cấu tạo glycoprotein (chủ yếu collagen); chức năng liên kết tế bào thành mô, thu nhận thông tin
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 57, Hình 8.15 "Chất nền ngoại bào" — cần asset chính xác (mã tạm: `SH10-B08-M05-A05`)
- Đối tượng/lớp hình: nhiều tế bào động vật với lưới collagen bao quanh liên kết (A05)
- Quan hệ khoa học và hình học: collagen dạng sợi bao quanh và kết nối nhiều tế bào thành cụm mô
- Trạng thái đầu: nhiều tế bào rời rạc hiện, chưa có chất nền ngoại bào
- Trình tự/trạng thái trung gian: bấm "Hình thành mô" để xem chất nền ngoại bào xuất hiện liên kết các tế bào
- Trạng thái cuối: các tế bào đã liên kết thành mô nhờ chất nền ngoại bào
- Timeline: sợi collagen hình thành dần bao quanh các tế bào (1,5 giây)
- Đáp án/điều kiện đúng: "Không — chất nền ngoại bào của động vật khác về cấu trúc và chức năng với thành tế bào thực vật"
- Điều kiện sai: "Có, giống hệt thành tế bào thực vật"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ chất nền ngoại bào ở tế bào thực vật; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S04 — Mối nối tế bào: kín và hở

### HS_VIEW
- Tiêu đề màn: Hai kiểu "cửa khẩu" giữa các tế bào láng giềng
- Box lời giảng: "Giữa các tế bào có các kiểu mối nối khác nhau. Mối nối kín là kiểu các tế bào liên kết chặt chẽ với nhau, ngăn cách dịch mô — ví dụ, các tế bào ruột non liên kết với nhau bằng mối nối kín để ngăn không cho các chất trong lòng ruột lọt qua khoảng gian bào. Mối nối hở tạo ra cầu nối trực tiếp giữa bào tương của hai tế bào liền kề, cho phép các ion và phân tử nhỏ di chuyển trực tiếp giữa các tế bào mà không cần đi qua dịch mô."
- Text/nhãn hiển thị: "Mối nối kín", "Mối nối hở"
- Hình học sinh khai thác: Mối nối kín (tế bào ruột non khít chặt) và mối nối hở (cầu nối bào tương giữa 2 tế bào) — đúng theo Hình 8.16 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; ghép đúng: "Mối nối kín" ↔ "Tế bào ruột non, ngăn chất lọt qua khoảng gian bào"; "Mối nối hở" ↔ "Cho ion/phân tử nhỏ di chuyển trực tiếp giữa 2 tế bào"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, ghép đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. ghép đúng như trên Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Chưa đúng — mối nối KÍN có chức năng NGĂN CÁCH (như ở ruột non); mối nối HỞ có chức năng CHO PHÉP chất đi qua trực tiếp. Ghép lại."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Phân biệt mối nối kín và mối nối hở giữa các tế bào
- Kiến thức khóa: mối nối kín — ngăn cách chặt, không cho chất qua khoảng gian bào (ví dụ ruột non); mối nối hở — cầu nối bào tương trực tiếp, cho ion/phân tử nhỏ qua giữa 2 tế bào
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: xếp dọc
- Asset tham chiếu: SGK trang 57, Hình 8.16 "Mối nối kín và mối nối hở giữa các tế bào" — cần asset chính xác (mã tạm: `SH10-B08-M05-A06` mối nối kín, `A07` mối nối hở)
- Đối tượng/lớp hình: mối nối kín (A06), mối nối hở (A07)
- Quan hệ khoa học và hình học: 2 loại mối nối đặt cạnh nhau để đối chiếu
- Trạng thái đầu: 2 loại mối nối hiện tĩnh
- Trình tự/trạng thái trung gian: bấm "Thử chất đi qua" ở mỗi loại để xem: mối nối kín chặn chất lại; mối nối hở cho chất đi qua trực tiếp
- Trạng thái cuối: đã xem đủ cả 2 loại
- Timeline: chất thử di chuyển và bị chặn/đi qua tương ứng (1 giây)
- Đáp án/điều kiện đúng: ghép đúng như trên
- Điều kiện sai: ghép ngược 2 cặp
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ 2 loại mối nối giống nhau về cấu trúc; chuyển Stage khi xem đủ và ghép đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S05 — Tổng kết toàn Bài 8: tế bào động vật và thực vật

### HS_VIEW
- Tiêu đề màn: Bức tranh hoàn chỉnh: tế bào động vật và tế bào thực vật
- Box lời giảng: "Chúng ta đã hoàn thành hành trình khám phá tế bào nhân thực qua toàn bộ Bài 8 — từ nhân, hệ thống nội màng, ti thể và lục lạp, khung xương tế bào, màng tế bào, đến thành tế bào, chất nền ngoại bào và mối nối giữa các tế bào. Hãy cùng tổng kết lại: đâu là những đặc điểm đặc trưng ở tế bào thực vật, đâu là những cấu trúc điển hình ở tế bào động vật, và đâu là những thành phần chung của cả hai."
- Text/nhãn hiển thị: "Chỉ ở thực vật", "Chỉ ở động vật", "Cả hai"
- Hình học sinh khai thác: Sơ đồ tổng hợp Hình 8.1 (đã dùng ở M1) với đầy đủ nhãn tên và phân loại "chỉ thực vật / chỉ động vật / cả hai"
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xếp đúng: "Đặc trưng ở tế bào thực vật" (thành tế bào cellulose, lục lạp, không bào trung tâm lớn); "Điển hình ở tế bào động vật" (trung thể có cặp trung tử, lysosome, chất nền ngoại bào); "Cả hai" (nhân, ti thể, ER, Golgi, ribosome, khung xương, màng tế bào, peroxysome)
- Dấu hiệu hệ thống đã ghi nhận: xếp đúng toàn bộ — hoàn thành Bài 8
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. xếp đúng toàn bộ theo đúng khóa khoa học đã học xuyên suốt Bài 8 Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Chưa đúng — hãy nhớ lại nội dung đã học về [tên bào quan] ở module trước và xếp lại đúng cột."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Tổng hợp toàn bộ Bài 8 — phân biệt đầy đủ tế bào động vật và tế bào thực vật dựa trên tất cả bào quan đã học
- Kiến thức khóa: tổng hợp: thành tế bào cellulose/lục lạp/không bào trung tâm lớn (đặc trưng ở thực vật); trung thể có cặp trung tử/lysosome/chất nền ngoại bào (điển hình ở động vật); các bào quan chung (nhân, ti thể, ER, Golgi, ribosome, khung xương, màng tế bào)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: dùng bấm chọn tuần tự thay kéo-thả, cuộn dọc nếu cần
- Asset tham chiếu: tái sử dụng A02 (Hình 8.1, từ M1) — ảnh gốc hệ thống dùng xuyên suốt cả bài
- Đối tượng/lớp hình: toàn bộ các bào quan đã học (tái sử dụng từ M1-M5)
- Quan hệ khoa học và hình học: giữ đúng theo Hình 8.1 gốc
- Trạng thái đầu: danh sách bào quan xáo trộn, 3 cột phân loại trống
- Trình tự/trạng thái trung gian: học sinh kéo/bấm chọn xếp từng bào quan vào đúng cột
- Trạng thái cuối: đã phân loại đúng toàn bộ
- Timeline: mỗi bào quan sáng xanh khi xếp đúng cột
- Đáp án/điều kiện đúng: xếp đúng toàn bộ theo đúng khóa khoa học đã học xuyên suốt Bài 8
- Điều kiện sai: xếp sai bất kỳ bào quan nào vào cột không đúng
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không chấp nhận xếp sai; hoàn thành module (và toàn Bài 8) khi xếp đúng hoàn toàn
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.