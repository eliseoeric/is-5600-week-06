// src/components/Header.jsx
import React from 'react'
import logo from '../logo.svg'   // ⬅️ this file is already in src/

function Header() {
  return (
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
  )
}

export default Header
