import img2 from '../../../../project Gym membership/sources/2.jpg'
import img3 from '../../../../project Gym membership/sources/3.jpg'
import img4 from '../../../../project Gym membership/sources/4.jpg'

export default function About() {
  const team = [
    { id: 1, name: "Marcus Johnson", role: "Head Coach", specialty: "Powerlifting & Strength", img: img2 },
    { id: 2, name: "Sarah Connor", role: "Nutrition Specialist", specialty: "Diet & Wellness", img: img3 },
    { id: 3, name: "David Chen", role: "HIIT Instructor", specialty: "Cardio & Endurance", img: img4 },
  ]

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f7f4ff] dark:bg-[#0d061a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2c1654] to-[#7b2ff7] dark:from-[#1a0d33] dark:to-[#4a1a8c] py-24 px-6 md:px-20 text-center">
        <h1 className="text-5xl font-black text-white uppercase tracking-widest mb-6">Our Mission</h1>
        <p className="text-lg text-[#d0bfff] max-w-3xl mx-auto leading-relaxed">
          At GymFit, we believe that fitness is a journey, not a destination. Our mission is to empower individuals of all fitness levels to achieve their goals, build confidence, and cultivate a lifelong commitment to health and wellness. We provide the tools, the community, and the expertise—you bring the dedication.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#7b2ff7] dark:text-[#9b5ff7] text-xs font-bold tracking-[4px] uppercase mb-3">The Experts</h2>
          <h3 className="text-4xl font-black text-[#2c1654] dark:text-white uppercase tracking-wide">Meet Our Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.id} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1a0d33] shadow-lg dark:shadow-none dark:border dark:border-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-80 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-2xl font-bold text-[#2c1654] dark:text-white mb-1">{member.name}</h4>
                <div className="text-[#7b2ff7] dark:text-[#b39ddb] font-bold text-sm uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{member.specialty}</p>
                <div className="flex justify-center gap-3">
                  {['📸','🐦','✉️'].map((icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#f0e8ff] dark:bg-white/5 flex items-center justify-center text-[#7b2ff7] dark:text-white hover:bg-[#7b2ff7] hover:text-white transition-colors no-underline">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
