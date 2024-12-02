import { Link } from 'react-router-dom';

const Card = ({ id, name, description, tags }) => (
  <div className="ba pa3 mb3">
    <h2>{name}</h2>
    <p>{description}</p>
    <div>
      {tags.map((tag, idx) => (
        <span key={idx} className="mr2 badge">
          {tag}
        </span>
      ))}
    </div>
    <Link to={`/product/${id}`} className="link underline mt2 db">
      View Details
    </Link>
  </div>
);

export default Card;
