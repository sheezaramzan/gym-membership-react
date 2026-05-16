import { useState } from 'react'
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }

export default function Contact({ showToast }: Props) {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState<Record<string,string>>({})
  const set = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string,string> = {}
    if (!form.name.trim()) errs.name = 'Your name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'A valid email address is required.'
    if (!form.message.trim()) errs.message = 'Please enter your message.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    const msgs = JSON.parse(localStorage.getItem('gymfit_messages') || '[]')
    msgs.push({ ...form, date: new Date().toLocaleString() })
    localStorage.setItem('gymfit_messages', JSON.stringify(msgs))
    showToast("Message sent! We'll get back to you within 24 hours.")
    setForm({ name:'', email:'', subject:'', message:'' })
    setErrors({})
  }

  const inputCls = "w-full px-4 py-3 my-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors"

  return (
    <main className="flex-1 flex justify-center items-center py-16 px-5 bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] dark:from-[#0d061a] dark:to-[#2c1654] transition-colors duration-300 min-h-[calc(100vh-64px)]">
      <div className="flex gap-9 max-w-4xl w-full items-start">
        {/* INFO */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-sm opacity-85 leading-8 mb-7">Have a question about membership, training, or our services? Fill in the form and our team will get back to you within 24 hours.</p>
          {[['📍','123 Fitness Ave, Gym City, GC 10001'],['📞','+1 (800) 555-GYMFIT'],['✉️','hello@gymfit.com'],['🕐',"Open 24/7 – We're always here for you"]].map(([icon,text]) => (
            <div key={text} className="flex items-center gap-3 mb-4 text-sm opacity-90">
              <span className="text-xl">{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
        {/* FORM */}
        <div className="bg-white dark:bg-[#1a0d33] p-10 rounded-xl w-96 flex-shrink-0 shadow-2xl dark:shadow-none dark:border dark:border-white/10 transition-colors duration-300">
          <h2 className="text-center text-xl font-bold text-[#2c1654] dark:text-white mb-5">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input className={inputCls} type="text" placeholder="Full Name" value={form.name} onChange={e => set('name', e.target.value)} />
            {errors.name && <span className="text-red-500 text-xs block">{errors.name}</span>}
            <input className={inputCls} type="email" placeholder="Email Address" value={form.email} onChange={e => set('email', e.target.value)} />
            {errors.email && <span className="text-red-500 text-xs block">{errors.email}</span>}
            <input className={inputCls} type="text" placeholder="Subject" value={form.subject} onChange={e => set('subject', e.target.value)} />
            <textarea className={`${inputCls} resize-y min-h-[110px]`} placeholder="Your message..." value={form.message} onChange={e => set('message', e.target.value)} />
            {errors.message && <span className="text-red-500 text-xs block">{errors.message}</span>}
            <button type="submit" className="w-full py-3 mt-2 bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white font-bold text-sm rounded-md cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors border-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
