import React from "react";

export default function Search({ handleSearch }) {
  const [search, setSearch] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    // live filtering while typing
    handleSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <form className="pt4 pb4 pl2 black-80" onSubmit={handleSubmit}>
      <fieldset className="cf bn ma0 pa0">
        <div className="cf measure mb2">
          <input
            className="f6 f5-l input-reset fl black-80 ba b--black-20 pv3 ph4 br2-ns br--left-ns w-70"
            type="text"
            placeholder="Search by tag"
            value={search}
            onChange={handleChange}
          />
          <input
            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-30 br2-ns br--right-ns"
            type="submit"
            value="Search"
          />
        </div>
        <small className="f6 black-60 db mb2">
          Enter a keyword to filter by tags
        </small>
      </fieldset>
    </form>
  );
}