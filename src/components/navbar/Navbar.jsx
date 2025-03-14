import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="container navbar">
        <div className="logo">Placy <span style={{ color: "var(--primary-color)" }}>Market</span></div>

        <nav>
          <ul>
            <li>Find a Space</li>
            <li>List Your Space</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <div className="authButtons">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="crossIcon">
          <span onClick={toggleMobileMenu}>&times;</span>
        </div>
        <div className="logo mobile-logo">Placy <span>Market</span></div>
        <ul>
          <li>Find a Space</li>
          <li>List Your Space</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="mobile-authButtons">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
