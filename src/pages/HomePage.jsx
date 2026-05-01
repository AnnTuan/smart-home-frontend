import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'

const features = [
  {
    title: 'Điều khiển tập trung',
    description: 'Quản lý đèn, điều hòa, rèm cửa và các thiết bị trong một giao diện duy nhất.',
  },
  {
    title: 'Tự động hóa thông minh',
    description: 'Tạo ngữ cảnh theo thời gian, trạng thái cảm biến hoặc thói quen sinh hoạt.',
  },
  {
    title: 'Theo dõi theo thời gian thực',
    description: 'Nắm nhanh trạng thái thiết bị, mức tiêu thụ điện và các cảnh báo quan trọng.',
  },
]

const stats = [
  { value: '24/7', label: 'Giám sát hệ thống' },
  { value: '120+', label: 'Thiết bị kết nối' },
  { value: '99.9%', label: 'Tính ổn định mong muốn' },
]

const rooms = ['Phòng khách', 'Phòng ngủ', 'Nhà bếp', 'Sân vườn']

export function HomePage() {
  return (
    <Container>
      <section className="hero card landing-hero">
        <div className="hero-copy">
          <p className="badge">Smart Home </p>
          <h1>Ngôi nhà thông minh, gọn gàng và dễ kiểm soát.</h1>
          <p className="description">
            Landing page giới thiệu hệ sinh thái Smarthome với khả năng điều khiển thiết bị,
            tự động hóa kịch bản và theo dõi trạng thái ngôi nhà trong một trải nghiệm hiện đại.
          </p>

          <div className="actions">
            <Button as="a" href="/devices">
              Khám phá thiết bị
            </Button>
            <Button as="a" variant="secondary" href="/about">
              Tìm hiểu thêm
            </Button>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <span className="panel-dot" />
            <span>Live Home </span>
          </div>

          <div className="panel-card panel-glow">
            <p className="panel-label">Hôm nay</p>
            <h2>Không gian sống đang sẵn sàng</h2>
            <p>
              Đèn tự động sáng lúc 18:00, điều hòa duy trì 26°C và cảm biến an ninh luôn hoạt động.
            </p>
          </div>

          <div className="mini-grid">
            {rooms.map((room, index) => (
              <article key={room} className="mini-card">
                <span>{room}</span>
                <strong>{index % 2 === 0 ? 'On' : 'Standby'}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p className="badge">Tại sao chọn Smarthome</p>
          <h2>Thiết kế cho cuộc sống tiện nghi hơn mỗi ngày.</h2>
        </div>

        <div className="grid feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="tile feature-tile">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
