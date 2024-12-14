import Club from "@/components/ui/club";
import Feature from "@/components/ui/feature";
import Newcard from "@/components/ui/newcard";
import Popular from "@/components/ui/popular";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <!-- Home Section --> */}
      <div className="bg-white w-full h-[600px] md:h-auto">
        <div className="relative w-[95%] md:w-[90%] lg:w-[950px] h-auto flex flex-col lg:flex-row justify-between mx-auto top-[13%]">
          {/* <!-- Content Section --> */}
          <div className="w-full lg:w-[65%] bg-[#2A254B] text-white p-6 lg:p-8">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-normal font-sans leading-normal lg:leading-[44.8px] ml-0 lg:ml-8">
              The furniture brand for the future, with timeless designs
            </h1>
            <a
              href="#"
              className="bg-[#F9F9F926] text-white text-[10px] w-[150px] md:w-[170px] h-[48px] md:h-[52px] flex items-center justify-center mt-4 ml-0 lg:ml-8"
            >
              View Collection
            </a>
            <p className="mt-8 md:mt-12 lg:mt-[150px] text-[14px] font-normal ml-0 lg:ml-8">
              A new era in eco-friendly furniture with Avelon, the French luxury retail
              brand with nice fonts, tasteful colors, and a beautiful way to display
              things digitally using modern web technologies.
            </p>
          </div>
          {/* <!-- Image Section --> */}
          <div className="w-full lg:w-[350px] h-[300px] lg:h-auto bg-center bg-cover mt-0 lg:mt-0 relative">
            <Image
              src="/images/home-image.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
              className="rounded"
              priority
            />
          </div>
        </div>
      </div>

      {/* <!-- Brand Section --> */}
      <div className="w-full py-10 mt-28">
        <h2 className="text-center text-[22px] md:text-[25px] lg:text-[27px] font-semibold relative">
          What makes our brand different
        </h2>
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-6 mx-auto w-[90%] md:w-[80%] lg:w-[1000px]">
          {/* Brand Cards */}
          {[
            {
              img: "/images/check.png",
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/Delivery.png",
              title: "Free Shipping",
              description: "Enjoy free shipping on all orders above £50.",
            },
            {
              img: "/images/Purchase.png",
              title: "Quality Guarantee",
              description: "We provide a 2-year warranty on all products.",
            },
            {
              img: "/images/sprout.png",
              title: "Secure Payment",
              description: "Safe and secure payment methods for your peace of mind.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-white text-center p-4 shadow-sm rounded-lg"
            >
              <div className="relative w-[50px] h-[50px] mx-auto mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-[18px] font-medium text-black">{item.title}</h3>
              <p className="text-[15px] text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <Newcard />
      <Popular />
      <Club />
      <Feature />
    </>
  );
}
