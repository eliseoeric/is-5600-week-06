import { useParams } from 'react-router-dom';

function SingleView(props) {
  const { data } = props;
  const { id } = useParams();

  let product = data.find((product) => String(product.id) === String(id));

  if (!product) {
    const index = Number(id) - 1;
    if (!Number.isNaN(index) && index >= 0 && index < data.length) {
      product = data[index];
    }
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const { user } = product;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{user.name}</h1>

      <img
        src={product.urls.regular}
        alt={product.description || product.alt_description || 'product'}
        width="500"
      />

      <h2>{product.description || product.alt_description || 'No description'}</h2>
      <p>Likes: {product.likes}</p>
    </div>
  );
}

export default SingleView;