import { Link } from "react-router-dom";

function Card(props) {
  const { product, index } = props;

  return (
    <Link
      to={`/product/${index + 1}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <img
          src={product.urls.small}
          alt="product"
          width="250"
        />

        <h3>
          {product.description || product.alt_description}
        </h3>

        <p>{product.user.name}</p>

        <p>{product.likes} Likes</p>
      </div>
    </Link>
  );
}

export default Card;