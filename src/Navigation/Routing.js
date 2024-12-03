import React from "react";
import { Route, Routes } from "react-router/dist/development";
import LandingPage from "../Pages/LandingPage";
import Cart from "../Pages/Cart";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;
