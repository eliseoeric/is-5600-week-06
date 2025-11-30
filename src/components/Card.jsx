// Card.jsx
import { Link } from "react-router-dom";

const Card = ({ id, name, price, image }) => {
  return (
    <div className="pa3 ma2 ba br2 shadow-3">
      <Link to={`/product/${id}`} className="no-underline black">
        <img src={image} alt={name} className="w-100" />
        <h3 className="mt2">{name}</h3>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default Card;
