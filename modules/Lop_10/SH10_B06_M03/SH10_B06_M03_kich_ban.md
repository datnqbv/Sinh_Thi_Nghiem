FILE 1 — KỊCH BẢN NỘI DUNG VIRTUAL LAB
SH10_B06_M03 — NHẬN BIẾT PROTEIN BẰNG PHẢN ỨNG BIURET
Bài 6. Thực hành: Nhận biết một số phân tử sinh học
Hình thức sản xuất: VIRTUAL LAB / HTML THỰC HÀNH
Phiên bản: v3 FINAL
Trạng thái: BẢN CUỐI ĐÃ KIỂM TOÁN NỘI DUNG; THAY THẾ v1 VÀ v2
Lưu vết: Giữ nguyên bản v1 để đối chiếu; không sửa đè.

======================================================================
A. HỒ SƠ MODULE
======================================================================

1. Mã module
SH10_B06_M03

2. Tên module
Nhận biết protein bằng phản ứng Biuret.

3. Yêu cầu cần đạt
Thực hành xác định định tính được protein trong tế bào bằng thuốc thử Biuret; nhận biết được hiện tượng và giải thích được nguyên lí.

4. Mức độ/năng lực
- Vận dụng – SH2.3: Thực hiện đúng quy trình.
- Vận dụng – SH2.4: Quan sát, nhận biết hiện tượng và giải thích nguyên lí.
- Vận dụng – SH2.5: Hoàn thành báo cáo thực hành.

5. Câu hỏi trung tâm
Làm thế nào dùng phản ứng Biuret để nhận biết protein trong mẫu lòng trắng trứng?

6. Nguồn khóa
- Mẫu: một ít dung dịch albumin 1% hoặc một lượng nhỏ lòng trắng trứng.
- Quy trình: cho mẫu vào một ống nghiệm; thêm 5 mL dung dịch NaOH loãng; sau đó thêm 5 mL dung dịch CuSO₄ 1%; quan sát dung dịch chuyển dần từ màu xanh sang màu xanh tím sau vài phút.
- Nguyên lí: trong môi trường kiềm, ion Cu²⁺ tương tác với các liên kết peptide tạo phức chất có màu; màu có thể thay đổi tùy số lượng liên kết peptide. Trong thí nghiệm này, kết quả khóa là xanh tím.
- Không tự thêm ống đối chứng, nước cất hoặc thể tích mẫu cụ thể ngoài nguồn.
- Trình tự thao tác phải theo SGK: mẫu → NaOH → CuSO₄ → chờ và quan sát.
- Không khẳng định đảo thứ tự chắc chắn làm phản ứng thất bại nếu chưa có nguồn thực nghiệm khóa.

7. Sản phẩm nhận thức
Học sinh:
- thực hiện đúng trình tự;
- nhận biết được sự chuyển màu từ xanh sang xanh tím;
- giải thích được vai trò của môi trường kiềm, ion Cu²⁺ và liên kết peptide;
- kết luận mẫu có protein;
- hoàn thành báo cáo từ dữ liệu đã tạo trong quá trình.

8. Kiến trúc module
- Màn 1: An toàn trước thực hành.
- Màn 2: Mục đích và sắp xếp quy trình.
- Màn 3: Lựa chọn mẫu, dụng cụ và hóa chất.
- Màn 4: Cho mẫu vào ống nghiệm.
- Màn 5: Thêm 5 mL NaOH loãng.
- Màn 6: Thêm 5 mL CuSO₄ 1%, chờ và quan sát.
- Màn 7: Thu dọn sau thực hành.
- Màn 8: Khai thác kết quả và tạo dữ liệu báo cáo.
- Màn 9: Chọn cấu trúc và xem báo cáo hoàn chỉnh.

9. Quy tắc chung
- Tách tuyệt đối HS_VIEW và DEV_ONLY.
- Phản hồi mặc định ẩn.
- Phản hồi đúng giải thích căn cứ.
- Phản hồi sai chỉ gợi ý, không đưa thẳng toàn bộ đáp án.
- Đúng hiện TIẾP TỤC; sai hiện LÀM LẠI.
- Kết quả phải sinh ra từ thao tác; học sinh không chọn một ảnh kết quả thay thế.
- Dữ liệu đúng được lưu xuyên màn và dùng để tạo báo cáo.
- Không dùng voice/TTS.
- Không để DEV_ONLY xuất hiện trong giao diện học sinh.

======================================================================
B. MÀN 1 — AN TOÀN TRƯỚC THỰC HÀNH
Mã màn: SH10_B06_M03_C01
======================================================================

I. HS_VIEW

1. Tiêu đề
AN TOÀN KHI THỰC HIỆN PHẢN ỨNG BIURET

2. Text giảng
“Thí nghiệm sử dụng dung dịch NaOH và CuSO₄. Trước khi thao tác, bạn cần nhận biết những hành động giúp hạn chế hóa chất tiếp xúc với da, mắt và khu vực làm việc.”

3. Nội dung
Hiển thị 6 hình hành động:
1. Trang phục và tóc gọn gàng, đeo kính bảo hộ.
2. Dùng tay trần lau ngay dung dịch NaOH bị đổ.
3. Đọc nhãn lọ trước khi lấy hóa chất.
4. Đưa lọ hóa chất sát mũi để ngửi.
5. Dùng dụng cụ lấy hóa chất, không chạm trực tiếp.
6. Đặt đồ ăn và nước uống trên bàn thực hành.

4. HƯỚNG DẪN
“Nhấn vào các hình thể hiện hành động an toàn. Hình đã chọn xuất hiện khung nổi bật. Bạn có thể nhấn lại để bỏ chọn.”

5. Nút
KIỂM TRA

6. Điều kiện mở nút
Đã chọn ít nhất một hình.

7. Phản hồi đúng
“Chính xác. Khi làm việc với NaOH và CuSO₄, cần đọc nhãn, dùng dụng cụ phù hợp, bảo vệ mắt và tránh để hóa chất tiếp xúc trực tiếp với cơ thể. Tiếp theo, hãy xác định mục đích và thứ tự của thí nghiệm.”

8. Nút sau phản hồi đúng
TIẾP TỤC

9. Phản hồi sai
“Có lựa chọn chưa an toàn hoặc còn thiếu. Hãy xem lại những hành động có thể làm hóa chất tiếp xúc trực tiếp với cơ thể hoặc làm nhiễm bẩn khu vực thực hành.”

10. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Nhận biết hành động an toàn khi sử dụng NaOH và CuSO₄.

2. Đáp án đúng
Hình 1, 3, 5.

3. Logic
- Nhấn chọn/bỏ chọn.
- Chỉ đánh giá sau KIỂM TRA.
- Sai: giữ lựa chọn để học sinh đối chiếu; nhấn LÀM LẠI mới xóa các lựa chọn sai.
- Đúng: khóa ba hình đúng, hiện phản hồi và TIẾP TỤC.

4. Dữ liệu lưu
safety_completed = true

5. Bố cục
- Desktop: lưới 2 × 3.
- Mobile: lưới 2 cột, cuộn dọc.
- Hành động, tay, lọ hóa chất và phương tiện bảo hộ phải nhìn rõ.

6. Điều cấm
- Không ghi ĐÚNG/SAI sẵn trên hình.
- Không dùng riêng yêu cầu “buộc tóc”; phải dùng “trang phục và tóc gọn gàng”.
- Không thể hiện học sinh tự xử lí hóa chất đổ bằng tay trần.
- Không làm NaOH hoặc CuSO₄ giống nước uống.

======================================================================
C. MÀN 2 — MỤC ĐÍCH VÀ QUY TRÌNH
Mã màn: SH10_B06_M03_C02
======================================================================

I. HS_VIEW

1. Tiêu đề
MỤC ĐÍCH VÀ QUY TRÌNH THÍ NGHIỆM

2. Text giảng
“Protein trong mẫu không thể được nhận biết chỉ bằng màu sắc ban đầu. Trong thí nghiệm này, phản ứng Biuret làm xuất hiện dấu hiệu màu để nhận biết protein.”

3. Nội dung
Bốn thẻ quy trình bị xáo trộn:
A. Cho một ít dung dịch albumin 1% hoặc một lượng nhỏ lòng trắng trứng vào ống nghiệm.
B. Thêm 5 mL dung dịch NaOH loãng.
C. Thêm 5 mL dung dịch CuSO₄ 1%.
D. Chờ vài phút và quan sát sự thay đổi màu.

4. HƯỚNG DẪN
“Kéo bốn thẻ vào các ô BƯỚC 1 đến BƯỚC 4 theo đúng thứ tự. Thẻ đã đặt có thể kéo sang vị trí khác.”

5. Nút
KIỂM TRA

6. Điều kiện mở nút
Đã đặt đủ bốn thẻ.

7. Phản hồi đúng
“Chính xác. Quy trình được thực hiện theo thứ tự: cho mẫu vào ống nghiệm, thêm NaOH, thêm CuSO₄, sau đó chờ và quan sát. Tiếp theo, hãy lựa chọn những thứ cần dùng.”

8. Nút sau phản hồi đúng
TIẾP TỤC

9. Phản hồi sai
“Thứ tự chưa chính xác. Hãy xác định bước chuẩn bị mẫu trước, sau đó đối chiếu thứ tự thêm hai dung dịch được nêu trong quy trình.”

10. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Xác định mục đích và ghi nhớ đúng trình tự SGK.

2. Đáp án
A → B → C → D.

3. Logic
- Chỉ đánh giá sau KIỂM TRA.
- Sai: giữ vị trí thẻ trong thời gian phản hồi; nhấn LÀM LẠI mới đưa thẻ sai về khay.
- Đúng: khóa toàn bộ thẻ.

4. Dữ liệu lưu
procedure_order = [A, B, C, D]
procedure_completed = true

5. Bàn giao
Hiển thị biểu tượng quy trình thu nhỏ ở góc các màn 3–6 để học sinh có thể đối chiếu.

6. Điều cấm
- Không thêm ống đối chứng.
- Không thêm nước cất.
- Không biến mục tiêu thành kiểm tra hậu quả của việc đảo thứ tự.
- Không hé lộ kết quả xanh tím bằng hình thẻ D.

======================================================================
D. MÀN 3 — LỰA CHỌN MẪU, DỤNG CỤ VÀ HÓA CHẤT
Mã màn: SH10_B06_M03_C03
======================================================================

I. HS_VIEW

1. Tiêu đề
CHUẨN BỊ THÍ NGHIỆM

2. Text giảng
“Dựa vào quy trình, bạn hãy lựa chọn mẫu, dụng cụ và hóa chất cần dùng để thực hiện phản ứng Biuret.”

3. Nội dung
Nhóm lựa chọn:
- dung dịch albumin 1% hoặc lòng trắng trứng;
- ống nghiệm;
- giá ống nghiệm;
- dụng cụ lấy mẫu;
- dụng cụ đong 5 mL;
- dung dịch NaOH loãng;
- dung dịch CuSO₄ 1%;
- các lựa chọn nhiễu: Benedict, Lugol, ethanol, bếp điện, đèn cồn, đĩa Petri, nước cất.

4. HƯỚNG DẪN
“Nhấn vào từng vật cần dùng. Vật đã chọn chuyển vào khay chuẩn bị. Bạn có thể nhấn lại để bỏ chọn.”

5. Nút
KIỂM TRA

6. Điều kiện mở nút
Đã chọn ít nhất một vật.

7. Phản hồi đúng
“Chính xác. Thí nghiệm cần một mẫu có protein, một ống nghiệm, dụng cụ lấy và đong dung dịch, NaOH loãng và CuSO₄ 1%. Thí nghiệm không cần đun nóng. Tiếp theo, hãy cho mẫu vào ống nghiệm.”

8. Nút sau phản hồi đúng
TIẾP TỤC

9. Phản hồi sai
“Có vật chưa phù hợp hoặc còn thiếu. Hãy đối chiếu từng bước của quy trình và xác định vật nào trực tiếp phục vụ việc lấy mẫu, đong dung dịch và tạo phản ứng Biuret.”

10. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Chọn đúng mẫu, dụng cụ và hóa chất.

2. Đáp án
- mẫu albumin/lòng trắng trứng;
- ống nghiệm;
- giá ống nghiệm;
- dụng cụ lấy mẫu;
- dụng cụ đong 5 mL;
- NaOH loãng;
- CuSO₄ 1%.

3. Logic
- Nhiễu có thể được chọn nhưng chỉ đánh giá khi KIỂM TRA.
- Không gọi hỗn hợp NaOH + CuSO₄ là một chai “thuốc thử Biuret” nếu giao diện đang yêu cầu học sinh thực hiện từng bước theo SGK.

4. Dữ liệu lưu
materials_completed = true

5. Bàn giao
Mẫu, ống nghiệm, giá và dụng cụ lấy mẫu sang Màn 4; dụng cụ đong, NaOH và CuSO₄ sang Màn 5–6.

6. Điều cấm
- Không thêm ống thứ hai.
- Không thêm nước cất làm đối chứng.
- Không dùng màu chai để gợi đáp án.
- Không hiển thị công thức hóa học sai hoặc nhãn khó đọc.

======================================================================
E. MÀN 4 — CHO MẪU VÀO ỐNG NGHIỆM
Mã màn: SH10_B06_M03_C04
======================================================================

I. HS_VIEW

1. Tiêu đề
CHO MẪU VÀO ỐNG NGHIỆM

2. Text giảng
“Trước tiên, cho một ít dung dịch albumin 1% hoặc một lượng nhỏ lòng trắng trứng vào ống nghiệm.”

3. Nội dung
Hiển thị:
- một ống nghiệm trên giá;
- cốc mẫu đã chọn;
- dụng cụ lấy mẫu;
- ô trạng thái “MẪU ĐÃ CHO VÀO ỐNG”.

4. HƯỚNG DẪN
“Chọn dụng cụ lấy mẫu, lấy một lượng nhỏ mẫu rồi đưa vào ống nghiệm. Khi mẫu đã vào ống, ô trạng thái sẽ được đánh dấu.”

5. Nút
HOÀN THÀNH

6. Điều kiện mở nút
Mẫu đã được đưa vào ống đúng thao tác.

7. Phản hồi đúng
“Mẫu đã được chuẩn bị trong ống nghiệm. Tiếp theo, hãy thêm dung dịch NaOH loãng theo đúng quy trình.”

8. Nút sau phản hồi đúng
TIẾP TỤC

9. Phản hồi sai
“Hãy kiểm tra lại: mẫu phải được lấy bằng dụng cụ phù hợp và đưa vào đúng ống nghiệm.”

10. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Thực hiện bước chuẩn bị mẫu đúng nguồn.

2. Logic
- Không yêu cầu học sinh nhập một thể tích mẫu cụ thể.
- Dùng vùng định lượng trực quan “một lượng nhỏ” đã khóa sẵn cho mô phỏng; không hiển thị con số do SGK không nêu.
- Không cho đổ trực tiếp cả cốc mẫu vào ống.

3. Trạng thái đầu
Ống rỗng, mẫu trong cốc, dụng cụ đặt cạnh.

4. Trạng thái cuối
Ống có lượng mẫu nhỏ ở đáy; chưa có màu xanh.

5. Dữ liệu lưu
sample_added = true

6. Điều cấm
- Không ghi 1 mL hoặc một con số khác cho mẫu.
- Không làm lòng trắng trứng đặc nguyên khối; phải là mẫu phù hợp để thực hiện thí nghiệm.
- Không cho màu xanh hoặc xanh tím xuất hiện sớm.

======================================================================
F. MÀN 5 — THÊM 5 mL DUNG DỊCH NaOH LOÃNG
Mã màn: SH10_B06_M03_C05
======================================================================

I. HS_VIEW

1. Tiêu đề
THÊM DUNG DỊCH NaOH LOÃNG

2. Text giảng
“NaOH tạo môi trường kiềm cần thiết cho phản ứng Biuret. Theo quy trình, bạn cần thêm 5 mL dung dịch NaOH loãng vào ống nghiệm.”

3. Nội dung
Hiển thị:
- ống nghiệm chứa mẫu;
- lọ NaOH loãng có nhãn rõ;
- dụng cụ đong có vạch 5 mL;
- ô theo dõi “NaOH: __ mL”.

4. HƯỚNG DẪN
“Chọn lọ NaOH, lấy dung dịch đến vạch 5 mL rồi chuyển toàn bộ lượng đã đong vào ống nghiệm. Số đo sẽ xuất hiện trong ô theo dõi.”

5. Nút
HOÀN THÀNH

6. Điều kiện mở nút
Đã thêm đúng 5 mL NaOH.

7. Phản hồi đúng
“Bạn đã thêm đúng 5 mL NaOH loãng. Môi trường kiềm đã được tạo. Tiếp theo, hãy thêm CuSO₄ 1%.”

8. Nút sau phản hồi đúng
TIẾP TỤC

9. Phản hồi sai
“Thể tích chưa đúng hoặc bạn đang chọn nhầm dung dịch. Hãy đọc lại nhãn và đối chiếu vạch 5 mL.”

10. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Thực hiện đúng bước thêm 5 mL NaOH.

2. Logic
- Dụng cụ phải có vạch đọc được.
- Nếu lấy dưới hoặc trên 5 mL, không cho hoàn thành.
- Không đưa ra câu hỏi về hậu quả của đảo thứ tự.

3. Trạng thái đầu
Ống chứa mẫu; chưa có NaOH.

4. Trạng thái cuối
Ống chứa mẫu + NaOH; dung dịch chưa chuyển xanh tím.

5. Dữ liệu lưu
naoh_volume_ml = 5
naoh_added = true

6. Bàn giao
Giữ nguyên ống, mực dung dịch và giá sang Màn 6.

7. Điều cấm
- Không dùng nhãn “NaOH 10%” nếu nguồn khóa chỉ ghi NaOH loãng.
- Không làm dung dịch xuất hiện màu xanh do NaOH.
- Không cho CuSO₄ xuất hiện trong ống trước bước tiếp theo.

======================================================================
G. MÀN 6 — THÊM 5 mL CuSO₄ 1%, CHỜ VÀ QUAN SÁT
Mã màn: SH10_B06_M03_C06
======================================================================

I. HS_VIEW

1. Tiêu đề
QUAN SÁT PHẢN ỨNG BIURET

2. Text giảng
“Sau khi đã tạo môi trường kiềm, thêm 5 mL dung dịch CuSO₄ 1%. Dung dịch ban đầu có màu xanh và sẽ chuyển dần nếu mẫu có các liên kết peptide.”

3. Nội dung
Hiển thị:
- ống nghiệm kế thừa từ Màn 5;
- lọ CuSO₄ 1%;
- dụng cụ đong có vạch 5 mL;
- đồng hồ mô phỏng “VÀI PHÚT”;
- vùng phóng đại màu dung dịch;
- bảng quan sát gồm hai dòng:
  + Màu ban đầu;
  + Màu sau vài phút.

4. HƯỚNG DẪN
“Lấy 5 mL dung dịch CuSO₄ 1% và cho vào ống nghiệm. Sau đó đặt ống vào giá, nhấn BẮT ĐẦU QUAN SÁT và theo dõi sự thay đổi màu.”

5. Nút thao tác
BẮT ĐẦU QUAN SÁT

6. Điều kiện mở nút
Đã thêm đúng 5 mL CuSO₄ 1% và đặt ống vào giá.

7. Diễn biến hiển thị
- Trạng thái đầu quan sát: dung dịch màu xanh.
- Đồng hồ mô phỏng chạy theo các mốc, có nhãn rõ “THỜI GIAN MÔ PHỎNG”.
- Màu chuyển dần từ xanh sang xanh tím.
- Trạng thái cuối: xanh tím ổn định.

8. Nút sau quan sát
HOÀN THÀNH

9. Phản hồi đúng
“Bạn đã quan sát được dung dịch chuyển dần từ màu xanh sang màu xanh tím. Dấu hiệu này cho thấy mẫu có các liên kết peptide và được xác định là có protein. Tiếp theo, hãy thu dọn khu vực thực hành.”

10. Nút sau phản hồi đúng
TIẾP TỤC

11. Phản hồi sai
“Thao tác chưa hoàn tất. Hãy kiểm tra lại nhãn dung dịch, thể tích 5 mL và vị trí của ống nghiệm trước khi bắt đầu quan sát.”

12. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Thực hiện bước thêm CuSO₄ và quan sát kết quả tự sinh.

2. Logic
- Chỉ mở BẮT ĐẦU QUAN SÁT sau khi đủ 5 mL CuSO₄ và ống ở trên giá.
- Không yêu cầu lắc mạnh. Nếu cần hòa trộn trong mô phỏng, dùng chuyển động nghiêng/xoay nhẹ do hệ thống thực hiện, không mô tả học sinh dùng tay bịt miệng ống.
- Hệ thống tự sinh diễn biến màu; học sinh không chọn màu.

3. Thời gian
- Giao diện ghi rõ “THỜI GIAN MÔ PHỎNG”.
- Không tuyên bố thời gian thực là vài giây.
- Hoạt ảnh có thể nén thời gian nhưng phải biểu đạt “sau vài phút” theo nguồn.

4. Trạng thái cuối
Dung dịch xanh tím; không có kết tủa; không xanh đen.

5. Dữ liệu lưu
cuso4_volume_ml = 5
initial_color = "xanh"
final_color = "xanh tím"
reaction_observed = true

6. Khóa khoa học
- Màu chính của mô phỏng này: xanh tím.
- Phần giải thích có thể nêu màu phức thay đổi tùy số lượng liên kết peptide, nhưng không làm nhiệm vụ chính bị phân tán.
- Không mô tả đây là phản ứng với amino acid đơn lẻ.

7. Điều cấm
- Không có ống đối chứng.
- Không tạo kết tủa.
- Không cho xanh đen như Lugol.
- Không cho đỏ gạch như Benedict.
- Không làm màu đổi ngay trước khi bắt đầu quan sát.
- Không ghi “Cu²⁺ kết hợp với protein lớn” như điều kiện bắt buộc.

======================================================================
H. MÀN 7 — THU DỌN SAU THỰC HÀNH
Mã màn: SH10_B06_M03_C07
======================================================================

I. HS_VIEW

1. Tiêu đề
THU DỌN SAU THỰC HÀNH

2. Text giảng
“Sau khi quan sát, cần xử lí dung dịch và dụng cụ theo hướng dẫn, đậy nắp hóa chất và vệ sinh khu vực làm việc.”

3. Nội dung
Hiển thị 8 hình hành động:
1. Đặt ống nghiệm vào giá.
2. Đổ dung dịch trực tiếp vào bồn rửa.
3. Chuyển dung dịch vào bình thu gom có nhãn theo hướng dẫn.
4. Để lọ NaOH và CuSO₄ mở nắp.
5. Đậy nắp và trả các lọ về đúng vị trí.
6. Vệ sinh dụng cụ theo hướng dẫn.
7. Lau bàn và sắp xếp khu vực gọn gàng.
8. Rửa tay sau thực hành.

4. HƯỚNG DẪN
“Nhấn vào các hành động đúng để hoàn tất việc thu dọn. Hình đã chọn xuất hiện khung nổi bật.”

5. Nút
KIỂM TRA

6. Phản hồi đúng
“Chính xác. Dung dịch sau phản ứng phải được xử lí theo hướng dẫn; hóa chất và dụng cụ cần được đóng, vệ sinh và trả về đúng vị trí. Tiếp theo, hãy dùng kết quả quan sát để hoàn thành dữ liệu báo cáo.”

7. Nút sau phản hồi đúng
TIẾP TỤC

8. Phản hồi sai
“Có hành động chưa phù hợp hoặc còn thiếu. Hãy chú ý cách xử lí dung dịch, trạng thái các lọ hóa chất và vệ sinh cá nhân sau thực hành.”

9. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Đáp án đúng
1, 3, 5, 6, 7, 8.

2. Logic
Như Màn 1.

3. Dữ liệu lưu
cleanup_completed = true

4. Điều cấm
- Không hướng dẫn đổ NaOH/CuSO₄ trực tiếp vào bồn là hành động đúng.
- Không tự quy định phương thức xử lí hóa chất chi tiết ngoài hướng dẫn của cơ sở; chỉ dùng “bình thu gom có nhãn/theo hướng dẫn”.
- Không để trạng thái cuối còn lọ mở nắp hoặc bàn bừa bộn.

======================================================================
I. MÀN 8 — KHAI THÁC KẾT QUẢ VÀ TẠO DỮ LIỆU BÁO CÁO
Mã màn: SH10_B06_M03_C08
======================================================================

I. HS_VIEW

1. Tiêu đề
GIẢI THÍCH KẾT QUẢ

2. Text giảng
“Quan sát lại kết quả của chính thí nghiệm vừa thực hiện để xác định hiện tượng, giải thích nguyên lí và rút ra kết luận.”

3. Nội dung
Giữ ảnh cận ống nghiệm xanh tím từ Màn 6. Bên cạnh có khung “DỮ LIỆU BÁO CÁO” gồm ba ô trống:
- Kết quả.
- Nhận xét và giải thích.
- Kết luận.

4. Câu 1
“Dung dịch đã thay đổi như thế nào sau vài phút?”

Phương án:
A. Từ xanh chuyển dần sang xanh tím.
B. Từ xanh chuyển sang đỏ gạch và tạo kết tủa.
C. Chuyển sang xanh đen.
D. Không thay đổi.

Nút: TRẢ LỜI

Phản hồi sai:
“Hãy quan sát lại màu ở trạng thái đầu và trạng thái cuối của chính ống nghiệm.”

5. Câu 2
“Vì sao màu xanh tím xuất hiện?”

Phương án:
A. Trong môi trường kiềm, ion Cu²⁺ tương tác với các liên kết peptide tạo phức chất có màu.
B. Iodine tương tác với cấu trúc xoắn của amylose.
C. Glucose khử ion đồng khi đun nóng.
D. Protein bị đông tụ do nhiệt.

Nút: TRẢ LỜI

Phản hồi sai:
“Hãy đối chiếu các chất đã dùng và xác định cấu trúc đặc trưng của protein tham gia phản ứng.”

6. Câu 3
“Có thể kết luận gì về mẫu?”

Phương án:
A. Mẫu có protein.
B. Mẫu có tinh bột.
C. Mẫu có đường khử.
D. Mẫu có lipid.

Nút: TRẢ LỜI

Phản hồi sai:
“Hãy liên hệ dấu hiệu xanh tím với mục đích của phản ứng Biuret.”

7. Phản hồi đúng sau mỗi câu
- Câu 1: “Chính xác. Dung dịch chuyển dần từ xanh sang xanh tím.”
- Câu 2: “Chính xác. Trong môi trường kiềm, ion Cu²⁺ tương tác với các liên kết peptide tạo phức chất có màu.”
- Câu 3: “Chính xác. Kết quả cho phép xác định mẫu có protein.”

Mỗi câu đúng tự điền nội dung tương ứng vào khung DỮ LIỆU BÁO CÁO.

8. Nội dung chốt sau ba câu
“Phản ứng Biuret nhận biết protein qua dấu hiệu màu liên quan đến các liên kết peptide. Đây là phản ứng khác với Benedict và Lugol.”

9. Nút
TIẾP TỤC

II. DEV_ONLY

1. Mục tiêu
Dùng kết quả thực tế để tạo ba phần dữ liệu báo cáo.

2. Logic
- Mỗi câu đánh giá độc lập.
- Phản hồi sai không hiện đáp án đúng.
- Sau LÀM LẠI, chỉ câu hiện tại được làm lại.
- Không cho học sinh trả lời nếu ảnh kết quả bị ẩn.
- Khi đúng, điền dữ liệu vào ô nhưng vẫn giữ câu trả lời để xem lại.

3. Dữ liệu lưu
report_result = "Dung dịch chuyển dần từ màu xanh sang màu xanh tím sau vài phút."
report_explanation = "Trong môi trường kiềm, ion Cu²⁺ tương tác với các liên kết peptide tạo phức chất có màu."
report_conclusion = "Mẫu lòng trắng trứng/albumin có protein."
questions_completed = true

4. Khóa sư phạm
- So sánh Benedict/Lugol chỉ là câu lưu ý cuối, không thay thế câu hỏi chính.
- Không dùng cụm “I₂ bị nhốt”.
- Không hỏi kiến thức vượt khỏi những gì học sinh vừa quan sát và được giải thích.

======================================================================
J. MÀN 9 — HOÀN THÀNH BÁO CÁO THỰC HÀNH
Mã màn: SH10_B06_M03_C09
======================================================================

I. HS_VIEW

1. Tiêu đề
HOÀN THÀNH BÁO CÁO THỰC HÀNH

2. Text giảng
“Báo cáo cần phản ánh đúng mục đích, cách tiến hành, kết quả, giải thích và kết luận của thí nghiệm. Dữ liệu bạn đã tạo ở các màn trước sẽ được dùng để lập báo cáo.”

3. Nội dung lựa chọn
Các thẻ:
- Mục đích.
- Cách tiến hành.
- Kết quả.
- Giải thích và kết luận.
- Trả lời câu hỏi.
- Các thẻ nhiễu: Thành tích cá nhân; Điểm số của nhóm; Danh sách toàn bộ kiến thức về protein; Dự đoán không dựa trên quan sát.

4. HƯỚNG DẪN
“Nhấn chọn những thành phần cần có của báo cáo, sau đó nhấn KIỂM TRA.”

5. Nút
KIỂM TRA

6. Phản hồi đúng
“Chính xác. Báo cáo đã có đủ các phần theo yêu cầu. Nhấn XEM BÁO CÁO để xem sản phẩm hoàn chỉnh.”

7. Nút
XEM BÁO CÁO

8. Báo cáo hiển thị

BÁO CÁO THỰC HÀNH: NHẬN BIẾT PROTEIN BẰNG PHÉP THỬ BIURET

1. Mục đích
Nhận biết protein trong mẫu lòng trắng trứng hoặc dung dịch albumin bằng phép thử Biuret.

2. Cách tiến hành
Chuẩn bị một ống nghiệm, giá ống nghiệm, dụng cụ lấy mẫu, dụng cụ đong, dung dịch NaOH loãng và dung dịch CuSO₄ 1%. Cho một ít dung dịch albumin 1% hoặc một lượng nhỏ lòng trắng trứng vào ống nghiệm cùng với 5 mL dung dịch NaOH loãng. Sau đó thêm 5 mL dung dịch CuSO₄ 1%, chờ vài phút và quan sát.

3. Kết quả
[Dữ liệu report_result]

4. Giải thích và kết luận
[Dữ liệu report_explanation]
[Dữ liệu report_conclusion]

5. Trả lời câu hỏi
“Quy trình nhận biết protein và glucose dựa trên các phản ứng hóa học tạo ra dấu hiệu màu đặc trưng; trong đó phép thử Benedict cần đun nóng, còn phép thử Biuret được thực hiện trong môi trường kiềm. Quy trình nhận biết lipid dựa vào tính tan: lipid tan trong ethanol nhưng không tan trong nước, nên khi dung dịch lipid trong ethanol được rót vào nước sẽ tạo huyền phù trắng sữa. Sự khác nhau này do protein, glucose và lipid có cấu tạo, tính chất hóa học và tính tan khác nhau.”

9. Câu chuyển
“Bạn đã nhận biết protein bằng phép thử Biuret. Ở module tiếp theo, bạn sẽ thực hiện phép thử nhũ tương để nhận biết lipid.”

10. Nút cuối
HOÀN THÀNH MODULE

11. Phản hồi sai
“Danh sách chưa đúng. Hãy chọn các phần phản ánh mục đích, quá trình thực hiện, dữ liệu quan sát, giải thích, kết luận và câu hỏi thu hoạch.”

12. Nút sau phản hồi sai
LÀM LẠI

II. DEV_ONLY

1. Mục tiêu
Nhận biết đúng cấu trúc báo cáo theo SGK và xem báo cáo được ghép từ dữ liệu xuyên màn.

2. Đáp án
Năm thành phần:
- Mục đích.
- Cách tiến hành.
- Kết quả.
- Giải thích và kết luận.
- Trả lời câu hỏi.

3. Logic
- Không yêu cầu học sinh nhập lại hiện tượng, giải thích hoặc kết luận.
- Nội dung báo cáo lấy từ dữ liệu đã lưu.
- Chỉ mở HOÀN THÀNH MODULE sau khi báo cáo được hiển thị đầy đủ.
- Phần trả lời câu hỏi được lưu để sử dụng lại trong báo cáo tổng Bài 6 sau khi hoàn thành M04.

4. Dữ liệu lưu
report_comparison_answer
report_completed = true
module_completed = true

5. Điều cấm
- Không hiển thị DEV_ONLY trong báo cáo.
- Không tự thêm số liệu mẫu ngoài nguồn.
- Không đổi NaOH loãng thành NaOH 10%.
- Không thêm ống đối chứng.
- Không sửa kết quả xanh tím thành xanh đen hoặc đỏ gạch.
- Không tách “Mẫu, dụng cụ, thiết bị và hóa chất” thành một mục báo cáo riêng vì SGK quy định báo cáo gồm 5 mục; nội dung chuẩn bị được ghi trong phần Cách tiến hành.

======================================================================
K. DỮ LIỆU XUYÊN MÀN
======================================================================

safety_completed
procedure_order
procedure_completed
materials_completed
sample_added
naoh_volume_ml
naoh_added
cuso4_volume_ml
initial_color
final_color
reaction_observed
cleanup_completed
report_result
report_explanation
report_conclusion
questions_completed
report_completed
module_completed

Quy tắc:
- Giữ dữ liệu đúng khi chuyển hoặc quay lại màn.
- Không bắt học sinh làm lại phần đã đúng.
- LÀM LẠI chỉ tác động đến nhiệm vụ hiện tại.
- Không xóa dữ liệu báo cáo đã tạo khi học sinh sửa một câu sai khác.

======================================================================
L. CHECKLIST NGHIỆM THU
======================================================================

- Bám đúng quy trình một ống của nguồn.
- Không thêm đối chứng hoặc nước cất.
- Không tự sinh thể tích mẫu.
- NaOH: 5 mL, ghi “loãng”.
- CuSO₄: 5 mL, nồng độ 1%.
- Thứ tự mẫu → NaOH → CuSO₄ → chờ và quan sát.
- Không tuyệt đối hóa hậu quả đảo thứ tự.
- Kết quả chuyển từ xanh sang xanh tím sau vài phút.
- Giao diện ghi rõ thời gian mô phỏng.
- Kết quả tự sinh, không cho học sinh chọn màu.
- Không tạo kết tủa.
- Có an toàn và thu dọn.
- Có HS_VIEW và DEV_ONLY.
- Có HƯỚNG DẪN, nút, phản hồi và điều kiện chuyển ở từng màn.
- Phản hồi sai không đưa thẳng toàn bộ đáp án.
- Có dữ liệu xuyên màn.
- Báo cáo bám đúng 5 mục của SGK và lấy dữ liệu từ tiến trình.
- Không lộ nhãn kỹ thuật.
- Dùng được trên desktop và mobile.
- Không còn lỗi P0/P1 trước khi đưa sản xuất.

SCIENCE-GATE: PASSED.
PEDAGOGY-GATE: PASSED.
CONTENT/EDITORIAL-GATE: PASSED.
PRODUCTION-GATE: CHƯA PASSED — CHỈ CÒN DUYỆT HÌNH VÀ KIỂM THỬ CODE, KHÔNG PHẢI SỬA LẠI NỘI DUNG.

Nội dung này là SH10_B06_M03-VIRTUAL LAB, đã chốt bản nội dung cuối; còn M04 và Sheet 01 của bài.
