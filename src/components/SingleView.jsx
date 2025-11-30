import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleView({ data }) {
  const { id } = useParams();

  const product = data.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <p>Product not found.</p>
        <Link className="link dim blue" to="/">
          Back to products
        </Link>
      </div>
    );
  }

  const { user } = product;
  const title = product.description ?? product.alt_description;

  const style = {
    backgroundImage: `url(${product.urls["regular"]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="pa3 pa4-ns">
      <article className="center mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="aspect-ratio aspect-ratio--4x3 mb3">
          <div className="aspect-ratio--object" style={style} />
        </div>

        <div className="pa2">
          <h1 className="f4 mb2">{title}</h1>
          <h2 className="f6 gray mb3">
            By {user.first_name} {user.last_name} (@{user.username})
          </h2>

          <p className="f6 lh-copy mv2">Likes: {product.likes}</p>

          {product.tags && product.tags.length > 0 && (
            <div className="mt3">
              <h3 className="f6 b mb1">Tags</h3>
              <div className="flex flex-wrap">
                {product.tags.map((tag) => (
                  <span
                    key={tag.title}
                    className="f7 ba br2 ph2 pv1 mr2 mb2"
                  >
                    {tag.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt4">
            <Link className="link dim blue" to="/">
              ← Back to all products
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}