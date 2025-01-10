import React from "react";
import "./introaccessory.css";

function IntroAccessory() {
  return (
    <div className="intro-accessory-container">
      <img
        alt="accessory-image"
        className="intro-accessory-image"
        src={"/images/accessory.jpg"}
      />
      <h1>Discover our latest accessories</h1>
      <p>All new accessories that just came out that fit with every outfits</p>
      <button className="accessory-details-button">See Details</button>
    </div>
  );
}

export default IntroAccessory;
