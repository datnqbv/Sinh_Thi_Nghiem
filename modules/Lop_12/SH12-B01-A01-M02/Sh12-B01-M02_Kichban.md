FILE 1 — SH12-B01-M02 — CƠ CHẾ TÁI BẢN DNA
Loại: HTML học lí thuyết
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT HTML.
YCCĐ: Phân tích được cơ chế tái bản của DNA là quá trình tự sao thông tin di truyền từ tế bào mẹ sang tế bào con hay từ thế hệ này sang thế hệ sau.

NGUYÊN TẮC SẢN XUẤT CHUNG
- HS_VIEW và DEV_ONLY tách tuyệt đối.
- Toàn bộ cơ chế tái bản dùng một hệ hình khoa học thống nhất; ưu tiên CODE/SVG/Canvas/controlled vector, KHÔNG giao AI raster tự dựng cơ chế DNA.
- Mọi DNA mới chỉ được tổng hợp theo chiều 5′→3′; DNA polymerase chỉ kéo dài từ đầu 3′ thích hợp do mồi cung cấp.
- Mạch gián đoạn gồm các đoạn Okazaki nhưng từng đoạn vẫn được tổng hợp 5′→3′.
- Ligase chỉ nối các điểm đứt trên khung đường–phosphate sau xử lí mồi; không tạo đoạn Okazaki.
- Bán bảo toàn = mỗi DNA con có một mạch cũ và một mạch mới.
- Một Ori tạo hai chạc tái bản; mô hình SGK: DNA vòng vi khuẩn có một Ori, NST tuyến tính nhân thực có nhiều Ori.
- Không dùng từ “stage” trong nội dung học sinh nhìn thấy; chỉ dùng trong DEV_ONLY.

==============================
MỞ ĐẦU — VÌ SAO DNA PHẢI ĐƯỢC TÁI BẢN?
==============================
HS_VIEW
Lời dẫn: “Trước khi một tế bào phân chia, thông tin di truyền trong DNA phải được sao chép để các tế bào con nhận được DNA.”
Câu hỏi trung tâm: “DNA được tái bản bằng cơ chế nào để thông tin di truyền được truyền gần như nguyên vẹn sang DNA mới?”
HƯỚNG DẪN: “Nhấn KHÁM PHÁ QUÁ TRÌNH TÁI BẢN để bắt đầu.”
Nút: KHÁM PHÁ QUÁ TRÌNH TÁI BẢN.

DEV_ONLY
Mục tiêu: đặt nhu cầu sao chép DNA trước phân bào; chưa đưa chi tiết enzyme.
Hình: không cần raster mới. Có thể dùng một icon DNA đôi trung tính hoặc khung vector tĩnh; không dạy cơ chế ở màn này.

==============================
ST01 — NHÌN TOÀN CẢNH BỘ MÁY TÁI BẢN
==============================
HS_VIEW
Lời dẫn: “Tái bản DNA không phải là chuỗi enzyme lần lượt làm xong rồi rời đi. Nhiều thành phần phối hợp quanh chạc tái bản trong cùng một quá trình.”
HƯỚNG DẪN: “Nhấn QUAN SÁT TOÀN CẢNH. Theo dõi vùng DNA đang mở và các mạch mới hình thành.”
Sau quan sát: “Tại chạc tái bản, DNA mẹ được tách mạch; các mạch mẹ làm khuôn và các mạch mới được hình thành dần.”
Câu hỏi: “Điều nào mô tả đúng nhất quá trình vừa quan sát?”
A. Các enzyme lần lượt hoàn thành toàn bộ nhiệm vụ rồi enzyme tiếp theo mới hoạt động.
B. Nhiều thành phần của bộ máy tái bản phối hợp trong cùng quá trình.
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Các hoạt động được học ở những phần sau là các phần được phóng to của cùng một quá trình đang diễn ra phối hợp, không phải những công đoạn hoàn toàn tách rời.”
Phản hồi sai: “Hãy quan sát lại chạc tái bản. Khi một vùng phía sau chạc đang được hoàn thiện, vùng gần chạc vẫn tiếp tục mở và tổng hợp DNA mới.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Sơ đồ master ST01 — MASTER REPLICATION FORK, CODE/SVG/Canvas do HTML dựng; KHÔNG CẤP MÃ HÌNH Axx. Dùng lại cho ST03, ST04, ST05, ST06 bằng các trạng thái zoom/highlight khác nhau.
Visual Blueprint MASTER REPLICATION FORK:
PURPOSE: cho học sinh thấy nhiều hoạt động tái bản diễn ra phối hợp quanh một chạc.
LAYOUT: khung 16:9; chạc chữ Y hướng sang phải. Điểm phân tách ở x≈50%, y≈50%. DNA mẹ chưa tách nằm phía phải x≈50–94%. Hai mạch khuôn tách về trái trên và trái dưới. Vùng sau chạc chiếm x≈8–50%.
REQUIRED OBJECTS: 2 mạch DNA mẹ antiparallel; helicase ngay tại junction; một mạch mới liên tục; nhánh gián đoạn có ít nhất 3 đoạn Okazaki; các mồi RNA ngắn; DNA polymerase tại đầu 3′ đang kéo dài; ligase đặt ở vùng phía sau chạc, không ở đầu đang tổng hợp.
OBJECT RELATIONS: helicase tiếp xúc đúng junction của hai mạch mẹ; DNA polymerase bám đầu 3′ mạch mới; mồi nằm ở đầu 5′ của mỗi đoạn Okazaki trước khi được xử lí; ligase chỉ ở khe giữa hai đoạn DNA đã thay mồi.
ARROW MAP: nếu có mũi tên chỉ chiều tổng hợp, [FROM] đầu 5′ đã hình thành của mạch mới → [TO] đầu 3′ đang kéo dài → [MEANS] hướng kéo dài DNA mới là 5′→3′. Không dùng mũi tên chung chung cho “enzyme di chuyển” nếu không cần dạy chiều.
TEXT-LOCK: kí hiệu 5′/3′, tên enzyme, “mồi RNA”, “đoạn Okazaki” là lớp SVG/HTML; không bake raster.
SCIENCE-LOCK: hai mạch khuôn antiparallel; không có mạch mới 3′→5′; không để cả hai mạch đều liên tục; ligase không tạo đoạn Okazaki; primase không kéo dài DNA.
NEGATIVE: không thêm DNA pol I/III, SSB, topoisomerase nếu HS_VIEW không khai thác; không vẽ enzyme như dây chuyền tách rời; không đảo chiều chạc giữa các màn.
CONTINUITY: sơ đồ master ST01 là master geometry cho ST03–ST06; orientation, màu mạch cũ/mới, vị trí chạc và tỉ lệ không thay đổi; chỉ zoom/highlight/ẩn-hiện lớp.
ACCEPTANCE: nhìn một lần nhận ra chạc Y; enzyme đúng vị trí; mạch liên tục và gián đoạn khác nhau rõ; mọi kí hiệu chiều nhất quán; không có quan hệ enzyme sai.
E1 Science PASS; E2 Pedagogy PASS.

==============================
ST02 — ORI VÀ HAI CHẠC TÁI BẢN
==============================
HS_VIEW
Lời dẫn: “Quá trình tái bản bắt đầu tại một vùng xác định trên DNA gọi là điểm khởi đầu tái bản – Ori.”
HƯỚNG DẪN: “Nhấn BẮT ĐẦU TẠI ORI và quan sát DNA mở về hai phía.”
Sau quan sát: “Helicase làm tách hai mạch DNA tại Ori. Từ một Ori hình thành hai chạc tái bản tiến theo hai hướng.”
Câu hỏi: “Sau khi hai mạch DNA mẹ được tách, mỗi mạch có vai trò gì?”
A. Cả hai bị phân giải.
B. Mỗi mạch làm khuôn để tổng hợp một mạch mới.
C. Chỉ một mạch làm khuôn.
D. Hai mạch nối lại ngay.
Đáp án đúng: B.
Phản hồi đúng: “Đúng. Cả hai mạch DNA mẹ đều được giữ lại và mỗi mạch làm khuôn để các nucleotide mới được lắp theo nguyên tắc bổ sung. Một Ori tạo hai chạc, không phải một chạc.”
Phản hồi sai: “Hãy nhìn lại hai mạch vừa được helicase tách ra. Cả hai mạch mẹ vẫn còn nguyên và đều tham gia vào quá trình tiếp theo.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Sơ đồ ST02 — ORI + TWO FORKS, CODE/SVG do HTML dựng; KHÔNG CẤP MÃ HÌNH Axx.
PURPOSE: khóa quan hệ một Ori → hai chạc → tái bản hai hướng.
LAYOUT: DNA mẹ nằm ngang từ x≈8–92%; Ori ở x≈50%. Bong bóng tái bản mở đối xứng từ Ori, chạc trái ở x≈34%, chạc phải ở x≈66%.
REQUIRED OBJECTS: một Ori duy nhất ở tâm; hai vùng Y ở hai đầu bong bóng; hai mạch mẹ vẫn liên tục qua toàn phân tử.
RELATION: Ori nằm giữa hai chạc; hai chạc mở ra hai hướng đối nhau từ cùng Ori.
ARROW MAP: [FROM] Ori/tâm bong bóng → [TO] chạc trái → [MEANS] chạc tái bản tiến sang trái; [FROM] Ori/tâm bong bóng → [TO] chạc phải → [MEANS] chạc tái bản tiến sang phải.
TEXT-LOCK: “Ori” và kí hiệu chạc là lớp SVG/HTML.
SCIENCE-LOCK: không vẽ một Ori chỉ tạo một chạc; không cắt DNA thành hai đoạn độc lập; không cần chi tiết Okazaki ở mức này.
ACCEPTANCE: một Ori duy nhất; hai chạc rõ; hai hướng đối nhau; không sai orientation.
E1 Science PASS; E2 Pedagogy PASS.

==============================
ST03 — MỒI RNA VÀ CHIỀU TỔNG HỢP 5′→3′
==============================
HS_VIEW
Lời dẫn: “DNA polymerase không thể tự bắt đầu tổng hợp một mạch DNA mới trên mạch khuôn trống. Trước hết cần có một đoạn mồi cung cấp đầu 3′ thích hợp.”
HƯỚNG DẪN: “Nhấn TẠO MỒI VÀ KÉO DÀI MẠCH MỚI.”
Sau quan sát: “Primase tạo đoạn mồi RNA. Từ đầu 3′ của mồi, DNA polymerase gắn các nucleotide mới theo nguyên tắc bổ sung và kéo dài mạch DNA theo chiều 5′→3′.”
Câu hỏi: “Vai trò của primase là gì?”
A. Tháo xoắn DNA.
B. Tổng hợp đoạn mồi RNA cung cấp đầu 3′ cho DNA polymerase.
C. Nối các đoạn Okazaki.
D. Phân giải mạch DNA mẹ.
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Primase tạo mồi RNA; DNA polymerase chỉ kéo dài mạch mới từ đầu 3′ và mọi mạch DNA mới đều được tổng hợp theo chiều 5′→3′.”
Phản hồi sai: “Hãy xem lại chi tiết xuất hiện trước khi DNA polymerase bắt đầu kéo dài mạch mới. Đoạn mồi RNA cung cấp đầu 3′ cần thiết cho bước đó.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Dùng lại sơ đồ master ST01, zoom vùng một đầu 3′ đang kéo dài. Không tạo asset mới, không cấp mã hình mới.
Hiển thị primase tạo một đoạn mồi RNA ngắn; sau đó DNA polymerase xuất hiện tại đầu 3′ của mồi. Không animate polymerase bắt đầu từ đầu 5′.
ARROW MAP: [FROM] đầu 5′ của đoạn đang có → [TO] đầu 3′ đang kéo dài → [MEANS] chiều tổng hợp mạch mới 5′→3′.
TEXT-LOCK: 5′/3′ bắt buộc là SVG/HTML, đặt sát đầu strand tương ứng; không để label nổi sai đầu khi responsive.

==============================
ST04 — MẠCH LIÊN TỤC VÀ MẠCH GIÁN ĐOẠN
==============================
HS_VIEW
Lời dẫn: “Hai mạch DNA mẹ song song ngược chiều, trong khi DNA polymerase chỉ tổng hợp DNA mới theo một chiều duy nhất: 5′→3′.”
HƯỚNG DẪN: “Nhấn QUAN SÁT MỘT CHẠC TÁI BẢN. So sánh cách mạch mới được hình thành ở hai mạch khuôn.”
Sau quan sát: “Ở một chạc tái bản, một mạch mới được tổng hợp liên tục; mạch mới còn lại được tổng hợp gián đoạn thành các đoạn Okazaki. Tuy khác cách tổng hợp, cả hai mạch mới đều được kéo dài theo chiều 5′→3′.”
Câu hỏi: “Vì sao tại một chạc có mạch liên tục và mạch gián đoạn?”
A. Vì hai DNA polymerase tổng hợp theo hai chiều khác nhau.
B. Vì hai mạch khuôn ngược chiều nhau nhưng DNA polymerase chỉ tổng hợp DNA mới theo chiều 5′→3′.
C. Vì mạch gián đoạn không cần mồi RNA.
D. Vì ligase cắt mạch mới thành nhiều đoạn.
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Hai mạch khuôn ngược chiều nhau nhưng mọi mạch mới đều chỉ được tổng hợp 5′→3′. Vì vậy, một mạch mới được kéo dài liên tục, còn mạch kia phải được tạo thành từng đoạn Okazaki.”
Phản hồi sai: “Hãy chú ý các kí hiệu 5′ và 3′. Không có mạch DNA mới nào được tổng hợp theo chiều 3′→5′.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Dùng lại sơ đồ master ST01. Highlight riêng mạch liên tục rồi mạch gián đoạn; không đổi orientation chạc; không cấp mã hình mới.
Mỗi đoạn Okazaki có mồi ở đầu 5′ và đầu 3′ đang kéo dài. Các đoạn mới hơn nằm gần chạc hơn; từng đoạn kéo dài 5′→3′ theo hướng ra xa chạc trong mô hình chạc phải đang dùng.
SCIENCE-LOCK: cấm mũi tên “mạch gián đoạn tổng hợp 3′→5′”.

==============================
ST05 — HOÀN THIỆN MẠCH GIÁN ĐOẠN
==============================
HS_VIEW
Lời dẫn: “Các đoạn Okazaki vừa được tổng hợp vẫn còn đoạn mồi RNA và các điểm đứt trên khung đường–phosphate.”
HƯỚNG DẪN: “Nhấn HOÀN THIỆN CÁC ĐOẠN CŨ.”
Sau quan sát: “Đoạn mồi RNA được loại bỏ, vị trí đó được thay bằng DNA. Sau đó ligase nối các điểm đứt còn lại trên khung đường–phosphate.”
Câu hỏi: “Vai trò trực tiếp của ligase là gì?”
A. Tạo đoạn mồi RNA.
B. Tháo xoắn DNA.
C. Nối các điểm đứt trên khung đường–phosphate giữa các đoạn DNA.
D. Tạo các đoạn Okazaki.
Đáp án đúng: C.
Phản hồi đúng: “Đúng. Ligase không tạo đoạn Okazaki và không thay thế đoạn mồi. Enzyme này nối các điểm đứt còn lại sau khi vùng mồi đã được thay bằng DNA.”
Phản hồi sai: “Hãy quan sát lại thứ tự: loại mồi → thay bằng DNA → ligase nối. Ligase chỉ thực hiện bước nối cuối cùng.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Dùng lại sơ đồ master ST01, zoom 2 đoạn Okazaki kề nhau; không cấp mã hình mới.
Trạng thái 1: có mồi RNA ở đầu đoạn phía sau và một nick/gap rõ.
Trạng thái 2: mồi biến mất, đoạn DNA thay thế xuất hiện nhưng còn nick trên backbone.
Trạng thái 3: ligase ở nick; sau thao tác backbone liền mạch.
Không cho ligase xuất hiện trước khi mồi đã được thay bằng DNA.

==============================
ST06 — GHÉP LẠI TOÀN BỘ CHẠC TÁI BẢN
==============================
HS_VIEW
Lời dẫn: “Các phần vừa rồi đã giúp bạn quan sát riêng từng hoạt động. Bây giờ, hãy ghép chúng lại để thấy toàn bộ cơ chế tái bản đang diễn ra phối hợp quanh một chạc tái bản.”
HƯỚNG DẪN: “Nhấn XEM CHẠC TÁI BẢN HOẠT ĐỘNG.”
Sau quan sát: “Helicase tiếp tục tách hai mạch. Primase tiếp tục tạo các mồi cần thiết. DNA polymerase kéo dài các mạch mới 5′→3′. Ở vùng phía sau, các đoạn cũ được hoàn thiện và nối lại.”
Câu hỏi: “Nhận định nào đúng?”
A. Helicase phải mở xong toàn bộ DNA rồi DNA polymerase mới bắt đầu.
B. Mạch liên tục phải hoàn tất trước khi các đoạn Okazaki được tổng hợp.
C. Các hoạt động tái bản có thể diễn ra phối hợp và chồng lấn trong cùng khoảng thời gian.
Đáp án đúng: C.
Phản hồi đúng: “Chính xác. Tái bản DNA là hoạt động phối hợp của một bộ máy tái bản. Việc chia thành nhiều phần chỉ nhằm giúp chúng ta quan sát từng hoạt động rõ hơn.”
Phản hồi sai: “Hãy nhìn cả vùng gần chạc và vùng phía sau chạc cùng lúc. Khi chạc vẫn đang mở và tổng hợp DNA mới, những đoạn hình thành trước đó đã có thể được hoàn thiện.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Dùng sơ đồ master ST01 ở full-frame, khôi phục toàn bộ lớp đã học. Tất cả enzyme hoạt động trong cùng scene; animation không phải dây chuyền tuần tự hoàn toàn.
Continuity: vị trí helicase/chạc/mạch mẹ giữ cùng orientation từ ST03–ST05.

==============================
ST07 — KẾT QUẢ: NGUYÊN TẮC BÁN BẢO TOÀN
==============================
HS_VIEW
Lời dẫn: “Khi quá trình tái bản hoàn tất, từ một phân tử DNA mẹ hình thành hai phân tử DNA con.”
HƯỚNG DẪN: “Nhấn XEM KẾT QUẢ TÁI BẢN và theo dõi mạch cũ, mạch mới trong mỗi DNA con.”
Sau quan sát: “Mỗi DNA con gồm một mạch được giữ lại từ DNA mẹ và một mạch mới được tổng hợp.”
Câu hỏi: “‘Bán bảo toàn’ có nghĩa là gì?”
A. Hai mạch DNA mẹ cùng nằm trong một DNA con.
B. Mỗi DNA con có một mạch cũ và một mạch mới.
C. Mỗi mạch gồm một nửa cũ và một nửa mới.
D. Cả hai mạch của DNA con đều mới.
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Mỗi DNA con bảo tồn một mạch của DNA mẹ và có một mạch mới được tổng hợp. Đây là nguyên tắc bán bảo toàn.”
Phản hồi sai: “Hãy quan sát màu của từng mạch trong mỗi DNA con. Mỗi phân tử đều có một mạch cũ và một mạch mới.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Sơ đồ ST07 — SEMICONSERVATIVE RESULT, CODE/SVG do HTML dựng; KHÔNG CẤP MÃ HÌNH Axx.
PURPOSE: học sinh trực tiếp phân biệt strand cũ/mới trong hai DNA con.
LAYOUT: DNA mẹ phía trên hoặc trái; hai DNA con phía dưới hoặc phải, song song, cùng chiều và cùng kích thước.
REQUIRED OBJECTS: 2 DNA con; mỗi DNA con đúng 2 strand, trong đó 1 strand màu khóa “cũ”, 1 strand màu khóa “mới”.
RELATION: mỗi strand cũ của DNA mẹ đi vào một DNA con khác nhau; không có DNA con chứa cả hai strand cũ.
ARROW MAP: nếu dùng mũi tên chuyển kết quả, [FROM] DNA mẹ → [TO] hai DNA con → [MEANS] một phân tử mẹ tạo hai phân tử con; mũi tên không dùng để chỉ strand chuyển vị trí theo nghĩa vật lí.
TEXT-LOCK: nhãn “mạch cũ”, “mạch mới” là SVG/HTML; legend giữ đồng nhất màu.
SCIENCE-LOCK: cấm mỗi strand nửa cũ-nửa mới; cấm hai strand cũ cùng DNA con.
ACCEPTANCE: nhìn legend là xác định được chính xác 1 cũ + 1 mới ở cả hai DNA con.
E1 Science PASS; E2 Pedagogy PASS.

==============================
ST08 — MỘT ORI VÀ NHIỀU ORI
==============================
HS_VIEW
Lời dẫn: “DNA ở vi khuẩn và sinh vật nhân thực có quy mô và cách tổ chức khác nhau. Vì vậy, số điểm khởi đầu tái bản được tổ chức khác nhau trong mô hình chúng ta đang học.”
HƯỚNG DẪN: “Chọn DNA VÒNG Ở VI KHUẨN, NHIỄM SẮC THỂ TUYẾN TÍNH Ở SINH VẬT NHÂN THỰC hoặc XEM CẢ HAI.”
Sau quan sát: “Trong mô hình SGK, DNA vòng của vi khuẩn có một Ori và tái bản theo hai hướng. Mỗi nhiễm sắc thể tuyến tính của sinh vật nhân thực có nhiều Ori, nhờ đó nhiều vùng DNA có thể được tái bản đồng thời.”
Câu hỏi: “Ý nghĩa của việc có nhiều Ori trên nhiễm sắc thể tuyến tính ở sinh vật nhân thực là gì?”
A. Làm DNA được tổng hợp theo chiều 3′→5′.
B. Làm mỗi Ori chỉ tạo một chạc.
C. Cho phép nhiều vùng DNA được tái bản đồng thời.
D. Thay thế vai trò của DNA polymerase.
Đáp án đúng: C.
Phản hồi đúng: “Đúng. Nhiều Ori cho phép nhiều đơn vị tái bản hoạt động đồng thời trên một nhiễm sắc thể tuyến tính. Một Ori vẫn tạo hai chạc tái bản.”
Phản hồi sai: “Hãy quan sát số vùng đang mở cùng lúc. Điểm quan trọng là nhiều vị trí có thể được tái bản đồng thời.”
Nút đúng: TIẾP TỤC.

DEV_ONLY
Sơ đồ ST08 — ORI COMPARISON, CODE/SVG do HTML dựng; KHÔNG CẤP MÃ HÌNH Axx.
PURPOSE: so sánh cách bố trí Ori, không so tốc độ tuyệt đối.
LAYOUT: trái 45% khung là một DNA vòng vi khuẩn; phải 55% là một DNA/NST tuyến tính nhân thực kéo dài ngang.
REQUIRED OBJECTS: trái đúng 1 Ori và 2 chạc từ Ori; phải có nhiều Ori phân bố dọc DNA tuyến tính, mỗi Ori tạo một bong bóng có 2 chạc.
RELATION: Ori nằm tại tâm từng replication bubble; không dùng NST chữ X khi đang biểu diễn phân tử DNA tuyến tính đang tái bản.
ARROW MAP: mỗi Ori có hai mũi tên ra hai hướng: [FROM] Ori → [TO] hai chạc ở hai phía → [MEANS] tái bản hai hướng từ mỗi Ori.
TEXT-LOCK: “DNA vòng vi khuẩn”, “NST tuyến tính sinh vật nhân thực”, “Ori” là SVG/HTML.
SCIENCE-LOCK: trái 1 Ori; phải nhiều Ori; một Ori ≠ một chạc; không ghi “nhân thực tái bản nhanh hơn vi khuẩn”.
ACCEPTANCE: hai kiểu tổ chức phân biệt ngay, mọi Ori đều có 2 chạc.
E1 Science PASS; E2 Pedagogy PASS.

==============================
KẾT LUẬN — GHI NHỚ
==============================
HS_VIEW
Lời chốt: “Trước khi tế bào phân chia, DNA được mở tại Ori. Hai mạch DNA mẹ làm khuôn; các nucleotide mới được lắp theo nguyên tắc bổ sung và các mạch mới đều được kéo dài theo chiều 5′→3′. Các thành phần của bộ máy tái bản phối hợp quanh chạc tái bản để tạo ra hai DNA con; mỗi phân tử gồm một mạch cũ và một mạch mới.”
GHI NHỚ: “Ori → helicase tách hai mạch → mỗi mạch mẹ làm khuôn → primase tạo mồi RNA → DNA polymerase kéo dài mạch mới 5′→3′ → mạch liên tục và các đoạn Okazaki → xử lí mồi → ligase nối → hai DNA con theo nguyên tắc bán bảo toàn.”
Câu chống hiểu sai: “Các phần vừa học là những hoạt động được phóng to của cùng một quá trình phối hợp, không phải các enzyme lần lượt làm xong toàn bộ nhiệm vụ.”
Kết nối M03: “Tái bản DNA giúp duy trì và truyền đạt thông tin di truyền. Nguyên lí dùng DNA làm khuôn để tạo các bản sao còn được con người ứng dụng trong thực tiễn như thế nào? Module tiếp theo sẽ giúp bạn tìm hiểu ý nghĩa và ứng dụng của quá trình này.”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY CHUNG
- Desktop: khung hình khoa học 16:9 ở trung tâm; câu dẫn và hướng dẫn không che hình. Mobile: giữ orientation khoa học; nếu cần thu nhỏ/scroll, tuyệt đối không tự mirror chạc.
- Nút chỉ mở khi thao tác/quan sát cần thiết hoàn tất. Sai chỉ reset lựa chọn sai; không reset phần đã quan sát đúng.
- Kí hiệu 5′/3′ luôn gắn theo anchor đầu strand, không neo tuyệt đối vào màn hình.
- Màu mạch DNA mẹ và DNA mới phải thống nhất xuyên module; legend xuất hiện khi cần và không đổi giữa màn.
- Không bake text khoa học vào raster. Toàn bộ asset cơ chế là CODE/SVG/Canvas hoặc controlled vector.
- Toàn bộ sơ đồ cơ chế ST01–ST08 là CODE/SVG/Canvas do HTML dựng; KHÔNG CẤP BẤT KỲ MÃ HÌNH Axx nào cho M02. Các trạng thái zoom/highlight chỉ reuse master geometry.
- QA responsive phải kiểm không đảo hướng mũi tên, không đổi leading/lagging do mirror.

IMAGE HANDOFF FINAL GATE
- ST01 MASTER REPLICATION FORK: CODE/SVG/Canvas, không cấp mã hình, không giao AI raster.
- ST02 ORI–2 chạc: CODE/SVG, không cấp mã hình, không giao AI raster.
- ST07 bán bảo toàn: CODE/SVG, không cấp mã hình, không giao AI raster.
- ST08 so sánh Ori: CODE/SVG, không cấp mã hình, không giao AI raster.
- Tất cả hình hình thành kiến thức: E1 Science PASS + E2 Pedagogy PASS.
- E5 Visual PASS: blueprint khóa layout, relation, arrow map, text-lock, continuity, science-lock, acceptance.
- E7 Preflight PASS: không còn quan hệ/mũi tên để đội sản xuất tự suy diễn.

QA / REGRESSION LOCK
- Không dùng “stage” trong HS_VIEW.
- Không có DNA mới 3′→5′.
- Primase tạo mồi RNA; DNA polymerase kéo dài từ đầu 3′.
- Ligase chỉ nối nick sau xử lí mồi.
- Một Ori tạo hai chạc.
- Bán bảo toàn = 1 cũ + 1 mới trong mỗi DNA con.
- Không so tốc độ tuyệt đối nhân sơ/nhân thực.
- Không tạo raster AI cho cơ chế DNA.

SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
VISUAL-BLUEPRINT-GATE: PASSED
IMAGE-SCIENCE-RELATION-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT HTML.
