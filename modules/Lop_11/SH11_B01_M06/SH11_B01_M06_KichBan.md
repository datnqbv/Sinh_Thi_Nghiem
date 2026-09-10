FILE 1 — SH11-B01-M06 — VAI TRÒ CỦA SINH VẬT TỰ DƯỠNG TRONG SINH GIỚI
Loại: HTML học lí thuyết
Số Stage: 3 (ST00 Hook; ST01; ST02 Ghi nhớ – Kết nối)
Phạm vi: SH11-B01-M06-ST00 → SH11-B01-M06-ST02
Trạng thái: FINAL ĐÃ DUYỆT NỘI DUNG – SẴN SÀNG CHO ĐỘI SẢN XUẤT.

NGUYÊN TẮC SẢN XUẤT CHUNG
- HS_VIEW và DEV_ONLY tách tuyệt đối.
- Không quy vai trò hấp thụ CO₂/giải phóng O₂ cho mọi sinh vật tự dưỡng; vai trò này gắn với sinh vật tự dưỡng quang hợp.
- Không đồng nhất sinh vật tự dưỡng với riêng thực vật; gồm thực vật, tảo và một số vi khuẩn.
- Không tuyệt đối hoá “không có cây xanh thì thức ăn/không khí biến mất”.
- Vai trò tạo nơi ở/nơi sinh sản chỉ gắn với nhiều thực vật và tảo kích thước lớn, không phải mọi sinh vật tự dưỡng.
- Mọi hình hình thành kiến thức phải qua Science PASS + Pedagogy PASS trước bàn giao.
- Mọi mũi tên/đường dẫn phải khóa FROM → TO → MEANS; không có mũi tên chung chung.
- Không bake text khoa học vào raster nếu không bắt buộc; ưu tiên HTML/SVG cho nhãn và mũi tên.
- Trên Sheet, phần REUSE/UI/CODE không tạo raster mới thì không tạo mã hình mới.

==============================
ST00 — NẾU THIẾU SINH VẬT TỰ DƯỠNG, ĐIỀU GÌ SẼ XẢY RA?
==============================
Mã Stage: SH11-B01-M06-ST00

HS_VIEW
Câu hỏi mở đầu: “Các sinh vật dị dưỡng như động vật và con người không tự tổng hợp được chất hữu cơ từ CO₂. Vậy nếu một hệ sinh thái mất đi phần lớn sinh vật tự dưỡng, điều gì sẽ bị ảnh hưởng trước tiên?”

Lời dẫn: “Quan sát hai tình huống dưới đây. Nhấn vào từng hình để xem sự có mặt của sinh vật tự dưỡng liên quan như thế nào đến đời sống của các sinh vật khác.”

HƯỚNG DẪN: “Nhấn vào từng hình. Hình đã xem sẽ đổi trạng thái. Khi xem đủ hai hình, nút TIẾP TỤC sẽ xuất hiện.”

Tình huống 1 – Hệ sinh thái có sinh vật tự dưỡng phát triển:
“Sinh vật tự dưỡng tạo ra chất hữu cơ. Chất hữu cơ này trở thành nguồn vật chất và năng lượng ban đầu cho nhiều sinh vật dị dưỡng trong hệ sinh thái.”

Tình huống 2 – Hệ sinh thái suy giảm mạnh sinh vật tự dưỡng:
“Khi sinh vật tự dưỡng suy giảm mạnh, nguồn chất hữu cơ cung cấp cho các bậc dinh dưỡng khác cũng giảm, làm chuỗi và lưới thức ăn bị ảnh hưởng.”

Câu chốt ST00: “Sinh vật tự dưỡng không chỉ tự tạo chất hữu cơ cho chính mình. Chúng còn tạo nên nguồn vật chất và năng lượng ban đầu cho nhiều sinh vật khác. Ngoài vai trò đó, sinh vật tự dưỡng còn ảnh hưởng đến môi trường sống như thế nào?”

Nút: TIẾP TỤC.

DEV_ONLY
- Desktop: hai hình so sánh đặt song song, mỗi hình chiếm khoảng 43–46% chiều ngang vùng nội dung; khoảng cách giữa hai hình 6–8%. Mobile: xếp dọc, giữ cùng tỉ lệ và cùng thứ tự.
- Hotspot là HTML overlay, không bake vào ảnh. Hình đã xem đổi viền/trạng thái trung tính; không dùng màu xanh/đỏ đúng-sai.
- TIẾP TỤC khóa đến khi đã xem đủ hai hình; không tự chuyển Stage.
- Không đặt chữ “hệ sinh thái tốt/xấu”, “đúng/sai”, “có/không có sự sống” trực tiếp trên raster.

HÌNH CẦN TẠO — ST00 — TÌNH HUỐNG 1: HỆ SINH THÁI CÓ SINH VẬT TỰ DƯỠNG PHÁT TRIỂN
Loại: TẠO MỚI — ẢNH GIÁO DỤC 2D BÁN HIỆN THỰC, KHÔNG CHỮ.
MỤC ĐÍCH KIẾN THỨC: tạo vế đối chứng trực quan để HS nhận ra một hệ sinh thái có lớp sinh vật tự dưỡng phát triển cung cấp nền vật chất cho sinh vật dị dưỡng; ảnh chỉ tạo dữ kiện quan sát ban đầu, không tự diễn giải bằng sơ đồ hay nhãn.
BỐ CỤC:
- Khung ngang 4:3, camera cố định ở góc nhìn hơi cao 8–12°, nhìn vào một khoảng sinh cảnh bán tự nhiên rộng trung bình.
- Đường chân trời y≈28–32%. Vùng tiền cảnh y≈58–95%; trung cảnh y≈32–70%; hậu cảnh y≈18–42%.
- Dùng bố cục này làm continuity master cho ảnh tình huống 2; địa hình, đường chân trời, hướng sáng và góc camera phải giữ nguyên.
ĐỐI TƯỢNG BẮT BUỘC:
- Lớp sinh vật tự dưỡng chiếm thị giác chính: 2–3 cây gỗ cỡ vừa ở trung/hậu cảnh; 4–6 bụi cây; thảm cỏ/lá xanh phủ khoảng 65–75% diện tích nền đất nhìn thấy.
- Sinh vật dị dưỡng chỉ để gợi quan hệ hệ sinh thái, không phải trọng tâm: 1 thỏ hoặc động vật ăn cỏ nhỏ ở tiền/trung cảnh; 1–2 chim nhỏ; có thể có 1 côn trùng nhỏ nhưng không bắt buộc.
- Không có người, nhà, xe, nông trại hay vật thể nhân tạo nổi bật.
QUAN HỆ GIỮA CÁC ĐỐI TƯỢNG:
- Động vật ăn cỏ phải ở gần vùng thảm cỏ/bụi cây, tư thế kiếm ăn hoặc đứng tự nhiên; không săn mồi.
- Chim có thể đậu trên cành hoặc bay gần tán; không bắt buộc làm tổ ở ảnh này.
- Sinh vật dị dưỡng không được chiếm diện tích lớn hơn cụm thực vật; mục tiêu là nhìn ra thực vật/tảo tương tự vai trò sinh vật sản xuất, không phải “ảnh động vật”.
MŨI TÊN/ĐƯỜNG LIÊN KẾT: KHÔNG CÓ trong raster. Không dùng mũi tên, tia sáng, đường năng lượng hay vòng tuần hoàn.
TEXT-LOCK: KHÔNG BAKE TEXT. Chữ, hotspot, tooltip và nhãn chỉ là lớp HTML.
CONTINUITY-LOCK: ảnh này là master cho ảnh tình huống 2; phải lưu lại seed/tham chiếu, camera, địa hình, vị trí cây lớn, đường chân trời và hướng sáng.
SCIENCE-LOCK:
- Không làm lá/cây phát sáng; không vẽ O₂/CO₂ dạng bong bóng.
- Không vẽ thực vật “cho thức ăn trực tiếp” bằng các gói thức ăn hoặc vật thể biểu tượng.
- Không biểu diễn một chuỗi thức ăn cụ thể bằng vị trí các con vật.
NỘI DUNG CẤM: chữ, nhãn, biểu tượng năng lượng, mũi tên, khói công nghiệp, hiệu ứng “thiên đường”, màu xanh neon, động vật quá đông, hoa/quả phóng đại như nguồn thức ăn duy nhất.
TIÊU CHÍ DUYỆT ẢNH:
1) nhìn ảnh không UI thấy ngay sinh cảnh có lớp thực vật phát triển; 2) thực vật chiếm vai trò thị giác chính; 3) động vật chỉ là thành phần phụ; 4) không có yếu tố nào tự dạy sai rằng mọi sinh vật tự dưỡng đều là cây; 5) bố cục có thể tái dùng chính xác cho ảnh tình huống 2.
E1 SCIENCE VERDICT: PASS — ảnh không chứa quan hệ khoa học sai, không dùng ký hiệu khí/chuỗi thức ăn.
E2 PEDAGOGY VERDICT: PASS — ảnh cung cấp dữ kiện so sánh mà không hé đáp án bằng nhãn/màu đúng-sai.

HÌNH CẦN TẠO — ST00 — TÌNH HUỐNG 2: HỆ SINH THÁI SUY GIẢM MẠNH SINH VẬT TỰ DƯỠNG
Loại: TẠO BIẾN THỂ CÓ KIỂM SOÁT TỪ ẢNH TÌNH HUỐNG 1 — CÓ TẠO RASTER MỚI.
MỤC ĐÍCH KIẾN THỨC: tạo đối chứng cùng một sinh cảnh khi lớp sinh vật tự dưỡng suy giảm mạnh để HS liên hệ với việc nguồn chất hữu cơ cho các bậc dinh dưỡng khác cũng giảm; đây là kịch bản giả định giáo dục, không phải dự báo sinh thái định lượng.
BỐ CỤC: giữ tuyệt đối camera, địa hình, đường chân trời, crop, phối cảnh và hướng sáng của ảnh tình huống 1.
ĐỐI TƯỢNG BẮT BUỘC VÀ PHẦN ĐƯỢC PHÉP THAY ĐỔI:
- Giữ nguyên 2–3 vị trí neo của cây gỗ nhưng chỉ còn 0–1 cây sống khoẻ; các vị trí còn lại có thể là thân cây trơ hoặc khoảng đất trống, không dựng cảnh cháy rừng.
- Thảm thực vật phủ giảm từ 65–75% xuống khoảng 10–20% diện tích nền đất nhìn thấy; còn một số bụi/cỏ thưa, không biến thành sa mạc hoàn toàn.
- Sinh vật dị dưỡng giảm rõ: tối đa 0–1 cá thể nhỏ còn xuất hiện; không có xác chết.
QUAN HỆ GIỮA CÁC ĐỐI TƯỢNG:
- Không tạo quan hệ nhân quả giả bằng cách cho động vật gầy trơ xương hoặc chết cạnh cây.
- Phải giữ cùng không gian với ảnh 1 để HS so sánh sự suy giảm lớp sinh vật sản xuất, không so sánh hai hệ sinh thái khác nhau.
MŨI TÊN/ĐƯỜNG LIÊN KẾT: KHÔNG CÓ trong raster.
TEXT-LOCK: KHÔNG BAKE TEXT; mọi chú thích là HTML.
CONTINUITY-LOCK: giữ 100% cấu trúc địa hình/camera/ánh sáng; chỉ thay mức độ phủ sinh vật tự dưỡng và số lượng sinh vật dị dưỡng như mô tả trên.
SCIENCE-LOCK:
- Không gắn “suy giảm sinh vật tự dưỡng” với khói độc, cháy rừng, hạn hán hoặc ô nhiễm nếu không có trong nội dung.
- Không làm bầu trời chuyển đỏ/xám như nguyên nhân; ánh sáng giữ tương đương ảnh 1.
- Không vẽ cảnh “không còn O₂” hay con người đeo mặt nạ.
NỘI DUNG CẤM: thảm hoạ tận thế, xác động vật, cháy, khói nhà máy, mặt đất nứt cực đoan, biển báo nguy hiểm, chữ “thiếu O₂”, màu đỏ cảnh báo.
TIÊU CHÍ DUYỆT ẢNH:
1) nhìn hai ảnh cạnh nhau nhận ra cùng một sinh cảnh/cùng camera; 2) khác biệt chính là mức độ phủ của sinh vật tự dưỡng; 3) không có nguyên nhân thảm hoạ được tự thêm; 4) không ám chỉ toàn bộ sự sống biến mất tức thì; 5) không có text/mũi tên bake-in.
E1 SCIENCE VERDICT: PASS — biến thể không tuyệt đối hoá hậu quả và không gán nguyên nhân ngoài kịch bản.
E2 PEDAGOGY VERDICT: PASS — đủ khác biệt để so sánh nhưng không biến ảnh thành đáp án định lượng.

==============================
ST01 — VAI TRÒ CỦA SINH VẬT TỰ DƯỠNG TRONG SINH GIỚI
==============================
Mã Stage: SH11-B01-M06-ST01

HS_VIEW
Lời dẫn: “Hãy khám phá ba vai trò lớn của sinh vật tự dưỡng đối với sinh giới.”

HƯỚNG DẪN: “Nhấn vào từng vị trí 1, 2, 3 trên sơ đồ. Vị trí đã xem sẽ đổi trạng thái. Khi xem đủ ba vị trí, hoạt động củng cố sẽ xuất hiện.”

Vị trí 1 – Nguồn vật chất và năng lượng ban đầu:
“Sinh vật tự dưỡng tổng hợp chất hữu cơ từ nguồn carbon vô cơ. Vì vậy, chúng tạo ra nguồn vật chất và năng lượng ban đầu cho các bậc dinh dưỡng khác trong nhiều hệ sinh thái.”
Ví dụ đi kèm: “Cỏ tạo chất hữu cơ → thỏ ăn cỏ → cáo ăn thỏ. Năng lượng và vật chất mà thỏ và cáo nhận được có nguồn gốc từ chất hữu cơ do sinh vật tự dưỡng tạo ra.”

Vị trí 2 – Góp phần duy trì thành phần khí quyển và điều hoà môi trường:
“Các sinh vật tự dưỡng quang hợp hấp thụ CO₂ và giải phóng O₂. Hoạt động quang hợp của thực vật, tảo và các sinh vật quang hợp khác góp phần duy trì thành phần khí quyển và điều hoà môi trường sống.”

Vị trí 3 – Tạo môi trường sống cho nhiều sinh vật:
“Nhiều sinh vật tự dưỡng, đặc biệt là thực vật và các loài tảo kích thước lớn, còn tạo nơi ở, nơi trú ẩn hoặc nơi sinh sản cho nhiều loài sinh vật khác.”
Ví dụ: “Cây có thể cung cấp nơi làm tổ cho chim, nơi bám cho nhiều sinh vật và tạo vi môi trường cho các loài khác sinh sống.”

HOẠT ĐỘNG CỦNG CỐ
Câu hỏi 1: “Vai trò nào dưới đây có thể áp dụng trực tiếp cho mọi sinh vật tự dưỡng?”
A. “Tổng hợp chất hữu cơ từ nguồn carbon vô cơ, tạo nguồn vật chất cho hệ sinh thái.”
B. “Giải phóng O₂ nhờ quang hợp.”
Đáp án đúng: A.
Phản hồi đúng: “Chính xác. Khả năng tổng hợp chất hữu cơ từ nguồn carbon vô cơ là đặc trưng chung của sinh vật tự dưỡng. Giải phóng O₂ chỉ gắn với các sinh vật tự dưỡng thực hiện quang hợp tạo O₂.”
Phản hồi sai: “Chưa đúng. Hãy nhớ lại M05: sinh vật tự dưỡng gồm cả quang tự dưỡng và hoá tự dưỡng. Vì vậy, không thể dùng một đặc điểm riêng của quang hợp để mô tả tất cả sinh vật tự dưỡng.”

Câu hỏi 2: “Sinh vật tự dưỡng chỉ gồm thực vật. Đúng hay sai?”
A. “Sai — sinh vật tự dưỡng còn gồm tảo và một số vi khuẩn.”
B. “Đúng — chỉ thực vật mới là sinh vật tự dưỡng.”
Đáp án đúng: A.
Phản hồi đúng: “Chính xác. Thực vật là nhóm sinh vật tự dưỡng rất quen thuộc, nhưng sinh vật tự dưỡng còn có tảo và một số vi khuẩn.”
Phản hồi sai: “Hãy nhớ lại module trước: ngoài thực vật, còn có tảo và một số vi khuẩn có khả năng tự tổng hợp chất hữu cơ từ nguồn carbon vô cơ.”

Chốt ST01: “Sinh vật tự dưỡng giữ vai trò nền tảng trong sinh giới: tạo nguồn vật chất và năng lượng ban đầu cho nhiều hệ sinh thái; các sinh vật tự dưỡng quang hợp góp phần duy trì thành phần khí quyển và điều hoà môi trường; nhiều thực vật và tảo còn tạo nơi sống cho các sinh vật khác.”

Nút: TIẾP TỤC.

DEV_ONLY
- Dùng một sơ đồ CODE/SVG ba vùng; KHÔNG giao AI raster tự vẽ quan hệ khoa học.
- Desktop: ba vùng 1–2–3 theo hàng ngang; mobile: xếp dọc 1→2→3 nhưng giữ nguyên logic từng vùng.
- Hotspot 1/2/3 là HTML overlay, tối thiểu 44×44 px; trạng thái đầu chỉ hiện số 1–2–3, không hiện sẵn tiêu đề vai trò để tránh hé đáp án.
- Sau khi xem đủ 3 hotspot mới mở hai câu hỏi củng cố. Câu 2 chỉ mở sau khi Câu 1 trả lời đúng.
- Sai không reset các hotspot đã xem; chọn lại trực tiếp.
- Đúng Câu 2 → lưu M06_st01_hoanthanh=true → hiện TIẾP TỤC.

SƠ ĐỒ CODE/SVG — ST01 — BA VAI TRÒ CỦA SINH VẬT TỰ DƯỠNG
Loại: CODE/SVG FIRST — KHÔNG TẠO RASTER MỚI, KHÔNG TẠO MÃ HÌNH MỚI TRÊN SHEET.
MỤC ĐÍCH KIẾN THỨC: hình thành ba nhóm vai trò mà không để một biểu tượng thực vật đại diện sai cho toàn bộ sinh vật tự dưỡng; mọi quan hệ chiều và khí phải được khóa bằng code.
BỐ CỤC TỔNG:
- Khung 16:9. Vùng 1 x≈3–32%; vùng 2 x≈35–65%; vùng 3 x≈68–97%; mỗi vùng y≈18–84%, cùng kích thước card.
- Trạng thái đầu: chỉ hiện minh hoạ tối giản và số 1/2/3; tiêu đề/giải thích là lớp HTML xuất hiện sau tương tác.

VÙNG 1 — NGUỒN VẬT CHẤT VÀ NĂNG LƯỢNG BAN ĐẦU
ĐỐI TƯỢNG: cụm cỏ/cây thấp ở trái; 1 thỏ ở giữa; 1 cáo ở phải. Không vẽ toàn bộ lưới thức ăn.
QUAN HỆ: cỏ là sinh vật sản xuất; thỏ là ví dụ sinh vật ăn cỏ; cáo là ví dụ sinh vật tiêu thụ tiếp theo. Đây chỉ là một chuỗi ví dụ, không phải khẳng định mọi cáo chỉ ăn thỏ.
ARROW MAP:
- Arrow F1: FROM mép phải cụm cỏ/cây thấp → TO mép trái thân thỏ → MEANS vật chất hữu cơ và năng lượng được truyền sang thỏ khi thỏ ăn thực vật.
- Arrow F2: FROM mép phải thân thỏ → TO mép trái thân cáo → MEANS vật chất hữu cơ và năng lượng tiếp tục được truyền sang cáo khi cáo ăn thỏ.
- Hai mũi tên F1/F2 cùng kiểu nét và cùng một chiều trái→phải; đầu mũi tên nằm ở sinh vật nhận, không đảo ngược.
TEXT-LOCK: nhãn “cỏ”, “thỏ”, “cáo”, “nguồn vật chất và năng lượng” là HTML/SVG text có thể điều khiển; không bake vào icon raster.
SCIENCE-LOCK: không dùng mũi tên từ cáo về thỏ/cây; không dùng ký hiệu năng lượng mặt trời đi trực tiếp vào thỏ/cáo; không dùng mũi tên để biểu thị “ai săn ai” theo chiều ngược dòng năng lượng.

VÙNG 2 — SINH VẬT TỰ DƯỠNG QUANG HỢP VÀ KHÍ QUYỂN
ĐỐI TƯỢNG: một group “sinh vật tự dưỡng quang hợp” gồm 1 cây xanh đơn giản + 1 cụm tảo/macroalgae nhỏ đặt cạnh, cùng trong một vùng ngoặc/group; không có vi khuẩn hoá tự dưỡng trong group này.
QUAN HỆ: cả cây và tảo chỉ là ví dụ cho nhóm sinh vật tự dưỡng quang hợp; không dùng riêng cây để đại diện mọi tự dưỡng.
ARROW MAP:
- Arrow G1: FROM vùng khí quyển ngoài group ở phía trên-trái → TO vùng lá cây + bề mặt cụm tảo trong group → MEANS CO₂ từ môi trường được sinh vật tự dưỡng quang hợp sử dụng làm nguồn carbon trong quang hợp.
- Arrow G2: FROM vùng lá cây + bề mặt cụm tảo trong group → TO vùng khí quyển ngoài group ở phía trên-phải → MEANS O₂ được giải phóng ra môi trường trong quang hợp tạo O₂.
- G1 và G2 phải tách thành hai đường riêng, không dùng một mũi tên hai đầu.
TEXT-LOCK: “CO₂” và “O₂” là lớp SVG/HTML riêng gắn cạnh đường tương ứng; không bake vào hình cây/tảo; text giải thích đầy đủ chỉ hiện sau hotspot 2.
SCIENCE-LOCK: không đặt CO₂ đi vào rễ; không đặt O₂ đi từ đất lên; không áp hai mũi tên khí này cho vi khuẩn hoá tự dưỡng; không vẽ ánh sáng thành mũi tên vật chất.

VÙNG 3 — TẠO NƠI SỐNG/NƠI TRÚ ẨN/NƠI SINH SẢN
ĐỐI TƯỢNG: nửa trái card là 1 cây trưởng thành có tán vừa với 1 tổ chim nhỏ neo ở chạc cành; nửa phải card là 1 cụm tảo kích thước lớn/macroalgae với 1–2 cá nhỏ hoặc sinh vật nhỏ trú giữa các nhánh.
QUAN HỆ: tổ chim phải nằm trên chạc cành, không lơ lửng; cá nhỏ phải nằm trong/giữa cấu trúc tảo, không bị vẽ như đang ăn tảo nếu không cần. Hai ví dụ minh hoạ rằng nhiều thực vật và tảo lớn tạo cấu trúc nơi sống; không nói mọi sinh vật tự dưỡng đều tạo nơi ở.
MŨI TÊN: KHÔNG CẦN. Nếu đội UI muốn dùng connector để highlight, connector chỉ nối hotspot tới tooltip và không được mang nghĩa khoa học.
TEXT-LOCK: không bake chữ “nơi ở/nơi sinh sản” vào hình; tooltip/nhãn là HTML.
SCIENCE-LOCK: không vẽ tổ chim trên thân cây không có điểm tựa; không vẽ cá ở ngoài nước; không biến tảo thành cỏ trên cạn; không đặt biểu tượng nhà/giường thay cho quan hệ sinh thái.

NỘI DUNG CẤM CHUNG CHO SƠ ĐỒ:
- Một mũi tên “CO₂/O₂” hai đầu không rõ ý nghĩa; mũi tên khí lẫn vào mũi tên chuỗi thức ăn; icon pin/sét/năng lượng; vòng tuần hoàn không có trong bài; chữ baked vào raster; dùng một cây duy nhất để gắn cả ba vai trò như thể mọi tự dưỡng đều có mọi vai trò.
ACCEPTANCE TEST:
1) vùng 1 có đúng F1, F2 theo chiều cỏ→thỏ→cáo và tooltip giải thích dòng vật chất/năng lượng; 2) vùng 2 có đúng G1 CO₂ từ môi trường→nhóm quang hợp và G2 O₂ từ nhóm quang hợp→môi trường; 3) G1/G2 không chạm hay nhập với F1/F2; 4) vùng 3 không dùng mũi tên khoa học không cần thiết; 5) responsive không đảo thứ tự/chiều; 6) text-lock đúng; 7) không có yếu tố cấm.
E1 SCIENCE VERDICT: PASS — cấu trúc, phạm vi quang hợp và toàn bộ Arrow Map đã khóa đúng.
E2 PEDAGOGY VERDICT: PASS — ba vùng dẫn đúng ba kết luận, không đồng nhất mọi sinh vật tự dưỡng với thực vật và không hé đáp án trước khi mở hotspot.

==============================
ST02 — GHI NHỚ VÀ KHÉP LẠI BÀI 1
==============================
Mã Stage: SH11-B01-M06-ST02

HS_VIEW
GHI NHỚ:
1. “Sinh vật tự dưỡng tổng hợp chất hữu cơ từ nguồn carbon vô cơ và tạo nguồn vật chất, năng lượng ban đầu cho nhiều hệ sinh thái.”
2. “Các sinh vật tự dưỡng quang hợp hấp thụ CO₂ và giải phóng O₂, góp phần duy trì thành phần khí quyển và điều hoà môi trường sống.”
3. “Nhiều thực vật và tảo còn tạo nơi ở, nơi trú ẩn hoặc nơi sinh sản cho các sinh vật khác.”
4. “Sinh vật tự dưỡng không chỉ gồm thực vật mà còn có tảo và một số vi khuẩn.”

Lời chốt Bài 1: “Qua Bài 1, chúng ta đã thấy sinh vật phải liên tục trao đổi chất và chuyển hoá năng lượng để duy trì sự sống; các quá trình này diễn ra từ cấp tế bào đến cơ thể, với những phương thức khác nhau ở sinh vật tự dưỡng và dị dưỡng. Trong đó, sinh vật tự dưỡng giữ vai trò đặc biệt quan trọng vì tạo nên nguồn chất hữu cơ ban đầu cho nhiều hệ sinh thái.”

Kết nối sang Bài 2: “Ở thực vật, quá trình nào giúp chuyển năng lượng ánh sáng thành hoá năng và tạo nên chất hữu cơ? Ở Bài 2 – Quang hợp ở thực vật, chúng ta sẽ đi sâu vào quá trình này.”

Nút: HOÀN THÀNH MODULE.

DEV_ONLY
- Không tạo nhiệm vụ nhận thức mới và không tạo ảnh mới.
- Toàn bộ GHI NHỚ hiện ngay khi vào Stage; không bắt HS trả lời lại kiến thức đã làm.
- Nhấn HOÀN THÀNH MODULE → lưu M06 hoàn thành → thông báo trung tính “Đã hoàn thành module.”
- Không điểm số, không confetti.

QA / REGRESSION LOCK
- Structure: giữ 3 Stage ST00–ST02.
- Science: không quy O₂/CO₂ cho mọi sinh vật tự dưỡng; không đồng nhất tự dưỡng với thực vật; vai trò nơi sống được giới hạn đúng phạm vi; chuỗi thức ăn chỉ là ví dụ.
- Pedagogy: ST00 gây vấn đề bằng so sánh cùng sinh cảnh; ST01 hình thành ba nhóm vai trò và khóa hai hiểu sai; ST02 chốt toàn module và khép Bài 1.
- Interaction: đủ hướng dẫn, trạng thái ghi nhận, điều kiện nút, phản hồi đúng/sai và dữ liệu hoàn thành.
- Visual: A01/A02 là raster mới có continuity rõ; sơ đồ ST01 là CODE/SVG không tạo mã hình mới; toàn bộ quan hệ/mũi tên có FROM→TO→MEANS, text-lock, science-lock và acceptance test.
- IMAGE SCIENCE-RELATION SPEC: PASSED.
- IMAGE HANDOFF PREFLIGHT: PASSED cho phạm vi M06.
SCIENCE-GATE: PASSED
PEDAGOGY-GATE: PASSED
FORMAT-GATE: PASSED
PRODUCTION-SPEC-GATE: PASSED
TRẠNG THÁI: FINAL – SẴN SÀNG SẢN XUẤT.
1