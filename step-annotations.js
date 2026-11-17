// Trilingual Step-by-Step Image Callout Annotations (VI / EN / KO) for SINGLE 2 MRP
(function () {
  const ANNOTATIONS = {
    'pages/16_config_code.png': [
      { x: 19, y: 16, vi: 'R/M Category (+ADD / UP / TEM)', en: 'R/M Category (+ADD / UP / TEM)', ko: 'R/M Category (+ADD / UP / TEM)' },
      { x: 51, y: 16, vi: 'Unit (YDS, MET, PCS)', en: 'Unit (YDS, MET, PCS)', ko: 'Unit (YDS, MET, PCS)' },
      { x: 84, y: 16, vi: 'MA # (MA001, MA002)', en: 'MA # (MA001, MA002)', ko: 'MA # (MA001, MA002)' },
      { x: 19, y: 52, vi: 'Color code-Item (Black-001, White-001)', en: 'Color code-Item (Black-001, White-001)', ko: 'Color code-Item (Black-001, White-001)' },
      { x: 51, y: 52, vi: 'Color code-Material (Blue-321, Red-123)', en: 'Color code-Material (Blue-321, Red-123)', ko: 'Color code-Material (Blue-321, Red-123)' },
      { x: 84, y: 52, vi: 'Style code | Style name (Stl001, Stl002)', en: 'Style code | Style name (Stl001, Stl002)', ko: 'Style code | Style name (Stl001, Stl002)' }
    ],
    'pages/09_material_master.png': [
      { x: 4, y: 16, vi: 'Bấm + Create để tạo mã NPL mới', en: 'Click + Create to add a new material', ko: '+ Create 클릭하여 신규 자재 등록' },
      { x: 17, y: 16, vi: 'Export / Import / Template Excel', en: 'Export / Import / Template Excel', ko: 'Excel 내보내기 / 가져오기 / 양식' },
      { x: 76, y: 16, vi: 'Tìm kiếm theo R/M CODE, NAME, COLOR', en: 'Search by R/M CODE, NAME, COLOR', ko: 'R/M CODE, NAME, COLOR 검색' },
      { x: 18, y: 35, vi: 'Cột R/M CODE (Mã NPL chuẩn)', en: 'R/M CODE column (Material ID)', ko: 'R/M CODE 컬럼 (자재 코드)' },
      { x: 50, y: 35, vi: 'UNIT / UNIT PRICE / CURRENCY', en: 'UNIT / UNIT PRICE / CURRENCY', ko: '단위 / 단가 / 통화' }
    ],
    'pages/06_bom_list.png': [
      { x: 7, y: 16, vi: 'Bấm + Create new BOM để tạo BOM mới', en: 'Click + Create new BOM', ko: '+ Create new BOM 클릭하여 생성' },
      { x: 52, y: 44, vi: 'Phiên bản BOM (v0.1, v0.2)', en: 'BOM Revision (v0.1, v0.2)', ko: 'BOM 버전 (v0.1, v0.2)' },
      { x: 72, y: 27, vi: 'LOCK / UNLOCK (Khóa/Mở khóa sửa)', en: 'LOCK / UNLOCK editing', ko: 'LOCK / UNLOCK (수정 잠금/해제)' },
      { x: 86, y: 44, vi: 'Bấm MANAGE để vào nhập định mức', en: 'Click MANAGE to edit BOM details', ko: 'MANAGE 클릭하여 상세 소요량 입력' },
      { x: 91, y: 44, vi: 'Bấm COPY để nhân bản BOM', en: 'Click COPY to duplicate BOM', ko: 'COPY 클릭하여 BOM 복제' }
    ],
    'pages/07_bom_create_modal.png': [
      { x: 52, y: 41, vi: 'Chọn Khách hàng (BUYER)', en: 'Select BUYER', ko: 'BUYER 선택' },
      { x: 52, y: 46, vi: 'Chọn Mã hàng (STYLE CODE)', en: 'Select STYLE CODE', ko: 'STYLE CODE 선택' },
      { x: 52, y: 57, vi: 'Nhập Phiên bản (REVISION, VD: v0.1)', en: 'Enter REVISION (e.g. v0.1)', ko: 'REVISION 입력 (예: v0.1)' },
      { x: 58, y: 67, vi: 'Bấm GENERATE để tạo BOM', en: 'Click GENERATE to create BOM', ko: 'GENERATE 클릭하여 생성' }
    ],
    'pages/07_bom_basic_info.png': [
      { x: 7.2, y: 12, vi: 'Bấm Open BOM để mở danh sách chọn', en: 'Click Open BOM to select a BOM', ko: 'Open BOM 클릭하여 BOM 선택창 열기' },
      { x: 63, y: 42, vi: 'Kiểm tra danh sách màu (COLOR)', en: 'Check Style Colors (COLOR)', ko: '스타일 색상(COLOR) 확인' },
      { x: 90.2, y: 42.3, vi: 'Bấm Open để mở bảng định mức', en: 'Click Open to load BOM Manage', ko: 'Open 클릭하여 BOM 열기' }
    ],
    'pages/08_bom_manage_stl001.png': [
      { x: 4, y: 15, vi: 'Open BOM: Chọn bảng BOM cần sửa', en: 'Open BOM: Select BOM to edit', ko: 'Open BOM: 수정할 BOM 선택' },
      { x: 10, y: 15, vi: 'Basic info: Chế độ Manage & thêm màu', en: 'Basic info: Manage mode & Color option', ko: 'Basic info: Manage 모드 및 색상 추가' },
      { x: 4, y: 31, vi: 'Add GP & +: Tạo nhóm & thêm dòng NPL', en: 'Add GP & +: Add Group & material rows', ko: 'Add GP & +: 그룹 및 자재 행 추가' },
      { x: 12, y: 41, vi: 'COLOR CODE: Tick ☑=COLOR, Bỏ tick ☐=COMMON', en: 'COLOR CODE: Checked ☑=COLOR, Unchecked ☐=COMMON', ko: 'COLOR CODE: 체크 ☑=COLOR, 해제 ☐=COMMON' },
      { x: 19, y: 41, vi: 'Bấm SEL chọn mã NPL từ Material Master', en: 'Click SEL to pick R/M Code', ko: 'SEL 클릭하여 자재 코드 선택' }
    ],
    'pages/08b_bom_manage_stl001_right.png': [
      { x: 41, y: 29, vi: 'PART > PIECE NAME & L / W / PCS', en: 'PART > PIECE NAME & L / W / PCS', ko: '재단 부위(PART > PIECE) & L/W/PCS' },
      { x: 54, y: 40, vi: 'Bấm MANAGE nhập chi tiết cắt', en: 'Click MANAGE to edit cut pieces', ko: 'MANAGE 클릭하여 재단 치수 입력' },
      { x: 60, y: 29, vi: 'CONSUMPTION & UNIT tự động tính', en: 'Auto-calculated CONSUMPTION & UNIT', ko: '자동 계산된 소요량(CONSUMPTION)' },
      { x: 85, y: 35, vi: 'MATERIAL COST (MAIN COLOR) = $8.5000', en: 'Total MATERIAL COST (MAIN COLOR)', ko: '총 자재 원가 (MATERIAL COST)' }
    ],
    'pages/02_contract_active.png': [
      { x: 6, y: 15, vi: 'Bấm + Add CONTRACT tạo hợp đồng mới', en: 'Click + Add CONTRACT', ko: '+ Add CONTRACT 클릭하여 신규 계약' },
      { x: 12, y: 31, vi: 'Click CONTRACT # để mở MANAGE ORDER', en: 'Click CONTRACT # to open MANAGE ORDER', ko: 'CONTRACT # 클릭하여 주문 관리 열기' },
      { x: 58, y: 27, vi: 'PO QTY / LABOR COST / FOB / AMOUNT', en: 'PO QTY / LABOR COST / FOB / AMOUNT', ko: '수량 / 공임 / FOB / 금액' },
      { x: 81, y: 27, vi: 'PACKED / SHIPPED / STOCK / PHYSICAL', en: 'PACKED / SHIPPED / STOCK / PHYSICAL', ko: '포장 / 출고 / 재고 / 실사 수량' }
    ],
    'pages/03_contract_manage_order_modal.png': [
      { x: 23, y: 22, vi: 'Kiểm tra Contract # & Buyer', en: 'Verify Contract # & Buyer', ko: 'Contract # 및 Buyer 확인' },
      { x: 9, y: 37, vi: 'Bấm + Add PO thêm đơn hàng khách', en: 'Click + Add PO to add Buyer PO', ko: '+ Add PO 클릭하여 고객 PO 추가' },
      { x: 9, y: 65, vi: 'Bấm + Add Style thêm mã hàng & số lượng', en: 'Click + Add Style to add Style & Qty', ko: '+ Add Style 클릭하여 스타일 추가' },
      { x: 39, y: 69, vi: 'Nút BOM xanh lá: Đã gắn khớp BOM', en: 'Green BOM button: BOM linked', ko: '초록색 BOM 버튼: BOM 연동 완료' },
      { x: 98, y: 78, vi: 'Trạng thái Match theo từng màu', en: 'Match status per colorway', ko: '색상별 Match 상태 확인' }
    ],
    'pages/10_purchase_order_contract001.png': [
      { x: 24, y: 14.5, vi: 'Chọn hợp đồng tại CONT #', en: 'Select Contract at CONT #', ko: 'CONT #에서 계약 선택' },
      { x: 60.4, y: 34.5, vi: 'Bấm UPDATE nếu CONS.(BOM)(AFTER) màu đỏ', en: 'Click UPDATE if CONS.(BOM)(AFTER) is red', ko: '빨간색 표시 시 UPDATE 클릭' },
      { x: 69.5, y: 34.5, vi: 'Nhập LOSS % rồi bấm SET', en: 'Enter LOSS % and click SET', ko: 'LOSS % 입력 후 SET 클릭' },
      { x: 15.6, y: 34.5, vi: 'Tick dòng & bấm MAKE PO phát hành đơn mua', en: 'Select rows & click MAKE PO', ko: '행 선택 후 MAKE PO 클릭하여 발주' }
    ],
    'pages/10b_purchase_order_status_ordered.png': [
      { x: 22.6, y: 34.5, vi: 'Điều chỉnh ORDER QTY ▶ SET', en: 'Adjust ORDER QTY ▶ SET', ko: '발주 수량(ORDER QTY) ▶ SET' },
      { x: 32.4, y: 33, vi: 'RESET by BOM / R/M đồng bộ đơn giá', en: 'RESET by BOM / R/M to sync price', ko: '단가 동기화 (RESET by BOM/R/M)' },
      { x: 68.6, y: 34.5, vi: 'Cập nhật RM PO DATE & RM ETA ▶ SET', en: 'Set RM PO DATE & RM ETA ▶ SET', ko: '발주일 / 입고예정일 설정 ▶ SET' },
      { x: 95, y: 34.5, vi: 'Đổi STATUS từ STANDBY ➔ ORDERED', en: 'Switch STATUS: STANDBY ➔ ORDERED', ko: 'STATUS를 STANDBY ➔ ORDERED 변경' }
    ],
    'pages/11_purchase_order_contract002.png': [
      { x: 24, y: 14.5, vi: 'Chọn Contract-002 tại CONT #', en: 'Select Contract-002 at CONT #', ko: 'CONT #에서 Contract-002 선택' },
      { x: 11, y: 40.5, vi: 'Tick & bấm ADD để nạp vật tư BOM vào PO', en: 'Select & click ADD to load BOM items', ko: '선택 후 ADD 클릭하여 자재 불러오기' },
      { x: 70.7, y: 34.5, vi: 'Thiết lập LOSS % ▶ SET và MAKE PO', en: 'Set LOSS % ▶ SET and MAKE PO', ko: 'LOSS % 설정 후 MAKE PO 발주' }
    ],
    'pages/12_mat_po_status.png': [
      { x: 4, y: 15, vi: 'Bấm Refresh làm mới danh sách PO', en: 'Click Refresh to reload PO list', ko: 'Refresh 클릭하여 목록 새로고침' },
      { x: 12, y: 29, vi: 'Mã đơn mua MATERIAL PO# (PO-R-...)', en: 'MATERIAL PO# (PO-R-...)', ko: '자재 발주 번호 (MATERIAL PO#)' },
      { x: 56, y: 29, vi: 'Trạng thái ORDERED / STANDBY', en: 'PO Status (ORDERED / STANDBY)', ko: '발주 상태 (ORDERED / STANDBY)' },
      { x: 78, y: 29, vi: 'ORDER / W/H IN / BALANCE (Đỏ = còn nợ)', en: 'ORDER / W/H IN / BALANCE (Red = due)', ko: '발주 / 입고 / 잔량 (빨간색 = 미입고)' },
      { x: 85, y: 34, vi: 'Manage PO Group: Mở nhanh Purchase Order', en: 'Manage PO Group: Open Purchase Order', ko: 'Manage PO Group: 발주 화면 바로가기' }
    ],
    'pages/13_income_status_error_info.png': [
      { x: 33, y: 26, vi: 'Bấm TEMPLATE tải mẫu Excel nhập kho', en: 'Click TEMPLATE to download Excel', ko: 'TEMPLATE 클릭하여 입고 양식 다운로드' },
      { x: 19.5, y: 26, vi: 'Bấm UPLOAD EXCEL tải lên (đọc từ dòng 3)', en: 'Click UPLOAD EXCEL (reads from Row 3)', ko: 'UPLOAD EXCEL 업로드 (3행부터 인식)' },
      { x: 2.9, y: 26, vi: 'Bấm INFO kiểm tra ERROR / WARNING', en: 'Click INFO to check ERROR / WARNING', ko: 'INFO 클릭하여 오류/경고 확인' },
      { x: 26.5, y: 26, vi: 'Khi ERROR = 0, bấm ✔ APPLY INCOME', en: 'When ERROR = 0, click ✔ APPLY INCOME', ko: 'ERROR = 0일 때 ✔ APPLY INCOME 클릭' }
    ],
    'pages/14_outgo_status_error_info.png': [
      { x: 35.8, y: 14.3, vi: 'Bấm TEMPLATE tải mẫu Excel xuất kho', en: 'Click TEMPLATE to download Excel', ko: 'TEMPLATE 클릭하여 출고 양식 다운로드' },
      { x: 21.1, y: 14.3, vi: 'UPLOAD EXCEL (DATE-NO dạng YY/MM/DD-SN)', en: 'UPLOAD EXCEL (DATE-NO: YY/MM/DD-SN)', ko: 'UPLOAD EXCEL (DATE-NO: YY/MM/DD-SN)' },
      { x: 3.5, y: 14.3, vi: 'Bấm INFO kiểm tra lỗi & cảnh báo', en: 'Click INFO to inspect errors/warnings', ko: 'INFO 클릭하여 오류/경고 확인' },
      { x: 28.9, y: 14.3, vi: 'Khi ERROR = 0, bấm ✔ APPLY OUTGO', en: 'When ERROR = 0, click ✔ APPLY OUTGO', ko: 'ERROR = 0일 때 ✔ APPLY OUTGO 클릭' }
    ],
    'pages/15_inventory_show_all.png': [
      { x: 7, y: 15, vi: 'Đổi NOT ZERO ➔ SHOW ALL xem cả tồn = 0', en: 'Switch NOT ZERO ➔ SHOW ALL', ko: 'NOT ZERO ➔ SHOW ALL 변경 (0 포함)' },
      { x: 35, y: 15, vi: 'Bấm Refresh cập nhật bảng tồn kho', en: 'Click Refresh to load inventory', ko: 'Refresh 클릭하여 재고 조회' },
      { x: 54.7, y: 14.5, vi: 'D/L XLS by BUYER / MA# xuất Excel', en: 'D/L XLS by BUYER / MA# export', ko: '바이어별 / MA#별 엑셀 다운로드' },
      { x: 44, y: 24, vi: 'IN / IN BALANCE / OUT / PHYSICAL INVENTORY', en: 'IN / IN BALANCE / OUT / PHYSICAL', ko: '입고 / 미입고 / 출고 / 실사 재고' }
    ],
    'pages/04_buyer_order_shipment.png': [
      { x: 19, y: 15, vi: 'Chọn BUYER và CONTRACT #', en: 'Select BUYER and CONTRACT #', ko: 'BUYER 및 CONTRACT # 선택' },
      { x: 30.8, y: 14.8, vi: 'Bấm APPLY để hiển thị bảng dữ liệu', en: 'Click APPLY to load data table', ko: 'APPLY 클릭하여 데이터 표 불러오기' },
      { x: 33, y: 31, vi: 'Click số cột PACKED / PHYSICAL để nhập', en: 'Click PACKED / PHYSICAL numbers to edit', ko: 'PACKED / PHYSICAL 숫자 클릭하여 입력' },
      { x: 61.6, y: 28.4, vi: 'Tick ô vuông ngày xuất & bấm SET lưu SHIPPED', en: 'Check date box & click SET to save SHIPPED', ko: '출고일 체크박스 선택 후 SET 클릭 저장' }
    ],
    'pages/04b_buyer_order_shipment_contract002.png': [
      { x: 36, y: 13.5, vi: 'Chọn Contract-002', en: 'Select Contract-002', ko: 'Contract-002 선택' },
      { x: 48.2, y: 12.2, vi: 'Bấm APPLY tải bảng', en: 'Click APPLY to load table', ko: 'APPLY 클릭하여 표 불러오기' },
      { x: 53, y: 28, vi: 'Cập nhật số liệu PACKED & PHYSICAL', en: 'Update PACKED & PHYSICAL', ko: 'PACKED & PHYSICAL 업데이트' },
      { x: 95.6, y: 23.5, vi: 'Tick ô vuông & bấm SET lưu xuất hàng', en: 'Check box & click SET to save shipment', ko: '체크 후 SET 클릭하여 출고 저장' }
    ],
    'pages/05_buyer_order_stock.png': [
      { x: 6, y: 14.2, vi: 'Chọn mốc ngày lọc (TODAY)', en: 'Select date filter (TODAY)', ko: '조회 기준일 선택 (TODAY)' },
      { x: 12, y: 14.2, vi: 'Bấm APPLY tải báo cáo tồn kho F/G', en: 'Click APPLY to load F/G Stock', ko: 'APPLY 클릭하여 완제품 재고 조회' },
      { x: 20, y: 14.2, vi: 'D/L LIST / D/L PACKED MA xuất Excel', en: 'D/L LIST / D/L PACKED MA Excel export', ko: '엑셀 내보내기 (D/L LIST / PACKED MA)' },
      { x: 37, y: 34.1, vi: 'Bấm PHY xem lịch sử kiểm kê', en: 'Click PHY to view physical count log', ko: 'PHY 클릭하여 실사 이력 확인' }
    ]
  };

  const UI_TEXT = {
    vi: { toggleOn: '🔢 Ẩn số bước', toggleOff: '🔢 Hiện số bước', stepPrefix: 'Bước' },
    en: { toggleOn: '🔢 Hide Steps', toggleOff: '🔢 Show Steps', stepPrefix: 'Step' },
    ko: { toggleOn: '🔢 단계 숨기기', toggleOff: '🔢 단계 보기', stepPrefix: '단계' }
  };

  function getLang() {
    const lang = (document.documentElement.lang || window.PAGE_LANG || 'vi').toLowerCase();
    return UI_TEXT[lang] ? lang : 'vi';
  }

  function injectStyles() {
    if (document.getElementById('step-annotations-style')) return;
    const style = document.createElement('style');
    style.id = 'step-annotations-style';
    style.textContent = `
      .annotated-img-wrap {
        position: relative;
        display: block;
        width: 100%;
        line-height: 0;
        cursor: zoom-in;
      }
      .annotated-img-wrap img {
        width: 100%;
        display: block;
      }
      .step-pin {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f97316, #ef4444);
        color: #ffffff;
        font-size: 11.5px;
        font-weight: 800;
        font-family: 'Inter', 'Segoe UI', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(239, 68, 68, 0.35);
        transform: translate(-50%, calc(-100% - 10px));
        z-index: 6;
        cursor: pointer;
        user-select: none;
        transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
        line-height: 1;
      }
      .step-pin::before {
        content: '';
        position: absolute;
        top: calc(100% + 1px);
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid #ef4444;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.45));
        pointer-events: none;
      }
      .step-pin:hover,
      .step-pin.is-highlighted {
        transform: translate(-50%, calc(-100% - 10px)) scale(1.22);
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.45), 0 4px 14px rgba(0, 0, 0, 0.65);
        z-index: 8;
      }
      .step-pin:hover::before,
      .step-pin.is-highlighted::before {
        border-top-color: #1d4ed8;
      }
      .step-pin::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.95);
        color: #f8fafc;
        font-size: 12px;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 6px;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.15s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      .step-pin:hover::after {
        opacity: 1;
      }
      .annotated-img-wrap.pins-hidden .step-pin {
        opacity: 0;
        pointer-events: none;
      }
      .step-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 10px 14px;
        background: var(--bg-soft, #f8fafc);
        border-top: 1px solid var(--border-color, #e2e8f0);
      }
      .step-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.82rem;
        line-height: 1.3;
        padding: 4px 10px 4px 6px;
        border-radius: 999px;
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border-color, #cbd5e1);
        color: var(--text-main, #1e293b);
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .step-legend-item:hover,
      .step-legend-item.is-highlighted {
        border-color: #2563eb;
        background: rgba(37, 99, 235, 0.08);
        color: #1d4ed8;
      }
      [data-theme="dark"] .step-legend-item:hover,
      [data-theme="dark"] .step-legend-item.is-highlighted {
        color: #93c5fd;
        background: rgba(37, 99, 235, 0.22);
      }
      .step-legend-num {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f97316, #ef4444);
        color: #ffffff;
        font-size: 11px;
        font-weight: 800;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .btn-toggle-steps {
        margin-left: auto;
        background: rgba(249, 115, 22, 0.14);
        color: #ea580c;
        border: 1px solid rgba(249, 115, 22, 0.35);
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .btn-toggle-steps:hover {
        background: #f97316;
        color: #ffffff;
      }
      .screen-preview-caption .btn-zoom-hint {
        margin-left: 8px;
      }
      .lightbox-img-stage {
        position: relative;
        display: inline-block;
        line-height: 0;
      }
      .lightbox-img-stage .step-pin {
        width: 30px;
        height: 30px;
        font-size: 14px;
      }
      @media (max-width: 640px) {
        .step-pin {
          width: 21px;
          height: 21px;
          font-size: 11px;
          border-width: 2px;
        }
        .btn-toggle-steps {
          margin-left: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function buildPins(container, steps, lang) {
    container.querySelectorAll('.step-pin').forEach(el => el.remove());
    steps.forEach((st, idx) => {
      const pin = document.createElement('span');
      pin.className = 'step-pin';
      pin.textContent = String(idx + 1);
      pin.style.left = st.x + '%';
      pin.style.top = st.y + '%';
      const label = st[lang] || st.vi || st.en || '';
      pin.setAttribute('data-step', String(idx + 1));
      pin.setAttribute('data-tooltip', `${idx + 1}. ${label}`);
      pin.setAttribute('aria-label', `${UI_TEXT[lang].stepPrefix} ${idx + 1}: ${label}`);
      container.appendChild(pin);
    });
  }

  function highlightStep(wrap, legend, stepNum) {
    wrap.querySelectorAll('.step-pin').forEach(p => {
      p.classList.toggle('is-highlighted', p.getAttribute('data-step') === stepNum);
    });
    if (legend) {
      legend.querySelectorAll('.step-legend-item').forEach(item => {
        item.classList.toggle('is-highlighted', item.getAttribute('data-step') === stepNum);
      });
    }
  }

  function initAnnotations() {
    injectStyles();
    const lang = getLang();
    const ui = UI_TEXT[lang];

    document.querySelectorAll('.screen-preview').forEach(box => {
      const img = box.querySelector('img');
      if (!img) return;
      const src = img.getAttribute('src');
      const steps = ANNOTATIONS[src];
      if (!steps || !steps.length) return;

      // Wrap image
      const wrap = document.createElement('div');
      wrap.className = 'annotated-img-wrap';
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);

      buildPins(wrap, steps, lang);

      // Build legend below image
      const legend = document.createElement('div');
      legend.className = 'step-legend';
      steps.forEach((st, idx) => {
        const stepNum = String(idx + 1);
        const item = document.createElement('span');
        item.className = 'step-legend-item';
        item.setAttribute('data-step', stepNum);
        const label = st[lang] || st.vi || st.en || '';
        item.innerHTML = `<span class="step-legend-num">${stepNum}</span><span>${label}</span>`;
        item.addEventListener('mouseenter', () => highlightStep(wrap, legend, stepNum));
        item.addEventListener('mouseleave', () => highlightStep(wrap, legend, ''));
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          highlightStep(wrap, legend, stepNum);
        });
        legend.appendChild(item);
      });
      wrap.insertAdjacentElement('afterend', legend);

      // Hover pin highlights legend
      wrap.querySelectorAll('.step-pin').forEach(pin => {
        const stepNum = pin.getAttribute('data-step');
        pin.addEventListener('mouseenter', () => highlightStep(wrap, legend, stepNum));
        pin.addEventListener('mouseleave', () => highlightStep(wrap, legend, ''));
        pin.addEventListener('click', (e) => {
          e.stopPropagation();
          highlightStep(wrap, legend, stepNum);
        });
      });

      // Toggle button in caption
      const cap = box.querySelector('.screen-preview-caption');
      if (cap) {
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'btn-toggle-steps';
        toggleBtn.textContent = ui.toggleOn;
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const hidden = wrap.classList.toggle('pins-hidden');
          toggleBtn.textContent = hidden ? ui.toggleOff : ui.toggleOn;
        });
        const zoomBtn = cap.querySelector('.btn-zoom-hint');
        if (zoomBtn) cap.insertBefore(toggleBtn, zoomBtn);
        else cap.appendChild(toggleBtn);
      }
    });

    // Sync pins with Lightbox when opened or zoomed
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg && lightboxImg.parentElement) {
      const stage = document.createElement('div');
      stage.className = 'lightbox-img-stage';
      lightboxImg.parentNode.insertBefore(stage, lightboxImg);
      stage.appendChild(lightboxImg);

      const syncLightboxPins = () => {
        const rawSrc = lightboxImg.getAttribute('src') || '';
        const steps = ANNOTATIONS[rawSrc];
        if (steps && steps.length) {
          buildPins(stage, steps, lang);
        } else {
          stage.querySelectorAll('.step-pin').forEach(el => el.remove());
        }
      };

      const observer = new MutationObserver(syncLightboxPins);
      observer.observe(lightboxImg, { attributes: true, attributeFilter: ['src'] });
      syncLightboxPins();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnnotations);
  } else {
    initAnnotations();
  }
})();
