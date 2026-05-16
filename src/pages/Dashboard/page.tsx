import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface StockItem { name:string; category:string; quantity:number; price:number; date:string }
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }
type View = 'cards' | 'view' | 'insert'

export default function Dashboard({ showToast }: Props) {
  const navigate = useNavigate()
  const [stock, setStock] = useState<StockItem[]>([])
  const [view, setView] = useState<View>('cards')
  const [form, setForm] = useState({ name:'', category:'', quantity:'', price:'' })
  const [editIndex, setEditIndex] = useState<number|null>(null)
  const [editForm, setEditForm] = useState({ name:'', category:'', quantity:'', price:'' })

  useEffect(() => {
    if (!localStorage.getItem('gymfit_logged_in')) { navigate('/login'); return }
    setStock(JSON.parse(localStorage.getItem('gymfit_stock') || '[]'))
  }, [navigate])

  function save(updated: StockItem[]) {
    setStock(updated)
    localStorage.setItem('gymfit_stock', JSON.stringify(updated))
  }

  function handleInsert(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name||!form.category||!form.quantity||!form.price) { showToast('All fields are required.','error'); return }
    save([...stock,{ name:form.name.trim(), category:form.category.trim(), quantity:Number(form.quantity), price:Number(form.price), date:new Date().toLocaleDateString() }])
    showToast(`"${form.name}" added successfully!`)
    setForm({ name:'', category:'', quantity:'', price:'' })
    setView('view')
  }

  function openEdit(i: number) {
    const it = stock[i]
    setEditIndex(i)
    setEditForm({ name:it.name, category:it.category, quantity:String(it.quantity), price:String(it.price) })
  }

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault()
    if (editIndex===null) return
    const updated = [...stock]
    updated[editIndex] = { ...updated[editIndex], name:editForm.name.trim(), category:editForm.category.trim(), quantity:Number(editForm.quantity), price:Number(editForm.price) }
    save(updated)
    showToast(`"${editForm.name}" updated!`)
    setEditIndex(null)
  }

  function handleDelete(i: number) {
    if (!window.confirm(`Delete "${stock[i].name}"?`)) return
    const name = stock[i].name
    save(stock.filter((_,idx) => idx!==i))
    showToast(`"${name}" deleted.`)
  }

  const inputCls = "flex-1 min-w-[140px] px-4 py-2.5 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors"
  const modalInputCls = "w-full px-4 py-2.5 my-1.5 bg-transparent border border-gray-300 dark:border-white/10 rounded-md text-sm text-gray-700 dark:text-white outline-none focus:border-[#7b2ff7] dark:focus:border-[#9b5ff7] transition-colors"
  const backBtn = "ml-4 text-xs px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 border-none transition-colors"

  const Table = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm text-[#2c1654] dark:text-white">
        <thead>
          <tr className="bg-[#2c1654] dark:bg-[#0d061a] text-white">
            {['#','Item Name','Category','Quantity','Price (PKR)','Date Added','Actions'].map(h => (
              <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stock.length===0
            ? <tr><td colSpan={7} className="text-center text-gray-400 dark:text-gray-500 py-8">No stock records found.</td></tr>
            : stock.map((item,i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-white/5 hover:bg-[#f7f4ff] dark:hover:bg-white/5 transition-colors">
                <td className="px-4 py-3">{i+1}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{item.price}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => openEdit(i)} className="bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white text-xs px-3 py-1.5 rounded border-none cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors">✏️ Edit</button>
                  <button onClick={() => handleDelete(i)} className="bg-red-500 dark:bg-red-600 text-white text-xs px-3 py-1.5 rounded border-none cursor-pointer hover:bg-red-600 dark:hover:bg-red-500 transition-colors">🗑️ Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <main className="flex-1 px-10 py-12 bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] dark:from-[#0d061a] dark:to-[#2c1654] transition-colors duration-300">
      {/* HEADER */}
      <div className="text-white mb-9">
        <h1 className="text-3xl font-bold tracking-widest">Stock Dashboard</h1>
        <p className="text-sm opacity-80 mt-1">Manage your inventory — view, insert, update, and delete stock records.</p>
      </div>

      {/* CARDS VIEW */}
      {view==='cards' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl">
          {[
            { icon:'📦', title:'View All Stock',   desc:'Browse the full inventory list.',       action:()=>setView('view')   },
            { icon:'➕', title:'Insert New Stock',  desc:'Add a new product to inventory.',       action:()=>setView('insert') },
            { icon:'✏️', title:'Update Stock',      desc:'Edit existing stock entries.',          action:()=>setView('view')   },
            { icon:'🗑️', title:'Delete Stock',      desc:'Remove discontinued stock entries.',    action:()=>setView('view')   },
            { icon:'📋', title:'Stock Records',     desc:'View detailed logs of all stock.',      action:()=>setView('view')   },
          ].map(({ icon, title, desc, action }) => (
            <div key={title} className="bg-white dark:bg-[#1a0d33] rounded-xl px-6 py-8 text-center shadow-xl dark:shadow-none dark:border dark:border-white/10 cursor-pointer hover:-translate-y-1 hover:shadow-2xl dark:hover:border-white/20 transition-all duration-300">
              <span className="text-4xl mb-3 block">{icon}</span>
              <h3 className="text-sm font-bold text-[#2c1654] dark:text-white mb-2">{title}</h3>
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-5 mb-4">{desc}</p>
              <button onClick={action} className="bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white text-xs px-5 py-2 rounded-full border-none cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors">Open</button>
            </div>
          ))}
        </div>
      )}

      {/* VIEW TABLE */}
      {view==='view' && (
        <div className="bg-white dark:bg-[#1a0d33] rounded-xl p-7 mt-7 max-w-5xl shadow-xl dark:shadow-none dark:border dark:border-white/10 transition-colors duration-300">
          <h2 className="text-xl font-bold text-[#2c1654] dark:text-white mb-5">
            All Stock <button onClick={()=>setView('cards')} className={backBtn}>← Back</button>
          </h2>
          <Table />
        </div>
      )}

      {/* INSERT FORM */}
      {view==='insert' && (
        <div className="bg-white dark:bg-[#1a0d33] rounded-xl p-7 mt-7 max-w-5xl shadow-xl dark:shadow-none dark:border dark:border-white/10 transition-colors duration-300">
          <h2 className="text-xl font-bold text-[#2c1654] dark:text-white mb-5">
            Insert New Stock <button onClick={()=>setView('cards')} className={backBtn}>← Back</button>
          </h2>
          <form className="flex flex-wrap gap-3 mb-5" onSubmit={handleInsert}>
            <input className={inputCls} placeholder="Item Name"    value={form.name}     onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
            <input className={inputCls} placeholder="Category"     value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} />
            <input className={inputCls} placeholder="Quantity"     type="number" value={form.quantity} onChange={e=>setForm(f=>({...f,quantity:e.target.value}))} />
            <input className={inputCls} placeholder="Price (PKR)"  type="number" value={form.price}    onChange={e=>setForm(f=>({...f,price:e.target.value}))} />
            <button type="submit" className="bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white px-6 py-2.5 rounded-md font-bold text-sm border-none cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors">Add Item</button>
          </form>
        </div>
      )}

      {/* EDIT MODAL */}
      {editIndex!==null && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/80 flex items-center justify-center z-[999] backdrop-blur-sm transition-all duration-300">
          <div className="bg-white dark:bg-[#1a0d33] p-9 rounded-xl w-[420px] shadow-2xl dark:shadow-none dark:border dark:border-white/10 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#2c1654] dark:text-white mb-5">Update Stock Item</h3>
            <form onSubmit={handleUpdate}>
              <input className={modalInputCls} placeholder="Item Name"   value={editForm.name}     onChange={e=>setEditForm(f=>({...f,name:e.target.value}))} />
              <input className={modalInputCls} placeholder="Category"    value={editForm.category} onChange={e=>setEditForm(f=>({...f,category:e.target.value}))} />
              <input className={modalInputCls} placeholder="Quantity"    type="number" value={editForm.quantity} onChange={e=>setEditForm(f=>({...f,quantity:e.target.value}))} />
              <input className={modalInputCls} placeholder="Price (PKR)" type="number" value={editForm.price}    onChange={e=>setEditForm(f=>({...f,price:e.target.value}))} />
              <div className="flex gap-3 mt-5">
                <button type="submit" className="flex-1 py-2.5 bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white font-bold rounded-md border-none cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors">Save Changes</button>
                <button type="button" onClick={()=>setEditIndex(null)} className="flex-1 py-2.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white font-bold rounded-md border-none cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
