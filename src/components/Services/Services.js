import React from "react";
import "./Services.css";
import { BarChart3, Film, Lightbulb, Target, Zap, Users, Camera } from "lucide-react";

const services = [
  { icon: <Film size={32} />, title: "Reels", desc: "High-quality reels designed to capture attention and boost engagement." },
  { icon: <Zap size={32} />, title: "Social Media Content Creation", desc: "Creative and trend-driven content tailored for Instagram and other platforms." },
  { icon: <Target size={32} />, title: "Brand & Product Shoots", desc: "Professional visuals that showcase your brand in the best way possible." },
  { icon: <BarChart3 size={32} />, title: "Cinematics Advertisement", desc: "Creative promotional videos to help businesses reach their audience." },
  { icon: <Lightbulb size={32} />, title: "Video Editing", desc: "Professional editing, color grading, and cinematic storytelling." },
  { icon: <Users size={32} />, title: "Account Managing", desc: "End-to-end management of your social media profile." },
  { icon: <Camera size={32} />, title: "Drone Shots Video", desc: "Breathtaking aerial cinematography and drone footage." }
];

function Services() {
  return (
    <section id="services" className="services section-container">
      <div className="services-header">
        <span>WHAT WE DO</span>
        <h2>Services That <span className="gradient-text">Actually Grow</span></h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="card-glow service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
