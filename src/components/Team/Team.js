import React from "react";
import "./Team.css";

const team = [
  {
    name: "Prajwal Patil",
    description: "Founder and Creative Lead with expertise in professional photo shoots and advanced editing. Successfully worked with many clients, delivering standout visuals and consistently receiving great reviews for quality and creativity",
    image: "https://ui-avatars.com/api/?name=Prajwal+Patil&background=0D8ABC&color=fff&size=500"
  },
  {
    name: "Atharva",
    description: "Founder and Creative Lead with expertise in professional photo shoots and advanced editing. Successfully worked with many clients, delivering standout visuals and consistently receiving great reviews for quality and creativity",
    image: "https://ui-avatars.com/api/?name=Atharva&background=FF5722&color=fff&size=500"
  }
];

function Team() {
  return (
    <section id="team" className="team">
      <div className="section-container">
        <div className="team-header">
          <span>THE PEOPLE BEHIND THE GROWTH</span>
          <h2>Meet The <span className="gradient-text">Team</span></h2>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                
                <div className="flip-front card-glow" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                  <div style={{ position: 'absolute', bottom: '15px', background: 'rgba(10, 10, 15, 0.8)', padding: '8px 20px', borderRadius: '30px', border: '1px solid var(--primary)' }}>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>{member.name}</h3>
                  </div>
                </div>

                <div className="flip-back card-glow">
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', margin: 0 }}>{member.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
