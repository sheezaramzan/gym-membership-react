export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Pro Membership (Monthly)', price: 49.99, type: 'Subscription' },
    { id: 2, name: 'GymFit Premium Protein Powder', price: 35.00, type: 'Merchandise' },
  ]

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f7f4ff] dark:bg-[#0d061a] transition-colors duration-300 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#2c1654] dark:text-white mb-2 uppercase tracking-wide">Your Cart</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Review your selected items and subscriptions before checkout.</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white dark:bg-[#1a0d33] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-white/10 overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-6 flex items-center justify-between ${index !== cartItems.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2c1654] to-[#7b2ff7] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {item.type === 'Subscription' ? '📅' : '🛒'}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2c1654] dark:text-white">{item.name}</h3>
                      <span className="text-xs text-[#7b2ff7] dark:text-[#b39ddb] font-semibold tracking-widest uppercase">{item.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-[#2c1654] dark:text-white">${item.price.toFixed(2)}</div>
                    <button className="text-xs text-red-500 hover:text-red-600 mt-2 font-bold uppercase tracking-wider">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white dark:bg-[#1a0d33] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-white/10 p-8">
              <h2 className="text-xl font-black text-[#2c1654] dark:text-white mb-6 uppercase tracking-wide">Order Summary</h2>
              <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span className="font-bold text-[#2c1654] dark:text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
                <span>Taxes & Fees</span>
                <span className="font-bold text-[#2c1654] dark:text-white">$0.00</span>
              </div>
              <hr className="border-gray-200 dark:border-white/10 my-6" />
              <div className="flex justify-between mb-8">
                <span className="text-lg font-bold text-[#2c1654] dark:text-white">Total</span>
                <span className="text-3xl font-black text-[#7b2ff7] dark:text-[#9b5ff7]">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#7b2ff7] dark:bg-[#9b5ff7] hover:bg-[#5a1fd8] dark:hover:bg-[#7b2ff7] text-white py-4 rounded-xl font-bold text-lg transition-colors uppercase tracking-widest">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
