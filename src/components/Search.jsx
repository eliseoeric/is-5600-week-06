import React from 'react';

const Search = ({ handleSearch }) => (
  <div className="pa3">
    <input
      type="text"
      placeholder="Search by tag..."
      className="pa2 input-reset ba b--black-20 br2 w-100"
      onChange={(e) => handleSearch(e.target.value)}
    />
  </div>
);

export default Search;
