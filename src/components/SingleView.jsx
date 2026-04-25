import { useParams, Link } from 'react-router-dom';

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((productItem) => productItem.id === id);

  if (!product) {
    return (
      <div className="pa4">
        <p className="f4 tc">Product not found</p>
        <div className="tc">
          <Link to="/" className="link dim black">
            Return to products
          </Link>
        </div>
      </div>
    );
  }

  const { user } = product;
  const title = product.description ?? product.alt_description;
  const altText = product.description ? product.alt_description : null;
  const tags = product.tags ?? [];
  const style = {
    backgroundImage: `url(${product.urls.regular})`,
  };

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv2 ph3">
        <div className="flex items-center">
          <img
            src={user.profile_image.medium}
            className="br-100 h3 w3 dib"
            alt={user.instagram_username || user.username || user.name}
          />
          <div className="ml3">
            <h1 className="f4 mb1">
              {user.first_name} {user.last_name}
            </h1>
            <p className="gray f6">Photographer</p>
          </div>
        </div>
      </div>
      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover" style={style}></div>
      </div>
      <div className="pa3">
        <h1 className="f5 ttu tracked">Product ID: {id}</h1>
        <p className="f4 fw6 mt2 mb3">{title}</p>
        {altText && <p className="lh-copy mb3 black-70">{altText}</p>}
        <div className="flex flex-wrap mb3">
          {tags.slice(0, 8).map((tag) => (
            <span key={tag.title} className="f7 black-50 bg-washed-blue pa2 mr2 mb2 br2">
              {tag.title}
            </span>
          ))}
        </div>
        <div className="gray db pv2 mb3">
          &hearts; <span>{product.likes}</span>
        </div>
        <div>
          <Link to="/" className="link dim black b">
            Back to products
          </Link>
        </div>
      </div>
    </article>
  );
}
