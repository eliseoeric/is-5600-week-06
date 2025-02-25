import React from "react";
import { useParams } from "react-router-dom"; // To access the URL parameters

const SingleView = () => {
  const { id } = useParams(); // Get product ID from URL

  return (
    <div>
      <h2>Product Details for {id}</h2>
      {/* Render more details about the product here */}
    </div>
  );
};

export default SingleView;
