import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleView({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert ids to string for matching
  const product = data.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <h2 className="red">Product Not Found</h2>
        <button className="pa2 ba br2" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <article className="mw7 center bg-white ba mv4 br3 shadow-4 pa3">

      <button
        className="pa2 ba br2 mb3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="f2 tc">{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        className="w-100 br3 mb3"
      />

      <div className="mb3">
        {product.tags.map((tag) => (
          <span key={tag.id} className="ba br2 pa1 mr2">
            {tag.title}
          </span>
        ))}
      </div>

      <p className="lh-copy f5">
        {product.description}
      </p>
    </article>
  );
}
