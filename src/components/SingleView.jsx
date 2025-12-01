import { useParams } from "react-router-dom";
import productData from "../data/full-products.json";

function SingleView() {
  const { id } = useParams();
  const product = productData.find((p) => p.id == id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default SingleView;
