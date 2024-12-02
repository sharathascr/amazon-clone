import React from "react";
import "./Navbar.css";
import amazonlogo from "../../Assets/Amazon-logo.png";

function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar-start">
        <div className="nav-item">
          <img src={amazonlogo} alt="home" id="home-logo" />
        </div>
      </div>
      <div id="navbar-middle">
        <div className="nav-item">Search</div>
      </div>
      <div id="navbar-end">
        <div className="nav-item">Login</div>
        <div className="nav-item">signup</div>
        <div className="nav-item">cart</div>
      </div>
    </div>
  );
}

export default Navbar;
