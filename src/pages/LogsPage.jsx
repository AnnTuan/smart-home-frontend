import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function LogsPage() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    api.getLogs().then(setLogs)
  }, [])

  return (
    <div>
      <div className="page-header">
        <p className="badge">Activity Logs</p>
        <h1>Lịch sử hoạt động</h1>
        <p>Lưu lại thao tác bật/tắt thiết bị của người dùng.</p>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Hành động</th>
              <th>Thiết bị</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.username}</td>
                <td>{log.action}</td>
                <td>{log.device_name}</td>
                <td>{log.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}