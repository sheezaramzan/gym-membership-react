export default function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2025',
    plan: 'Pro Membership',
    status: 'Active',
    nextBilling: 'June 1, 2026',
    workoutsThisWeek: 4,
    caloriesBurned: 3200
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f7f4ff] dark:bg-[#0d061a] transition-colors duration-300 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Sidebar / User Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white dark:bg-[#1a0d33] rounded-3xl shadow-xl dark:shadow-none dark:border dark:border-white/10 p-8 text-center flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7b2ff7] to-[#b39ddb] mb-6 flex items-center justify-center text-white text-5xl font-black shadow-lg">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h2 className="text-2xl font-black text-[#2c1654] dark:text-white mb-1">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{user.email}</p>
            <div className="w-full px-4 py-3 bg-[#f0e8ff] dark:bg-white/5 rounded-xl text-[#7b2ff7] dark:text-[#b39ddb] font-bold text-sm uppercase tracking-wide mb-6">
              {user.plan} • {user.status}
            </div>
            <button className="w-full py-3 border-2 border-[#7b2ff7] dark:border-[#5a1fd8] text-[#7b2ff7] dark:text-white font-bold rounded-xl hover:bg-[#7b2ff7] hover:text-white transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content / Stats */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <div className="bg-white dark:bg-[#1a0d33] rounded-3xl shadow-xl dark:shadow-none dark:border dark:border-white/10 p-8">
            <h3 className="text-xl font-black text-[#2c1654] dark:text-white uppercase tracking-wide mb-6">Weekly Activity</h3>
            <div className="flex gap-6">
              <div className="flex-1 bg-gradient-to-br from-[#2c1654] to-[#4a1a8c] rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-2">{user.workoutsThisWeek}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-[#b39ddb]">Workouts</div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#7b2ff7] to-[#9b5ff7] rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-2">{user.caloriesBurned}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-[#d0bfff]">Calories Burned</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a0d33] rounded-3xl shadow-xl dark:shadow-none dark:border dark:border-white/10 p-8">
            <h3 className="text-xl font-black text-[#2c1654] dark:text-white uppercase tracking-wide mb-6">Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Member Since</div>
                <div className="text-lg font-bold text-[#2c1654] dark:text-white">{user.memberSince}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Next Billing Date</div>
                <div className="text-lg font-bold text-[#2c1654] dark:text-white">{user.nextBilling}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
