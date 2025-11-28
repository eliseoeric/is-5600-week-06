import React from 'react';
import Search from './Search';

const Header = ({ handleSearch }) => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns items-center">
      {/* Home Button */}
      <a
        className="dtc v-mid mid-gray link w-25"
        href="/"
        title="Home"
        style={{ outline: 'none' }}
      >
        <img
          src="/home.png"
          className="dib w3 h3 br-100 grow transition-all"
          alt="Home"
        />
      </a>

      {/* Search Bar - Center */}
      <div className="dtc v-mid w-50 tc">
        <Search handleSearch={handleSearch} placeholder="Search by tag or author" />
      </div>

      {/* Navigation Links - Right */}
      <div className="dtc v-mid w-25 tr">
        <a
          href="/"
          title="Products"
          className="dib mr3 mr4-ns f6 f5-ns fw6 pv2 ph3 br3 bg-blue white dim pointer"
        >
          Products
        </a>
        <a
          href="/cart"
          title="Cart"
          className="dib mr3 mr4-ns f6 f5-ns fw6 pv2 ph3 br3 bg-green white dim pointer"
        >
          Cart
        </a>
        <a
          href="/contact"
          title="Contact"
          className="dib f6 f5-ns fw6 pv2 ph3 br3 bg-orange white dim pointer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
