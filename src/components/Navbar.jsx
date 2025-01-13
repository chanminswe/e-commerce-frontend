import React, { useContext, useState } from "react";
import "./navbar.css";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";
import { ScreenContext } from "../context/ScreenContextProvider";

function Navbar() {
  const [loginmodal, setLoginmodal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const { screenSize } = useContext(ScreenContext);

  return (
    <nav className="nav-container">
      {/*For Reponsive Nav Bar*/}
      {screenSize.screenWidth > 600 && (
        <div className="nav-lists">
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>
      )}
      {screenSize.screenWidth <= 600 && (
        <div className="nav-responsive-container">
          <FaBars onClick={() => setIsDropDown(true)} size={20} />
        </div>
      )}

      {/*Responsive Drop Down Lists*/}
      {isDropDown && (
        <div className="dropdown-modal-container">
          <div
            onClick={() => setIsDropDown(false)}
            className="dropdown-overlay-container"
          ></div>
          <div className="dropdown-modal-nav">
            <div className="nav-children-heading">
              <h3>Ionia</h3>
            </div>
            <div className="dropdown-nav-children">
              <p>Men</p>
            </div>
            <div className="dropdown-nav-children">
              <p>Women</p>
            </div>
            <div className="dropdown-nav-children">
              <p>Kids</p>
            </div>
          </div>
        </div>
      )}

      <div className="logo-container">
        <h2 className="logo-name">Ionia</h2>
      </div>
      {screenSize.screenWidth > 600 && (
        <div className="nav-buttons-container">
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
      )}
    </nav>
  );
}

export default Navbar;
