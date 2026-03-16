import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import { Users, Eye, Film, TrendingUp } from "lucide-react";

function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = target / 60;

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, start]);

  return <h3>{count}+</h3>;
}

function About() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { icon: <Users size={28} />, number: 10, label: "Accounts Managed" },
    { icon: <Eye size={28} />, number: 5, label: "Million+ Views" },
    { icon: <Film size={28} />, number: 100, label: "Reels Posted" },
    { icon: <TrendingUp size={28} />, number: 50, label: "Clients Served" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about section-container">

      <div className="about-content">

        {/* LEFT SIDE */}
        <div className="about-text">

          <span className="about-tag">ABOUT US</span>

          <h2>
            Creative Storytelling with
            <span className="gradient-text"> AP Studios</span>
          </h2>

          <p>
            AP Studios is a passionate creative team focused on producing cinematic
            social media content that captures attention and tells powerful stories.
          </p>

          <p>
            Our mission is simple — create visuals that inspire, engage, and grow
            brands online using modern editing techniques and storytelling.
          </p>

          <p>
            Founded by Atharva and Prajwal, AP Studios combines creativity,
            cinematic vision, and social media expertise to deliver content that performs.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-stats">

          {stats.map((stat, index) => (
            <div className="card-glow" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <Counter target={stat.number} start={startCount} />
              <span>{stat.label}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;