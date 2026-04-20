import { useState, useEffect } from "react";
import Card from "./Card";

function CardList({ data }) {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  const handlePrevious = () => {
    if (offset > 0) setOffset(offset - limit);
  };

  const handleNext = () => {
    if (offset + limit < data.length) {
      setOffset(offset + limit);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {products.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            index={offset + index}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handlePrevious}>Previous</button>

        <button
          onClick={handleNext}
          style={{ marginLeft: "20px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardList;