import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-logo">
        <img src="https://www.appcent.mobi/logo.svg" alt="appcent logo" />
      </div>
      <div className="header-wrapper-menu">      
        <nav className="header-wrapper-menu__nav">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
