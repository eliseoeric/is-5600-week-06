import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const CardList = ({ data, onSelect }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [data, offset]);

  return (
    <div>
      <div className="card-list">
        {products.map((product) => (
          <Card key={product.id} product={product} onClick={() => onSelect(product)} />
        ))}
      </div>
      <Pagination
        total={data.length}
        limit={limit}
        offset={offset}
        setOffset={setOffset}
      />
    </div>
  );
};

export default CardList;
