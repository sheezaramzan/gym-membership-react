import { useNavigate } from 'react-router-dom'
import img1 from '../../../../project Gym membership/sources/1.jpg'
import img2 from '../../../../project Gym membership/sources/2.jpg'
import img3 from '../../../../project Gym membership/sources/3.jpg'
import img4 from '../../../../project Gym membership/sources/4.jpg'
import img5 from '../../../../project Gym membership/sources/5.jpg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#2c1654] via-[#2c1654] to-[#7b2ff7] dark:from-[#1a0d33] dark:via-[#1a0d33] dark:to-[#5a1fd8] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 min-h-[520px] gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-black leading-tight mb-5">
            Transform Your Body.<br /><span className="text-[#b39ddb] dark:text-[#9b5ff7]">Elevate Your Life.</span>
          </h1>
          <p className="text-lg text-[#d0bfff] dark:text-gray-300 mb-8 leading-7 max-w-lg">
            Join GymFit and get a personalized plan, expert coaching, and a community that pushes you to be your best — every single day.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => navigate('/signup')}
              className="bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white border-none px-9 py-4 rounded-full text-base font-bold cursor-pointer hover:opacity-85 transition-opacity">
              Start Free Trial
            </button>
            <button onClick={() => navigate('/services')}
              className="bg-transparent text-white border-2 border-white px-9 py-4 rounded-full text-base font-bold cursor-pointer hover:bg-white/10 transition-colors">
              Explore Programs
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={img1} alt="GymFit Hero" className="w-full max-w-lg h-80 rounded-2xl object-cover shadow-2xl" />
        </div>
      </section>

      {/* BENEFITS */}
      <div className="bg-[#1a0d33] dark:bg-[#0d061a] text-white flex justify-center flex-wrap">
        {[['🕐','Open 24 / 7'],['🏋️','Expert Coaches'],['📋','Personalized Plans'],['🤝','Community Support'],['💳','Flexible Membership']].map(([icon,label]) => (
          <div key={label} className="flex items-center gap-3 px-10 py-5 border-r border-white/10 last:border-r-0">
            <div className="w-10 h-10 bg-[#7b2ff7] dark:bg-[#5a1fd8] rounded-full flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
            <span className="text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* PROGRAMS */}
      <section className="bg-[#f7f4ff] dark:bg-[#120a21] px-6 md:px-20 py-20 transition-colors duration-300">
        <div className="text-[#7b2ff7] dark:text-[#9b5ff7] text-xs font-bold tracking-widest uppercase mb-2">What We Offer</div>
        <div className="text-4xl font-black text-[#2c1654] dark:text-white mb-3">Programs Built for You</div>
        <div className="text-base text-gray-500 dark:text-gray-400 leading-7 max-w-xl mb-10">Whether you're just starting out or pushing past your limits, our programs are designed to meet you where you are.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { img:img2, tag:'Strength',  title:'Weight Training',  desc:'Build real strength with structured programs guided by certified trainers. From beginner lifts to advanced powerlifting.' },
            { img:img3, tag:'Endurance', title:'Cardio Training',   desc:'Burn fat, boost stamina, and strengthen your heart with our high-energy cardio programs and HIIT circuits.' },
            { img:img4, tag:'Group',     title:'Fitness Classes',   desc:'Stay motivated with energetic group classes — Yoga, Zumba, CrossFit, Pilates, and more.' },
          ].map(({ img, tag, title, desc }) => (
            <div key={title} className="bg-white dark:bg-[#1a0d33] rounded-2xl overflow-hidden shadow-md dark:shadow-none dark:border dark:border-white/10 flex flex-col hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-white/20 transition-all duration-300">
              <div className="w-full h-52 overflow-hidden bg-gradient-to-br from-[#2c1654] to-[#7b2ff7]">
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-[#f0e8ff] dark:bg-[#2c1654] text-[#7b2ff7] dark:text-[#b39ddb] text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-3 w-fit">{tag}</span>
                <h3 className="text-xl font-extrabold text-[#2c1654] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-7 flex-1">{desc}</p>
                <a href="/services" className="inline-flex items-center gap-1 mt-4 text-[#7b2ff7] dark:text-[#9b5ff7] font-bold text-sm no-underline hover:gap-3 transition-all">
                  Learn More <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY GYMFIT */}
      <section className="bg-white dark:bg-[#0d061a] flex flex-col md:flex-row gap-16 items-center px-6 md:px-20 py-20 transition-colors duration-300">
        <div className="flex-1 w-full">
          <img src={img5} alt="Why GymFit" className="w-full h-[450px] rounded-2xl object-cover shadow-2xl" />
        </div>
        <div className="flex-1">
          <div className="text-[#7b2ff7] dark:text-[#9b5ff7] text-xs font-bold tracking-widest uppercase mb-2">Why GymFit</div>
          <div className="text-4xl font-black text-[#2c1654] dark:text-white mb-3">More Than Just a Gym</div>
          <div className="text-base text-gray-500 dark:text-gray-400 leading-7 max-w-xl mb-8">We believe fitness is about your whole life, not just your workout.</div>
          <ul className="list-none flex flex-col gap-5 mb-9">
            {[
              { icon:'🏅', title:'Certified Expert Coaches',  desc:'Our trainers are certified professionals who build personalized programs and keep you accountable.' },
              { icon:'📊', title:'Real Progress Tracking',     desc:'Track your workouts, body stats, and goals with our dashboard. See real data and celebrate every milestone.' },
              { icon:'👥', title:'A Community That Cares',     desc:'Join thousands of members who cheer each other on. GymFit is a people-first movement.' },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#f0e8ff] dark:bg-[#1a0d33] rounded-full flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                <div><h4 className="text-base font-bold text-[#2c1654] dark:text-white mb-1">{title}</h4><p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{desc}</p></div>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate('/signup')}
            className="bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white border-none px-9 py-4 rounded-full text-base font-bold cursor-pointer hover:opacity-85 transition-opacity">
            Join GymFit Today
          </button>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-gradient-to-r from-[#2c1654] to-[#7b2ff7] dark:from-[#1a0d33] dark:to-[#5a1fd8] text-white flex justify-center flex-wrap py-16 px-6 md:px-20">
        {[['12K+','Active Members'],['50+','Expert Coaches'],['30+','Programs'],['98%','Satisfaction Rate']].map(([num,lbl]) => (
          <div key={lbl} className="text-center px-16 py-5 border-r border-white/20 last:border-r-0">
            <div className="text-5xl font-black leading-none">{num}</div>
            <div className="text-xs text-[#d0bfff] dark:text-gray-300 mt-2 font-semibold tracking-widest uppercase">{lbl}</div>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-[#f7f4ff] dark:bg-[#120a21] px-6 md:px-20 py-20 transition-colors duration-300">
        <div className="text-[#7b2ff7] dark:text-[#9b5ff7] text-xs font-bold tracking-widest uppercase mb-2">Member Stories</div>
        <div className="text-4xl font-black text-[#2c1654] dark:text-white mb-3">Real Results, Real People</div>
        <div className="text-base text-gray-500 dark:text-gray-400 leading-7 max-w-xl mb-10">Don't take our word for it — hear from the GymFit community.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { initials:'AS', name:'Ayesha Siddiqui', since:'2023', quote:'GymFit completely changed my relationship with fitness. The coaches are incredible and the community keeps me showing up every day.' },
            { initials:'UR', name:'Umar Raza',        since:'2022', quote:'Lost 18kg in 6 months with the weight training program. The personalized plan made all the difference.' },
            { initials:'FM', name:'Fatima Malik',     since:'2024', quote:'The group classes are so much fun — I actually look forward to going to the gym now.' },
          ].map(({ initials, name, since, quote }) => (
            <div key={name} className="bg-white dark:bg-[#1a0d33] rounded-2xl p-7 shadow-md dark:shadow-none dark:border dark:border-white/10 flex flex-col gap-3 transition-colors duration-300">
              <div className="text-yellow-400 text-lg tracking-widest">★★★★★</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 italic flex-1">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] dark:from-[#5a1fd8] dark:to-[#7b2ff7] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{initials}</div>
                <div><h5 className="text-sm font-bold text-[#2c1654] dark:text-white m-0">{name}</h5><span className="text-xs text-gray-400 dark:text-gray-500">Member since {since}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="bg-[#2c1654] dark:bg-[#0d061a] text-white text-center py-20 px-10 transition-colors duration-300">
        <h2 className="text-4xl font-black mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-[#b39ddb] dark:text-gray-400 mb-9">Join GymFit today and get your first month free. No commitment, no excuses.</p>
        <button onClick={() => navigate('/signup')}
          className="bg-[#7b2ff7] dark:bg-[#9b5ff7] text-white border-none px-12 py-5 rounded-full text-lg font-bold cursor-pointer hover:opacity-85 transition-opacity">
          Get Started — It's Free
        </button>
      </div>
    </>
  )
}
