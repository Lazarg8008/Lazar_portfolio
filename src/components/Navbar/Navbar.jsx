import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo"><a href="#home">Gandi Lazar</a></div>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-icons">
          <a href="https://github.com/Lazarg8008" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lazar-gandi-241838312/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <FaLinkedin />
          </a>
        </div>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;