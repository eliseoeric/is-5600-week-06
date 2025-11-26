import React from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find(p => String(p.id) === String(id));
  if (!product) return <p className="tc pa4">Product not found</p>;
  return (
    <article className="mw7 center ba mv4">
      <div className="pa3 flex items-center">
        <img src={product.user.profile_image.medium} className="br-100 h3 w3" alt="" />
        <h2 className="ml3">{product.user.first_name} {product.user.last_name}</h2>
      </div>

      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover"
          style={{backgroundImage:`url(${product.urls.regular})`}} />
      </div>

      <div className="pa3 flex justify-between">
        <div>
          <h3>Product ID: {id}</h3>
          <p>{product.description ?? product.alt_description}</p>
        </div>
        <p className="gray">❤️ {product.likes}</p>
      </div>

      <Link to="/" className="db tc pa3 link dim">← Back to Products</Link>
    </article>
  );
}
