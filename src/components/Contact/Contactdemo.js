import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        // Replace these with your EmailJS credentials
        // Get them from: https://www.emailjs.com/
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    setStatus("success");
                    setLoading(false);
                    form.current.reset();

                    // Clear success message after 5 seconds
                    setTimeout(() => setStatus(""), 5000);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setStatus("error");
                    setLoading(false);

                    // Clear error message after 5 seconds
                    setTimeout(() => setStatus(""), 5000);
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <div className="section-container">
                <h2>
                    Let's Work <span className="gradient-text">Together</span>
                </h2>
                <p className="section-subtitle">
                    Have a project in mind? Get in touch and let's create something amazing.
                </p>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="user_name">Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_email">Email</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_phone">Phone (Optional)</label>
                        <input
                            type="tel"
                            id="user_phone"
                            name="user_phone"
                            placeholder="+91 XXXXX XXXXX"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell us about your project..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="neon-button"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <div className="status-message success">
                            ✓ Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="status-message error">
                            ✗ Failed to send message. Please try again or contact us directly.
                        </div>
                    )}
                </form>

                <div className="contact-info">
                    <div className="contact-item">
                        <h3>WhatsApp</h3>
                        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                            your number
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <a href="mailto:your@email.com">
                            your@email.com
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3>Location</h3>
                        <p style={{ color: "white" }}>India</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
