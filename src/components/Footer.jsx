import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:akashchouhan1209@gmail.com">akashchouhan1209@gmail.com</a></p>
          <p>Phone: +91 62660 68835</p>
          <p>Alternate Phone: +91 74770 68835</p>
        </div>
        <div className="footer-section">
          
          <div className="social-links">
            <a href="https://linkedin.com/in/akash-chouhan-a06320202" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/ChouhanAkash" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.facebook.com/akash.chouhan.58958343" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Akash Chouhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


