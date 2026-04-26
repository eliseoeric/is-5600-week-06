import React from "react";

export default function Search({ handleSearch }) {

  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <form className="pt4 pb4 pl2 black-80">
      <fieldset className="cf bn ma0 pa0">
        <div className="cf measure mb2">

          <input
            className="f6 input-reset fl black-80 ba b--black-20 bg-white pa3 w-70 br2-ns br--left-ns"
            placeholder="Tag Search"
            onChange={handleChange}
            type="text"
          />

          <input
            className="f6 button-reset fl pv3 tc bn bg-black-70 white w-30 br2-ns br--right-ns"
            type="button"
            value="Search"
            readOnly
          />

        </div>

        <small className="f6 black-60 db mb2">
          Enter a keyword to filter by tags
        </small>
      </fieldset>
    </form>
  );
}