import Club from "@/components/ui/club";
import Image from "next/image";

export default function About() {
    return (
        <>
            {/* About Section */}
            <div className="about w-full h-auto sm:h-[250px] flex flex-col sm:flex-row justify-around items-center bg-gray-50 px-4 sm:px-8 py-8 sm:py-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left text-gray-800">
                    A brand built on the love of craftsmanship<br />
                    quality and outstanding customer service
                </h1>
                <button className="text-black px-8 py-4 mt-6 sm:mt-0 sm:ml-6 text-sm sm:text-base rounded-lg bg-gray-200 transition duration-300">
                    View Our Product
                </button>
            </div>

            {/* Idea Section */}
            <div className="idea w-full py-12 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-8 px-14">
                {/* Idea Content */}
                <div className="idea-content bg-[#2A254B] w-full sm:w-1/2 h-[400px] p-6 sm:p-8 flex flex-col justify-between rounded-lg">
                    <h2 className="text-3xl sm:text-4xl font-medium text-white">
                        It started with a small idea
                    </h2>
                    <p className="text-base sm:text-lg text-white">
                        A global brand with local beginnings our story began in a <br />
                        small studio in South London in early 2014
                    </p>
                    <button className="bg-[#F9F9F9]/20 text-white px-8 py-4 mt-8 sm:mt-12 hover:bg-[#F9F9F9]/30 transition idea-btn">
                        View Collection
                    </button>
                </div>

                {/* Idea Image */}
                <div
                    className="idea-image bg-cover bg-center w-full sm:w-1/2 h-[400px] rounded-lg"
                    style={{
                        backgroundImage: "url('/images/Image%20Block.png')",
                    }}
                ></div>
            </div>

            {/* Brand Section */}
            <div className="w-full py-10 mt-28">
                <h2 className="text-center text-[22px] md:text-[25px] lg:text-[27px] font-semibold relative">
                    What makes our brand different
                </h2>
                <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-6 mx-auto w-[90%] md:w-[80%] lg:w-[1000px]">
                    {/* Brand Cards */}
                    {[
                        {
                            Image: "/images/check.png",
                            title: "Next day as standard",
                            description: "Order before 3pm and get your order the next day as standard",
                        },
                        {
                            Image: "/images/Delivery.png",
                            title: "Free Shipping",
                            description: "Enjoy free shipping on all orders above £50.",
                        },
                        {
                            Image: "/images/Purchase.png",
                            title: "Quality Guarantee",
                            description: "We provide a 2-year warranty on all products.",
                        },
                        {
                            Image: "/images/sprout.png",
                            title: "Secure Payment",
                            description: "Safe and secure payment methods for your peace of mind.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-white text-center p-4">
                            <Image
                                src={item.Image}
                                alt={item.title}
                                width={80} // Set appropriate width
                                height={80} // Set appropriate height
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-[18px] font-medium text-black">{item.title}</h3>
                            <p className="text-[15px] text-black">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Club Component */}
            <Club />
        </>
    );
}
