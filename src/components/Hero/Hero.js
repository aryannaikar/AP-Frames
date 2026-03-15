import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <h1 className="hero-title">
          AP <span>Frames</span>
        </h1>

        <p className="hero-tagline">
          Turning Moments Into Cinematic Frames
        </p>

        <p className="hero-sub">
          AP Frames is a creative social media production team specializing in cinematic reels, brand storytelling, and high-quality visual content. Founded by Atharva and Prajwal.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-secondary">Contact Us</a>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;