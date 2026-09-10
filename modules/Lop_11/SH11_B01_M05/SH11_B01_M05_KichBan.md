FILE 1 — SH11-B01-M05 — CÁC PHƯƠNG THỨC TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG: TỰ DƯỠNG VÀ DỊ DƯỠNG
Loại: HTML học lí thuyết
Số Stage: 4 (ST00 Hook; ST01; ST02; ST03 Ghi nhớ – Kết nối)
Phạm vi: SH11-B01-M05-ST00 → SH11-B01-M05-ST03
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT.

NGUYÊN TẮC SẢN XUẤT CHUNG
- HS_VIEW và DEV_ONLY tách tuyệt đối.
- Tiêu chí trọng tâm để phân biệt tự dưỡng và dị dưỡng là nguồn carbon mà sinh vật sử dụng.
- Không nói cây “tạo chất hữu cơ từ ánh sáng”; ánh sáng là nguồn năng lượng, CO₂ là nguồn carbon vô cơ.
- Không định nghĩa hoá tự dưỡng bằng điều kiện “không có ánh sáng”.
- Không dùng một hình vi khuẩn có hình thái giả định để khẳng định một loài cụ thể nếu không có ảnh tham chiếu.
- Không coi cây bắt mồi là sinh vật dị dưỡng hoàn toàn; cây nắp ấm vẫn quang hợp và dùng CO₂ làm nguồn carbon chính.
- Mobile: vùng chạm tối thiểu 44×44 px; ưu tiên chạm chọn → chạm đích thay cho kéo dài.
- Trên Sheet, dòng nào không tạo ảnh mới thì không tạo mã hình mới; ghi rõ DÙNG LẠI hoặc KHÔNG TẠO ẢNH.

==============================
ST00 — SINH VẬT CÓ ĐƯỢC CHẤT HỮU CƠ BẰNG CÁCH NÀO?
==============================
Mã Stage: SH11-B01-M05-ST00

HS_VIEW
Câu hỏi mở đầu: “Cây xanh và con người đều cần chất hữu cơ để xây dựng cơ thể và duy trì hoạt động sống. Vậy vì sao cây có thể tự tổng hợp chất hữu cơ, còn con người phải lấy chất hữu cơ từ thức ăn?”

Lời dẫn: “Quan sát hai hình dưới đây. Nhấn vào từng hình để xem cây và người có được chất hữu cơ theo những cách khác nhau như thế nào.”

HƯỚNG DẪN: “Nhấn vào từng điểm đánh dấu. Điểm đã xem sẽ đổi trạng thái. Khi xem đủ hai điểm, nút TIẾP TỤC sẽ xuất hiện.”

Hotspot cây: “Cây xanh sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ từ các chất vô cơ, trong đó CO₂ là nguồn carbon.”

Hotspot người: “Con người không tự tổng hợp chất hữu cơ từ CO₂. Cơ thể phải thu nhận nguồn carbon hữu cơ có sẵn từ thức ăn.”

Câu chốt ST00: “Như vậy, sinh vật có thể khác nhau về cách thu nhận nguồn carbon để tạo nên các chất hữu cơ của cơ thể. Đây là cơ sở để phân biệt hai phương thức tự dưỡng và dị dưỡng.”

Nút: TIẾP TỤC.

DEV_ONLY
- Desktop: hai ảnh đặt song song, mỗi ảnh chiếm khoảng 42–46% chiều ngang vùng nội dung; giữa hai ảnh chừa 6–10% khoảng cách. Mobile: hai ảnh xếp dọc, giữ cùng tỉ lệ khung.
- Hotspot là HTML overlay, không bake vào ảnh. Hotspot đã xem đổi viền/trạng thái trung tính, không dùng màu đúng/sai.
- TIẾP TỤC khóa đến khi đã xem đủ cả hai hotspot; không tự chuyển Stage.
- Không xuất hiện nhãn “tự dưỡng/dị dưỡng” trên ảnh trước khi HS khám phá xong hai hotspot.

HÌNH ST00 — CÂY XANH QUANG HỢP — DÙNG LẠI, KHÔNG TẠO MỚI
OVERRIDE BÀN GIAO: dùng nguyên raster SH11-B01-M03-A01 đã duyệt: https://drive.google.com/file/d/1KHFpCkEFBvAsONX0HVmtntspBi9Sw9qD/view?usp=drivesdk. Không cấp mã hình mới trong M05. Các dòng blueprint bên dưới chỉ dùng để kiểm tra tính phù hợp của ảnh reuse, không phải lệnh tạo asset mới.
Loại hình tham chiếu cho asset REUSE đã duyệt — KHÔNG TẠO MỚI, KHÔNG CẤP MÃ HÌNH.
Mục đích sư phạm: để HS nhận ra đây là cây xanh khoẻ đang sống trong điều kiện có ánh sáng, từ đó khai thác việc cây sử dụng năng lượng ánh sáng và CO₂ để tổng hợp chất hữu cơ; hình không được tự “trả lời” bằng sơ đồ hay nhãn.
VISUAL BLUEPRINT:
- Khung ngang 4:3; độ phân giải tối thiểu tương đương 1600×1200 px trước khi cắt responsive.
- Chủ thể: 01 cây thân thảo xanh khoẻ, cao trung bình, không có hoa/quả nổi bật; toàn cây từ gốc đến ngọn nhìn thấy rõ. Cây chiếm khoảng 58–65% chiều cao khung và 38–45% chiều rộng khung.
- Vị trí cây: tâm cây x≈48–52%, đáy thân y≈80–84%, ngọn y≈18–24%. Chừa phía trên tán 12–15% khoảng trống để đặt hotspot/tooltip nếu cần.
- Hình thái: thân thẳng tự nhiên, 8–14 lá xanh nguyên vẹn, phiến lá không quá to; màu xanh lá tự nhiên, không phát sáng. Không vẽ cây héo, vàng lá hoặc thiếu dinh dưỡng.
- Nền: bối cảnh ngoài trời đơn giản; nền đất hoặc chậu cây gọn, màu trung tính; phía sau là mảng trời sáng hoặc nền thiên nhiên làm mờ, không có vật thể cạnh tranh chú ý.
- Ánh sáng: ánh sáng ban ngày mềm từ góc trên trái hoặc trên phải; có bóng đổ nhẹ tự nhiên. Không vẽ tia nắng thành các đường mũi tên khoa học và không biến tia nắng thành “năng lượng” dạng sét, hạt sáng hay ATP.
- Vùng hotspot: vùng tán lá x≈28–72%, y≈16–58%, phải sạch, không bị nền nhiều chi tiết che; overlay tối thiểu 44×44 px trên mobile.
- Không bake vào raster: chữ “CO₂”, “H₂O”, “ánh sáng”, mũi tên, biểu tượng năng lượng, hotspot, nhãn quang hợp; tất cả nếu cần sẽ là lớp HTML.
- CẤM: rễ hút “thức ăn”; chất hữu cơ đi từ đất vào cây; CO₂ đi vào rễ; lá phát sáng; ảnh cây ăn côn trùng; vẽ ATP, lục lạp phóng đại, phương trình quang hợp, bong bóng khí quá mức.
- ACCEPTANCE TEST: (1) nhìn ảnh không UI phải nhận ra ngay cây xanh khoẻ; (2) không có chi tiết nào ám chỉ cây lấy chất hữu cơ có sẵn từ đất; (3) tán lá đủ sạch để đặt hotspot; (4) hình chưa hé thuật ngữ “tự dưỡng”.

HÌNH ST00 — NGƯỜI ĐANG ĂN — DÙNG LẠI, KHÔNG TẠO MỚI
OVERRIDE BÀN GIAO: dùng nguyên raster SH11-B01-M02-A01 đã duyệt: https://drive.google.com/file/d/1thD533c7ez0KOeAS0qY6dnkkk4S8hu2j/view?usp=drivesdk. Không cấp mã hình mới trong M05. Các dòng blueprint bên dưới chỉ dùng để kiểm tra ảnh reuse.
Loại hình tham chiếu cho asset REUSE đã duyệt — KHÔNG TẠO MỚI, KHÔNG CẤP MÃ HÌNH.
Mục đích sư phạm: cho thấy con người thu nhận chất hữu cơ có sẵn qua thức ăn, không nhằm minh hoạ tiêu hoá hay dinh dưỡng chi tiết.
VISUAL BLUEPRINT:
- Khung ngang 4:3, phong cách và mức độ hoàn thiện đồng bộ với ảnh cây ST00.
- Chủ thể: 01 người trẻ khoảng 16–22 tuổi, khoẻ mạnh, ngồi tại bàn ăn; nửa người trên chiếm khoảng 58–68% chiều cao khung.
- Vị trí: thân người x≈45–65%, y≈18–88%; bàn ăn y≈62–94%. Góc nhìn 3/4 trước mặt, lệch 10–20° để nhìn rõ khuôn mặt, bàn tay và thức ăn.
- Hành động: một tay cầm thìa/đũa hoặc đưa một miếng thức ăn về phía miệng; miệng ở trạng thái tự nhiên, không phóng đại nhai nuốt. Hành vi phải được nhận ra là “đang ăn”.
- Bữa ăn: 01 bát/đĩa cơm hoặc món ăn cân bằng, 2–4 nhóm thực phẩm quen thuộc, không nhãn thương hiệu; không biến thành quảng cáo món ăn.
- Vùng hotspot: vùng thức ăn + tay + miệng x≈30–72%, y≈34–78%; phải chừa khoảng trống quanh vùng này để overlay hotspot/tooltip.
- Nền: bàn ăn gia đình/căn tin sạch, hậu cảnh làm mờ; không nhà hàng sang trọng, không bối cảnh bệnh viện.
- CẤM: sơ đồ tiêu hoá, nội tạng, phân tử dinh dưỡng, mũi tên thức ăn vào máu, tia năng lượng, icon calo, khẩu hiệu; không vẽ người xanh lá hoặc quang hợp.
- ACCEPTANCE TEST: (1) nhìn ảnh nhận ra ngay hành vi ăn; (2) thức ăn rõ nhưng không chiếm toàn khung; (3) vùng miệng/thức ăn đặt hotspot được; (4) không có chi tiết giải phẫu hoặc biểu tượng năng lượng ngoài phạm vi module.

==============================
ST01 — TỰ DƯỠNG: QUANG TỰ DƯỠNG VÀ HOÁ TỰ DƯỠNG
==============================
Mã Stage: SH11-B01-M05-ST01

HS_VIEW
Lời dẫn: “Sinh vật tự dưỡng có khả năng tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Tuy nhiên, không phải mọi sinh vật tự dưỡng đều sử dụng cùng một nguồn năng lượng.”

HƯỚNG DẪN: “Nhấn vào Quang tự dưỡng và Hoá tự dưỡng để xem nguồn năng lượng của mỗi kiểu. Khi xem đủ hai phần, hoạt động phân loại sẽ xuất hiện.”

Hotspot Quang tự dưỡng: “Sinh vật quang tự dưỡng sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Thực vật xanh và nhiều loài tảo là những ví dụ quen thuộc.”

Hotspot Hoá tự dưỡng: “Sinh vật hoá tự dưỡng sử dụng năng lượng thu được từ quá trình oxy hoá các chất vô cơ để tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Một số vi khuẩn là sinh vật hoá tự dưỡng.”

Câu chuyển: “Cả quang tự dưỡng và hoá tự dưỡng đều sử dụng nguồn carbon vô cơ để tổng hợp chất hữu cơ; điểm khác nhau nằm ở nguồn năng lượng mà chúng sử dụng.”

NHIỆM VỤ PHÂN LOẠI
Hai nhóm: Quang tự dưỡng / Hoá tự dưỡng.
Bốn thẻ:
1. “Cây lúa sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ.”
2. “Tảo lục sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ.”
3. “Một số vi khuẩn oxy hoá hợp chất lưu huỳnh vô cơ để thu năng lượng.”
4. “Một số vi khuẩn nitrat hoá thu năng lượng từ quá trình oxy hoá các hợp chất nitơ vô cơ.”
HƯỚNG DẪN: “Kéo từng ví dụ vào nhóm phù hợp. Bạn có thể thay đổi vị trí trước khi nhấn KIỂM TRA.”
Đáp án: 1–2 → Quang tự dưỡng; 3–4 → Hoá tự dưỡng.
Phản hồi đúng: “Chính xác. Quang tự dưỡng sử dụng năng lượng ánh sáng, còn hoá tự dưỡng sử dụng năng lượng từ quá trình oxy hoá các chất vô cơ. Cả hai đều tổng hợp chất hữu cơ từ nguồn carbon vô cơ.”
Phản hồi sai: “Chưa đúng. Hãy xem sinh vật trong ví dụ đang sử dụng năng lượng ánh sáng hay năng lượng từ quá trình oxy hoá chất vô cơ, rồi thử lại.”
Chốt ST01: “Tự dưỡng là phương thức sinh vật tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Tự dưỡng gồm quang tự dưỡng và hoá tự dưỡng, khác nhau chủ yếu ở nguồn năng lượng sử dụng.”
Nút: TIẾP TỤC.

DEV_ONLY
- Phần Quang tự dưỡng DÙNG LẠI chính ảnh cây ST00, không tạo mã hình mới. Ảnh phải giữ nguyên crop, cây, ánh sáng và màu; chỉ bổ sung lớp HTML khi tương tác.
- Phần Hoá tự dưỡng dùng 01 minh hoạ khoa học khái quát do đội HTML dựng bằng CODE/SVG; KHÔNG tạo raster mới, KHÔNG cấp mã hình Axx; không bắt hình thái vi khuẩn phải đại diện một loài cụ thể.
- Hai hotspot phải mở tooltip độc lập; xem đủ hai hotspot mới mở khu phân loại.
- Desktop: kéo-thả. Mobile: chạm thẻ → chạm vùng đích; không bắt giữ-kéo dài.
- KIỂM TRA chỉ mở khi đủ 4 thẻ đã được đặt. Sai chỉ trả thẻ sai; giữ thẻ đúng.
- Lưu M05_st01_hoanthanh=true khi 4 thẻ đúng và phản hồi đúng đã hiển thị.

DÙNG LẠI HÌNH CÂY ST00 — KHÔNG TẠO HÌNH MỚI
- Giữ nguyên 100% ảnh cây đã duyệt ở ST00: cùng cây, cùng góc nhìn, cùng crop, cùng ánh sáng, cùng màu nền.
- Chỉ lớp HTML được phép thay đổi: khi HS nhấn “Quang tự dưỡng”, có thể xuất hiện icon/nhãn HTML tối giản chỉ sau tương tác để chỉ “năng lượng ánh sáng” và “nguồn carbon vô cơ (CO₂)”; không bake vào raster.
- Không tạo mã hình mới trên Sheet cho phần dùng lại này.

MINH HOẠ ST01 — VI KHUẨN HOÁ TỰ DƯỠNG — CODE/SVG, KHÔNG TẠO RASTER
OVERRIDE BÀN GIAO: đội HTML dựng minh hoạ khoa học khái quát bằng SVG/CSS theo blueprint bên dưới; KHÔNG cấp mã hình Axx, KHÔNG yêu cầu asset raster riêng.
Loại: CODE/SVG do đội HTML dựng theo đặc tả khoa học khái quát — KHÔNG TẠO RASTER, KHÔNG CẤP MÃ HÌNH.
Mục đích sư phạm: tạo nền trực quan cho khái niệm một số vi khuẩn sử dụng năng lượng từ oxy hoá chất vô cơ; hình không tự định nghĩa hoá tự dưỡng bằng “bóng tối” và không cho HS hiểu hình dạng này là đặc trưng của toàn nhóm.
VISUAL BLUEPRINT:
- Khung ngang 4:3. Góc nhìn mô phỏng vi cảnh/microscopic educational illustration, không phải ảnh SEM giả.
- Chủ thể: một cụm 15–30 tế bào vi khuẩn đơn giản dạng que ngắn và/hoặc cầu nhỏ, kích thước tương đối đồng đều; mỗi tế bào dài khoảng 2–4% chiều rộng khung; phân bố trong vùng x≈18–82%, y≈20–78%. Không tạo một “siêu vi khuẩn” lớn ở giữa khung.
- Bề mặt tế bào: trơn, màu trung tính xanh lam nhạt/xám xanh/be sáng; không lông roi, bào tử, màng nhầy hay cấu trúc đặc hiệu nếu không cần cho mục tiêu. Không có chất diệp lục, lá, lục lạp.
- Môi trường: nền nước/khoáng hoặc bề mặt hạt khoáng trừu tượng, có 4–8 hạt/kết cấu vô cơ kích thước khác nhau, màu xám/nâu nhạt, không tạo cảnh đáy biển sâu bắt buộc và không dùng bóng tối như tiêu chí.
- Ánh sáng: trung tính, đủ thấy tế bào. Không cần thể hiện Mặt Trời cũng không cố tình “không có ánh sáng”.
- Vùng overlay: chừa khoảng trống x≈8–25%, y≈8–22% và x≈72–94%, y≈8–22% để HTML có thể đặt nhãn ví dụ chất vô cơ/nguồn năng lượng sau tương tác; không bake H₂S, NH₄⁺, NO₂⁻ vào ảnh.
- Khi HTML khai thác, chỉ sau khi HS nhấn mới xuất hiện lớp ký hiệu/nhãn giải thích “oxy hoá chất vô cơ → thu năng lượng”; lớp này thuộc UI, không phải raster.
- CẤM: tia nắng đi vào vi khuẩn; vi khuẩn màu xanh lá có lục lạp; hình suối nước nóng/miệng phun thuỷ nhiệt khiến HS hiểu mọi vi khuẩn hoá tự dưỡng sống ở đó; nhãn “không có ánh sáng”; một loài vi khuẩn cụ thể không có nguồn tham chiếu; mũi tên/ATP bake vào ảnh.
- ACCEPTANCE TEST: (1) nhìn ảnh biết đây là minh hoạ vi khuẩn trong môi trường có chất vô cơ; (2) không có dấu hiệu quang hợp; (3) không suy ra điều kiện bắt buộc là bóng tối; (4) đủ vùng sạch để lớp HTML giải thích nguồn năng lượng; (5) hình không tuyên bố hình thái của một loài cụ thể.

KHU PHÂN LOẠI ST01 — KHÔNG TẠO ẢNH
- Native HTML/CSS, không mã hình.
- Hai vùng đích: “Quang tự dưỡng” và “Hoá tự dưỡng”.
- Bốn thẻ dùng nguyên văn HS_VIEW; không icon Mặt Trời/hoá chất ở trạng thái đầu vì sẽ gợi đáp án.
- Sau khi kiểm tra đúng mới được dùng icon nhỏ để củng cố, nếu cần; icon là UI, không phải asset ảnh.

==============================
ST02 — DỊ DƯỠNG VÀ TIÊU CHÍ PHÂN BIỆT
==============================
Mã Stage: SH11-B01-M05-ST02

HS_VIEW
Lời dẫn: “Không phải sinh vật nào cũng có khả năng tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Nhiều sinh vật phải sử dụng nguồn carbon hữu cơ có sẵn trong môi trường hoặc từ sinh vật khác.”

Hotspot động vật: “Động vật là những sinh vật dị dưỡng điển hình. Chúng thu nhận chất hữu cơ có sẵn qua thức ăn, sau đó tiêu hoá, hấp thụ và sử dụng các chất đó để xây dựng cơ thể và cung cấp năng lượng cho hoạt động sống.”

Câu hỏi gây hiểu sai: “Cây nắp ấm vừa quang hợp vừa bắt côn trùng. Vậy việc bắt côn trùng có làm cây nắp ấm trở thành sinh vật dị dưỡng không?”

Hotspot cây nắp ấm: “Cây nắp ấm vẫn tổng hợp phần lớn chất hữu cơ từ CO₂ nhờ quang hợp. Côn trùng mà cây bắt được chủ yếu cung cấp thêm các chất dinh dưỡng khoáng, đặc biệt là nguồn nitơ, nên không làm thay đổi phương thức dinh dưỡng tự dưỡng của cây.”

Câu chuyển: “Trường hợp cây nắp ấm cho thấy không thể phân biệt tự dưỡng và dị dưỡng chỉ dựa vào việc sinh vật có ‘ăn’ hay không. Cần dựa vào nguồn carbon mà sinh vật sử dụng.”

Câu hỏi củng cố: “Tiêu chí quan trọng để phân biệt tự dưỡng và dị dưỡng là gì?”
A. “Nguồn carbon mà sinh vật sử dụng để tạo nên chất hữu cơ của cơ thể.”
B. “Khả năng di chuyển của sinh vật.”
Đáp án đúng: A.
Phản hồi đúng: “Chính xác. Sinh vật tự dưỡng sử dụng nguồn carbon vô cơ để tổng hợp chất hữu cơ; sinh vật dị dưỡng sử dụng nguồn carbon hữu cơ có sẵn.”
Phản hồi sai: “Chưa đúng. Khả năng di chuyển không phản ánh cách sinh vật có được chất hữu cơ. Hãy xem lại nguồn carbon mà sinh vật sử dụng.”
Chốt ST02: “Dị dưỡng là phương thức sinh vật sử dụng nguồn carbon hữu cơ có sẵn. Vì vậy, điểm cốt lõi để phân biệt tự dưỡng và dị dưỡng là nguồn carbon mà sinh vật sử dụng.”
Nút: TIẾP TỤC.

DEV_ONLY
- Hai ảnh ST02 đặt song song trên desktop, xếp dọc trên mobile. Hotspot là HTML overlay.
- Câu hỏi củng cố chỉ xuất hiện sau khi đã xem đủ hai hotspot; chọn sai không reset hotspot.
- Đáp án đúng mở TIẾP TỤC và lưu M05_st02_hoanthanh=true.
- Không dùng hình săn mồi bạo lực; mục tiêu là phương thức lấy carbon hữu cơ, không phải quan hệ vật ăn thịt–con mồi.

HÌNH ST02 — ĐỘNG VẬT DỊ DƯỠNG ĐANG ĂN — DÙNG LẠI, KHÔNG TẠO MỚI
OVERRIDE BÀN GIAO: dùng nguyên raster SH11-B01-M03-A02 đã duyệt: https://drive.google.com/file/d/1k2SKOfBZ1Rabecy09IfNXBo7y6dKwIJp/view?usp=drivesdk. Đây là MASTER thỏ ăn cỏ đã khóa reuse; không cấp mã hình mới trong M05.
Loại hình tham chiếu cho asset REUSE đã duyệt — KHÔNG TẠO MỚI, KHÔNG CẤP MÃ HÌNH.
Mục đích sư phạm: HS nhận ra động vật lấy chất hữu cơ có sẵn qua thức ăn; không cần minh hoạ săn mồi.
VISUAL BLUEPRINT:
- Khung ngang 4:3.
- Chủ thể: 01 thỏ trưởng thành khoẻ mạnh đang ăn lá/cỏ tươi; chọn thỏ thay vì hổ để tránh cảnh bạo lực và vẫn minh hoạ rõ dị dưỡng. Thỏ chiếm 58–68% chiều ngang và 55–65% chiều cao khung.
- Vị trí: thân thỏ x≈28–75%, y≈28–86%; đầu x≈18–42%, y≈30–58%; miệng tiếp xúc với 3–6 lá/cọng cỏ ở vùng x≈15–38%, y≈50–75%.
- Tư thế: bốn chân hoặc thân ở tư thế tự nhiên trên mặt đất, đầu hơi cúi, miệng đang cắn lá/cỏ; không há miệng quá rộng, không biểu cảm hoạt hình.
- Bối cảnh: đồng cỏ/sân vườn đơn giản, hậu cảnh mờ; ánh sáng ban ngày dịu; màu tự nhiên.
- Vùng hotspot: vùng miệng + thức ăn x≈12–42%, y≈40–78%, chừa nền đủ sạch để đặt overlay ≥44×44 px.
- CẤM: máu, xác con mồi, săn giết; dạ dày/ruột, phân tử thức ăn, mũi tên dinh dưỡng; nhãn “dị dưỡng”; biểu tượng năng lượng; làm thỏ ăn khoáng/đất như nguồn carbon.
- ACCEPTANCE TEST: (1) nhận ra rõ thỏ đang ăn chất hữu cơ có sẵn; (2) không có yếu tố săn mồi; (3) vùng miệng–thức ăn rõ; (4) không tự dạy thêm tiêu hoá ngoài phạm vi.

ASSET RIÊNG DUY NHẤT CẦN BÀN GIAO Ở M05 — SH11-B01-M05-A07 — CÂY NẮP ẤM BẮT CÔN TRÙNG
Link asset đã duyệt: https://drive.google.com/file/d/1hUC69fCzCBfgHhGN2h0-eN6zK1C09gwa/view?usp=drivesdk
Loại: TẠO MỚI — ẢNH KHOA HỌC GIÁO DỤC 2D BÁN HIỆN THỰC, KHÔNG CHỮ.
Mục đích sư phạm: xử lí hiểu sai “cây bắt côn trùng = dị dưỡng”; hình phải đồng thời cho thấy cây vẫn là cây xanh có lá quang hợp và có bẫy nắp ấm đặc trưng.
VISUAL BLUEPRINT:
- Khung ngang 4:3. Một cụm cây nắp ấm Nepenthes dạng khái quát, không yêu cầu xác định loài.
- Chủ thể chính: 01 cây với 5–8 lá xanh khoẻ, trong đó 2–4 lá tạo bình bắt mồi nhìn thấy rõ. Toàn cây chiếm khoảng 62–72% chiều cao và 55–65% chiều rộng khung.
- Vị trí: thân/lá trung tâm x≈32–68%, y≈15–86%; một bình bắt mồi chính ở tiền cảnh x≈55–78%, y≈42–82%, chiếm 18–24% diện tích khung để HS nhìn rõ cấu trúc bình và nắp.
- Bình bắt mồi: miệng bình mở tự nhiên, nắp ở phía trên không đóng kín; màu xanh pha đỏ/nâu tự nhiên, không rực neon. Bên mép miệng có 01 côn trùng nhỏ như ruồi/kiến, kích thước 2–4% chiều rộng khung; côn trùng đang đậu hoặc vừa trượt vào mép, không vẽ cảnh phân huỷ.
- Lá xanh quang hợp phải chiếm thị giác đáng kể, không chỉ vẽ các bình bẫy; ít nhất 60% diện tích lá nhìn thấy là lá xanh bình thường.
- Bối cảnh: môi trường ẩm, sáng tự nhiên tán xạ; nền rừng/nhà kính làm mờ. Không làm bối cảnh tối tăm khiến hiểu cây không quang hợp.
- Vùng hotspot 1: bình + côn trùng x≈50–84%, y≈34–86%. Vùng hotspot 2 nếu cần cho phần lá xanh: x≈18–58%, y≈14–58%. Không bake hotspot.
- CẤM: côn trùng bị tiêu hoá nhìn thấy nội tạng; cây không có lá xanh; rễ cây hút thịt/côn trùng; mũi tên carbon từ côn trùng vào toàn bộ cơ thể; chữ “dị dưỡng”; biểu tượng protein/nitơ bake vào ảnh; cây “ăn” con mồi như động vật.
- ACCEPTANCE TEST: (1) nhận ra đúng cây nắp ấm với bình bắt mồi; (2) nhìn rõ cây vẫn có nhiều lá xanh; (3) chỉ 01 côn trùng nhỏ ở bình, không gây ghê; (4) hình hỗ trợ kết luận cây vẫn quang hợp, côn trùng chỉ là nguồn bổ sung dinh dưỡng khoáng; (5) đủ vùng sạch cho hotspot.

==============================
ST03 — GHI NHỚ VÀ KẾT NỐI
==============================
Mã Stage: SH11-B01-M05-ST03

HS_VIEW
GHI NHỚ:
1. “Sinh vật tự dưỡng tổng hợp chất hữu cơ từ nguồn carbon vô cơ.”
2. “Sinh vật quang tự dưỡng sử dụng năng lượng ánh sáng, còn sinh vật hoá tự dưỡng sử dụng năng lượng từ quá trình oxy hoá các chất vô cơ.”
3. “Sinh vật dị dưỡng sử dụng nguồn carbon hữu cơ có sẵn.”
4. “Nguồn carbon là tiêu chí quan trọng để phân biệt phương thức tự dưỡng và dị dưỡng.”

Lời chốt: “Như vậy, sự khác nhau giữa tự dưỡng và dị dưỡng nằm ở cách sinh vật có được nguồn carbon để tạo nên các chất hữu cơ của cơ thể.”

Câu nối M06: “Sinh vật tự dưỡng có khả năng tạo chất hữu cơ từ nguồn carbon vô cơ. Vậy khả năng này giúp chúng giữ vai trò gì đối với các sinh vật khác và đối với toàn bộ sinh giới? Ở module tiếp theo, bạn sẽ tìm hiểu vai trò của sinh vật tự dưỡng trong sinh giới.”

Nút: HOÀN THÀNH MODULE.

DEV_ONLY
- Không tạo nhiệm vụ nhận thức mới và không tạo ảnh mới.
- Toàn bộ GHI NHỚ hiện ngay khi vào Stage; không bắt HS trả lời lại kiến thức đã làm.
- Nhấn HOÀN THÀNH MODULE → lưu trạng thái M05 hoàn thành → thông báo trung tính “Đã hoàn thành module.”
- Không điểm số, không confetti.

QA / REGRESSION LOCK
- Structure: giữ 4 Stage ST00–ST03.
- Science: nguồn carbon là tiêu chí trọng tâm; ánh sáng là nguồn năng lượng; hoá tự dưỡng không đồng nghĩa “không có ánh sáng”; ví dụ vi khuẩn nitrat hoá không quy toàn nhóm về oxy hoá NH₄⁺; cây nắp ấm không bị gắn nhãn dị dưỡng hoàn toàn.
- Pedagogy: ST00 tạo đối lập cây/người; ST01 hình thành tự dưỡng và hai kiểu; ST02 hình thành dị dưỡng + xử lí hiểu sai; ST03 chốt và nối M06.
- Interaction: đủ hướng dẫn, trạng thái ghi nhận, điều kiện nút, phản hồi đúng/sai và dữ liệu hoàn thành.
- Visual/HANDOFF LOCK: M05 chỉ có 01 asset riêng cần bàn giao là SH11-B01-M05-A07 (cây nắp ấm). Cây ST00 và Quang tự dưỡng dùng lại SH11-B01-M03-A01; người đang ăn dùng lại SH11-B01-M02-A01; thỏ dị dưỡng dùng lại SH11-B01-M03-A02; vi khuẩn hoá tự dưỡng do HTML dựng CODE/SVG. REUSE/UI/CODE không cấp mã hình mới.
- Mobile: vùng chạm ≥44×44 px; không bắt kéo dài.
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
PRODUCTION-SPEC-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT.
