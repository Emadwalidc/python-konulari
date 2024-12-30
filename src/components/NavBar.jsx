import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Python
        </Link>

        {/* Menu Items */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
            <Link to="/" className="navbar-item">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/login" className="navbar-item">Giriş</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`navbar-icon ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
