import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import Dashboard from './pages/Dashboard/page'
import Services from './pages/Services/page'
import Contact from './pages/Contact/page'
import Toast from './components/Toast/page'
import { useState } from 'react'

// Import images directly from the original sources folder
import img1 from '../../project Gym membership/sources/1.jpg'
import img2 from '../../project Gym membership/sources/2.jpg'
import img3 from '../../project Gym membership/sources/3.jpg'
import img4 from '../../project Gym membership/sources/4.jpg'
import img5 from '../../project Gym membership/sources/5.jpg'

export type ToastState = { message: string; type: 'success' | 'error' } | null

// ─── HOME PAGE (inline in App) ───────────────────────────────────────────────
function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Transform Your Body.<br /><span>Elevate Your Life.</span></h1>
          <p>Join GymFit and get a personalized plan, expert coaching, and a community that pushes you to be your best — every single day.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/signup')}>Start Free Trial</button>
            <button className="btn-outline" onClick={() => navigate('/services')}>Explore Programs</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={img1} alt="GymFit Hero" />
        </div>
      </section>

      {/* BENEFITS */}
      <div className="benefits">
        {[['🕐','Open 24 / 7'],['🏋️','Expert Coaches'],['📋','Personalized Plans'],['🤝','Community Support'],['💳','Flexible Membership']].map(([icon,label]) => (
          <div className="benefit-item" key={label}>
            <div className="benefit-icon">{icon}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* PROGRAMS */}
      <section className="programs">
        <div className="section-label">What We Offer</div>
        <div className="section-title">Programs Built for You</div>
        <div className="section-desc">Whether you're just starting out or pushing past your limits, our programs are designed to meet you where you are.</div>
        <div className="programs-grid">
          {[
            { img: img2, tag:'Strength',  title:'Weight Training',  desc:'Build real strength with structured programs guided by certified trainers. From beginner lifts to advanced powerlifting.' },
            { img: img3, tag:'Endurance', title:'Cardio Training',   desc:'Burn fat, boost stamina, and strengthen your heart with our high-energy cardio programs and HIIT circuits.' },
            { img: img4, tag:'Group',     title:'Fitness Classes',   desc:'Stay motivated with energetic group classes — Yoga, Zumba, CrossFit, Pilates, and more.' },
          ].map(({ img, tag, title, desc }) => (
            <div className="prog-card" key={title}>
              <div className="card-img-wrap"><img src={img} alt={title} /></div>
              <div className="card-content">
                <span className="card-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="/services" className="card-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY GYMFIT */}
      <section className="why-section">
        <div className="why-image"><img src={img5} alt="Why GymFit" /></div>
        <div className="why-content">
          <div className="section-label">Why GymFit</div>
          <div className="section-title">More Than Just a Gym</div>
          <div className="section-desc">We believe fitness is about your whole life, not just your workout.</div>
          <ul className="why-list">
            {[
              { icon:'🏅', title:'Certified Expert Coaches',  desc:'Our trainers are certified professionals who build personalized programs and keep you accountable.' },
              { icon:'📊', title:'Real Progress Tracking',     desc:'Track your workouts, body stats, and goals with our dashboard. See real data and celebrate every milestone.' },
              { icon:'👥', title:'A Community That Cares',     desc:'Join thousands of members who cheer each other on. GymFit is a people-first movement.' },
            ].map(({ icon, title, desc }) => (
              <li key={title}>
                <div className="why-icon">{icon}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </li>
            ))}
          </ul>
          <button className="btn-primary" onClick={() => navigate('/signup')}>Join GymFit Today</button>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[['12K+','Active Members'],['50+','Expert Coaches'],['30+','Programs'],['98%','Satisfaction Rate']].map(([num,lbl]) => (
          <div className="stat-item" key={lbl}>
            <div className="num">{num}</div>
            <div className="lbl">{lbl}</div>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-label">Member Stories</div>
        <div className="section-title">Real Results, Real People</div>
        <div className="section-desc">Don't take our word for it — hear from the GymFit community.</div>
        <div className="testi-grid">
          {[
            { initials:'AS', name:'Ayesha Siddiqui', since:'2023', quote:'GymFit completely changed my relationship with fitness. The coaches are incredible and the community keeps me showing up every day.' },
            { initials:'UR', name:'Umar Raza',        since:'2022', quote:'Lost 18kg in 6 months with the weight training program. The personalized plan made all the difference.' },
            { initials:'FM', name:'Fatima Malik',     since:'2024', quote:'The group classes are so much fun — I actually look forward to going to the gym now.' },
          ].map(({ initials, name, since, quote }) => (
            <div className="testi-card" key={name}>
              <div className="stars">★★★★★</div>
              <p>"{quote}"</p>
              <div className="testi-author">
                <div className="avatar">{initials}</div>
                <div><h5>{name}</h5><span>Member since {since}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join GymFit today and get your first month free. No commitment, no excuses.</p>
        <button className="btn-primary btn-large" onClick={() => navigate('/signup')}>Get Started — It's Free</button>
      </div>
    </>
  )
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [toast, setToast] = useState<ToastState>(null)

  function showToast(message: string, type: 'success' | 'error' = 'success') {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login showToast={showToast} />} />
        <Route path="/signup" element={<Signup showToast={showToast} />} />
        <Route path="/dashboard" element={<Dashboard showToast={showToast} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact showToast={showToast} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} />}
    </BrowserRouter>
  )
}
