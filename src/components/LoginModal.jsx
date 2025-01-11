import React, { useState } from "react";
import "./loginmodal.css";

function LoginModal({ setLoginModal, setSignupModal }) {
  return (
    <div className="loginmodal-container">
      <div
        onClick={() => setLoginModal(false)}
        className="loginmodal-overlay"
      ></div>
      <form className="loginmodal-form">
        <button
          onClick={() => setLoginModal(false)}
          className="loginmodal-cross-button"
        >
          x
        </button>
        <fieldset className="loginmodal-fieldset">
          <label>Email : </label>
          <input type="text" />
          <br />
          <label>Password : </label>
          <input type="password" />
          <button className="loginmodal-login-button">Login</button>
          <p>
            Don't have an account yet ?{" "}
            <a
              onClick={() => {
                setLoginModal(false);
                setSignupModal(true);
              }}
              className="loginmodal-signup-link"
            >
              Sign up
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginModal;
