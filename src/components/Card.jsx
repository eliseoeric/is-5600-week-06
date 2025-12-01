import React from "react";
import { Link } from "react-router-dom";

const Card = ({description, alt_description, id, user, urls, likes}) => {

  const style = {
    backgroundImage: `url(${urls.small})`
  }
  
  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/product/${id}`} className="db link dim tc"> 
        <div style={style} alt="" className="w-100 db outline black-10 h4 cover"></div>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{description ?? alt_description}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{user.first_name} {user.last_name}</dd>
          <dt className="clip">Likes</dt>
          <dd className="ml0 gray truncate w-100">{likes} Likes</dd>
        </dl>
      </Link>
    </div>
  )
}

export default Card;
// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, description, price, tags = [] }) {
  return (
    <article className="ba b--black-10 pa3 mb3" style={{ maxWidth: 420 }}>
      <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="mv0">{title}</h3>
        <p className="mv1 gray">{description?.slice(0, 120)}{description && description.length > 120 ? "..." : ""}</p>
        <div className="mv1">
          <strong>${price?.toFixed ? price.toFixed(2) : price}</strong>
        </div>
        <div className="mv1">
          {tags.map((t, i) => (
            <span key={i} className="mr2 f7 gray">#{t}</span>
          ))}
        </div>
      </Link>
    </article>
  );
}
