import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns">

      <Link className="dtc v-mid mid-gray link dim w-25" to="/" title="Home">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          className="dib w2 h2 br-100"   // 🔥 size reverted to original
          alt="Site Logo"
        />
      </Link>

      <div className="dtc v-mid w-75 tr">
        <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/">Products</Link>
        <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/cart">Cart</Link>
        <Link className="link dim dark-gray f6 f5-ns dib" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
