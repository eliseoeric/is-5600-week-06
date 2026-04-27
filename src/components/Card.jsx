import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, image, price }) => {
  return (
    <Link to={`/product/${id}`} className="db link dim ba pa2 ma2">
      <img src={image} alt={title} className="w-100" />
      <h3>{title}</h3>
      <p>${price}</p>
    </Link>
  );
};

export default Card;