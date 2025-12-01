import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  };

  return (
    <form className="pa3" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search by tag..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="pa2 ba br2 mr2"
      />
      <button type="submit" className="pa2 ba br2">
        Search
      </button>
    </form>
  );
};

export default Search;
