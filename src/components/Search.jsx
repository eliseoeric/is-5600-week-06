import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    handleSearch(input);
  };

  return (
    <div className="pa4">
      <div className="flex">
        <input
          className="pa2 input-reset ba bg-transparent w-100"
          type="text"
          placeholder="Tag Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleSearch(e.target.value); // ✅ live search
          }}
        />

        <button
          className="pa2 bg-dark-gray white bn"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      <p>Enter a keyword to filter by tags</p>
    </div>
  );
};

export default Search;