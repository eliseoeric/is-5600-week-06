import React from "react";
import { Link } from "react-router-dom";

export default function CardList({ products }) {
  return (
    <div className="flex flex-wrap justify-center pa3">
      {products.map((product) => {
        const title =
          product.description ?? product.alt_description;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="no-underline black ma3"
          >
            <div className="ba br3 shadow-4 pa3 w5">
              <img
                src={product.urls["small"]}
                alt="product"
                className="w-100"
              />

              <h3 className="f6">
                ID: {product.id}
              </h3>

              <p>{title}</p>

              <p>&hearts; {product.likes}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}