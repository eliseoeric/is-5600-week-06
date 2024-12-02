import React from 'react';
import { useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams(); // Get the product id from the URL
  const product = data.find((item) => item.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add any additional details here */}
    </div>
  );
};

export default SingleView;
