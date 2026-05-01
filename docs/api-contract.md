# Frontend API Contract

Tài liệu này mô tả cách frontend trong dự án `Smart-Home` nên giao tiếp với backend để code thống nhất và dễ bảo trì.

## 1. Mục tiêu

- tránh gọi API trực tiếp rải rác trong component
- thống nhất cách xử lý loading/error/success
- dễ mock dữ liệu khi backend chưa hoàn thiện
- giúp team frontend/backend làm việc song song

## 2. Base URL

Frontend đọc base URL từ biến môi trường:

```text
VITE_API_BASE_URL=http://localhost:5000/api
```

Nếu không có env, app có thể fallback về mặc định local.

## 3. Quy tắc gọi API

### 3.1 Không gọi fetch trực tiếp trong component nếu có thể tránh

Nên gom vào `src/services/`.

Ví dụ:

- `src/services/api.js`: wrapper chung
- `src/services/device.service.js`: logic cho thiết bị
- `src/services/auth.service.js`: logic đăng nhập

### 3.2 Mỗi service chỉ phụ trách một domain

Ví dụ:
- `health` cho kiểm tra hệ thống
- `devices` cho thiết bị
- `auth` cho xác thực

### 3.3 Xử lý response nhất quán

Frontend nên assume backend trả về JSON ổn định, có thể theo các dạng:

#### Success

```json
{
  "status": "ok",
  "service": "backend",
  "message": "Smart Home API is running"
}
```

hoặc

```json
{
  "items": []
}
```

#### Error

```json
{
  "success": false,
  "message": "Something went wrong",
  "errors": []
}
```

## 4. Contract cho từng màn hình

### 4.1 Home/Dashboard

Frontend có thể gọi:

- `GET /api/health`
- `GET /api/devices`

Mục tiêu:
- hiển thị trạng thái backend
- hiển thị tóm tắt số lượng thiết bị

### 4.2 Devices page

Frontend sẽ cần:

- `GET /api/devices`
- sau này: create/update/delete device

## 5. Cách tổ chức code phía frontend

### `src/services/`

Nơi chứa:
- wrapper fetch/axios
- mapping data
- hàm gọi API theo domain

### `src/hooks/`

Nơi chứa:
- hook async
- hook fetch data
- hook debounce
- hook form state

### `src/pages/`

Nơi chứa:
- page logic
- orchestration gọi service/hook
- layout theo route

### `src/components/`

Nơi chứa:
- component tái sử dụng
- component presentational
- component layout

## 6. Xử lý loading/error đề xuất

### Loading

- hiển thị skeleton hoặc text loading
- giữ UI ổn định, tránh layout shift lớn

### Error

- hiển thị message thân thiện
- không làm crash toàn page nếu chỉ một phần data lỗi
- cho phép retry nếu phù hợp

## 7. Quy ước mở rộng

Khi app lớn hơn, frontend nên có thêm:

- `src/features/`
- `src/store/` nếu dùng global state
- `src/lib/` cho helper chung
- `src/mocks/` cho mock API

## 8. Checklist khi thêm API mới

- [ ] Backend đã có endpoint rõ ràng
- [ ] Response format thống nhất
- [ ] Service frontend đã được tạo
- [ ] Page/hook/component đã dùng service đó
- [ ] Có xử lý loading/error đầy đủ
