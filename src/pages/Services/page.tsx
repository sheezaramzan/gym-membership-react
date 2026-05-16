export default function Services() {
  const services = [
    { icon:'🏋️', title:'Personal Training',      desc:'One-on-one sessions with certified trainers tailored to your goals, fitness level, and schedule.',                          btn:'Book a Session' },
    { icon:'🧘', title:'Yoga Classes',            desc:'Restore balance and flexibility with guided yoga sessions for all skill levels — beginner to advanced.',                    btn:'View Schedule'  },
    { icon:'🥊', title:'Boxing & Cardio',         desc:'High-energy group boxing workouts that build stamina, coordination, and burn serious calories.',                           btn:'Join a Class'   },
    { icon:'💪', title:'Strength & Conditioning', desc:'Structured programs designed to build muscle, increase endurance, and improve athletic performance.',                      btn:'Get Started'    },
    { icon:'🥗', title:'Nutrition Coaching',      desc:'Personalised meal plans and expert nutrition advice to fuel your training and accelerate results.',                        btn:'Learn More'     },
    { icon:'🏃', title:'Group Fitness',           desc:'Motivating group classes including HIIT, Zumba, Spin, and more — train together, grow together.',                         btn:'See All Classes' },
  ]
  return (
    <main className="flex-1 px-6 md:px-10 py-16 bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] dark:from-[#0d061a] dark:to-[#2c1654] transition-colors duration-300 min-h-[calc(100vh-64px)]">
      <div className="text-center text-white mb-12">
        <h1 className="text-4xl font-bold tracking-widest mb-3">Our Services</h1>
        <p className="text-lg opacity-85 max-w-xl mx-auto leading-7">Everything you need to reach your fitness goals — from expert coaches to specialised classes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
        {services.map(({ icon, title, desc, btn }) => (
          <div key={title} className="bg-white dark:bg-[#1a0d33] rounded-xl px-8 py-9 text-center shadow-xl dark:shadow-none dark:border dark:border-white/10 hover:-translate-y-1.5 hover:shadow-2xl dark:hover:border-white/20 transition-all duration-300">
            <span className="text-5xl mb-5 block">{icon}</span>
            <h3 className="text-xl font-bold text-[#2c1654] dark:text-white mb-3">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-7 mb-6">{desc}</p>
            <button className="bg-[#7b2ff7] dark:bg-[#5a1fd8] text-white border-none px-7 py-2.5 rounded-full text-sm font-bold cursor-pointer hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] transition-colors">{btn}</button>
          </div>
        ))}
      </div>
    </main>
  )
}
