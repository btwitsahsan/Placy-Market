import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import footerBg from '../../assets/footerBg.png'
const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage: `url(${footerBg})`}}>
            <div className="footer-container">
                <div className="footer-section about">
                <div className="logo" style={{fontSize: 'unset'}}><h3>Placy <span>Market</span></h3></div>
                    <p>
                        This Platform Makes It Easy For Marketplace Owners To Rent Out<br/>Their Commercial Spaces, 
                        Vendors To Find The Perfect Selling Location,<br/>And Investors To Discover Franchise Opportunities.
                    </p>
                    <div className="social-icons">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                
                </div>

                <div className="footer-section links">
                    <h3>Our Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Listings</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <div>
                        <FaMapMarkerAlt /> Maple Street Shopping Square, Houston
                    </div>
                    <div>
                        <FaPhoneAlt /> +12 345 6789
                    </div>
                    <div>
                        <FaEnvelope /> support@marketplaceplatform.com
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright ©2025. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
