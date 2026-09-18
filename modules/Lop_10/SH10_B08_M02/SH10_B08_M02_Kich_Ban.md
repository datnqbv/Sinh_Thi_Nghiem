Nội dung này là SH10_B08_M02-HTML, đã hết phần HTML của module.

ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC.

SH10_B08_M02 — Hệ thống nội màng: Ribosome, Lưới nội chất, Bộ máy Golgi, Lysosome, Không bào
Phiên bản: v2 FINAL
Ngày biên tập: 02/08/2026
**Yêu cầu cần đạt (nguyên văn):** "Phân tích được mối quan hệ giữa cấu tạo và chức năng của các bào quan trong tế bào." (phần Ribosome, Lưới nội chất, Golgi, Lysosome, Không bào)
**Câu hỏi nghiên cứu:** Một phân tử protein được tổng hợp và "xuất xưởng" ra khỏi tế bào phải đi qua những "trạm" nào?
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
PRODUCTION-GATE: PASSED Ở CẤP KỊCH BẢN; ASSET/CODE CHỈ ĐƯỢC ĐÁNH DẤU ĐẠT SAU KHI SẢN XUẤT VÀ KIỂM THỬ.

## STAGE S01 — Ribosome: "nhà máy" tổng hợp protein

### HS_VIEW
- Tiêu đề màn: Bào quan không màng nhưng bận rộn nhất
- Box lời giảng: "Ribosome là bào quan không có màng bao bọc, có dạng hình cầu, Thành phần hóa học của ribosome gồm rRNA và protein. Mỗi ribosome được tạo bởi hai tiểu đơn vị có kích thước khác nhau: tiểu đơn vị lớn và tiểu đơn vị nhỏ. Ribosome là nơi diễn ra quá trình tổng hợp protein. Ở các tế bào có tốc độ tổng hợp protein cao, số lượng ribosome trong một tế bào khá lớn, có thể lên tới vài triệu như tế bào tuyến tụy ở người."
- Text/nhãn hiển thị: "Tiểu đơn vị lớn", "Tiểu đơn vị nhỏ"
- Hình học sinh khai thác: Cấu trúc ribosome với 2 tiểu đơn vị lớn/nhỏ — đúng theo Hình 8.3 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh ghép; chọn đáp án câu hỏi "Ribosome có màng bao bọc không?"
- Dấu hiệu hệ thống đã ghi nhận: xem hoạt cảnh, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không có màng bao bọc" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — ribosome là bào quan KHÔNG CÓ MÀNG bao bọc, khác với đa số bào quan khác (ti thể, lục lạp, lysosome...) đều có màng."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc và chức năng ribosome
- Kiến thức khóa: ribosome không màng, 2 tiểu đơn vị (lớn+nhỏ), thành phần rRNA+protein, chức năng tổng hợp protein, số lượng có thể lên vài triệu
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 49, Hình 8.3 "Cấu tạo ribosome" — cần asset chính xác (mã tạm: `SH10-B08-M02-A01`)
- Đối tượng/lớp hình: tiểu đơn vị lớn, tiểu đơn vị nhỏ (A01)
- Quan hệ khoa học và hình học: tiểu đơn vị lớn nằm trên/lớn hơn rõ rệt so với tiểu đơn vị nhỏ
- Trạng thái đầu: 2 tiểu đơn vị tách rời
- Trình tự/trạng thái trung gian: bấm "Ghép" để xem 2 tiểu đơn vị kết hợp thành ribosome hoàn chỉnh
- Trạng thái cuối: ribosome hoàn chỉnh, 2 tiểu đơn vị rõ ràng
- Timeline: 2 tiểu đơn vị tiến lại gần và ghép khít (1 giây)
- Đáp án/điều kiện đúng: "Không có màng bao bọc"
- Điều kiện sai: "Có màng bao bọc giống các bào quan khác"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ 2 tiểu đơn vị bằng nhau; không vẽ có màng bao; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S02 — Lưới nội chất hạt: nơi protein bắt đầu hành trình

### HS_VIEW
- Tiêu đề màn: Ribosome gắn màng — khởi đầu của protein tiết
- Box lời giảng: "Lưới nội chất là một hệ thống gồm các ống và các túi dẹp chứa dịch nối thông nhau thành một mạng lưới, gồm lưới nội chất hạt và lưới nội chất trơn. Lưới nội chất hạt gồm hệ thống các đường ống tạo nên bởi lớp kép phospholipid, một đầu liên kết với màng nhân, liên tục với lưới nội chất trơn. Trên màng lưới nội chất hạt có các hạt ribosome. Các protein tiết, protein màng và một số protein của hệ nội màng được tổng hợp trên ribosome bám lưới nội chất hạt, đi vào lòng hoặc gắn vào màng lưới nội chất, rồi được vận chuyển bằng túi đến bộ máy Golgi."
- Text/nhãn hiển thị: "Lưới nội chất hạt"
- Hình học sinh khai thác: Cấu trúc lưới nội chất hạt với ribosome gắn trên bề mặt, nối với màng nhân — đúng theo Hình 8.4 SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh; chọn đáp án câu hỏi "ER hạt khác ER trơn ở điểm nào về cấu trúc?"
- Dấu hiệu hệ thống đã ghi nhận: xem hoạt cảnh, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "ER hạt có ribosome gắn trên màng, ER trơn thì không (hoặc rất ít)" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — ER hạt và ER trơn là HAI VÙNG của CÙNG MỘT hệ thống lưới nội chất liên tục, nối thông với nhau, chỉ khác nhau ở có/không có ribosome."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc lưới nội chất hạt và vai trò trong tổng hợp protein tiết
- Kiến thức khóa: ER hạt có ribosome gắn trên màng, 1 đầu nối màng nhân, đầu kia nối ER trơn; protein tổng hợp được đưa vào lòng ER rồi chuyển qua túi vận chuyển tới Golgi
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 50, Hình 8.4 "Cấu trúc của lưới nội chất" — cần asset chính xác (mã tạm: `SH10-B08-M02-A02`)
- Đối tượng/lớp hình: màng nhân (kế thừa M1), lưới nội chất hạt với ribosome gắn ngoài, lưới nội chất trơn (A02)
- Quan hệ khoa học và hình học: ER hạt nối liền với màng nhân ở 1 đầu, nối ER trơn ở đầu kia
- Trạng thái đầu: hình cấu trúc hiện, chưa có hoạt cảnh
- Trình tự/trạng thái trung gian: bấm "Theo dõi protein" để xem hoạt cảnh protein hình thành ở ribosome, đưa vào lòng ER, đến túi vận chuyển
- Trạng thái cuối: đã xem hoạt cảnh hoàn chỉnh
- Timeline: protein hình thành ở ribosome (1 giây) → đưa vào lòng ER (1 giây) → túi vận chuyển tách ra (1 giây)
- Đáp án/điều kiện đúng: "ER hạt có ribosome gắn trên màng, ER trơn thì không (hoặc rất ít)"
- Điều kiện sai: "ER hạt và ER trơn là 2 bào quan hoàn toàn tách biệt, không liên quan nhau"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ ER hạt và ER trơn tách rời hoàn toàn không nối thông; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S03 — Lưới nội chất trơn: đa nhiệm và liên hệ với rượu, gan

### HS_VIEW
- Tiêu đề màn: Không ribosome nhưng đa năng — ER trơn
- Box lời giảng: "Lưới nội chất trơn là hệ thống màng dạng ống dẹp thông với lưới nội chất hạt, có ít hoặc không có ribosome. Lưới nội chất trơn chứa các enzyme tham gia tổng hợp nhiều loại lipid, chuyển hóa đường, khử độc và là kho dự trữ canxi để thực hiện nhiều chức năng khác nhau như co cơ và truyền tin tế bào. Lưới nội chất trơn còn là nơi tổng hợp nên các sterol và phospholipid cấu tạo nên các loại màng của tế bào và các hormone sinh dục, tổng hợp và dự trữ triglyceride, tổng hợp và phân giải glycogen giúp điều hòa đường huyết. Các tế bào gan có lưới nội chất phát triển mạnh chứa các enzyme tham gia vào quá trình khử độc các chất như rượu và nhiều loại hóa chất độc hại khác. Người tiếp xúc kéo dài với rượu có thể làm tăng hệ enzyme khử độc và làm lưới nội chất trơn phát triển; tuy nhiên tổn thương gan chủ yếu liên quan đến các sản phẩm chuyển hóa độc và stress oxy hóa, không phải do bản thân lưới nội chất trơn phát triển."
- Text/nhãn hiển thị: "Tổng hợp lipid", "Khử độc", "Kho Ca²⁺", "Điều hòa đường huyết"
- Hình học sinh khai thác: Tế bào gan với lưới nội chất trơn phát triển mạnh, đối chiếu người không uống rượu (ER trơn ít phát triển hơn)
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ 4 thẻ; chọn đáp án câu hỏi "Vì sao người uống rượu nhiều dễ mắc bệnh gan?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ 4/4, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Vì ethanol và các sản phẩm chuyển hóa của nó gây độc, tạo stress oxy hóa; tế bào gan đồng thời tăng hệ enzyme và lưới nội chất trơn để đáp ứng khử độc" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng theo nội dung vừa học — cơ chế liên quan ở đây là lưới nội chất trơn trong tế bào gan phải hoạt động mạnh hơn để khử độc rượu, và điều này làm tăng nguy cơ tổn thương gan theo thời gian."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết các chức năng đa dạng của ER trơn; liên hệ thực tiễn tác hại của rượu với gan
- Kiến thức khóa: ER trơn: tổng hợp lipid, chuyển hóa đường, khử độc, kho Ca²⁺, tổng hợp sterol/hormone sinh dục, glycogen điều hòa đường huyết; tế bào gan có ER trơn phát triển mạnh để khử độc rượu — uống nhiều rượu làm ER trơn phát triển hơn, tăng nguy cơ tổn thương gan
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: lưới 2x2
- Asset tham chiếu: SGK trang 50, đoạn "lưới nội chất trơn" và liên hệ tế bào gan — cần asset (mã tạm: `SH10-B08-M02-A03` ER trơn phát triển mạnh ở tế bào gan)
- Đối tượng/lớp hình: lưới nội chất trơn (kế thừa A02), tế bào gan với ER trơn phát triển mạnh (A03)
- Quan hệ khoa học và hình học: so sánh mật độ ER trơn giữa 2 trạng thái (bình thường/phát triển mạnh do rượu)
- Trạng thái đầu: 4 thẻ chức năng đóng (tổng hợp lipid, chuyển hóa đường, khử độc, đường huyết)
- Trình tự/trạng thái trung gian: bấm từng thẻ để xem mô tả; riêng thẻ "khử độc" mở rộng thêm liên hệ tế bào gan/rượu
- Trạng thái cuối: đã xem đủ 4/4 chức năng, đã đọc liên hệ thực tiễn
- Timeline: mở rộng 200ms khi bấm
- Đáp án/điều kiện đúng: "Vì ethanol và các sản phẩm chuyển hóa của nó gây độc, tạo stress oxy hóa; tế bào gan đồng thời tăng hệ enzyme và lưới nội chất trơn để đáp ứng khử độc"
- Điều kiện sai: "Vì rượu trực tiếp phá hủy DNA trong nhân tế bào gan" (không đúng trọng tâm — sai cơ chế được học ở đây)
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không thiếu 1 trong 4 chức năng; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S04 — Bộ máy Golgi: xưởng chế biến và đóng gói

### HS_VIEW
- Tiêu đề màn: Từ nguyên liệu thô đến sản phẩm hoàn chỉnh
- Box lời giảng: "Bộ máy Golgi gồm các túi dẹp nằm song song với nhau nhưng tách rời nhau. Bộ máy Golgi là nơi tập trung chế biến, lắp ráp, đóng gói các phân tử protein, lipid rồi phân phối chúng đến những nơi cần thiết. Ví dụ: protein được tổng hợp từ ribosome trên lưới nội chất hạt được gửi đến bộ máy Golgi bằng các túi vận chuyển. Tại đây, chúng được gắn thêm các chất khác, như chuỗi đường ngắn tạo nên glycoprotein, rồi bao gói vào trong các túi vận chuyển để chuyển đến các vị trí khác nhau trong tế bào hoặc xuất ra ngoài qua màng tế bào."
- Text/nhãn hiển thị: "Chế biến", "Lắp ráp", "Đóng gói", "Phân phối"
- Hình học sinh khai thác: Cấu trúc Golgi với các túi dẹp xếp song song, tách rời — đúng theo Hình 8.5 SGK; hoạt cảnh túi vận chuyển từ ER đến Golgi, gắn thêm chuỗi đường tạo glycoprotein
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh; chọn đáp án câu hỏi "Cấu trúc Golgi có đặc điểm gì khác biệt so với lưới nội chất?"
- Dấu hiệu hệ thống đã ghi nhận: xem hoạt cảnh, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Các túi dẹp của Golgi tách rời nhau, không nối thông liên tục như lưới nội chất" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — lưới nội chất là hệ thống ống/túi NỐI THÔNG liên tục; Golgi là các túi dẹp XẾP SONG SONG NHƯNG TÁCH RỜI nhau."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc và chức năng bộ máy Golgi
- Kiến thức khóa: Golgi = túi dẹp song song nhưng TÁCH RỜI nhau; chức năng chế biến, lắp ráp, đóng gói, phân phối
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 50, Hình 8.5 "Cấu trúc bộ máy Golgi" — cần asset chính xác (mã tạm: `SH10-B08-M02-A04`)
- Đối tượng/lớp hình: túi dẹp Golgi (nhiều lớp song song, tách rời), túi vận chuyển đến/đi, protein xuất bào (A04)
- Quan hệ khoa học và hình học: các túi dẹp xếp chồng nhưng có khoảng cách rõ ràng giữa từng túi
- Trạng thái đầu: Golgi hiện tĩnh, túi vận chuyển từ ER tiếp cận
- Trình tự/trạng thái trung gian: bấm "Chế biến" để xem hoạt cảnh protein đi qua Golgi, được gắn thêm chuỗi đường, đóng gói, xuất ra
- Trạng thái cuối: đã xem hoạt cảnh hoàn chỉnh
- Timeline: túi vận chuyển đến (0,5s) → protein đi qua từng lớp túi dẹp, biến đổi dần (1,5s) → đóng gói vào túi mới, tách ra (1s)
- Đáp án/điều kiện đúng: "Các túi dẹp của Golgi tách rời nhau, không nối thông liên tục như lưới nội chất"
- Điều kiện sai: "Golgi và lưới nội chất có cấu trúc hoàn toàn giống nhau"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ các túi Golgi dính liền nhau; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S05 — Lysosome: đội quân tái chế và tiêu hóa

### HS_VIEW
- Tiêu đề màn: Túi enzyme dọn dẹp tế bào
- Box lời giảng: "Lysosome là bào quan dạng túi có màng đơn, chứa các loại enzyme thủy phân protein, nucleic acid, carbohydrate, lipid, các bào quan và thậm chí cả các tế bào cần thay thế. Lysosome được hình thành từ bộ máy Golgi và có ở các tế bào động vật. Những tế bào bị tổn thương, các tế bào và bào quan quá hạn sử dụng được enzyme của lysosome phân giải, lấy những gì có thể tái sử dụng, còn chất thải được xuất ra ngoài tế bào. Lysosome không chỉ làm nhiệm vụ tái chế mà còn hỗ trợ tế bào tiêu hóa thức ăn theo con đường thực bào."
- Text/nhãn hiển thị: "Lysosome — chỉ ở động vật"
- Hình học sinh khai thác: Cấu trúc lysosome với enzyme thủy phân bên trong — đúng theo Hình 8.6 SGK; hoạt cảnh lysosome phân giải 1 bào quan hỏng
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem hoạt cảnh; chọn đáp án câu hỏi "Lysosome có ở tế bào thực vật không?"
- Dấu hiệu hệ thống đã ghi nhận: xem hoạt cảnh, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Lysosome là bào quan điển hình ở tế bào động vật; tế bào thực vật thường dùng không bào tiêu hóa để thực hiện chức năng tương tự" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — lysosome là bào quan điển hình ở tế bào động vật; ở tế bào thực vật, không bào tiêu hóa đảm nhiệm chức năng phân giải tương tự."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc và chức năng lysosome
- Kiến thức khóa: lysosome = túi màng đơn, chứa enzyme thủy phân, hình thành từ Golgi, CHỈ ở tế bào động vật; chức năng phân giải/tái chế, hỗ trợ tiêu hóa thực bào
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 51, Hình 8.6 "Cấu trúc của lysosome" — cần asset chính xác (mã tạm: `SH10-B08-M02-A05`)
- Đối tượng/lớp hình: lysosome (màng đơn, chứa enzyme dạng chấm), bào quan hỏng đang bị phân giải (A05)
- Quan hệ khoa học và hình học: lysosome hình cầu, màng đơn (không phải màng kép), enzyme rải bên trong
- Trạng thái đầu: lysosome hiện, 1 bào quan hỏng ở gần
- Trình tự/trạng thái trung gian: bấm "Phân giải" để xem hoạt cảnh lysosome hợp nhất và tiêu hóa bào quan hỏng
- Trạng thái cuối: bào quan hỏng đã bị phân giải hoàn toàn
- Timeline: lysosome tiếp cận (0,5s) → hợp nhất màng (0,5s) → enzyme phân giải dần (1,5s) → chỉ còn chất thải nhỏ
- Đáp án/điều kiện đúng: "Lysosome là bào quan điển hình ở tế bào động vật; tế bào thực vật thường dùng không bào tiêu hóa để thực hiện chức năng tương tự"
- Điều kiện sai: "Có, giống hệt tế bào động vật"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ lysosome ở tế bào thực vật; chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S06 — Không bào: túi bảo dưỡng đa năng

### HS_VIEW
- Tiêu đề màn: Vì sao rau tươi lại héo, rồi tươi lại khi ngâm nước?
- Box lời giảng: "Ở tế bào thực vật, không bào là bào quan có một lớp màng bao bọc. Không bào lớn nằm giữa tế bào được gọi là không bào trung tâm, giúp điều hòa áp suất thẩm thấu trong tế bào. Các không bào thường được bắt nguồn từ lưới nội chất và bộ máy Golgi. Một số không bào ở tế bào của nhiều loại lá, hoa và quả có chứa các sắc tố thu hút côn trùng đến thụ phấn, các động vật đến ăn và phát tán hạt. Số khác được dùng làm kho chứa các chất như carbohydrate, ion, các loại muối, chất phế thải, các enzyme thủy phân các đại phân tử sinh học cũng như các enzyme khử các chất độc từ bên ngoài xâm nhập vào tế bào. Ví dụ: quả chanh có vị chua vì không bào của chúng chứa acid chanh. Một số loài động vật nguyên sinh như trùng giày có các không bào co bóp làm nhiệm vụ như những chiếc bơm, bơm nước ra khỏi tế bào khi tế bào bị hấp thụ quá nhiều nước; không bào tiêu hóa chứa các enzyme giúp chúng tiêu hóa thức ăn."
- Text/nhãn hiển thị: "Không bào trung tâm", "Không bào co bóp", "Không bào tiêu hóa"
- Hình học sinh khai thác: Không bào trung tâm ở tế bào thực vật (Hình 8.7a); không bào co bóp và không bào tiêu hóa ở trùng giày (Hình 8.7b) — đúng theo SGK
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: xem đủ; chọn đáp án câu hỏi "Rau héo rồi tươi lại khi ngâm nước là do bào quan nào thay đổi kích thước?"
- Dấu hiệu hệ thống đã ghi nhận: xem đủ, chọn đúng
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không bào (trung tâm)" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Không đúng — chính KHÔNG BÀO TRUNG TÂM co lại (khi mất nước) hoặc phồng lên (khi hút nước) làm thay đổi độ cứng/tươi của tế bào thực vật."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Nhận biết cấu trúc-chức năng không bào ở thực vật và ở động vật nguyên sinh
- Kiến thức khóa: không bào trung tâm (thực vật) điều hòa áp suất thẩm thấu, chứa sắc tố/carbohydrate/ion/enzyme; không bào co bóp và không bào tiêu hóa (động vật nguyên sinh như trùng giày)
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: phóng to dạng modal
- Asset tham chiếu: SGK trang 51, Hình 8.7(a,b) "Không bào trung tâm trong tế bào thực vật và các không bào trong tế bào trùng giày" — cần asset chính xác (mã tạm: `SH10-B08-M02-A06` không bào trung tâm, `A07` không bào ở trùng giày)
- Đối tượng/lớp hình: không bào trung tâm (A06), không bào co bóp và tiêu hóa ở trùng giày (A07)
- Quan hệ khoa học và hình học: không bào trung tâm chiếm phần lớn tế bào thực vật; 2 loại không bào ở trùng giày phân bố rải rác trong tế bào
- Trạng thái đầu: 2 hình (thực vật, trùng giày) hiện tĩnh
- Trình tự/trạng thái trung gian: bấm "Mất nước" để xem tế bào thực vật héo (không bào co lại); bấm "Ngâm nước" để xem tế bào tươi lại (không bào phồng lên)
- Trạng thái cuối: đã xem đủ cả 2 trạng thái + đã xem không bào ở trùng giày
- Timeline: không bào co lại/phồng lên (1 giây mỗi lượt)
- Đáp án/điều kiện đúng: "Không bào (trung tâm)"
- Điều kiện sai: "Nhân tế bào" hoặc "Ti thể"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không vẽ không bào trung tâm nhỏ (mất ý nghĩa "lớn"); chuyển Stage khi xem đủ và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.

## STAGE S07 — Tổng kết: "Hệ thống nội màng" là gì?

### HS_VIEW
- Tiêu đề màn: Tất cả đều kết nối với nhau
- Box lời giảng: "Những bào quan như lưới nội chất, màng nhân, lysosome, bộ máy Golgi, không bào và màng tế bào đều được xếp vào hệ thống nội màng vì các bộ phận này có thể kết nối trực tiếp với nhau hoặc có thể chuyển đổi các đoạn màng cho nhau."
- Text/nhãn hiển thị: "Hệ thống nội màng"
- Hình học sinh khai thác: Sơ đồ tổng hợp con đường protein: ribosome trên ER hạt → túi vận chuyển → Golgi → túi tiết → màng tế bào (xuất bào)
- HƯỚNG DẪN: Thực hiện đúng thao tác nêu trong nhiệm vụ. Đối tượng đã chọn đổi viền xanh; nội dung đã xem có dấu tích. Có thể nhấn lại để xem trước khi trả lời.
- Nhiệm vụ học sinh: ghép đúng thứ tự 6 thành phần thành 1 chuỗi liên kết; chọn đáp án câu hỏi "Ti thể và lục lạp có thuộc hệ thống nội màng không?" (dự đoán trước M3)
- Dấu hiệu hệ thống đã ghi nhận: ghép đúng chuỗi, chọn đúng câu hỏi dự đoán
- Nút kiểm tra: TRẢ LỜI. Chỉ sáng khi học sinh hoàn thành đủ thao tác bắt buộc.
- Phản hồi đúng: Chính xác. "Không — sẽ tìm hiểu ở module tiếp theo, vì chúng có nguồn gốc và đặc điểm khác biệt" Tiếp tục sang nội dung kế tiếp.
- Phản hồi sai: "Chưa chính xác — không phải MỌI bào quan có màng đều thuộc hệ thống nội màng. Ti thể và lục lạp có màng nhưng KHÔNG kết nối/chuyển đổi màng với hệ thống này — sẽ tìm hiểu lý do ở module tiếp theo."
- Sau phản hồi: đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.

### DEV_ONLY
- Mục tiêu sư phạm: Hiểu khái niệm "hệ thống nội màng"; sửa hiểu sai tổng hợp
- Kiến thức khóa: lưới nội chất, màng nhân, lysosome, Golgi, không bào, màng tế bào đều thuộc hệ thống nội màng vì có thể kết nối/chuyển đổi đoạn màng cho nhau
- Bố cục desktop: vùng nội dung/hình 68% bên trái; vùng câu hỏi, hướng dẫn và nút 32% bên phải; không che đối tượng khoa học.
- Bố cục tablet/mobile: cuộn dọc nếu cần
- Asset tham chiếu: tổng hợp từ A02-A06
- Đối tượng/lớp hình: sơ đồ dòng chảy 6 thành phần hệ nội màng
- Quan hệ khoa học và hình học: đúng thứ tự: màng nhân → ER hạt → túi vận chuyển → Golgi → túi tiết → màng tế bào (không bào và lysosome là 2 nhánh phụ từ Golgi)
- Trạng thái đầu: sơ đồ trống
- Trình tự/trạng thái trung gian: bấm từng bước để xem kết nối
- Trạng thái cuối: sơ đồ hoàn chỉnh, đã hiểu tính liên kết
- Timeline: mỗi kết nối sáng lên khi bấm đúng thứ tự
- Đáp án/điều kiện đúng: "Không — sẽ tìm hiểu ở module tiếp theo, vì chúng có nguồn gốc và đặc điểm khác biệt"
- Điều kiện sai: "Có, vì đều là bào quan có màng"
- Logic dữ liệu: lưu viewed_items, selected_answer, attempt_count và stage_completed; chỉ truyền stage_completed=true khi đáp án đúng.
- Logic nút: TRẢ LỜI khóa đến khi đủ thao tác; đúng khóa đáp án và mở TIẾP TỤC; sai mở LÀM LẠI và giữ dữ kiện quan sát.
- Khóa khoa học, điều cấm và điều kiện chuyển màn: không xếp sai thứ tự chuỗi; hoàn thành module khi ghép đúng và chọn đúng
- Cấm xuất hiện trong HS_VIEW: mã asset, biến dữ liệu, đáp án kỹ thuật, tọa độ, hướng dẫn lập trình và nhãn DEV_ONLY.
- Nghiệm thu: kiểm tra desktop/tablet/mobile; không chồng chữ; không mất trạng thái; phản hồi đúng/sai và nút hoạt động đúng; hình không làm sai quan hệ khoa học.