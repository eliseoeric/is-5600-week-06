import { useParams, Link } from "react-router-dom";

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

  if (!product) return <p>Product Not Found</p>;

  return (
    <div className="pa4">
      <Link to="/" className="no-underline blue">← Back</Link>

      <div className="mt3">
        <img src={product.urls.regular} alt={product.title} className="br2 w-50" />

        <h2 className="mt3">{product.title}</h2>
        <p className="gray">By {product.user.first_name}</p>

        <h4 className="mt3">Tags:</h4>
        <ul>
          {product.tags.map((tag) => (
            <li key={tag._id}>{tag.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleView;
