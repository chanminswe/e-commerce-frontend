import React, { useContext, useState } from "react";
import "./navbar.css";
import {
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaMale,
  FaFemale,
  FaChild,
  FaShoppingCart,
  FaHouseUser,
} from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import { ScreenContext } from "../context/ScreenContextProvider";

function Navbar() {
  const [loginmodal, setLoginmodal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const { screenSize } = useContext(ScreenContext);
  const navigate = useNavigate();

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
            <div
              onClick={() => navigate("/")}
              className="dropdown-nav-children dropdown-header"
            >
              <p>Ionia</p>

              <FaHouseUser size={20} />
            </div>
            <div className="dropdown-nav-children">
              <p>Men</p>
              <FaMale size={20} />
            </div>
            <div className="dropdown-nav-children">
              <p>Women</p>

              <FaFemale size={20} />
            </div>
            <div className="dropdown-nav-children">
              <p>Kids</p>

              <FaChild size={20} />
            </div>
            <div
              onClick={() => navigate("/cart")}
              className="dropdown-nav-children"
            >
              <p>Cart</p>

              <FaShoppingCart size={20} />
            </div>
          </div>
        </div>
      )}

      <div className="logo-container">
        <h2
          onClick={() => {
            navigate("/");
          }}
          className="logo-name"
        >
          Ionia
        </h2>
      </div>
      {screenSize.screenWidth > 600 && (
        <div className="nav-buttons-container">
          <FaSearch className="nav-icons" size={28} />
          <FaShoppingBag
            className="nav-icons"
            size={28}
            onClick={() => {
              navigate("/cart");
            }}
          />
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
