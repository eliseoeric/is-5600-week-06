const CardList = () => {
  return ();
}

export default CardList;
// CardsList.jsx

const CardList = () => {
  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        <p>Cards go here</p>
      </div>
    </div>
  )
}

export default CardList;
const CardList = ({data}) => {
  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
      // Using the data prop, we map over the list of products and render a Card component for each product
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>
    </div>
  )
}
// ....

  return (
    <div className="cf pa2">

      <div className="mt2 mb2">
        // Using the data prop, we map over the list of products and render a Card component for each product
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      
      //  Pagination Buttons
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  )
  // CardList.jsx
// Import the useState and useEffect hook
import React, { useState, useEffect } from "react";
// CardList.jsx
// define the limit state variable and set it to 10
const limit = 10;
// Define the default dataset, using slice to get the first 10 products
const defaultDataset = data.slice(0, limit);

// Define the offset state variable and set it to 0
const [offset, setOffset] = useState(0);
// Define the products state variable and set it to the default dataset
const [products, setProducts] = useState(defaultDataset);

// Define the handlePrevious function
const handlePrevious = () => {
  // set the offset to the previous 10 products
  setOffset(offset - 10);
}

// Define the handleNext function
const handleNext = () => {
  // set the offset to the next 10 products
  setOffset(offset + 10);
}

// Define the useEffect hook
// This hook will run every time the offset or limit state variables change
// It will update the products state variable to the next 10 products
useEffect(() => {
  // set the products state variable to the next 10 products
  setProducts(data.slice(offset, offset + limit));
}, [offset, limit, data]);
// CardList.jsx

// ...
      //  Pagination Buttons
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>

import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import Button from "./Button";

const CardList = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [itemsPerPage] = useState(6); // number of products per page
  const [filteredData, setFilteredData] = useState(data);

  // Effect: slice data whenever offset or filteredData changes
  useEffect(() => {
    const slice = filteredData.slice(offset, offset + itemsPerPage);
    setProducts(slice);
  }, [offset, filteredData, itemsPerPage]);

  // 🔎 Filter by tags
  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data); // reset to full list if search is empty
    } else {
      const lower = searchTerm.toLowerCase();
      const filtered = data.filter((product) =>
        product.tags.some((tag) => tag.toLowerCase().includes(lower))
      );
      setFilteredData(filtered);
    }
    setOffset(0); // reset pagination when new filter applied
  };

  // ⏮️⏭️ Single navigation handler
  const handlePageChange = (direction) => {
    if (direction === "prev" && offset > 0) {
      setOffset(offset - itemsPerPage);
    } else if (
      direction === "next" &&
      offset + itemsPerPage < filteredData.length
    ) {
      setOffset(offset + itemsPerPage);
    }
  };

  return (
    <div className="pa4">
      {/* Search bar */}
      <Search handleSearch={filterTags} />

      {/* Products grid */}
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt3">
        <Button onClick={() => handlePageChange("prev")}>Previous</Button>
        <Button
          onClick={() => handlePageChange("next")}
          disabled={offset + itemsPerPage >= filteredData.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardList;

