"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { getCartItem, submitOrder } from "../action/actions";
import Swal from "sweetalert2";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
          title: 'place order',
          text: 'Please review your cart',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Checkout',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Success", "Your order has been placed!", "success").then(() => {
              localStorage.removeItem("appliedDiscount");
              setCartItems([]); 
              setFormValues({
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                zipCode: "",
                phone: "",
                email: "",
              }); 
            });
          }
        });
        if (!validateForm()) {
        }

        const orderData:any = {
          customerName: `${formValues.firstName} ${formValues.lastName}`,
          email: formValues.email,
          phone: formValues.phone,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          orderItems: cartItems.map((item) => ({
            productName: item.name,
            quantity: item.inventory,
            price: item.price,
          })),
          totalPrice: total,
          createdAt: new Date().toISOString(),
        };
      
        try {
          await submitOrder(orderData);
      
          // Clear cart and form
          setCartItems([]);
          setFormValues({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zipCode: "",
            phone: "",
            email: "",
          });
          localStorage.removeItem("cart");
          localStorage.removeItem("appliedDiscount");
      
          Swal.fire("Success", "Your order has been placed!", "success");
        } catch (error) {
          Swal.fire("Error", "Order submission failed", "error");
        }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
  {/* Breadcrumb */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center gap-2 py-4 text-gray-600 text-sm">
      <Link href="/cart" className="hover:text-black transition">
        Cart
      </Link>
      <CgChevronRight className="w-4 h-4" />
      <span className="font-medium text-black">Checkout</span>
    </nav>
  </div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Order Summary */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item._id} className="flex items-center gap-4 py-3 border-b">
            <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-500">Quantity {item.inventory}</p>
            </div>
            <p className="text-sm font-medium text-gray-800">
              ${item.price * item.inventory}
            </p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      )}
      <div className="text-right pt-4 space-y-2 text-gray-700">
        <p className="text-sm">
          Subtotal: <span className="font-medium">${subtotal}</span>
        </p>
        <p className="text-sm">
          Discount: <span className="font-medium">-${discount}</span>
        </p>
        <p className="text-lg font-semibold text-gray-900">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>

    {/* Billing Form */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800">Billing Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { id: "firstName", label: "First Name" },
          { id: "lastName", label: "Last Name" },
        ].map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-gray-600 text-sm mb-1">
              {label}
            </label>
            <input
              id={id}
              placeholder={`Enter your ${label.toLowerCase()}`}
              value={formValues[id as keyof typeof formValues]}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {formErrors[id as keyof typeof formErrors] && (
              <p className="text-sm text-red-500">{label} is required.</p>
            )}
          </div>
        ))}
      </div>

      {[
        { id: "address", label: "Address" },
        { id: "city", label: "City" },
        { id: "zipCode", label: "Zip Code" },
        { id: "phone", label: "Phone" },
        { id: "email", label: "Email" },
      ].map(({ id, label }) => (
        <div key={id} className="mt-4">
          <label htmlFor={id} className="block text-gray-600 text-sm mb-1">
            {label}
          </label>
          <input
            id={id}
            placeholder={`Enter your ${label.toLowerCase()}`}
            value={formValues[id as keyof typeof formValues]}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {formErrors[id as keyof typeof formErrors] && (
            <p className="text-sm text-red-500">{label} is required.</p>
          )}
        </div>
      ))}

      <button
        className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  </div>
</div>

  );
}