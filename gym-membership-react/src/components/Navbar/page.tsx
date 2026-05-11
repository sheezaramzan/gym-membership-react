import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path ? 'active' : ''

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>GYMFIT</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/services" className={isActive('/services')}>Services</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
      </nav>
      <div className="cta">
        <button className="outline" onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </header>
  )
}
