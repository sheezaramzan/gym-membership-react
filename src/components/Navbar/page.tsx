import { Link, useLocation, useNavigate } from 'react-router-dom'

interface NavbarProps {
  darkMode?: boolean;
  toggleTheme?: () => void;
}

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const active = (path: string) =>
    location.pathname === path ? 'text-[#b39ddb] dark:text-[#9b5ff7]' : 'text-white hover:text-[#b39ddb] dark:hover:text-[#9b5ff7]'

  return (
    <header className="bg-[#2c1654] dark:bg-[#0d061a] transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-4 sticky top-0 z-50 shadow-lg gap-4 lg:gap-0">
      <div className="text-2xl font-black tracking-widest text-white">
        <Link to="/" className="no-underline text-white">GYMFIT</Link>
      </div>
      <nav className="flex flex-wrap justify-center gap-3 md:gap-5">
        <Link to="/" className={`${active('/')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Home</Link>
        <Link to="/dashboard" className={`${active('/dashboard')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Dashboard</Link>
        <Link to="/cart" className={`${active('/cart')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Cart</Link>
        <Link to="/reviews" className={`${active('/reviews')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Reviews</Link>
        <Link to="/about" className={`${active('/about')} text-xs md:text-sm font-semibold transition-colors no-underline`}>About</Link>
        <Link to="/profile" className={`${active('/profile')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Profile</Link>
        <Link to="/services" className={`${active('/services')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Services</Link>
        <Link to="/contact" className={`${active('/contact')} text-xs md:text-sm font-semibold transition-colors no-underline`}>Contact</Link>
      </nav>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {toggleTheme && (
          <button onClick={toggleTheme} className="text-xl w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer" aria-label="Toggle Dark Mode" title="Dark/Light Mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        )}
        <button onClick={() => navigate('/login')}
          className="bg-transparent border-2 border-white text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold hover:bg-white/10 transition-colors cursor-pointer">
          Login
        </button>
        <button onClick={() => navigate('/signup')}
          className="bg-[#7b2ff7] dark:bg-[#9b5ff7] border-none text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold hover:opacity-85 transition-opacity cursor-pointer">
          Register
        </button>
      </div>
    </header>
  )
}
