
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-grid">
        <div>
          <h3 className="gradient-text">AP Studios</h3>
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
          <p>apstudio.reachout@gmail.com</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://instagram.com/apstudio._" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/9880144197" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        
        </a>
        <a href="apstudio.reachout@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <div className="copyright">
        © 2026 AP Studios. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
