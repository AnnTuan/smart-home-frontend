import { Link, NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Link className="brand" to="/">
          🏠 SMART HOME
        </Link>

        <nav className="nav">
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/devices">Thiết bị</NavLink>
          <NavLink to="/sensors">Cảm biến</NavLink>
          <NavLink to="/automation">Tự động hóa</NavLink>
          <NavLink to="/logs">Lịch sử</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}