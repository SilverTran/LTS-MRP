// Trilingual Chatbot Knowledge Base (VI / EN / KO) for SINGLE 2 MRP
const KB_VI = [
      {
        id: 'all-pages-overview',
        title: 'Thông tin & Ý nghĩa sử dụng của toàn bộ 19 Trang trong hệ thống',
        keywords: [
          'thông tin trang', 'ý nghĩa sử dụng', 'thông tin và ý nghĩa sử dụng 19 trang', '19 trang',
          'các trang trong hệ thống', 'danh sách trang', 'menu hệ thống', 'các phân hệ', 'tổng quan các màn hình'
        ],
        answer: '🗺️ <b>THÔNG TIN &amp; Ý NGHĨA SỬ DỤNG CỦA 19 TRANG TRONG HỆ THỐNG SINGLE 2 V25.02:</b><br><br>' +
          '<b>1. Phân hệ CONTRACT STATUS (Hợp đồng &amp; Thành phẩm):</b><br>' +
          '• <code>Active</code> (<code>/contract-status/active</code>): Quản lý hợp đồng đang chạy, khai báo PO khách, Style/Color, gắn BOM và tính giá vốn vật tư.<br>' +
          '• <code>Archive</code> (<code>/contract-status/archive</code>): Lưu trữ hợp đồng đã xuất hàng hoàn tất.<br>' +
          '• <code>Deleted</code> (<code>/contract-status/deleted</code>): Thùng rác chứa các hợp đồng đã xóa tạm.<br>' +
          '• <code>Shipment</code> (<code>/buyer-order/shipment</code>): Nhập số lượng Đóng gói (<code>PACKED</code>), Kiểm kê (<code>PHYSICAL</code>) và Xuất hàng (<code>SHIPPED</code>) theo ngày.<br>' +
          '• <code>Stock</code> (<code>/buyer-order/stock</code>): Báo cáo tồn kho thành phẩm F/G theo ngày lọc và lũy kế.<br><br>' +
          '<b>2. Phân hệ BOM DATA (Định mức kỹ thuật):</b><br>' +
          '• <code>List</code> (<code>/bom-data/list</code>): Danh mục quản lý các phiên bản BOM, khóa/mở khóa (<code>LOCK/UNLOCK</code>) và nhân bản (<code>COPY</code>).<br>' +
          '• <code>Manage</code> (<code>/bom-data/manage</code>): Khai báo chi tiết vật tư, màu sắc và kích thước chi tiết cắt (<code>L × W</code>) để tự tính định mức tiêu hao.<br><br>' +
          '<b>3. Phân hệ INVENTORY CONTROL (Mua hàng MRP &amp; Kho vật tư):</b><br>' +
          '• <code>Material Master</code>: Từ điển nguyên phụ liệu gốc (8 mã vải/lưới/bao bì).<br>' +
          '• <code>Purchase Order</code>: <b>Trái tim MRP</b> tính nhu cầu vật tư, phát hành PO (<code>MAKE PO</code>) và chuyển trạng thái <code>STANDBY ➔ ORDERED</code>.<br>' +
          '• <code>Mat PO status</code>: Theo dõi tiến độ các đơn mua PO, lượng đã nhập (<code>W/H IN</code>) và còn nợ (<code>BALANCE</code>).<br>' +
          '• <code>Income status</code> &amp; <code>Outgo status</code>: Nhập kho và Xuất kho hàng loạt qua Excel kèm kiểm lỗi tự động.<br>' +
          '• <code>Inventory</code>: Báo cáo tồn kho thời gian thực theo vị trí (<code>LOCATION</code>).<br><br>' +
          '<b>4. Phân hệ CONFIG &amp; 5. Phân hệ ADMIN:</b> Thiết lập <code>Buyer</code>, <code>Supplier</code>, <code>Consignee</code>, <code>Exchange</code>, <code>Code</code> (6 bảng mã), <code>Location</code> và Quản trị <code>Account/Profile</code>.',
        chips: ['Cách đọc trạng thái và ý nghĩa màu chữ', 'Tiêu đề cột màn hình Purchase Order', 'Tiêu đề cột màn hình Contract Active', 'Tiêu đề cột màn hình Inventory']
      },
      {
        id: 'status-reading-guide',
        title: 'Cách đọc Trạng thái (Status) & Ý nghĩa Màu sắc trên toàn hệ thống',
        keywords: [
          'cách đọc trạng thái', 'ý nghĩa trạng thái', 'trạng thái là gì', 'đọc trạng thái',
          'cách đọc trạng thái và ý nghĩa màu chữ', 'màu chữ đỏ', 'con số màu đỏ', 'trạng thái hệ thống'
        ],
        answer: '🚦 <b>CÁCH ĐỌC TRẠNG THÁI &amp; Ý NGHĨA MÀU SẮC CẢNH BÁO TOÀN HỆ THỐNG:</b><br><br>' +
          '1. <b>Trạng thái Đơn mua (<code>Purchase Order</code> &amp; <code>Mat PO status</code>):</b><br>' +
          '   • <code>STANDBY</code>: Đơn mua mới bấm <code>MAKE PO</code>, đang ở dạng chờ/nháp (chưa lên <code>IN BALANCE</code> và chưa nhập kho được).<br>' +
          '   • <code>ORDERED</code>: Đơn mua đã xác nhận đặt hàng chính thức ➔ Đẩy số lượng sang <code>IN BALANCE</code> trong Kho và cho phép nhập kho tại <code>Income status</code>.<br>' +
          '   • <code>STANDARD</code> / <code>PO</code> vs <code>ETC</code>: Đơn mua theo định mức BOM vs Đơn mua phát sinh ngoài BOM.<br><br>' +
          '2. <b>Trạng thái Định mức BOM (<code>Contract</code> &amp; <code>BOM Data</code>):</b><br>' +
          '   • Nút <span class="btn-badge btn-success">BOM</span> (Xanh lá - <code>Match</code>): Hợp đồng đã khớp định mức BOM, sẵn sàng chạy MRP.<br>' +
          '   • Nút <span class="btn-badge btn-danger">BOM</span> (Đỏ - <code>Not match</code>): Chưa có BOM hoặc thiếu màu trong BOM.<br>' +
          '   • <code>Manage</code> / <code>UNLOCK</code> vs <code>Locked</code> / <code>LOCK</code>: Cho phép chỉnh sửa BOM vs Đã khóa bảo vệ.<br><br>' +
          '3. <b>Cách đọc Con số / Nhãn Màu Đỏ trên các bảng:</b><br>' +
          '   • <span style="color:#ef4444;font-weight:bold;">Số đỏ ở cột <code>CONS.(BOM)(AFTER)</code> (Purchase Order):</span> Báo hiệu định mức BOM vừa thay đổi so với cột <code>BEFORE</code> (bấm <code>UPDATE</code> nếu muốn áp dụng mức mới).<br>' +
          '   • <span style="color:#ef4444;font-weight:bold;">Số đỏ ở cột <code>①-② BALANCE</code> (Mat PO status):</span> Báo hiệu NCC còn nợ hàng chưa giao đủ (<code>ORDER &gt; W/H IN</code>).<br>' +
          '   • <span style="color:#ef4444;font-weight:bold;">Nhãn đỏ <code>[EFM]</code>, <code>[ECD]</code>, <code>[ECT]</code> (Income/Outgo):</span> Lỗi dữ liệu file Excel làm khóa nút <code>APPLY</code>.',
        chips: ['Chuyển trạng thái STANDBY sang ORDERED', 'Ý nghĩa CONT. vs N/A vs ASSIGNED', 'Tiêu đề cột màn hình Purchase Order', 'Mã lỗi EFM, ECD, ECT']
      },
      {
        id: 'status-cont-na-assigned',
        title: 'Ý nghĩa phân loại CONT., N/A, ASSIGNED và TOTAL trong Purchase Order & Inventory',
        keywords: [
          'cont.', 'n/a', 'assigned', 'cont và n/a', 'ý nghĩa cont', 'ý nghĩa n/a',
          'ý nghĩa cont. vs n/a vs assigned', 'in balance cont', 'in cont'
        ],
        answer: '📦 <b>Ý NGHĨA CÁC CỘT PHÂN LOẠI <code>CONT.</code>, <code>N/A</code>, <code>ASSIGNED</code>, <code>TOTAL</code>:</b><br><br>' +
          'Trên màn hình <code>Purchase Order</code> (khối Ⓒ) và màn hình <code>Inventory</code>, mọi số lượng Nhập (<code>IN</code>), Chờ về (<code>IN BALANCE</code>), Xuất (<code>OUT</code>) và Tồn (<code>INVENTORY</code>) đều được tách làm các cột con:<br>' +
          '• <b><code>CONT.</code> (Contract):</b> Khối lượng nguyên phụ liệu được đặt mua, nhập kho hoặc giữ chỗ <b>đích danh cho một Hợp đồng cụ thể</b> (VD: <code>Contract-001</code>).<br>' +
          '• <b><code>N/A</code> (Not Applicable / Free Stock):</b> Khối lượng nguyên phụ liệu mua dự trữ chung hoặc nhập kho tự do (không gắn cố định vào hợp đồng nào).<br>' +
          '• <b><code>ASSIGNED</code>:</b> Khối lượng vật tư được trích từ kho tự do (<code>N/A</code>) để gán bù trừ cho một Hợp đồng.<br>' +
          '• <b><code>TOTAL</code>:</b> Tổng cộng toàn bộ các nguồn (<code>CONT. + ASSIGNED + N/A</code>).',
        chips: ['Tiêu đề cột màn hình Inventory', 'Tiêu đề cột màn hình Purchase Order', 'Cách đọc trạng thái và ý nghĩa màu chữ']
      },
      {
        id: 'columns-purchase-order',
        title: 'Giải nghĩa Tiêu đề cột màn hình Purchase Order (6 Khối cột từ trái sang phải)',
        keywords: [
          'tiêu đề cột màn hình purchase order', 'tiêu đề cột purchase order', 'các cột purchase order',
          '6 khối cột', 'thông tin trang purchase order', 'ý nghĩa trang purchase order', 'cons.(bom)',
          'global po qty', 'material purchase order', 'order information', 'cột trong purchase order'
        ],
        answer: '📊 <b>THÔNG TIN TRANG &amp; GIẢI NGHĨA TIÊU ĐỀ CỘT MÀN HÌNH <code>PURCHASE ORDER</code>:</b><br><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Trung tâm tính toán nhu cầu vật tư (MRP Engine) và phát hành đơn mua cho NCC.<br>' +
          '• <b>6 Khối tiêu đề cột từ trái sang phải:</b><br>' +
          '  1. <b><code>MATERIAL INFORMATION</code>:</b> <code>SOURCE</code> (Nguồn <code>BOM</code>/<code>ETC</code>), <code>ADD/DEL</code> (Gộp/Gỡ khỏi PO), <code>SUPPLIER</code> (kèm nút <code>MAKE PO</code>), <code>GROUP</code>, <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>.<br>' +
          '  2. <b><code>Ⓑ BOM CONSUMPTION (This CONTRACT only)</code>:</b> <code>① CONS.(BOM)(BEFORE)</code> (Nhu cầu gốc), <code>CONS.(BOM)(AFTER)</code> (Nhu cầu mới nhất - báo đỏ nếu BOM đổi, kèm nút <code>UPDATE</code>), <code>UNIT</code>, <code>② LOSS %</code> (% hao hụt), <code>③=①+② CONS.(LOSS)</code> (Tổng nhu cầu sau hao hụt).<br>' +
          '  3. <b><code>Ⓒ GLOBAL PO QTY</code>:</b> <code>① CONS.(LOSS)</code>, <code>② ORDER (CONT./N/A/TOTAL)</code>, <code>③ ASSIGNED</code>, <code>④ NOT ORDER</code>, <code>⑤ AVAILABLE STOCK</code>.<br>' +
          '  4. <b><code>Ⓔ MATERIAL PURCHASE ORDER</code>:</b> <code>① ORDER QTY</code> (Số lượng đặt mua), <code>② ASSIGN</code> (Số lượng gán kho), <code>③ UNIT PRICE</code>, <code>CURRENCY</code>, <code>④=①*③ TOTAL</code> (Tiền từng dòng), <code>AMOUNT</code> (Tổng tiền cả PO), <code>SHIPPER</code>, <code>CONSIGNEE</code>, <code>RM PO DATE</code>, <code>RM ETA</code>, <code>REMARK</code>.<br>' +
          '  5. <b><code>Ⓕ DELIVERY</code>:</b> <code>① IN</code> (Đã nhập kho), <code>Ⓔ①-① BAL</code> (Còn nợ), <code>STATUS (MATERIAL)</code> (<code>STANDBY</code>/<code>ORDERED</code>).<br>' +
          '  6. <b><code>Ⓐ ORDER INFORMATION</code>:</b> <code>MATERIAL PO #</code> (Mã PO + nút <code>DEL PO</code>), <code>TYPE</code> (<code>STANDARD</code>/<code>ETC</code>), <code>CONT #</code>, <code>STATUS</code> (Nút <code>INFO</code> đổi <code>STANDBY ➔ ORDERED</code>).',
        chips: ['Chuyển trạng thái STANDBY sang ORDERED', 'Nút MAKE PO vs ADD', 'Tiêu đề cột màn hình Mat PO status', 'Cách đọc trạng thái và ý nghĩa màu chữ']
      },
      {
        id: 'columns-contract-active',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Contract Status › Active',
        keywords: [
          'tiêu đề cột màn hình contract active', 'tiêu đề cột contract', 'các cột contract',
          'thông tin trang contract', 'ý nghĩa trang contract', 'contract status active', 'manage order'
        ],
        answer: '📋 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>CONTRACT STATUS ▶ ACTIVE</code> (<code>/mrp/contract-status/active</code>):</b><br><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Quản lý toàn bộ vòng đời Hợp đồng khách hàng từ lúc ký, gắn Style/Color, khớp định mức BOM, tính giá vốn vật tư đến khi đóng gói và xuất hàng.<br>' +
          '• <b>Giải nghĩa 25 tiêu đề cột từ trái sang phải:</b><br>' +
          '  - <code>CREATED DATE</code>: Ngày giờ tạo hợp đồng.<br>' +
          '  - <code>CONTRACT #</code>: Mã hợp đồng (nhấp vào <code>✎ Contract-001</code> để mở cửa sổ <code>MANAGE ORDER</code>).<br>' +
          '  - <code>BUYER</code> / <code>PO #</code> / <code>PO DATE</code>: Mã khách hàng, Số PO của khách và Ngày PO.<br>' +
          '  - <code>STYLE CODE</code> / <code>STYLE NAME</code> / <code>SEASON</code> / <code>SIZE</code> / <code>COLOR</code> / <code>SPEC</code>: Thông tin mã hàng và phối màu.<br>' +
          '  - <code>① PO QTY</code>: Số lượng đặt hàng.<br>' +
          '  - <code>LABOR COST</code> / <code>FOB</code> / <code>AMOUNT</code>: Đơn giá gia công, Đơn giá bán FOB và Thành tiền (<code>PO QTY × FOB</code>).<br>' +
          '  - <code>② PACKED</code> / <code>③ SHIPPED</code>: Số lượng đã đóng gói và đã xuất hàng (đồng bộ từ trang <code>Shipment</code>).<br>' +
          '  - <code>①-③ NOT SHIP QTY</code>: Số lượng còn nợ chưa xuất (<code>PO QTY - SHIPPED</code>).<br>' +
          '  - <code>②-③+④ STOCK</code>: Tồn kho thành phẩm hiện tại (<code>PACKED - SHIPPED + PHYSICAL</code>).<br>' +
          '  - <code>④ PHYSICAL</code>: Số lượng kiểm kê thực tế.<br>' +
          '  - <code>REQUESTED / TARGET SHIP DATE</code>, <code>REMARK</code>, <code>ARCHIVE</code> (Lưu trữ), <code>DEL</code> (Xóa).',
        chips: ['Tiêu đề cột màn hình Shipment & Stock', 'Tiêu đề cột màn hình BOM List & Manage', 'Cách đọc trạng thái và ý nghĩa màu chữ']
      },
      {
        id: 'columns-shipment-stock',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Shipment và Stock',
        keywords: [
          'tiêu đề cột màn hình shipment', 'tiêu đề cột stock', 'tiêu đề cột màn hình shipment & stock',
          'các cột shipment', 'các cột stock', 'thông tin trang shipment', 'thông tin trang stock',
          'date filtered qty', 'today accumulated qty', 'stock(start-1)'
        ],
        answer: '🚢 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>BUYER ORDER ▶ SHIPMENT &amp; STOCK</code>:</b><br><br>' +
          '<b>1. Màn hình <code>Shipment</code> (<code>/mrp/buyer-order/shipment</code>):</b><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Nơi trực tiếp nhập số lượng Đóng gói, Kiểm kê và Xuất hàng theo từng ngày/đợt.<br>' +
          '• <b>Các cột chính:</b> <code>PO #</code>, <code>STYLE CODE</code>, <code>STYLE NAME</code>, <code>SIZE</code>, <code>COLOR</code>, <code>① PO QTY</code>, <code>② PACKED</code> (nhấp <code>✎</code> để nhập), <code>③ SHIPPED</code> (tổng đã xuất), <code>①-③ NOT SHIP QTY</code> (còn nợ), <code>②-③+④ STOCK</code> (tồn kho F/G), <code>④ PHYSICAL</code> (nhấp <code>✎</code> để nhập), và <b>Cột Ngày xuất hàng</b> ở bên phải (bấm <code>ADD</code> thêm ngày, gõ số lượng, tick ô vuông rồi bấm <code>SET</code>).<br><br>' +
          '<b>2. Màn hình <code>Stock</code> (<code>/mrp/buyer-order/stock</code>):</b><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Báo cáo tổng hợp tồn kho thành phẩm F/G của mọi hợp đồng.<br>' +
          '• <b>Các khối cột chính:</b><br>' +
          '  - <code>F/G INFORMATION</code>: Thông tin Hợp đồng, Style, Màu và nút xanh <code>PHY</code> xem lịch sử kiểm kê.<br>' +
          '  - <code>DATE FILTERED QTY</code>: <code>① STOCK(START-1)</code> (Tồn đầu kỳ trước ngày lọc), <code>② PACKED</code>, <code>③ SHIPPED</code>, <code>④ PHYSICAL</code> phát sinh trong kỳ lọc.<br>' +
          '  - <code>TODAY(ACCUMULATED) QTY</code>: Tổng lũy kế từ đầu hợp đồng đến ngày hiện tại.',
        chips: ['Công thức Shipment & Stock', 'Tiêu đề cột màn hình Contract Active', 'Quy trình vận hành từ đầu đến cuối']
      },
      {
        id: 'columns-bom-list-manage',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Bom › List và Bom › Manage',
        keywords: [
          'tiêu đề cột màn hình bom', 'tiêu đề cột bom list', 'tiêu đề cột bom manage',
          'tiêu đề cột màn hình bom list & manage', 'thông tin trang bom', 'ý nghĩa trang bom',
          'các cột trong bom'
        ],
        answer: '📐 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT PHÂN HỆ <code>BOM DATA</code>:</b><br><br>' +
          '<b>1. Màn hình <code>Bom › List</code> (<code>/mrp/bom-data/list</code>):</b><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Quản lý danh sách các bảng định mức sản phẩm, khóa/mở khóa và sao chép BOM.<br>' +
          '• <b>Tiêu đề cột:</b> <code>CREATED DATE</code>, <code>BUYER</code>, <code>STYLE CODE</code>, <code>STYLE NAME</code>, <code>COLOR NAME</code>, <code>REMARK</code>, <code>REVISION</code> (Phiên bản <code>v0.1</code>, <code>v0.2</code>), <code>LOCK STATUS</code> (Nút <code>LOCK</code> / <code>UNLOCK</code>), Cột tác vụ (<code>MANAGE</code>, <code>COPY</code>, <code>DEL</code>).<br><br>' +
          '<b>2. Màn hình <code>Bom › Manage</code> (<code>/mrp/bom-data/manage</code>):</b><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Xây dựng công thức định mức vật tư và kích thước chi tiết cắt cho từng Style.<br>' +
          '• <b>Tiêu đề cột (2 khối):</b><br>' +
          '  - Khối <code>RAW MATERIAL</code>: <code>GROUP</code> (Nút <code>Add GP</code>), <code>#</code> (Thứ tự), <code>COLOR CODE</code> (Tick màu áp dụng hoặc <code>COMMON</code> dùng chung), <code>R/M CODE</code> (Nút <code>SEL</code> chọn vật tư), <code>MA #</code>, <code>SUPPLIER</code>, <code>R/M NAME</code>, <code>COLOR</code>, <code>SPEC</code>, <code>BOM PRICE</code> (Nút <code>RESET by R/M</code>), <code>CURRENCY</code>.<br>' +
          '  - Khối <code>CATEGORY</code>: <code>PART &gt; PIECE NAME</code> (Tên chi tiết cắt: Part-1, Part-2...), <code>L</code> (Dài), <code>W</code> (Rộng) và Định mức tiêu hao tự động.',
        chips: ['Hướng dẫn Bom › Manage', 'Tiêu đề cột màn hình Material Master', 'Tiêu đề cột màn hình Purchase Order']
      },
      {
        id: 'columns-material-master',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Material Master',
        keywords: [
          'tiêu đề cột màn hình material master', 'tiêu đề cột material master', 'các cột material master',
          'thông tin trang material master', 'ý nghĩa trang material master', 'danh mục vật tư'
        ],
        answer: '🗂️ <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>INVENTORY CONTROL ▶ MATERIAL MASTER</code>:</b><br><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Từ điển Master Data khai báo mọi nguyên phụ liệu trước khi đưa vào BOM hoặc mua hàng.<br>' +
          '• <b>Giải nghĩa 12 tiêu đề cột từ trái sang phải:</b><br>' +
          '  - <code>SUPPLIER</code>: Nhà cung cấp mặc định (<code>Supplier-001</code>, <code>Supplier-002</code>).<br>' +
          '  - <code>CATEGORY</code>: Nhóm vật tư (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>' +
          '  - <code>R/M CODE</code>: Mã định danh nguyên phụ liệu (<code>FAB00000001</code>...).<br>' +
          '  - <code>MA #</code>: Mã nhóm quản lý (<code>MA001</code>).<br>' +
          '  - <code>NPL NAME</code> &amp; <code>R/M NAME</code>: Tên nội bộ và Tên kỹ thuật tiếng Anh.<br>' +
          '  - <code>COLOR</code>: Màu nguyên phụ liệu (<code>Blue-321</code>).<br>' +
          '  - <code>UNIT</code>: Đơn vị tính chuẩn (<code>YDS</code>, <code>MET</code>, <code>PCS</code>).<br>' +
          '  - <code>UNIT PRICE</code> / <code>CURRENCY</code>: Đơn giá mua và loại tiền tệ.<br>' +
          '  - <code>STANDARD PRICE</code>: Đơn giá chuẩn quy đổi USD dùng để tính giá trị tồn kho.<br>' +
          '  - <code>SPEC.</code>: Quy cách kỹ thuật (<code>spec001</code>).',
        chips: ['Tiêu đề cột màn hình Purchase Order', 'Tiêu đề cột màn hình Inventory', 'Quản lý 6 bảng mã Config › Code']
      },
      {
        id: 'columns-mat-po-status',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Mat PO status',
        keywords: [
          'tiêu đề cột màn hình mat po status', 'tiêu đề cột mat po status', 'các cột mat po status',
          'thông tin trang mat po status', 'ý nghĩa trang mat po status', 'w/h in', 'manage po group'
        ],
        answer: '📑 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>INVENTORY CONTROL ▶ MAT PO STATUS</code>:</b><br><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Giám sát tập trung tất cả các đơn đặt mua nguyên phụ liệu đã phát hành, trạng thái đặt hàng và tiến độ nhập kho.<br>' +
          '• <b>Giải nghĩa các tiêu đề cột (3 Khối):</b><br>' +
          '  1. Khối <b><code>MATERIAL PO</code></b>: <code>SUPPLIER</code> (Nhà cung cấp), <code>MATERIAL PO#</code> (Số đơn mua <code>PO-R-...</code>), <code>PO DATE</code> (Ngày lập), <code>SEND TIME(EMAIL)</code> &amp; <code>SEND BY</code> (Thời gian &amp; người gửi email), <code>DELIVERY DATE</code> (Ngày hẹn giao), <code>AMOUNT</code> (Tổng tiền PO), <code>CURRENCY</code>, <code>STATUS</code> (<code>STANDBY</code> / <code>ORDERED</code>).<br>' +
          '  2. Khối <b><code>GROUP BY</code></b>: <code>TYPE</code> (<code>PO</code> = theo hợp đồng), <code>#</code> (Mã hợp đồng <code>Contract-001</code>).<br>' +
          '  3. Khối <b><code>QUANTITY</code></b>:<br>' +
          '     - <code>① ORDER</code>: Tổng số lượng đặt mua của PO.<br>' +
          '     - <code>② W/H IN</code>: Tổng số lượng đã nhập kho thực tế qua <code>Income status</code>.<br>' +
          '     - <code>①-② BALANCE</code>: Số lượng NCC còn nợ chưa giao (hiện <b>chữ đỏ</b> khi còn nợ &gt; 0).<br>' +
          '     - Nút xanh lá <code>Manage PO Group</code>: Mở nhanh về màn hình <code>Purchase Order</code> của hợp đồng đó.',
        chips: ['Chuyển trạng thái STANDBY sang ORDERED', 'Tiêu đề cột màn hình Purchase Order', 'Tiêu đề cột màn hình Inventory']
      },
      {
        id: 'columns-inventory',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Inventory (Tồn kho vật tư)',
        keywords: [
          'tiêu đề cột màn hình inventory', 'tiêu đề cột inventory', 'các cột inventory',
          'thông tin trang inventory', 'ý nghĩa trang inventory', 'in balance', 'physical inventory',
          'std price amount'
        ],
        answer: '📦 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>INVENTORY CONTROL ▶ INVENTORY</code>:</b><br><br>' +
          '• <b>Ý nghĩa sử dụng:</b> Kiểm soát tức thì số lượng Nhập - Chờ về - Xuất - Kiểm kê - Tồn khả dụng và Giá trị tồn kho (USD) của từng nguyên phụ liệu.<br>' +
          '• <b>Giải nghĩa 7 Khối tiêu đề cột từ trái sang phải:</b><br>' +
          '  1. <b><code>MATERIAL INFORMATION</code>:</b> <code>GROUP</code>, <code>MATERIAL CODE</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>, <code>UNIT</code>.<br>' +
          '  2. <b><code>IN</code> (Đã nhập kho):</b> Chia làm <code>CONT.</code> (Nhập theo hợp đồng), <code>N/A</code> (Nhập tự do) và <code>TOTAL</code> (Tổng đã nhập qua <code>Income status</code>).<br>' +
          '  3. <b><code>IN BALANCE</code> (Hàng đang chờ về):</b> Khối lượng đã đặt mua ở trạng thái <code>ORDERED</code> nhưng chưa nhập kho (chia làm <code>CONT.</code>, <code>N/A</code>, <code>TOTAL</code>).<br>' +
          '  4. <b><code>OUT</code> (Đã xuất / Phân bổ):</b> Chia làm <code>CONT.</code>, <code>ASSIGNED</code>, <code>N/A</code>, <code>TOTAL</code>.<br>' +
          '  5. <b><code>PHYSICAL INVENTORY</code>:</b> Số lượng kiểm kê vật lý thực tế tại kho.<br>' +
          '  6. <b><code>INVENTORY</code>:</b> Tồn kho sổ sách khả dụng hiện tại (<code>IN - OUT + PHYSICAL</code>).<br>' +
          '  7. <b><code>STD PRICE AMOUNT(USD)</code> &amp; <code>HISTORY</code>:</b> Giá trị tồn kho quy đổi USD và nút xem lịch sử thẻ kho.',
        chips: ['Ý nghĩa CONT. vs N/A vs ASSIGNED', 'Sao Inventory trống?', 'Tiêu đề cột Income & Outgo status']
      },
      {
        id: 'columns-income-outgo',
        title: 'Thông tin trang & Giải nghĩa Tiêu đề cột màn hình Income status và Outgo status',
        keywords: [
          'tiêu đề cột income', 'tiêu đề cột outgo', 'tiêu đề cột income & outgo status',
          'thông tin trang income status', 'thông tin trang outgo status', 'các cột income status',
          'các cột outgo status'
        ],
        answer: '📥📤 <b>THÔNG TIN TRANG &amp; TIÊU ĐỀ CỘT <code>INCOME STATUS</code> &amp; <code>OUTGO STATUS</code>:</b><br><br>' +
          '<b>1. Màn hình <code>Income status</code> (<code>/mrp/inventory-control/income-status</code> - Nhập kho):</b><br>' +
          '• <b>Ý nghĩa:</b> Kiểm duyệt dữ liệu phiếu nhập kho từ file Excel trước khi bấm <code>✔ APPLY INCOME</code>.<br>' +
          '• <b>16 Tiêu đề cột:</b> <code>DATE-NO</code> (Số phiếu <code>YYYY/MM/DD-SN</code>), <code>SUPPLIER</code>, <code>LOCATION</code> (Mã kho <code>Factory01-Material-T001</code>), <code>CONTRACT #</code>, <code>MATL PO #</code> (Tự động khớp với PO đang ở trạng thái <code>ORDERED</code>), <code>CODE</code>, <code>NAME</code>, <code>QTY</code>, <code>UNIT</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>CURRENCY</code>, <code>BUYER</code>, <code>DEBIT</code>, <code>MA #</code>, <code>INSPECTION</code> (Ngày kiểm hàng <code>YYYY.MM.DD</code>).<br><br>' +
          '<b>2. Màn hình <code>Outgo status</code> (<code>/mrp/inventory-control/outgo-status</code> - Xuất kho):</b><br>' +
          '• <b>Ý nghĩa:</b> Kiểm duyệt phiếu xuất cấp nguyên phụ liệu từ kho sang xưởng trước khi bấm <code>✔ APPLY OUTGO</code>.<br>' +
          '• <b>18 Tiêu đề cột:</b> <code>DATE-NO</code> (<code>YY/MM/DD-SN</code>), <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>COLOR</code>, <code>QTY</code>, <code>UNIT</code>, <code>CONTRACT #</code>, <code>SUPPLIER</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>ITEM NAME</code>, <code>BUYER</code>, <code>BUYER PO</code>, <code>REMARK / INV NO.</code>, <code>MA NO.</code>, <code>FROM</code> (Kho xuất), <code>TO</code> (Nơi nhận).',
        chips: ['Mã lỗi EFM, ECD, ECT', 'Chuyển trạng thái STANDBY sang ORDERED', 'Tiêu đề cột màn hình Inventory']
      },
      {
        id: 'full-workflow-guide',
        title: 'Quy trình vận hành hệ thống MRP từ đầu đến cuối cho người dùng mới',
        keywords: [
          'quy trình vận hành', 'quy trình vận hành từ đầu đến cuối', 'hướng dẫn bắt đầu', 'thứ tự thao tác',
          'trình tự thao tác', 'cách sử dụng hệ thống', 'các bước sử dụng', 'bắt đầu từ đâu'
        ],
        answer: '🔄 <b>TRÌNH TỰ 5 BƯỚC VẬN HÀNH HỆ THỐNG SINGLE 2 V25.02 TỪ ĐẦU ĐẾN CUỐI:</b><br><br>' +
          '1. <b>Bước 1 – Khai báo Danh mục chuẩn &amp; Nguyên phụ liệu (<code>CONFIG</code> &amp; <code>Material Master</code>):</b><br>' +
          '   • Vào <code>CONFIG</code> để nhập Khách hàng (<code>Buyer</code>), Nhà cung cấp (<code>Matl. supplier</code>), Nơi nhận (<code>Consignee</code>), Kho (<code>Location</code>) và 6 bảng mã (<code>Code</code>).<br>' +
          '   • Vào <code>INVENTORY CONTROL ▶ Material Master</code> để khai báo các mã nguyên phụ liệu và đơn giá chuẩn.<br>' +
          '2. <b>Bước 2 – Lập Định mức Kỹ thuật (<code>BOM DATA ▶ List &amp; Manage</code>):</b><br>' +
          '   • Tạo bảng BOM cho từng <code>Buyer + Style code</code>, chọn vật tư từ <code>Material Master</code> và nhập thông số chi tiết cắt <code>L × W</code> cho từng màu.<br>' +
          '3. <b>Bước 3 – Nhập Hợp đồng Khách hàng (<code>CONTRACT STATUS ▶ Active</code>):</b><br>' +
          '   • Bấm <code>+ Add CONTRACT</code> để nhập Hợp đồng, thêm <code>PO #</code>, chọn <code>Style code</code>, nhập số lượng theo từng màu và kiểm tra nút <b>BOM</b> báo xanh lá (<code>Match</code>).<br>' +
          '4. <b>Bước 4 – Tính MRP &amp; Phát hành Đơn mua Vật tư (<code>INVENTORY CONTROL ▶ Purchase Order</code>):</b><br>' +
          '   • Chọn Hợp đồng tại ô <code>CONT #</code> ➔ tick chọn các dòng vật tư cùng Nhà cung cấp ➔ bấm <b>MAKE PO</b> ➔ cuộn sang phải <b>đổi trạng thái từ <code>STANDBY</code> sang <code>ORDERED</code></b>.<br>' +
          '5. <b>Bước 5 – Nhập/Xuất Kho Vật tư &amp; Xuất hàng Thành phẩm:</b><br>' +
          '   • Vào <code>Income status</code> / <code>Outgo status</code> để tải file Excel nhập/xuất kho và bấm <b>APPLY</b>.<br>' +
          '   • Vào <code>CONTRACT STATUS ▶ Shipment</code> để cập nhật số lượng Đóng gói (<code>PACKED</code>), Kiểm kê (<code>PHYSICAL</code>) và Xuất hàng (<code>SHIPPED</code>).',
        chips: ['Chuyển trạng thái STANDBY sang ORDERED', 'Nút MAKE PO vs ADD', 'Mã lỗi EFM, ECD, ECT', 'Công thức Shipment & Stock']
      },
      {
        id: 'po-status-standby-to-ordered',
        title: 'Chuyển trạng thái PO từ STANDBY sang ORDERED trước khi Nhập kho',
        keywords: [
          'standby', 'ordered', 'chuyển trạng thái po', 'standby sang order', 'standby sang ordered',
          'bị lỗi nhập kho', 'lỗi nhập kho po', 'tại sao tạo po rồi mà nhập kho báo lỗi', 'status po'
        ],
        answer: '⚠️ <b>BƯỚC BẮT BUỘC SAU KHI BẤM MAKE PO: CHUYỂN TRẠNG THÁI TỪ <code>STANDBY</code> ➔ <code>ORDERED</code>:</b><br><br>' +
          '1. Khi bạn vừa bấm <b>MAKE PO</b> tại màn hình <code>Purchase Order</code>, đơn mua mới được tạo ở trạng thái chờ (<b><code>STANDBY</code></b>).<br>' +
          '2. Để đơn mua có hiệu lực chính thức, bạn cuộn ngang bảng <code>Purchase Order</code> sang phải tới khối <b><code>Ⓕ DELIVERY</code> / <code>Ⓐ ORDER INFORMATION</code></b>, nhấp vào chữ <code>STANDBY</code> (hoặc nút xanh lá <b>INFO</b> dưới cột <code>STATUS</code>) và đổi sang <b><code>ORDERED</code></b>.<br>' +
          '3. <b>Tác dụng tức thì khi chuyển sang <code>ORDERED</code>:</b><br>' +
          '   • Màn hình <code>Mat PO status</code> hiển thị trạng thái <b><code>ORDERED</code></b>.<br>' +
          '   • Màn hình <code>Inventory</code> (ở ngay bộ lọc mặc định <code>NOT ZERO</code>) lập tức hiển thị số lượng đang đặt mua tại cột <b><code>IN BALANCE</code></b>.<br>' +
          '   • Màn hình <code>Income status</code> mới cho phép nhận diện đơn mua hợp lệ khi tải file Excel nhập kho!',
        chips: ['Nút MAKE PO vs ADD', 'Mã lỗi EFM, ECD, ECT', 'Quy trình vận hành từ đầu đến cuối']
      },
      {
        id: 'make-po-vs-add',
        title: 'Phân biệt nút MAKE PO và nút ADD trong Purchase Order',
        keywords: [
          'make po', 'nút make po', 'nút add', 'make po và add', 'make po vs add', 'gộp po',
          'thêm vật tư vào po', 'tạo po mua hàng', 'purchase order', 'po-r-261116'
        ],
        answer: '⚙️ Trên màn hình <b>INVENTORY CONTROL ▶ Purchase Order</b>, 2 nút <b>MAKE PO</b> và <b>ADD</b> phục vụ 2 tình huống khác nhau:<br><br>' +
          '1. <b>Nút <span class="btn-badge btn-success">MAKE PO</span> (Ở tiêu đề cột SUPPLIER):</b><br>' +
          '   • Dùng để <b>phát hành một mã đơn mua mới tinh</b> (<code>PO-R-YYMMDD-XXX</code>).<br>' +
          '   • Bạn có thể tick chọn nhiều dòng vật tư của <b>cùng 1 Nhà cung cấp</b> (như 3 vật tư của <code>Supplier-002</code>) rồi bấm <code>MAKE PO</code> một lần để gộp chung vào 1 đơn.<br><br>' +
          '2. <b>Nút <span class="btn-badge btn-success">ADD</span> (Ở cột ADD / DEL từng dòng):</b><br>' +
          '   • Dùng khi bạn <b>đã tạo sẵn một mã PO trước đó</b> và muốn <b>nhét thêm dòng vật tư hiện tại vào chung mã PO đó</b>.<br>' +
          '   • Khi bấm <code>ADD</code>, chọn mã <code>PO-R-...</code> từ dropdown ➔ bấm <b>APPLY</b> ➔ sau đó nhấp vào ô <code>ORDER QTY</code> và <code>UNIT PRICE</code> của dòng vừa gộp để điền số lượng và đơn giá.',
        chips: ['Tiêu đề cột màn hình Mat PO status', 'Chuyển trạng thái STANDBY sang ORDERED', 'Tại sao không thấy Contract ở Purchase Order?']
      },
      {
        id: 'excel-error-codes',
        title: 'Giải mã Mã lỗi (EFM, ECD, ECT) và Cảnh báo (WPO, WDF, WCD) khi Upload Excel',
        keywords: [
          'efm', 'ecd', 'ect', 'wpo', 'wdf', 'wcd', 'mã lỗi', 'error information', 'nút info',
          'lỗi upload excel', 'income status', 'outgo status', 'lỗi nhập kho', 'lỗi xuất kho'
        ],
        answer: '🔍 <b>BẢNG GIẢI MÃ LỖI KHI UPLOAD EXCEL TẠI INCOME STATUS &amp; OUTGO STATUS:</b><br><br>' +
          '🔴 <b>NHÓM LỖI ĐỎ (ERROR - Bắt buộc sửa mới bấm được APPLY):</b><br>' +
          '• <b><code>EFM</code> (Format error):</b> Sai định dạng ngày phiếu (Income: <code>YYYY/MM/DD-SN</code>, Outgo: <code>YY/MM/DD-SN</code>), ngày kiểm tra (<code>YYYY.MM.DD</code>) hoặc cột số lượng/đơn giá chứa chữ.<br>' +
          '• <b><code>ECD</code> (Not found/Different in CODE):</b> Mã kho (<code>Factory01-Material-T001</code>), Mã R/M (<code>FAB00000001</code>), ĐVT (<code>YDS</code>), Tiền tệ (<code>USD</code>), Buyer hoặc MA# không khớp với Master Data.<br>' +
          '• <b><code>ECT</code> (Not found in Active CONTRACT):</b> Mã hợp đồng không nằm trong danh sách Active hoặc vật tư không thuộc Hợp đồng đó.<br><br>' +
          '🟠 <b>NHÓM CẢNH BÁO CAM (WARNING - Cho phép đối chiếu):</b><br>' +
          '• <b><code>WPO</code>:</b> NCC, Đơn giá, Tiền tệ hoặc Buyer khác với đơn mua <code>MATERIAL PO #</code>.<br>' +
          '• <b><code>WDF</code>:</b> Bỏ trống <code>LOCATION</code> (vào kho N/A) hoặc bỏ trống <code>CONTRACT #</code>.<br>' +
          '• <b><code>WCD</code>:</b> Tên vật tư hoặc màu sắc khác với khai báo trong <code>Material Master</code>.',
        chips: ['Tiêu đề cột Income & Outgo status', 'Sao Inventory trống?', 'Chuyển trạng thái STANDBY sang ORDERED']
      },
      {
        id: 'inventory-empty-not-zero',
        title: 'Tại sao màn hình Inventory hiển thị trống (No data available)?',
        keywords: [
          'sao inventory trống', 'inventory trống', 'không có dữ liệu trong inventory', 'not zero',
          'show all', 'xem tồn kho', 'inventory control', 'no data available'
        ],
        answer: '📊 Khi mở màn hình <b>INVENTORY CONTROL ▶ Inventory</b>, nếu thấy báo <i>"No data available in table"</i>:<br><br>' +
          '• <b>Nguyên nhân:</b> Ô lọc đầu tiên ở góc trên bên trái mặc định đang chọn <b><code>NOT ZERO</code></b> (chỉ hiển thị các vật tư đã có đơn hàng ở trạng thái <code>ORDERED</code> hoặc có số lượng tồn kho thực tế &gt; 0).<br>' +
          '• <b>Cách khắc phục ngay:</b> Nhấp vào dropdown <b><code>NOT ZERO</code></b> ➔ chọn <b><code>SHOW ALL</code></b> ➔ bấm nút <b><code>🔍 Refresh</code></b>. Toàn bộ danh mục nguyên phụ liệu sẽ hiển thị đầy đủ!',
        chips: ['Tiêu đề cột màn hình Inventory', 'Ý nghĩa CONT. vs N/A vs ASSIGNED', 'Mã lỗi EFM, ECD, ECT']
      },
      {
        id: 'shipment-stock-formula',
        title: 'Công thức tính và cách nhập PACKED, SHIPPED, PHYSICAL trong Shipment & Stock',
        keywords: [
          'shipment', 'stock', 'packed', 'shipped', 'physical', 'not ship qty', 'công thức shipment',
          'xuất hàng thành phẩm', 'tồn kho thành phẩm', 'manage packed', 'manage physical'
        ],
        answer: '🚢 <b>QUẢN LÝ ĐÓNG GÓI, XUẤT HÀNG &amp; TỒN KHO THÀNH PHẨM (SHIPMENT &amp; STOCK):</b><br><br>' +
          'Tại màn hình <code>CONTRACT STATUS ▶ Shipment</code> (<code>/mrp/buyer-order/shipment</code>), chọn <code>Buyer</code> &amp; <code>Contract #</code> rồi bấm <b>APPLY</b>:<br>' +
          '• <b>Nhập Đóng gói (<code>② PACKED</code>):</b> Nhấp vào biểu tượng cây bút <code>✎</code> ở cột PACKED để thêm ngày và số lượng đã đóng thùng (VD: <b>500</b>).<br>' +
          '• <b>Nhập Kiểm kê (<code>④ PHYSICAL</code>):</b> Nhấp vào biểu tượng <code>✎</code> ở cột PHYSICAL để nhập lượng kiểm kê thực tế (VD: <b>300</b>).<br>' +
          '• <b>Nhập Xuất hàng (<code>③ SHIPPED</code>):</b> Nhấp vào ô dưới cột ngày xuất để điền lượng xuất (VD: <b>200</b>), tick chọn cột ngày và bấm <b>SET</b>.<br><br>' +
          '📐 <b>Công thức tự động của hệ thống:</b><br>' +
          '• <code>①-③ NOT SHIP QTY = 1,000 (PO Qty) - 200 (Shipped) = 800</code><br>' +
          '• <code>②-③+④ STOCK = 500 (Packed) - 200 (Shipped) + 300 (Physical) = 600</code>',
        chips: ['Tiêu đề cột màn hình Shipment & Stock', 'Tiêu đề cột màn hình Contract Active']
      },
      {
        id: 'contract-not-in-po',
        title: 'Tại sao Hợp đồng không hiện trong dropdown CONT # ở màn hình Purchase Order?',
        keywords: [
          'không thấy contract', 'không chọn được contract', 'cont #', 'not match bom',
          'liên kết bom', 'stl002', 'contract-002 không hiện'
        ],
        answer: '🔗 <b>NGUYÊN NHÂN &amp; CÁCH KHẮC PHỤC KHI HỢP ĐỒNG KHÔNG HIỆN TRONG PURCHASE ORDER:</b><br><br>' +
          '• <b>Nguyên nhân:</b> Mã <code>Style Code</code> trong Hợp đồng chưa có bảng định mức BOM thuộc đúng <code>Buyer</code> đó (nút BOM trong cửa sổ <code>MANAGE ORDER</code> báo đỏ <code>Not match</code>).<br>' +
          '• <b>Cách xử lý:</b><br>' +
          '  1. Vào <code>BOM DATA ▶ List</code>, tạo mới hoặc bấm <b>COPY</b> từ một BOM mẫu sang đúng cặp <code>Buyer</code> + <code>Style Code</code> (VD: <code>Buyer-001</code> + <code>Stl002</code>).<br>' +
          '  2. Ngay khi có BOM khớp màu (<code>White-001</code>, <code>Black-001</code>), trạng thái BOM trong hợp đồng tự động chuyển sang màu xanh lá (<code>Match</code>) và Hợp đồng xuất hiện ngay lập tức trong dropdown <code>CONT #</code> tại <code>Purchase Order</code>!',
        chips: ['Nút MAKE PO vs ADD', 'Hướng dẫn Bom › Manage']
      },
      {
        id: 'bom-manage-guide',
        title: 'Hướng dẫn màn hình Bom › Manage và nút Basic info / SEL',
        keywords: [
          'bom manage', 'basic info', 'nút sel', 'add gp', 'part piece', 'reset by rm',
          'lập định mức', 'quản lý bom'
        ],
        answer: '📐 <b>HƯỚNG DẪN MÀN HÌNH <code>BOM DATA ▶ Manage</code>:</b><br><br>' +
          '• <b>Nút <span class="btn-badge btn-success">Open BOM</span>:</b> Chọn Buyer, Style Code và Revision cần mở.<br>' +
          '• <b>Nút <span class="btn-badge btn-primary">Basic info</span>:</b> Mở hộp thoại cấu hình chung, chuyển trạng thái giữa <code>Manage</code> (Cho phép sửa) và <code>Locked</code> (Khóa), thêm màu sắc <code>Color option</code>.<br>' +
          '• <b>Nút <span class="btn-badge btn-primary">Add GP</span> &amp; nút <code>+</code>:</b> Tạo nhóm vật tư (<code>Group#1</code>...) và thêm dòng nguyên phụ liệu.<br>' +
          '• <b>Nút <span class="btn-badge btn-primary">SEL</span>:</b> Chọn mã nguyên phụ liệu chuẩn từ <code>Material Master</code>.<br>' +
          '• <b>Khối CATEGORY (<code>PART &gt; PIECE NAME</code>, <code>L</code>, <code>W</code>):</b> Nhập tên chi tiết cắt và kích thước Dài × Rộng để hệ thống tự động tính định mức tiêu hao.',
        chips: ['Danh mục Material Master', 'Nút MAKE PO vs ADD']
      },
      {
        id: 'config-code-6-tables',
        title: 'Quản lý 6 Bảng Mã Chuẩn tại màn hình Config › Code',
        keywords: [
          'config code', '6 bảng mã', 'rm category', 'color code', 'style code', 'ma001',
          'đơn vị tính unit', 'khai báo mã màu'
        ],
        answer: '⚙️ Màn hình <b>CONFIG ▶ Code</b> (<code>/mrp/config/code</code>) tập trung <b>6 bảng từ điển mã hóa</b> trên cùng một giao diện:<br><br>' +
          '1. <b><code>R/M Category</code>:</b> Nhóm vật tư (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>' +
          '2. <b><code>Unit</code>:</b> Đơn vị đo lường (<code>MET</code>, <code>PCS</code>, <code>YDS</code>).<br>' +
          '3. <b><code>MA #</code>:</b> Mã nhóm quản trị vật tư (<code>MA001</code>, <code>MA002</code>).<br>' +
          '4. <b><code>Color code-Item</code>:</b> Mã màu thành phẩm (<code>Black-001</code>, <code>White-001</code>).<br>' +
          '5. <b><code>Color code-Material</code>:</b> Mã màu nguyên phụ liệu (<code>Blue-321</code>, <code>Red-123</code>).<br>' +
          '6. <b><code>Style code</code>:</b> Mã kiểu dáng sản phẩm (<code>Stl001</code>, <code>Stl002</code>).<br><br>' +
          'Mỗi bảng đều hỗ trợ thêm lẻ (<code>+ ADD</code>), tải lên bằng Excel (<code>⬆ UP</code>) và tải file mẫu (<code>⬇ TEM</code>).',
        chips: ['Thông tin các trang Config', 'Danh mục Material Master', 'Cách đọc trạng thái hệ thống']
      },
      {
        id: 'red-text-meaning',
        title: 'Ý nghĩa Chữ số Màu Đỏ và Cảnh báo Màu Đỏ trên các bảng dữ liệu',
        keywords: [
          'chữ đỏ', 'số màu đỏ', 'chữ màu đỏ', 'màu đỏ', 'red', 'tại sao chữ màu đỏ',
          'cảnh báo đỏ', 'cons.(bom) màu đỏ', 'balance màu đỏ', 'status màu đỏ', 'cách đọc màu đỏ'
        ],
        answer: '🔴 <b>CÁCH ĐỌC CÁC CON SỐ &amp; TRẠNG THÁI MÀU ĐỎ TRÊN HỆ THỐNG MRP:</b><br><br>' +
          '1. <b>Tại màn hình <code>Purchase Order</code> – Cột <code>CONS.(BOM)(AFTER)</code> in chữ đỏ (VD: <code>14400</code> màu đỏ):</b><br>' +
          '   • <b>Ý nghĩa:</b> Cảnh báo định mức BOM của mã hàng đã được tạo/cập nhật sau thời điểm tạo Hợp đồng, hoặc dòng vật tư này <b>chưa được phát hành PO</b> (cột <code>MATERIAL PO #</code> đang trống).<br>' +
          '   • <b>Cách xử lý:</b> Bấm nút <span class="btn-badge btn-success">UPDATE</span> ở tiêu đề cột để đồng bộ định mức mới nhất, hoặc tick chọn dòng vật tư rồi bấm <span class="btn-badge btn-success">MAKE PO</span>.<br><br>' +
          '2. <b>Tại màn hình <code>Mat PO status</code> – Cột <code>①-② BALANCE</code> in chữ đỏ (VD: <code>14400</code>, <code>2400</code> màu đỏ):</b><br>' +
          '   • <b>Ý nghĩa:</b> Nhà cung cấp <b>đang còn nợ hàng chưa giao đủ</b> (<code>① ORDER &gt; ② W/H IN</code>). Khi nhập kho đủ 100% (<code>BALANCE = 0</code>), con số sẽ hết cảnh báo đỏ.<br><br>' +
          '3. <b>Tại cửa sổ <code>MANAGE ORDER</code> – Nút <code>BOM</code> màu đỏ (<code>Not match</code>):</b><br>' +
          '   • <b>Ý nghĩa:</b> Mã <code>Style Code</code> trong Hợp đồng chưa có bảng định mức BOM khớp <code>Buyer</code> + <code>Color</code>.<br><br>' +
          '4. <b>Tại <code>Income status</code> &amp; <code>Outgo status</code> – Thẻ <code>[EFM]</code>, <code>[ECD]</code>, <code>[ECT]</code> màu đỏ:</b><br>' +
          '   • <b>Ý nghĩa:</b> Dòng Excel bị lỗi định dạng hoặc sai mã danh mục, khóa nút <code>APPLY</code> cho đến khi sửa về <code>ERROR: 0</code>.',
        chips: ['Cách đọc trạng thái hệ thống', 'Tiêu đề cột Purchase Order', 'Chuyển PO từ STANDBY sang ORDERED']
      },
      {
        id: 'config-pages-detail',
        title: 'Thông tin trang, Ý nghĩa sử dụng & Tiêu đề cột Phân hệ CONFIG (6 Trang)',
        keywords: [
          'phân hệ config', 'thông tin trang config', 'config buyer', 'matl supplier', 'matl consignee',
          'config exchange', 'config location', 'tiêu đề cột config', 'ý nghĩa trang config'
        ],
        answer: '⚙️ <b>THÔNG TIN TRANG, Ý NGHĨA SỬ DỤNG &amp; TIÊU ĐỀ CỘT PHÂN HỆ <code>CONFIG</code> (6 MÀN HÌNH):</b><br><br>' +
          '1. <b><code>Config › Buyer</code> (<code>/mrp/config/buyer</code>):</b><br>' +
          '   • <i>Ý nghĩa:</i> Quản lý danh mục Khách hàng đặt hàng may mặc (<code>Buyer-001</code>, <code>Buyer-002</code>).<br>' +
          '   • <i>Tiêu đề cột:</i> <code>NAME</code> (Mã/Tên Buyer), <code>ADDRESS</code> (Địa chỉ), <code>TEL</code> (Điện thoại), <code>PIC › DIVISION / NAME / TEL / EMAIL</code> (Bộ phận, Tên, SĐT, Email người phụ trách), <code>MANAGE</code>, <code>DEL</code>.<br><br>' +
          '2. <b><code>Config › Matl. supplier</code> (<code>/mrp/config/matl-supplier</code>):</b><br>' +
          '   • <i>Ý nghĩa:</i> Quản lý danh bạ Nhà cung cấp nguyên phụ liệu (<code>Supplier-001</code>, <code>Supplier-002</code>).<br>' +
          '   • <i>Tiêu đề cột:</i> <code>NAME</code> (Tên NCC), <code>ADDRESS</code>, <code>TEL</code>, <code>COUNTRY</code>, <code>PIC › DIVISION / NAME / TEL / EMAIL</code>, <code>MANAGE</code>, <code>DEL</code>.<br><br>' +
          '3. <b><code>Config › Matl. consignee</code> (<code>/mrp/config/matl-consignee</code>):</b><br>' +
          '   • <i>Ý nghĩa:</i> Khai báo pháp nhân/nhà máy nhận hàng in trên đơn PO (<code>BETHELVINA CO.,LTD</code>).<br>' +
          '   • <i>Tiêu đề cột:</i> <code>NAME</code>, <code>ADDRESS</code>, <code>TEL</code>, <code>PIC › DIVISION / NAME / TEL / EMAIL</code>, <code>MANAGE</code>, <code>DEL</code>.<br><br>' +
          '4. <b><code>Config › Exchange</code> (<code>/mrp/config/exchange</code>):</b><br>' +
          '   • <i>Ý nghĩa:</i> Thiết lập tỷ giá quy đổi ngoại tệ (<code>USD</code>, <code>VND</code>, <code>KRW</code>, <code>CNY</code>, <code>JPY</code>, <code>EUR</code>) để quy đổi đơn giá chuẩn.<br>' +
          '   • <i>Tiêu đề cột:</i> <code>CURRENCY</code> (Đồng tiền gốc), các cột tỷ giá quy đổi sang từng ngoại tệ và nút <code>APPLY</code>.<br><br>' +
          '5. <b><code>Config › Code</code> (<code>/mrp/config/code</code>):</b> Quản lý 6 bảng mã chuẩn (<code>R/M Category</code>, <code>Unit</code>, <code>MA #</code>, <code>Color code-Item</code>, <code>Color code-Material</code>, <code>Style code</code>).<br><br>' +
          '6. <b><code>Config › Location</code> (<code>/mrp/config/location</code>):</b><br>' +
          '   • <i>Ý nghĩa:</i> Khai báo sơ đồ vị trí kho và xưởng (<code>Factory01-Material-T001</code>, <code>Factory01-Material-T002</code>, <code>Factory02-Material-T001</code>, <code>Factory02-Material-T002</code>).<br>' +
          '   • <i>Tiêu đề cột:</i> <code>LOCATION CODE / NAME</code> (Tên vị trí kho), <code>DESCRIPTION</code>, <code>EDIT</code>, <code>DEL</code>.',
        chips: ['Thông tin 19 trang hệ thống', '6 Bảng Mã Config › Code', 'Tiêu đề cột Income & Outgo']
      },
      {
        id: 'admin-archive-deleted-pages',
        title: 'Thông tin trang ADMIN (Account, Profile) & Contract Archive / Deleted',
        keywords: [
          'admin account', 'admin profile', 'archive', 'deleted', 'hợp đồng lưu trữ', 'hợp đồng đã xóa',
          'phân hệ admin', 'quản trị tài khoản', 'restore hợp đồng'
        ],
        answer: '🛡️ <b>THÔNG TIN CÁC TRANG QUẢN TRỊ (<code>ADMIN</code>) &amp; LƯU TRỮ HỢP ĐỒNG (<code>ARCHIVE / DELETED</code>):</b><br><br>' +
          '1. <b><code>Contract Status › Archive</code> (<code>/mrp/contract-status/archive</code>):</b><br>' +
          '   • <i>Ý nghĩa sử dụng:</i> Lưu trữ các hợp đồng đã giao hàng hoàn tất 100% và tất toán để bảng <code>Active</code> luôn gọn nhẹ. Có nút khôi phục (<code>ACTIVE</code>) khi cần mở lại.<br>' +
          '   • <i>Tiêu đề cột:</i> Giống hệt bảng <code>Contract Status › Active</code> (từ <code>CREATED DATE</code>, <code>CONTRACT #</code> đến <code>②-③+④ STOCK</code>).<br><br>' +
          '2. <b><code>Contract Status › Deleted</code> (<code>/mrp/contract-status/deleted</code>):</b><br>' +
          '   • <i>Ý nghĩa sử dụng:</i> Thùng rác an toàn chứa các hợp đồng đã bấm <code>DEL</code> tại màn hình Active, giúp kiểm toán và khôi phục khi xóa nhầm.<br><br>' +
          '3. <b><code>Admin › Account</code> (<code>/mrp/admin/account</code>):</b><br>' +
          '   • <i>Ý nghĩa sử dụng:</i> Quản lý danh sách tài khoản đăng nhập hệ thống (<code>demo</code>, <code>admin</code>), phân quyền truy cập và khóa/mở khóa user.<br>' +
          '   • <i>Tiêu đề cột:</i> <code>ID</code>, <code>NAME</code>, <code>EMAIL</code>, <code>ROLE / PERMISSION</code>, <code>STATUS</code>, <code>CREATED DATE</code>, <code>MANAGE</code>.<br><br>' +
          '4. <b><code>Admin › Profile</code> (<code>/mrp/admin/account/edit</code>):</b><br>' +
          '   • <i>Ý nghĩa sử dụng:</i> Cho phép người dùng đang đăng nhập tự cập nhật tên hiển thị, email và đổi mật khẩu bảo mật.',
        chips: ['Thông tin 19 trang hệ thống', 'Tiêu đề cột Contract Active', 'Cách đọc trạng thái hệ thống']
      },
      {
        id: 'bom-missing-buyer-style-in-generate',
        title: 'Nhấn GENERATE NEW BOM (+ Create new BOM) trong Bom › List nhưng không thấy tên Khách hàng hoặc tên Style',
        keywords: [
          'generate new bom', 'create new bom', 'không thấy tên khách hàng', 'không thấy tên style',
          'không thấy khách hàng', 'không thấy style', 'không có buyer', 'không có style code',
          'nhấn generate new bom', 'thiếu khách hàng', 'thiếu style', 'tạo thêm style', 'tạo thêm khách hàng'
        ],
        answer: '⚠️ <b>XỬ LÝ KHI NHẤN <code>+ Create new BOM</code> (CỬA SỔ <code>GENERATE NEW BOM</code>) TRONG <code>BOM › LIST</code> MÀ KHÔNG THẤY TÊN KHÁCH HÀNG HOẶC TÊN STYLE:</b><br><br>' +
          'Khi bấm nút xanh lá <span class="btn-badge btn-success">+ Create new BOM</span> tại trang <code>BOM DATA ▶ List</code>, hộp thoại <b><code>GENERATE NEW BOM</code></b> chỉ hiển thị những Khách hàng (<code>BUYER</code>) và Mã hàng (<code>STYLE CODE</code>) đã được khai báo trong danh mục chuẩn. Nếu không thấy, bạn cần tạo thêm như sau:<br><br>' +
          '1. <b>Nếu không thấy tên Mã hàng / Tên Style (<code>STYLE CODE</code> / <code>STYLE NAME</code>):</b><br>' +
          '   • Vào menu <b><code>CONFIG ▶ Code</code></b> (<code>/mrp/config/code</code>).<br>' +
          '   • Nhìn xuống bảng thứ 6 ở góc dưới bên phải có tiêu đề <b><code>Style code | Style name</code></b>.<br>' +
          '   • Bấm nút màu xanh lá <span class="btn-badge btn-success">+ ADD</span> (hoặc bấm <code>⬇ TEM</code> tải mẫu Excel rồi bấm <code>⬆ UP</code> để tải lên hàng loạt) ➔ Nhập mã <code>Style code</code> (VD: <code>Stl003</code>) và tên <code>Style name</code> ➔ Bấm Lưu.<br><br>' +
          '2. <b>Nếu không thấy tên Khách hàng (<code>BUYER</code>):</b><br>' +
          '   • Vào menu <b><code>CONFIG ▶ Buyer</code></b> (<code>/mrp/config/buyer</code>).<br>' +
          '   • Bấm nút màu xanh lá <span class="btn-badge btn-success">+ Add</span> ở góc trên bên trái ➔ Nhập tên Khách hàng mới (VD: <code>Buyer-003</code>) và thông tin liên hệ ➔ Bấm Lưu.<br><br>' +
          '👉 Sau khi thêm xong tại <code>CONFIG</code>, bạn quay lại trang <code>BOM DATA ▶ List</code> bấm <code>+ Create new BOM</code> là tên Khách hàng và tên Style mới sẽ xuất hiện ngay trong ô chọn!',
        chips: ['6 bảng mã tại Config Code', 'Hướng dẫn Bom › Manage', 'Tổng hợp các lỗi sai thao tác thường gặp']
      },
      {
        id: 'operational-common-mistakes',
        title: 'Tổng hợp các lỗi bất chợt do sai thao tác thường gặp và cách xử lý nhanh',
        keywords: [
          'lỗi sai thao tác', 'sai thao tác', 'tổng hợp các lỗi sai thao tác thường gặp', 'lỗi thường gặp',
          'lỗi bất chợt', 'bấm nhầm', 'dòng hợp đồng trống', 'không bấm được', 'shipment trống',
          'không hiện bảng', 'quên bấm apply', 'open bom'
        ],
        answer: '🛠️ <b>TỔNG HỢP 7 LỖI BẤT CHỢT DO SAI THAO TÁC THƯỜNG GẶP &amp; CÁCH KHẮC PHỤC TỨC THÌ:</b><br><br>' +
          '1. <b>Nhấn <code>+ Create new BOM</code> (<code>GENERATE NEW BOM</code>) không thấy Khách hàng hoặc Style:</b><br>' +
          '   ➔ Vào <code>CONFIG ▶ Code</code> (bảng <code>Style code</code> góc dưới phải) bấm <code>+ ADD</code> để thêm Style mới; vào <code>CONFIG ▶ Buyer</code> bấm <code>+ Add</code> để thêm Khách hàng mới.<br><br>' +
          '2. <b>Bấm <code>+ Add CONTRACT</code> ở trang Hợp đồng rồi đóng cửa sổ ngay làm sinh ra dòng hợp đồng trống (<code>___</code>):</b><br>' +
          '   ➔ Ngay khi bấm <code>+ Add CONTRACT</code>, hệ thống tạo sẵn 1 bản ghi nháp. Nếu không dùng, hãy tick ô vuông ở cột <code>DEL</code> của dòng trống đó và bấm nút đỏ <span class="btn-badge btn-danger">DEL</span> để xóa.<br><br>' +
          '3. <b>Vào trang <code>Shipment</code> hoặc <code>Stock</code> chỉ thấy màn hình đen trống không có bảng dữ liệu:</b><br>' +
          '   ➔ Do chưa bấm nút <span class="btn-badge btn-success">APPLY</span>! Sau khi chọn <code>BUYER</code> và <code>CONTRACT #</code> (hoặc ngày <code>TODAY</code>), bạn bắt buộc phải bấm nút xanh lá <b>APPLY</b> thì bảng mới hiển thị.<br><br>' +
          '4. <b>Trên trang <code>Shipment</code>, đã gõ số lượng xuất hàng dưới cột ngày xuất nhưng tải lại trang bị mất số:</b><br>' +
          '   ➔ Sau khi gõ số lượng xuất vào ô, bạn <b>phải tick chọn ô vuông trên tiêu đề cột ngày xuất đó rồi bấm nút xanh lá <span class="btn-badge btn-success">SET</span></b> để lưu.<br><br>' +
          '5. <b>Mở trực tiếp menu <code>BOM DATA ▶ Manage</code> nhưng không thấy dòng vật tư nào hoặc không thêm được màu:</b><br>' +
          '   ➔ Bấm nút xanh lá <span class="btn-badge btn-success">Open BOM</span> góc trái để chọn mở 1 bảng BOM. Muốn thêm phối màu cho BOM hoặc mở khóa sửa, bấm nút xanh dương <span class="btn-badge btn-primary">Basic info</span> ➔ để trạng thái <code>Manage</code> và thêm màu tại <code>Color option</code>.<br><br>' +
          '6. <b>Đã bấm <code>MAKE PO</code> tạo đơn mua nhưng Kho không hiện <code>IN BALANCE</code> và Nhập kho báo lỗi:</b><br>' +
          '   ➔ Do quên chuyển trạng thái PO từ <b><code>STANDBY</code> ➔ <code>ORDERED</code></b> ở cột <code>STATUS</code> bên phải bảng <code>Purchase Order</code>.<br><br>' +
          '7. <b>Điền file Excel Nhập/Xuất kho từ dòng 1 hoặc dòng 2 làm mất dữ liệu hoặc báo lỗi <code>EFM</code>:</b><br>' +
          '   ➔ Hệ thống bỏ qua 2 dòng đầu tiên làm tiêu đề và chỉ đọc dữ liệu từ <b>Dòng thứ 3</b>. Ngoài ra, cột <code>DATE-NO</code> của Nhập kho dùng 4 số năm (<code>YYYY/MM/DD-SN</code>), còn Xuất kho dùng 2 số năm (<code>YY/MM/DD-SN</code>).',
        chips: ['Nhấn GENERATE NEW BOM không thấy khách hàng hoặc style', 'Chuyển trạng thái STANDBY sang ORDERED', 'Giải mã lỗi EFM, ECD, ECT và WPO, WDF, WCD']
      },
      {
        id: 'bom-color-common',
        title: 'Ý nghĩa phần COLOR và COMMON (Color Common) trong cột COLOR CODE của BOM › Manage',
        keywords: [
          'color common', 'common', 'color code', 'color và common', 'phần color common',
          'color common nghĩa là gì', 'color common là gì', 'common trong bom', 'bom color common',
          'chế độ common', 'chế độ color', 'dùng chung màu', 'tách màu trong bom',
          'switch from common to color', 'switch from color to common'
        ],
        answer: '🎨 <b>Ý NGHĨA PHẦN <code>COLOR</code> VÀ <code>COMMON</code> (<code>COLOR CODE</code>) TRONG <code>BOM › MANAGE</code>:</b><br><br>' +
          'Tại màn hình <b><code>BOM DATA ▶ Manage</code></b>, cột <b><code>COLOR CODE</code></b> dùng để quy định vật tư đó <b>dùng chung cho mọi màu</b> hay <b>tách riêng theo từng màu sản phẩm</b> (đã khai báo trong <code>Basic info ▶ Color option</code>):<br><br>' +
          '1. <b>Chế độ <code>COMMON</code> (Ô checkbox đang BỎ TICK <code>☐</code>):</b><br>' +
          '   • Dòng vật tư chỉ hiển thị <b>1 dòng duy nhất</b> mang chữ <b><code>COMMON</code></b>.<br>' +
          '   • <b>Ý nghĩa:</b> Nguyên phụ liệu này <b>dùng chung giống hệt nhau cho tất cả các màu</b> của mã hàng (không phân biệt màu túi/áo).<br>' +
          '   • <b>Ví dụ thực tế (<code>Stl001</code>):</b> Dòng 4 chọn túi đóng gói <code>PAK00000001</code> (<code>Packing name 001</code>) ở chế độ <code>COMMON</code> — dù sản xuất màu <code>Black-001</code> hay <code>White-001</code> đều dùng chung mã bao bì này.<br><br>' +
          '2. <b>Chế độ <code>COLOR</code> (Ô checkbox đang TICK <code>☑</code>):</b><br>' +
          '   • Dòng vật tư tự động <b>tách thành nhiều dòng con theo từng màu</b> sản phẩm (VD: <code>Black-001</code>, <code>White-001</code>).<br>' +
          '   • <b>Ý nghĩa:</b> Cho phép chọn <b>mã vật tư (<code>R/M CODE</code>) khác nhau cho từng màu</b> sản phẩm.<br>' +
          '   • <b>Ví dụ thực tế (<code>Stl001</code>):</b> Dòng 1 ở chế độ <code>COLOR</code> — màu <code>Black-001</code> dùng vải <code>FAB00000001</code>, còn màu <code>White-001</code> dùng vải <code>FAB00000002</code>.<br><br>' +
          '3. <b>Cách chuyển đổi qua lại giữa <code>COMMON</code> và <code>COLOR</code>:</b><br>' +
          '   • <b>Từ <code>COMMON</code> ➔ <code>COLOR</code>:</b> Click tick vào ô checkbox cạnh chữ <code>COMMON</code> ➔ Xác nhận <i>"Are you sure switch from COMMON to COLOR??"</i> ➔ Dòng sẽ tách ra từng màu.<br>' +
          '   • <b>Từ <code>COLOR</code> ➔ <code>COMMON</code>:</b> Click bỏ tick ô checkbox ở dòng màu đầu tiên (VD: <code>Black-001</code>) ➔ Xác nhận <i>"Are you sure switch from COLOR to COMMON??"</i> ➔ Các dòng màu sẽ gộp lại thành 1 dòng <code>COMMON</code>.',
        chips: ['Tiêu đề cột màn hình BOM List và BOM Manage', 'Hướng dẫn Bom › Manage', 'Nhấn GENERATE NEW BOM không thấy khách hàng hoặc style']
      }
    ];

const KB_I18N = {
  "all-pages-overview": {
    "extra_kw": [
      "overview",
      "all pages",
      "19 pages",
      "menu",
      "what is each page for",
      "system pages",
      "전체 화면",
      "19개 메뉴",
      "페이지 설명",
      "메뉴 구조",
      "화면 개요"
    ],
    "en": {
      "title": "Overview & Purpose of All 19 Pages in SINGLE 2 MRP",
      "answer": "<b>📘 OVERVIEW OF ALL 19 SYSTEM PAGES (BY MENU):</b><br><br>\n<b>1. CONTRACT STATUS (Sales & Finished Goods):</b><br>\n• <code>Active</code>: Create customer Contracts, POs, Styles, Colors, Quantities, Labor/FOB prices, and link BOMs.<br>\n• <code>Archive</code> / <code>Deleted</code>: View completed or deleted contracts.<br>\n• <code>Shipment</code>: Record Finished Goods <code>PACKED</code>, <code>PHYSICAL</code> inventory check, and daily <code>SHIPPED</code> quantities.<br>\n• <code>Stock</code>: View-only summary report of Finished Goods stock.<br><br>\n<b>2. BOM DATA (Technical Bill of Materials):</b><br>\n• <code>List</code>: Create new BOMs (<code>+ Create new BOM</code>), <code>COPY</code> from existing BOMs, or <code>LOCK/UNLOCK</code>.<br>\n• <code>Manage</code>: Enter Colors, Material Groups, Raw Material Codes (<code>SEL</code>), and Cut Parts (<code>L × W</code>) to calculate consumption per 1 pc.<br><br>\n<b>3. INVENTORY CONTROL (Purchasing & Warehouse):</b><br>\n• <code>Material Master</code>: Declare master Raw Materials (Supplier, Category, MA#, Unit Price, Currency, Spec).<br>\n• <code>Purchase Order</code>: Calculate MRP needs, set Loss %, click <code>MAKE PO</code>, and change Status from <code>STANDBY</code> ➔ <code>ORDERED</code>.<br>\n• <code>Mat PO status</code>: View-only tracking of issued POs (Order vs W/H In vs Balance).<br>\n• <code>Income status</code>: Upload Excel receiving slips & click <code>✔ APPLY INCOME</code>.<br>\n• <code>Outgo status</code>: Upload Excel issue slips & click <code>✔ APPLY OUTGO</code>.<br>\n• <code>Inventory</code>: View real-time stock (<code>IN</code>, <code>IN BALANCE</code>, <code>OUT</code>, <code>INVENTORY</code>) and export Excel.<br><br>\n<b>4. CONFIG & ADMIN:</b><br>\n• <code>Buyer</code>, <code>Matl. supplier</code>, <code>Matl. consignee</code>, <code>Exchange</code>, <code>Code</code> (6 master code tables), <code>Location</code>, <code>Account</code>, <code>Profile</code>.",
      "chips": [
        "End-to-end workflow",
        "How to read statuses",
        "Change PO STANDBY to ORDERED",
        "7 common mistakes"
      ]
    },
    "ko": {
      "title": "SINGLE 2 MRP 시스템 19개 전체 화면 개요 및 용도",
      "answer": "<b>📘 시스템 전체 19개 화면 개요 (메뉴별 정리):</b><br><br>\n<b>1. CONTRACT STATUS (계약 및 완제품 관리):</b><br>\n• <code>Active</code>: 고객 계약(Contract), PO, 스타일(Style), 색상, 수량, 공임/FOB 단가 입력 및 BOM 연결.<br>\n• <code>Archive</code> / <code>Deleted</code>: 완료 또는 삭제된 계약 조회.<br>\n• <code>Shipment</code>: 완제품 포장 수량(<code>PACKED</code>), 실사(<code>PHYSICAL</code>), 일자별 출하(<code>SHIPPED</code>) 입력.<br>\n• <code>Stock</code>: 완제품 재고 현황 조회 및 엑셀 다운로드(조회 전용).<br><br>\n<b>2. BOM DATA (자재 소요량 명세서):</b><br>\n• <code>List</code>: 신규 BOM 생성(<code>+ Create new BOM</code>), 기존 BOM 복사(<code>COPY</code>), 잠금/해제(<code>LOCK/UNLOCK</code>).<br>\n• <code>Manage</code>: 제품 색상, 자재 그룹, 자재 코드(<code>SEL</code>), 재단 부위(<code>L × W</code>) 입력 및 1개당 소요량 자동 계산.<br><br>\n<b>3. INVENTORY CONTROL (구매 및 자재 창고):</b><br>\n• <code>Material Master</code>: 원부자재 마스터 등록(공급업체, 카테고리, MA#, 단가, 통화, 규격).<br>\n• <code>Purchase Order</code>: 소요량 산출, 로스율(Loss %) 입력, <code>MAKE PO</code> 발주 생성 및 상태 <code>STANDBY</code> ➔ <code>ORDERED</code> 변경.<br>\n• <code>Mat PO status</code>: 발주서 진행 현황 조회(발주량 vs 입고량 vs 미입고 잔량).<br>\n• <code>Income status</code>: 엑셀 입고 업로드 및 <code>✔ APPLY INCOME</code> 확정.<br>\n• <code>Outgo status</code>: 엑셀 출고 업로드 및 <code>✔ APPLY OUTGO</code> 확정.<br>\n• <code>Inventory</code>: 실시간 재고 조회(<code>IN</code>, <code>IN BALANCE</code>, <code>OUT</code>, <code>INVENTORY</code>) 및 엑셀 출력.<br><br>\n<b>4. CONFIG & ADMIN:</b><br>\n• <code>Buyer</code>, <code>Matl. supplier</code>, <code>Matl. consignee</code>, <code>Exchange</code>, <code>Code</code>(6개 기초 코드표), <code>Location</code>, <code>Account</code>, <code>Profile</code>.",
      "chips": [
        "전체 업무 흐름 안내",
        "시스템 상태값 읽는 법",
        "PO STANDBY에서 ORDERED 변경",
        "자주 발생하는 실수 7가지"
      ]
    }
  },
  "status-reading-guide": {
    "extra_kw": [
      "status",
      "standby",
      "ordered",
      "match",
      "not match",
      "locked",
      "color meaning",
      "red text",
      "상태",
      "스탠바이",
      "오더드",
      "매치",
      "잠금",
      "빨간 글씨"
    ],
    "en": {
      "title": "How to Read System Statuses & Warning Colors",
      "answer": "<b>🚦 GUIDE TO SYSTEM STATUSES & COLORS:</b><br><br>\n1. <b>Purchase Order Status (<code>STATUS</code>):</b><br>\n• <code>STANDBY</code>: Newly created PO (draft/pending). <b>Cannot be received in Income status</b> and does not show in Inventory <code>IN BALANCE</code>.<br>\n• <code>ORDERED</code>: Official confirmed PO sent to Supplier. Appears in <code>IN BALANCE</code> and allows Excel receiving in <code>Income status</code>.<br><br>\n2. <b>BOM Match Status (in <code>Contract › Active</code>):</b><br>\n• <span style=\"color:#10b981;font-weight:700;\">Green (Match)</span>: Contract Buyer + Style + Color matches an existing BOM.<br>\n• <span style=\"color:#ef4444;font-weight:700;\">Red (Not match)</span>: Missing BOM for that Buyer/Style/Color ➔ Contract will NOT appear in <code>Purchase Order</code> until fixed.<br><br>\n3. <b>BOM Lock Status (in <code>Bom › List</code>):</b><br>\n• <code>Unlocked</code>: Editable in <code>Bom › Manage</code>.<br>\n• <code>Locked</code>: Protected from accidental edits (click <code>UNLOCK</code> to edit again).<br><br>\n4. <b>Red Numbers in <code>Purchase Order</code> (<code>CONS.(BOM)(AFTER)</code>):</b><br>\n• Indicates the BOM was updated after the contract/PO was loaded. Tick the checkbox and click green <code>UPDATE</code> to sync the latest BOM consumption.",
      "chips": [
        "Change PO STANDBY to ORDERED",
        "Why red numbers appear",
        "Contract missing in PO"
      ]
    },
    "ko": {
      "title": "시스템 상태값 및 경고 색상 읽는 법",
      "answer": "<b>🚦 시스템 주요 상태값 및 색상 안내:</b><br><br>\n1. <b>발주서 상태 (<code>STATUS</code>):</b><br>\n• <code>STANDBY</code>: <code>MAKE PO</code> 직후의 대기 상태입니다. <b>이 상태에서는 입고(<code>Income status</code>)가 불가</b>하며 재고의 <code>IN BALANCE</code>에도 표시되지 않습니다.<br>\n• <code>ORDERED</code>: 공급업체에 확정 발주된 상태입니다. <code>IN BALANCE</code>에 반영되며 입고 처리가 가능해집니다.<br><br>\n2. <b>BOM 매칭 상태 (<code>Contract › Active</code>):</b><br>\n• <span style=\"color:#10b981;font-weight:700;\">초록색 (Match)</span>: 계약의 Buyer + Style + Color에 맞는 BOM이 정상 연결됨.<br>\n• <span style=\"color:#ef4444;font-weight:700;\">빨간색 (Not match)</span>: 일치하는 BOM이 없음 ➔ <code>Purchase Order</code>의 계약 목록에 나타나지 않습니다.<br><br>\n3. <b>BOM 잠금 상태 (<code>Bom › List</code>):</b><br>\n• <code>Unlocked</code>: 수정 가능 / <code>Locked</code>: 오수정 방지 잠금 상태 (수정 시 <code>UNLOCK</code> 클릭).<br><br>\n4. <b><code>Purchase Order</code>의 빨간 숫자 (<code>CONS.(BOM)(AFTER)</code>):</b><br>\n• BOM 소요량이 변경되었음을 뜻합니다. 체크박스를 선택하고 초록색 <code>UPDATE</code> 버튼을 눌러 최신 소요량으로 반영하세요.",
      "chips": [
        "PO STANDBY에서 ORDERED 변경",
        "빨간 숫자 의미",
        "PO 화면에 계약이 안 보일 때"
      ]
    }
  },
  "status-cont-na-assigned": {
    "extra_kw": [
      "cont.",
      "n/a",
      "assigned",
      "inventory columns",
      "stock breakdown",
      "계약 재고",
      "미지정 재고",
      "할당 재고"
    ],
    "en": {
      "title": "Difference Between CONT., N/A, and ASSIGNED in Inventory",
      "answer": "<b>📦 MEANING OF <code>CONT.</code>, <code>N/A</code> &amp; <code>ASSIGNED</code>:</b><br><br>\n• <b><code>CONT.</code> (Contract Stock):</b> Materials ordered/received specifically for a Contract #.<br>\n• <b><code>N/A</code> (Free / Non-Contract Stock):</b> Buffer stock purchased without a specific Contract #.<br>\n• <b><code>ASSIGNED</code> (Allocated Stock):</b> Stock from <code>N/A</code> or surplus that has been reserved/assigned to a Contract in <code>Purchase Order</code> (via the <code>② ASSIGN</code> column) to reduce new purchasing quantity.<br>\n• <b><code>TOTAL</code>:</b> Sum of <code>CONT. + ASSIGNED + N/A</code>.",
      "chips": [
        "Inventory table columns",
        "Purchase Order columns"
      ]
    },
    "ko": {
      "title": "Inventory의 CONT., N/A, ASSIGNED 구분",
      "answer": "<b>📦 <code>CONT.</code>, <code>N/A</code>, <code>ASSIGNED</code> 의미:</b><br><br>\n• <b><code>CONT.</code> (계약 재고):</b> 특정 계약번호(Contract #)에 귀속되어 발주/입고된 자재 수량.<br>\n• <b><code>N/A</code> (비계약/자유 재고):</b> 특정 계약 없이 여유분으로 구매·입고된 자재 수량.<br>\n• <b><code>ASSIGNED</code> (할당 재고):</b> <code>Purchase Order</code>의 <code>② ASSIGN</code> 컬럼을 통해 기존 여유 재고에서 특정 계약으로 배정(할당)한 수량.<br>\n• <b><code>TOTAL</code>:</b> <code>CONT. + ASSIGNED + N/A</code> 합계.",
      "chips": [
        "Inventory 컬럼 설명",
        "Purchase Order 컬럼 설명"
      ]
    }
  },
  "columns-purchase-order": {
    "extra_kw": [
      "purchase order columns",
      "loss %",
      "make po",
      "cons.(loss)",
      "order qty",
      "rm eta",
      "발주 화면 컬럼",
      "컬럼 설명",
      "로스율"
    ],
    "en": {
      "title": "Column Guide: Inventory Control › Purchase Order",
      "answer": "<b>📊 PURCHASE ORDER TABLE COLUMNS:</b><br><br>\n• <b><code>MATERIAL INFORMATION</code>:</b> <code>SOURCE</code>, <code>ADD/DEL</code>, <code>SUPPLIER</code> (tick &amp; click <code>MAKE PO</code>), <code>GROUP</code>, <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>.<br>\n• <b><code>Ⓑ BOM CONSUMPTION</code>:</b> <code>① CONS.(BOM)(BEFORE)</code> (original BOM qty), <code>CONS.(BOM)(AFTER)</code> (red = BOM changed, click <code>UPDATE</code>), <code>UNIT</code>, <code>② LOSS %</code> (wastage %), <code>③ CONS.(LOSS)</code> (= ① + ②).<br>\n• <b><code>Ⓒ GLOBAL PO QTY</code> &amp; <code>INVENTORY</code>:</b> Total demand, ordered qty, and current stock.<br>\n• <b><code>Ⓔ MATERIAL PURCHASE ORDER</code>:</b> <code>① ORDER QTY</code> (actual order), <code>② ASSIGN</code> (use from stock), <code>③ UNIT PRICE</code>, <code>CURRENCY</code>, <code>AMOUNT</code>, <code>CONSIGNEE</code>, <code>RM PO DATE</code>, <code>RM ETA</code>.<br>\n• <b><code>Ⓕ DELIVERY</code> &amp; <code>STATUS</code>:</b> <code>① IN</code> (received), <code>BAL</code> (remaining), and <b><code>STATUS</code></b> (must switch <code>STANDBY</code> ➔ <code>ORDERED</code>!).",
      "chips": [
        "Change PO STANDBY to ORDERED",
        "MAKE PO vs ADD",
        "Why red numbers appear"
      ]
    },
    "ko": {
      "title": "Purchase Order 화면 컬럼 상세 설명",
      "answer": "<b>📊 PURCHASE ORDER 주요 컬럼 설명:</b><br><br>\n• <b><code>MATERIAL INFORMATION</code>:</b> <code>SOURCE</code>, <code>ADD/DEL</code>, <code>SUPPLIER</code>(체크 후 <code>MAKE PO</code> 클릭), <code>GROUP</code>, <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>.<br>\n• <b><code>Ⓑ BOM CONSUMPTION</code>:</b> <code>① CONS.(BOM)(BEFORE)</code>, <code>CONS.(BOM)(AFTER)</code>(빨간색이면 BOM 변경됨 → <code>UPDATE</code> 클릭), <code>UNIT</code>, <code>② LOSS %</code>(로스율), <code>③ CONS.(LOSS)</code>.<br>\n• <b><code>Ⓒ GLOBAL PO QTY</code> &amp; <code>INVENTORY</code>:</b> 전체 소요량, 기발주량 및 보유 재고.<br>\n• <b><code>Ⓔ MATERIAL PURCHASE ORDER</code>:</b> <code>① ORDER QTY</code>(실발주량), <code>② ASSIGN</code>(재고충당), <code>③ UNIT PRICE</code>(단가), <code>CURRENCY</code>, <code>AMOUNT</code>, <code>CONSIGNEE</code>, <code>RM PO DATE</code>, <code>RM ETA</code>.<br>\n• <b><code>Ⓕ DELIVERY</code> &amp; <code>STATUS</code>:</b> <code>① IN</code>(입고량), <code>BAL</code>(잔량), <b><code>STATUS</code></b>(반드시 <code>STANDBY</code> ➔ <code>ORDERED</code> 변경 필요).",
      "chips": [
        "PO STANDBY에서 ORDERED 변경",
        "MAKE PO와 ADD 차이",
        "빨간 숫자 의미"
      ]
    }
  },
  "columns-contract-active": {
    "extra_kw": [
      "contract columns",
      "active columns",
      "fob",
      "labor cost",
      "po qty",
      "계약 화면 컬럼",
      "계약서 컬럼"
    ],
    "en": {
      "title": "Column Guide: Contract Status › Active",
      "answer": "<b>📊 CONTRACT › ACTIVE COLUMNS:</b><br><br>\n• <code>CONTRACT #</code>: Master contract number (click <code>✎</code> to edit).<br>\n• <code>BUYER</code>: Customer name.<br>\n• <code>PO #</code>, <code>PO DATE</code>, <code>SHIP DATE</code>: Customer purchase order number &amp; target shipment date.<br>\n• <code>STYLE CODE</code>, <code>COLOR</code>, <code>PO QTY</code>: Garment style, colorways, and order quantity.<br>\n• <code>LABOR COST</code> / <code>FOB</code>: CM/labor price and FOB selling unit price.<br>\n• <code>BOM</code>: Green <code>Match</code> (linked) or Red <code>Not match</code> (missing BOM).",
      "chips": [
        "Contract missing in PO",
        "How to read statuses"
      ]
    },
    "ko": {
      "title": "Contract Status › Active 화면 컬럼 설명",
      "answer": "<b>📊 CONTRACT › ACTIVE 주요 컬럼:</b><br><br>\n• <code>CONTRACT #</code>: 마스터 계약 번호 (<code>✎</code> 클릭 시 수정 가능).<br>\n• <code>BUYER</code>: 고객사.<br>\n• <code>PO #</code>, <code>PO DATE</code>, <code>SHIP DATE</code>: 고객 발주번호 및 선적 예정일.<br>\n• <code>STYLE CODE</code>, <code>COLOR</code>, <code>PO QTY</code>: 스타일 코드, 색상, 주문 수량.<br>\n• <code>LABOR COST</code> / <code>FOB</code>: 임가공 단가 및 FOB 판매 단가.<br>\n• <code>BOM</code>: 초록색 <code>Match</code>(연결 완료) 또는 빨간색 <code>Not match</code>(BOM 미등록).",
      "chips": [
        "PO 화면에 계약이 안 보일 때",
        "시스템 상태값 읽는 법"
      ]
    }
  },
  "columns-shipment-stock": {
    "extra_kw": [
      "shipment columns",
      "stock columns",
      "packed",
      "shipped",
      "physical",
      "선적 컬럼",
      "완제품 재고 컬럼"
    ],
    "en": {
      "title": "Column Guide: Shipment & Stock (Finished Goods)",
      "answer": "<b>📊 SHIPMENT &amp; STOCK COLUMNS:</b><br><br>\n• <code>① PO QTY</code>: Total contracted order quantity.<br>\n• <code>② PACKED</code>: Quantity packed into cartons (click <code>✎</code> to enter by date).<br>\n• <code>③ SHIPPED</code>: Quantity shipped out to customer (use <code>ADD</code> button + <code>SET</code> checkbox).<br>\n• <code>④ PHYSICAL</code>: Actual physical warehouse count (click <code>✎</code> to update).<br>\n• <code>STOCK / BALANCE</code>: Remaining packed or unshipped stock calculated automatically on the <code>Stock</code> page.",
      "chips": [
        "Shipment & Stock formula",
        "End-to-end workflow"
      ]
    },
    "ko": {
      "title": "Shipment 및 Stock (완제품) 화면 컬럼 설명",
      "answer": "<b>📊 SHIPMENT &amp; STOCK 주요 컬럼:</b><br><br>\n• <code>① PO QTY</code>: 계약 총 주문 수량.<br>\n• <code>② PACKED</code>: 포장 완료 수량 (<code>✎</code> 클릭하여 일자별 입력).<br>\n• <code>③ SHIPPED</code>: 고객에게 실제 선적·출하한 수량 (<code>ADD</code> 버튼 + <code>SET</code> 체크 후 저장).<br>\n• <code>④ PHYSICAL</code>: 창고 실사 수량 (<code>✎</code> 클릭하여 입력).<br>\n• <code>STOCK / BALANCE</code>: <code>Stock</code> 화면에서 자동 집계되는 완제품 잔고 수량.",
      "chips": [
        "Shipment 및 Stock 계산 공식",
        "전체 업무 흐름 안내"
      ]
    }
  },
  "columns-bom-list-manage": {
    "extra_kw": [
      "bom columns",
      "bom list",
      "bom manage",
      "piece name",
      "l x w",
      "bom 컬럼",
      "소요량 계산"
    ],
    "en": {
      "title": "Column Guide: BOM Data › List & Manage",
      "answer": "<b>📊 BOM LIST &amp; MANAGE COLUMNS:</b><br><br>\n• <b>BOM List:</b> <code>BUYER</code>, <code>STYLE CODE</code>, <code>REVISION</code> (e.g. <code>v0.1</code>), <code>LOCK</code> status, and action buttons (<code>MANAGE</code>, <code>COPY</code>).<br>\n• <b>BOM Manage:</b> <code>GROUP</code> (<code>Group#1</code>...), <code>COLOR CODE</code> (garment color or <code>COMMON</code>), <code>R/M CODE</code> (click <code>SEL</code> to pick from Material Master), <code>PART &gt; PIECE NAME</code>, and dimensions <code>L</code> × <code>W</code> to compute net consumption per 1 unit.",
      "chips": [
        "Missing Buyer or Style in GENERATE NEW BOM",
        "BOM Manage step-by-step"
      ]
    },
    "ko": {
      "title": "BOM Data › List & Manage 컬럼 설명",
      "answer": "<b>📊 BOM LIST &amp; MANAGE 주요 컬럼:</b><br><br>\n• <b>BOM List:</b> <code>BUYER</code>, <code>STYLE CODE</code>, <code>REVISION</code>(예: <code>v0.1</code>), <code>LOCK</code> 잠금 여부, 작업 버튼(<code>MANAGE</code>, <code>COPY</code>).<br>\n• <b>BOM Manage:</b> <code>GROUP</code>(<code>Group#1</code>...), <code>COLOR CODE</code>(제품 색상 또는 공용 <code>COMMON</code>), <code>R/M CODE</code>(<code>SEL</code> 버튼으로 자재 마스터에서 선택), <code>PART &gt; PIECE NAME</code> 및 치수 <code>L</code> × <code>W</code>(1개당 소요량 자동 산출).",
      "chips": [
        "BOM 생성 시 바이어/스타일이 안 보일 때",
        "BOM Manage 입력 방법"
      ]
    }
  },
  "columns-material-master": {
    "extra_kw": [
      "material master columns",
      "ma #",
      "spec",
      "r/m code",
      "자재 마스터 컬럼"
    ],
    "en": {
      "title": "Column Guide: Material Master",
      "answer": "<b>📊 MATERIAL MASTER COLUMNS:</b><br><br>\n• <code>CODE</code>: Auto-generated material code (<code>FAB00000001</code>, <code>MES00000001</code>, <code>PAK00000001</code>).<br>\n• <code>CATEGORY</code>: Material group (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>\n• <code>SUPPLIER</code>, <code>MA #</code>, <code>NAME</code>, <code>COLOR</code>, <code>SPECIFICATION</code>, <code>UNIT</code>, <code>UNIT PRICE</code>, <code>CURRENCY</code>.",
      "chips": [
        "Config Code 6 tables",
        "End-to-end workflow"
      ]
    },
    "ko": {
      "title": "Material Master 화면 컬럼 설명",
      "answer": "<b>📊 MATERIAL MASTER 주요 컬럼:</b><br><br>\n• <code>CODE</code>: 시스템 자동 채번 자재코드 (<code>FAB00000001</code>, <code>MES00000001</code>, <code>PAK00000001</code>).<br>\n• <code>CATEGORY</code>: 자재 그룹 (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>\n• <code>SUPPLIER</code>(공급사), <code>MA #</code>, <code>NAME</code>(자재명), <code>COLOR</code>(색상), <code>SPECIFICATION</code>(규격), <code>UNIT</code>(단위), <code>UNIT PRICE</code>(단가), <code>CURRENCY</code>(통화).",
      "chips": [
        "Config Code 6개 코드표",
        "전체 업무 흐름 안내"
      ]
    }
  },
  "columns-mat-po-status": {
    "extra_kw": [
      "mat po status columns",
      "w/h in",
      "balance",
      "발주 현황 컬럼"
    ],
    "en": {
      "title": "Column Guide: Mat PO status",
      "answer": "<b>📊 MAT PO STATUS COLUMNS (View-Only):</b><br><br>\n• <code>MATL PO #</code>: Material PO number (<code>PO-R-YYMMDD-XXX</code>).<br>\n• <code>STATUS</code>: <code>STANDBY</code> or <code>ORDERED</code>.<br>\n• <code>SUPPLIER</code>, <code>CONTRACT #</code>, <code>AMOUNT</code> (total PO value).<br>\n• <code>① ORDER</code> (ordered qty), <code>② W/H IN</code> (received into warehouse), <code>①-② BALANCE</code> (undelivered balance).",
      "chips": [
        "Change PO STANDBY to ORDERED",
        "Purchase Order columns"
      ]
    },
    "ko": {
      "title": "Mat PO status 화면 컬럼 설명",
      "answer": "<b>📊 MAT PO STATUS 주요 컬럼 (조회 전용):</b><br><br>\n• <code>MATL PO #</code>: 발주번호 (<code>PO-R-YYMMDD-XXX</code>).<br>\n• <code>STATUS</code>: <code>STANDBY</code> 또는 <code>ORDERED</code>.<br>\n• <code>SUPPLIER</code>(공급사), <code>CONTRACT #</code>, <code>AMOUNT</code>(발주 총액).<br>\n• <code>① ORDER</code>(총 발주량), <code>② W/H IN</code>(창고 입고 완료량), <code>①-② BALANCE</code>(미입고 잔량).",
      "chips": [
        "PO STANDBY에서 ORDERED 변경",
        "Purchase Order 컬럼 설명"
      ]
    }
  },
  "columns-inventory": {
    "extra_kw": [
      "inventory columns",
      "in balance",
      "physical inventory",
      "재고 컬럼"
    ],
    "en": {
      "title": "Column Guide: Inventory",
      "answer": "<b>📊 INVENTORY COLUMNS (View-Only):</b><br><br>\n• <code>MATERIAL INFORMATION</code>: <code>GROUP</code>, <code>MATERIAL CODE</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>, <code>UNIT</code>.<br>\n• <code>IN</code>: Total received into warehouse (<code>CONT.</code> / <code>N/A</code> / <code>TOTAL</code>).<br>\n• <code>IN BALANCE</code>: Ordered (<code>ORDERED</code>) qty still pending delivery from Supplier.<br>\n• <code>OUT</code>: Total issued out to production.<br>\n• <code>INVENTORY</code>: Current available stock.<br>\n• <code>HISTORY</code> button: View item-level In/Out transaction ledger.",
      "chips": [
        "Why Inventory looks empty (NOT ZERO)",
        "CONT., N/A, ASSIGNED meaning"
      ]
    },
    "ko": {
      "title": "Inventory 화면 컬럼 설명",
      "answer": "<b>📊 INVENTORY 주요 컬럼 (조회 전용):</b><br><br>\n• <code>MATERIAL INFORMATION</code>: <code>GROUP</code>, <code>MATERIAL CODE</code>, <code>NAME</code>, <code>SPECIFICATION</code>, <code>COLOR</code>, <code>UNIT</code>.<br>\n• <code>IN</code>: 총 입고 수량.<br>\n• <code>IN BALANCE</code>: <code>ORDERED</code> 발주 중 아직 미입고된 대기 수량.<br>\n• <code>OUT</code>: 생산 현장 등으로 총 출고된 수량.<br>\n• <code>INVENTORY</code>: 현재 가용 재고 수량.<br>\n• <code>HISTORY</code> 버튼: 해당 자재의 입출고 이력 카드 조회.",
      "chips": [
        "Inventory가 비어 보일 때 (NOT ZERO)",
        "CONT., N/A, ASSIGNED 구분"
      ]
    }
  },
  "columns-income-outgo": {
    "extra_kw": [
      "income columns",
      "outgo columns",
      "date-no",
      "inspection",
      "debit",
      "입고 컬럼",
      "출고 컬럼"
    ],
    "en": {
      "title": "Column Guide: Income status & Outgo status",
      "answer": "<b>📊 INCOME &amp; OUTGO EXCEL COLUMNS:</b><br><br>\n• <b>Income status (16 cols):</b> <code>DATE-NO</code> (<code>YYYY/MM/DD-SN</code>), <code>SUPPLIER</code>, <code>LOCATION</code>, <code>CONTRACT #</code>, <code>MATL PO #</code> (auto-matched), <code>CODE</code>, <code>NAME</code>, <code>QTY</code>, <code>UNIT</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>CURRENCY</code>, <code>BUYER</code>, <code>DEBIT</code>, <code>MA #</code>, <code>INSPECTION</code> (<code>YYYY.MM.DD</code>).<br>\n• <b>Outgo status (18 cols):</b> <code>DATE-NO</code> (2-digit year <code>YY/MM/DD-SN</code>), <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>COLOR</code>, <code>QTY</code>, <code>UNIT</code>, <code>CONTRACT #</code>, <code>SUPPLIER</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>ITEM NAME</code>, <code>BUYER</code>, <code>BUYER PO</code>, <code>REMARK / INV NO.</code>, <code>MA NO.</code>, <code>FROM</code>, <code>TO</code>.",
      "chips": [
        "Decode EFM, ECD, ECT errors",
        "End-to-end workflow"
      ]
    },
    "ko": {
      "title": "Income status 및 Outgo status 엑셀 컬럼 설명",
      "answer": "<b>📊 INCOME &amp; OUTGO 엑셀 컬럼 구조:</b><br><br>\n• <b>Income status (16개 컬럼):</b> <code>DATE-NO</code>(<code>YYYY/MM/DD-SN</code>), <code>SUPPLIER</code>, <code>LOCATION</code>, <code>CONTRACT #</code>, <code>MATL PO #</code>(자동 매칭), <code>CODE</code>, <code>NAME</code>, <code>QTY</code>, <code>UNIT</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>CURRENCY</code>, <code>BUYER</code>, <code>DEBIT</code>, <code>MA #</code>, <code>INSPECTION</code>(<code>YYYY.MM.DD</code>).<br>\n• <b>Outgo status (18개 컬럼):</b> <code>DATE-NO</code>(연도 2자리 <code>YY/MM/DD-SN</code>), <code>CODE</code>, <code>MA #</code>, <code>NAME</code>, <code>COLOR</code>, <code>QTY</code>, <code>UNIT</code>, <code>CONTRACT #</code>, <code>SUPPLIER</code>, <code>PRICE</code>, <code>AMOUNT</code>, <code>ITEM NAME</code>, <code>BUYER</code>, <code>BUYER PO</code>, <code>REMARK / INV NO.</code>, <code>MA NO.</code>, <code>FROM</code>, <code>TO</code>.",
      "chips": [
        "EFM, ECD, ECT 에러 코드 해석",
        "전체 업무 흐름 안내"
      ]
    }
  },
  "full-workflow-guide": {
    "extra_kw": [
      "full workflow",
      "end to end",
      "step by step",
      "order of operations",
      "전체 흐름",
      "업무 순서",
      "처음부터 끝까지"
    ],
    "en": {
      "title": "End-to-End MRP Operational Workflow (Step 1 to Step 8)",
      "answer": "<b>🔄 COMPLETE END-TO-END MRP WORKFLOW:</b><br><br>\n1. <b><code>CONFIG</code>:</b> Set up Buyers, Suppliers, Consignees, Exchange rates, Codes (6 tables), and Warehouse Locations.<br>\n2. <b><code>Material Master</code>:</b> Register all Raw Materials.<br>\n3. <b><code>BOM Data › List &amp; Manage</code>:</b> Create BOM for Buyer + Style, add Colors, select Materials, enter cut sizes.<br>\n4. <b><code>Contract Status › Active</code>:</b> Create Contract, PO #, Style, Colors, Quantities, and confirm green <code>Match</code> BOM.<br>\n5. <b><code>Purchase Order</code>:</b> Select Contract ➔ enter Loss % ➔ tick Supplier ➔ <code>MAKE PO</code> ➔ <b>change <code>STANDBY</code> ➔ <code>ORDERED</code></b>.<br>\n6. <b><code>Income status</code>:</b> Download <code>TEMPLATE</code>, fill received items, <code>UPLOAD EXCEL</code> (verify <code>ERROR: 0</code>), click <code>✔ APPLY INCOME</code>.<br>\n7. <b><code>Outgo status</code> &amp; <code>Inventory</code>:</b> Issue materials to factory via Excel (<code>✔ APPLY OUTGO</code>) and monitor live stock in <code>Inventory</code>.<br>\n8. <b><code>Shipment</code> &amp; <code>Stock</code>:</b> Enter Finished Goods <code>PACKED</code>, <code>PHYSICAL</code>, and <code>SHIPPED</code>, then check <code>Stock</code>.",
      "chips": [
        "Change PO STANDBY to ORDERED",
        "7 common mistakes",
        "Missing Buyer or Style in GENERATE NEW BOM"
      ]
    },
    "ko": {
      "title": "MRP 전체 업무 프로세스 (1단계 ~ 8단계)",
      "answer": "<b>🔄 MRP 처음부터 끝까지 표준 업무 순서:</b><br><br>\n1. <b><code>CONFIG</code>:</b> 바이어, 공급사, 수하인(Consignee), 환율, 기초 코드(6개 표), 창고 위치(Location) 등록.<br>\n2. <b><code>Material Master</code>:</b> 원부자재 마스터 등록.<br>\n3. <b><code>BOM Data › List &amp; Manage</code>:</b> Buyer + Style 기준 BOM 생성 후 색상·자재·치수 입력.<br>\n4. <b><code>Contract Status › Active</code>:</b> 계약 및 PO, 스타일, 수량 입력 후 BOM 초록색 <code>Match</code> 확인.<br>\n5. <b><code>Purchase Order</code>:</b> 계약 선택 ➔ Loss % 입력 ➔ 공급사 체크 후 <code>MAKE PO</code> ➔ <b><code>STATUS</code>를 <code>STANDBY</code> ➔ <code>ORDERED</code>로 변경</b>.<br>\n6. <b><code>Income status</code>:</b> <code>TEMPLATE</code> 다운로드 후 입고 내역 작성 ➔ <code>UPLOAD EXCEL</code>(<code>ERROR: 0</code> 확인) ➔ <code>✔ APPLY INCOME</code>.<br>\n7. <b><code>Outgo status</code> &amp; <code>Inventory</code>:</b> 현장 불출 엑셀 업로드(<code>✔ APPLY OUTGO</code>) 및 <code>Inventory</code>에서 실시간 재고 확인.<br>\n8. <b><code>Shipment</code> &amp; <code>Stock</code>:</b> 완제품 포장(<code>PACKED</code>), 실사(<code>PHYSICAL</code>), 선적(<code>SHIPPED</code>) 입력 후 <code>Stock</code> 조회.",
      "chips": [
        "PO STANDBY에서 ORDERED 변경",
        "자주 발생하는 실수 7가지",
        "BOM 생성 시 바이어/스타일이 안 보일 때"
      ]
    }
  },
  "po-status-standby-to-ordered": {
    "extra_kw": [
      "standby to ordered",
      "cannot income",
      "po not found",
      "발주 확정",
      "입고 안됨",
      "스탠바이"
    ],
    "en": {
      "title": "Why You Must Change PO Status from STANDBY to ORDERED",
      "answer": "<b>⚠️ MANDATORY STEP AFTER <code>MAKE PO</code>:</b><br><br>\nWhen you click <code>MAKE PO</code>, the system creates the PO in <b><code>STANDBY</code></b> (draft/pending) status.<br>\n1. Scroll horizontally to the far right of <code>Purchase Order</code> to the <b><code>STATUS</code></b> column.<br>\n2. Click <b><code>STANDBY</code></b> (or the green <code>INFO</code> button), switch it to <b><code>ORDERED</code></b>, and click <b><code>APPLY</code></b>.<br><br>\n👉 Only after switching to <code>ORDERED</code> will the order appear in <code>Inventory › IN BALANCE</code> and be accepted when uploading Excel in <code>Income status</code>!",
      "chips": [
        "Purchase Order columns",
        "Decode EFM, ECD, ECT errors"
      ]
    },
    "ko": {
      "title": "PO 상태를 STANDBY에서 ORDERED로 변경해야 하는 이유",
      "answer": "<b>⚠️ <code>MAKE PO</code> 후 필수 작업:</b><br><br>\n<code>MAKE PO</code>를 누르면 발주서 기본 상태가 <b><code>STANDBY</code></b>(대기)로 생성됩니다.<br>\n1. <code>Purchase Order</code> 테이블 맨 오른쪽 <b><code>STATUS</code></b> 컬럼으로 스크롤합니다.<br>\n2. <b><code>STANDBY</code></b>(또는 초록색 <code>INFO</code> 버튼)를 클릭해 <b><code>ORDERED</code></b>로 변경하고 <b><code>APPLY</code></b>를 누르세요.<br><br>\n👉 <code>ORDERED</code>로 변경해야만 <code>Inventory</code>의 <code>IN BALANCE</code>에 잡히고, <code>Income status</code> 엑셀 입고 시 정상 인식됩니다!",
      "chips": [
        "Purchase Order 컬럼 설명",
        "EFM, ECD, ECT 에러 코드 해석"
      ]
    }
  },
  "make-po-vs-add": {
    "extra_kw": [
      "make po vs add",
      "merge po",
      "add button",
      "make po와 add 차이",
      "발주 병합"
    ],
    "en": {
      "title": "Difference Between MAKE PO and ADD",
      "answer": "<b>🔀 <code>MAKE PO</code> vs <code>ADD</code> IN PURCHASE ORDER:</b><br><br>\n• <b><code>MAKE PO</code>:</b> Tick one or more material rows of the <b>same Supplier</b> and click <code>MAKE PO</code> to generate a <b>brand-new PO number</b> (<code>PO-R-YYMMDD-XXX</code>).<br>\n• <b><code>ADD</code>:</b> Click <code>ADD</code> (in the <code>ADD / DEL</code> column) to <b>append/merge</b> an extra material row into an <b>already existing PO</b>.",
      "chips": [
        "Change PO STANDBY to ORDERED",
        "Purchase Order columns"
      ]
    },
    "ko": {
      "title": "MAKE PO와 ADD 버튼의 차이점",
      "answer": "<b>🔀 <code>MAKE PO</code> vs <code>ADD</code> 비교:</b><br><br>\n• <b><code>MAKE PO</code>:</b> <b>동일한 공급업체(Supplier)</b> 자재들을 체크한 뒤 클릭하면 <b>새로운 발주번호(<code>PO-R-YYMMDD-XXX</code>)</b>를 신규 생성합니다.<br>\n• <b><code>ADD</code>:</b> <code>ADD / DEL</code> 컬럼의 <code>ADD</code> 버튼을 누르면 추가 자재를 <b>이미 생성된 기존 PO 번호에 병합</b>할 수 있습니다.",
      "chips": [
        "PO STANDBY에서 ORDERED 변경",
        "Purchase Order 컬럼 설명"
      ]
    }
  },
  "excel-error-codes": {
    "extra_kw": [
      "efm",
      "ecd",
      "ect",
      "wpo",
      "wdf",
      "wcd",
      "excel error",
      "upload error",
      "에러 코드",
      "엑셀 오류",
      "업로드 오류"
    ],
    "en": {
      "title": "Excel Upload Error & Warning Codes (EFM, ECD, ECT, WPO, WDF, WCD)",
      "answer": "<b>🚨 EXCEL UPLOAD ERROR CODES (RED = BLOCKED):</b><br>\n• <b><code>EFM</code> (Format Error):</b> Wrong date or number format. Note: <code>Income</code> uses <code>YYYY/MM/DD-SN</code> &amp; Inspection <code>YYYY.MM.DD</code>, while <code>Outgo</code> uses 2-digit year <code>YY/MM/DD-SN</code>!<br>\n• <b><code>ECD</code> (Code Not Found / Mismatch):</b> Location, Material Code, Unit, Currency, Buyer, or MA# does not match <code>Config</code> / <code>Material Master</code>.<br>\n• <b><code>ECT</code> (Contract Error):</b> Contract # is not Active or Material is not linked to that Contract.<br><br>\n<b>⚠️ WARNING CODES (YELLOW = NON-BLOCKING):</b><br>\n• <b><code>WPO</code>:</b> Price/Currency/Buyer differs from the Material PO (still allows Apply if <code>ERROR: 0</code>).<br>\n• <b><code>WDF</code>:</b> Empty Location/Contract defaulted.<br>\n• <b><code>WCD</code>:</b> Name/Color differs slightly from Material Master.",
      "chips": [
        "Income & Outgo Excel columns",
        "7 common mistakes"
      ]
    },
    "ko": {
      "title": "엑셀 업로드 에러 및 경고 코드 해석 (EFM, ECD, ECT, WPO, WDF, WCD)",
      "answer": "<b>🚨 빨간색 에러 코드 (ERROR - 확정 불가):</b><br>\n• <b><code>EFM</code> (형식 오류):</b> 날짜/숫자 형식 불일치. 주의: <code>Income</code>은 <code>YYYY/MM/DD-SN</code> 및 검사일 <code>YYYY.MM.DD</code>, <code>Outgo</code>는 연도 2자리 <code>YY/MM/DD-SN</code> 형식입니다!<br>\n• <b><code>ECD</code> (코드 불일치/미존재):</b> Location, 자재코드, 단위, 통화, Buyer, MA#가 기초 코드 또는 마스터와 다름.<br>\n• <b><code>ECT</code> (계약 오류):</b> 활성 계약(Active Contract)이 아니거나 해당 계약에 없는 자재임.<br><br>\n<b>⚠️ 노란색 경고 코드 (WARNING - ERROR: 0이면 확정 가능):</b><br>\n• <b><code>WPO</code>:</b> 단가/통화/바이어가 발주서(PO)와 다름.<br>\n• <b><code>WDF</code>:</b> 공란 항목이 기본값으로 처리됨.<br>\n• <b><code>WCD</code>:</b> 자재명/색상이 마스터와 미세하게 다름.",
      "chips": [
        "Income 및 Outgo 엑셀 컬럼 설명",
        "자주 발생하는 실수 7가지"
      ]
    }
  },
  "inventory-empty-not-zero": {
    "extra_kw": [
      "inventory empty",
      "not zero",
      "show all",
      "재고 안 보임",
      "빈 화면"
    ],
    "en": {
      "title": "Why Inventory Looks Empty (NOT ZERO vs SHOW ALL)",
      "answer": "<b>🔍 WHY INVENTORY SHOWS NO ROWS:</b><br><br>\nBy default, the top-left filter on <code>Inventory</code> is set to <b><code>NOT ZERO</code></b>, which hides materials with 0 stock and 0 ordered balance.<br>\n👉 Switch <code>NOT ZERO</code> ➔ <b><code>SHOW ALL</code></b> and click <b><code>🔍 Refresh</code></b> to view 100% of registered materials!",
      "chips": [
        "Inventory table columns",
        "Change PO STANDBY to ORDERED"
      ]
    },
    "ko": {
      "title": "Inventory 화면이 비어 보일 때 (NOT ZERO vs SHOW ALL)",
      "answer": "<b>🔍 재고 목록이 안 보이는 이유:</b><br><br>\n<code>Inventory</code> 화면 좌측 상단 기본 필터가 <b><code>NOT ZERO</code></b>(재고 또는 발주 잔량이 있는 항목만 표시)로 되어 있기 때문입니다.<br>\n👉 <code>NOT ZERO</code>를 <b><code>SHOW ALL</code></b>로 바꾸고 <b><code>🔍 Refresh</code></b>를 누르면 전체 자재가 표시됩니다!",
      "chips": [
        "Inventory 컬럼 설명",
        "PO STANDBY에서 ORDERED 변경"
      ]
    }
  },
  "shipment-stock-formula": {
    "extra_kw": [
      "shipment formula",
      "stock formula",
      "packed shipped",
      "선적 계산",
      "완제품 재고 공식"
    ],
    "en": {
      "title": "Shipment & Stock Calculation Formula",
      "answer": "<b>📐 FINISHED GOODS FORMULAS:</b><br><br>\n• <b>Packed Balance:</b> <code>② PACKED − ③ SHIPPED</code><br>\n• <b>Unshipped Contract Balance:</b> <code>① PO QTY − ③ SHIPPED</code><br>\n• All values entered on <code>Contract Status › Shipment</code> automatically aggregate onto the read-only <code>Contract Status › Stock</code> report.",
      "chips": [
        "Shipment & Stock columns",
        "End-to-end workflow"
      ]
    },
    "ko": {
      "title": "Shipment 및 Stock 완제품 재고 계산 공식",
      "answer": "<b>📐 완제품 수량 계산 기준:</b><br><br>\n• <b>포장 잔고:</b> <code>② PACKED(포장) − ③ SHIPPED(출하)</code><br>\n• <b>미출하 계약 잔량:</b> <code>① PO QTY(주문) − ③ SHIPPED(출하)</code><br>\n• <code>Shipment</code>에서 입력한 값은 <code>Contract Status › Stock</code> 보고서에 실시간 자동 집계됩니다.",
      "chips": [
        "Shipment 및 Stock 컬럼 설명",
        "전체 업무 흐름 안내"
      ]
    }
  },
  "contract-not-in-po": {
    "extra_kw": [
      "contract not in po",
      "cont # missing",
      "not match",
      "계약이 안 보임",
      "po에 계약 없음"
    ],
    "en": {
      "title": "Why a New Contract Does Not Appear in Purchase Order (CONT #)",
      "answer": "<b>🔎 WHY CONTRACT # IS MISSING IN PURCHASE ORDER:</b><br><br>\n1. Open <code>Contract Status › Active</code> and check the <b><code>BOM</code></b> button next to the Style.<br>\n2. If it is <b>Red (<code>Not match</code>)</b>, no BOM matches that exact <code>Buyer + Style code + Color</code>.<br>\n3. Go to <code>BOM DATA › List</code> to create or <code>COPY</code> a BOM for that Buyer/Style, then reopen the Contract and save so <code>BOM</code> turns green <code>Match</code>.",
      "chips": [
        "Missing Buyer or Style in GENERATE NEW BOM",
        "How to read statuses"
      ]
    },
    "ko": {
      "title": "Purchase Order의 CONT # 목록에 계약이 보이지 않는 이유",
      "answer": "<b>🔎 PO 화면에 계약이 안 뜨는 원인:</b><br><br>\n1. <code>Contract Status › Active</code>에서 해당 스타일 옆 <b><code>BOM</code></b> 버튼을 확인하세요.<br>\n2. <b>빨간색(<code>Not match</code>)</b>이면 해당 <code>Buyer + Style + Color</code> 조합의 BOM이 연결되지 않은 상태입니다.<br>\n3. <code>BOM DATA › List</code>에서 해당 바이어/스타일용 BOM을 생성하거나 <code>COPY</code>한 뒤 계약을 다시 저장해 초록색 <code>Match</code>로 만들어야 합니다.",
      "chips": [
        "BOM 생성 시 바이어/스타일이 안 보일 때",
        "시스템 상태값 읽는 법"
      ]
    }
  },
  "bom-manage-guide": {
    "extra_kw": [
      "bom manage guide",
      "add gp",
      "sel button",
      "basic info",
      "bom 입력 방법",
      "소요량 입력"
    ],
    "en": {
      "title": "Step-by-Step Guide: BOM Data › Manage",
      "answer": "<b>📐 HOW TO FILL BOM › MANAGE:</b><br><br>\n1. Click blue <b><code>Basic info</code></b> ➔ ensure Mode is <code>Manage</code> ➔ add product colors in <code>Color option</code> (e.g. <code>Black-001</code>, <code>White-001</code>).<br>\n2. Click <b><code>Add GP</code></b> in the first column header to create <code>Group#1</code>, then click <b><code>+</code></b> to add material rows.<br>\n3. Select <code>COLOR CODE</code> (specific color or <code>COMMON</code>) and click blue <b><code>SEL</code></b> in <code>R/M CODE</code> to pick from <code>Material Master</code>.<br>\n4. On the right side, add cut pieces (<code>Part &gt; Piece</code>) and enter <code>L</code> × <code>W</code> (auto-saved immediately).",
      "chips": [
        "BOM List & Manage columns",
        "Missing Buyer or Style in GENERATE NEW BOM"
      ]
    },
    "ko": {
      "title": "BOM Data › Manage 상세 입력 방법",
      "answer": "<b>📐 BOM › MANAGE 입력 순서:</b><br><br>\n1. 상단 파란색 <b><code>Basic info</code></b> 클릭 ➔ <code>Manage</code> 모드 확인 후 <code>Color option</code>에서 제품 색상 추가(예: <code>Black-001</code>, <code>White-001</code>).<br>\n2. 첫 번째 열 헤더의 <b><code>Add GP</code></b>를 눌러 자재 그룹(<code>Group#1</code>)을 만들고 <b><code>+</code></b> 버튼으로 자재 행을 추가합니다.<br>\n3. <code>COLOR CODE</code>(개별 색상 또는 공용 <code>COMMON</code>)를 고르고, <code>R/M CODE</code>의 파란색 <b><code>SEL</code></b> 버튼으로 자재를 선택합니다.<br>\n4. 오른쪽 영역에서 재단 부위(<code>Part &gt; Piece</code>)와 치수 <code>L</code> × <code>W</code>를 입력하면 즉시 자동 저장됩니다.",
      "chips": [
        "BOM List & Manage 컬럼 설명",
        "BOM 생성 시 바이어/스타일이 안 보일 때"
      ]
    }
  },
  "config-code-6-tables": {
    "extra_kw": [
      "config code",
      "6 tables",
      "style code",
      "r/m category",
      "기초 코드 6개",
      "스타일 코드 등록"
    ],
    "en": {
      "title": "6 Standard Code Tables in Config › Code",
      "answer": "<b>⚙️ 6 TABLES IN <code>CONFIG › CODE</code>:</b><br><br>\n1. <b><code>R/M Category</code>:</b> Material groups (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>\n2. <b><code>Unit</code>:</b> Units of measure (<code>YDS</code>, <code>MET</code>, <code>PCS</code>).<br>\n3. <b><code>MA #</code>:</b> Management codes (<code>MA001</code>...).<br>\n4. <b><code>Color code-Item</code>:</b> Garment/product colors.<br>\n5. <b><code>Color code-Material</code>:</b> Raw material colors.<br>\n6. <b><code>Style code</code>:</b> Product style codes &amp; names (bottom-right table — required before creating a BOM!).",
      "chips": [
        "Missing Buyer or Style in GENERATE NEW BOM",
        "All Config pages"
      ]
    },
    "ko": {
      "title": "Config › Code 화면의 6개 표준 코드표",
      "answer": "<b>⚙️ <code>CONFIG › CODE</code> 내 6개 코드표:</b><br><br>\n1. <b><code>R/M Category</code>:</b> 자재 분류 (<code>FABRIC</code>, <code>MESH</code>, <code>PACKING</code>).<br>\n2. <b><code>Unit</code>:</b> 단위 (<code>YDS</code>, <code>MET</code>, <code>PCS</code>).<br>\n3. <b><code>MA #</code>:</b> 관리 번호 (<code>MA001</code>...).<br>\n4. <b><code>Color code-Item</code>:</b> 완제품(아이템) 색상 코드.<br>\n5. <b><code>Color code-Material</code>:</b> 원부자재 색상 코드.<br>\n6. <b><code>Style code</code>:</b> 스타일 코드 및 스타일명 (우측 하단 — BOM 생성 전 필수 등록!).",
      "chips": [
        "BOM 생성 시 바이어/스타일이 안 보일 때",
        "Config 전체 메뉴 안내"
      ]
    }
  },
  "red-text-meaning": {
    "extra_kw": [
      "red text",
      "red numbers",
      "cons.(bom)(after)",
      "update button",
      "빨간 숫자",
      "업데이트 버튼"
    ],
    "en": {
      "title": "Meaning of Red Numbers in Purchase Order",
      "answer": "<b>🔴 RED NUMBERS IN <code>CONS.(BOM)(AFTER)</code>:</b><br><br>\nRed numbers indicate that the BOM consumption changed after the Contract/PO was originally calculated.<br>\n👉 Tick the checkbox in the <code>CONS.(BOM)(AFTER)</code> header/row and click the green <b><code>UPDATE</code></b> button to apply the updated BOM quantities.",
      "chips": [
        "Purchase Order columns",
        "How to read statuses"
      ]
    },
    "ko": {
      "title": "Purchase Order 표의 빨간색 숫자 의미",
      "answer": "<b>🔴 <code>CONS.(BOM)(AFTER)</code> 컬럼의 빨간 숫자:</b><br><br>\n계약 생성 이후 BOM 소요량이 수정되어 기존 값(<code>BEFORE</code>)과 차이가 발생했음을 알리는 표시입니다.<br>\n👉 해당 체크박스를 선택하고 초록색 <b><code>UPDATE</code></b> 버튼을 누르면 최신 BOM 소요량으로 동기화됩니다.",
      "chips": [
        "Purchase Order 컬럼 설명",
        "시스템 상태값 읽는 법"
      ]
    }
  },
  "config-pages-detail": {
    "extra_kw": [
      "config pages",
      "buyer",
      "supplier",
      "consignee",
      "exchange",
      "location",
      "기초 설정 메뉴"
    ],
    "en": {
      "title": "Detail of All 6 Config Pages",
      "answer": "<b>⚙️ ALL 6 CONFIG PAGES:</b><br><br>\n• <code>Buyer</code>: Customers (<code>Buyer-001</code>...).<br>\n• <code>Matl. supplier</code>: Raw material vendors (<code>Supplier-001</code>...).<br>\n• <code>Matl. consignee</code>: Receiving legal entity printed on POs (<code>BETHELVINA CO.,LTD</code>).<br>\n• <code>Exchange</code>: Currency exchange rates (click <code>APPLY</code>).<br>\n• <code>Code</code>: 6 master code tables (<code>+ ADD</code> or Excel <code>⬇ TEM / ⬆ UP</code>).<br>\n• <code>Location</code>: Warehouses &amp; factory locations (<code>Factory01-Material-T001</code>...).",
      "chips": [
        "Config Code 6 tables",
        "Missing Buyer or Style in GENERATE NEW BOM"
      ]
    },
    "ko": {
      "title": "Config 분과 6개 메뉴 상세 설명",
      "answer": "<b>⚙️ CONFIG 6개 설정 화면:</b><br><br>\n• <code>Buyer</code>: 고객사(바이어) 등록.<br>\n• <code>Matl. supplier</code>: 원부자재 공급업체 등록.<br>\n• <code>Matl. consignee</code>: PO에 인쇄되는 인수처/법인 등록 (<code>BETHELVINA CO.,LTD</code>).<br>\n• <code>Exchange</code>: 통화별 환율 설정 (입력 후 <code>APPLY</code>).<br>\n• <code>Code</code>: 6개 표준 코드표 (<code>+ ADD</code> 또는 엑셀 <code>⬇ TEM / ⬆ UP</code>).<br>\n• <code>Location</code>: 창고 및 공장 위치 등록 (<code>Factory01-Material-T001</code>...).",
      "chips": [
        "Config Code 6개 코드표",
        "BOM 생성 시 바이어/스타일이 안 보일 때"
      ]
    }
  },
  "admin-archive-deleted-pages": {
    "extra_kw": [
      "admin",
      "account",
      "profile",
      "archive",
      "deleted",
      "logout",
      "관리자",
      "계정",
      "비밀번호"
    ],
    "en": {
      "title": "Admin (Account, Profile) & Archive / Deleted Contracts",
      "answer": "<b>🛡️ ADMIN &amp; CONTRACT ARCHIVE PAGES:</b><br><br>\n• <code>Admin › Account</code>: Create/manage user login accounts and permissions.<br>\n• <code>Admin › Profile</code>: Update your own profile &amp; change password.<br>\n• <code>Admin › Logout</code>: Sign out safely.<br>\n• <code>Contract Status › Archive / Deleted</code>: Read-only logs of completed or deleted contracts.",
      "chips": [
        "Overview of all 19 pages",
        "End-to-end workflow"
      ]
    },
    "ko": {
      "title": "Admin (계정/프로필) 및 Archive / Deleted 계약 조회",
      "answer": "<b>🛡️ ADMIN 및 계약 이력 화면:</b><br><br>\n• <code>Admin › Account</code>: 관리자용 사용자 계정 생성 및 권한 관리.<br>\n• <code>Admin › Profile</code>: 개인 정보 수정 및 비밀번호 변경.<br>\n• <code>Admin › Logout</code>: 안전 로그아웃.<br>\n• <code>Contract Status › Archive / Deleted</code>: 완료되거나 삭제된 계약의 조회 전용 이력 화면.",
      "chips": [
        "19개 전체 화면 개요",
        "전체 업무 흐름 안내"
      ]
    }
  },
  "bom-missing-buyer-style-in-generate": {
    "extra_kw": [
      "missing buyer",
      "missing style",
      "generate new bom",
      "no style in dropdown",
      "바이어가 안 보임",
      "스타일이 안 보임",
      "bom 생성"
    ],
    "en": {
      "title": "Fix: Buyer or Style Code Missing in GENERATE NEW BOM",
      "answer": "<b>🛠️ WHY BUYER OR STYLE CODE IS MISSING IN <code>GENERATE NEW BOM</code>:</b><br><br>\nThe <code>+ Create new BOM</code> (<code>GENERATE NEW BOM</code>) modal only lists Buyers and Styles that already exist in <b><code>CONFIG</code></b>.<br><br>\n• <b>Missing <code>STYLE CODE</code>:</b> Go to <b><code>CONFIG › Code</code></b> (<code>/mrp/config/code</code>) ➔ look at the bottom-right <b><code>Style code</code></b> table ➔ click <b><code>+ ADD</code></b> to add the Style Code &amp; Name.<br>\n• <b>Missing <code>BUYER</code>:</b> Go to <b><code>CONFIG › Buyer</code></b> (<code>/mrp/config/buyer</code>) ➔ click <b><code>+ Add</code></b> to create the customer.<br><br>\nThen return to <code>BOM DATA › List</code> and click <code>+ Create new BOM</code> again.",
      "chips": [
        "Config Code 6 tables",
        "BOM Manage step-by-step"
      ]
    },
    "ko": {
      "title": "GENERATE NEW BOM에서 바이어 또는 스타일 코드가 안 보일 때",
      "answer": "<b>🛠️ <code>GENERATE NEW BOM</code> 팝업에 바이어/스타일이 안 나오는 원인 및 해결:</b><br><br>\n<code>+ Create new BOM</code> 팝업은 <b><code>CONFIG</code></b>에 미리 등록된 항목만 불러옵니다.<br><br>\n• <b><code>STYLE CODE</code>가 없을 때:</b> <b><code>CONFIG › Code</code></b>(<code>/mrp/config/code</code>) 우측 하단 <b><code>Style code</code></b> 표에서 <b><code>+ ADD</code></b>를 눌러 스타일 코드와 이름을 등록하세요.<br>\n• <b><code>BUYER</code>가 없을 때:</b> <b><code>CONFIG › Buyer</code></b>(<code>/mrp/config/buyer</code>)에서 <b><code>+ Add</code></b>를 눌러 고객사를 등록하세요.<br><br>\n등록 후 <code>BOM DATA › List</code>로 돌아와 다시 생성하면 목록에 즉시 표시됩니다.",
      "chips": [
        "Config Code 6개 코드표",
        "BOM Manage 입력 방법"
      ]
    }
  },
  "operational-common-mistakes": {
    "extra_kw": [
      "common mistakes",
      "troubleshooting",
      "errors",
      "forgot",
      "자주 발생하는 실수",
      "문제 해결",
      "실수 7가지"
    ],
    "en": {
      "title": "7 Most Common Operational Mistakes & How to Fix Them",
      "answer": "<b>⚠️ 7 COMMON OPERATIONAL MISTAKES:</b><br><br>\n1. <b>Buyer/Style missing in <code>GENERATE NEW BOM</code>:</b> Create them first in <code>CONFIG › Code</code> (<code>Style code</code>) or <code>CONFIG › Buyer</code>.<br>\n2. <b>Forgot to switch PO from <code>STANDBY</code> ➔ <code>ORDERED</code>:</b> Causes PO not to appear in <code>IN BALANCE</code> and fails Excel Income upload.<br>\n3. <b>Wrong <code>DATE-NO</code> format in Excel:</b> <code>Income</code> uses 4-digit year <code>YYYY/MM/DD-SN</code> (Inspection <code>YYYY.MM.DD</code>), while <code>Outgo</code> uses 2-digit year <code>YY/MM/DD-SN</code>.<br>\n4. <b>Contract missing in <code>Purchase Order</code>:</b> BOM button in <code>Contract › Active</code> is red (<code>Not match</code>).<br>\n5. <b>Inventory looks empty:</b> Default filter is <code>NOT ZERO</code> — switch to <code>SHOW ALL</code> + <code>Refresh</code>.<br>\n6. <b>Forgot <code>APPLY</code> in <code>Shipment</code>:</b> Must select Buyer + Contract and click green <code>APPLY</code> before editing Packed/Physical/Shipped.<br>\n7. <b>Editing a Locked BOM:</b> Click <code>UNLOCK</code> in <code>Bom › List</code> before opening <code>Manage</code>.",
      "chips": [
        "Missing Buyer or Style in GENERATE NEW BOM",
        "Change PO STANDBY to ORDERED",
        "Decode EFM, ECD, ECT errors"
      ]
    },
    "ko": {
      "title": "자주 발생하는 업무 실수 7가지 및 해결 방법",
      "answer": "<b>⚠️ 현업에서 자주 발생하는 실수 7가지:</b><br><br>\n1. <b><code>GENERATE NEW BOM</code>에 바이어/스타일 없음:</b> <code>CONFIG › Code</code>(<code>Style code</code>) 또는 <code>CONFIG › Buyer</code>에 먼저 등록하세요.<br>\n2. <b><code>MAKE PO</code> 후 <code>STANDBY</code> ➔ <code>ORDERED</code> 변경 누락:</b> 변경하지 않으면 입고(<code>Income</code>)가 불가하고 <code>IN BALANCE</code>에도 뜨지 않습니다.<br>\n3. <b>엑셀 <code>DATE-NO</code> 형식 혼동:</b> <code>Income</code>은 4자리 연도(<code>YYYY/MM/DD-SN</code>, 검사일 <code>YYYY.MM.DD</code>), <code>Outgo</code>는 2자리 연도(<code>YY/MM/DD-SN</code>)입니다.<br>\n4. <b><code>Purchase Order</code>에 계약 안 보임:</b> <code>Contract › Active</code>의 BOM 버튼이 빨간색(<code>Not match</code>)인지 확인하세요.<br>\n5. <b><code>Inventory</code>가 비어 보임:</b> 기본 필터가 <code>NOT ZERO</code>이므로 <code>SHOW ALL</code> + <code>Refresh</code>를 누르세요.<br>\n6. <b><code>Shipment</code>에서 <code>APPLY</code> 미클릭:</b> 바이어·계약 선택 후 초록색 <code>APPLY</code>를 눌러야 표가 열립니다.<br>\n7. <b>잠긴 BOM 수정 시도:</b> <code>Bom › List</code>에서 <code>UNLOCK</code> 후 <code>Manage</code>로 들어가세요.",
      "chips": [
        "BOM 생성 시 바이어/스타일이 안 보일 때",
        "PO STANDBY에서 ORDERED 변경",
        "EFM, ECD, ECT 에러 코드 해석"
      ]
    }
  },
  "bom-color-common": {
    "extra_kw": [
      "color common",
      "common mode",
      "color mode",
      "common in bom",
      "what is color common",
      "what does color common mean",
      "color code column",
      "컬러 공통",
      "공통 색상",
      "bom common",
      "color common 의미",
      "컬러 코드"
    ],
    "en": {
      "title": "Meaning of COLOR vs COMMON (Color Common) in BOM › Manage",
      "answer": "🎨 <b>MEANING OF <code>COLOR</code> VS <code>COMMON</code> IN <code>BOM DATA ▶ MANAGE</code> (<code>COLOR CODE</code> COLUMN):</b><br><br>\nIn the <code>COLOR CODE</code> column, each raw material row operates in one of two modes:<br><br>\n1. <b><code>COMMON</code> Mode (Checkbox UNCHECKED <code>☐</code>):</b><br>\n   • Displays a <b>single row</b> labeled <code>COMMON</code>.<br>\n   • <b>Meaning:</b> The material is <b>shared identically across all product colorways</b> (e.g., Row #4 packing polybag <code>PAK00000001</code> applies to both <code>Black-001</code> and <code>White-001</code>).<br><br>\n2. <b><code>COLOR</code> Mode (Checkbox CHECKED <code>☑</code>):</b><br>\n   • Splits the item into <b>separate sub-rows per colorway</b> defined in <code>Basic info ▶ Color option</code> (e.g., <code>Black-001</code>, <code>White-001</code>).<br>\n   • <b>Meaning:</b> Allows assigning <b>different Raw Material Codes (<code>R/M CODE</code>)</b> for each product color (e.g., Row #1 uses <code>FAB00000001</code> for <code>Black-001</code> and <code>FAB00000002</code> for <code>White-001</code>).<br><br>\n3. <b>How to Switch Modes:</b><br>\n   • Click the checkbox next to <code>COMMON</code> (to split into <code>COLOR</code>) or next to the first color row (to collapse into <code>COMMON</code>) and confirm the prompt <i>\"Are you sure switch from COMMON to COLOR??\"</i> / <i>\"Are you sure switch from COLOR to COMMON??\"</i>.",
      "chips": [
        "BOM List & Manage columns",
        "How to fill BOM › Manage",
        "Missing Buyer or Style in GENERATE NEW BOM"
      ]
    },
    "ko": {
      "title": "BOM › Manage의 COLOR vs COMMON (Color Common) 의미 및 전환 방법",
      "answer": "🎨 <b><code>BOM DATA ▶ Manage</code>의 <code>COLOR CODE</code> 컬럼 내 <code>COLOR</code> 및 <code>COMMON</code> 의미:</b><br><br>\n<code>COLOR CODE</code> 컬럼은 해당 자재를 <b>전체 색상 공통</b>으로 사용할지, <b>제품 색상별로 분리</b>할지 결정합니다:<br><br>\n1. <b><code>COMMON</code> 모드 (체크박스 미체크 <code>☐</code>):</b><br>\n   • <code>COMMON</code>이라는 <b>단일 행</b>으로 표시됩니다.<br>\n   • <b>의미:</b> 제품의 <b>모든 색상에 동일한 자재를 공통 적용</b>합니다 (예: 4번 행 포장재 <code>PAK00000001</code>은 <code>Black-001</code>과 <code>White-001</code> 모두에 공통 사용).<br><br>\n2. <b><code>COLOR</code> 모드 (체크박스 체크 <code>☑</code>):</b><br>\n   • <code>Basic info ▶ Color option</code>에 등록된 <b>제품 색상별로 행이 분리</b>됩니다 (예: <code>Black-001</code>, <code>White-001</code>).<br>\n   • <b>의미:</b> 색상마다 <b>서로 다른 원부자재 코드(<code>R/M CODE</code>)</b>를 지정할 수 있습니다 (예: 1번 행 <code>Black-001</code>은 <code>FAB00000001</code>, <code>White-001</code>은 <code>FAB00000002</code>).<br><br>\n3. <b>모드 전환 방법:</b><br>\n   • <code>COMMON</code> 옆 체크박스를 클릭하면 색상별로 분리되며(<i>\"Are you sure switch from COMMON to COLOR??\"</i>), 첫 번째 색상(<code>Black-001</code>) 옆 체크박스를 해제하면 다시 <code>COMMON</code> 단일 행으로 합쳐집니다.",
      "chips": [
        "BOM List & Manage 주요 컬럼",
        "BOM › Manage 입력 순서",
        "BOM 생성 시 바이어/스타일이 안 보일 때"
      ]
    }
  }
};

window.MRP_KB = KB_VI.map(item => {
  const tr = KB_I18N[item.id] || {};
  const extraKw = Array.isArray(tr.extra_kw) ? tr.extra_kw : [];
  return {
    id: item.id,
    keywords: Array.from(new Set([...(item.keywords || []), ...extraKw])),
    vi: { title: item.title, answer: item.answer, chips: item.chips || [] },
    en: tr.en || { title: item.title, answer: item.answer, chips: item.chips || [] },
    ko: tr.ko || { title: item.title, answer: item.answer, chips: item.chips || [] }
  };
});

window.detectChatLang = function(text, fallbackLang) {
  const s = (text || '').trim();
  if (/[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/.test(s)) return 'ko';
  if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(s)) return 'vi';
  if (/\b(trang|cach|tai sao|huong dan|nhap kho|xuat kho|ton kho|hop dong|don mua|dinh muc|loi|khong thay)\b/i.test(s)) return 'vi';
  if (/\b(how|what|why|where|when|which|column|columns|status|error|create|upload|missing|guide|workflow|order|stock|shipment|contract|inventory|income|outgo|explain)\b/i.test(s)) return 'en';
  return fallbackLang || 'vi';
};

window.CHAT_FALLBACK = {
  vi: {
    msg: (q) => `Xin lỗi, tôi chưa tìm thấy câu trả lời chính xác cho "<b>${q}</b>".<br><br>Bạn có thể chọn nhanh một trong các chủ đề trọng tâm bên dưới:`,
    chips: ['Thông tin 19 trang hệ thống', 'Cách đọc trạng thái hệ thống', 'Tiêu đề cột Purchase Order', 'Chuyển PO từ STANDBY sang ORDERED', 'Ý nghĩa CONT., N/A, ASSIGNED', 'Quy trình vận hành từ đầu đến cuối']
  },
  en: {
    msg: (q) => `Sorry, I couldn't find an exact match for "<b>${q}</b>".<br><br>Try one of the key topics below:`,
    chips: ['Overview of all 19 pages', 'How to read statuses', 'Purchase Order columns', 'Change PO STANDBY to ORDERED', 'CONT., N/A, ASSIGNED meaning', 'End-to-end workflow']
  },
  ko: {
    msg: (q) => `죄송합니다. "<b>${q}</b>"에 대한 정확한 답변을 찾지 못했습니다.<br><br>아래 주요 주제 중 하나를 선택해 보세요:`,
    chips: ['19개 전체 화면 개요', '시스템 상태값 읽는 법', 'Purchase Order 컬럼 설명', 'PO STANDBY에서 ORDERED 변경', 'CONT., N/A, ASSIGNED 구분', '전체 업무 흐름 안내']
  }
};