'use client';
import { product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItem, removeCart, updateQuantity } from '../action/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItem, setCartItem] = useState<product[]>([]);

  useEffect(() => {
    const updatedCart = getCartItem();
    if (updatedCart) {
      setCartItem(updatedCart);
    }
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(id);
        const updatedCart = getCartItem();
        if (updatedCart) {
          setCartItem(updatedCart);
        }
        Swal.fire('Removed', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
    const updatedCart = getCartItem();
    if (updatedCart) {
      setCartItem(updatedCart);
    }
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) handleQuantity(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantity(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.inventory, 0);
  };
  

    const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been placed successfully', 'success');
        router.push("/checkout")
        setCartItem([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
  <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-center text-blue-600">Shopping Cart</h1>
  {cartItem.length > 0 ? (
    <div>
      {/* Desktop Table */}
      <div className="hidden md:block shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="p-4 flex items-center">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={item.name}
                        width={64}
                        height={64}
                      />
                    )}
                    <span className="ml-4 font-medium">{item.name}</span>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.inventory}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4">${(item.price * item.inventory).toFixed(2)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {cartItem.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex gap-4">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  className="w-24 h-24 object-cover rounded-lg"
                  alt={item.name}
                  width={96}
                  height={96}
                />
              )}
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <span className="font-medium">
                  ${(item.price * item.inventory).toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="w-full py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xl font-bold text-gray-800">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <button
            onClick={handleProceed}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center py-12">
      <div className="mb-4 text-6xl text-gray-300">🛒</div>
      <p className="text-gray-500 text-lg">Your cart is empty</p>
      <p className="text-gray-400">Start adding items to continue shopping</p>
    </div>
  )}
</div>
  );
};

export default CartPage;
