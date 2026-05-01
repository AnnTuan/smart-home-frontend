# Frontend Architecture

Tài liệu này mô tả kiến trúc frontend của dự án `Smart-Home` để code mới vào là có thể theo đúng cấu trúc, dễ maintain và dễ mở rộng.

## 1. Mục tiêu kiến trúc

Frontend được xây theo hướng:

- **Feature-friendly**: dễ thêm feature mới mà không làm rối code cũ
- **Separation of concerns**: tách rõ UI, business logic và data fetching
- **Scalable**: đủ gọn cho giai đoạn đầu nhưng có đường mở rộng khi project lớn dần
- **Consistent**: component, page, service, hook có quy ước rõ ràng

## 2. Cấu trúc kiến trúc hiện tại

```text
src/
├── App.jsx
├── components/
│   ├── common/
│   └── layout/
├── hooks/
├── pages/
├── services/
└── styles/
```

### Vai trò chính

- `components/`: nơi đặt component tái sử dụng
- `pages/`: nơi đặt các màn hình gắn với route
- `services/`: nơi xử lý gọi API và data access
- `hooks/`: nơi đặt logic React tái sử dụng
- `styles/`: nơi chứa style dùng chung toàn app

## 3. Luồng dữ liệu khuyến nghị

Luồng chuẩn khi làm feature mới:

1. `page` nhận request từ route
2. `page` gọi `service` hoặc `hook`
3. `service` tương tác với backend API
4. `hook` giữ logic state bất đồng bộ nếu cần
5. `component` chỉ tập trung render UI

Ví dụ:

- `DevicesPage` gọi `deviceService`
- `deviceService` gọi backend `/api/devices`
- component con như `DeviceCard` chỉ nhận props và render

## 4. Quy ước chia thư mục

### `src/components/common/`
Chứa các component UI nhỏ, độc lập, dùng nhiều nơi.

Ví dụ:
- `Button`
- `Container`
- `Input`
- `Modal`
- `Badge`

Nguyên tắc:
- component trong đây không nên phụ thuộc business logic của từng page
- ưu tiên nhận `props` để tái sử dụng tối đa

### `src/components/layout/`
Chứa các component khung bố cục tổng.

Ví dụ:
- `AppLayout`
- `Sidebar`
- `Topbar`
- `Footer`

Nguyên tắc:
- layout không nên biết quá sâu vào từng feature
- layout chỉ lo khung nhìn, điều hướng, vùng render nội dung

### `src/pages/`
Chứa màn hình theo route.

Ví dụ:
- `HomePage`
- `DevicesPage`
- `AboutPage`
- `NotFoundPage`

Nguyên tắc:
- mỗi page nên là một unit điều phối logic vừa đủ
- nếu page quá lớn, tách UI ra component con hoặc logic ra hook/service

### `src/services/`
Chứa lớp giao tiếp với backend.

Nên có:
- `api.js`: wrapper fetch/axios
- `auth.service.js`
- `device.service.js`
- `user.service.js`

Nguyên tắc:
- component/page không gọi fetch trực tiếp nếu có thể tránh
- tất cả endpoint và mapping dữ liệu nên nằm trong service

### `src/hooks/`
Chứa custom hook tái sử dụng.

Ví dụ:
- `useAsync`
- `useDebounce`
- `useLocalStorage`
- `useToggle`

Nguyên tắc:
- hook dùng để gom logic state/side effect
- nếu nhiều page dùng chung logic, ưu tiên đẩy vào hook

### `src/styles/`
Chứa style toàn cục và biến giao diện.

Nên có:
- `global.css`
- `variables.css`
- `theme.css`
- `reset.css`

Nguyên tắc:
- style dùng chung đặt ở đây
- tránh nhét CSS dài vào component nếu dự án bắt đầu lớn

## 5. Luồng thêm feature mới

Khi cần thêm tính năng mới, khuyến nghị làm theo thứ tự:

1. Xác định route/page
2. Tạo service để gọi API hoặc thao tác data
3. Tạo component con nếu UI có phần lặp lại
4. Tạo hook nếu có logic async/state tái dùng
5. Cập nhật router và layout nếu cần
6. Bổ sung style dùng chung nếu có pattern mới

## 6. Quy ước maintain

- Page chỉ nên điều phối, không ôm hết logic.
- Component reusable phải thật sự độc lập.
- Service phải là nơi duy nhất biết endpoint backend.
- Hook phải có tên rõ ràng và chỉ xử lý một nhiệm vụ chính.
- Không để business logic nằm rải rác trong JSX.

## 7. Khi project lớn hơn

Nếu dự án lớn dần, có thể chuyển sang cấu trúc theo domain/feature:

```text
src/
├── features/
├── shared/
├── pages/
└── app/
```

Nhưng ở giai đoạn hiện tại, cấu trúc đang dùng là hợp lý vì:

- dễ đọc
- dễ onboard
- ít lớp thừa
- đủ chuẩn để scale lên mức vừa và lớn
