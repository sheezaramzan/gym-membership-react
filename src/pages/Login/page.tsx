import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Login({ showToast }: Props) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{username?:string;password?:string}>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: {username?:string;password?:string} = {}
    if (!username.trim()) errs.username = 'Username or email is required.'
    if (!password.trim()) errs.password = 'Password is required.'
    if (Object.keys(errs).length) { setErrors(errs); return }

    const users: {name:string;email:string;password:string}[] = JSON.parse(localStorage.getItem('gymfit_users') || '[]')
    const match = users.find(u => (u.email === username || u.name === username) && u.password === password)
    if (match) {
      localStorage.setItem('gymfit_logged_in', JSON.stringify(match))
      showToast('Welcome back, ' + match.name + '!')
      setTimeout(() => navigate('/dashboard'), 1500)
    } else {
      showToast('Invalid username or password.', 'error')
    }
  }

  return (
    <div className="login-page">
      <div className="login-hero-left">
        <p className="hero-tagline">Welcome Back</p>
        <h1 className="hero-headline">Train Hard.<br /><span>Live Strong.</span></h1>
        <p className="hero-sub">Log in to access your personalised fitness dashboard, track your progress, and stay connected with your coaches.</p>
        <ul className="hero-benefits">
          <li>Access to 500+ workout programs</li>
          <li>Personal training &amp; nutrition plans</li>
          <li>24/7 gym access nationwide</li>
          <li>Track goals &amp; real-time progress</li>
        </ul>
      </div>
      <div className="login-hero-right">
        <h2>Member Login</h2>
        <p className="login-sub">Enter your credentials to continue</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username or Email" value={username} onChange={e => setUsername(e.target.value)} />
          {errors.username && <span className="field-error">{errors.username}</span>}
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <span className="field-error">{errors.password}</span>}
          <p className="forgot-link"><a href="#">Forgot password?</a></p>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-divider">or</div>
        <p className="form-footer">New to GYMFIT? <a href="/signup">Create an account</a></p>
      </div>
    </div>
  )
}
