import { Link, NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="layout">
      <header className="topbar">
        <Link className="brand" to="/">
          Smart Home
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/devices">Devices</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
