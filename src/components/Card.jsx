import React from "react";
import { Link } from "react-router-dom";

const Card = ({ description, alt_description, id, user, urls, likes }) => {
  
  // Inline style for setting the background image dynamically
  const style = {
    backgroundImage: `url(${urls.small})`
  };
  
  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      {/* Clicking on the card navigates to the product details page */}
      <Link to={`/product/${id}`} className="db link dim tc"> 
        {/* Image container with a dynamic background */}
        <div style={style} alt="" className="w-100 db outline black-10 h4 cover"></div>

        {/* Product details */}
        <dl className="mt2 f6 lh-copy">
          {/* Product title */}
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{description ?? alt_description}</dd>

          {/* Artist name */}
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{user.first_name} {user.last_name}</dd>

          {/* Number of likes */}
          <dt className="clip">Likes</dt>
          <dd className="ml0 gray truncate w-100">{likes} Likes</dd>
        </dl>
      </Link>
    </div>
  );
}

export default Card;
