import React from "react";
import { useParams } from "react-router-dom";

const ProductsDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Products Details Page</h3>
      <p>Products will be here</p>
      <p>Product Id : {id}</p>
    </div>
  );
};

export default ProductsDetailsPage;
