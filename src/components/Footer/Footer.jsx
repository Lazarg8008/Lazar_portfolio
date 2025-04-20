import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Lazar. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/lazar-gandi-241838312/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Lazarg8008" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
