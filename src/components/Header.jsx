import React from 'react';

const Header = () => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns">
      <a className="dtc v-mid mid-gray link dim w-25" href="/">
        <h2 className="ma0 dark-gray">🔷 Site</h2>
      </a>

      <div className="dtc v-mid w-75 tr">
        <a className="link dim dark-gray f6 f5-ns dib mr3" href="/">
          Products
        </a>
        <a className="link dim dark-gray f6 f5-ns dib mr3" href="/cart">
          Cart
        </a>
        <a className="link dim dark-gray f6 f5-ns dib" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;