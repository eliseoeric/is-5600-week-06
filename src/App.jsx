import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
  );
}className="App">
<h1>Hello There.</h1>
<Header />
<Routes>
    <Route path="/" element={<CardList data={productData} />} />
    <Route path="/product/:id" element={<SingleView data={productData} />} />
  </Routes>
</div>
);
}
65 changes: 61 additions & 4 deletions65  
src/components/CardList.jsx
Original file line number	Diff line number	Diff line change
@@ -1,5 +1,62 @@
const CardList = () => {
return ();
}
import Search from "./Search";
import Card from "./Card";
import Button from "./Button";
import React, { useState, useEffect } from "react";

export default CardList;
const CardList = ({ data }) => {
const limit = 10;
const defaultDataset = data.slice(0, limit);
const [offset, setOffset] = useState(0);
const [products, setProducts] = useState(defaultDataset);

const handlePrevious = () => {
// Prevent going out of bounds
if (offset > 0) {
setOffset(offset - limit);
}
};

const handleNext = () => {
// Prevent going out of bounds
if (offset + limit < data.length) {
setOffset(offset + limit);
}
Commenting on lines +1 to +23
Comment

Leave a comment

};

useEffect(() => {
// Update the products state based on the offset
setProducts(data.slice(offset, offset + limit));
}, [offset, data]);

const filterTags = (tagQuery) => {
const filtered = data.filter((product) =>
tagQuery
  ? product.tags.some(({ title }) => title.toLowerCase() === tagQuery.toLowerCase())
  : true
);

// Reset pagination and update the filtered products
setOffset(0);
setProducts(filtered.slice(0, limit));
};

return (
<div className="cf pa2">
<Search handleSearch={filterTags} />
<div className="mt2 mb2">
  {/* Render cards based on the products state */}
  {products.map((product) => (
    <Card key={product.id} {...product} />
  ))}
</div>

{/* Pagination Buttons */}
<div className="flex items-center justify-center pa4">
  <Button text="Previous" handleClick={handlePrevious} />
  <Button text="Next" handleClick={handleNext} />
</div>
</div>
);
};

export default CardList;

export default App;
