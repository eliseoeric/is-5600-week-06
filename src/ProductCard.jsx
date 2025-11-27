import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="ba pa3 br2 shadow-1 h-100">
      <h3 className="f6 mv0">{product.title}</h3>
      <p className="f7 mv1">{product.description}</p>
      <div className="mv2">
        {(product.tags||[]).map(t => <span key={t} className="f7 mr2 pa1 ba br1">{t}</span>)}
      </div>
      <div className="mv2">
        <Link to={`/products/${product.id}`} className="no-underline underline-hover">View details</Link>
      </div>
    </div>
  );
}
