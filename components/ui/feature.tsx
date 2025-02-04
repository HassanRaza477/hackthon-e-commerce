import Image from "next/image";

export default function Feature() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-12 font-[sans-serif] max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="max-md:order-1 text-center md:text-left">
        <h3 className="text-gray-900 md:text-4xl text-2xl font-bold leading-tight">
          From a Studio in London to a Global Brand
        </h3>
        <p className="mt-6 text-gray-700 md:text-lg text-base leading-relaxed">
          When we started Avion the idea was simple make high quality furniture affordable and available to the mass market.
          Handmade and lovingly crafted furniture and homeware became our passion and our Chelsea boutique quickly became a
          hub for London is interior design community.
        </p>
        <button
          type="button"
          className="mt-8 px-8 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg"
        >
          Get in Touch
        </button>
      </div>
      <div className="relative md:h-[500px] h-[350px] w-full flex justify-center">
        <Image
          src="/images/sofa.png"
          alt="Sofa"
          className="rounded-lg shadow-xl object-cover"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
