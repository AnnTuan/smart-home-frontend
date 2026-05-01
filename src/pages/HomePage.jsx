import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function HomePage() {
  const [devices, setDevices] = useState([])
  const [sensors, setSensors] = useState([])
  const [logs, setLogs] = useState([])

  useEffect(() => {
    api.getDevices().then(setDevices)
    api.getSensors().then(setSensors)
    api.getLogs().then(setLogs)
  }, [])

  const totalOn = devices.filter((d) => d.status === 'ON').length

  return (
    <div>
      <div className="page-header">
        <p className="badge">Smart Home IoT System</p>
        <h1>Dashboard quản lý nhà thông minh</h1>
        <p>Điều khiển đèn, quạt, TV, máy lạnh, cửa, cảm biến và tự động hóa.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Tổng thiết bị</span>
          <strong>{devices.length}</strong>
        </div>

        <div className="stat-card">
          <span>Thiết bị đang bật</span>
          <strong>{totalOn}</strong>
        </div>

        <div className="stat-card">
          <span>Dữ liệu cảm biến</span>
          <strong>{sensors.length}</strong>
        </div>

        <div className="stat-card">
          <span>Lịch sử thao tác</span>
          <strong>{logs.length}</strong>
        </div>
      </div>

      <div className="card">
        <h2>Kiến trúc hệ thống</h2>
        <div className="flow">
          <span>React App</span>
          <span>→</span>
          <span>Flask API</span>
          <span>→</span>
          <span>PostgreSQL</span>
          <span>→</span>
          <span>ESP32 / Arduino</span>
        </div>
      </div>
    </div>
  )
}