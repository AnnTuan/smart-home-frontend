export function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <p className="badge">Project Information</p>
        <h1>Đề tài: Hệ thống IoT nhà thông minh</h1>
        <p>
          Ứng dụng quản lý thiết bị nhà thông minh, có phân quyền người dùng,
          điều khiển thiết bị, giám sát cảm biến và tự động hóa.
        </p>
      </div>

      <div className="info-grid">
        <div className="card">
          <h2>Vai trò người dùng</h2>
          <ul>
            <li>Admin: quản lý toàn bộ hệ thống</li>
            <li>Owner: điều khiển thiết bị, xem log</li>
            <li>Member: điều khiển thiết bị cơ bản</li>
            <li>Guest: chỉ xem dữ liệu cảm biến</li>
          </ul>
        </div>

        <div className="card">
          <h2>Thiết bị mô phỏng</h2>
          <ul>
            <li>Đèn</li>
            <li>Quạt</li>
            <li>TV</li>
            <li>Máy lạnh</li>
            <li>Cửa thông minh</li>
          </ul>
        </div>

        <div className="card">
          <h2>Cảm biến</h2>
          <ul>
            <li>DHT22: nhiệt độ, độ ẩm</li>
            <li>MQ-2: khí gas</li>
            <li>PIR: chuyển động</li>
            <li>LDR: ánh sáng</li>
          </ul>
        </div>
      </div>
    </div>
  )
}