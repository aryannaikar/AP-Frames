import React from "react";
import "./Testimonials.css";

const data = [
  { name: "Yash More (Myrasa Perfume)", text: "Our brand's online presence has skyrocketed. The quality of photo shoots and editing is top-notch!" },
  { name: "Yatin Parmar (YP Teams)", text: "Working with the team has been a game-changer for YP Teams. Professional, creative, and highly recommended." },
  { name: "Aniket Tamboli (WareHouse Wolves)", text: "The content created for WareHouse Wolves is stunning. They really understand our brand's vibe." },
  { name: "Mangesh Kudalkar (Kurla MLA)", text: "Excellent social media management. The engagement on our posts has never been better." },
  { name: "Valleri Pawar (V Nailed It)", text: "Beautiful visuals and great attention to detail. V Nailed It is finally getting the attention it deserves!" }
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
