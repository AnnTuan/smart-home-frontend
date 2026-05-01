import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function SensorsPage() {
  const [sensors, setSensors] = useState([])
  const [form, setForm] = useState({
    sensor_name: '',
    value: '',
    unit: 'C',
  })

  const loadSensors = () => {
    api.getSensors().then(setSensors)
  }

  useEffect(() => {
    loadSensors()
  }, [])

  const sendSensor = async () => {
    if (!form.sensor_name) {
      alert('Bạn chưa nhập tên cảm biến')
      return
    }

    await api.addSensor({
      sensor_name: form.sensor_name,
      value: Number(form.value),
      unit: form.unit,
    })

    setForm({ sensor_name: '', value: '', unit: 'C' })
    loadSensors()
  }

  return (
    <div>
      <div className="page-header">
        <p className="badge">Sensor Monitoring</p>
        <h1>Giám sát cảm biến</h1>
        <p>Nhiệt độ, độ ẩm, ánh sáng, khí gas và chuyển động.</p>
      </div>

      <div className="form-card">
        <input
          placeholder="Tên cảm biến: DHT22"
          value={form.sensor_name}
          onChange={(e) => setForm({ ...form, sensor_name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Giá trị"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
        />

        <input
          placeholder="Đơn vị"
          value={form.unit}
          onChange={(e) => setForm({ ...form, unit: e.target.value })}
        />

        <button onClick={sendSensor}>Gửi dữ liệu test</button>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cảm biến</th>
              <th>Giá trị</th>
              <th>Đơn vị</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody>
            {sensors.map((sensor) => (
              <tr key={sensor.id}>
                <td>{sensor.id}</td>
                <td>{sensor.sensor_name}</td>
                <td>{sensor.value}</td>
                <td>{sensor.unit}</td>
                <td>{sensor.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}