const Search = ({ handleSearch }) => (
    <input
      type="text"
      placeholder="Search by tags..."
      onChange={(e) => handleSearch(e.target.value)}
      className="pa2 ba b--black mb3"
    />
  );
  
  export default Search;
  