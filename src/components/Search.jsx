const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by tag..."
      className="pa2 ba mt3 mb3 w-100"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
