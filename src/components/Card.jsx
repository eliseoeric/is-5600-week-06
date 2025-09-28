import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, description, alt_description, user, urls, likes }) => {

  if (!user || !urls) return null;


  const title = description || alt_description || "No description";
  const firstName = user.first_name || "";
  const lastName = user.last_name || "";
  const imageUrl = urls.small || urls.thumb || "https://via.placeholder.com/150";
  const likeCount = likes || 0;

  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/product/${id}`} className="db link dim tc">
        <div style={style} className="w-100 db outline black-10 h4 cover"></div>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{title}</dd>

          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{firstName} {lastName}</dd>

          <dt className="clip">Likes</dt>
          <dd className="ml0 gray truncate w-100">{likeCount} Likes</dd>
        </dl>
      </Link>
    </div>
  );
};

export default Card;