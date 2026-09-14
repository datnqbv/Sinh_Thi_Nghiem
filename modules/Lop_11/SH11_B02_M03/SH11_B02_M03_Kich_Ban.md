FILE 1 — SH11-B02-M03 — VẬN CHUYỂN NƯỚC VÀ KHOÁNG TRONG THÂN
Loại: HTML học lí thuyết
Trạng thái: VERIFIED FINAL – nội dung đã duyệt, sẵn sàng sản xuất HTML
Số Stage: 4 (ST00–ST03)

MỤC TIÊU MODULE
- Nêu được cấu tạo cơ bản của mạch gỗ.
- Trình bày được chiều vận chuyển chủ yếu của nước và ion khoáng trong mạch gỗ.
- Trình bày được các yếu tố phối hợp duy trì dòng mạch gỗ; xác định lực kéo do thoát hơi nước là động lực chủ đạo.

==============================
ST00 — LÀM THẾ NÀO NƯỚC ĐI TỪ RỄ LÊN NGỌN CÂY?
Mã Stage: SH11-B02-M03-ST00

HS_VIEW
Lời dẫn: “Ở module trước, nước và ion khoáng đã đi vào mạch gỗ của rễ. Nhưng ở một cây cao hàng chục mét, chúng tiếp tục được đưa từ rễ lên thân và lá bằng cách nào?”
HƯỚNG DẪN: “Nhấn vào hình cây để quan sát chiều vận chuyển của dòng mạch gỗ. Vùng đã xem sẽ được làm nổi bật.”
Sau khi nhấn, hiện lời giảng: “Nước và ion khoáng được vận chuyển chủ yếu từ rễ lên thân và lá trong mạch gỗ. Để thực hiện được quá trình này, cây cần một hệ thống dẫn phù hợp và các lực giúp duy trì dòng nước liên tục.”
Câu chuyển: “Trước hết, hãy tìm hiểu mạch gỗ được cấu tạo như thế nào.”
Nút: TIẾP TỤC.

DEV_ONLY
- Mục tiêu sư phạm: nối trực tiếp từ M02 sang M03, xác định đúng chiều vận chuyển chủ yếu trước khi học cấu tạo và động lực.
- Desktop: hình cây chiếm 58–64% bên trái; box lời giảng 32–38% bên phải. Mobile: hình trên, lời giảng dưới.
- Trạng thái đầu: hình cây tĩnh; tuyến mạch gỗ chưa highlight; lời giảng sau quan sát ẩn; nút TIẾP TỤC khóa.
- Khi nhấn hotspot: highlight một tuyến mạch gỗ liên tục từ vùng rễ → thân → lá; hiện lời giảng; lưu `M03_ST00_xylemDirectionViewed=true`; mở TIẾP TỤC.
- Hotspot ≥44×44 px; không dùng mũi tên trang trí gây hiểu nhầm hai chiều.

ASSET A01 — CÂY GỖ LỚN, VÙNG MẠCH GỖ DÙNG LÀM HOOK
Mã: SH11-B02-M03-A01
Loại: REFERENCE-GUIDED / RASTER SẠCH + OVERLAY CODE; không bake mũi tên khoa học vào raster.
PURPOSE: tạo cảm nhận khoảng cách rễ–ngọn và làm nền cho HS quan sát chiều vận chuyển chủ yếu của dòng mạch gỗ.
LAYOUT: khung 16:9; một cây gỗ trưởng thành toàn thân, thân thẳng tương đối, tán rõ; cây chiếm 58–68% chiều cao khung; chừa 25–32% vùng sạch bên phải cho box lời giảng; mặt đất cắt ngang đơn giản để thấy vùng rễ nông ở mức minh hoạ, không mô tả hệ rễ chi tiết.
REQUIRED OBJECTS: 1 cây gỗ lớn; vùng rễ tiếp giáp đất; thân; tán lá; nền tự nhiên trung tính, không quá nhiều chi tiết.
OBJECT RELATIONS: rễ nằm dưới mặt đất; thân nối liên tục rễ với tán; tuyến highlight mạch gỗ do HTML/SVG overlay phải chạy liên tục bên trong trục rễ–thân và phân nhánh lên lá, không chạy ngoài cây.
ARROW MAP: X1 [FROM] vùng mạch gỗ ở rễ ngay dưới gốc → [TO] vùng mạch gỗ trong thân → [MEANS] nước và ion khoáng được dẫn từ rễ lên thân. X2 [FROM] vùng mạch gỗ trong thân phía trên → [TO] gân/cuống vùng lá trong tán → [MEANS] dòng mạch gỗ tiếp tục từ thân lên lá. Hai mũi tên cùng chiều dưới→trên; là overlay CODE, không nằm trong raster.
NEGATIVE CONTENT: không ống nghiệm; không rễ xuyên sâu phi thực tế; không mũi tên hai chiều; không vẽ nước phun như vòi; không khoáng dạng hạt lớn chạy trong thân; không chữ/nhãn bake-in.
TEXT-LOCK: mọi nhãn, hotspot và mũi tên là HTML/SVG.
CONTINUITY: A01 chỉ dùng ST00; ST01/ST02 chuyển sang sơ đồ khoa học riêng, không crop A01 để thay thế sơ đồ cấu tạo.
SCIENCE-LOCK: chỉ biểu thị chiều vận chuyển chủ yếu từ rễ lên thân/lá trong mạch gỗ; không suy rộng thành tuyệt đối một chiều trong mọi tình huống sinh lí.
ACCEPTANCE TEST: cây nhìn rõ từ rễ–thân–tán; overlay X1/X2 nằm trong trục cây, đúng đầu→cuối; không có chiều ngược; không có chi tiết khoa học thừa.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

==============================
ST01 — MẠCH GỖ ĐƯỢC CẤU TẠO NHƯ THẾ NÀO?
Mã Stage: SH11-B02-M03-ST01

HS_VIEW
Lời dẫn: “Mạch gỗ được cấu tạo chủ yếu từ quản bào và mạch ống; khi trưởng thành, đây là những tế bào đã chết, có thành tế bào hoá gỗ.”
HƯỚNG DẪN: “Nhấn lần lượt vào QUẢN BÀO, MẠCH ỐNG và LỖ BÊN để quan sát đặc điểm cấu tạo. Vị trí đã xem sẽ đổi trạng thái.”
Khi nhấn QUẢN BÀO: “Quản bào là những tế bào dài, hẹp, hai đầu thuôn. Nước có thể di chuyển từ quản bào này sang quản bào khác qua các lỗ bên trên thành tế bào.”
Khi nhấn MẠCH ỐNG: “Các phần tử mạch ống xếp nối tiếp theo chiều dọc. Thành đầu giữa các phần tử có các lỗ thủng, tạo đường dẫn thuận lợi cho nước di chuyển dọc theo mạch.”
Khi nhấn LỖ BÊN: “Các lỗ bên cho phép nước di chuyển giữa những phần tử mạch gỗ kề nhau.”
Sau khi xem đủ ba phần, hiện câu hỏi củng cố:
“Đặc điểm nào đúng với các phần tử dẫn của mạch gỗ khi trưởng thành?”
A. “Là tế bào sống, còn nhân và các bào quan hoạt động.”
B. “Là tế bào đã chết, có thành tế bào hoá gỗ.”
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Quản bào và các phần tử mạch ống khi trưởng thành đều là tế bào đã chết, thành tế bào được hoá gỗ và thích nghi với chức năng dẫn nước.”
Phản hồi sai: “Hãy xem lại cấu tạo của quản bào và mạch ống. Các phần tử dẫn này mất phần sống khi trưởng thành và còn lại thành tế bào hoá gỗ.”
Nút đúng: TIẾP TỤC. Nút sai: LÀM LẠI.

DEV_ONLY
- Mục tiêu sư phạm: phân biệt đúng quản bào và mạch ống, đồng thời chốt trạng thái chết khi trưởng thành của các phần tử dẫn; không gộp cấu tạo hai loại thành một kiểu.
- Dựng CODE/SVG SCIENTIFIC bám hình nguồn/SGK; không dùng free AI raster cho hình hình thành kiến thức.
- Desktop: sơ đồ so sánh hai cột, quản bào 46–48% bên trái, mạch ống 46–48% bên phải; panel lời giảng/tooltip bật cạnh đối tượng. Mobile: hai cột chuyển thành hai tab hoặc xếp dọc, giữ nguyên tỉ lệ và hotspot neo đúng.
- Trạng thái đầu: cả hai mô hình hiện trung tính; ba hotspot hoạt động; câu hỏi ẩn.
- Nhấn từng hotspot: chỉ highlight đúng đối tượng/chi tiết; lưu `tracheidViewed`, `vesselViewed`, `pitViewed`.
- Khi đủ 3: hiện câu hỏi A/B. Chọn A → phản hồi sai + LÀM LẠI, giữ trạng thái hotspot. Chọn B → phản hồi đúng + TIẾP TỤC; lưu `M03_ST01_complete=true`.

ASSET/BLUEPRINT — SO SÁNH QUẢN BÀO VÀ MẠCH ỐNG
Không tạo mã raster mới; CODE/SVG nội bộ HTML.
PURPOSE: giúp HS nhìn thấy khác biệt hình thái cơ bản giữa quản bào và mạch ống, đồng thời nhận ra các phần tử dẫn khi trưởng thành không còn nhân/bào quan hoạt động.
LAYOUT: khung 16:9. Cột trái x=4–48% là 2–3 quản bào xếp chồng lệch; cột phải x=52–96% là 3 phần tử mạch ống xếp thẳng dọc. Chừa dải tiêu đề/nhãn phía trên 8–12% và vùng tooltip ở dưới 15–20%.
REQUIRED OBJECTS: quản bào dài hẹp, hai đầu thuôn; mạch ống gồm các phần tử ngắn/rộng hơn xếp nối tiếp; thành bên hoá gỗ; lỗ bên/pit ở thành bên; bản/thành đầu có lỗ thủng chỉ ở tuyến mạch ống; không nhân, không bào quan.
OBJECT RELATIONS: quản bào kề nhau trao đổi nước qua lỗ bên; mạch ống nối dọc qua các thành đầu có lỗ thủng tạo đường dẫn dọc thông hơn; lỗ bên của cả hai nằm trên thành bên, không đặt giữa lòng ống.
ARROW MAP: T1 [FROM] lòng một quản bào → [TO] lòng quản bào kề qua vùng lỗ bên → [MEANS] nước có thể di chuyển giữa các quản bào qua lỗ bên. V1 [FROM] lòng phần tử mạch ống phía dưới → [TO] lòng phần tử mạch ống phía trên qua lỗ thủng ở thành đầu → [MEANS] nước di chuyển dọc theo chuỗi phần tử mạch ống. V2 [FROM] lòng một phần tử mạch ống → [TO] phần tử mạch gỗ kề bên qua lỗ bên → [MEANS] có trao đổi nước ngang giữa các phần tử kề. Mũi tên chỉ hiện khi hotspot tương ứng mở; không bake.
NEGATIVE CONTENT: không vẽ quản bào có bản thủng đầu giống mạch ống; không vẽ mạch ống còn nhân/bào quan; không biến lỗ bên thành lỗ lớn xuyên thủng toàn thành; không mô tả hai loại có cấu tạo y hệt; không chữ bake-in.
TEXT-LOCK: QUẢN BÀO, MẠCH ỐNG, LỖ BÊN, LỖ THỦNG Ở THÀNH ĐẦU và tooltip là HTML/SVG text.
CONTINUITY: cùng một sơ đồ dùng xuyên ST01; chỉ đổi highlight, không redraw cấu trúc giữa các hotspot.
SCIENCE-LOCK: chỉ mạch ống có lỗ thủng rõ ở thành đầu trong sơ đồ này; quản bào truyền nước qua lỗ bên; cả quản bào và phần tử mạch ống đều là tế bào đã chết khi trưởng thành, thành hoá gỗ.
ACCEPTANCE TEST: nhìn tắt text vẫn phân biệt được quản bào và mạch ống; T1/V1/V2 đúng FROM→TO→MEANS; không có nhân/bào quan; không gắn lỗ thủng đầu cho quản bào; resize không làm đổi quan hệ.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

ASSET — CÂU HỎI A/B
Không tạo ảnh/mã hình. Native HTML/CSS; phản hồi mặc định ẩn; A sai cho chọn lại, B đúng mở TIẾP TỤC; không dùng màu/icon gợi đáp án trước khi trả lời.

==============================
ST02 — ĐIỀU GÌ GIÚP DUY TRÌ DÒNG NƯỚC TỪ RỄ LÊN LÁ?
Mã Stage: SH11-B02-M03-ST02

HS_VIEW
Lời dẫn: “Cấu tạo mạch gỗ tạo nên đường dẫn. Dòng nước trong đường dẫn đó được duy trì nhờ sự phối hợp của ba yếu tố.”
HƯỚNG DẪN: “Nhấn lần lượt vào ba vị trí trên hình: RỄ – THÂN – LÁ. Vị trí đã xem sẽ đổi trạng thái.”
Khi nhấn RỄ: “Áp suất rễ có thể góp phần đẩy nước từ rễ lên phía trên.”
Khi nhấn THÂN: “Các phân tử nước liên kết với nhau và bám với thành mạch gỗ, góp phần duy trì cột nước liên tục trong mạch.”
Khi nhấn LÁ: “Khi nước thoát hơi ở lá, một lực kéo được tạo ra và truyền xuống cột nước trong mạch gỗ. Đây là động lực chủ đạo của dòng mạch gỗ.”
Sau khi xem đủ ba vị trí, hiện câu hỏi:
“Động lực chủ đạo giúp đưa nước lên cao trong mạch gỗ là gì?”
A. “Áp suất rễ.”
B. “Lực kéo do thoát hơi nước ở lá.”
Đáp án đúng: B.
Phản hồi đúng: “Chính xác. Lực kéo hình thành do thoát hơi nước ở lá là động lực chủ đạo; áp suất rễ và đặc tính liên kết của nước cùng góp phần duy trì dòng mạch gỗ.”
Phản hồi sai: “Áp suất rễ có vai trò nhất định nhưng không phải động lực chủ đạo đưa nước lên cao. Hãy chú ý quá trình thoát hơi nước diễn ra ở lá.”
Nút đúng: TIẾP TỤC. Nút sai: LÀM LẠI.

DEV_ONLY
- Mục tiêu sư phạm: cho HS phân biệt vị trí và vai trò của ba yếu tố, không hiểu sai rằng áp suất rễ là lực duy nhất hoặc chủ đạo.
- Dựng CODE/SVG SCIENTIFIC; cùng một cây/sơ đồ mạch gỗ dùng xuyên ST02.
- Desktop: cây cắt dọc giản lược chiếm 58–64% màn; panel giải thích 32–38%. Mobile: cây trên, panel dưới; hotspot RỄ/THÂN/LÁ neo theo cấu trúc, không trôi khi responsive.
- Trạng thái đầu: tuyến dòng nước hiện trung tính; 3 hotspot hoạt động; mũi tên lực ẩn/trung tính; câu hỏi ẩn.
- Nhấn RỄ: highlight vùng rễ + áp suất rễ; `rootPressureViewed=true`.
- Nhấn THÂN: zoom nhẹ vào cột nước trong mạch; hiện liên kết nước–nước và nước–thành ở mức biểu tượng tối giản; `cohesionViewed=true`.
- Nhấn LÁ: highlight khí khổng/vùng thoát hơi nước ở mức khái quát + tuyến lực kéo; `transpirationViewed=true`.
- Khi đủ 3: hiện câu hỏi A/B. A sai → phản hồi + LÀM LẠI; B đúng → phản hồi + TIẾP TỤC; lưu `M03_ST02_complete=true`.

ASSET/BLUEPRINT — BA YẾU TỐ DUY TRÌ DÒNG MẠCH GỖ
Không tạo mã raster mới; CODE/SVG SCIENTIFIC bám mô hình cây và sơ đồ dòng mạch gỗ.
PURPOSE: khóa đúng vị trí và quan hệ: áp suất rễ ở rễ; liên kết cột nước dọc mạch; lực kéo phát sinh do thoát hơi nước ở lá và là động lực chủ đạo.
LAYOUT: khung 16:9. Cây giản lược đặt giữa x=30–68%; rễ y=72–96%; thân y=24–74%; tán/lá y=4–30%. Một tuyến mạch gỗ liên tục chạy trong trục cây. Panel chú thích ở x=70–98%.
REQUIRED OBJECTS: vùng rễ; tuyến mạch gỗ trong thân; lá; cột nước liên tục trong mạch; biểu tượng thoát hơi nước ở lá; các phân tử nước đại diện ở một ô zoom nhỏ dọc thân; thành mạch gỗ.
OBJECT RELATIONS: áp suất rễ tác động tại vùng rễ và góp phần tạo xu hướng đẩy cột nước lên; các phân tử nước liên kết với nhau thành cột liên tục và bám với thành mạch; thoát hơi nước ở lá tạo sức hút/lực kéo truyền qua cột nước liên tục, làm nước trong mạch di chuyển lên phía lá.
ARROW MAP: R1 [FROM] vùng mạch gỗ ở rễ → [TO] đoạn mạch gỗ phần dưới thân → [MEANS] áp suất rễ góp phần đẩy nước lên phía trên. C1 [FROM] một phân tử nước đại diện trong cột → [TO] phân tử nước kề → [MEANS] lực liên kết giữa các phân tử nước giúp duy trì cột nước liên tục. A1 [FROM] phân tử nước sát thành mạch → [TO] thành mạch gỗ → [MEANS] lực bám giữa nước và thành mạch hỗ trợ duy trì cột nước. T1 [FROM] bề mặt lá/vùng thoát hơi nước → [TO] cột nước trong mạch gỗ ngay dưới lá → [MEANS] thoát hơi nước tạo lực kéo lên cột nước. F1 [FROM] đoạn cột nước phía dưới trong thân → [TO] đoạn cột nước phía trên gần lá → [MEANS] dòng nước thực tế di chuyển chủ yếu từ rễ lên lá dưới tác động tổng hợp, trong đó lực kéo do thoát hơi nước là chủ đạo.
NEGATIVE CONTENT: không vẽ “lực kéo” như mũi tên bắt đầu ở rễ; không làm áp suất rễ lớn nhất/chủ đạo; không vẽ cột nước đứt đoạn trong trạng thái bình thường; không dùng mũi tên hai chiều mơ hồ; không vẽ nước bay ra từ toàn bộ bề mặt thân; không chữ bake-in.
TEXT-LOCK: RỄ, THÂN, LÁ và mọi nhãn lực/tooltip là HTML/SVG.
CONTINUITY: cùng một sơ đồ giữ nguyên vị trí cây và tuyến mạch; chỉ mở highlight/zoom theo hotspot; khi hiện câu hỏi vẫn giữ trạng thái đã xem đủ ba yếu tố.
SCIENCE-LOCK: lực kéo phát sinh gắn với thoát hơi nước ở lá; áp suất rễ chỉ góp phần; liên kết/bám duy trì tính liên tục của cột nước; không mô tả ba yếu tố như ba “động cơ” ngang nhau.
ACCEPTANCE TEST: R1/C1/A1/T1/F1 đúng điểm đầu–cuối–ý nghĩa; T1 neo tại lá; F1 hướng dưới→trên; không có mũi tên lực kéo từ rễ; câu hỏi không bị hình hé đáp án bằng kích thước/màu trước khi HS trả lời.
E1 SCIENCE PASS; E2 PEDAGOGY PASS.

ASSET — CÂU HỎI A/B
Không tạo ảnh/mã hình. Native HTML/CSS; câu hỏi/đáp án/phản hồi đúng nguyên văn HS_VIEW; phản hồi ẩn đến khi chọn; A sai cho làm lại, B đúng mở TIẾP TỤC.

==============================
ST03 — GHI NHỚ VÀ KẾT NỐI
Mã Stage: SH11-B02-M03-ST03

HS_VIEW
GHI NHỚ
1. “Mạch gỗ được cấu tạo chủ yếu từ quản bào và mạch ống; khi trưởng thành, đây là những tế bào đã chết, có thành tế bào hoá gỗ.”
2. “Nước và ion khoáng được vận chuyển chủ yếu từ rễ lên thân và lá trong mạch gỗ.”
3. “Dòng mạch gỗ được duy trì nhờ áp suất rễ, sự liên kết của cột nước và lực kéo do thoát hơi nước; trong đó lực kéo do thoát hơi nước là động lực chủ đạo.”
Kết nối sang M04: “Nước và ion khoáng được đưa đến lá qua mạch gỗ. Còn các chất hữu cơ được tạo ra ở lá được vận chuyển đến những bộ phận khác của cây bằng cách nào?”
Nút: HOÀN THÀNH MODULE.

DEV_ONLY
- Không có asset mới. Khối GHI NHỚ dựng native HTML/CSS.
- Nội dung hiện đầy đủ khi vào ST03; không yêu cầu HS lặp lại nhiệm vụ ST01/ST02.
- Nút HOÀN THÀNH MODULE khả dụng ngay khi ST03 tải xong; nhấn nút ghi hoàn thành module và hiện thông báo trung tính.
- Giữ dữ liệu `M03_ST01_complete`, `M03_ST02_complete` cho AI gia sư/analytics.
- Không hiệu ứng điểm số/ăn mừng.

FINAL QA
- E1 Science: PASS. Đã sửa sai khái quát lỗ thủng đầu tận cùng cho cả quản bào và mạch ống; dùng đúng “mạch gỗ được cấu tạo chủ yếu từ quản bào và mạch ống”; chỉ các phần tử dẫn được mô tả là tế bào chết khi trưởng thành; lỗ bên chỉ mô tả trao đổi nước giữa các phần tử kề; lực kéo do thoát hơi nước là chủ đạo, áp suất rễ chỉ góp phần.
- E2 Curriculum/Pedagogy: PASS. Mạch học M02→chiều vận chuyển→cấu tạo→ba yếu tố→ghi nhớ→M04; hook ống nghiệm đã loại vì không tạo thêm giá trị nhận thức.
- E3 HTML: PASS. HS_VIEW/DEV_ONLY tách lớp; state, nút, đúng-sai, mobile được khóa.
- E5 Visual: PASS. Chỉ A01 cần raster/reference-guided; ST01/ST02 dùng CODE/SVG với Arrow Map đủ FROM→TO→MEANS; UI không tạo mã hình mới.
- E7 Regression: PASS. Không dùng “phần tử dẫn chính”; không gọi chung toàn mạch gỗ là tế bào chết; không gán bản thủng đầu cho quản bào; không mô tả dòng ngang như chiều vận chuyển chính; không để lực kéo xuất phát từ rễ; không còn mũi tên khoa học mơ hồ.

ĐÂY LÀ BẢN CUỐI, THAY THẾ CÁC BẢN TRƯỚC CỦA SH11-B02-M03.
