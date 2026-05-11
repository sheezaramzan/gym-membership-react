export default function Services() {
  const services = [
    {icon:'🏋️',title:'Personal Training',desc:'One-on-one sessions with certified trainers tailored to your goals, fitness level, and schedule.',btn:'Book a Session'},
    {icon:'🧘',title:'Yoga Classes',desc:'Restore balance and flexibility with guided yoga sessions for all skill levels — beginner to advanced.',btn:'View Schedule'},
    {icon:'🥊',title:'Boxing & Cardio',desc:'High-energy group boxing workouts that build stamina, coordination, and burn serious calories.',btn:'Join a Class'},
    {icon:'💪',title:'Strength & Conditioning',desc:'Structured programs designed to build muscle, increase endurance, and improve athletic performance.',btn:'Get Started'},
    {icon:'🥗',title:'Nutrition Coaching',desc:'Personalised meal plans and expert nutrition advice to fuel your training and accelerate results.',btn:'Learn More'},
    {icon:'🏃',title:'Group Fitness',desc:'Motivating group classes including HIIT, Zumba, Spin, and more — train together, grow together.',btn:'See All Classes'},
  ]
  return (
    <main className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Everything you need to reach your fitness goals — from expert coaches to specialised classes.</p>
      </div>
      <div className="services-grid">
        {services.map(({icon,title,desc,btn}) => (
          <div className="service-card" key={title}>
            <span className="service-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button>{btn}</button>
          </div>
        ))}
      </div>
    </main>
  )
}
