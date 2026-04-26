import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ description, alt_description, id, user, urls, likes, price, tags }) => {
  const title = description || alt_description || 'Untitled print';
  const style = {
    backgroundImage: `url(${urls.small})`,
  };

  return (
    <div className="w-50 w-50-m w-33-l pa2">
      <Link to={`/product/${id}`} className="db link dim bg-white ba b--black-10 br3 overflow-hidden h-100">
        <div style={style} className="w-100 h5 cover"></div>
        <div className="pa3">
          <h3 className="f6 f5-ns mb2 black truncate">{title}</h3>
          <p className="gray mv1 f7">{user.first_name} {user.last_name}</p>
          <p className="b mv2">{price}</p>
          <div className="flex flex-wrap">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="mr2 mb2 pv1 ph2 ba b--black-10 br2 gray f7">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
