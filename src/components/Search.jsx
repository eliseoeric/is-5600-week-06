// Search.jsx
const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      className="pa2 ba br2 w-50"
      placeholder="Search by tag..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
