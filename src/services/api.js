const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || 'Có lỗi xảy ra')
  }

  return data
}

export const api = {
  getDevices: () => request('/devices'),

  addDevice: (device) =>
    request('/devices', {
      method: 'POST',
      body: JSON.stringify(device),
    }),

  controlDevice: (id, payload) =>
    request(`/devices/${id}/control`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  deleteDevice: (id, payload) =>
    request(`/devices/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(payload),
    }),

  getSensors: () => request('/sensor'),

  addSensor: (sensor) =>
    request('/sensor', {
      method: 'POST',
      body: JSON.stringify(sensor),
    }),

  getLogs: () => request('/logs'),

  checkAutomation: (payload) =>
    request('/automation/check', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}