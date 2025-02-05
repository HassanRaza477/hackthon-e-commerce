import { product } from "@/types/products";

// Define OrderData type to replace 'any'
interface OrderData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  items: product[];
  totalAmount: number;
}

// Function to safely parse localStorage data
const getCartFromLocalStorage = (): product[] => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  }
  return [];
};

export const addCart = (product: product) => {
  const cart: product[] = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({ ...product, inventory: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (productId: string) => {
  const cart: product[] = getCartFromLocalStorage();
  const updatedCart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const updateQuantity = (productId: string, quantity: number) => {
  const cart: product[] = getCartFromLocalStorage();
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItem = (): product[] => getCartFromLocalStorage();

export const submitOrder = async (orderData: OrderData) => {
  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Failed to place order: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting order:", error);
    throw error; // Ensure errors are properly caught in the UI
  }
};
