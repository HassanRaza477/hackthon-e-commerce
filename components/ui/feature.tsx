import Image from "next/image"
export default function Feature(){
    return(
        <>
        <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
                <div className="max-md:order-1 max-md:text-center">
                    <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10">From a studio in London to a global brand with
                    over 400 outlets</h3>
                    <p className="mt-4 text-sm text-gray-600">When we started Avion the idea was simple. Make high quality furniture affordable and available for the mass market. 
                        Handmade and lovingly crafted furniture and homeware is what we live breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <button type="button" className="px-10 py-2 mt-12 rounded text-sm outline-none tracking-wide bg-[#F9F9F9] text-[#000] hover:bg-blue-700 feature-btn">Get in Touch</button>
            </div>
            <div className="md:h-[470px]">
                <Image src="/images/sofa.png" className="w-full h-full md:object-contain " alt="Loading"/>
            </div>
        </div>
        </>
    )
}