import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../index.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products/`
        );
        const data = await response.json();
        console.log("Fetched products:", data); // ✅ Debugging step
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-header" style={{ color: "white" }}>
        Products Page
      </h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            image={product.image} // ✅ Correct usage
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
