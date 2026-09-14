FILE 1 — SH11-B02-M02 — CƠ CHẾ HẤP THỤ NƯỚC VÀ KHOÁNG Ở RỄ
Loại: HTML học lí thuyết
Trạng thái: VERIFIED FINAL – nội dung đã duyệt, sẵn sàng sản xuất HTML
Số Stage: 4 (ST00–ST03)

MỤC TIÊU MODULE
- Trình bày được cơ chế hấp thụ nước và ion khoáng ở rễ.
- Phân biệt được hấp thụ nước bằng thẩm thấu với hấp thụ ion khoáng theo cơ chế thụ động/chủ động.
- Trình bày được hai con đường vận chuyển nước và ion khoáng từ vùng lông hút vào mạch gỗ và vai trò của đai Caspary.

==============================
ST00 — RỄ HẤP THỤ NƯỚC VÀ ION KHOÁNG NHƯ THẾ NÀO?
Mã Stage: SH11-B02-M02-ST00

HS_VIEW
Lời dẫn: “Sau khi tưới nước và bón phân, nước và các ion khoáng trong đất được cây hấp thụ qua rễ. Vậy bộ phận nào của rễ trực tiếp tiếp xúc và hấp thụ chúng?”
HƯỚNG DẪN: “Nhấn vào hình rễ để quan sát vùng có nhiều lông hút. Vùng đã xem sẽ được làm nổi bật.”
Sau khi nhấn, hiện lời giảng: “Lông hút là phần kéo dài của tế bào biểu bì rễ, làm tăng diện tích tiếp xúc giữa rễ và đất. Qua bề mặt này, cây hấp thụ nước và các ion khoáng từ dung dịch đất.”
Câu chuyển: “Nước và ion khoáng đều đi qua tế bào lông hút, nhưng chúng có được hấp thụ theo cùng một cơ chế không?”
Nút: TIẾP TỤC.

DEV_ONLY
- Mục tiêu sư phạm: xác định đúng vị trí/bản chất của lông hút trước khi học cơ chế qua màng; không dùng đối chiếu hệ tiêu hoá động vật vì không cần cho mạch học đã duyệt.
- Desktop: vùng hình chiếm khoảng 58–64% chiều rộng bên trái; box lời giảng 32–38% bên phải. Mobile: hình trên, lời giảng dưới.
- Trạng thái đầu: hình rễ tĩnh; hotspot vùng lông hút chưa kích hoạt; lời giảng sau quan sát ẩn; nút TIẾP TỤC khóa.
- Khi nhấn hotspot: viền vùng lông hút sáng rõ nhưng không đổi hình thái; hiện lời giảng; đánh dấu `M02_ST00_rootHairViewed=true`; mở nút TIẾP TỤC.
- Vùng chạm hotspot ≥44×44 px; hotspot phải phủ vùng có nhiều lông hút nhưng không phủ toàn bộ rễ.
- Không có đúng/sai ở ST00.

ASSET A01 — RỄ CÓ VÙNG LÔNG HÚT
Mã: SH11-B02-M02-A01
Loại: REFERENCE-GUIDED SCIENTIFIC 2D / RASTER SẠCH; không tạo tự do nếu không có ảnh tham chiếu sinh học chuẩn.
PURPOSE: giúp HS nhận ra lông hút là phần kéo dài của tế bào biểu bì rễ và là vùng tiếp xúc trực tiếp với dung dịch đất.
LAYOUT: khung 4:3; đoạn rễ non đặt chéo nhẹ từ trên-trái xuống dưới-phải hoặc dọc gần trung tâm; rễ chính chiếm 55–65% chiều dài khung; vùng lông hút chiếm khoảng 35–45% chiều dài rễ và phải nhìn rõ ở trung cảnh; nền mô phỏng đất cắt đơn giản, không quá nhiều hạt.
REQUIRED OBJECTS: 1 đoạn rễ non; lớp biểu bì ngoài; nhiều lông hút mảnh mọc từ các tế bào biểu bì ở vùng trưởng thành; dung dịch đất/đất ẩm xung quanh; không cần nội cấu trúc sâu của rễ ở ST00.
OBJECT RELATIONS: mỗi lông hút phải là phần kéo dài của MỘT tế bào biểu bì, nhô ra ngoài bề mặt rễ và tiếp xúc trực tiếp với môi trường đất; lông hút không phải rễ con, không phải bó sợi mọc từ mọi lớp tế bào; mật độ nhiều nhưng các lông riêng vẫn phân biệt được.
ARROW MAP: không có mũi tên trong raster.
NEGATIVE CONTENT: không rễ con giả làm lông hút; không lông hút mọc từ chóp rễ; không mô tả như ống hút rỗng; không hệ tiêu hoá, không ATP, không protein màng, không ion/nước bay tự do, không chữ, không nhãn bake-in.
TEXT-LOCK: toàn bộ nhãn “vùng lông hút”, hotspot và chú thích là HTML; raster không chữ.
CONTINUITY: asset này là hình nền của ST00; nếu ST01 cần nhắc vị trí lông hút chỉ dùng thumbnail/crop của chính A01, không sinh hình rễ khác.
SCIENCE-LOCK: vùng lông hút nằm phía sau chóp rễ, không ngay tại chóp; lông hút là phần kéo dài của tế bào biểu bì; chỉ biểu diễn mức cấu tạo đủ cho nhận diện, không tự thêm cơ chế vận chuyển.
ACCEPTANCE TEST: (1) nhận ra rõ một đoạn rễ và vùng nhiều lông hút; (2) lông hút mảnh, mọc từ bề mặt biểu bì; (3) không bị hiểu là rễ con; (4) không có lông hút ở chóp; (5) hotspot có vùng sạch để đặt; (6) không chữ/mũi tên/biểu tượng cơ chế.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

==============================
ST01 — NƯỚC VÀ ION KHOÁNG ĐI VÀO TẾ BÀO LÔNG HÚT BẰNG CÁCH NÀO?
Mã Stage: SH11-B02-M02-ST01

HS_VIEW
Lời dẫn: “Quan sát sơ đồ tế bào lông hút và dung dịch đất ở phía ngoài.”
HƯỚNG DẪN 1: “Nhấn lần lượt vào vùng NƯỚC và ION KHOÁNG để xem cơ chế hấp thụ. Vùng đã xem sẽ đổi trạng thái.”
Khi nhấn NƯỚC: “Dịch tế bào lông hút có thế nước thấp hơn dung dịch đất nên nước đi từ đất vào tế bào lông hút theo cơ chế thẩm thấu, không cần tế bào tiêu tốn năng lượng trực tiếp cho sự vận chuyển này.”
Khi nhấn ION KHOÁNG: “Ion khoáng có thể được hấp thụ theo hai cơ chế: Thụ động: ion đi theo chiều gradien nồng độ. Chủ động: ion được vận chuyển ngược chiều gradien nồng độ và cần năng lượng.”
Sau khi xem đủ hai phần, hiện: “Như vậy, nước được hấp thụ chủ yếu bằng thẩm thấu, còn ion khoáng có thể được hấp thụ thụ động hoặc chủ động.”
HƯỚNG DẪN 2: “Kéo từng thẻ vào nhóm cơ chế phù hợp. Thẻ đặt sai sẽ trở lại vị trí ban đầu.”
Nhóm 1 – Hấp thụ nước:
- “Nước từ dung dịch đất đi vào tế bào lông hút theo thẩm thấu.”
Nhóm 2 – Hấp thụ ion khoáng:
- “Ion khoáng đi từ nơi có nồng độ cao đến nơi có nồng độ thấp.”
- “Ion khoáng được vận chuyển vào tế bào ngược chiều gradien nồng độ.”
- “Quá trình vận chuyển chủ động cần năng lượng.”
Câu chốt: “Nước được hấp thụ chủ yếu theo cơ chế thẩm thấu; ion khoáng được hấp thụ bằng cả cơ chế thụ động và chủ động.”
Nút: TIẾP TỤC.

DEV_ONLY
- Dùng CODE/SVG + HTML LAYER cho sơ đồ cơ chế; KHÔNG giao AI raster vẽ mũi tên/gradient.
- Desktop: sơ đồ chiếm 55–62% bên trái; panel giải thích 34–40% bên phải. Sau khi xem đủ hai hotspot, khu kéo-thả mở bên dưới hoặc thay panel phải. Mobile: sơ đồ trên, giải thích và thẻ dưới; không chồng sơ đồ.
- Trạng thái đầu: chỉ thấy sơ đồ cơ bản, hai hotspot NƯỚC/ION KHOÁNG; các đường/mũi tên cơ chế ở trạng thái trung tính; khu thẻ ẩn.
- Nhấn NƯỚC: highlight đường nước; mở tooltip nước; `waterViewed=true`.
- Nhấn ION KHOÁNG: highlight đồng thời hai tuyến ion thụ động/chủ động bằng kiểu nét khác nhau nhưng không dùng màu duy nhất làm mã nghĩa; `ionViewed=true`.
- Khi `waterViewed && ionViewed`: hiện câu chuyển + khu phân loại 4 thẻ.
- Desktop kéo-thả; mobile chạm thẻ→chạm vùng. Sai: thẻ quay về khay; giữ thẻ đúng. Hoàn thành khi 4/4 thẻ đúng; lưu `M02_ST01_complete=true`; mở TIẾP TỤC.

ASSET/BLUEPRINT — SƠ ĐỒ TẾ BÀO LÔNG HÚT VÀ CƠ CHẾ QUA MÀNG
Không tạo mã raster mới; CODE/SVG nội bộ HTML.
PURPOSE: hình thành phân biệt: nước đi theo thẩm thấu; ion khoáng có thể thụ động hoặc chủ động.
LAYOUT: khung 16:9. Vùng ngoài tế bào/dung dịch đất x=3–34%; màng sinh chất là dải cong/đứng tại x≈38–44%; tế bào lông hút x=44–96%. Phần lông hút kéo dài về phía trái vào dung dịch đất; không cần vẽ toàn bộ rễ. Trong tế bào có vùng tế bào chất và không bào ở mức tối giản, không cần bào quan khác.
REQUIRED OBJECTS: phía ngoài = dung dịch đất; màng sinh chất; tế bào lông hút; nhóm ký hiệu H₂O; nhóm ký hiệu ion khoáng trung tính; một protein vận chuyển màng cho tuyến chủ động nếu cần minh họa; biểu tượng năng lượng chỉ hiện sau khi mở hotspot chủ động và là SVG/HTML.
OBJECT RELATIONS: H₂O ở ngoài và trong được phân bố minh hoạ; ion khoáng phải đi QUA màng sinh chất, không xuyên tự do qua thành/màng trong hình cơ chế chủ động; protein vận chuyển nằm xuyên màng, không lơ lửng trong tế bào.
ARROW MAP:
- W1 [FROM] vùng dung dịch đất ngay ngoài màng → [TO] vùng tế bào chất ngay trong màng → [MEANS] nước đi vào tế bào lông hút theo thẩm thấu do chênh lệch thế nước. Chỉ một chiều ngoài→trong trong ví dụ hấp thụ đang xét.
- I1 [FROM] vùng phía ngoài có nồng độ ion minh họa cao hơn → [TO] vùng phía trong có nồng độ ion minh họa thấp hơn → [MEANS] ion đi theo chiều gradien nồng độ bằng cơ chế thụ động.
- I2 [FROM] vùng phía ngoài có nồng độ ion minh họa thấp hơn → [TO] vùng phía trong có nồng độ ion minh họa cao hơn, đi qua protein vận chuyển → [MEANS] ion được vận chuyển ngược chiều gradien nồng độ bằng cơ chế chủ động và cần năng lượng.
- E1 [FROM] biểu tượng năng lượng/ATP ở phía tế bào chất cạnh protein → [TO] protein vận chuyển của tuyến I2 → [MEANS] năng lượng được cung cấp cho vận chuyển chủ động; không vẽ ATP chạy cùng ion qua màng.
NEGATIVE CONTENT: không “nước chủ động”; không mũi tên nước theo gradien nồng độ chất tan; không ion xuyên màng chủ động mà không qua protein; không biến protein thành “xe tải”; không thêm kênh/đồng vận chuyển cụ thể ngoài phạm vi; không chữ bake-in.
TEXT-LOCK: NƯỚC, ION KHOÁNG, THỤ ĐỘNG, CHỦ ĐỘNG và mọi tooltip là HTML/SVG text; không nằm trong raster.
CONTINUITY: cùng sơ đồ giữ nguyên khi chuyển giữa hai hotspot; chỉ thay highlight/tooltip, không đổi vị trí màng/tế bào.
SCIENCE-LOCK: dùng “thế nước” cho nước; gradien nồng độ chỉ khóa cho ion; không đồng nhất hai gradient. Vận chuyển chủ động cần năng lượng nhưng không dạy chi tiết loại protein ngoài phạm vi module.
ACCEPTANCE TEST: đúng 3 tuyến W1/I1/I2; đúng đầu–cuối; I2 bắt buộc qua protein và có E1; resize không đảo chiều; tắt text vẫn không làm mũi tên đổi topology; không xuất hiện “nước chủ động”.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

ASSET — 4 THẺ PHÂN LOẠI
Không tạo ảnh/mã hình. Native HTML/CSS, text đúng nguyên văn HS_VIEW; không icon/màu gợi đáp án; desktop kéo-thả, mobile chạm-thẻ→chạm-vùng.

==============================
ST02 — NƯỚC VÀ ION KHOÁNG ĐI TỪ LÔNG HÚT VÀO MẠCH GỖ BẰNG NHỮNG CON ĐƯỜNG NÀO?
Mã Stage: SH11-B02-M02-ST02

HS_VIEW
Lời dẫn: “Sau khi đi vào vùng rễ, nước và ion khoáng tiếp tục di chuyển qua các lớp tế bào để đến mạch gỗ.”
HƯỚNG DẪN 1: “Nhấn lần lượt vào CON ĐƯỜNG GIAN BÀO và CON ĐƯỜNG TẾ BÀO CHẤT trên sơ đồ. Con đường đã xem sẽ được làm nổi bật.”
Con đường gian bào: “Nước và ion khoáng di chuyển qua thành tế bào và các khoảng gian bào. Khi đến lớp nội bì, đai Caspary ngăn dòng vận chuyển tiếp tục đi hoàn toàn theo con đường gian bào.”
Con đường tế bào chất: “Nước và ion khoáng di chuyển qua tế bào chất của các tế bào rễ và truyền từ tế bào này sang tế bào khác qua cầu sinh chất.”
Sau khi xem hai con đường, hiện HƯỚNG DẪN 2: “Nhấn vào ĐAI CASPARY để xem điều gì xảy ra tại nội bì.”
Khi nhấn ĐAI CASPARY: “Đai Caspary ngăn nước và ion khoáng tiếp tục đi qua thành tế bào tại nội bì. Vì vậy, các chất theo con đường gian bào phải đi qua màng tế bào nội bì trước khi vào trung trụ và mạch gỗ. Nhờ đó, sự đưa các ion khoáng vào mạch gỗ được kiểm soát.”
Câu hỏi củng cố: “Tại nội bì, điều gì xảy ra với nước và ion khoáng đang đi theo con đường gian bào?”
A. “Tiếp tục đi tự do qua thành tế bào đến mạch gỗ.”
B. “Bị đai Caspary ngăn lại và phải đi qua màng tế bào nội bì.”
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Đai Caspary chặn con đường gian bào tại nội bì, khiến nước và ion khoáng phải đi qua màng tế bào trước khi tiếp tục vào mạch gỗ.”
Phản hồi sai: “Hãy quan sát lại vị trí đai Caspary ở lớp nội bì. Đường gian bào không thể tiếp tục đi xuyên qua thành tế bào tại vị trí này.”
Nút đúng: TIẾP TỤC. Nút sai: LÀM LẠI.

DEV_ONLY
- Sơ đồ bắt buộc dựng CODE/SVG theo hình học kiểm soát; không dùng free AI raster vì sai một lớp tế bào/đường đi/đai Caspary sẽ làm sai kiến thức.
- Desktop: mặt cắt rễ chiếm 62–68% màn; panel chú thích 28–34%. Mobile: sơ đồ chiếm toàn chiều rộng, có zoom/pan giới hạn nhưng hotspot vẫn neo đúng đối tượng.
- Trạng thái đầu: hai tuyến hiện mờ/trung tính; hotspot GIAN BÀO, TẾ BÀO CHẤT hoạt động; hotspot CASPARY khóa.
- Sau khi xem cả hai tuyến: mở hotspot CASPARY. Sau khi xem Caspary: hiện câu hỏi A/B.
- Chọn A: hiện phản hồi sai + LÀM LẠI; không xóa trạng thái đã xem 3 hotspot.
- Chọn B: hiện phản hồi đúng + TIẾP TỤC; lưu `M02_ST02_complete=true`.

ASSET/BLUEPRINT — MẶT CẮT RỄ, HAI CON ĐƯỜNG VÀ ĐAI CASPARY
Không tạo mã raster mới; CODE/SVG SCIENTIFIC nội bộ HTML, bám hình nguồn module/SGK về hai con đường.
PURPOSE: hình thành đúng topology từ ngoài rễ → biểu bì/lông hút → vỏ → nội bì → trung trụ/mạch gỗ và cho thấy đai Caspary chỉ chặn tuyến gian bào tại nội bì.
LAYOUT: khung ngang 16:9, mô hình dạng lát xuyên tâm từ NGOÀI RỄ bên trái sang TRUNG TÂM RỄ bên phải. Các dải lớp theo x: dung dịch đất 2–12%; biểu bì/lông hút 12–24%; vỏ 24–55%; nội bì 55–66%; trung trụ 66–95%; mạch gỗ nằm trong trung trụ, tâm khoảng x=78–90%. Có thể dùng 3–5 tế bào đại diện mỗi lớp thay vì toàn vòng rễ để dễ nhìn, nhưng thứ tự lớp không đổi.
REQUIRED OBJECTS: môi trường đất; tế bào lông hút/biểu bì; vài tế bào vỏ; một hàng tế bào nội bì; đai Caspary nằm trong thành bên/radial–transverse của tế bào nội bì; trung trụ; mạch gỗ; tuyến gian bào; tuyến tế bào chất; cầu sinh chất minh họa tối giản cho tuyến tế bào chất.
OBJECT RELATIONS: tuyến gian bào chạy dọc thành tế bào/khoảng gian bào qua biểu bì và vỏ; khi chạm nội bì tại vị trí đai Caspary không được tiếp tục xuyên qua thành, mà phải chuyển qua màng/tế bào chất nội bì trước khi vào trung trụ. Tuyến tế bào chất đi qua bên trong tế bào nối tiếp qua cầu sinh chất và không bị “đai Caspary chặn” như tuyến gian bào.
ARROW MAP:
- A1 [FROM] dung dịch đất sát bề mặt lông hút → [TO] thành/khoảng gian bào của biểu bì-vỏ → [MEANS] khởi đầu con đường gian bào.
- A2 [FROM] thành/khoảng gian bào qua các tế bào vỏ → [TO] mặt ngoài của lớp nội bì tại vị trí đai Caspary → [MEANS] dòng gian bào tiến tới nội bì.
- A3 [FROM] điểm dừng A2 ngay trước đai Caspary → [TO] tế bào chất của tế bào nội bì sau khi đi qua màng sinh chất → [MEANS] dòng gian bào bị chặn tại đai Caspary và buộc phải qua màng/tế bào nội bì.
- A4 [FROM] tế bào chất nội bì → [TO] trung trụ/mạch gỗ → [MEANS] nước và ion khoáng tiếp tục đi vào hệ mạch sau bước kiểm soát tại nội bì.
- S1 [FROM] tế bào lông hút → [TO] tế bào chất tế bào vỏ kế cận qua cầu sinh chất → [MEANS] con đường tế bào chất.
- S2 [FROM] tế bào chất các tế bào vỏ nối tiếp → [TO] tế bào chất nội bì → [MEANS] tuyến tế bào chất tiếp tục qua các tế bào sống.
- S3 [FROM] tế bào chất nội bì → [TO] trung trụ/mạch gỗ → [MEANS] tuyến tế bào chất đi vào mạch gỗ; không bị chặn bởi đai Caspary theo kiểu tuyến gian bào.
NEGATIVE CONTENT: không vẽ đai Caspary thành vòng chắn ngoài toàn bộ nội bì; không chặn tuyến tế bào chất; không để tuyến gian bào đi xuyên thẳng qua đai; không đảo vị trí nội bì/trung trụ; không biến mạch gỗ thành lớp ngoài; không mũi tên hai chiều mơ hồ; không dùng ẩn dụ “bộ lọc” như cơ quan độc lập; không chữ bake-in.
TEXT-LOCK: tên lớp, tên hai con đường, đai Caspary, mạch gỗ và tooltip đều là SVG/HTML text có thể bật/tắt; không raster text.
CONTINUITY: cùng một sơ đồ dùng xuyên toàn ST02; chỉ highlight từng tuyến và Caspary, không thay hình/camera giữa các thao tác. Khi hiện câu hỏi, sơ đồ vẫn giữ trạng thái đã khám phá đủ ba hotspot.
SCIENCE-LOCK: thứ tự lớp ngoài→trong cố định; đai Caspary thuộc nội bì; chỉ tuyến gian bào bị chặn tại đai; tuyến tế bào chất qua cầu sinh chất; cả hai cuối cùng hướng về trung trụ/mạch gỗ.
ACCEPTANCE TEST: kiểm trực tiếp 7 arrow A1–A4/S1–S3 đúng FROM→TO→MEANS; A2 dừng trước đai; A3 bắt buộc xuyên màng vào tế bào nội bì; không có đường gian bào đi xuyên đai; tuyến tế bào chất không bị đai chặn; mạch gỗ nằm phía trong nội bì; resize không đảo topology.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

ASSET — CÂU HỎI A/B
Không tạo ảnh/mã hình. Native HTML/CSS; phản hồi mặc định ẩn; A sai cho chọn lại, B đúng mới mở TIẾP TỤC.

==============================
ST03 — GHI NHỚ VÀ KẾT NỐI
Mã Stage: SH11-B02-M02-ST03

HS_VIEW
GHI NHỚ
1. “Nước được rễ hấp thụ chủ yếu theo cơ chế thẩm thấu.”
2. “Ion khoáng có thể được hấp thụ theo cơ chế thụ động hoặc chủ động.”
3. “Từ vùng lông hút đến mạch gỗ, nước và ion khoáng di chuyển theo con đường gian bào hoặc con đường tế bào chất.”
4. “Tại nội bì, đai Caspary ngăn con đường gian bào, buộc dòng vật chất phải đi qua màng tế bào trước khi vào trung trụ.”
Kết nối sang M03: “Nước và ion khoáng đã vào được mạch gỗ của rễ. Vậy chúng được vận chuyển từ rễ lên thân và lá bằng cách nào?”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY
- Không có asset mới. Khối GHI NHỚ dựng HTML/CSS.
- Nội dung hiện đầy đủ khi vào ST03; không yêu cầu HS làm lại nhiệm vụ ST01/ST02.
- Nút HOÀN THÀNH MODULE khả dụng ngay khi ST03 tải xong; nhấn nút ghi hoàn thành module và hiện thông báo trung tính.
- Giữ dữ liệu `M02_ST01_complete`, `M02_ST02_complete` cho AI gia sư/analytics.
- Không hiệu ứng điểm số/ăn mừng.

FINAL QA
- E1 Science: PASS. Đã khóa lông hút là phần kéo dài của tế bào biểu bì; nước theo thẩm thấu dựa trên thế nước; ion thụ động/chủ động; hai con đường và vị trí/ý nghĩa đai Caspary.
- E2 Curriculum/Pedagogy: PASS. Mạch học: vị trí hấp thụ → cơ chế qua màng → đường vào mạch gỗ → chốt/kết nối; không dùng đối chiếu hệ tiêu hoá thừa.
- E3 HTML: PASS. HS_VIEW/DEV_ONLY tách lớp; state/nút/đúng-sai/mobile được khóa.
- E5 Visual: PASS. Chỉ A01 cần asset raster/reference-guided; sơ đồ ST01/ST02 dùng CODE/SVG với Arrow Map đầy đủ; UI không tạo ảnh.
- E7 Regression: PASS. Không dùng “nước luôn”; không gọi tế bào lông hút là cơ quan; không dùng ion nitrat cụ thể để suy rộng; không mô tả Caspary như “bộ lọc” tuyệt đối; không có mũi tên khoa học mơ hồ.

ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC CỦA SH11-B02-M02.
