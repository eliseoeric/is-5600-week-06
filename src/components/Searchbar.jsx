@@ -0,0 +1,20 @@
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by name or tag..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        marginBottom: "20px",
        width: "250px",
        display: "block",
      }}
    />
  );
}

export default SearchBar;