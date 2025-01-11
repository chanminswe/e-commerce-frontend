import React, { useState } from "react";
import "./navbar.css";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";

function Navbar() {
  const [loginmodal, setLoginmodal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-lists">
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>
      <div className="logo-container">
        <h2 className="logo-name">Ionia</h2>
      </div>
      <div className="nav-buttons-container">
        <input className="nav-search" placeholder="search .." />
        <FaSearch size={20} />
        <FaShoppingBag size={20} />
        <p
          style={{ marginRight: "20px", cursor: "pointer" }}
          onClick={() => setLoginmodal(true)}
        >
          Login
        </p>
        {loginmodal && (
          <LoginModal
            setLoginModal={setLoginmodal}
            setSignupModal={setSignupModal}
          />
        )}
        {signupModal && (
          <SignUp
            setSignupModal={setSignupModal}
            setLoginModal={setLoginmodal}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
