import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, description, tags }) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className="no-underline black"
    >
      <article className="mw5 bg-white br3 pa3 mv3 ba b--black-10 shadow-4 pointer">
        
        <div className="tc">
          <img 
            src={image} 
            alt={title} 
            className="br3 w-100 h4 object-cover"
          />
        </div>

        <div className="mt2">
          <h2 className="f5 mb2">{title}</h2>

          <div className="mb2">
            {tags.map(tag => (
              <span 
                key={tag.id}
                className="ba br2 pa1 mr2"
              >
                {tag.title}
              </span>
            ))}
          </div>

          <p className="f6 gray">
            {description.slice(0, 60)}…
          </p>
        </div>

      </article>
    </Link>
  );
};

export default Card;
