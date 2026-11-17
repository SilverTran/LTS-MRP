# CẨM NANG ĐIỆN TỬ HƯỚNG DẪN SỬ DỤNG HỆ THỐNG ERP / MRP (SINGLE 2 V25.02)

Tài liệu hướng dẫn sử dụng trực quan kết hợp Trợ lý ảo AI Client-side dành cho người dùng cuối của hệ thống Quản lý Hợp đồng Sản xuất & Hoạch định Nhu cầu Nguyên phụ liệu (**SINGLE 2 V 25.02**).

---

## 1. CẤU TRÚC BỘ TÀI LIỆU & MÃ NGUỒN

```text
D:\Web project\MVC\SVG\LTS\
├── index.html          # [CHÍNH] Giao diện web hướng dẫn sử dụng từng bước + Lightbox phóng to ảnh + Chatbot AI
├── manual.md           # [TÀI LIỆU] Cẩm nang hướng dẫn sử dụng định dạng Markdown
├── robots.txt          # [BẢO MẬT] Cấu hình chặn 100% crawler công cụ tìm kiếm và bot AI
├── README.md           # [HƯỚNG DẪN] Thông tin tổng quan và hướng dẫn mở bộ tài liệu
└── pages/              # [HÌNH ẢNH] 20 ảnh chụp toàn màn hình độ phân giải cao từ hệ thống thực tế
```

---

## 2. ĐẶC ĐIỂM GIAO DIỆN HƯỚNG DẪN NGƯỜI DÙNG (`index.html`)

- **Tập trung 100% vào thao tác thực tế của người dùng:**
  - Mỗi trang chức năng được trình bày rõ ràng theo cấu trúc:
    1. **📝 Trang này dùng để nhập cái gì?**
    2. **✅ Các bước thao tác để hoàn thành mục tiêu (`BƯỚC 1 ➔ BƯỚC 2 ➔ BƯỚC 3...`)**
    3. **🖥️ Ảnh giao diện toàn màn hình (Nhấp vào ảnh để phóng to / thu nhỏ / kéo chuột)**
- **Tích hợp Trợ lý ảo Chatbot AI (`💬` ở góc dưới bên phải):**
  - Giải đáp tức thì mọi kiến thức tra cứu chuyên sâu khi người dùng cần hỏi thêm: *Thông tin & ý nghĩa 19 trang chức năng, Cách đọc trạng thái (`STANDBY`, `ORDERED`, `Match`, `Locked`, `CONT./N/A/ASSIGNED`), Ý nghĩa chữ số màu đỏ cảnh báo, Giải nghĩa chi tiết Tiêu đề cột của từng bảng, Công thức tính `Shipment & Stock`, và Giải mã lỗi Upload Excel (`EFM`, `ECD`, `ECT`, `WPO`, `WDF`, `WCD`)*.
