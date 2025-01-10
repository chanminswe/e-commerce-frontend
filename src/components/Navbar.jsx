import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-lists">
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>
      <div className="logo-container"></div>
      <div className="nav-buttons"></div>
    </nav>
  );
}

export default Navbar;
