import Image from "next/image";

export default function Popular() {
  return (
    <div className="w-full py-16 bg-gray-50">
      {/* Heading */}
      <h3 className="text-center text-gray-900 text-3xl md:text-4xl font-semibold mb-8">
        Our Popular Products
      </h3>

      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
        {/* Large Product */}
        <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/large.png"
              alt="The Poplar Suede Sofa"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <h3 className="mt-4 text-center text-xl font-medium text-gray-800">
            The Poplar Suede Sofa
          </h3>
          <p className="text-center text-lg text-gray-600 mt-1">£980</p>
        </div>

        {/* Smaller Product Cards */}
        {[
          { image: "/images/home-image.png", name: "The Dandy Chair", price: "£250" },
          { image: "/images/chair.png", name: "The Cozy Lounge Chair", price: "£300" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[220px] md:w-[280px] lg:w-[300px] text-center"
          >
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-md mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Collection
        </a>
      </div>
    </div>
  );
}