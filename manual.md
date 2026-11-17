# CẨM NANG HƯỚNG DẪN SỬ DỤNG HỆ THỐNG MRP (SINGLE 2 V25.02)

> **Hệ thống:** SINGLE 2 ERP/MRP V 25.02 (*Cổng thông tin hệ thống MRP nội bộ*)  
> **Bản Web tương tác (Ảnh toàn màn hình phóng to + Chatbot AI giải đáp chuyên sâu):** Mở trực tiếp file [`index.html`](file:///D:/Web%20project/MVC/SVG/LTS/index.html) bằng trình duyệt.  
> **Nguyên tắc biên soạn:** Giao diện hướng dẫn tập trung trực tiếp vào **Trang này dùng để nhập cái gì** và **Các bước thao tác từng bước để hoàn thành mục tiêu**. Mọi kiến thức tra cứu sâu hơn (như *Giải nghĩa tiêu đề cột, Cách đọc trạng thái, Ý nghĩa màu sắc, Mã lỗi Excel, Từ điển thuật ngữ...*) đều đã được tích hợp sẵn trong **Trợ lý Chatbot AI** trên trang [`index.html`](file:///D:/Web%20project/MVC/SVG/LTS/index.html).

---

## MỤC LỤC NHANH THEO LUỒNG NGHIỆP VỤ

1. [Trang 1: Thiết Lập Danh Mục Gốc (`CONFIG ▶ Buyer / Supplier / Consignee / Exchange / Code / Location`)](#1-trang-thiết-lập-danh-mục-gốc-phân-hệ-config)
2. [Trang 2: Danh Mục Nguyên Phụ Liệu Gốc (`INVENTORY CONTROL ▶ Material Master`)](#2-trang-danh-mục-nguyên-phụ-liệu-gốc-inventory-control--material-master)
3. [Trang 3: Danh Sách Định Mức Kỹ Thuật (`BOM DATA ▶ List`)](#3-trang-danh-sách-định-mức-kỹ-thuật-bom-data--list)
4. [Trang 4: Nhập Chi Tiết Định Mức Vật Tư (`BOM DATA ▶ Manage`)](#4-trang-nhập-chi-tiết-định-mức-vật-tư-bom-data--manage)
5. [Trang 5: Quản Lý Hợp Đồng (`CONTRACT STATUS ▶ Active`)](#5-trang-quản-lý-hợp-đồng-contract-status--active)
6. [Trang 6: Tính Nhu Cầu & Phát Hành Đơn Mua (`INVENTORY CONTROL ▶ Purchase Order`)](#6-trang-tính-nhu-cầu--phát-hành-đơn-mua-inventory-control--purchase-order)
7. [Trang 7: Xem Tiến Độ Đơn Mua (`INVENTORY CONTROL ▶ Mat PO status` - Trang xem)](#7-trang-theo-dõi-tiến-độ-đơn-mua-inventory-control--mat-po-status)
8. [Trang 8: Nhập Kho Nguyên Phụ Liệu (`INVENTORY CONTROL ▶ Income status`)](#8-trang-nhập-kho-nguyên-phụ-liệu-inventory-control--income-status)
9. [Trang 9: Xuất Kho Cấp Phát Sản Xuất (`INVENTORY CONTROL ▶ Outgo status`)](#9-trang-xuất-kho-cấp-phát-sản-xuất-inventory-control--outgo-status)
10. [Trang 10: Xem Tồn Kho Nguyên Phụ Liệu (`INVENTORY CONTROL ▶ Inventory` - Trang xem)](#10-trang-quản-lý--tra-cứu-tồn-kho-inventory-control--inventory)
11. [Trang 11: Đóng Gói & Giao Hàng Thành Phẩm (`CONTRACT STATUS ▶ Shipment`)](#11-trang-đóng-gói--giao-hàng-thành-phẩm-contract-status--shipment)
12. [Trang 12: Xem Tồn Kho Thành Phẩm (`CONTRACT STATUS ▶ Stock` - Trang xem)](#12-trang-xem-tồn-kho-thành-phẩm-contract-status--stock)
13. [Trang 13: Quản Trị Tài Khoản & Hồ Sơ (`ADMIN ▶ Account & Profile`)](#13-trang-quản-trị-tài-khoản--hồ-sơ-phân-hệ-admin)
14. [Các Tình Huống Lưu Ý Quan Trọng Khi Thao Tác](#14-các-tình-huống-lưu-ý-quan-trọng-khi-thao-tác)

---

## 1. TRANG THIẾT LẬP DANH MỤC GỐC (PHÂN HỆ `CONFIG`)

- **Đường dẫn:** `CONFIG ▶ Buyer / Matl. supplier / Matl. consignee / Exchange / Code / Location`

### 📝 Các trang trong menu CONFIG dùng để nhập cái gì?
1. **`Config › Buyer` (`/mrp/config/buyer`):** Nhập tên Khách hàng (`Buyer-001`, `Buyer-002`), địa chỉ, SĐT và người liên hệ (PIC).
2. **`Config › Matl. supplier` (`/mrp/config/matl-supplier`):** Nhập thông tin Nhà cung cấp nguyên phụ liệu (`Supplier-001`, `Supplier-002`), quốc gia, SĐT và người liên hệ.
3. **`Config › Matl. consignee` (`/mrp/config/matl-consignee`):** Nhập tên Pháp nhân / Nhà máy nhận hàng in trên đơn PO (`BETHELVINA CO.,LTD`).
4. **`Config › Exchange` (`/mrp/config/exchange`):** Nhập tỷ giá quy đổi giữa các đồng tiền (`USD`, `VND`, `KRW`, `CNY`, `JPY`, `EUR`).
5. **`Config › Code` (`/mrp/config/code`):** Nhập **6 bảng mã chuẩn trên cùng 1 màn hình** gồm: Nhóm vật tư (`R/M Category`), Đơn vị tính (`Unit`), Mã quản lý (`MA #`), Mã màu sản phẩm (`Color code-Item`), Mã màu nguyên phụ liệu (`Color code-Material`) và Mã kiểu dáng (`Style code`).
6. **`Config › Location` (`/mrp/config/location`):** Nhập mã các Vị trí kho và Xưởng sản xuất (`Factory01-Material-T001`, `Factory01-Material-T002`...).

### ✅ Các bước thao tác để hoàn thành mục tiêu:
- **Tại các trang `Buyer`, `Matl. supplier`, `Matl. consignee`, `Location`:** Bấm nút xanh lá **`+ Add`** ở góc trái ➔ điền thông tin ➔ bấm **Save**.
- **Tại trang `Config › Code` (6 Bảng mã chuẩn):** Bấm nút **`+ ADD`** ở từng bảng để thêm lẻ từng mã, hoặc bấm **`⬇ TEM`** tải mẫu Excel rồi bấm **`⬆ UP`** để tải lên hàng loạt.
- **Tại trang `Config › Exchange`:** Nhập tỷ giá mới vào ô tương ứng rồi bấm nút xanh lá **`APPLY`**.

---

## 2. TRANG DANH MỤC NGUYÊN PHỤ LIỆU GỐC (`INVENTORY CONTROL ▶ Material Master`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Material Master` (`/mrp/inventory-control/material-master`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **khai báo hồ sơ gốc của từng loại nguyên phụ liệu** trước khi đưa vào BOM hoặc mua hàng, gồm: Nhà cung cấp (`Supplier`), Nhóm vật tư (`Category`: Vải, Lưới, Bao bì), Mã nhóm quản lý (`MA #`), Tên tiếng Việt (`NPL Name`), Tên tiếng Anh (`R/M Name`), Màu vật tư (`Color`), Đơn vị tính (`Unit`), Đơn giá mua (`Unit Price`), Tiền tệ (`Currency`) và Quy cách (`Spec`).

### ✅ Các bước thao tác để hoàn thành mục tiêu:
- **Cách 1 (Nhập từng mã trực tiếp trên web):**
  1. Bấm nút xanh lá **`+ Create`** ở góc trên bên trái.
  2. Chọn `Supplier`, `Category` (`FABRIC` / `MESH` / `PACKING`), `MA #`, nhập Tên vật tư, chọn Màu, ĐVT (`YDS` / `MET` / `PCS`) và nhập Đơn giá + Tiền tệ.
  3. Bấm lưu để hệ thống tự động cấp mã chuẩn (`FAB00000001`, `MES00000001`...).
- **Cách 2 (Nhập hàng loạt bằng Excel):**
  1. Bấm nút vàng cam **`Template`** để tải file Excel mẫu về máy.
  2. Điền danh sách nguyên phụ liệu vào file mẫu theo đúng các mã đã có trong `Config › Code`.
  3. Bấm nút xanh ngọc **`Import`** và chọn file vừa điền để nạp toàn bộ danh sách lên hệ thống.

---

## 3. TRANG DANH SÁCH ĐỊNH MỨC KỸ THUẬT (`BOM DATA ▶ List`)

- **Đường dẫn:** `BOM DATA ▶ List` (`/mrp/bom-data/list`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **khởi tạo tên bảng định mức BOM mới** (chọn `Buyer`, chọn mã hàng `Style code`, đặt tên phiên bản `Revision` như `v0.1`), hoặc **nhân bản nhanh (`COPY`)** một bảng BOM đã có sang mã hàng mới, và **Khóa / Mở khóa (`LOCK / UNLOCK`)** quyền chỉnh sửa BOM.

### ✅ Các bước thao tác để hoàn thành mục tiêu:
1. **Bước 1 (Tạo mới hoặc Sao chép BOM):**
   - **Khi tạo mới:** Bấm nút xanh lá **`+ Create new BOM`** ở góc trái để mở hộp thoại **`GENERATE NEW BOM`** ➔ Chọn khách hàng tại ô `BUYER` (VD: `Buyer-001`), chọn mã hàng tại ô `STYLE CODE` (VD: `Stl001`), nhập phiên bản `REVISION` (`v0.1`) rồi bấm **`GENERATE`**.
   - ⚠️ **Lưu ý quan trọng:** Nếu khi nhấn **`+ Create new BOM` (`GENERATE NEW BOM`)** mà không thấy tên Khách hàng (`BUYER`) hoặc không thấy tên Mã hàng (`STYLE CODE`), bạn cần vào **`CONFIG ▶ Code`** (bảng **`Style code`** ở góc dưới bên phải để bấm `+ ADD` tạo thêm mã Style & tên Style mới) hoặc vào **`CONFIG ▶ Buyer`** (để tạo thêm Khách hàng mới) trước!
   - **Khi sao chép từ BOM tương tự:** Bấm nút xanh dương **`COPY`** ở cuối dòng BOM mẫu ➔ chọn `Buyer`, chọn `Style code` đích (VD: `Stl002`) và nhập `Revision` (`v0.1`) rồi bấm lưu.
2. **Bước 2:** Bấm nút xanh lá **`MANAGE`** ở cuối dòng BOM vừa tạo để chuyển sang trang `Bom › Manage` và nhập chi tiết nguyên phụ liệu.
3. **Bước 3:** Sau khi hoàn thiện định mức, quay lại trang `Bom › List`, tick chọn ô vuông ở dòng BOM đó rồi bấm nút đỏ **`LOCK`** trên tiêu đề cột để khóa chống sửa nhầm (bấm **`UNLOCK`** khi cần mở lại để sửa).

---

## 4. TRANG NHẬP CHI TIẾT ĐỊNH MỨC VẬT TƯ (`BOM DATA ▶ Manage`)

- **Đường dẫn:** `BOM DATA ▶ Manage` (`/mrp/bom-data/manage`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **nhập danh mục nguyên phụ liệu và định mức tiêu hao để sản xuất ra 1 sản phẩm**, bao gồm: các màu của sản phẩm (`Color option`), các nhóm vật tư (`Group#1`, `Group#2`...), chọn mã nguyên phụ liệu từ danh mục gốc (`R/M Code`), chỉ định vật tư đó dùng cho màu nào (`Black-001`, `White-001` hay dùng chung `COMMON`), và nhập tên chi tiết cắt (`PART > PIECE NAME`) cùng kích thước Dài (`L`) × Rộng (`W`) để hệ thống tự tính ra lượng tiêu hao cho 1 sản phẩm.

### ✅ Các bước thao tác để hoàn thành mục tiêu:
1. **Bước 1:** Bấm nút xanh dương **`Basic info`** trên thanh công cụ: Đảm bảo trạng thái đang ở **`Manage`**, chọn các phối màu của sản phẩm tại mục `Color option` rồi bấm **Add** (VD: thêm `Black-001`, `White-001`), nhập tên người phụ trách (PIC) nếu cần rồi đóng hộp thoại.
2. **Bước 2:** Bấm nút **`Add GP`** trên tiêu đề cột đầu tiên để tạo nhóm vật tư (`Group#1`), sau đó bấm nút dấu cộng **`+`** trong nhóm để thêm các dòng nguyên phụ liệu.
3. **Bước 3:** Tại mỗi dòng nguyên phụ liệu:
   - Ở cột `COLOR CODE`: **Tick chọn (☑)** là chế độ `COLOR` (tách riêng từng màu như `Black-001`, `White-001` để chọn mã vật tư khác nhau cho mỗi màu); **Bỏ tick (☐)** là chế độ `COMMON` (1 dòng dùng chung vật tư cho tất cả các màu).
   - Ở cột `R/M CODE`: Bấm nút xanh dương **`SEL`** ➔ chọn mã vải/lưới/bao bì từ danh sách `Material Master`.
4. **Bước 4:** Ở khu vực bên phải bảng, nhấp vào thêm chi tiết cắt (`Part-1 > Piece-1`...) và nhập chiều dài `L`, chiều rộng `W` (hoặc số lượng tiêu hao cho 1 sản phẩm). Hệ thống tự động lưu tức thì và tính ra tổng định mức tiêu hao của dòng vật tư đó.

---

## 5. TRANG QUẢN LÝ HỢP ĐỒNG (`CONTRACT STATUS ▶ Active`)

- **Đường dẫn:** `CONTRACT STATUS ▶ Active` (`/mrp/contract-status/active`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **nhập Hợp đồng mới của khách hàng**, bao gồm: Mã hợp đồng (`Contract #`), Khách hàng (`Buyer`), các đơn hàng con (`PO #`, Ngày PO, Ngày giao hàng), Mã kiểu dáng (`Style code`), Số lượng đặt hàng theo từng Màu/Size (`PO Qty`), Giá gia công (`Labor cost`), Giá bán (`FOB`) và chọn phiên bản định mức (`BOM`) áp dụng cho mã hàng đó.

### ✅ Các bước thao tác để hoàn thành mục tiêu:
1. **Bước 1:** Ở góc trên bên trái trang `Contract Status › Active`, bấm nút xanh lá **`+ Add CONTRACT`** (hoặc nhấp vào mã `✎ Contract-001` trên bảng nếu muốn sửa hợp đồng đã có) để mở cửa sổ **MANAGE ORDER**.
2. **Bước 2:** Nhập mã hợp đồng vào ô `Contract #` (VD: `Contract-001`), chọn khách hàng tại ô `Buyer` (VD: `Buyer-001`), rồi bấm nút **`+ Add PO`** để thêm đơn đặt hàng.
3. **Bước 3:** Nhập số `PO #` (VD: `PO 1`), chọn ngày `PO date`, ngày giao dự kiến `Requested / Target ship date`, sau đó bấm nút **`+ Add Style`** ở góc phải khung PO.
4. **Bước 4:** Chọn mã hàng tại ô `Style code` (VD: `Stl001` hoặc `Stl002`), điền `Season`, `Labor cost`, đơn giá `FOB`. Bấm dấu `+` ở bảng màu bên dưới để chọn các màu (`Black-001`, `White-001`) và nhập số lượng đặt hàng (`PO Qty`) cho từng màu.
5. **Bước 5:** Kiểm tra nút **`BOM`** cạnh tên Style đã hiện màu xanh lá (`Match`) chưa (nếu có nhiều phiên bản BOM thì bấm vào nút `BOM` để chọn). Cuối cùng kéo xuống dưới cùng bấm **`SAVE`** để lưu hợp đồng.

---

## 6. TRANG TÍNH NHU CẦU & PHÁT HÀNH ĐƠN MUA (`INVENTORY CONTROL ▶ Purchase Order`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Purchase Order` (`/mrp/inventory-control/purchase-order`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **lập và phát hành Đơn đặt mua nguyên phụ liệu (`MATERIAL PO #`) gửi Nhà cung cấp** cho từng Hợp đồng. Tại đây bạn nhập: Tỷ lệ hao hụt sản xuất (`② LOSS %`), Số lượng lấy từ tồn kho có sẵn (`② ASSIGN`), Số lượng đặt mua thực tế (`① ORDER QTY`), Đơn giá mua (`③ UNIT PRICE`), Đơn vị nhận hàng (`CONSIGNEE`), Ngày đặt hàng / Ngày dự kiến hàng về (`RM PO DATE / RM ETA`), và **chuyển trạng thái đơn mua từ `STANDBY` sang `ORDERED`**.

### ✅ 5 Bước thao tác để hoàn thành phát hành đơn mua (PO) hợp lệ:
1. **Bước 1 (Chọn Hợp đồng):** Tại ô `CONT #` trên đầu trang, chọn mã Hợp đồng (VD: `Contract-001` hoặc `Contract-002`). Nếu con số ở cột `CONS.(BOM)(AFTER)` hiện màu đỏ, tick chọn ô vuông đầu cột đó và bấm nút xanh lá **`UPDATE`** để cập nhật theo định mức BOM mới nhất.
2. **Bước 2 (Nhập tỷ lệ hao hụt):** Nhấp vào con số ở cột `② LOSS %` (hoặc tick nhiều dòng rồi bấm nút `SET` trên tiêu đề cột) để nhập % hao hụt bù trừ sản xuất.
3. **Bước 3 (Bấm `MAKE PO` hoặc `ADD`):**
   - Tick chọn các ô vuông tại cột `SUPPLIER` của các dòng vật tư thuộc **cùng một Nhà cung cấp** ➔ bấm nút xanh lá **`MAKE PO`** trên tiêu đề cột để hệ thống sinh mã đơn mua mới (`PO-R-YYMMDD-XXX`).
   - Nếu muốn gộp thêm dòng vật tư vào một mã PO đã tạo trước đó, bấm nút **`ADD`** ở cột `ADD / DEL`, chọn mã PO rồi bấm `APPLY`.
4. **Bước 4 (Kiểm tra Số lượng đặt, Đơn giá & Ngày giao):** Cuộn ngang bảng sang bên phải, nhấp trực tiếp vào các ô `① ORDER QTY`, `② ASSIGN`, `③ UNIT PRICE`, `CONSIGNEE` (`BETHELVINA CO.,LTD`), `RM PO DATE` và `RM ETA` để kiểm tra hoặc chỉnh sửa rồi bấm `APPLY`.
5. **Bước 5 (⚠️ BẮT BUỘC – Chuyển trạng thái từ `STANDBY` sang `ORDERED`):** Cuộn ngang bảng sang tận cùng bên phải tới cột `STATUS`. Khi mới bấm `MAKE PO`, trạng thái mặc định là **`STANDBY`**. Bạn **phải nhấp vào chữ `STANDBY` (hoặc bấm nút xanh lá `INFO` dưới cột `STATUS`), chọn đổi sang `ORDERED` rồi bấm `APPLY`**.
   - *Lưu ý:* Chỉ khi đã chuyển sang **`ORDERED`** thì số lượng đặt mua mới hiện lên ở cột `IN BALANCE` trong Kho và trang `Income status` mới cho phép nhập kho lô hàng này!

---

## 7. TRANG THEO DÕI TIẾN ĐỘ ĐƠN MUA (`INVENTORY CONTROL ▶ Mat PO status`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Mat PO status` (`/mrp/inventory-control/mat-po-status`)
- **Mục đích:** Đây là **trang chỉ xem và tra cứu** danh sách toàn bộ các đơn đặt mua nguyên phụ liệu (`PO-R-...`) đã phát hành, kiểm tra trạng thái (`STANDBY` hay `ORDERED`), tổng giá trị tiền (`AMOUNT`), số lượng đã nhập kho (`② W/H IN`) và số lượng còn nợ chưa giao (`①-② BALANCE`).
- **Thao tác nhanh:** Dùng ô `Search` để tìm theo Nhà cung cấp, số PO hoặc số Hợp đồng ➔ kiểm tra cột `STATUS` và đối chiếu 3 cột sản lượng bên phải (`① ORDER`, `② W/H IN`, `①-② BALANCE`) ➔ bấm **`Manage PO Group`** nếu cần nhảy về trang `Purchase Order` để sửa.

---

## 8. TRANG NHẬP KHO NGUYÊN PHỤ LIỆU (`INVENTORY CONTROL ▶ Income status`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Income status` (`/mrp/inventory-control/income-status`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **tải file Excel phiếu nhập kho** khi Nhà cung cấp giao nguyên phụ liệu về kho. Nội dung nhập trên file Excel gồm: Ngày-Số phiếu (`DATE-NO` định dạng `YYYY/MM/DD-SN`), Nhà cung cấp (`SUPPLIER`), Vị trí kho nhận (`LOCATION`), Mã Hợp đồng (`CONTRACT #`), Mã nguyên phụ liệu (`CODE`), Số lượng thực nhập (`QTY`), Đơn vị tính, Đơn giá, Tiền tệ, Buyer, Mã `MA #` và Ngày kiểm tra chất lượng (`INSPECTION`).

### ✅ 4 Bước thao tác để hoàn thành nhập kho nguyên phụ liệu:
1. **Bước 1:** Đảm bảo đơn mua của lô hàng đó đã được chuyển từ `STANDBY` sang **`ORDERED`** tại trang `Purchase Order`.
2. **Bước 2:** Bấm nút vàng cam **`TEMPLATE`** trên màn hình để tải file mẫu chuẩn của hệ thống về máy và điền danh sách vật tư nhập kho từ dòng thứ 3 trở đi.
3. **Bước 3:** Bấm nút xanh dương **`UPLOAD EXCEL`** và chọn file Excel vừa chuẩn bị để tải lên bảng kiểm duyệt tạm.
4. **Bước 4:** Quan sát bộ đếm phía trên bảng: Khi hiện **`• ERROR: 0`** (không có lỗi đỏ), bấm nút xanh lá **`✔ APPLY INCOME`** ➔ Chọn **YES** để chính thức cộng hàng vào kho.

---

## 9. TRANG XUẤT KHO CẤP PHÁT SẢN XUẤT (`INVENTORY CONTROL ▶ Outgo status`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Outgo status` (`/mrp/inventory-control/outgo-status`)

### 📝 Trang này dùng để nhập cái gì?
Dùng để **tải file Excel phiếu xuất kho** khi cấp phát nguyên phụ liệu từ kho lưu trữ ra nhà máy/chuyền sản xuất. Nội dung nhập trên file Excel gồm: Ngày-Số phiếu (`DATE-NO` định dạng `YY/MM/DD-SN`), Mã nguyên phụ liệu (`CODE`), Mã `MA #`, Số lượng xuất (`QTY`), Mã Hợp đồng (`CONTRACT #`), Kho xuất đi (`FROM`: VD `Factory01-Material-T001`) và Nơi nhận (`TO`: VD `Factory01-Material-T002`).

### ✅ 3 Bước thao tác để hoàn thành xuất kho cấp phát:
1. **Bước 1:** Bấm nút vàng cam **`TEMPLATE`** trên màn hình để tải mẫu Excel xuất kho chuẩn của hệ thống về máy và điền thông tin các vật tư cần xuất từ dòng thứ 3.
2. **Bước 2:** Bấm nút xanh dương **`UPLOAD EXCEL`** và chọn file Excel xuất kho vừa lưu.
3. **Bước 3:** Kiểm tra bộ đếm báo **`• ERROR: 0`** ➔ bấm nút xanh lá **`✔ APPLY OUTGO`** ➔ Chọn **YES** để hoàn tất trừ tồn kho chính thức.

---

## 10. TRANG QUẢN LÝ & TRA CỨU TỒN KHO (`INVENTORY CONTROL ▶ Inventory`)

- **Đường dẫn:** `INVENTORY CONTROL ▶ Inventory` (`/mrp/inventory-control/inventory`)
- **Mục đích:** Đây là **trang chỉ xem và xuất báo cáo** tồn kho nguyên phụ liệu theo thời gian thực (`IN BALANCE`, `IN`, `OUT`, `INVENTORY`).
- **Thao tác nhanh:** Giữ mặc định **`NOT ZERO`** để xem các mã đang có đơn `ORDERED` hoặc có tồn kho (hoặc đổi sang **`SHOW ALL`** ➔ **`🔍 Refresh`** để xem toàn bộ) ➔ bấm **`SET`** ở cột `[ LOCATION ]` để lọc theo kho, bấm **`HISTORY`** để xem lịch sử phiếu Nhập/Xuất, hoặc bấm **`D/L XLS by BUYER`** / **`D/L XLS by MA#`** để xuất Excel.

---

## 11. TRANG ĐÓNG GÓI & GIAO HÀNG THÀNH PHẨM (`CONTRACT STATUS ▶ Shipment`)

- **Đường dẫn:** `CONTRACT STATUS ▶ Shipment` (`/mrp/buyer-order/shipment`)

### 📝 Trang này dùng để nhập cái gì?
Chỉ dùng cho nghiệp vụ **đóng gói và giao hàng thành phẩm**: nhập **Số lượng đã đóng gói** (`② PACKED`), nhập **Số lượng kiểm kê thực tế** (`④ PHYSICAL`) và nhập **Số lượng xuất giao cho khách theo từng ngày** (`③ SHIPPED`).

### ✅ Các bước thao tác để hoàn thành mục tiêu:
1. **Bước 1:** Chọn khách hàng tại ô `BUYER` (`Buyer-001`) và chọn hợp đồng tại ô `CONTRACT #` (`Contract-001`), sau đó **bấm nút xanh lá `APPLY`**.
2. **Bước 2 (Nhập Đóng gói):** Nhấp vào số có biểu tượng cây bút `✎` ở cột `② PACKED` ➔ Chọn ngày đóng gói, nhập số lượng đã đóng thùng rồi bấm lưu.
3. **Bước 3 (Nhập Kiểm kê):** Nhấp vào biểu tượng cây bút `✎` ở cột `④ PHYSICAL` ➔ Chọn ngày kiểm kê và nhập số lượng thực tế tại kho thành phẩm.
4. **Bước 4 (Nhập Xuất giao khách):** Bấm nút xanh dương **`ADD`** ở góc phải bảng để thêm cột ngày xuất hàng mới ➔ Nhấp vào ô trống dưới ngày xuất đó để gõ số lượng giao ➔ Tick chọn ô vuông cạnh chữ `SET` và bấm nút xanh lá **`SET`** để lưu lại.

---

## 12. TRANG XEM TỒN KHO THÀNH PHẨM (`CONTRACT STATUS ▶ Stock`)

- **Đường dẫn:** `CONTRACT STATUS ▶ Stock` (`/mrp/buyer-order/stock`)
- **Mục đích:** Đây là **trang chỉ xem và xuất báo cáo** tồn kho thành phẩm tổng hợp (dữ liệu tự động lấy từ trang `Shipment`).
- **Thao tác nhanh:** Chọn ngày cần xem (hoặc để mặc định `TODAY`) ➔ bấm **`APPLY`** để xem bảng tồn kho ➔ bấm **`D/L LIST`** để tải file Excel nếu cần.

---

## 13. TRANG QUẢN TRỊ TÀI KHOẢN & HỒ SƠ (PHÂN HỆ `ADMIN`)

- **Đường dẫn:** `ADMIN ▶ Account` (`/mrp/admin/account`) & `ADMIN ▶ Profile` (`/mrp/admin/account/edit`)

### 📝 Trang này dùng để nhập cái gì & thao tác như thế nào?
- **Trang `Admin › Account`:** Dùng cho Quản trị viên **tạo tài khoản đăng nhập mới** cho nhân viên (bấm **`+ Add`** ➔ nhập ID, Tên, Email, Mật khẩu, Phân quyền ➔ bấm Lưu) hoặc khóa/mở khóa tài khoản hiện có.
- **Trang `Admin › Profile`:** Dùng cho người đang đăng nhập **tự cập nhật thông tin cá nhân và đổi mật khẩu** (nhập mật khẩu mới rồi bấm Lưu).
- **Nút `Admin › Logout`:** Bấm để đăng xuất an toàn khỏi hệ thống.

---

## 14. CÁC TÌNH HUỐNG LƯU Ý QUAN TRỌNG KHI THAO TÁC

1. **Vì sao đã bấm `MAKE PO` tạo đơn mua nhưng khi vào `Income status` tải file Excel nhập kho lại báo lỗi không nhận diện được PO?**
   - **Nguyên nhân:** Đơn mua mới bấm `MAKE PO` đang ở trạng thái chờ **`STANDBY`**.
   - **Cách xử lý:** Tại trang `Purchase Order`, cuộn ngang bảng sang phải tới cột `STATUS` và đổi trạng thái từ **`STANDBY` ➔ `ORDERED`**.
2. **Khi nhấn `+ Create new BOM` (mở cửa sổ `GENERATE NEW BOM`) trong `Bom › List` mà không thấy tên Khách hàng (`BUYER`) hoặc tên Mã hàng (`STYLE CODE`) thì làm thế nào?**
   - **Nguyên nhân:** Hộp thoại `GENERATE NEW BOM` chỉ hiển thị các mã Khách hàng và mã Style đã được tạo trong phân hệ `CONFIG`.
   - **Cách xử lý:** Vào **`CONFIG ▶ Code`** (`/mrp/config/code`), tại bảng **`Style code`** góc dưới bên phải bấm **`+ ADD`** để thêm mã Style & tên Style mới; hoặc vào **`CONFIG ▶ Buyer`** (`/mrp/config/buyer`) bấm **`+ Add`** để thêm Khách hàng mới.
3. **Vì sao Hợp đồng mới tạo ở `Contract Status › Active` không hiện trong ô `CONT #` tại trang `Purchase Order`?**
   - **Nguyên nhân:** Mã `Style code` trong Hợp đồng chưa có bảng định mức BOM khớp `Buyer` và `Color` (nút BOM báo đỏ `Not match`).
   - **Cách xử lý:** Vào `BOM DATA ▶ List` tạo mới hoặc bấm `COPY` từ BOM mẫu sang đúng cặp `Buyer + Style code + Color` của hợp đồng.
4. **Tra cứu thêm kiến thức chuyên sâu & các lỗi sai thao tác ở đâu?**
   - Mở trang [`index.html`](file:///D:/Web%20project/MVC/SVG/LTS/index.html) và nhấp vào biểu tượng **Chatbot AI 💬** ở góc phải dưới màn hình để hỏi bất kỳ thông tin chuyên sâu nào (như *Tổng hợp 7 lỗi sai thao tác thường gặp, Ý nghĩa tiêu đề cột từng trang, Cách đọc trạng thái & màu sắc cảnh báo, Giải mã lỗi Excel EFM/ECD/ECT/WPO...*).

---
*Tài liệu được biên soạn cho hệ thống SINGLE 2 V 25.02 - MRP-DEMO. Lưu hành nội bộ.*
