import { Link } from 'react-router-dom';

const Card = ({ id, alt_description, description, urls, tags }) => {
  return (
    <div className="fl w-100 w-50-m w-25-l pa2">
      <div className="ba b--black-10">
        <Link to={`/product/${id}`} className="link black">
          {urls && (
            <img
              src={urls.regular}
              alt={alt_description}
              className="w-100 db"
            />
          )}
          <div className="pa2">
            <h3 className="f5 f4-ns mv0">{alt_description}</h3>
            <p className="f6 mt1 mb0 black-60">{description}</p>
            {tags && (
              <div className="mt2">
                {tags.map((tag, i) => (
                  <span key={i} className="f7 br-pill ba ph2 pv1 mb1 dib black-50 mr1">
                    {tag.title || tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;