import React from "react";
import "../styles/Login.css";
import "../styles/Signup.css";

import amazonlogo from "../Assets/amazon-logo-black.png";

function Signup() {
  return (
    <div id="loginPage">
      <div id="logo-section">
        <img id="amazon-logo" src={amazonlogo} alt="amazon" />
      </div>
      <div id="main-section">
        <h2>Create Account</h2>
        <label id="input-label">Your name</label>
        <input id="login-input-box" placeholder="First and last name" />
        <label id="input-label">Mobile number</label>
        <input id="login-input-box" placeholder="Mobile number" />
        <label id="input-label">Password</label>
        <input id="login-input-box" placeholder="At least 6 characters" />
        <p id="signup-message">
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <button id="login-continue-button">Verify mobile number</button>

        <div id="login-bottom-border"></div>
        <p id="login-buy-for-work">Buying for work?</p>
        <p id="login-amazon-business">Create a free business account</p>
        <div style={{ textAlign: "center", marginBottom: "5px" }}>
          Already have an account?{" "}
          <span className="login-conditions">Sign in</span>
        </div>
        <p id="login-terms">
          By continuing, you agree to Amazon's{" "}
          <span className="login-conditions">Conditions of Use</span> and{" "}
          <span className="login-conditions">Privacy Notice</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
