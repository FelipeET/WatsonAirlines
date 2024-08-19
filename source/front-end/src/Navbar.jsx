import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Watson Airlines
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="flights" className="navbar-link">
              Flights
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
