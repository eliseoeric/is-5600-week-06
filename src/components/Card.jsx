import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, description, alt_description, user, urls, likes, tags }) => {
  const title = description || alt_description || 'Untitled Product';

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="product-card">
        <img src={urls?.small} alt={title} className="product-image" />

        <h2 className="product-title">{title}</h2>

        <p className="artist">
          Artist: {user?.first_name} {user?.last_name}
        </p>

        <p className="likes">♥ {likes} Likes</p>

        <div>
          {tags?.slice(0, 3).map((tag) => (
            <span className="tag" key={tag.title}>
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;