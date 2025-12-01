import React from "react";

function ProductCard({ product, onSelect }) {
  return (
    <div
      style={{
        width: "180px",
        border: "1px solid #ccc",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={onSelect}
    >
      <img src={product.image} width="100%" alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <small>Tags: {product.tags.join(", ")}</small>
    </div>
  );
}

export default ProductCard;