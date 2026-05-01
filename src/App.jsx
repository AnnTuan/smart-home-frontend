import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { DevicesPage } from './pages/DevicesPage'
import { SensorsPage } from './pages/SensorsPage'
import { LogsPage } from './pages/LogsPage'
import { AutomationPage } from './pages/AutomationPage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/sensors" element={<SensorsPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}