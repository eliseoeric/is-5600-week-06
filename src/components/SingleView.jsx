import React from "react";
import { useParams } from "react-router-dom";

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="pa3">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
    </div>
  );
};

export default SingleView;
