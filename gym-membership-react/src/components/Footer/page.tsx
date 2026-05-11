import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo">GYMFIT</span>
          <p>Your local gym and fitness destination. Expert coaching, real results, and a community that lifts you up.</p>
          <div className="footer-social">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Programs</h4>
          <Link to="/services">Weight Training</Link>
          <Link to="/services">Cardio</Link>
          <Link to="/services">Fitness Classes</Link>
          <Link to="/services">Personal Training</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/">About Us</Link>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Account</h4>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/signup">Membership</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2025 GymFit. All rights reserved.</div>
    </footer>
  )
}
