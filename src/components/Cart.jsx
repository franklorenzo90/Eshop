import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../custom-hooks/useCart";

function Cart() {
  const { cart, quantity, totalPrice } = useCart();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setCount(quantity());
    setPrice(totalPrice());
  }, [cart]);

  return (
    <>
      <Link to="/cartview" className="link">
        <i className="fas fa-cart-plus"></i> {count}
        <i className="fas fa-dollar-sign ms-2"></i> {price}
      </Link>
    </>
  );
}

export default Cart;
