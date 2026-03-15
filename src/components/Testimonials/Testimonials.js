import React from "react";
import "./Testimonials.css";

const data = [
  { name: "Rahul", text: "Amazing growth results in 2 months!" },
  { name: "Anita", text: "Reels went viral — insane reach!" },
  { name: "Vikram", text: "Professional and data-driven strategy." },
  { name: "Simran", text: "Best Instagram agency I worked with." }
];

function Testimonials() {
  return (
    <section className="testimonials section-container">
      <div className="testimonials-header">
        <span>WHAT CLIENTS SAY</span>
        <h2>Real <span className="gradient-text">Testimonials</span></h2>
      </div>

      <div className="testimonials-grid">
        {data.map((item,index)=>(
          <div key={index} className="card-glow testimonial-card">
            <p>"{item.text}"</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
