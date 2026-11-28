import { Link, useParams } from 'react-router-dom';

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);

  if (!product) {
    return (
      <main className="pa3">
        <h1>Product not found</h1>
        <Link to="/">Back to Prints</Link>
      </main>
    );
  }

  const { user } = product;
  const title =
    product.description ?? product.alt_description ?? 'Untitled print';

  const style = {
    backgroundImage: `url(${product.urls.regular})`
  };

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv2 ph3">
        <Link to="/" className="link dim">
          ← Back to Prints
        </Link>

        <div className="flex items-center mt3">
          <img
            src={user.profile_image.medium}
            className="br-100 h3 w3 dib"
            alt={user.name ?? 'Artist'}
          />
          <h1 className="ml3 f4">
            {user.first_name} {user.last_name}
          </h1>
        </div>
      </div>

      <div className="aspect-ratio aspect-ratio--4x3">
        <div
          className="aspect-ratio--object cover"
          style={style}
          role="img"
          aria-label={title}
        />
      </div>

      <div className="pa3 flex justify-between">
        <div className="mw6">
          <h2 className="f6 ttu tracked">Product ID: {id}</h2>
          <p>{title}</p>
        </div>

        <div className="gray pv2">
          &hearts; {product.likes}
        </div>
      </div>
    </article>
  );
}