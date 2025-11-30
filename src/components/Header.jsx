import React from 'react';
// src/components/Header.jsx
import React from 'react'
import logo from '../logo.svg'   // ⬅️ this file is already in src/

const Header = () => {
function Header() {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns">
      <a className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
        <img src="https://img.logoipsum.com/280.svg" className="dib w2 h2 br-100" alt="Site Name" />
      </a>
      <div className="dtc v-mid w-75 tr">
        <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/" title="Products">Products</a>
        <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/cart" title="Cart">Cart</a>
        <a className="link dim dark-gray f6 f5-ns dib" href="/contact" title="/contact">Contact</a>
    <header className="w-100 ph3 pv3 pv4-ns ph4-m ph5-l flex items-center justify-between">
      {/* Left side: logo + title */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Site logo"
          className="w3 h3 mr2"
        />
        <span className="f4 b">Site</span>
      </div>
    </nav>
      {/* Right side: nav links */}
      <nav className="flex items-center">
        <a className="link dim dark-gray f6 f5-ns dib mr3" href="/">
          Products
        </a>
        <a className="link dim dark-gray f6 f5-ns dib mr3" href="#cart">
          Cart
        </a>
        <a className="link dim dark-gray f6 f5-ns dib" href="#contact">
          Contact
        </a>
      </nav>
    </header>
export default Header;
