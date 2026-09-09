FILE 1 — SH11-B01-M03 — BA GIAI ĐOẠN CHUYỂN HOÁ NĂNG LƯỢNG TRONG SINH GIỚI
Loại: HTML học lí thuyết
Số Stage: 4 (ST00 Hook; ST01; ST02; ST03 Ghi nhớ – Kết nối)
Phạm vi: SH11-B01-M03-ST00 → SH11-B01-M03-ST03
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT.

NGUYÊN TẮC SẢN XUẤT CHUNG
- Hook phải tự đứng độc lập, không giả định HS đã xem module trước.
- Chỉ Stage cuối nối sang module tiếp theo.
- Mỗi nhiệm vụ phải đủ: HS nhìn gì → hướng dẫn → thao tác desktop/mobile → điều kiện mở KIỂM TRA → phản hồi → điều kiện chuyển.
- Không tuyệt đối hoá ATP; không đưa NADH vào HS_VIEW của module này.
- Không lấn sang M04.
- Mobile: vùng chạm tối thiểu 44 × 44 px; ưu tiên chạm chọn → chạm đích.

==============================
ST00 — HOOK
==============================
Mã Stage: SH11-B01-M03-ST00
Mục tiêu: Gợi vấn đề về nguồn và dòng chuyển hoá năng lượng trong sinh giới.

HS_VIEW
Câu hỏi mở đầu: “Cây và thỏ đều có thể ở dưới ánh sáng Mặt Trời. Vậy vì sao cây có thể sử dụng năng lượng ánh sáng để tạo chất hữu cơ, còn thỏ vẫn phải ăn để có năng lượng cho các hoạt động sống?”
Hiển thị 2 hình: cây xanh dưới ánh sáng; thỏ dưới ánh sáng và đang ăn cỏ.
Lời dẫn: “Quan sát hai hình dưới đây. Nhấn vào từng hình để xem cây và thỏ thu nhận năng lượng theo những cách khác nhau như thế nào.”
HƯỚNG DẪN: “Nhấn vào từng điểm đánh dấu. Điểm đã xem sẽ đổi trạng thái. Khi xem đủ hai điểm, nút TIẾP TỤC sẽ xuất hiện.”
Hotspot cây: “Ở cây xanh, hệ sắc tố quang hợp hấp thụ năng lượng ánh sáng. Năng lượng này được chuyển thành hoá năng và tích luỹ trong các chất hữu cơ được tạo thành.”
Hotspot thỏ: “Thỏ không chuyển trực tiếp năng lượng ánh sáng thành hoá năng theo con đường quang hợp. Nó thu nhận chất hữu cơ từ thức ăn và khai thác năng lượng chứa trong các chất đó.”
Nút TIẾP TỤC ban đầu khóa; chỉ mở khi cả 2 hotspot đã được xem.
Khi nhấn hotspot cuối: không tự bật kết luận lớn; chỉ mở TIẾP TỤC.
Khi HS bấm TIẾP TỤC, hiện: “Như vậy, năng lượng có thể được tích luỹ trong chất hữu cơ rồi tiếp tục được giải phóng và sử dụng cho các hoạt động sống. Dòng năng lượng đó diễn ra qua những giai đoạn nào?”
Sau đó chuyển ST01.

DEV_ONLY
Desktop: hai ảnh cạnh nhau, cùng kích thước. Mobile: xếp dọc.
Hotspot không bake vào ảnh; HTML overlay.
Không có đúng/sai.
Điều kiện chuyển ST01: đã xem đủ 2 hotspot + bấm TIẾP TỤC.

ASSET A01 — CÂY XANH DƯỚI ÁNH SÁNG
Mã: SH11-B01-M03-A01
Loại: TẠO MỚI — minh hoạ khoa học 2D bán hiện thực.
Ảnh cuối: khung ngang 4:3 hoặc 3:2; một cây thân thảo khỏe mạnh, toàn cây nhìn rõ từ gốc đến tán; cây chiếm 65–72% chiều cao và 48–58% chiều rộng khung, đặt tâm x≈50%, đáy cây y≈88–92%. Tán có 6–10 lá xanh tự nhiên, không phát sáng, không vàng/héo; lá chính nằm vùng x≈30–70%, y≈18–58%. Nguồn sáng Mặt Trời từ góc trên trái hoặc trên phải, ánh sáng tự nhiên mềm, bóng đổ rất nhẹ. Nền bầu trời/sân cỏ đơn giản, độ chi tiết thấp hơn chủ thể, không có cây khác cạnh tranh thị giác. Chừa vùng sạch tối thiểu 10% quanh cụm lá chính để HTML đặt hotspot ≥44×44 px; không bake icon/hotspot/nhãn.
Khóa khoa học: chỉ dùng cây như một ví dụ sinh vật quang hợp, không viết “chỉ cây mới quang hợp”.
Cấm: lá phát sáng như pin, tia sáng thành mũi tên năng lượng, biểu tượng ATP, phương trình/phản ứng quang hợp, chữ, nhãn, watermark. ACCEPTANCE: che UI vẫn nhận ra cây khỏe đang nhận ánh sáng tự nhiên; tán lá rõ; hotspot đặt được mà không che lá chính; ảnh không tạo hàm ý chỉ cây mới quang hợp.

ASSET A02 — THỎ DƯỚI ÁNH SÁNG VÀ ĂN CỎ
Mã: SH11-B01-M03-A02
Loại: TẠO MỚI — 1 ẢNH DUY NHẤT, minh hoạ khoa học 2D bán hiện thực.
Ảnh cuối: khung ngang 4:3 hoặc 3:2; một con thỏ khỏe mạnh duy nhất chiếm 62–70% chiều rộng khung, toàn thân nhìn thấy, thân đặt x≈48–55%, y≈35–82%. Thỏ cúi hoặc ngoảnh đầu xuống cụm cỏ, miệng chạm/đang gặm cỏ; 2–4 lá cỏ nhìn rõ ngay sát miệng để hành vi ăn không bị mơ hồ. Tai, mắt, chân đúng giải phẫu thỏ, không nhân hoá. Bối cảnh ngoài trời dưới ánh sáng tự nhiên cùng hướng sáng và phong cách với A01; nền cỏ đơn giản, không có động vật khác. Chừa vùng sạch quanh phần đầu–miệng và thân trên tối thiểu 10% khung để HTML đặt hotspot; không che cụm cỏ tại miệng.
Mục tiêu: làm rõ thỏ không dùng trực tiếp ánh sáng để tạo chất hữu cơ mà nhận năng lượng qua thức ăn.
Cấm: không tạo trạng thái thứ hai 'thỏ chỉ đứng dưới nắng'; không tia sáng xuyên vào thỏ, không quang hợp trên lông/da, không ATP, không biểu tượng năng lượng, chữ, nhãn, mũi tên, watermark. ACCEPTANCE: che UI vẫn đọc ngay được hành vi thỏ đang ăn cỏ; chỉ có 1 thỏ/1 trạng thái; ánh sáng chỉ là bối cảnh, không gợi thỏ lấy năng lượng trực tiếp từ ánh sáng.

==============================
ST01 — GIAI ĐOẠN TỔNG HỢP VÀ PHÂN GIẢI
==============================
Mã Stage: SH11-B01-M03-ST01
Mục tiêu: Hình thành 2 giai đoạn đầu của chuyển hoá năng lượng.

HS_VIEW
Hiển thị sơ đồ dòng năng lượng: Năng lượng ánh sáng → Chất hữu cơ → ATP → Hoạt động sống. Ở ST01 chỉ mở hai phần đầu.
Lời dẫn: “Trước hết, hãy theo dõi hai bước đầu tiên của dòng năng lượng: năng lượng được tích luỹ vào chất hữu cơ như thế nào và sau đó được giải phóng ra sao.”
HƯỚNG DẪN: “Nhấn lần lượt vào Giai đoạn tổng hợp và Giai đoạn phân giải trên sơ đồ. Phần đã xem sẽ đổi trạng thái.”
Hotspot Tổng hợp: “Trong giai đoạn tổng hợp, năng lượng được tích luỹ trong các chất hữu cơ. Ở sinh vật quang hợp, năng lượng ánh sáng được chuyển thành hoá năng và tích luỹ trong chất hữu cơ được tổng hợp từ CO₂ và nước.”
Sau khi xem hotspot Tổng hợp, giữ nguyên sơ đồ và mở hotspot Phân giải; không đổi asset.
Hotspot Phân giải: “Trong giai đoạn phân giải, các chất hữu cơ được phân giải, giải phóng năng lượng. Một phần năng lượng giải phóng được tích luỹ trong ATP để tế bào có thể sử dụng.”

NHIỆM VỤ PHÂN LOẠI
Câu chuyển sang hoạt động: “Hai giai đoạn này có chức năng khác nhau: một giai đoạn giúp tích luỹ năng lượng, còn giai đoạn kia giúp giải phóng năng lượng từ chất hữu cơ. Hãy phân loại các hiện tượng sau.”
HƯỚNG DẪN: “Kéo từng hiện tượng vào giai đoạn phù hợp. Bạn có thể thay đổi vị trí trước khi nhấn KIỂM TRA.”
Hai vùng đích:
1. GIAI ĐOẠN TỔNG HỢP
2. GIAI ĐOẠN PHÂN GIẢI
Bốn thẻ:
- Cây tổng hợp chất hữu cơ từ CO₂ và nước nhờ năng lượng ánh sáng.
- Năng lượng ánh sáng được tích luỹ dưới dạng hoá năng trong chất hữu cơ.
- Tế bào phân giải chất hữu cơ và giải phóng năng lượng.
- Một phần năng lượng giải phóng được tích luỹ trong ATP.
Desktop: kéo thẻ → vùng đích. Mobile: chạm thẻ → chạm vùng đích.
KIỂM TRA chỉ mở khi cả 4 thẻ đã được đặt.
Đáp án: 1–2 thuộc Tổng hợp; 3–4 thuộc Phân giải.
Sai: chỉ trả thẻ sai về khay; giữ thẻ đúng.
Phản hồi sai: “Chưa đúng. Hãy xem hiện tượng đang mô tả năng lượng được tích luỹ vào chất hữu cơ hay năng lượng được giải phóng từ chất hữu cơ, rồi thử lại.”
Phản hồi đúng: “Chính xác. Giai đoạn tổng hợp giúp tích luỹ năng lượng trong chất hữu cơ; giai đoạn phân giải giải phóng năng lượng từ chất hữu cơ và tích luỹ một phần năng lượng đó trong ATP.”
Chốt ST01: “Giai đoạn tổng hợp tích luỹ năng lượng trong chất hữu cơ. Giai đoạn phân giải giải phóng năng lượng từ chất hữu cơ và tích luỹ một phần năng lượng trong ATP.”
Nút TIẾP TỤC.

DEV_ONLY
Sơ đồ ST01 (CODE/SVG, không cấp mã hình) hiển thị trên cùng; khu phân loại chỉ mở sau khi xem đủ hai hotspot.
Hotspot đã xem đổi trạng thái trung tính, không gợi đúng/sai.
Lưu M03_st01_hoanthanh = true khi 4 thẻ đúng.
Điều kiện chuyển ST02: biến trên = true + HS bấm TIẾP TỤC.

SƠ ĐỒ ST01–ST02 — DÒNG CHUYỂN HOÁ NĂNG LƯỢNG — CODE/SVG, KHÔNG CẤP MÃ HÌNH
Mã UI/sơ đồ nội bộ: SH11-B01-M03-ENERGY-FLOW; KHÔNG PHẢI MÃ HÌNH Axx.
Loại: CODE/SVG FIRST + HTML LAYER — KHÔNG GIAO AI VẼ RASTER; dùng xuyên ST01–ST02.
Bố cục desktop: vùng sơ đồ tỉ lệ 4:5 hoặc khung dọc chiếm 55–65% màn hình; bốn node căn giữa trục x=50%, mỗi node rộng 58–68% vùng sơ đồ và cao 9–12%: Node 1 'Năng lượng ánh sáng' y≈5–16%; Node 2 'Năng lượng hoá học trong chất hữu cơ' y≈30–42%; Node 3 'ATP' y≈56–67%; Node 4 'Các hoạt động sống' y≈82–93%. Ba mũi tên chính chỉ một chiều từ trên xuống: 1→2 = Giai đoạn tổng hợp; 2→3 = Giai đoạn phân giải; 3→4 = Giai đoạn huy động. Từ giữa mỗi mũi tên chính tách một nhánh mảnh chếch 25–40° sang cùng một phía để biểu thị nhiệt toả ra; nhánh nhiệt chỉ đi RA và không quay lại. ST01 chỉ highlight 1→2 rồi 2→3; ST02 giữ nguyên topology và highlight 3→4. Mobile giữ thứ tự 4 node dọc, width 84–90% màn hình; khoảng cách đủ đặt hotspot ≥44×44 px.
Không bake hotspot hoặc text dài vào ảnh; các nhãn giai đoạn và hotspot do HTML đặt để có thể tương tác.
Khóa khoa học: tổng hợp tích luỹ năng lượng vào chất hữu cơ; phân giải giải phóng năng lượng và một phần tích luỹ trong ATP; huy động dùng năng lượng từ ATP cho hoạt động sống. Không thể hiện ATP là nguồn năng lượng duy nhất. Không đưa NADH vào sơ đồ HS_VIEW.
Cấm: mũi tên vòng; nhiệt quay trở lại hệ; ATP xuất hiện trước chất hữu cơ; hoạt động sống sinh ngược ATP; NADH trong HS_VIEW; biểu tượng pin/sét khiến HS hiểu năng lượng là vật thể; chữ dài bake-in. ACCEPTANCE: tắt màu highlight vẫn đọc được đúng thứ tự 1→2→3→4; resize không đổi topology; hotspot neo đúng mũi tên; không có đường nào ngược chiều.

UI/CSS ST01 — 4 THẺ PHÂN LOẠI — KHÔNG CẤP MÃ HÌNH
Mã UI nội bộ: SH11-B01-M03-ST01-CARDS; KHÔNG PHẢI MÃ HÌNH Axx.
Loại: UI TEXT/CSS, không cần tạo ảnh nếu hệ thống hỗ trợ card native.
Bốn thẻ đồng kích thước, thứ tự xáo ngẫu nhiên, không dùng màu/icon gợi nhóm. Text nguyên văn: 'Cây tổng hợp chất hữu cơ từ CO₂ và nước nhờ năng lượng ánh sáng'; 'Năng lượng ánh sáng được tích luỹ dưới dạng hoá năng trong chất hữu cơ'; 'Tế bào phân giải chất hữu cơ và giải phóng năng lượng'; 'Một phần năng lượng giải phóng được tích luỹ trong ATP'. Hai vùng đích mang đúng tên 'Giai đoạn tổng hợp' / 'Giai đoạn phân giải'. Đáp án: hai thẻ đầu → Tổng hợp; hai thẻ sau → Phân giải.
Desktop kéo-thả; mobile chạm thẻ → chạm vùng đích.

==============================
ST02 — GIAI ĐOẠN HUY ĐỘNG NĂNG LƯỢNG
==============================
Mã Stage: SH11-B01-M03-ST02
Mục tiêu: Hình thành giai đoạn huy động và củng cố đủ 3 giai đoạn.

HS_VIEW
Lời dẫn: “ATP chứa năng lượng ở dạng tế bào có thể huy động để thực hiện các hoạt động sống. Vậy năng lượng trong ATP được sử dụng vào những hoạt động nào?”
HƯỚNG DẪN: “Nhấn vào Giai đoạn huy động năng lượng trên sơ đồ để khám phá, sau đó hoàn thành hoạt động bên dưới.”
Hotspot Huy động: “Trong giai đoạn huy động, năng lượng từ ATP được sử dụng cho các hoạt động sống như tổng hợp chất, vận động, sinh trưởng, phát triển, sinh sản và cảm ứng. Trong mỗi lần chuyển hoá năng lượng, luôn có một phần năng lượng toả ra môi trường dưới dạng nhiệt.”

NHIỆM VỤ CỦNG CỐ GIAI ĐOẠN HUY ĐỘNG
Hiển thị vùng “Các hoạt động sống sử dụng năng lượng” và bốn thẻ: “Cơ co khi nâng một vật”; “Tế bào tổng hợp chất mới”; “Cơ thể sinh trưởng”; “Rễ cây sinh trưởng hướng về vùng đất có điều kiện thuận lợi”.
HƯỚNG DẪN: “Đưa các thẻ vào vùng Các hoạt động sống sử dụng năng lượng, sau đó trả lời câu hỏi bên dưới.”
Câu hỏi củng cố: “Trong sơ đồ chuyển hoá năng lượng đang học, ATP giữ vai trò trung gian giữa hai giai đoạn nào?”
Hai lựa chọn:
A. Giữa giai đoạn phân giải và giai đoạn huy động năng lượng.
B. Giữa giai đoạn tổng hợp và giai đoạn phân giải.
Nút KIỂM TRA chỉ mở sau khi HS đã đưa đủ 4 thẻ vào vùng đích và chọn 1 phương án.
Đáp án đúng: A.
Phản hồi đúng: “Chính xác. Trong sơ đồ này, năng lượng được giải phóng ở giai đoạn phân giải được tích luỹ một phần trong ATP; sau đó ATP cung cấp năng lượng cho các hoạt động sống ở giai đoạn huy động.”
Phản hồi sai: “Chưa đúng. Hãy nhìn lại vị trí của ATP trên sơ đồ: ATP nằm sau giai đoạn phân giải và trước các hoạt động sống.”
Chốt ST02: “Ba giai đoạn tạo thành một dòng chuyển hoá năng lượng liên tục: năng lượng được tích luỹ trong giai đoạn tổng hợp, được giải phóng và chuyển sang ATP trong giai đoạn phân giải, rồi được huy động cho các hoạt động sống. Trong quá trình đó, luôn có một phần năng lượng toả ra dưới dạng nhiệt.”
Nút TIẾP TỤC.

DEV_ONLY
Khu hoạt động chỉ mở sau khi hotspot Huy động đã xem. Bốn thẻ hoạt động sống đặt trong khay; desktop kéo vào vùng đích, mobile chạm thẻ → chạm vùng đích. Câu hỏi ATP chỉ xuất hiện sau khi đủ 4 thẻ đã được đặt. Sai câu hỏi không reset 4 thẻ. Lưu M03_st02_hoanthanh = true khi 4 thẻ đã đặt và câu hỏi ATP trả lời đúng.
Điều kiện chuyển ST03: biến trên = true + HS bấm TIẾP TỤC.

UI/CSS ST02 — THẺ HOẠT ĐỘNG SỐNG + CÂU HỎI ATP — KHÔNG CẤP MÃ HÌNH
Mã UI nội bộ: SH11-B01-M03-ST02-ACTIVITY-CARDS; KHÔNG PHẢI MÃ HÌNH Axx.
Loại: UI TEXT/CSS, KHÔNG TẠO ẢNH. Dựng 4 thẻ hoạt động sống cùng kích thước, một vùng đích “Các hoạt động sống sử dụng năng lượng” và khối câu hỏi ATP gồm 2 lựa chọn. Không dùng icon/màu gợi đáp án trước thao tác. Desktop kéo-thả; mobile chạm thẻ→chạm vùng. Khi đủ 4 thẻ mới hiện câu hỏi ATP. Sai câu hỏi chỉ phản hồi và cho chọn lại, không reset thẻ.

==============================
ST03 — GHI NHỚ VÀ KẾT NỐI
==============================
Mã Stage: SH11-B01-M03-ST03
Mục tiêu: Chốt 3 giai đoạn và nối M04.

HS_VIEW
Lời chốt: “Ba giai đoạn tổng hợp, phân giải và huy động năng lượng nối tiếp nhau, cho thấy sự chuyển hoá năng lượng luôn gắn liền với quá trình biến đổi chất trong sinh vật.”
GHI NHỚ:
1. Trong giai đoạn tổng hợp, năng lượng được tích luỹ trong các chất hữu cơ.
2. Trong giai đoạn phân giải, chất hữu cơ được phân giải, giải phóng năng lượng; một phần năng lượng được tích luỹ trong ATP.
3. Trong giai đoạn huy động, năng lượng từ ATP được sử dụng cho các hoạt động sống.
4. Dòng năng lượng đi theo một chiều và trong mỗi lần chuyển hoá luôn có một phần năng lượng toả ra môi trường dưới dạng nhiệt.
Câu nối sang M04: “Vậy sự biến đổi chất và chuyển hoá năng lượng liên hệ với nhau như thế nào ở cấp tế bào và cấp cơ thể? Ở module tiếp theo, bạn sẽ tìm hiểu mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng ở cấp tế bào và cơ thể.”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY
Không tạo nhiệm vụ nhận thức mới.
Nhấn HOÀN THÀNH MODULE → ghi nhận M03 hoàn thành → thông báo trung tính “Đã hoàn thành module.”
Không điểm số, không hiệu ứng ăn mừng.

QA / REGRESSION LOCK
- Structure: giữ 4 Stage ST00–ST03.
- Science: không tuyệt đối hoá “chỉ cây”; không nói ATP chỉ được tạo ở một con đường duy nhất; không đưa NADH vào HS_VIEW; dòng năng lượng một chiều và có toả nhiệt.
- Pedagogy: Hook độc lập; ST01 hai giai đoạn đầu; ST02 huy động + thẻ hoạt động sống + câu hỏi ATP có giá trị nhận thức; ST03 chốt + nối M04.
- Interaction: tất cả nhiệm vụ có hướng dẫn, thao tác, điều kiện kiểm tra, feedback và điều kiện chuyển.
- Visual: A01–A02 có blueprint định lượng + Acceptance Test; sơ đồ ST01–ST02 bắt buộc CODE/SVG và giữ topology ST01–ST02; các thẻ ST01–ST02 là UI/CSS, không tạo bitmap; hotspot không bake vào ảnh.
- Mobile: chạm chọn → chạm đích; vùng chạm ≥44 px.
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
PRODUCTION-SPEC-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT.
