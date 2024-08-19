// src/components/Footer.js
import React from 'react';
import './Footer.css'; 
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 MySite. All rights reserved.</p>
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li className="footer-item">
            <a href="#terms" className="footer-link">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
