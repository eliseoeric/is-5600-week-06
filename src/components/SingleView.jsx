import { useParams, Link } from 'react-router-dom';

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((productItem) => productItem.id === id);

  if (!product) {
    return (
      <div className="mw7 center pa4 bg-white ba b--black-10 br2 shadow-1 tc">
        <h2 className="f3">Product not found</h2>
        <Link to="/" className="link dim black underline">Return to products</Link>
      </div>
    );
  }

  const { user, urls, likes, tags } = product;
  const title = product.description ?? product.alt_description ?? 'Untitled product';
  const style = {
    backgroundImage: `url(${urls.regular})`,
  };

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv2 ph3 flex items-center">
        <img src={user.profile_image.medium} className="br-100 h3 w3 dib" alt={user.instagram_username} />
        <div className="ml3">
          <h1 className="f4 mb1">{user.first_name} {user.last_name}</h1>
          <p className="gray mb0">Product ID: {id}</p>
        </div>
      </div>
      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover" style={style}></div>
      </div>
      <div className="pa3">
        <h2 className="f5 ttu tracked mb2">{title}</h2>
        <p className="gray mb3">{product.alt_description || product.description || 'No description available.'}</p>
        <div className="flex items-center justify-between mb3">
          <span className="gray">{likes.toLocaleString()} likes</span>
          <Link to="/" className="link dim blue">Back to products</Link>
        </div>
        <div>
          <h3 className="f6 ttu tracked mb2">Tags</h3>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <span key={tag.title} className="dib mr2 mb2 pa2 br2 ba b--black-10 gray">
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
