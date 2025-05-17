import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
