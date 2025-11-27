import { useParams } from "react-router-dom";

const SingleView = ({ data }) => {
  const { id } = useParams();

  const product = data.find((p) => p.id === id);

  const placeholder = "https://placehold.co/400x400?text=Product";
  const image = product?.urls?.regular || placeholder;

  if (!product) return <p className="pa4">Product Not Found</p>;

  return (
    <div className="pa4">
      <img
        src={image}
        alt={product.description}
        className="w-30 br2"
        onError={(e) => (e.target.src = placeholder)}
      />

      <h1 className="f2 mt3">{product.description || "No description"}</h1>

      <p className="f3">
        Price: ${Math.floor(Math.random() * 50) + 10}
      </p>

      <p className="lh-copy mt3">
        Size: {product.width} × {product.height} pixels
      </p>

      <div className="mt3">
        <h3>Tags:</h3>
        <p>No tags available for this dataset</p>
      </div>
    </div>
  );
};

export default SingleView;
