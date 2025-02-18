"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

interface OrderData {
  _type: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  cartItems: { _type: string; _ref: string }[];
  total: number;
  createdAt: string;
  status: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = !formValues[key as keyof typeof formValues].trim();
      return acc;
    }, {} as Record<string, boolean>);

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      return Swal.fire("Error", "Please fill all required fields", "error");
    }

    const orderData: OrderData = {
      _type: "order",
      customerName: `${formValues.firstName} ${formValues.lastName}`,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total,
      createdAt: new Date().toISOString(),
      status: "Pending",
    };

    setLoading(true);
    try {
      await client.create(orderData);
      localStorage.removeItem("cart");
      localStorage.removeItem("appliedDiscount");
      setCartItems([]);
      setFormValues({ firstName: "", lastName: "", address: "", city: "", zipCode: "", phone: "", email: "" });
      Swal.fire("Success", "Your order has been placed!", "success");
    } catch (error: any) {
      Swal.fire("Error", `Failed to place order: ${error.message || "Unknown error"}`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4 text-gray-600 text-sm">
          <Link href="/cart" className="hover:text-black transition">Cart</Link>
          <CgChevronRight className="w-4 h-4" />
          <span className="font-medium text-black">Checkout</span>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
          {cartItems.length > 0 ? cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-4 py-3 border-b">
              <Image src={urlFor(item.image).url()} alt={item.name} width={64} height={64} className="object-cover" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-500">Quantity {item.inventory}</p>
              </div>
              <p className="text-sm font-medium text-gray-800">${item.price * item.inventory}</p>
            </div>
          )) : <p className="text-sm text-gray-500">Your cart is empty.</p>}
          <div className="text-right pt-4 space-y-2 text-gray-700">
            <p className="text-sm">Subtotal: <span className="font-medium">${subtotal}</span></p>
            <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
            <p className="text-lg font-semibold text-gray-900">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Object.entries(formValues).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-gray-600 text-sm mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input id={key} value={value} onChange={handleInputChange} className="w-full border rounded-lg px-4 py-2" />
                {formErrors[key] && <p className="text-sm text-red-500">{key} is required.</p>}
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-lg bg-blue-500 text-white" onClick={handlePlaceOrder} disabled={loading}>{loading ? "Processing..." : "Place Order"}</button>
        </div>
      </div>
    </div>
  );
}
