const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by tag..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
