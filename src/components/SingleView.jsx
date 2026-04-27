import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="single-view">
        <h1>Product not found</h1>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  const title = product.description || product.alt_description || 'Untitled Product';

  return (
    <div className="single-view">
      <Link to="/" className="back-link">
        ← Back to products
      </Link>

      <img
        src={product.urls?.regular}
        alt={title}
        className="single-image"
      />

      <h1>{title}</h1>

      <p className="artist">
        Artist: {product.user?.first_name} {product.user?.last_name}
      </p>

      <p className="likes">♥ {product.likes} Likes</p>

      <div>
        {product.tags?.map((tag) => (
          <span className="tag" key={tag.title}>
            {tag.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleView;