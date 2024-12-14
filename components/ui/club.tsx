export default function Club() {
  return (
    <div className="w-full bg-[#F9F9F9] py-12">
      <div className="w-[95%] max-w-4xl bg-white mx-auto rounded-lg shadow-md p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-center text-[24px] md:text-[36px] font-semibold text-[#2A254B]">
          Join the club and get the benefits
        </h1>

        {/* Description */}
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 mt-4 mb-8">
          Sign up for our newsletter and receive exclusive offers on new{" "}
          <br className="hidden md:block" />
          ranges, sales, pop-up stores, and more.
        </p>

        {/* Email Input and Signup Button */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-md mx-auto">
          <input
            type="email"
            placeholder="youremail@example.com"
            aria-label="Enter your email"
            className="w-full px-4 py-3 text-sm text-gray-600 bg-[#F9F9F9] outline-none"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-[#2A254B] px-5 py-3 text-sm text-white hover:bg-[#1F1A3C] transition-colors"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
