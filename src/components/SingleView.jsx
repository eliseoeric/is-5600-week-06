import { useParams } from "react-router-dom";

export default function SingleView({ data }) {
  const { id } = useParams();

  const product = data.find(
    (p) => p.id.toString() === id
  );

  if (!product) {
    return <h1 className="tc">Product Not Found</h1>;
  }

  const { user } = product;

  const title =
    product.description ?? product.alt_description;

  const style = {
    backgroundImage: `url(${product.urls["regular"]})`,
  };

  return (
    <article className="center mw7 ba mv4">
      <div className="pa3 flex items-center">
        <img
          src={user.profile_image.medium}
          className="br-100 h3 w3"
          alt="user"
        />

        <h2 className="ml3">
          {user.first_name} {user.last_name}
        </h2>
      </div>

      <div
        className="aspect-ratio aspect-ratio--4x3"
        style={style}
      ></div>

      <div className="pa3 flex justify-between">
        <div>
          <h3>Product ID: {id}</h3>
          <p>{title}</p>
        </div>

        <div>&hearts; {product.likes}</div>
      </div>
    </article>
  );
}