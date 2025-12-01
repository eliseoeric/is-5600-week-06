import React from "react";

function SingleProductView({ product, closeView }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={closeView}>← Back</button>

      <h2>{product.name}</h2>

      <img src={product.image} alt={product.name} width="250" />

      <p>Price: ${product.price}</p>

      <p>
        <strong>Tags:</strong> {product.tags.join(", ")}
      </p>
    </div>
  );
}

export default SingleProductView;