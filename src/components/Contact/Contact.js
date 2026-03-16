import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    otherProjectDetails: "",
    reference: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const { name, phone, project, otherProjectDetails, reference, message } = formData;

    const whatsappNumber = "919880144197";

    const text = encodeURIComponent(`NEW WEBSITE INQUIRY - AP Studios

Name: ${name}
Phone: ${phone}

Project Type: ${project === "Other" ? `Other - ${otherProjectDetails}` : project}
Reference: ${reference}

Project Details:
${message}
`);

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    setFormData({
      name: "",
      phone: "",
      project: "",
      otherProjectDetails: "",
      reference: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <h2>
          Let's Work <span className="gradient-text">Together</span>
        </h2>

        <p className="section-subtitle">
          Have a project in mind? Send us your details.
        </p>

        <form onSubmit={sendWhatsApp} className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 "
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select
              name="project"
              required
              value={formData.project}
              onChange={handleChange}
            >
              <option value="">Select Project Type</option>
              <option value="Wedding Shoot">Wedding Shoot</option>
              <option value="Brand Advertisement">Brand Advertisement</option>
              <option value="Instagram Reels">Instagram Reels</option>
              <option value="Product Shoot">Product Shoot</option>
              <option value="Event Coverage">Event Coverage</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.project === "Other" && (
            <div className="form-group">
              <label>Describe Other Project Type</label>
              <input
                type="text"
                name="otherProjectDetails"
                placeholder="Please specify..."
                required
                value={formData.otherProjectDetails}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label>Reference</label>
            <select
              name="reference"
              required
              value={formData.reference}
              onChange={handleChange}
            >
              <option value="">Select Reference</option>
              <option value="Prajwal">Prajwal</option>
              <option value="Atharva">Atharva</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Details</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="neon-button">
            Send Inquiry via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;