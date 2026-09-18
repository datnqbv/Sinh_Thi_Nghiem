Nội dung này là SH10_B07_M03-HTML, đã hết phần HTML của bài.
ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC.

TÊN MODULE: Bên trong tế bào nhân sơ và ứng dụng thực tiễn
HÌNH THỨC: HTML học lí thuyết – 5 màn
YCCĐ: Mô tả được cấu tạo và chức năng các thành phần của tế bào nhân sơ.
CÂU HỎI TRUNG TÂM: Bên trong tế bào vi khuẩn có những thành phần nào và chúng liên quan thế nào đến tính kháng kháng sinh?
KHÓA PHẠM VI: Bốn cơ chế kháng thuốc trong module là các cơ chế tiêu biểu theo hình nguồn, không phải danh sách đầy đủ của mọi cơ chế kháng thuốc.

=== MÀN S01 – TẾ BÀO CHẤT VÀ RIBOSOME ===
HS_VIEW
Tiêu đề: Bên trong màng tế bào có gì?
Box lời giảng: “Tế bào chất gồm bào tương và các cấu trúc nằm trong đó. Ở vi khuẩn, bào tương chứa nhiều ribosome – nơi tổng hợp protein – cùng các hạt dự trữ ở một số tế bào. Nhiều phản ứng chuyển hóa diễn ra trong tế bào chất.”
Hình học tập: A01, vùng tế bào chất có ribosome nhỏ, phân bố dày và một số hạt dự trữ lớn hơn.
HƯỚNG DẪN: “Nhấn vào từng loại hạt. Thành phần đã xem có viền xanh và chức năng xuất hiện trong bảng.”
Câu hỏi: “Cấu trúc nào trực tiếp tổng hợp protein?”
Lựa chọn: A. Ribosome; B. Hạt dự trữ; C. Vùng nhân.
Đáp án: A.
Phản hồi đúng: “Đúng. Ribosome tổng hợp protein; hạt dự trữ không đảm nhiệm chức năng này. Tiếp theo, hãy quan sát vùng chứa DNA chính.”
Phản hồi sai: “Hãy tìm các hạt rất nhỏ phân bố trong tế bào chất; đó là ribosome.”
Nút: KIỂM TRA; đúng → TIẾP TỤC; sai → LÀM LẠI.

DEV_ONLY
Mục tiêu: phân biệt ribosome với hạt dự trữ bằng hình và chức năng.
Bố cục desktop 60/35; mobile hình trên, bảng dưới; vùng chạm ≥44 px.
Trạng thái đầu: nhãn ẩn; biến components_seen=[]; câu hỏi khóa đến khi xem đủ ribosome và hạt dự trữ.
Khóa khoa học: không yêu cầu vẽ đúng hàng chục nghìn ribosome; dùng mật độ trực quan và chú giải “rất nhiều”, tránh vài chấm rời rạc; ribosome không có màng bao.
Dữ liệu lưu: s01_components; ribosome_function=true.
QA: các hạt không bị nhầm với plasmid; phản hồi ẩn trước kiểm tra.

=== MÀN S02 – VÙNG NHÂN ===
HS_VIEW
Tiêu đề: Vùng nhân không phải là nhân có màng
Box lời giảng: “DNA nhiễm sắc thể của phần lớn vi khuẩn tập trung ở vùng nhân. Vùng này không có màng bao; nhiều vi khuẩn có một nhiễm sắc thể DNA mạch kép dạng vòng, nhưng vẫn có những ngoại lệ.”
Hình học tập: A02; một tế bào vi khuẩn với vùng DNA cuộn, không đường viền; ô đối chiếu nhỏ với nhân có màng của tế bào nhân thực.
HƯỚNG DẪN: “Kéo kính lúp qua vùng DNA. Khi kính lúp đúng vị trí, phần phóng đại hiện bên phải; hãy chọn mô tả phù hợp.”
Lựa chọn: A. DNA được màng nhân bao kín; B. DNA tập trung trong vùng không có màng bao.
Đáp án: B.
Phản hồi đúng: “Chính xác. Vì không có màng bao nên gọi là vùng nhân, không gọi là nhân tế bào. Bên cạnh DNA nhiễm sắc thể, một số vi khuẩn còn có plasmid.”
Phản hồi sai: “Quan sát lại ranh giới: không có lớp màng nào bao quanh vùng DNA của vi khuẩn.”

DEV_ONLY
Mục tiêu: khóa sự vắng mặt của màng nhân mà không tuyệt đối hóa cấu trúc nhiễm sắc thể cho mọi loài.
Logic: kính lúp snap vào vùng DNA; chỉ sau snap mới mở lựa chọn; sai không đổi hình để lộ đáp án.
Khóa hình: tuyệt đối không có đường bao quanh vùng nhân; không biến DNA thành một vòng tròn phẳng đơn giản – phải gợi dạng cuộn/siêu xoắn; ô nhân thực có màng chỉ để đối chiếu.
Biến: nucleoid_examined; s02_answer; attempts_s02.
QA: zoom không tạo đường viền giả; nhãn “phần lớn/nhiều vi khuẩn” hiển thị trong box, không giấu ở DEV_ONLY.

=== MÀN S03 – PLASMID ===
HS_VIEW
Tiêu đề: Plasmid khác DNA nhiễm sắc thể như thế nào?
Box lời giảng: “Plasmid là phân tử DNA ngoài nhiễm sắc thể, thường nhỏ và có khả năng tự nhân đôi. Một số plasmid mang gene tạo lợi thế, chẳng hạn gene kháng kháng sinh, và có thể được truyền giữa vi khuẩn. Plasmid được dùng làm vector trong kĩ thuật gene. Không phải plasmid nào cũng mang gene kháng thuốc, và việc mất plasmid có thể làm mất đặc tính do plasmid quy định.”
Hình học tập: A03; DNA nhiễm sắc thể lớn và 2–3 plasmid nhỏ, tách biệt.
HƯỚNG DẪN: “Kéo bốn thẻ vào hai cột DNA nhiễm sắc thể hoặc Plasmid. Thẻ sai trở về khay.”
Thẻ DNA nhiễm sắc thể: “Mang phần lớn thông tin di truyền thiết yếu”; “Kích thước lớn hơn”.
Thẻ Plasmid: “DNA ngoài nhiễm sắc thể”; “Có thể mang gene kháng kháng sinh”.
Nút: KIỂM TRA sáng khi đặt đủ bốn thẻ.
Phản hồi đúng: “Đúng. Plasmid không đồng nhất với DNA nhiễm sắc thể và không phải plasmid nào cũng mang gene kháng thuốc. Tiếp theo, hãy xem gene kháng thuốc có thể biểu hiện thành những cơ chế nào.”
Phản hồi sai: “Hãy phân biệt vai trò cốt lõi của nhiễm sắc thể với các đặc tính bổ sung có thể nằm trên plasmid.”

DEV_ONLY
Mục tiêu: phân biệt hai loại DNA, loại bỏ kết luận “mất plasmid luôn không ảnh hưởng sinh trưởng”.
Logic kéo thả; đúng khóa; sai trả về 250 ms; biến plasmid_sort và attempts_s03.
Khóa khoa học: plasmid nhỏ hơn rõ nhưng không dùng tỉ lệ giả; không nối plasmid vào nhiễm sắc thể; không tuyên bố mọi plasmid đều không thiết yếu trong mọi điều kiện; không nói biến nạp là truyền trực tiếp từ một tế bào sang tế bào khác.
Ứng dụng vector chỉ xuất hiện như thẻ mở rộng sau đáp án đúng, không lấn mục tiêu phân biệt cấu trúc.
QA: thẻ đọc trọn trên mobile; trạng thái kéo được lưu khi xoay màn hình.

=== MÀN S04 – HAI CƠ CHẾ LIÊN QUAN SỰ ĐI QUA MÀNG ===
HS_VIEW
Tiêu đề: Kháng sinh vào ít hơn hoặc bị bơm ra
Box lời giảng: “Vi khuẩn có thể giảm lượng kháng sinh tích lũy bên trong bằng hai cách tiêu biểu: làm giảm thuốc đi vào, thường liên quan biến đổi kênh hoặc hàng rào màng; hoặc dùng bơm tống thuốc đã vào ra ngoài. Hai cơ chế có thể cùng xuất hiện.”
Hình học tập: A04 gồm hai ô động: Giảm thấm và Bơm tống thuốc.
HƯỚNG DẪN: “Nhấn CHẠY MÔ PHỎNG ở từng ô. Sau khi xem cả hai, nối mô tả với cơ chế đúng.”
Mô tả: “Thuốc bị hạn chế ngay khi đi vào”; “Thuốc đã vào rồi bị vận chuyển ra”.
Đáp án: lần lượt Giảm thấm; Bơm tống thuốc.
Phản hồi đúng: “Đúng. Một cơ chế hạn chế dòng vào; cơ chế kia chủ động đẩy thuốc ra. Màn sau sẽ xét biến đổi đích tác động và bất hoạt thuốc.”
Phản hồi sai: “Theo dõi hướng mũi tên: giảm thấm làm ít thuốc đi vào; bơm tống hướng thuốc từ trong ra ngoài.”

DEV_ONLY
Mục tiêu: phân biệt hai cơ chế theo hướng vận chuyển.
Bố cục hai ô ngang, mobile xếp dọc; mỗi ô có nút riêng và bộ đếm watched 0/2.
Khóa khoa học: protein bơm xuyên màng; mũi tên bơm từ trong ra; giảm thấm không mô tả đơn giản là “đóng kín toàn bộ màng”; với Gram âm có thể minh họa giảm/đổi porin ở màng ngoài.
Biến: mechanisms_seen=[reduced_uptake,efflux]; s04_pairing.
QA: không dùng cùng một animation cho hai cơ chế; thuốc không xuyên qua lớp lipid vô điều kiện.

=== MÀN S05 – BIẾN ĐỔI ĐÍCH, BẤT HOẠT THUỐC VÀ CHỐT BÀI ===
HS_VIEW
Tiêu đề: Khi đích thay đổi hoặc thuốc bị bất hoạt
Box lời giảng: “Một cơ chế khác là biến đổi đích tác động khiến thuốc gắn kém hoặc không còn gắn được. Vi khuẩn cũng có thể tạo enzyme phân hủy hoặc biến đổi hóa học làm thuốc mất hoạt tính. Đây là bốn cơ chế tiêu biểu vừa học, không phải toàn bộ các cơ chế kháng kháng sinh.”
Hình học tập: A05 gồm hai ô động; sau khi xem đủ chuyển sang bảng bốn cơ chế lấy dữ liệu từ S04–S05.
HƯỚNG DẪN: “Nhấn vào từng ô để xem diễn biến. Sau đó chọn tất cả nhận định đúng. Mục đã chọn có viền xanh; nhấn lại để bỏ chọn.”
Nhận định: 1. Vi khuẩn có thể phối hợp nhiều cơ chế; 2. Mọi plasmid đều mang gene kháng thuốc; 3. Bốn cơ chế trên là các ví dụ tiêu biểu; 4. Kháng thuốc chỉ xảy ra do thuốc không vào được tế bào.
Đáp án: 1 và 3.
Nút: KIỂM TRA; đúng → HOÀN THÀNH; sai → LÀM LẠI.
Phản hồi đúng: “Chính xác. Tế bào nhân sơ có tế bào chất, ribosome, vùng nhân và có thể có plasmid; vi khuẩn kháng thuốc bằng nhiều cơ chế. Bạn đã hoàn thành Bài 7.”
Phản hồi sai: “Xem lại phạm vi: plasmid chỉ có thể mang gene kháng thuốc; và vi khuẩn không chỉ kháng thuốc bằng một cơ chế liên quan màng.”

DEV_ONLY
Mục tiêu: hoàn thiện bốn ví dụ kháng thuốc và chốt toàn Bài 7.
Animation biến đổi đích: đích đổi hình, thuốc giữ hình và không gắn; animation enzyme: enzyme tác động vào thuốc làm thuốc đổi cấu trúc, không làm đích biến mất.
Logic: xem đủ A05-target và A05-enzyme mới mở câu hỏi; lựa chọn nhiều đáp án; đúng chính xác tập {1,3}; không chấm từng lựa chọn trước KIỂM TRA.
Biến lưu: mechanisms_seen hợp nhất đủ bốn; final_correct_statements=[1,3]; m03_completed=true; lesson_b07_completed=true.
Khóa khoa học: không gọi bốn cơ chế là toàn bộ; không gắn mọi gene kháng thuốc cho plasmid; không minh họa “enzyme tăng cường” bằng số lượng vô căn cứ – dùng “enzyme bất hoạt thuốc”.
QA nghiệm thu: bảng tổng hợp lấy dữ liệu đã xem, không bắt học sinh làm lại; đúng/sai có giải thích; nút đúng quy tắc; không DEV_ONLY lọt HS_VIEW; responsive desktop/tablet/mobile.

SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
PRODUCTION-GATE: PASSED CHO KỊCH BẢN; ASSET-GATE: CHỜ DỰNG/DUYỆT ẢNH.