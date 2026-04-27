import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [text, setText] = useState('');

  const submitSearch = () => {
    handleSearch(text);
  };

  return (
    <div className="pa3">
      <input
        type="text"
        placeholder="Search by tags"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="pa2 w-70"
      />

      <button onClick={submitSearch} className="pa2 ml2">
        Search
      </button>

      <p>Filter products using tags</p>
    </div>
  );
};

export default Search;