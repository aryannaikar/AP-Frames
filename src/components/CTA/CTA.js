import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="section-container">
        <h2>
          Let's create something <span className="gradient-text">amazing</span> together.
        </h2>
        <p>Our team is ready to bring your ideas to life and create content that captures attention and drives engagement.</p>
        <a
          href="https://wa.me/919999999999"
          className="neon-button"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}

export default CTA;
