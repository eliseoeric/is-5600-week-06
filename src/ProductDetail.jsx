import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then(r => r.json())
      .then(data => setProduct(data.find(x => String(x.id) === String(id))));
  }, [id]);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="pa3">
      <Link to="/" className="mb3 db">← Back to list</Link>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div><strong>Tags:</strong> {product.tags?.join(", ")}</div>
      {/* show dueDate, completed, reminders if present */}
    </div>
  );
}
