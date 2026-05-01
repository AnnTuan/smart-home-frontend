# Frontend Sitemap

Tài liệu này mô tả sitemap và vai trò từng thư mục trong phần `frontend/` để người mới đọc repo có thể nắm nhanh cấu trúc.

## 1. Sitemap tổng quan

```text
frontend/
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── docs/
│   └── sitemap.md
└── src/
    ├── App.jsx
    ├── components/
    │   ├── common/
    │   └── layout/
    ├── hooks/
    ├── pages/
    ├── services/
    └── styles/
```

## 2. Mô tả chức năng từng thư mục

### `src/`
Nơi chứa toàn bộ source code React.

### `src/App.jsx`
Entry component của UI, nơi khai báo routes chính và layout tổng.

### `src/components/`
Chứa các component có thể tái sử dụng nhiều lần.

- `common/`: component nhỏ, độc lập, dùng chung như `Button`, `Container`
- `layout/`: component khung bố cục tổng như `AppLayout`, `Sidebar`, `Header`

### `src/pages/`
Chứa các màn hình gắn với route.

Ví dụ:
- `HomePage`
- `AboutPage`
- `DevicesPage`
- `NotFoundPage`

### `src/hooks/`
Chứa custom hooks để tái sử dụng logic React.

Ví dụ:
- `useAsync`
- `useDebounce`
- `useLocalStorage`

### `src/services/`
Chứa các lớp gọi API và xử lý dữ liệu từ backend.

Ví dụ:
- `api.js`
- `auth.service.js`
- `device.service.js`

### `src/styles/`
Chứa style dùng chung toàn app.

Ví dụ:
- `global.css`
- `variables.css`
- `theme.css`

## 3. Gợi ý luồng phát triển

Khi thêm feature mới, nên đi theo thứ tự:

1. Tạo service để gọi API
2. Tạo page cho route mới
3. Tách component nếu UI dùng lại nhiều nơi
4. Bổ sung hook nếu có logic tái sử dụng
5. Cập nhật route trong `App.jsx` hoặc router riêng nếu project lớn hơn

## 4. Quy ước maintain

- Mỗi page chỉ nên điều phối dữ liệu và layout, không nhét toàn bộ logic phức tạp.
- Component dùng lại nhiều nơi phải đặt trong `components/common` hoặc `components/layout`.
- Logic gọi API không để trong component, nên tách vào `services/`.
- Logic state/phức tạp nên tách thành custom hook.
