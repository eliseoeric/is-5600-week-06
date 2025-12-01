function Search({ value, onChange }) {
  return (
    <input
      placeholder="Search by tag"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "10px", marginBottom: "20px" }}
    />
  );
}

export default Search;
