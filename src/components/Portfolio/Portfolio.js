import React, { useState } from "react";
import "./Portfolio.css";

const categories = {
  "Video Editing": ["Reels", "Cinematic", "Commercials"],
  "Photo Shoot": ["Wedding", "Product", "Street"],
  "Graphic Design": ["Brand Identity", "Social Media", "Posters"]
};

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
  const mainCategories = Object.keys(categories);
  const [activeCategory, setActiveCategory] = useState(mainCategories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  const filtered = items.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSubCategory = activeSubCategory === "All" || item.subCategory === activeSubCategory;
    return matchesCategory && matchesSubCategory;
  });

  const handleMainCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveSubCategory("All");
  };

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

      <div className="filters main-filters">
        {mainCategories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleMainCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filters sub-filters" style={{ marginBottom: "3rem", gap: "10px" }}>
        {["All", ...categories[activeCategory]].map(sub => (
          <button
            key={sub}
            style={{ fontSize: "0.85rem", padding: "6px 15px", opacity: activeSubCategory === sub ? 1 : 0.6 }}
            className={activeSubCategory === sub ? "active" : ""}
            onClick={() => setActiveSubCategory(sub)}
          >
            {sub}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((item, index) => (
          <div key={index} className="card-glow portfolio-card">
            <div className="thumb gradient-text">{item.name.charAt(0)}</div>
            <h3>{item.name}</h3>
            <span>{item.subCategory}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
