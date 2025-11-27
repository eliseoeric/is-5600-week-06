import { Link } from "react-router-dom";

const Card = ({ id, title, urls, user }) => {
  return (
    <div className="fl w-25 pa2">
      <Link to={`/product/${id}`} className="no-underline black">
        <div className="ba br2 pa2 shadow-1">
          <img src={urls.small} alt={title} className="w-100 br2" />

          {/* Title */}
          <h3 className="f5 mt2">{title}</h3>

          {/* User */}
          <p className="gray f6">By {user.first_name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
