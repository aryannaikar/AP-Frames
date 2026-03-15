import React, { useEffect, useRef, useState } from "react";
import "./Results.css";

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = target / 40;

          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(Math.floor(current));
          }, 40);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <h3 ref={ref}>
      {count}
      {suffix}
    </h3>
  );
}

function Results() {
  return (
    <section id="results" className="results section-container fade-in">
      <div className="results-header">
        <span>PROOF, NOT PROMISES</span>
        <h2>
          Real <span className="gradient-text">Results</span>
        </h2>
      </div>

      <div className="results-stats">
        <div>
          <Counter target={5000000} suffix="+" />
          <span>Reel Views</span>
        </div>
        <div>
          <Counter target={100} suffix="+" />
          <span>Reels Optimized</span>
        </div>
        <div>
          <Counter target={50} suffix="+" />
          <span>Accounts Grown</span>
        </div>
        <div>
          <Counter target={95} suffix="%" />
          <span>Client Retention</span>
        </div>
      </div>
    </section>
  );
}

export default Results;
