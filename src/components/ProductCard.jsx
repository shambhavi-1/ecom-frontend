import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const ProductCard = ({ image, title, description, price, rating, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt={title} className="product-image" />
      <h4 className="product-title">{title}</h4>
      <p className="product-price">${price}</p>
      <p className="product-rating">⭐ {rating.rate}</p>
      <button className="buy-now">Buy Now</button>
    </div>
  );
};

export default ProductCard;
