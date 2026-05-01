import { useEffect, useState } from 'react'
import { api } from '../services/api'

const currentUser = {
  username: 'admin',
  role: 'admin',
}

export function DevicesPage() {
  const [devices, setDevices] = useState([])
  const [form, setForm] = useState({
    name: '',
    room: '',
    type: 'light',
  })

  const loadDevices = () => {
    api.getDevices().then(setDevices)
  }

  useEffect(() => {
    loadDevices()
  }, [])

  const addDevice = async () => {
    if (!form.name) {
      alert('Bạn chưa nhập tên thiết bị')
      return
    }

    await api.addDevice({
      ...form,
      username: currentUser.username,
      role: currentUser.role,
    })

    setForm({ name: '', room: '', type: 'light' })
    loadDevices()
  }

  const controlDevice = async (id, status) => {
    await api.controlDevice(id, {
      username: currentUser.username,
      role: currentUser.role,
      status,
    })

    loadDevices()
  }

  const deleteDevice = async (id) => {
    if (!confirm('Bạn có chắc muốn xóa thiết bị này?')) return

    await api.deleteDevice(id, {
      role: currentUser.role,
    })

    loadDevices()
  }

  return (
    <div>
      <div className="page-header">
        <p className="badge">Device Control</p>
        <h1>Quản lý thiết bị</h1>
        <p>Bật/tắt đèn, quạt, TV, máy lạnh và cửa thông minh.</p>
      </div>

      <div className="form-card">
        <input
          placeholder="Tên thiết bị"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phòng"
          value={form.room}
          onChange={(e) => setForm({ ...form, room: e.target.value })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="light">Đèn</option>
          <option value="fan">Quạt</option>
          <option value="tv">TV</option>
          <option value="air_conditioner">Máy lạnh</option>
          <option value="door">Cửa</option>
        </select>

        <button onClick={addDevice}>Thêm thiết bị</button>
      </div>

      <div className="device-grid">
        {devices.map((device) => (
          <div className="device-card" key={device.id}>
            <div className="device-icon">
              {device.type === 'light' && '💡'}
              {device.type === 'fan' && '🌀'}
              {device.type === 'tv' && '📺'}
              {device.type === 'air_conditioner' && '❄️'}
              {device.type === 'door' && '🚪'}
            </div>

            <h3>{device.name}</h3>
            <p>Phòng: {device.room || 'Chưa rõ'}</p>
            <p>Loại: {device.type}</p>

            <p>
              Trạng thái:{' '}
              <b className={device.status === 'ON' ? 'status-on' : 'status-off'}>
                {device.status}
              </b>
            </p>

            <div className="actions">
              <button className="btn-on" onClick={() => controlDevice(device.id, 'ON')}>
                Bật
              </button>

              <button className="btn-off" onClick={() => controlDevice(device.id, 'OFF')}>
                Tắt
              </button>

              <button className="btn-delete" onClick={() => deleteDevice(device.id)}>
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}