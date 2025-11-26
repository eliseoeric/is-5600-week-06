import React, { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";
const LIMIT = 10;
const CardList = ({ data = [] }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setFilteredData(data);
    setOffset(0);
  }, [data]);
  const products = useMemo(
    () => filteredData.slice(offset, offset + LIMIT),
    [filteredData, offset]
  );
  const paginate = (dir) => {
    const newOffset = offset + dir * LIMIT;
    if (newOffset < 0) return;
    if (newOffset >= filteredData.length) return;
    setOffset(newOffset);
  };
  const filterTags = (term) => {
  if (!term || term.trim() === "") {
    setFilteredData(data);
    setOffset(0);
    return;
  }

  const q = term.toLowerCase();

  const next = data.filter(product => {
    const tags = product.tags || [];                                
    const desc = (product.description || product.alt_description || "").toLowerCase();
    
    return (
      tags.some(t => String(t).toLowerCase().includes(q)) ||        
      desc.includes(q)                                              
    );
  });

  setFilteredData(next);
  setOffset(0);
};

  const disablePrev = offset === 0;
  const disableNext = offset + LIMIT >= filteredData.length
  return (
    <div className="cf pa2">
      {/* Search box */}
      <div className="mb3">
        <Search handleSearch={filterTags} />
      </div>
      {/* Cards */}
      <div className="mt2 mb2 flex flex-wrap">
        {products.length === 0 ? (
          <div className="w-100 tc pa4">No products found.</div>
        ) : (
          products.map((product) => <Card key={product.id} {...product} />)
        )}
      </div>
      {/* Pagination controls */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => paginate(-1)}
          disabled={disablePrev}
        />
        <div className="mh3">
          Showing {filteredData.length === 0 ? 0 : offset + 1} -{" "}
          {Math.min(offset + LIMIT, filteredData.length)} of{" "}
          {filteredData.length}
        </div>
        <Button
          text="Next"
          handleClick={() => paginate(+1)}
          disabled={disableNext}
        />
      </div>
    </div>
  );
};
export default CardList;
