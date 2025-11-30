import React, { useState } from "react";
import Card from "./Card";
import Search from "./Search";

const CardList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.tags.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pa3">
      <Search handleSearch={handleSearch} />

      <div className="grid">
        {filteredData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
