import Card from './Card';
import Button from './Button';
import Search from './Search';
import React, { useState, useEffect } from "react";

const CardList = ({ data }) => {
  const limit = 10;

  // Ensure data exists and limit the dataset for initial render
  const defaultDataset = data ? data.slice(0, limit) : [];
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  // Function to filter products based on tags
  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) => {
      if (!tagQuery) {
        return true; // If no tagQuery, return all products
      }
      return product.tags.find(({ title }) => title === tagQuery); // Filter based on tag
    });

    setOffset(0); // Reset pagination on filter
    setProducts(filtered); // Update the products list after filtering
  };

  useEffect(() => {
    // Update products based on offset and the filtered data
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} /> {/* Search input for filtering products */}

      {/* Conditional rendering for products list */}
      <div className="mt2 mb2">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} /> // Render each product as a Card
          ))
        ) : (
          <p>No products available</p> // Display message if no products are available
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        {/* Disable Previous button if offset is 0 */}
        <Button
          text="Previous"
          handleClick={() => setOffset(Math.max(0, offset - limit))}
          disabled={offset === 0} // Disable if we're at the beginning
        />

        <Button
          text="Next"
          handleClick={() => setOffset(offset + limit)}
          disabled={products.length < limit} // Disable if there are fewer products than the limit
        />
      </div>
    </div>
  );
};