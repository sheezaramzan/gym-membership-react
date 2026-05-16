export default function Reviews() {
  const reviews = [
    { id: 1, name: "Ayesha Siddiqui", role: "Pro Member", date: "Oct 2025", rating: 5, comment: "GymFit completely changed my relationship with fitness. The coaches are incredible and the community keeps me showing up every day." },
    { id: 2, name: "Umar Raza", role: "Beginner", date: "Nov 2025", rating: 5, comment: "Lost 18kg in 6 months with the weight training program. The personalized plan made all the difference. Highly recommended!" },
    { id: 3, name: "Fatima Malik", role: "Yoga Enthusiast", date: "Dec 2025", rating: 4, comment: "The group classes are so much fun — I actually look forward to going to the gym now. Wish there were more evening slots though." },
    { id: 4, name: "Ali Khan", role: "Powerlifter", date: "Jan 2026", rating: 5, comment: "Equipment is top notch. Always clean, open 24/7, and the free weights section is huge. Best gym in town." },
    { id: 5, name: "Sara Ahmed", role: "Cardio Lover", date: "Feb 2026", rating: 5, comment: "I love the tracking app they provide. Seeing my daily stats keeps me super motivated. The trainers really care about your progress." },
    { id: 6, name: "Zainab Tariq", role: "Pro Member", date: "Mar 2026", rating: 4, comment: "Great community vibe. Everyone is so supportive. The protein shakes at the bar are also surprisingly good!" }
  ]

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#1a0d33] dark:bg-[#0d061a] transition-colors duration-300 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7b2ff7] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#b39ddb] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#9b5ff7] text-xs font-bold tracking-[4px] uppercase mb-3">Testimonials</h2>
          <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-widest">Real Stories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover how GymFit is changing lives. From complete beginners to advanced athletes, our community is thriving. Don't just take our word for it—hear from them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 flex flex-col">
              <div className="flex text-yellow-400 text-lg tracking-widest mb-4">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1 leading-loose">"{review.comment}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5a1fd8] to-[#9b5ff7] flex items-center justify-center text-white font-bold text-lg">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <div className="text-xs text-gray-500">{review.role} • {review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
