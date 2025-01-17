import React, { useEffect, useState } from "react";
import "./cart.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Replace with your preferred theme
import "primereact/resources/primereact.min.css";
import { useDispatch, useSelector } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { removeFromCart } from "../../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cartItems);

    //to calculate price
    function calculateTotal() {
      const newTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    }

    calculateTotal();
  }, [cartItems]);

  const imageTemplate = (rowData) => (
    <img src={rowData.image} alt={rowData.title} style={{ width: "50px" }} />
  );

  const removeTemplate = (rowData) => (
    <button
      className="cart-remove-button"
      onClick={() => {
        dispatch(removeFromCart(rowData.title));
      }}
    >
      &#10060;
    </button>
  );

  return (
    <PrimeReactProvider>
      <div className="cart-container">
        <h2>Cart</h2>
        <div className="cartItems">
          <DataTable
            responsiveLayout="stack"
            breakpoint="960px"
            value={cartItems}
            className="cart-table"
            style={{ position: "relative", zIndex: 10 }}
          >
            <Column field="title" header="Name"></Column>
            <Column header="Image" body={imageTemplate}></Column>
            <Column field="price" header="Price"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column header="Remove" body={removeTemplate}></Column>
          </DataTable>
        </div>
        <div className="cartTotal">
          <h2>Cart Total</h2>
          <div className="cart-button-container">
            <div className="subtotal-container">
              <p>Subtotal</p>
              <p>${total.toFixed(1)}</p>
            </div>
            <div className="total-container">
              <p>Total</p>
              <p>${total.toFixed(1)}</p>
            </div>
            <div className="total-button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default Cart;
