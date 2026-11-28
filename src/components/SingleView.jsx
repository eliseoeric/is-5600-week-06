import { Link, useParams } from 'react-router-dom';

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <main className="pa4 tc">
        <h1>Product not found</h1>
        <Link to="/" className="link blue">
          Back to products
        </Link>
      </main>
    );
  }

  const { user } = product;
  const title =
    product.description ?? product.alt_description ?? 'Untitled print';

  return (
    <main className="pa3">
      <Link to="/" className="link blue">
        ← Back to products
      </Link>

      <article className="bg-white center mw7 ba b--black-10 mv4">
        <div className="pv2 ph3 flex items-center">
          <img
            src={user.profile_image.medium}
            className="br-100 h3 w3 dib"
            alt={user.name || user.first_name || 'Photographer'}
          />
          <h1 className="ml3 f4">
            {user.first_name} {user.last_name}
          </h1>
        </div>

        <img
          src={product.urls.regular}
          alt={title}
          className="db w-100"
        />

        <div className="pa3">
          <p className="f6 ttu tracked">Product ID: {id}</p>
          <h2 className="f4">{title}</h2>
          <p className="gray">♥ {product.likes}</p>

          <div className="flex flex-wrap">
            {(product.tags ?? []).map((tag, index) => (
              <span
                key={`${tag.title ?? tag}-${index}`}
                className="f6 bg-light-gray br2 ph2 pv1 mr2 mb2"
              >
                {tag.title ?? tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}