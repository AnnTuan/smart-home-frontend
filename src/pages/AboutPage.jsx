import { Container } from '../components/common/Container'

export function AboutPage() {
  return (
    <Container>
      <section className="card">
        <p className="badge">Structure</p>
        <h1>Cấu trúc frontend</h1>
        <ul className="list">
          <li><code>components/</code> cho component tái sử dụng</li>
          <li><code>pages/</code> cho màn hình theo route</li>
          <li><code>services/</code> cho gọi API</li>
          <li><code>hooks/</code> cho logic dùng lại</li>
          <li><code>styles/</code> cho giao diện dùng chung</li>
        </ul>
      </section>
    </Container>
  )
}
