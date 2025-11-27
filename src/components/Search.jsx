import React from 'react'

export default function Search({ handleSearch }) {

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    handleSearch(value); 
  };

  return (
    <form className="pt4 pb4 pl2 black-80">
      <fieldset className="cf bn ma0 pa0">
        <div className="cf measure mb2">
          <input 
            className="f6 f5-l input-reset fl black-80 ba b--black-20 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
            placeholder="Tag Search"
            type="text"
            onChange={handleChange}
          />
        </div>
        <small id="name-desc" className="f6 black-60 db mb2">
          Enter a keyword to filter by tags
        </small>
      </fieldset>
    </form>
  );
}
