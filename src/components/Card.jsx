import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, urls, alt_description, user, tags }) {
  const tagLine = (tags || []).slice(0, 3).map(t => t.title).join(", ");
  const artist = [user?.first_name, user?.last_name].filter(Boolean).join(" ");

  return (
    <div className="fl w-100 w-50-m w-25-l pa2">
      <Link to={`/product/${id}`} className="db link dim tc">
        <div
          className="w-100 db outline black-10 h4 cover br2"
          style={{ backgroundImage: `url(${urls?.thumb || urls?.small || urls?.regular})` }}
          aria-label={alt_description || "image"}
          title={alt_description || ""}
        />
        <dl className="mt2 f6 lh-copy">
          <dd className="ml0 black truncate w-100">{tagLine || "Untitled"}</dd>
          <dd className="ml0 gray truncate w-100">{artist || "Unknown"}</dd>
        </dl>
      </Link>
    </div>
  );
}