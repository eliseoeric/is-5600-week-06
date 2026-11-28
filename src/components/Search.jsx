export default function Search({ handleSearch }) {
  return (
    <div className="mv3">
      <label htmlFor="tag-search" className="db mb2 b">
        Search by tag
      </label>
      <input
        id="tag-search"
        type="search"
        placeholder="Try nature, city, or person"
        className="input-reset ba b--gray pa3 w-100"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
