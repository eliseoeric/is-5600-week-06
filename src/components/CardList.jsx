import React from "react";
import Card from "./Card";

export default function CardList({ data }) {
  if (!data || data.length === 0) {
    return <p className="tc pa3 f4">No products found.</p>;
  }

  return (
    <div className="cf pa2">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
