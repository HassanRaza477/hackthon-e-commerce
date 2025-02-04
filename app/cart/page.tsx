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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">Shopping Cart</h1>
      {cartItem.length > 0 ? (
        <div className="shadow-lg rounded-lg overflow-hidden bg-white">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-100 text-gray-800">
                <th className="p-4 border">Image</th>
                <th className="p-4 border">Product</th>
                <th className="p-4 border">Price</th>
                <th className="p-4 border">Quantity</th>
                <th className="p-4 border">Total</th>
                <th className="p-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="p-4 border">
                    {item.image && (
                       <Image 
                       src={urlFor(item.image).url()}
                       className="w-16 h-16 object-cover rounded-lg"
                       alt='image'
                       width={200}
                       height={200}
                       />
                    )}
                  </td>
                  <td className="p-4 border font-medium text-gray-700">{item.name}</td>
                  <td className="p-4 border text-gray-600">${item.price.toFixed(2)}</td>
                  <td className="p-4 border flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-200 text-gray-800 rounded">
                      {item.inventory}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-4 border text-gray-600">
                    ${(item.price * item.inventory).toFixed(2)}
                  </td>
                  <td className="p-4 border">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 p-4 bg-gray-100 flex justify-between items-center">
            <p className="text-lg font-bold text-gray-700">Total: ${calculateTotal().toFixed(2)}</p>
            <button
              onClick={handleProceed}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-md"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty. Add some products to get started!</p>
      )}
    </div>
  );
};

export default CartPage;
