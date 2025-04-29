// src/components/SingleView.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = data.find(item => item.id === id); // Find the product by its ID

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, description, tags, urls } = product;

  return (
    <div className="single-view">
      <img className="single-view-image" src={urls?.regular} alt={title} />
      <div className="single-view-content">
        <h1 className="single-view-title">{title}</h1>
        <p className="single-view-description">{description}</p>
        <div className="single-view-tags">
          <strong>Tags: </strong>
          {(tags || []).map((tag, index) => (
            <span key={index} className="single-view-tag">
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleView;
