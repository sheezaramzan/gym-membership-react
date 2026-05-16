import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Login({ showToast }: Props) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: { username?: string; password?: string } = {}
    if (!username.trim()) errs.username = 'Username or email is required.'
    if (!password.trim()) errs.password = 'Password is required.'
    if (Object.keys(errs).length) { setErrors(errs); return }

    const users: { name: string; email: string; password: string }[] =
      JSON.parse(localStorage.getItem('gymfit_users') || '[]')
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
    <div className="flex-1 flex min-h-[calc(100vh-64px)]">
      {/* LEFT PANEL */}
      <div className="flex-1 bg-gradient-to-br from-[#1a0d33] via-[#2c1654] to-[#4a1a8c] dark:from-[#0d061a] dark:via-[#1a0d33] dark:to-[#2c1654] flex flex-col justify-center px-16 py-20 transition-colors duration-300">
        <p className="text-[#b39ddb] text-xs font-bold tracking-[4px] uppercase mb-5">Welcome Back</p>
        <h1 className="text-white text-5xl font-black leading-tight tracking-widest uppercase mb-5">
          Train Hard.<br /><span className="text-[#9b5ff7]">Live Strong.</span>
        </h1>
        <p className="text-white/70 text-sm leading-8 max-w-sm mb-10">
          Log in to access your personalised fitness dashboard, track your progress, and stay connected with your coaches.
        </p>
        <ul className="list-none flex flex-col gap-3">
          {['Access to 500+ workout programs','Personal training & nutrition plans','24/7 gym access nationwide','Track goals & real-time progress'].map(item => (
            <li key={item} className="text-white/85 text-sm flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[460px] flex-shrink-0 bg-white dark:bg-[#1a0d33] flex flex-col justify-center px-12 py-16 transition-colors duration-300">
        <h2 className="text-2xl font-black text-[#2c1654] dark:text-white tracking-wide uppercase mb-1">Member Login</h2>
        <p className="text-gray-400 text-sm mb-7">Enter your credentials to continue</p>
        <form onSubmit={handleSubmit}>
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-200 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="text" placeholder="Username or Email" value={username} onChange={e => setUsername(e.target.value)} />
          {errors.username && <span className="text-red-500 text-xs block -mt-1 mb-1">{errors.username}</span>}
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-200 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <span className="text-red-500 text-xs block -mt-1 mb-1">{errors.password}</span>}
          <p className="text-right mt-2"><a href="#" className="text-[#7b2ff7] dark:text-[#b39ddb] text-xs no-underline hover:underline">Forgot password?</a></p>
          <button type="submit"
            className="w-full py-3 mt-4 bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white font-bold text-sm rounded-md tracking-widest uppercase cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors border-none">
            Login
          </button>
        </form>
        <div className="relative text-center my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-white/10"></div></div>
          <span className="relative bg-white dark:bg-[#1a0d33] px-4 text-xs text-gray-400">or</span>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          New to GYMFIT? <a href="/signup" className="text-[#7b2ff7] dark:text-[#b39ddb] font-bold no-underline hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  )
}
