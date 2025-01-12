import React from "react";
import "./buynow.css";

function BuyNow() {
  return (
    <div
      className="buynow-container"
      style={{
        backgroundImage: "url('/images/buynow-man.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "550px",
        width: "95vw",
        margin: "auto",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <h2 className="buynow-heading">Ionia Collection</h2>
      <div className="buynow-paragraph-container">
        <p>
          Find our best collection.Offering our best quality product in our{" "}
          <br /> Ionia Collection
        </p>
        <button className="buynow-button">Buy Now</button>
      </div>
    </div>
  );
}

export default BuyNow;
