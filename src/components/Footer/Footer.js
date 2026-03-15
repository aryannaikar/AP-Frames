import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-grid">
        <div>
          <h3 className="gradient-text">AP Frames</h3>
          <p>Cinematic social media content that captures attention and tells powerful stories.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>your@email.com</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://instagram.com/socialmediawale" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/company/socialmediawale" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:hello@socialmediawale.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <div className="copyright">
        © 2026 AP Frames. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
