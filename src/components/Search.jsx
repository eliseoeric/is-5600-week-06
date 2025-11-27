// Search.jsx

const Search = ({ handleSearch }) => {
  return (
    <div className="tc pa3">
      <input
        type="text"
        placeholder="Search by tag..."
        className="pa2 ba br2 w-40"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
