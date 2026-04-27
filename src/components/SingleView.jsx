import React from 'react';
import { useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();

  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="pa4">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Tags: {product.tags.join(', ')}</p>
    </div>
  );
};

export default SingleView;