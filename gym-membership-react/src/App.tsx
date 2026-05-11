import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Home from './pages/Home/page'
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import Dashboard from './pages/Dashboard/page'
import Services from './pages/Services/page'
import Contact from './pages/Contact/page'
import Toast from './components/Toast/page'
import { useState } from 'react'

export type ToastState = { message: string; type: 'success' | 'error' } | null

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
        <Route path="/" element={<Home showToast={showToast} />} />
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
