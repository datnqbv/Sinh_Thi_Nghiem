FILE 1 — SH11-B01-M02 — DẤU HIỆU ĐẶC TRƯNG CỦA TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG
Loại: HTML học lí thuyết
Số Stage: 4 (ST00 Hook; ST01; ST02; ST03 Ghi nhớ – Kết nối)
Phạm vi: SH11-B01-M02-ST00 → SH11-B01-M02-ST03
YCCĐ chính: Nêu được các dấu hiệu đặc trưng của trao đổi chất và chuyển hoá năng lượng.
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT.

NGUYÊN TẮC SẢN XUẤT CHUNG
- Mỗi Stage phải tách rõ HS_VIEW và DEV_ONLY.
- Không giả định học sinh đã xem module trước; Hook phải tự đứng độc lập.
- Chỉ Stage cuối mới nối tự nhiên sang module tiếp theo.
- Mỗi nhiệm vụ tương tác phải ghi đủ: HS nhìn gì → hướng dẫn gì → thao tác thế nào → khi nào được kiểm tra → phản hồi đúng/sai → điều kiện chuyển Stage.
- Sai đâu sửa đó; không reset phần đã đúng.
- Mobile: vùng chạm tối thiểu 44 × 44 px; ưu tiên chạm chọn → chạm đích thay cho kéo dây liên tục.
- Không dạy sâu sang ba giai đoạn chuyển hoá năng lượng hoặc mối quan hệ đồng hoá–dị hoá của module sau.

==============================
ST00 — HOOK: NHẬN BIẾT BIỂU HIỆN TRAO ĐỔI CHẤT
==============================
Mã Stage: SH11-B01-M02-ST00
Mục tiêu: Gợi vấn đề rằng trao đổi chất diễn ra bên trong nhưng có thể nhận biết qua các biểu hiện quan sát được.

HS_VIEW
Câu hỏi mở đầu: “Chúng ta không nhìn thấy trực tiếp mọi quá trình diễn ra bên trong cơ thể. Vậy dựa vào những biểu hiện nào, chúng ta có thể nhận biết sinh vật đang trao đổi chất và chuyển hoá năng lượng?”

Hiển thị 2 hình: người và cây. Hotspot không bake vào ảnh, đặt bằng HTML.
Hotspot người 1 — miệng: “Cơ thể tiếp nhận chất dinh dưỡng từ thức ăn.”
Hotspot người 2 — mũi: “Cơ thể trao đổi khí với môi trường thông qua hoạt động hô hấp.”
Hotspot cây 1 — rễ: “Rễ hấp thụ nước và các ion khoáng từ đất.”
Hotspot cây 2 — lá: “Lá trao đổi khí với môi trường và thoát hơi nước qua khí khổng.”

Lời dẫn: “Quan sát người và cây trong hai hình dưới đây. Hãy khám phá từng vị trí để xem những hoạt động nào đang diễn ra.”
Hướng dẫn hiển thị: “Nhấn vào từng điểm đánh dấu trên hai hình. Điểm đã xem sẽ đổi trạng thái. Khi xem đủ bốn điểm, nút TIẾP TỤC sẽ xuất hiện.”
Nút TIẾP TỤC ban đầu khóa; chỉ mở khi cả 4 hotspot đã được xem ít nhất một lần.
Khi HS nhấn hotspot cuối: hiển thị khối kết luận ngay dưới hai hình, đồng thời mở nút TIẾP TỤC; khối kết luận không che hình hoặc hotspot.
Khối kết luận hiển thị:
“Những biểu hiện vừa quan sát mới chỉ cho thấy một phần của quá trình trao đổi chất. Để nhận biết đầy đủ hơn, chúng ta cần tìm hiểu những dấu hiệu đặc trưng diễn ra từ khi sinh vật tiếp nhận chất cho đến khi chất được biến đổi, sử dụng và thải ra ngoài.”
Không tự chuyển Stage. Khi HS bấm TIẾP TỤC sau khi đã xem khối kết luận, chuyển ST01.

DEV_ONLY
Bố cục desktop: hai ảnh ngang, cùng kích thước; người bên trái, cây bên phải; hotspot không che chi tiết chính.
Bố cục mobile: hai ảnh xếp dọc; chú thích hotspot mở dưới ảnh hoặc cạnh điểm neo, không che hình.
Trạng thái đầu: 4 hotspot chưa xem; TIẾP TỤC disabled.
Trạng thái trung gian: hotspot đã xem đổi viền trung tính; chỉ một chú thích mở tại một thời điểm.
Trạng thái cuối: 4 hotspot đã xem; TIẾP TỤC enabled.
Không có đúng/sai ở Stage này.
Điều kiện chuyển: 4 hotspot đã xem, khối kết luận đã hiển thị và HS bấm TIẾP TỤC.

MÔ TẢ SẢN XUẤT ASSET A01 — NGƯỜI ĂN VÀ THỞ
Mã: SH11-B01-M02-A01
Loại: TẠO MỚI — ẢNH KHOA HỌC 2D BÁN HIỆN THỰC.
Mục tiêu: cho phép đặt hai hotspot rõ tại miệng và vùng mũi/ngực mà không gây hiểu nhầm đây là sơ đồ giải phẫu.
Ảnh cuối: một người trẻ 16–20 tuổi, khỏe mạnh, ngồi hoặc đứng tự nhiên; một tay cầm bát/miếng thức ăn đơn giản gần miệng, tư thế đang ăn; nét mặt bình thường; vùng mũi và ngực nhìn rõ để HTML đặt hotspot “thở”. Không cần vẽ luồng khí trong ảnh gốc; nếu dùng ký hiệu hơi thở thì chỉ là 1–2 nét mờ trung tính hướng ra ngoài, không giống khói.
Bố cục định lượng: khung ngang 4:3 hoặc 3:2; nhân vật chiếm 68–75% khung; trục mặt chếch 15–30° so với camera để nhìn rõ miệng và mũi; chừa vùng sạch bán kính tối thiểu 8% chiều rộng ảnh quanh miệng và quanh mũi–ngực trên để đặt hotspot ≥44×44 px trên mobile; nền sáng, đơn giản, không vật thể thừa.
Phong cách: minh hoạ khoa học 2D bán hiện thực, sạch, phù hợp THPT, không clipart trẻ con.
Điều cấm: không phổi lộ ra ngoài cơ thể, không nội tạng, không khẩu trang, không bệnh viện, không chữ, nhãn, mũi tên, hotspot bake-in, watermark.

MÔ TẢ SẢN XUẤT ASSET A02 — CÂY HÚT NƯỚC VÀ THOÁT HƠI NƯỚC
Mã: SH11-B01-M02-A02
Loại: TẠO MỚI — MINH HOẠ KHOA HỌC 2D BÁN HIỆN THỰC.
Ảnh cuối: khung 4:3; cây thân thảo khỏe mạnh chiếm 65–72% khung; đường mặt đất ở khoảng y=55–60% chiều cao. Phần dưới đất là lớp đất cắt bổ dọc, hệ rễ nhìn rõ nhưng không phóng đại lông hút; đất ẩm vừa, không ngập. Phần trên đất có thân và 5–8 lá xanh khỏe, không héo. Vùng hotspot rễ ưu tiên x≈35–65%, y≈62–90%; vùng hotspot lá x≈25–75%, y≈12–48%; hai vùng không chồng nhau và đủ ≥44×44 px khi hiển thị mobile.
Nếu cần gợi hướng quá trình: có thể dùng các hạt nước nhỏ trong đất gần rễ và hơi nước rất nhẹ đi RA khỏi lá; không bake mũi tên vào ảnh nếu HTML có thể đặt overlay.
Điều cấm: không vẽ nước đi từ lá xuống rễ; không vẽ rễ hấp thụ CO2/ánh sáng; không gắn thức ăn cho cây; không chữ, nhãn, hotspot bake-in, watermark.

==============================
ST01 — TIẾP NHẬN, VẬN CHUYỂN VÀ BIẾN ĐỔI CHẤT
==============================
Mã Stage: SH11-B01-M02-ST01
Mục tiêu: Hình thành 2 dấu hiệu đầu: tiếp nhận–vận chuyển chất; biến đổi chất gắn với chuyển hoá năng lượng.

HS_VIEW
Lời dẫn: “Trước hết, hãy xem các chất từ môi trường được sinh vật tiếp nhận và vận chuyển đến tế bào như thế nào.”
Hướng dẫn: “Nhấn vào từng vị trí 1, 2, 3, 4 trên sơ đồ. Vị trí đã xem sẽ đổi trạng thái. Khi xem đủ bốn vị trí, hoạt động phân loại sẽ xuất hiện.”

Sơ đồ 2 nhánh: THỰC VẬT và ĐỘNG VẬT.
Hotspot 1 — Thực vật tiếp nhận chất: “Rễ hấp thụ nước và các ion khoáng từ đất. Lá tiếp nhận CO₂ từ không khí qua khí khổng.”
Hotspot 2 — Thực vật vận chuyển chất: “Hệ mạch vận chuyển nước, ion khoáng và các chất hữu cơ giữa các cơ quan của cây.”
Hotspot 3 — Động vật tiếp nhận chất: “Hệ tiêu hoá tiếp nhận và biến đổi thức ăn để cơ thể hấp thụ các chất dinh dưỡng; hệ hô hấp giúp cơ thể trao đổi O₂ và CO₂ với môi trường.”
Hotspot 4 — Động vật vận chuyển chất: “Hệ tuần hoàn vận chuyển các chất dinh dưỡng và O₂ đến tế bào, đồng thời vận chuyển một số sản phẩm chuyển hoá từ tế bào đến cơ quan thải.”

Hướng dẫn quan sát: “Nhấn vào từng vị trí số trên sơ đồ để xem chất được tiếp nhận và vận chuyển như thế nào.”
Khi xem đủ 4 hotspot, hiện lời giảng:
“Sau khi được tiếp nhận và vận chuyển đến tế bào, các chất tiếp tục được biến đổi. Trong tế bào, các quá trình tổng hợp và phân giải chất luôn gắn với chuyển hoá năng lượng.”

NHIỆM VỤ PHÂN LOẠI
Hướng dẫn hiển thị: “Kéo từng hiện tượng vào nhóm phù hợp. Bạn có thể thay đổi vị trí trước khi nhấn KIỂM TRA.”
Hai vùng đích:
1. TIẾP NHẬN VÀ VẬN CHUYỂN CHẤT
2. BIẾN ĐỔI CHẤT KÈM CHUYỂN HOÁ NĂNG LƯỢNG
Bốn thẻ nguồn:
- Rễ cây hấp thụ nước.
- Máu vận chuyển O₂ đến tế bào.
- Tế bào tổng hợp protein.
- Tế bào cơ phân giải glucose và giải phóng năng lượng.
Desktop: kéo thẻ vào vùng đích.
Mobile: chạm thẻ → chạm vùng đích.
Nút KIỂM TRA chỉ mở khi cả 4 thẻ đã được đặt.
Đáp án: hai thẻ đầu → nhóm 1; hai thẻ sau → nhóm 2.
Phản hồi đúng: “Chính xác. Tiếp nhận và vận chuyển chất đưa các chất từ môi trường đến nơi cần sử dụng; còn biến đổi chất kèm chuyển hoá năng lượng diễn ra trong tế bào thông qua các quá trình tổng hợp và phân giải chất.”
Phản hồi sai: “Chưa đúng. Hãy xác định hiện tượng đang mô tả việc đưa chất vào hoặc vận chuyển chất, hay đang mô tả sự biến đổi chất ngay trong tế bào, rồi thử lại.”
Sau khi đúng cả 4:
“Hai dấu hiệu đầu tiên là: sinh vật tiếp nhận và vận chuyển các chất; các chất được biến đổi trong tế bào đồng thời với quá trình chuyển hoá năng lượng.”
Nút TIẾP TỤC.

DEV_ONLY
Sơ đồ ST01 (CODE/SVG, không cấp mã hình) ở trên; khu phân loại ẩn cho đến khi xem đủ 4 hotspot.
Hotspot được xem không biểu thị đúng/sai, chỉ đánh dấu đã xem.
Khu phân loại xuất hiện dưới sơ đồ ST01, không che sơ đồ CODE/SVG.
Sai: chỉ trả thẻ sai về khay; giữ thẻ đúng.
Đúng cả 4: lưu M02_st01_hoanthanh = true.
Điều kiện chuyển ST02: biến trên = true + HS bấm TIẾP TỤC.

SƠ ĐỒ ST01 — SO SÁNH THỰC VẬT / ĐỘNG VẬT — CODE/SVG, KHÔNG CẤP MÃ HÌNH
Mã UI/sơ đồ nội bộ: SH11-B01-M02-ST01-DIAGRAM; KHÔNG PHẢI MÃ HÌNH Axx.
Loại: CODE/SVG FIRST + HTML LAYER — KHÔNG GIAO AI VẼ RASTER.
Mục tiêu: minh hoạ rõ “môi trường → cơ quan tiếp nhận → hệ vận chuyển → tế bào” ở thực vật và động vật, không trộn cơ chế hai nhóm.
Bố cục desktop 16:9, chia 2 nhánh: THỰC VẬT x=3–48%, ĐỘNG VẬT x=52–97%. Nhánh thực vật: cụm ĐẤT+RỄ ở y≈68–92% nhận nước và ion khoáng; cụm LÁ ở y≈8–32% nhận CO₂ từ không khí; HỆ MẠCH ở thân y≈32–68% nối rễ với các cơ quan và phân phối chất. Nhánh động vật: THỨC ĂN→HỆ TIÊU HOÁ và KHÔNG KHÍ↔HỆ HÔ HẤP ở y≈10–38%; HỆ TUẦN HOÀN ở y≈42–65%; TẾ BÀO ở y≈72–90%. Hotspot 1 neo cụm tiếp nhận ở thực vật, hotspot 2 hệ mạch, hotspot 3 tiêu hoá+hô hấp, hotspot 4 tuần hoàn. Mobile xếp hai nhánh dọc nhưng giữ nguyên topology trong từng nhánh. Không cần giải phẫu nội tạng chi tiết.
Mũi tên: một chiều theo dòng vật chất; không dùng mũi tên vòng tròn.
Khóa khoa học thực vật: rễ chỉ hấp thụ nước và ion khoáng; CO2 vào chủ yếu qua lá, ánh sáng được lá tiếp nhận cho quang hợp nhưng không trình bày như chất “rễ hút”.
Khóa khoa học động vật: hệ tiêu hoá lấy chất dinh dưỡng; hệ hô hấp trao đổi khí; hệ tuần hoàn vận chuyển đến tế bào.
Hotspot 1–4 KHÔNG bake vào ảnh; HTML đặt overlay.
Điều cấm: không hệ tuần hoàn máu ở cây; không vẽ thức ăn đi vào rễ; không vẽ CO2/ánh sáng đi vào rễ; không chữ dài bake-in; không chi tiết giải phẫu gây quá tải.

MÔ TẢ THÀNH PHẦN UI/CSS — 4 THẺ PHÂN LOẠI (KHÔNG PHẢI ASSET ẢNH)
Mã UI: SH11-B01-M02-ST01-CARDS (không cấp mã ảnh Axx)
Loại: UI TEXT/CSS, KHÔNG CẦN TẠO ẢNH nếu hệ thống hỗ trợ card native.
Bốn thẻ cùng kích thước; không dùng màu gợi nhóm; thứ tự xáo ngẫu nhiên khi tải.
Text chính xác: “Rễ cây hấp thụ nước”; “Máu vận chuyển O₂ đến tế bào”; “Tế bào tổng hợp protein”; “Tế bào cơ phân giải glucose và giải phóng năng lượng”.
Hai vùng đích có nhãn đúng như HS_VIEW. Không thêm icon thực vật/động vật vì có thể khiến HS phân loại theo hình thay vì bản chất quá trình.

==============================
ST02 — THẢI CHẤT VÀ ĐIỀU HOÀ
==============================
Mã Stage: SH11-B01-M02-ST02
Mục tiêu: Hình thành dấu hiệu 3: thải chất; dấu hiệu 4: điều hoà.

HS_VIEW
Lời dẫn: “Trao đổi chất không dừng lại sau khi các chất được biến đổi trong tế bào. Cơ thể còn phải loại bỏ những chất cần thải và điều chỉnh các quá trình này phù hợp với trạng thái hoạt động.”

Hiển thị hai trạng thái cùng một người: NGHỈ và CHẠY.
Hướng dẫn: “Nhấn vào hai trạng thái của cùng một người để so sánh. Trạng thái đã xem sẽ đổi màu viền.”
Hotspot NGHỈ: “Khi cơ thể nghỉ ngơi, nhịp tim và nhịp thở thường ở mức thấp hơn.”
Hotspot CHẠY: “Khi vận động, nhu cầu cung cấp O₂ và năng lượng tăng nên nhịp tim và nhịp thở cũng tăng để đáp ứng hoạt động của cơ thể.”
Không ghi số bpm cụ thể.

NHIỆM VỤ NỐI
Câu dẫn sang nhiệm vụ: “Sự thay đổi đó cho thấy trao đổi chất và chuyển hoá năng lượng được điều hoà theo nhu cầu của cơ thể. Bên cạnh đó, sinh vật còn phải loại bỏ những chất cần thải ra môi trường.”
Hướng dẫn hiển thị: “Chọn một hiện tượng, sau đó chọn dấu hiệu phù hợp. Nhấn KIỂM TRA khi đã nối đủ bốn hiện tượng.”
Bên trái — Hiện tượng:
1. Người thải CO₂ khi thở ra.
2. Cơ thể bài tiết nước tiểu.
3. Nhịp tim và nhịp thở tăng khi vận động.
4. Khi cây thiếu nước, khí khổng đóng bớt để hạn chế mất nước.
Bên phải — Dấu hiệu:
A. THẢI CHẤT RA MÔI TRƯỜNG
B. ĐIỀU HOÀ
Desktop: kéo từ thẻ hiện tượng sang thẻ dấu hiệu.
Mobile: chạm thẻ hiện tượng → chạm dấu hiệu.
Nút KIỂM TRA chỉ mở khi cả 4 hiện tượng đã được nối.
Đáp án: 1–A; 2–A; 3–B; 4–B.
Phản hồi đúng: “Chính xác. Thải chất giúp đưa những chất cần loại bỏ ra khỏi cơ thể; còn điều hoà giúp các quá trình trao đổi chất và chuyển hoá năng lượng thay đổi phù hợp với điều kiện và nhu cầu của sinh vật.”
Phản hồi sai với 1/2: “Chưa đúng. Hãy xem hiện tượng đó đang mô tả một chất được đưa ra ngoài cơ thể hay sự thay đổi hoạt động của cơ thể để thích nghi với nhu cầu, rồi nối lại.”
Phản hồi sai với 3/4: “Chưa đúng. Hãy xem hiện tượng đó đang mô tả một chất được đưa ra ngoài cơ thể hay sự thay đổi hoạt động của cơ thể để thích nghi với nhu cầu, rồi nối lại.”
Sau khi đúng cả 4:
“Dấu hiệu thứ ba là sinh vật thải các chất cần loại bỏ ra môi trường. Dấu hiệu thứ tư là các quá trình trao đổi chất và chuyển hoá năng lượng được điều hoà phù hợp với nhu cầu của cơ thể.”
Nút TIẾP TỤC.

DEV_ONLY
A04 hiển thị trước; khu nối ẩn cho đến khi HS đã xem cả hai trạng thái nghỉ/chạy.
Khi mở khu nối: hai cột, hiện tượng trái – dấu hiệu phải; đường nối chưa xuất hiện trước thao tác.
Sai: chỉ xoá đường nối sai; giữ đường đúng.
Đúng: đường nối đúng giữ màu xanh trung tính; lưu M02_st02_hoanthanh = true.
Điều kiện chuyển ST03: biến trên = true + HS bấm TIẾP TỤC.

MÔ TẢ SẢN XUẤT ASSET A04 — NGƯỜI NGHỈ / NGƯỜI CHẠY
Mã: SH11-B01-M02-A04
Loại: TẠO MỚI — CẶP BIẾN THỂ CÙNG NHÂN VẬT.
Mục tiêu: so sánh trực quan một cơ thể ở hai mức hoạt động khác nhau để HS nhận ra sự điều chỉnh.
Ảnh trái: cùng một người trẻ 16–20 tuổi đang ngồi nghỉ hoặc đứng thư giãn, tư thế bình thường, nét mặt bình tĩnh.
Ảnh phải: đúng cùng nhân vật, quần áo, góc nhìn và tỉ lệ; đang chạy ở mức vừa, tư thế vận động rõ, có thể hơi thở nhanh hơn qua chuyển động ngực/nhịp động tác nhưng không biểu hiện kiệt sức.
Hai panel cùng tỉ lệ 4:3, cùng nền, cùng ánh sáng, cùng góc camera, cùng tiêu cự và cùng kích thước; nhân vật chiếm 65–72% mỗi panel. Panel NGHỈ: đứng thư giãn hoặc ngồi thẳng, vai tự nhiên, tay thả lỏng. Panel CHẠY: đúng cùng người, thân hơi nghiêng trước 5–15°, tay co tự nhiên, một chân chống/một chân đưa; nét mặt tập trung nhưng không kiệt sức. Chừa 10–15% phía trên mỗi panel cho nhãn HTML và giữ vùng mặt–ngực không bị che để đặt hotspot.
Không bake số nhịp tim, bpm, điện tâm đồ, chữ “nghỉ/chạy”; nhãn sẽ do HTML đặt.
Điều cấm: không bệnh viện, máy đo, đau ngực, đổ gục, mồ hôi quá mức, hiệu ứng đỏ cảnh báo.

MÔ TẢ THÀNH PHẦN UI/CSS — 4 THẺ NỐI THẢI CHẤT / ĐIỀU HOÀ (KHÔNG PHẢI ASSET ẢNH)
Mã UI: SH11-B01-M02-ST02-MATCHING (không cấp mã ảnh Axx)
Loại: UI TEXT/CSS, KHÔNG CẦN TẠO ẢNH riêng nếu hệ thống hỗ trợ card native.
Text chính xác 4 thẻ hiện tượng: (1) “Người thải CO₂ khi thở ra”; (2) “Cơ thể bài tiết nước tiểu”; (3) “Nhịp tim và nhịp thở tăng khi vận động”; (4) “Khi cây thiếu nước, khí khổng đóng bớt để hạn chế mất nước”. Hai thẻ dấu hiệu: A “Thải chất ra môi trường”; B “Điều hoà trao đổi chất và chuyển hoá năng lượng”. Đáp án: 1–A, 2–A, 3–B, 4–B. Không sử dụng lại ví dụ hormone/rụng lá cũ.
Thẻ đồng kích thước, không dùng màu/icon gợi đáp án. Đường nối chỉ xuất hiện sau thao tác. Mobile chạm chọn → chạm đích.

==============================
ST03 — GHI NHỚ VÀ KẾT NỐI
==============================
Mã Stage: SH11-B01-M02-ST03
Mục tiêu: Củng cố đủ 4 dấu hiệu và nối sang M03.

HS_VIEW
Lời chốt: “Bốn dấu hiệu này không diễn ra tách rời mà liên hệ với nhau trong toàn bộ quá trình trao đổi chất và chuyển hoá năng lượng của sinh vật.”
Khối Ghi nhớ:
1. Sinh vật tiếp nhận các chất từ môi trường và vận chuyển chúng đến những nơi cần sử dụng.
2. Các chất được biến đổi trong tế bào, đồng thời năng lượng cũng được chuyển hoá.
3. Sinh vật loại bỏ những chất cần thải ra môi trường.
4. Cơ thể điều hoà quá trình trao đổi chất và chuyển hoá năng lượng phù hợp với nhu cầu sống.

Câu nối sang M03:
“Trong đó, sự biến đổi chất ở tế bào luôn đi kèm với chuyển hoá năng lượng. Vậy năng lượng được chuyển hoá qua những giai đoạn nào trong sinh giới? Ở module tiếp theo, bạn sẽ tìm hiểu ba giai đoạn chuyển hoá năng lượng.”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY
Không tạo nhiệm vụ nhận thức mới.
Hiển thị trọn khối ghi nhớ và câu nối ngay khi vào Stage.
Nhấn HOÀN THÀNH MODULE → ghi nhận M02 hoàn thành → hiện thông báo trung tính “Đã hoàn thành module.”
Không điểm số, không phần trăm, không hiệu ứng ăn mừng.
Câu nối phải luôn hiển thị trọn vẹn trên mobile.

==============================
QA / REGRESSION LOCK
==============================
- Science: rễ không hấp thụ CO2/ánh sáng; thực vật không có hệ tuần hoàn máu; ví dụ khí khổng đóng bớt khi thiếu nước dùng cho điều hoà.
- Scope: M02 chỉ hình thành 4 dấu hiệu; không dạy sâu M03/M04.
- Pedagogy: ST00 tự đứng độc lập; ST01 hai dấu hiệu đầu; ST02 hai dấu hiệu sau; ST03 chốt + nối M03.
- Interaction: mọi nhiệm vụ có đủ hướng dẫn, thao tác, điều kiện kiểm tra, phản hồi và điều kiện chuyển.
- Visual: A01–A02 có vùng hotspot định lượng và không bake hotspot; sơ đồ ST01 là CODE/SVG hai nhánh, CO₂ chỉ vào lá ở nhánh thực vật; A04 là cặp cùng một nhân vật ở hai trạng thái nghỉ/chạy; các thẻ phân loại ST01 và thẻ nối ST02 là UI/CSS, không cấp mã ảnh Axx, text khớp 100% HS_VIEW.
- Mobile: chạm chọn → chạm đích; vùng chạm ≥44 px.
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
PRODUCTION-SPEC-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT.
