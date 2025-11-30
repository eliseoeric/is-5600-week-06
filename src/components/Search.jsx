// Search.jsx
const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      className="pa2 ba br2 mb3"
      placeholder="Search by tags"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
