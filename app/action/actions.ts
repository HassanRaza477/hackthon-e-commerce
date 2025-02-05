import { product } from "@/types/products";

export const addCart = (product : product) =>{
    const cart : product[] = JSON.parse(localStorage.getItem('cart')||'[]')
    const exixtingProductIndex = cart.findIndex(item => item._id === product._id)

    if(exixtingProductIndex > -1){
        cart[exixtingProductIndex].inventory += 1
    }
    else{
        cart.push({
            ...product, inventory:1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCart = (productId : string) => {
    let cart : product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))

}

export const updateQuantity = (productId : string, quantity:number) => {
    const cart : product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1){
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItem = ():product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}


export const submitOrder = async (orderData: string | number) => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to place order");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };
  