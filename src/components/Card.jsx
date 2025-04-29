import React from 'react';

const Card = ({ product }) => {
  const { title, description, tags, urls } = product;

  return (
    <div className="card">
      <img className="card-image" src={urls?.regular} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          <strong>Tags: </strong>
          {(tags || []).map((tag, index) => (
            <span key={index} className="card-tag">
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
