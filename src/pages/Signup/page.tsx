import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Signup({ showToast }: Props) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const set = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(form.password)) errs.password = 'Password must be at least 8 characters with a letter and number.'
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match.'
    if (Object.keys(errs).length) { setErrors(errs); return }

    const users: { name: string; email: string; password: string; joined: string }[] =
      JSON.parse(localStorage.getItem('gymfit_users') || '[]')
    if (users.find(u => u.email === form.email)) { setErrors({ email: 'An account with this email already exists.' }); return }

    const newUser = { name: form.name.trim(), email: form.email.trim(), password: form.password, joined: new Date().toLocaleDateString() }
    users.push(newUser)
    localStorage.setItem('gymfit_users', JSON.stringify(users))
    localStorage.setItem('gymfit_logged_in', JSON.stringify(newUser))
    showToast('Account created! Welcome to GymFit, ' + newUser.name + '!')
    setTimeout(() => navigate('/dashboard'), 1500)
  }

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-5 bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] dark:from-[#0d061a] dark:to-[#2c1654] transition-colors duration-300">
      <div className="bg-white dark:bg-[#1a0d33] p-10 rounded-xl w-96 shadow-2xl dark:shadow-none dark:border dark:border-white/10 transition-colors duration-300">
        <h2 className="text-center text-2xl font-bold text-[#2c1654] dark:text-white tracking-wide mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="text" placeholder="Full Name" value={form.name} onChange={e => set('name', e.target.value)} />
          {errors.name && <span className="text-red-500 text-xs block">{errors.name}</span>}
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="email" placeholder="Email Address" value={form.email} onChange={e => set('email', e.target.value)} />
          {errors.email && <span className="text-red-500 text-xs block">{errors.email}</span>}
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="password" placeholder="Password" value={form.password} onChange={e => set('password', e.target.value)} />
          {errors.password && <span className="text-red-500 text-xs block">{errors.password}</span>}
          <input className="w-full px-4 py-3 my-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors" type="password" placeholder="Confirm Password" value={form.confirm} onChange={e => set('confirm', e.target.value)} />
          {errors.confirm && <span className="text-red-500 text-xs block">{errors.confirm}</span>}
          <button type="submit"
            className="w-full py-3 mt-3 bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white font-bold text-sm rounded-md tracking-wide cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors border-none">
            Register
          </button>
          <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            Already have an account? <a href="/login" className="text-[#7b2ff7] dark:text-[#b39ddb] font-bold no-underline hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}
