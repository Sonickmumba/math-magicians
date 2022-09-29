import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <nav id="navbar-container">
    <ul className="navbar-items">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <span className="vertical-line" />
      <li className="nav-link">
        <Link to="/calculator">Calculator</Link>
      </li>
      <span className="vertical-line" />
      <li className="nav-link">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
