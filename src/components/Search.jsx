import React from "react";

export default function Search({ handleSearch }) {
  // Controlled input state
  const [search, setSearch] = React.useState("");

  // Update input value while typing
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Submit search form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="tc pa3">
      <input
        type="text"
        placeholder="Search by tags..."
        value={search}
        onChange={handleChange}
        className="pa2 ba br2 w-50"
      />

      <button
        type="submit"
        className="pa2 ml2 ba br2 pointer"
      >
        Search
      </button>
    </form>
  );
}