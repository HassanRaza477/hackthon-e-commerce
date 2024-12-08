import Club from "@/components/ui/club";
export default function Product() {
    return (
        <>
            <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-4 text-center lg:sticky top-8">
                        <div className="bg-gray-100 p-4 flex items-center sm:h-[500px] rounded-lg">
                            <img
                                src="/images/Image Left.png"
                                alt="Product"
                                className="w-full h-[500px] object-cover rounded-lg"
                            />
                        </div>
                    </div>


                    <div className="max-w-xl">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-800">The Dandy Chair</h2>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-gray-800 text-4xl font-bold">$260</h3>
                        </div>

                        <div className="mt-8">
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
                                <p className="text-sm text-gray-600 mt-4">Step up your footwear game with our premium mens shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must have addition to your wardrobe. The supple and breathable materials ensure all day comfort making them perfect for everyday wear.</p>
                            </div>

                            <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                                <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                                <li>Available in a wide range of sizes from extra small to extra large and even in tall and petite sizes.</li>
                                <li>Easy to maintain they can be machine washed and dried on low heat.</li>
                                <li>Personalize them with your own designs patterns or embellishments to make them uniquely yours.</li>
                            </ul>
                        </div>



                        <div className="flex flex-wrap gap-4 mt-8">
                            <button type="button" className="min-w-[200px] px-4 py-3 border-[#2A254B] bg-transparent text-[#2A254B] text-sm font-semibold rounded-lg">Buy now</button>
                            <button type="button" className="min-w-[200px] px-4 py-2.5 border  bg-[#2A254B] text-[#fff] text-sm font-semibold rounded-lg">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full py-12 font-sans">
                {/* Heading */}
                <h2 className="text-center text-[#2A254B] text-[28px] md:text-[32px] font-normal leading-8">
                    You might also like
                </h2>

                {/* Ceramics Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-6 lg:px-8">
                    {/* Ceramic Card */}
                    {[
                        { img: "/images/home-image.png", name: "The Dandy Chair", price: "£250" },
                        { img: "/images/parent.png", name: "Rustic Vase Set", price: "£155" },
                        { img: "/images/lamp.png", name: "The Silky Vase", price: "£125" },
                        { img: "/images/photo.png", name: "The Lucy Lamp", price: "£399" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="w-full h-auto text-center"
                        >
                            <div className="w-full h-[375px]">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover mx-auto"
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
                    <button className="px-8 py-4 text-[16px] bg-[#F9F9F9] text-[#2A254B] hover:bg-[#e8e8e8] transition rounded w-[60%] md:w-[30%] lg:w-[20%]">
                        View Collection
                    </button>
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
                            description: "Order before 3pm and get your order the next day as standard"
                        },
                        {
                            img: "/images/Delivery.png",
                            title: "Free Shipping",
                            description: "Enjoy free shipping on all orders above £50."
                        },
                        {
                            img: "/images/Purchase.png",
                            title: "Quality Guarantee",
                            description: "We provide a 2-year warranty on all products."
                        },
                        {
                            img: "/images/sprout.png",
                            title: "Secure Payment",
                            description: "Safe and secure payment methods for your peace of mind."
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-white text-center p-4">
                            <img src={item.img} alt={item.title} className="mx-auto mb-4" />
                            <h3 className="text-[18px] font-medium text-black">{item.title}</h3>
                            <p className="text-[15px] text-black">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Club />
        </>
    )
}