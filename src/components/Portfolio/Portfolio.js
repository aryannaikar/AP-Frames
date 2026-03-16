import React, { useState } from "react";
import "./Portfolio.css";

const categories = ["Video Editing", "Photo Shoot", "Graphic Design"];

const items = [
  { name: "Cinematic Wedding Highlight", category: "Video Editing", subCategory: "Cinematic" },
  { name: "Brand Commercial Reel", category: "Video Editing", subCategory: "Commercials" },
  { name: "Urban Street Photography", category: "Photo Shoot", subCategory: "Street" },
  { name: "Product Catalog Shoot", category: "Photo Shoot", subCategory: "Product" },
  { name: "Minimalist Brand Identity", category: "Graphic Design", subCategory: "Brand Identity" },
  { name: "Social Media Carousel Set", category: "Graphic Design", subCategory: "Social Media" },
  { name: "High-Energy Fitness Reel", category: "Video Editing", subCategory: "Reels" },
  { name: "Event Coverage Shots", category: "Photo Shoot", subCategory: "Wedding" },
  { name: "Restaurant Promo Video", category: "Video Editing", subCategory: "Commercials" },
  { name: "Tech Product Ad", category: "Graphic Design", subCategory: "Posters" }
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = items.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio section-container">
      <div className="portfolio-header">
        <span>OUR WORK</span>
        <h2><span className="gradient-text">Portfolio</span> Showcase</h2>
        <p style={{ marginTop: "1rem", color: "var(--light-text)", maxWidth: "600px", margin: "1rem auto 0" }}>
          Explore some of our cinematic projects and social media content created for brands and creators.
          From high-energy reels to professional brand shoots, our work focuses on creating content that stands out in today’s fast-moving social media world.
        </p>
      </div>

      <div className="filters main-filters" style={{ marginBottom: "3rem" }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((item, index) => (
          <div key={index} className="card-glow portfolio-card">
            <div className="thumb gradient-text">{item.name.charAt(0)}</div>
            <h3>{item.name}</h3>
            <span>{item.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
