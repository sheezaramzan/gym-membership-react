import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Signup({ showToast }: Props) {
  const navigate = useNavigate()
  const [form, setForm] = useState({name:'',email:'',password:'',confirm:''})
  const [errors, setErrors] = useState<Record<string,string>>({})
  const set = (f: string, v: string) => setForm(p => ({...p,[f]:v}))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string,string> = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(form.password)) errs.password = 'Password must be at least 8 characters with a letter and number.'
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match.'
    if (Object.keys(errs).length) { setErrors(errs); return }

    const users: {name:string;email:string;password:string;joined:string}[] = JSON.parse(localStorage.getItem('gymfit_users') || '[]')
    if (users.find(u => u.email === form.email)) { setErrors({email:'An account with this email already exists.'}); return }

    const newUser = {name:form.name.trim(),email:form.email.trim(),password:form.password,joined:new Date().toLocaleDateString()}
    users.push(newUser)
    localStorage.setItem('gymfit_users', JSON.stringify(users))
    localStorage.setItem('gymfit_logged_in', JSON.stringify(newUser))
    showToast('Account created! Welcome to GymFit, ' + newUser.name + '!')
    setTimeout(() => navigate('/dashboard'), 1500)
  }

  return (
    <div className="signup-page">
      <div className="login-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={form.name} onChange={e => set('name',e.target.value)} />
          {errors.name && <span className="field-error">{errors.name}</span>}
          <input type="email" placeholder="Email Address" value={form.email} onChange={e => set('email',e.target.value)} />
          {errors.email && <span className="field-error">{errors.email}</span>}
          <input type="password" placeholder="Password" value={form.password} onChange={e => set('password',e.target.value)} />
          {errors.password && <span className="field-error">{errors.password}</span>}
          <input type="password" placeholder="Confirm Password" value={form.confirm} onChange={e => set('confirm',e.target.value)} />
          {errors.confirm && <span className="field-error">{errors.confirm}</span>}
          <button type="submit">Register</button>
          <p className="form-footer">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  )
}
