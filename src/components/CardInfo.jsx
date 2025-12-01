import React from "react";
import { useParams, Link } from "react-router-dom";

const CardInfo = ({ products }) => {
  const { id } = useParams(); // get the product id from URL
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <h2>Product not found</h2>
        <Link to="/" className="blue underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pa4">
      <Link to="/" className="blue underline mb3 db">
        ← Back to Products
      </Link>
      <h2 className="f3 mb3">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="mb3"
        style={{ maxWidth: "300px" }}
      />
      <p className="mb2">{product.description}</p>
      <p className="b">Price: ${product.price}</p>
      <div className="mt3">
        <strong>Tags:</strong>{" "}
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="ba b--black-20 pa1 mr2 mb2 dib"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
