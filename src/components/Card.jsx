import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <p>{product.description}</p>
    </div>
  );
}

export default Card;
