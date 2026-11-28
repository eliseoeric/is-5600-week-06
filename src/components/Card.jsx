import { Link } from 'react-router-dom';

export default function Card(product) {
  const title =
    product.description ?? product.alt_description ?? 'Untitled print';

  return (
    <article className="fl w-100 w-50-m w-third-l pa2">
      <Link
        to={`/product/${product.id}`}
        className="db link near-black ba b--black-10 bg-white"
      >
        <img
          src={product.urls.small}
          alt={title}
          loading="lazy"
          className="db w-100"
          style={{ height: '240px', objectFit: 'cover' }}
        />
        <div className="pa3">
          <h2 className="f5 mt0">{title}</h2>
          <p className="f6 gray">
            By {product.user.name || product.user.first_name}
          </p>
          <p className="f6 mb0">♥ {product.likes}</p>
        </div>
      </Link>
    </article>
  );
}
