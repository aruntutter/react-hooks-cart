// Navbar.js
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const iconStyles = {
  margin: "20px",
};

const Navbar = ({ totalCount }) => {
  const count = isNaN(totalCount) ? 0 : totalCount;
  return (
    <div className="navbar">
      <h1>React CART</h1>
      <div className="cart-icon">
        <FaShoppingCart style={iconStyles} />
        <span className="total-count">{count}</span>
      </div>
    </div>
  );
};

export default Navbar;
