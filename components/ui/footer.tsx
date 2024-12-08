export default function(){
    return(
        <>
        <footer className="bg-[#2A254B] pt-12 pb-6 px-4 sm:px-10 font-sans tracking-wide">
  <div className="max-w-screen-xl mx-auto">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
      <div>
        <h2 className="text-white text-sm uppercase font-semibold mb-4">Menu</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">New arrivals</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Best sellers</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Recently viewed</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Popular this week</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">All products</a></li>
        </ul>
      </div>

      {/* <!-- Category --> */}
      <div>
        <h2 className="text-white text-sm uppercase font-semibold mb-4">Category</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Crockery</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Furniture</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Homeware</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Plant pots</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Chairs</a></li>
        </ul>
      </div>

      {/* <!-- Our Company --> */}
      <div>
        <h2 className="text-white text-sm uppercase font-semibold mb-4">Our Company</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">About us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Vacancies</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Contact us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Privacy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Returns policy</a></li>
        </ul>
      </div>
    </div>

    <div>
        <h2 className="text-white text-sm uppercase font-semibold mb-4">NavLinks</h2>
        <ul className="space-y-3">
          <li><a href="about" className="text-gray-400 hover:text-white text-sm transition-all">About us</a></li>
          <li><a href="product" className="text-gray-400 hover:text-white text-sm transition-all">Product</a></li>
          <li><a href="shopping" className="text-gray-400 hover:text-white text-sm transition-all">Shopping</a></li>
        </ul>
      </div>
    </div>

    {/* <!-- Newsletter Signup --> */}
    <div className="flex flex-col sm:flex-row items-center mt-12 sm:mt-20 max-w-md mx-auto gap-4">
      <input
        type="email"
        placeholder="youremail.com"
        className="w-full outline-none bg-[#2A254B] text-gray-400 text-sm px-4 py-3 border border-gray-600 rounded-md"
      />
      <button
        type="button"
        className="bg-white text-[#2A254B] px-5 py-3 rounded-md text-sm font-medium transition hover:bg-gray-200"
      >
        Signup
      </button>
    </div>

    {/* <!-- Divider --> */}
    <hr className="mt-12 mb-6 border-gray-600" />

    {/* <!-- Social Icons and Footer Text --> */}
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6">
      {/* <!-- Social Icons --> */}
      <div className="flex space-x-5">
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12z"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458 0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
            />
          </svg>
        </a>
      </div>

      {/* <!-- Footer Text --> */}
      <p className="text-gray-400 text-sm">© Hassan Raza. All rights reserved.</p>
    </div>
</footer>

        </>
    )
}