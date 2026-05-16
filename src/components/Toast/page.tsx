interface ToastProps { message: string; type: 'success' | 'error' }

export default function Toast({ message, type }: ToastProps) {
  return (
    <div className={`fixed bottom-8 right-8 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-xl z-[9999] animate-bounce-in
      ${type === 'success' ? 'bg-[#7b2ff7]' : 'bg-red-600'}`}>
      {message}
    </div>
  )
}
