import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <input
        className="search-box"
        type="text"
        placeholder="Enter a keyword to filter by tags"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;