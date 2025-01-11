import React from "react";
import "./seedetails.css";

function SeeDetails() {
  return (
    <div className="see-details-container">
      <div className="details-for-men">
        <h3 className="details-heading">Men</h3>
        <button className="details-button">See Details</button>
      </div>
      <div className="details-for-women">
        <h3 className="details-heading">Women</h3>
        <button className="details-button">See Details</button>
      </div>
      <div className="details-for-kids">
        <h3 className="details-heading">Kids</h3>
        <button className="details-button">See Details</button>
      </div>
    </div>
  );
}

export default SeeDetails;
