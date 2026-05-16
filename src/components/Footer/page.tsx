import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1a0d33] dark:bg-[#05020a] transition-colors duration-300 text-white px-6 md:px-20 pt-12 pb-8">
      <div className="flex flex-wrap justify-between gap-10 mb-10">
        <div className="max-w-xs">
          <span className="text-2xl font-black tracking-widest text-white block mb-3">GYMFIT</span>
          <p className="text-sm text-[#9980c4] leading-7">Your local gym and fitness destination. Expert coaching, real results, and a community that lifts you up.</p>
          <div className="flex gap-2 mt-4">
            {['📘','📸','🐦','▶️'].map(icon => (
              <a key={icon} href="#" className="w-9 h-9 bg-[#7b2ff7]/25 rounded-full flex items-center justify-center text-sm hover:bg-[#7b2ff7] transition-colors no-underline">{icon}</a>
            ))}
          </div>
        </div>
        {[
          { title:'Programs', links:[{label:'Weight Training',to:'/services'},{label:'Cardio',to:'/services'},{label:'Fitness Classes',to:'/services'},{label:'Personal Training',to:'/services'}] },
          { title:'Company',  links:[{label:'About Us',to:'/about'},{label:'Blog',to:'#'},{label:'Careers',to:'#'},{label:'Contact',to:'/contact'}] },
          { title:'Account',  links:[{label:'Sign Up',to:'/signup'},{label:'Login',to:'/login'},{label:'Dashboard',to:'/dashboard'},{label:'Membership',to:'/signup'}] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#b39ddb] mb-4">{title}</h4>
            {links.map(({ label, to }) => (
              to.startsWith('/') && to !== '#'
                ? <Link key={label} to={to} className="block text-[#9980c4] text-sm mb-2 no-underline hover:text-white transition-colors">{label}</Link>
                : <a key={label} href="#" className="block text-[#9980c4] text-sm mb-2 no-underline hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-[#6b5490] text-sm">
        © 2025 GymFit. All rights reserved.
      </div>
    </footer>
  )
}
