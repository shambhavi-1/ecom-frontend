import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"; // Optional: separate style file

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">MyShop 🛍️</Link>
      </div>
      <div className="nav-right">
        <Link to="/products">Products</Link>

        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
