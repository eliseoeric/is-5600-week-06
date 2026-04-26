import React from 'react';

export default function Search({ handleSearch }) {
  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search.toLowerCase());
  };

  return (
    <form className="pt4 pb4 pl2 black-80" onSubmit={handleSubmit}>
      <fieldset className="cf bn ma0 pa0">
        <div className="cf measure mb2 flex flex-column flex-row-ns items-center gap3">
          <input
            className="f6 f5-l input-reset black-80 ba b--black-20 bg-white pa3 lh-solid w-100 w-70-ns br2"
            placeholder="Tag Search"
            value={search}
            onChange={handleChange}
            type="text"
          />
          <button
            type="submit"
            className="f6 f5-l bn pv3 ph4 tc bg-black-70 hover-bg-black white pointer w-100 w-30-ns br2"
          >
            Search
          </button>
        </div>
        <small id="name-desc" className="f6 black-60 db mt2">
          Enter a keyword to filter by tags.
        </small>
      </fieldset>
    </form>
  );
}
