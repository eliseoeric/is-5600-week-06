// SingleView.jsx
import { useParams } from "react-router-dom";

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find(p => p.id === parseInt(id));

  if (!product) return <p className="pa4">Product not found.</p>;

  return (
    <div className="pa4">
      <img src={product.image} alt={product.name} className="w-50" />
      <h1 className="f2">{product.name}</h1>
      <p className="f4">${product.price}</p>
      <p className="lh-copy">{product.description}</p>
    </div>
  );
};

export default SingleView;
