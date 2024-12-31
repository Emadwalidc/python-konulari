import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2024 Emad.</p>
        <ul className="footer-links">
          <li><Link to="/about">Hakkımda</Link></li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
