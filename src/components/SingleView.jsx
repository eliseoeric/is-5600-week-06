import { Link, useParams } from 'react-router-dom';

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((productItem) => productItem.id === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <p className="f5">Product not found.</p>
        <Link to="/" className="link dim black">Back to products</Link>
      </div>
    );
  }

  const { user, tags = [] } = product;
  const title = product.description ?? product.alt_description;
  const style = {
    backgroundImage: `url(${product.urls.regular})`
  };

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv2 ph3">
        <div className="flex items-center">
          <img src={user.profile_image.medium} className="br-100 h3 w3 dib" alt={user.instagram_username || `${user.first_name} ${user.last_name}`} />
          <h1 className="ml3 f4">{user.first_name} {user.last_name}</h1>
        </div>
      </div>
      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover" style={style}></div>
      </div>
      <div className="pa3 flex justify-between items-start">
        <div className="mw6">
          <h1 className="f6 ttu tracked">Product ID: {id}</h1>
          <p className="link dim lh-title">{title}</p>
        </div>
        <div className="gray db pv2">&hearts;<span>{product.likes}</span></div>
      </div>
      <div className="pa3">
        <h2 className="f6 ttu tracked">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.title} className="f7 dib pa2 mr2 mb2 ba b--black-10 br2">
              {tag.title}
            </span>
          ))}
        </div>
      </div>
      <div className="pa3">
        <Link to="/" className="link dim black">Back to products</Link>
      </div>
    </article>
  );
}
