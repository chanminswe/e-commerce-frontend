import React from "react";
import "./signup.css";

function SignUp({ setSignupModal, setLoginModal }) {
  return (
    <div className="signupmodal-container">
      <div className="signup-modal-overlay"></div>
      <form className="signup-modal-form">
        <button
          onClick={() => setSignupModal(false)}
          className="signup-modal-cross-button"
        >
          x
        </button>
        <fieldset className="signup-modal-fieldset">
          <label>Email : </label>
          <input type="text" />
          <br />
          <label>Password : </label>
          <input type="password" />
          <button className="signup-modal-login-button">Sign Up</button>
          <p>
            Alread have an account?{" "}
            <a
              onClick={() => {
                setSignupModal(false);
                setLoginModal(true);
              }}
              className="signup-modal-signup-link"
            >
              Login
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
