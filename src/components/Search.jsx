const Search = ({ handleSearch }) => {
  return (
    <div className="pa3">
      <input
        type="text"
        placeholder="Search by tag..."
        className="pa2 ba br2 w-100"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
