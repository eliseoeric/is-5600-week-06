const Search = ({ handleSearch }) => {
  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search by tag"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
