import Image from "next/image";

export default function Popular() {
  return (
    <div className="w-full py-12">
      {/* Heading */}
      <h3 className="text-center text-[#2A254B] text-[24px] md:text-[32px] font-normal">
        Our Popular Product
      </h3>

      {/* Products Section */}
      <div className="mt-10 flex flex-row items-center justify-center gap-6 px-3 md:px-6 lg:px-8 flex-wrap">
        {/* Large Product */}
        <div className="flex-shrink-0 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          <div className="w-full h-[300px] relative">
            <Image
              src="/images/large.png"
              alt="The Poplar Suede Sofa"
              layout="fill"
              objectFit="cover"
              className="rounded"
              priority
            />
          </div>
          <h3 className="mt-5 text-center text-[#2A254B] text-[16px] md:text-[20px] font-normal">
            The Poplar Suede Sofa
          </h3>
          <p className="mt-2 text-center text-[#2A254B] text-[14px] md:text-[18px]">
            £980
          </p>
        </div>

        {/* Smaller Product Cards */}
        {[
          { image: "/images/home-image.png", name: "The Dandy Chair", price: "£250" },
          { image: "/images/chair.png", name: "The Cozy Lounge Chair", price: "£300" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[200px] md:w-[300px] lg:w-[300px] text-center"
          >
            <div className="w-full h-[300px] relative">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h3 className="mt-5 text-[#2A254B] text-[16px] md:text-[20px] font-normal">
              {item.name}
            </h3>
            <p className="mt-2 text-[#2A254B] text-[14px] md:text-[18px]">{item.price}</p>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center items-center mt-10">
        <a
          href="#"
          className="px-8 py-4 text-[14px] md:text-[16px] bg-[#F9F9F9] text-[#2A254B] hover:bg-[#e8e8e8] transition rounded w-[80%] md:w-[50%] lg:w-[30%] text-center"
        >
          View Collection
        </a>
      </div>
    </div>
  );
}
