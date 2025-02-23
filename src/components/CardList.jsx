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
import Button from "./Button";
import Search from "./Search";

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filterTags = (term) => {
    setSearchTerm(term.toLowerCase());
    setOffset(0); // Reset pagination when filtering
  };

  useEffect(() => {
    let filteredData = data;
    if (searchTerm) {
      filteredData = data.filter((product) =>
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, searchTerm, data]);

  // Handle pagination
  const handlePagination = (step) => {
    setOffset((prevOffset) => prevOffset + step);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePagination(-limit)} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePagination(limit)} disabled={offset + limit >= data.length} />
      </div>
    </div>
  );
};

export default CardList;
