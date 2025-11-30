import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <input
      className="pa2 ba b--light-silver"
      type="text"
      placeholder="Search by tag..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
