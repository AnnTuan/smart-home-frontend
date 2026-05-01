import { Container } from '../components/common/Container'

const devices = [
  { name: 'Living Room Light', status: 'On' },
  { name: 'Bedroom AC', status: 'Off' },
  { name: 'Security Camera', status: 'Online' },
]

export function DevicesPage() {
  return (
    <Container>
      <section className="card">
        <p className="badge">Devices</p>
        <h1>Trang devices mẫu</h1>
        <div className="grid">
          {devices.map((device) => (
            <article key={device.name} className="tile">
              <h2>{device.name}</h2>
              <p>{device.status}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
