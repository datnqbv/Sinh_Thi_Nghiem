Nội dung này là SH10_B07_M02-HTML, đã hết phần HTML của module.
ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC.

TÊN MODULE: Cấu trúc bao bọc tế bào nhân sơ
HÌNH THỨC: HTML học lí thuyết – 6 màn
YCCĐ: Mô tả được cấu tạo và chức năng các thành phần của tế bào nhân sơ.
CÂU HỎI TRUNG TÂM: Từ ngoài vào trong, các cấu trúc bao bọc tế bào vi khuẩn có đặc điểm và chức năng gì?
KHÓA PHẠM VI: Dùng tế bào vi khuẩn điển hình để minh họa; không suy rộng rằng mọi vi khuẩn đều có đủ lông, roi, vỏ nhầy hoặc màng ngoài.

=== MÀN S01 – BẢN ĐỒ TỪ NGOÀI VÀO TRONG ===
HS_VIEW
Tiêu đề: Quan sát một tế bào vi khuẩn điển hình
Box lời giảng: “Tế bào vi khuẩn có thể mang các cấu trúc ở ngoài bề mặt như lông và roi. Bao quanh tế bào chất là màng tế bào và thường có thành tế bào; ở vi khuẩn Gram âm còn có màng ngoài. Không phải mọi vi khuẩn đều có đầy đủ tất cả cấu trúc minh họa.”
Hình học tập: lát cắt tổng quan A01; các điểm có thể khám phá: lông, roi, màng ngoài, thành tế bào, màng tế bào.
HƯỚNG DẪN: “Nhấn lần lượt vào năm điểm sáng. Điểm đã xem chuyển sang viền xanh và tên cấu trúc được ghi vào danh sách bên phải.”
Nhiệm vụ: Xem đủ năm cấu trúc theo hướng từ ngoài vào trong.
Dấu hiệu ghi nhận: số đếm “Đã xem x/5”; điểm đã xem có viền xanh; không tự chuyển màn.
Nút: BẮT ĐẦU QUAN SÁT; sau khi đủ 5/5 hiện TIẾP TỤC.
Phản hồi hoàn thành: “Bạn đã có bản đồ tổng quan. Tiếp theo, hãy phân biệt hai cấu trúc dạng sợi dễ bị nhầm lẫn nhất.”

DEV_ONLY
Mục tiêu: tạo bản đồ vị trí, chưa yêu cầu ghi nhớ toàn bộ chức năng.
Desktop/tablet: hình 62% bên trái, danh sách 32% bên phải; mobile: hình trên, danh sách dưới, cho phép phóng to nhưng không làm đổi điểm neo.
Lớp hình: nền → tế bào → cấu trúc → hotspot → nhãn; DEV_ONLY tuyệt đối không hiện.
Trạng thái đầu: A01 rõ, nhãn ẩn, 5 hotspot nhấp sáng nhẹ; biến viewed=[]; nút TIẾP TỤC khóa.
Logic: nhấn hotspot → mở thẻ tên 2 giây hoặc đến khi đóng → thêm mã vào viewed; nhấn lại không tăng bộ đếm; đủ 5 mã mở TIẾP TỤC.
Dữ liệu lưu: viewed_structures=[fimbriae,flagellum,outer_membrane,cell_wall,plasma_membrane].
Khóa khoa học: màng ngoài chỉ gắn cho nhánh Gram âm của hình; không vẽ lớp này như cấu trúc của mọi vi khuẩn; lông nhiều–ngắn, roi ít–dài.
QA: hotspot trúng đúng cấu trúc ở ba kích thước màn hình; không nhãn chồng; không có tên tế bào chất/vùng nhân trong nhiệm vụ M02.

=== MÀN S02 – LÔNG VÀ ROI ===
HS_VIEW
Tiêu đề: Lông và roi khác nhau như thế nào?
Box lời giảng: “Lông thường ngắn và nhiều, giúp bám dính; một số lông chuyên hóa tham gia tiếp hợp. Roi dài hơn và thường ít hơn, giúp tế bào vận động.”
Hình học tập: A02 gồm hai vùng phóng đại đặt cạnh nhau; bên trái nhiều lông ngắn, bên phải một hoặc vài roi dài.
HƯỚNG DẪN: “Kéo từng thẻ chức năng vào cấu trúc phù hợp. Thẻ đặt đúng sẽ khóa tại vị trí; thẻ đặt sai trở về khay.”
Thẻ: “Bám dính”; “Vận động”.
Nút: KIỂM TRA chỉ sáng khi đã đặt cả hai thẻ.
Đáp án: Bám dính → Lông; Vận động → Roi.
Phản hồi đúng: “Đúng. Lông ngắn, nhiều và chủ yếu giúp bám dính; roi dài hơn, ít hơn và tạo vận động. Tiếp theo, ta so sánh các lớp vỏ của hai nhóm Gram.”
Phản hồi sai: “Hãy nhìn lại độ dài và số lượng: cấu trúc dài, ít là roi; cấu trúc ngắn, nhiều là lông.”
Sau đúng hiện TIẾP TỤC; sau sai hiện LÀM LẠI.

DEV_ONLY
Mục tiêu: khóa khác biệt hình học và chức năng; không dùng ví dụ H. pylori để đồng nhất mọi cấu trúc bám dính.
Bố cục: hai card 46%–46%; thẻ ở đáy; mobile xếp dọc, giữ cùng tỉ lệ phóng đại trong mỗi card.
Biến: pairing_fimbriae_flagellum; attempts_s02.
Logic sai: trả thẻ về vị trí đầu trong 250 ms; không công bố đáp án bằng màu trước khi nhấn KIỂM TRA.
Khóa hình: lông không được vẽ dài bằng roi; roi không được nhân thành hàng trăm sợi; không gọi lông và roi là cùng một cấu trúc.
QA: kéo bằng chuột/chạm; vùng thả tối thiểu 44 px; phản hồi đúng/sai ẩn trước kiểm tra.

=== MÀN S03 – GRAM DƯƠNG VÀ GRAM ÂM ===
HS_VIEW
Tiêu đề: Thành tế bào tiết lộ điều gì khi nhuộm Gram?
Box lời giảng: “Thành tế bào vi khuẩn chứa peptidoglycan, giúp duy trì hình dạng và bảo vệ tế bào. Vi khuẩn Gram dương có lớp peptidoglycan dày và thường bắt màu tím; vi khuẩn Gram âm có lớp peptidoglycan mỏng, nằm giữa màng ngoài và màng tế bào, và thường hiện màu hồng đỏ sau nhuộm Gram.”
Hình học tập: A03, hai mặt cắt Gram dương/Gram âm chưa gắn tên.
HƯỚNG DẪN: “Nhấn NHUỘM GRAM, quan sát màu xuất hiện, rồi nối mỗi mô tả với mặt cắt phù hợp. Đường nối đúng chuyển xanh.”
Mô tả: “Peptidoglycan dày – tím”; “Peptidoglycan mỏng + màng ngoài – hồng đỏ”.
Nút: NHUỘM GRAM; KIỂM TRA; TIẾP TỤC/LÀM LẠI theo kết quả.
Phản hồi đúng: “Đúng. Điểm phân biệt không chỉ là màu, mà còn là độ dày peptidoglycan và sự có mặt của màng ngoài ở Gram âm.”
Phản hồi sai: “Kiểm tra lại: Gram dương có peptidoglycan dày; Gram âm có peptidoglycan mỏng và thêm màng ngoài.”

DEV_ONLY
Mục tiêu: liên kết màu nhuộm với cấu trúc vỏ, không dạy màu như dấu hiệu rời rạc.
Trạng thái đầu: hai mặt cắt màu trung tính; nút KIỂM TRA khóa. Sau NHUỘM GRAM, màu xuất hiện 500 ms và mở thao tác nối.
Biến: gram_stain_viewed=true; gram_pairing; attempts_s03.
Khóa khoa học: A03-Gram+ gồm màng tế bào + peptidoglycan dày; A03-Gram− gồm màng tế bào + peptidoglycan mỏng + màng ngoài; không vẽ Gram+ có màng ngoài.
Không dùng con số độ dày tuyệt đối chung cho mọi loài; màu “hồng đỏ” không được đảo.
QA: ba lớp Gram− đọc rõ ở mobile; màu có thêm nhãn để không phụ thuộc khả năng phân biệt màu.

=== MÀN S04 – MÀNG NGOÀI VÀ LPS ===
HS_VIEW
Tiêu đề: Màng ngoài của vi khuẩn Gram âm
Box lời giảng: “Màng ngoài là hàng rào bảo vệ đặc trưng của vi khuẩn Gram âm. Lá ngoài của màng giàu lipopolysaccharide, viết tắt là LPS; phần lipid A của LPS có hoạt tính nội độc tố. LPS có thể được giải phóng trong quá trình vi khuẩn phát triển hoặc khi tế bào bị phá vỡ và có thể gây đáp ứng viêm mạnh.”
Hình học tập: A04 phóng đại màng ngoài bất đối xứng; nhãn: phospholipid, LPS, protein kênh, peptidoglycan, màng tế bào.
HƯỚNG DẪN: “Nhấn từng lớp theo thứ tự từ ngoài vào trong. Lớp đã chọn sáng lên và mô tả xuất hiện bên cạnh.”
Câu hỏi: “Phần nào của LPS gắn với hoạt tính nội độc tố?”
Lựa chọn: A. Lipid A; B. Peptidoglycan; C. Phospholipid màng tế bào.
Đáp án: A.
Phản hồi đúng: “Đúng. Lipid A là phần quyết định hoạt tính nội độc tố của LPS. Tiếp theo, hãy phân biệt màng ngoài với màng tế bào.”
Phản hồi sai: “Xem lại cấu tạo LPS ở lá ngoài của màng ngoài; nội độc tố không được ‘tạo ra do LPS phân hủy’.”
Nút: KIỂM TRA; TIẾP TỤC/LÀM LẠI.

DEV_ONLY
Mục tiêu: sửa lỗi gốc về LPS, nội độc tố và tính thấm.
Trạng thái đầu: toàn mặt cắt; các nhãn ẩn; biến layers_seen=[].
Logic: chỉ mở câu hỏi sau khi xem đủ 5 lớp; lựa chọn một đáp án; phản hồi ẩn trước kiểm tra.
Khóa khoa học: LPS là thành phần của lá ngoài, không phải “chất chủ yếu của toàn màng”; lipid A có hoạt tính nội độc tố; không mô phỏng LPS phân hủy để sinh ra độc tố; không gắn trực tiếp với “ngộ độc thực phẩm dù nấu chín” như kết luận phổ quát.
Màng ngoài là hàng rào thấm có chọn lọc theo kích thước/tính chất nhờ cấu trúc lipid và porin; cấm ghi “hoàn toàn không chọn lọc”.
QA: hướng ngoài–trong nhất quán với S03; label LPS không trỏ nhầm vào peptidoglycan.

=== MÀN S05 – MÀNG TẾ BÀO ===
HS_VIEW
Tiêu đề: Màng tế bào – ranh giới trao đổi có chọn lọc
Box lời giảng: “Nằm sát tế bào chất là màng tế bào, gồm chủ yếu lớp kép phospholipid và protein. Màng kiểm soát có chọn lọc sự trao đổi chất; ở tế bào nhân sơ, màng còn là nơi diễn ra một số quá trình chuyển hóa năng lượng và tiếp nhận tín hiệu.”
Hình học tập: A05; mô hình màng tế bào lớp kép với protein vận chuyển, đặt cạnh hình thu nhỏ màng ngoài Gram âm.
HƯỚNG DẪN: “Nhấn các phân tử ở ngoài màng để thử cho đi qua. Mũi tên xanh cho biết được vận chuyển; biểu tượng dừng cho biết chưa đi qua theo cơ chế đang mô phỏng.”
Nhiệm vụ: Chọn câu mô tả đúng.
Lựa chọn: A. Màng tế bào kiểm soát có chọn lọc sự trao đổi; B. Mọi chất đi qua tự do; C. Màng tế bào chỉ có ở vi khuẩn Gram dương.
Đáp án: A.
Phản hồi đúng: “Đúng. Màng tế bào có ở mọi tế bào và kiểm soát trao đổi có chọn lọc. Sang màn cuối, bạn sẽ ghép toàn bộ các lớp theo đúng thứ tự.”
Phản hồi sai: “Hãy xem lại vị trí sát tế bào chất và vai trò của protein màng; màng tế bào có ở cả Gram dương và Gram âm.”

DEV_ONLY
Mục tiêu: phân biệt màng tế bào với màng ngoài mà không dùng đối lập sai “chọn lọc/không chọn lọc tuyệt đối”.
Logic mô phỏng chỉ minh họa, không tuyên bố phân tử cụ thể nếu chưa khóa transporter; dùng ba hạt trung tính có nhãn “được vận chuyển/không theo cơ chế này”.
Biến: membrane_trials; s05_answer; attempts_s05.
Khóa khoa học: màng tế bào là lớp trong cùng của vỏ tế bào; không vẽ lớp kép sai chiều đầu ưa nước–đuôi kị nước.
QA: đầu ưa nước hướng ra môi trường nước hai phía; đuôi kị nước quay vào nhau; protein xuyên màng không nổi tự do.

=== MÀN S06 – TỔNG HỢP VÀ ỨNG DỤNG ===
HS_VIEW
Tiêu đề: Hoàn thiện sơ đồ các lớp bao bọc
Box lời giảng: “Từ ngoài vào trong, các cấu trúc thay đổi tùy nhóm vi khuẩn. Gram dương có peptidoglycan dày ở ngoài màng tế bào. Gram âm có màng ngoài, peptidoglycan mỏng và màng tế bào. Kháng sinh beta-lactam như penicillin ức chế tổng hợp peptidoglycan ở vi khuẩn đang sinh trưởng; hiệu quả còn phụ thuộc khả năng thuốc đi tới đích và cơ chế kháng thuốc.”
HƯỚNG DẪN: “Kéo các thẻ vào hai sơ đồ. Thẻ đúng sẽ khóa. Khi hoàn tất, nhấn KIỂM TRA.”
Thẻ Gram dương: Peptidoglycan dày; Màng tế bào.
Thẻ Gram âm: Màng ngoài; Peptidoglycan mỏng; Màng tế bào.
Câu hỏi chốt: “Cấu trúc nào là đích của penicillin?”
Đáp án: Quá trình tổng hợp peptidoglycan của thành tế bào.
Phản hồi đúng: “Chính xác. Bạn đã phân biệt lông–roi, hai kiểu vỏ Gram và màng tế bào. Module tiếp theo sẽ đi vào tế bào chất, vùng nhân và plasmid.”
Phản hồi sai: “Đích trực tiếp được nhắc ở đây là quá trình tạo peptidoglycan, không phải DNA hay ribosome.”
Nút: KIỂM TRA; HOÀN THÀNH khi đúng; LÀM LẠI khi sai.

DEV_ONLY
Mục tiêu: chốt cấu trúc–chức năng và nối M03.
Bố cục desktop: hai sơ đồ 42%–42%, khay thẻ giữa dưới; mobile xếp từng sơ đồ và dùng một khay thẻ sticky không che hình.
Logic: thẻ sai bật về; đủ 5 thẻ mới mở KIỂM TRA; sau ghép đúng mới mở câu hỏi penicillin; đúng câu hỏi mới hiện HOÀN THÀNH.
Biến lưu: gram_positive_layers; gram_negative_layers; beta_lactam_target; m02_completed=true.
Khóa khoa học: không tuyên bố penicillin luôn hiệu quả hơn với mọi Gram dương hoặc vô hiệu với Gram âm; không gọi màng ngoài là thành tế bào; không bỏ màng tế bào khỏi bất kỳ sơ đồ nào.
QA nghiệm thu: đúng/sai có giải thích; nút đúng quy tắc; dữ liệu S01–S06 giữ sau back/forward; không DEV_ONLY lọt HS_VIEW; responsive đủ desktop/tablet/mobile.

SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
PRODUCTION-GATE: PASSED CHO KỊCH BẢN; ASSET-GATE: CHỜ DỰNG/DUYỆT ẢNH.