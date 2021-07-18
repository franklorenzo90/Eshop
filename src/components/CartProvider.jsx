import React, { useState } from "react";
import { CartContext } from "../context/context";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Buy a product
  const buy = (product) => {
    const prod = cart.find((p) => p.product.id === product.id);
    if (prod) {
      const newCart = cart.filter((p) => p.product.id !== product.id);
      setCart([...newCart, { product, quantity: prod.quantity + 1 }]);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  //Pay cart
  const pay = (product) => {
    const newCart = cart.filter((p) => p.product.id !== product.product.id);
    setCart(newCart);
  };

  // Quantity of products
  const quantity = () => {
    let count = 0;
    cart.map((p) => (count += p.quantity));
    return count;
  };

  // Empty Cart
  const emptyCart = () => setCart([]);

  //Total price
  const totalPrice = () => {
    let price = 0;
    cart.map((p) => {
      price = price + p.product.price * p.quantity;
    });
    return Math.round((price + Number.EPSILON) * 100) / 100;
  };

  // Delect from list
  const deleteFromList = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((p) => {
          if (p.product.id === product.product.id) {
            return { product: p.product, quantity: p.quantity - 1 };
          }
          return p;
        })
      );
    } else {
      setCart(cart.filter((p) => p.product.id !== product.product.id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        buy,
        quantity,
        totalPrice,
        emptyCart,
        deleteFromList,
        pay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
