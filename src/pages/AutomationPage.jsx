import { useState } from 'react'
import { api } from '../services/api'

export function AutomationPage() {
  const [form, setForm] = useState({
    temperature: '',
    gas: '',
    light: '',
    motion: 0,
  })

  const [actions, setActions] = useState([])

  const checkAutomation = async () => {
    const data = await api.checkAutomation({
      temperature: Number(form.temperature),
      gas: Number(form.gas),
      light: Number(form.light),
      motion: Number(form.motion),
    })

    setActions(data.actions || [])
  }

  return (
    <div>
      <div className="page-header">
        <p className="badge">Automation Rules</p>
        <h1>Tự động hóa thông minh</h1>
        <p>Kiểm tra luật tự động: nóng bật quạt, tối bật đèn, gas cảnh báo.</p>
      </div>

      <div className="form-card">
        <input
          type="number"
          placeholder="Nhiệt độ"
          value={form.temperature}
          onChange={(e) => setForm({ ...form, temperature: e.target.value })}
        />

        <input
          type="number"
          placeholder="Gas"
          value={form.gas}
          onChange={(e) => setForm({ ...form, gas: e.target.value })}
        />

        <input
          type="number"
          placeholder="Ánh sáng"
          value={form.light}
          onChange={(e) => setForm({ ...form, light: e.target.value })}
        />

        <select
          value={form.motion}
          onChange={(e) => setForm({ ...form, motion: e.target.value })}
        >
          <option value={0}>Không có chuyển động</option>
          <option value={1}>Có chuyển động</option>
        </select>

        <button onClick={checkAutomation}>Kiểm tra</button>
      </div>

      <div className="card">
        <h2>Kết quả</h2>

        {actions.length === 0 ? (
          <p>Chưa có hành động tự động.</p>
        ) : (
          actions.map((action, index) => (
            <p key={index} className="alert-item">
              ⚡ {action}
            </p>
          ))
        )}
      </div>
    </div>
  )
}