const Search = ({ handleSearch }) => {
  return (
    <div className="pa2 flex justify-center">
      <input
        className="pa2 ba b--black-20 w-50"
        type="text"
        placeholder="Search by tag..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;