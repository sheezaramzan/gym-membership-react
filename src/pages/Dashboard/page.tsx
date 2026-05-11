import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
interface StockItem { name:string; category:string; quantity:number; price:number; date:string }
interface Props { showToast: (msg: string, type?: 'success' | 'error') => void }
type View = 'cards'|'view'|'insert'

export default function Dashboard({ showToast }: Props) {
  const navigate = useNavigate()
  const [stock, setStock] = useState<StockItem[]>([])
  const [view, setView] = useState<View>('cards')
  const [form, setForm] = useState({name:'',category:'',quantity:'',price:''})
  const [editIndex, setEditIndex] = useState<number|null>(null)
  const [editForm, setEditForm] = useState({name:'',category:'',quantity:'',price:''})

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
    if (Number(form.quantity)<0||Number(form.price)<0) { showToast('Quantity and price must be positive.','error'); return }
    save([...stock,{name:form.name.trim(),category:form.category.trim(),quantity:Number(form.quantity),price:Number(form.price),date:new Date().toLocaleDateString()}])
    showToast(`"${form.name}" added successfully!`)
    setForm({name:'',category:'',quantity:'',price:''})
    setView('view')
  }

  function openEdit(i: number) {
    const it = stock[i]
    setEditIndex(i)
    setEditForm({name:it.name,category:it.category,quantity:String(it.quantity),price:String(it.price)})
  }

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault()
    if (editIndex===null) return
    const updated = [...stock]
    updated[editIndex] = {...updated[editIndex],name:editForm.name.trim(),category:editForm.category.trim(),quantity:Number(editForm.quantity),price:Number(editForm.price)}
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

  const Table = () => (
    <table className="stock-table">
      <thead><tr><th>#</th><th>Item Name</th><th>Category</th><th>Quantity</th><th>Price (PKR)</th><th>Date Added</th><th>Actions</th></tr></thead>
      <tbody>
        {stock.length===0
          ? <tr><td colSpan={7} style={{textAlign:'center',color:'#888',padding:'20px'}}>No stock records found.</td></tr>
          : stock.map((item,i) => (
            <tr key={i}>
              <td>{i+1}</td><td>{item.name}</td><td>{item.category}</td>
              <td>{item.quantity}</td><td>{item.price}</td><td>{item.date}</td>
              <td>
                <button onClick={() => openEdit(i)}>✏️ Edit</button>
                <button className="del-btn" onClick={() => handleDelete(i)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>Stock Dashboard</h1>
        <p>Manage your inventory — view, insert, update, and delete stock records.</p>
      </div>

      {view==='cards' && (
        <div className="dashboard-grid">
          {[
            {icon:'📦',title:'View All Stock',desc:'Browse the full inventory list.',action:()=>setView('view')},
            {icon:'➕',title:'Insert New Stock',desc:'Add a new product to inventory.',action:()=>setView('insert')},
            {icon:'✏️',title:'Update Stock',desc:'Edit existing stock entries.',action:()=>setView('view')},
            {icon:'🗑️',title:'Delete Stock',desc:'Remove discontinued stock entries.',action:()=>setView('view')},
            {icon:'📋',title:'Stock Records',desc:'View detailed logs of all stock.',action:()=>setView('view')},
          ].map(({icon,title,desc,action}) => (
            <div className="dash-card" key={title}>
              <span className="dash-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <button onClick={action}>Open</button>
            </div>
          ))}
        </div>
      )}

      {view==='view' && (
        <div className="stock-section">
          <h2>All Stock &nbsp;<button onClick={()=>setView('cards')} style={{fontSize:13,padding:'4px 12px',background:'#eee',color:'#333',border:'none',borderRadius:6,cursor:'pointer'}}>← Back</button></h2>
          <Table />
        </div>
      )}

      {view==='insert' && (
        <div className="stock-section">
          <h2>Insert New Stock &nbsp;<button onClick={()=>setView('cards')} style={{fontSize:13,padding:'4px 12px',background:'#eee',color:'#333',border:'none',borderRadius:6,cursor:'pointer'}}>← Back</button></h2>
          <form className="stock-form" onSubmit={handleInsert}>
            <input placeholder="Item Name" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
            <input placeholder="Category" value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} />
            <input placeholder="Quantity" type="number" value={form.quantity} onChange={e=>setForm(f=>({...f,quantity:e.target.value}))} />
            <input placeholder="Price (PKR)" type="number" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))} />
            <button type="submit">Add Item</button>
          </form>
        </div>
      )}

      {editIndex!==null && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Update Stock Item</h3>
            <form onSubmit={handleUpdate}>
              <input placeholder="Item Name" value={editForm.name} onChange={e=>setEditForm(f=>({...f,name:e.target.value}))} />
              <input placeholder="Category" value={editForm.category} onChange={e=>setEditForm(f=>({...f,category:e.target.value}))} />
              <input placeholder="Quantity" type="number" value={editForm.quantity} onChange={e=>setEditForm(f=>({...f,quantity:e.target.value}))} />
              <input placeholder="Price (PKR)" type="number" value={editForm.price} onChange={e=>setEditForm(f=>({...f,price:e.target.value}))} />
              <div className="modal-actions">
                <button type="submit" className="save-btn">Save Changes</button>
                <button type="button" className="cancel-btn" onClick={()=>setEditIndex(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
