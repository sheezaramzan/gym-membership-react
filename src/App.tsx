import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Home from './pages/Home/page'
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import Dashboard from './pages/Dashboard/page'
import Services from './pages/Services/page'
import Contact from './pages/Contact/page'
import Cart from './pages/Cart/page'
import Reviews from './pages/Reviews/page'
import About from './pages/About/page'
import Profile from './pages/Profile/page'
import Toast from './components/Toast/page'
import { useState, useEffect } from 'react'

export type ToastState = { message: string; type: 'success' | 'error' } | null

export default function App() {
  const [toast, setToast] = useState<ToastState>(null)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('gymfit_theme') === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('gymfit_theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('gymfit_theme', 'light')
    }
  }, [darkMode])

  function toggleTheme() {
    setDarkMode(prev => !prev)
  }

  function showToast(message: string, type: 'success' | 'error' = 'success') {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login showToast={showToast} />} />
        <Route path="/signup" element={<Signup showToast={showToast} />} />
        <Route path="/dashboard" element={<Dashboard showToast={showToast} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact showToast={showToast} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} />}
    </BrowserRouter>
  )
}
