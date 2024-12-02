import { useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pa4">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <strong>Tags: </strong>
        {product.tags.join(', ')}
      </div>
    </div>
  );
};

export default SingleView;
