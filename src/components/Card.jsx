import { Link } from "react-router-dom";

const Card = ({ id, description, urls }) => {
  const placeholder = "https://placehold.co/300x300?text=Product";
  const image = urls?.regular || placeholder;

  return (
    <Link to={`/product/${id}`} className="link black">
      <div className="fl w-25 pa2 tc">
        <img
          src={image}
          alt={description}
          className="w-100 br2"
          onError={(e) => (e.target.src = placeholder)}
        />

        <h2 className="f5 mt2">{description || "No description"}</h2>

        {/* Fake price (your dataset has none) */}
        <p className="gray">${Math.floor(Math.random() * 50) + 10}</p>
      </div>
    </Link>
  );
};

export default Card;
