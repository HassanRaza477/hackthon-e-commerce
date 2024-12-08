import Image from "next/image";
export default function Shopping(){
    return(
        <>
        <div className="shopping">
        <div className="shopping-cart w-full  mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Your Shopping Cart</h1>

  <div className="cart-item flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg p-4 shadow mb-4">
    <div className="w-28 h-28">
      <Image src="/images/plant.png" alt="Lamp" className="w-full h-full object-cover rounded-md" />
    </div>
    <div className="details flex-1 sm:ml-4 text-center sm:text-left">
      <h4 className="text-lg font-semibold text-gray-800">Stylish Lamp</h4>
      <p className="text-sm text-gray-600">A beautiful modern lamp for your home.</p>
    </div>
    <div className="quantity text-center sm:text-right">
      <h4 className="text-sm font-medium text-gray-500">Quantity</h4>
      <p className="text-lg font-semibold text-gray-800">1</p>
    </div>
    <div className="price text-center sm:text-right">
      <h4 className="text-sm font-medium text-gray-500">Price</h4>
      <p className="text-lg font-semibold text-gray-800">£250</p>
    </div>
  </div>

  <div className="cart-item flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg p-4 shadow mb-4">
    <div className="w-28 h-28">
      <Image src="/images/Product Image.png" alt="Lamp" className="w-full h-full object-cover rounded-md" />
    </div>
    <div className="details flex-1 sm:ml-4 text-center sm:text-left">
      <h4 className="text-lg font-semibold text-gray-800">Modern Lamp</h4>
      <p className="text-sm text-gray-600">Perfect addition to any modern interior.</p>
    </div>
    <div className="quantity text-center sm:text-right">
      <h4 className="text-sm font-medium text-gray-500">Quantity</h4>
      <p className="text-lg font-semibold text-gray-800">2</p>
    </div>
    <div className="price text-center sm:text-right">
      <h4 className="text-sm font-medium text-gray-500">Price</h4>
      <p className="text-lg font-semibold text-gray-800">£500</p>
    </div>
  </div>

  {/* Total Section */}
  <div className="total flex items-center justify-end text-right gap-4 mt-6 p-4">
    <p className="text-lg font-medium text-gray-700">SubTotal</p>
    <p className="text-2xl font-bold text-gray-900">£750</p>
  </div>

  {/* Checkout Button */}
  <div className="text-right mt-6">
    <button className="px-6 py-3 bg-[#2A254B] text-white text-lg font-semibold rounded-lg shadow  transition">
      Go to Checkout
    </button>
  </div>
</div>

</div>

        </>
    )
}