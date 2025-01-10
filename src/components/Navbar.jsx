import React from "react";
import "./navbar.css";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-lists">
        <p>Men</p>
        <p>Women</p>
      </div>
      <div className="logo-container">
        <h2 className="logo-name">Ionia</h2>
      </div>
      <div className="nav-buttons-container">
        <input className="nav-search" placeholder="search .." />
        <FaSearch size={20} />
        <FaShoppingBag size={20} />
        <p style={{marginRight: '20px'}}>Login</p>
      </div>
    </nav>
  );
}

export default Navbar;
