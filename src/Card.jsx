import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description, price }) => {
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default Card;
