import { useState } from 'react'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Contact({ showToast }: Props) {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''})
  const [errors, setErrors] = useState<Record<string,string>>({})
  const set = (f: string, v: string) => setForm(p => ({...p,[f]:v}))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string,string> = {}
    if (!form.name.trim()) errs.name = 'Your name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'A valid email address is required.'
    if (!form.message.trim()) errs.message = 'Please enter your message.'
    if (Object.keys(errs).length) { setErrors(errs); return }

    const msgs = JSON.parse(localStorage.getItem('gymfit_messages') || '[]')
    msgs.push({...form, date: new Date().toLocaleString()})
    localStorage.setItem('gymfit_messages', JSON.stringify(msgs))
    showToast("Message sent! We'll get back to you within 24 hours.")
    setForm({name:'',email:'',subject:'',message:''})
    setErrors({})
  }

  return (
    <main className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a question about membership, training, or our services? Fill in the form and our team will get back to you within 24 hours.</p>
          {[['📍','123 Fitness Ave, Gym City, GC 10001'],['📞','+1 (800) 555-GYMFIT'],['✉️','hello@gymfit.com'],['🕐',"Open 24/7 – We're always here for you"]].map(([icon,text]) => (
            <div className="contact-detail" key={text}><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
        <div className="contact-form-box">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={form.name} onChange={e => set('name',e.target.value)} />
            {errors.name && <span className="field-error">{errors.name}</span>}
            <input type="email" placeholder="Email Address" value={form.email} onChange={e => set('email',e.target.value)} />
            {errors.email && <span className="field-error">{errors.email}</span>}
            <input type="text" placeholder="Subject" value={form.subject} onChange={e => set('subject',e.target.value)} />
            <textarea placeholder="Your message..." value={form.message} onChange={e => set('message',e.target.value)} />
            {errors.message && <span className="field-error">{errors.message}</span>}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  )
}
