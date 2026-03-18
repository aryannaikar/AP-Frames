import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-container">
      <div className="portfolio-header">
        <span>OUR WORK</span>
        <h2><span className="gradient-text">Portfolio</span> Showcase</h2>
      </div>

      <div className="instagram-cta card-glow">
        <p className="cta-text">
          All types of our work are available on our Instagram page. 
          Discover our latest projects, behind-the-scenes content, and more.
        </p>
        <a 
          href="https://www.instagram.com/ap_studios__" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary instagram-btn"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
