import { useParams } from "react-router-dom";

export default function SingleView({ data }) {
  const { id } = useParams();
  const product = data.find((p) => p.id === id);

  if (!product) return <h2 className="tc pa4">Product Not Found</h2>;

  const { user } = product;
  const title = product.description ?? product.alt_description;

  const style = {
    backgroundImage: `url(${product.urls.regular})`
  };

  return (
    <article className="bg-white center mw7 ba b--black-10 mv4">
      <div className="pv2 ph3">
        <div className="flex items-center">
          <img
            src={user.profile_image.medium}
            className="br-100 h3 w3 dib"
            alt={user.instagram_username}
          />
          <h1 className="ml3 f4">
            {user.first_name} {user.last_name}
          </h1>
        </div>
      </div>

      <div className="aspect-ratio aspect-ratio--4x3">
        <div className="aspect-ratio--object cover" style={style}></div>
      </div>

      <div className="pa3 flex justify-between">
        <div className="mw6">
          <h1 className="f6 ttu tracked">Product ID: {id}</h1>
          <p className="lh-title">{title}</p>
        </div>

        <div className="gray db pv2">
          ❤️ <span>{product.likes}</span>
        </div>
      </div>
    </article>
  );
}
