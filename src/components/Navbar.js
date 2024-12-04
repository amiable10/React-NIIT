import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo or business name here */}
        <a href="/">Amy<span>Tech</span></a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/web-design" className="nav-link">Web Design</a>
        </li>
        <li className="nav-item">
          <a href="/web-development" className="nav-ink">Web Development</a>
        </li>
        <li className="nav-item">
          <a href="/mobile-development" className="nav-link">Mobile Development</a>
        </li>
        <li className="nav-item">
          <a href="/digital-marketing" className="nav-ink">Digital Marketing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;