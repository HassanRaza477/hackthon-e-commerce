import Image from "next/image";

export default function Newcard() {
  return (
    <>
      <div className="w-full py-12 font-sans">
        {/* Heading */}
        <h2 className="text-center text-[#2A254B] text-[28px] md:text-[32px] font-normal leading-8">
          New Ceramics
        </h2>

        {/* Ceramics Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-6 lg:px-8">
          {/* Ceramic Card */}
          {[
            { image: "/images/home-image.png", name: "The Dandy Chair", price: "£250" },
            { image: "/images/parent.png", name: "Rustic Vase Set", price: "£155" },
            { image: "/images/lamp.png", name: "The Silky Vase", price: "£125" },
            { image: "/images/photo.png", name: "The Lucy Lamp", price: "£399" },
          ].map((item, index) => (
            <div key={index} className="w-full h-auto text-center">
              <div className="w-full h-[375px] relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="mt-5 text-[#2A254B] text-[18px] md:text-[20px] font-normal leading-7">
                {item.name}
              </h3>
              <p className="mt-2 text-[#2A254B] text-[16px] md:text-[18px]">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Center Button */}
        <div className="flex justify-center items-center mt-10">
          <a
            href="#"
            className="px-8 py-4 text-[16px] bg-[#F9F9F9] text-[#2A254B] hover:bg-[#e8e8e8] transition rounded w-[60%] md:w-[30%] lg:w-[20%] text-center"
          >
            View Collection
          </a>
        </div>
      </div>
    </>
  );
}
