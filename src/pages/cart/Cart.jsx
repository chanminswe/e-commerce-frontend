import React, { useEffect } from "react";
import "./cart.css";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cartItems">

      </div>
      <div className="cartTotal"></div>
    </div>
  );
}

export default Cart;
