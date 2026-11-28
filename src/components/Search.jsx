import { useState } from 'react';

export default function Search({ handleSearch }) {
  const [search, setSearch] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(search.trim().toLowerCase());
  }

  return (
    <form className="pv3" onSubmit={handleSubmit}>
      <label htmlFor="tag-search" className="db mb2">
        Search by tag
      </label>

      <div className="flex">
        <input
          id="tag-search"
          type="text"
          className="pa3 ba b--black-20"
          placeholder="Try marble or red"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit" className="pa3 bg-black white ba">
          Search
        </button>
      </div>

      <small className="db mt2">
        To show all products, empty the box and click Search.
      </small>
    </form>
  );
}