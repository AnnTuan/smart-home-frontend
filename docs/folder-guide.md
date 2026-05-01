# Frontend Folder Guide

Tài liệu này mô tả chi tiết chức năng từng folder trong `frontend/`.

## Root level

- `index.html`: HTML shell của Vite.
- `package.json`: dependencies, scripts và metadata.
- `vite.config.js`: cấu hình build/dev server.
- `eslint.config.js`: cấu hình lint.
- `.env.example`: biến môi trường mẫu.

## `src/components/`

Chứa các component tái sử dụng.

### `src/components/common/`
Component nền tảng, nhỏ, độc lập.

Ví dụ:
- `Button`
- `Container`
- `Card`
- `EmptyState`
- `StatusBadge`

### `src/components/layout/`
Component layout tổng.

Ví dụ:
- `AppLayout`
- `Header`
- `Sidebar`
- `Footer`

## `src/pages/`

Chứa màn hình ứng với từng route.

Quy ước:
- Mỗi file là một page
- Page có thể compose từ nhiều component nhỏ
- Không nhồi logic gọi API phức tạp vào page nếu có thể tách sang service/hook

## `src/hooks/`

Chứa custom hooks.

Dùng cho:
- fetch data lặp lại
- debounce
- local storage
- pagination
- form state

## `src/services/`

Chứa lớp giao tiếp với backend.

Dùng cho:
- gọi API
- mapping response
- xử lý endpoint theo domain

## `src/styles/`

Chứa style dùng chung.

Dùng cho:
- biến theme
- typography
- reset/global css
- utility styles

## Quy ước mở rộng

Nếu project lớn hơn, có thể thêm:

- `src/routes/`: router config riêng
- `src/contexts/`: state dùng chung
- `src/features/`: tách theo domain nghiệp vụ
- `src/assets/`: ảnh, icons, fonts
- `src/utils/`: helper thuần
