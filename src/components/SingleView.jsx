import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <p className="f4">Product not found.</p>
        <Link to="/" className="link blue">← Back to products</Link>
      </div>
    );
  }

  const { urls, alt_description, user, tags, likes, links } = product;

  return (
    <div className="pa3">
      <Link to="/" className="link blue db mb3">← Back</Link>
      <div className="mw8 center">
        <div
          className="w-100 db outline black-10 vh-50 cover br3"
          style={{ backgroundImage: `url(${urls?.regular || urls?.small || urls?.thumb})` }}
          aria-label={alt_description || "image"}
        />
        <div className="mt3">
          <h2 className="f3 fw5 mv2">{(tags || []).slice(0,3).map(t => t.title).join(", ") || "Untitled"}</h2>
          <p className="gray mv2">
            By {user?.first_name} {user?.last_name || ""}
          </p>
          {typeof likes === "number" && <p className="mv2">❤️ {likes} likes</p>}
          {links?.html && (
            <p className="mv2">
              <a className="link blue" href={links.html} target="_blank" rel="noreferrer">View on Unsplash</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}