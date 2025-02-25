import React from "react";
import { Link } from "react-router-dom"; // Link for routing

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Tags: {product.tags.join(", ")}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default Card;
