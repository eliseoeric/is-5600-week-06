import { useParams, Link } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pa4 tc">
        <p>Product not found.</p>
        <Link to="/" className="link black underline">Back to products</Link>
      </div>
    );
  }

  const { alt_description, description, urls, tags } = product;

  return (
    <div className="pa4 flex flex-column flex-row-ns">
      <div className="w-100 w-40-ns mr4-ns">
        <img
          src={urls.regular}
          alt={alt_description}
          className="w-100 db"
        />
      </div>
      <div className="w-100 w-60-ns">
        <h1 className="f2 lh-title mt0">{alt_description}</h1>
        <p className="f4 black-70">{description}</p>
        {tags && (
          <div className="mt3">
            <p className="b mb1">Tags:</p>
            {tags.map((tag, i) => (
              <span key={i} className="f6 br-pill ba ph3 pv1 mb2 dib black-50 mr1">
                {tag.title || tag}
              </span>
            ))}
          </div>
        )}
        <Link to="/" className="f5 link dim br1 ba ph3 pv2 mt3 dib black">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default SingleView;