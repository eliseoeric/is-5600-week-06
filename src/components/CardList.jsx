import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  if (!data || data.length === 0) return <p>No products found</p>;

  return (
    <div className="cf pa2">
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardList;