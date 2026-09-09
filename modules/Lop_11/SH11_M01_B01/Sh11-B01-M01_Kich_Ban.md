FILE 1 — SH11-B01-M01 — VAI TRÒ CỦA TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG

Loại: HTML học lí thuyết
Số Stage: 3 (ST00 Hook; ST01 Nội dung; ST02 Ghi nhớ – Kết nối)
Phạm vi: SH11-B01-M01-ST00 → SH11-B01-M01-ST02
YCCĐ chính: Phân tích được vai trò của trao đổi chất và chuyển hoá năng lượng đối với sinh vật.
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT.

NGUYÊN TẮC SẢN XUẤT CHUNG
- Tách tuyệt đối HS_VIEW và DEV_ONLY; học sinh không nhìn thấy mã asset, biến trạng thái, điều kiện kỹ thuật.
- Không tự thêm kiến thức tự dưỡng/dị dưỡng ở M01.
- Hình phải rõ quan hệ nhân – quả nhưng không gợi đáp án bằng màu/kích thước/thứ tự.
- Không dùng hình bệnh lí nặng, máu me, phù nề hoặc dấu hiệu y khoa khó suy luận.
- Với mọi thao tác sai, chỉ reset đối tượng sai; giữ nguyên phần đã làm đúng.
- Mobile: vùng chạm tối thiểu 44 × 44 px; text không che hình; không dùng thao tác kéo liên tục nếu có thể thay bằng chạm chọn – chạm đích.

==============================
ST00 — HOOK MỞ ĐẦU
==============================
Mã Stage: SH11-B01-M01-ST00
Mục tiêu: Gợi vấn đề rằng sinh vật phải liên tục trao đổi với môi trường; khi quá trình này bị rối loạn, hoạt động sống bị ảnh hưởng.

HS_VIEW
Tiêu đề: Khái quát trao đổi chất và chuyển hoá năng lượng
Câu hỏi mở đầu: “Điều gì xảy ra nếu sinh vật không nhận đủ các chất cần thiết từ môi trường hoặc không loại bỏ được những chất cần thải ra ngoài?”
Lời dẫn: “Quan sát ba tình huống dưới đây. Tình huống nào cho thấy hoạt động sống của sinh vật đang bị ảnh hưởng do quá trình trao đổi với môi trường không diễn ra bình thường?”

Hiển thị 3 thẻ hình vuông, không ghi sẵn đáp án:
(a) Cây trồng trong chậu bị héo do đất khô kéo dài.
(b) Một người trẻ mệt mỏi rõ rệt do mất nước kéo dài, nét mặt mệt nhưng không bệnh nặng.
(c) Cây và người ở trạng thái khoẻ mạnh, được cung cấp đủ nước và các điều kiện sống cơ bản.

Hai vùng đích:
- Trao đổi với môi trường bị gián đoạn
- Trao đổi với môi trường diễn ra bình thường

Hướng dẫn: “Kéo từng hình vào nhóm phù hợp. Hình đã đặt sẽ nằm trong vùng bạn chọn. Bạn có thể thay đổi vị trí trước khi nhấn KIỂM TRA.”
Desktop: kéo – thả.
Mobile: chạm thẻ → chạm vùng đích.
Nút KIỂM TRA chỉ mở khi cả 3 thẻ đã được xếp.

Đáp án:
(a), (b) → Trao đổi với môi trường bị gián đoạn.
(c) → Trao đổi với môi trường diễn ra bình thường.

Phản hồi đúng: “Chính xác. Khi sinh vật không nhận đủ các chất cần thiết hoặc không loại bỏ được những chất cần thải, hoạt động sống có thể bị rối loạn và cơ thể dần suy yếu. Vậy trao đổi chất và chuyển hoá năng lượng có vai trò gì đối với sự sống?”
Phản hồi sai: “Chưa chính xác. Hãy quan sát lại trạng thái của sinh vật trong từng hình: sinh vật đang được cung cấp đủ điều kiện cần thiết hay hoạt động sống đã có dấu hiệu bị ảnh hưởng? Sau đó, hãy sửa lại những hình chưa đúng.”
Nút đúng: TIẾP TỤC.
Nút sai: LÀM LẠI; chỉ trả thẻ sai về khay.

DEV_ONLY
Asset chính: SH11-B01-M01-A01 — Bộ 3 thẻ tình huống Hook.
Bố cục desktop: khay 3 thẻ ngang phía trên; 2 vùng đích ngang phía dưới; khoảng cách giữa các thẻ bằng nhau.
Bố cục mobile: thẻ xếp dọc; 2 vùng đích xếp dọc; giữ toàn bộ nhãn trong vùng nhìn thấy.
Trạng thái đầu: 3 thẻ ở khay; 2 vùng đích trống; KIỂM TRA disabled.
Trạng thái trung gian: thẻ đang chọn/kéo có viền nổi nhẹ; không đổi màu theo đáp án.
Trạng thái sai: chỉ thẻ sai viền đỏ 0,8–1,2 s rồi trở về khay.
Trạng thái đúng: thẻ giữ nguyên tại vùng đích, viền xanh; phản hồi đúng xuất hiện.
Điều kiện chuyển: cả 3 thẻ đúng + học sinh đã đọc/xem phản hồi đúng.
Không lưu dữ liệu xuyên module.

MÔ TẢ SẢN XUẤT ASSET A01
Tên: Bộ 3 thẻ tình huống “trao đổi với môi trường”.
Loại: TẠO MỚI – ẢNH CỤM GỐC, 3 biến thể đồng phong cách.
Phong cách: minh hoạ khoa học 2D bán hiện thực, sạch, sáng, trung tính, phù hợp HS THPT; không hoạt hình trẻ con; không chữ bake-in; không watermark.
Tỉ lệ: 3 ảnh riêng 1:1, cùng kích thước, cùng ánh sáng và mức chi tiết.
A01-a: một chậu cây non/rau cảnh phổ biến; đất bề mặt khô, hơi nứt; lá rũ mềm nhưng còn xanh, không cháy lá, không chết; nền đơn giản; biểu hiện thiếu nước phải trực quan.
A01-b: một người trẻ 16–25 tuổi ngồi nghỉ, tư thế mệt, vai hơi rũ, tay cầm chai nước rỗng hoặc gần rỗng; môi có thể hơi khô; không truyền dịch, không bệnh viện, không phù, không đau đớn, không bệnh lí đặc hiệu; mục tiêu chỉ cho thấy cơ thể bị ảnh hưởng khi mất nước kéo dài.
A01-c: dùng CÙNG LOẠI cây như A01-a nhưng ở trạng thái bình thường: đất đủ ẩm, lá căng xanh; đồng thời có 01 người trẻ khỏe mạnh trong cùng khung, tư thế tự nhiên, nét mặt tỉnh táo, không mệt mỏi. Không thêm chai nước, không thêm tín hiệu đúng/sai. Mục tiêu là thể hiện tình huống đối chứng “cây và người ở trạng thái khỏe mạnh” đúng với HS_VIEW.
Khóa chống gợi đáp án: cả 3 ảnh cùng độ sáng, cùng kích cỡ nhân vật/cây tương đối; không dùng nền đỏ cho sai và nền xanh cho đúng; không thêm dấu ✓/✗.
Điều cấm: người bệnh nặng, phù nề, máu, kim tiêm, nội tạng, chữ, mũi tên, biểu tượng y tế; không làm cây chết hoàn toàn.

==============================
ST01 — VAI TRÒ CỦA TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG
==============================
Mã Stage: SH11-B01-M01-ST01
Mục tiêu: Phân tích được 3 vai trò cốt lõi của trao đổi chất và chuyển hoá năng lượng đối với sinh vật.

HS_VIEW
Lời dẫn: “Từ những tình huống vừa quan sát, có thể thấy sinh vật luôn có sự trao đổi với môi trường. Hãy khám phá từng vị trí trên sơ đồ để tìm hiểu vì sao quá trình này cần thiết đối với sự sống.”
Hướng dẫn: “Nhấn vào từng vị trí 1, 2, 3 trên sơ đồ. Vị trí đã xem sẽ đổi trạng thái. Khi xem đủ ba vị trí, hoạt động nối sẽ xuất hiện.”

Hiển thị sơ đồ chính:
MÔI TRƯỜNG → SINH VẬT → MÔI TRƯỜNG
Có 3 hotspot đánh số 1, 2, 3; hotspot không bake vào ảnh nếu có thể đặt bằng HTML.

Hotspot 1 — Thu nhận từ môi trường
Nội dung mở ra: “Sinh vật tiếp nhận các chất cần thiết từ môi trường. Tùy từng nhóm sinh vật, đó có thể là nước, chất khoáng, khí hoặc chất hữu cơ. Sinh vật cũng tiếp nhận nguồn năng lượng phù hợp với phương thức sống của mình.”

Hotspot 2 — Sử dụng trong cơ thể
Nội dung mở ra: “Các chất được tiếp nhận và biến đổi để hình thành, duy trì và đổi mới cơ thể. Năng lượng được chuyển hoá để cung cấp cho các hoạt động sống như vận động, cảm ứng, sinh trưởng, phát triển và sinh sản.”

Hotspot 3 — Thải ra môi trường
Nội dung mở ra: “Những chất cơ thể không sử dụng được, chất dư thừa hoặc có hại cần được loại bỏ ra môi trường. Nếu tích tụ, chúng có thể làm rối loạn hoạt động sống.”

Sau khi đã xem đủ 3 hotspot, hiển thị lời giảng:
“Như vậy, trao đổi chất và chuyển hoá năng lượng vừa cung cấp vật chất để xây dựng cơ thể, vừa cung cấp năng lượng cho hoạt động sống, đồng thời giúp loại bỏ những chất cần thải. Bây giờ, hãy nối mỗi vai trò với ví dụ phù hợp.”

NHIỆM VỤ NỐI
Cột trái — Vai trò:
1. Cung cấp vật chất để xây dựng và duy trì cơ thể
2. Cung cấp năng lượng cho hoạt động sống
3. Loại bỏ những chất cần thải ra ngoài

Cột phải — Ví dụ:
A. Hình thành thêm tế bào khi cơ thể sinh trưởng
B. Cơ hoạt động khi chạy
C. Cơ thể thải nước tiểu và mồ hôi

Đáp án: 1–A; 2–B; 3–C.
Hướng dẫn: “Chọn một vai trò ở bên trái, sau đó chọn ví dụ phù hợp ở bên phải để tạo cặp nối. Nhấn KIỂM TRA khi đã nối đủ ba cặp.”
Desktop: kéo đường nối.
Mobile: chạm thẻ trái → chạm thẻ phải.
Phản hồi đúng từng cặp:
- 1–A: “Hình thành thêm tế bào khi cơ thể sinh trưởng cho thấy các chất được sử dụng để xây dựng và đổi mới cơ thể.”
- 2–B: “Cơ hoạt động khi chạy cần năng lượng đã được cơ thể chuyển hoá thành dạng có thể sử dụng.”
- 3–C: “Thải nước tiểu và mồ hôi là những con đường giúp cơ thể loại bỏ một số chất dư thừa hoặc cần thải ra ngoài.”
Phản hồi sai: “Cặp này chưa đúng. Hãy xác định ví dụ đang nói đến xây dựng cơ thể, sử dụng năng lượng hay loại bỏ chất, rồi nối lại cặp này.”
Sau khi đúng cả 3 cặp: “Trao đổi chất và chuyển hoá năng lượng có ba vai trò quan trọng: cung cấp vật chất để xây dựng và duy trì cơ thể, cung cấp năng lượng cho các hoạt động sống và giúp loại bỏ những chất cần thải ra ngoài.”
Nút: TIẾP TỤC.

DEV_ONLY
Sơ đồ chính ST01: CODE/SVG + HTML LAYER — KHÔNG CẤP MÃ HÌNH, KHÔNG TẠO RASTER.
UI chữ ST01: 6 thẻ text cho nhiệm vụ nối, dựng native HTML/CSS — KHÔNG CẤP MÃ HÌNH, không bake chữ vào bitmap.

Bố cục sơ đồ ST01 trên desktop: chiếm khoảng 65–70% chiều rộng vùng nội dung; ba khối trái–giữa–phải cân đối, mũi tên một chiều rõ.
Bố cục mobile: xếp dọc Môi trường → Sinh vật → Môi trường; mũi tên hướng xuống; logic vẫn một chiều.
Hotspot 1 đặt gần mũi tên vào; hotspot 2 trên khối Sinh vật; hotspot 3 gần mũi tên ra.
Không bắt buộc thứ tự nhấn 1→2→3; nhưng khu NỐI chỉ mở khi cả 3 hotspot đã được xem ít nhất một lần.
Hotspot đã xem đổi viền/màu trung tính; không đổi màu theo đúng/sai.
Chú thích hotspot chỉ mở một hộp tại một thời điểm; hộp không che hotspot khác.
Khu nối xuất hiện phía dưới sơ đồ bằng fade/slide nhẹ; không chồng lên sơ đồ ST01.
Điều kiện KIỂM TRA nhiệm vụ nối: đã nối đủ 3 cặp.
Sai: chỉ xoá cặp sai; giữ cặp đúng.
Đúng: giữ 3 đường nối; lưu M01_vaitro_hoanthanh = true.
Điều kiện chuyển ST02: M01_vaitro_hoanthanh = true.

ĐẶC TẢ SẢN XUẤT SƠ ĐỒ ST01 — CODE/SVG, KHÔNG CẤP MÃ HÌNH
Tên: Sơ đồ khái quát trao đổi chất và chuyển hoá năng lượng ở sinh vật.
Loại: TẠO MỚI – SƠ ĐỒ KHOA HỌC DÙNG XUYÊN ST01.
Mục tiêu: thể hiện quan hệ khái quát “môi trường cung cấp → cơ thể tiếp nhận/biến đổi/sử dụng → cơ thể thải ra môi trường”, nhưng KHÔNG trộn đầu vào đặc trưng của tự dưỡng và dị dưỡng.
Phong cách: infographic khoa học 2D bán hiện thực; nền sáng; đường nét sạch; tối đa 3 khối chính; không chữ bake-in ngoài các biểu tượng trung tính nếu cần.
Khối trái — Môi trường: cảnh tự nhiên trung tính, có biểu tượng nước/không khí/khoáng/chất dinh dưỡng ở mức khái quát; không liệt kê CO2 + O2 + thức ăn + ánh sáng cùng lúc như đầu vào bắt buộc của mọi sinh vật.
Khối giữa — Sinh vật: dùng một cây thân thảo và một động vật/người đặt chung trong khung “sinh vật”, cùng kích thước thị giác; bên trong có hai biểu tượng phụ tách biệt: (1) tế bào/khối mô mới để biểu đạt xây dựng, duy trì và đổi mới cơ thể; (2) cơ thể đang vận động để biểu đạt sử dụng năng lượng cho hoạt động sống. KHÔNG dùng biểu tượng ATP ở M01 để tránh đưa kiến thức chưa cần thiết.
Khối phải — Môi trường: biểu tượng chất thải/dư thừa đi ra khỏi cơ thể; không vẽ chất thải quay ngược vào cơ thể.
Mũi tên: trái→giữa và giữa→phải; một chiều, dày vừa, dễ đọc; không dùng mũi tên vòng tròn.
Khóa khoa học: Sơ đồ ST01 là sơ đồ khái quát cấp sinh vật, không khẳng định mọi sinh vật cùng thu nhận một loại chất/năng lượng; không đưa kiến thức M05 tự dưỡng/dị dưỡng vào đây.
Không bake hotspot 1/2/3 vào ảnh; HTML đặt lớp tương tác để dễ responsive.
Điều cấm: mũi tên hai chiều; chu trình chất thải quay lại; hình “thức ăn” gắn cho cây; ánh sáng gắn như nguồn năng lượng trực tiếp cho động vật; CO2 gắn như đầu vào bắt buộc của người; chữ dài trong ảnh.

ĐẶC TẢ UI/CSS ST01 — KHÔNG CẤP MÃ HÌNH
Tên: Bộ 6 thẻ nối “Vai trò ↔ Ví dụ”.
Loại: UI/CSS, KHÔNG CẦN TẠO ẢNH nếu hệ thống cho phép text card native.
3 thẻ vai trò và 3 thẻ ví dụ cùng kích thước trong từng cột; thứ tự thẻ ví dụ xáo ngẫu nhiên mỗi lần tải.
Thẻ trái và phải không dùng màu cặp tương ứng trước khi học sinh trả lời.
Đường nối chỉ xuất hiện sau thao tác; đúng màu xanh trung tính, sai màu đỏ tạm thời.
Mobile dùng chạm chọn–chạm đích thay vì kéo dây liên tục.
Điều cấm: icon hoặc màu sắc gợi đáp án; không dùng hình ảnh thêm làm học sinh phân loại theo hình thay vì hiểu ý nghĩa.

==============================
ST02 — GHI NHỚ VÀ KẾT NỐI
==============================
Mã Stage: SH11-B01-M01-ST02
Mục tiêu: Củng cố vai trò và nối tự nhiên sang M02 — dấu hiệu đặc trưng của trao đổi chất và chuyển hoá năng lượng.

HS_VIEW
Lời chốt: “Sinh vật không thể tồn tại tách rời môi trường. Nếu không nhận đủ các chất cần thiết hoặc không loại bỏ được những chất cần thải, hoạt động sống sẽ bị rối loạn. Vì vậy, trao đổi chất và chuyển hoá năng lượng là điều kiện để sinh vật tồn tại, sinh trưởng và phát triển.”

Khối Ghi nhớ:
- Trao đổi chất cung cấp vật chất để xây dựng, duy trì và đổi mới cơ thể.
- Chuyển hoá năng lượng cung cấp năng lượng cho các hoạt động sống của sinh vật.
- Trao đổi chất giúp cơ thể loại bỏ những chất dư thừa hoặc cần thải ra ngoài.

Câu nối: “Những quá trình này diễn ra liên tục trong cơ thể sinh vật. Vậy chúng ta có thể nhận biết hoạt động trao đổi chất và chuyển hoá năng lượng qua những dấu hiệu nào? Ở module tiếp theo, bạn sẽ tìm hiểu các dấu hiệu đặc trưng của trao đổi chất và chuyển hoá năng lượng.”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY
Không tạo nhiệm vụ nhận thức mới.
Hiển thị toàn bộ khối ghi nhớ ngay khi vào Stage.
Có thể tái sử dụng sơ đồ ST01 dưới dạng thu nhỏ/mờ nhẹ phía nền; nếu tái sử dụng phải giữ nguyên hướng mũi tên và không che text.
Nhấn HOÀN THÀNH MODULE → ghi nhận M01 hoàn thành → thông báo trung tính “Đã hoàn thành module.”
Không điểm số, không phần trăm, không pháo giấy/ăn mừng.
Câu nối phải luôn hiển thị trọn vẹn trên mobile, không bị cắt bởi viewport hoặc nút cố định.

==============================
QA / REGRESSION LOCK
==============================
- Science: không trộn đầu vào tự dưỡng/dị dưỡng; không dùng tình huống bệnh lí khó suy luận.
- Pedagogy: ST00 chỉ gợi vấn đề; ST01 hình thành 3 vai trò; ST02 chỉ củng cố và nối M02.
- HS_VIEW/DEV_ONLY: tách rõ; không lộ mã asset/biến trạng thái cho học sinh.
- Interaction: sai đâu sửa đó; không reset toàn bộ.
- Visual: A01 không gợi đáp án bằng màu; sơ đồ ST01 là CODE/SVG một chiều, không biến thành chu trình; thẻ nối ST01 là UI/CSS, không gợi cặp đúng; các phần CODE/SVG/UI không cấp mã hình Axx.
- Continuity: ST00 đặt vấn đề → ST01 trả lời → ST02 chốt và hỏi sang dấu hiệu đặc trưng.
- Không mở rộng sang M05 tự dưỡng/dị dưỡng.

SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
PRODUCTION-SPEC-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT.
