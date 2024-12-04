import React from "react";
import "../styles/Login.css";
import amazonlogo from "../Assets/amazon-logo-black.png";

function Login() {
  return (
    <div id="loginPage">
      <div id="logo-section">
        <img id="amazon-logo" src={amazonlogo} alt="amazon" />
      </div>
      <div id="main-section">
        <h2>Sign in</h2>
        <label id="input-label">Email or mobile number</label>
        <input id="login-input-box" />
        <button id="login-continue-button">Continue</button>
        <p id="login-terms">
          By continuing, you agree to Amazon's{" "}
          <span className="login-conditions">Conditions of Use</span> and{" "}
          <span className="login-conditions">Privacy Notice</span>
        </p>
        <p id="login-need-help">Need help?</p>
        <div id="login-bottom-border"></div>
        <p id="login-buy-for-work">Buying for work?</p>
        <p id="login-amazon-business">Shop on Amazon Business</p>
      </div>
      <div id="bottom-section">
        <div style={{ textAlign: "center", marginBottom: "5px" }}>
          New to Amazon?
        </div>
        <button id="login-create-account">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
