import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by tags..."
        onChange={(e) => handleSearch(e.target.value)} // Trigger the search filter
      />
    </div>
  );
};

export default Search;
