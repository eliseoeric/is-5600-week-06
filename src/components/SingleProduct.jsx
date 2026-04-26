import { Link, useParams } from 'react-router-dom';

export default function SingleProduct({ data }) {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="pa4 mv4 bg-white br3 ba b--black-10">
        <h2 className="f3 mv0">Product not found</h2>
        <p className="gray mv3">Please return to the gallery to select another product.</p>
        <Link to="/" className="link dim blue">
          Back to gallery
        </Link>
      </div>
    );
  }

  const { user } = product;
  const title = product.description || product.alt_description || 'Untitled print';
  const style = {
    backgroundImage: `url(${product.urls.regular})`,
  };

  const tagSource = [product.description, product.alt_description].filter(Boolean).join(' ');
  const tags = Array.from(
    new Set(
      tagSource
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 3)
    )
  ).slice(0, 6);

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv3 ph4 bb b--black-10">
        <Link to="/" className="link dim blue f6">
          ← Back to gallery
        </Link>
      </div>
      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover" style={style}></div>
      </div>
      <div className="pa4">
        <h1 className="f2 mb3">{title}</h1>
        <p className="gray lh-copy mb4">{product.alt_description || 'Explore more details about this print and the artist.'}</p>
        <div className="mb4">
          {tags.map((tag) => (
            <span key={tag} className="dib mr2 mb2 pv1 ph2 ba b--black-10 br2 gray">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex flex-column flex-row-ns justify-between items-start items-center-ns">
          <div className="flex items-center mb3 mb0-ns">
            <img
              src={user.profile_image.medium}
              className="br-100 h3 w3 dib"
              alt={user.username}
            />
            <div className="ml3">
              <p className="mv0 fw6">{user.first_name} {user.last_name}</p>
              <p className="mv0 gray">@{user.username}</p>
            </div>
          </div>
          <div className="gray">
            <span className="mr2">❤️</span>
            {product.likes} likes
          </div>
        </div>
      </div>
    </article>
  );
}
