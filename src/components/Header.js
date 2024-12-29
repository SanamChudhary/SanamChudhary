import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/sanam-logo.png';
import { ThemeContext } from '../components/ThemeContainer';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={Image} alt="Logo" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
        <button
          className={`theme-toggle-btn ${theme === 'theme-dark' ? 'dark' : 'light'}`}
          onClick={toggleTheme}
        >
          {theme === 'theme-dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
