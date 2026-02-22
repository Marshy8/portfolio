import React from "react";
import Section from "./Section.js";
import "./Contact.css";

const Contact = React.forwardRef((props, ref) => {
  // Helper function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied: ${text}`)) // optional feedback
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const email = "portfolio@buck-marshall.mozmail.com";
  const phone = "+1 (307) 800-3132";

  return (
    <Section
      ref={ref}
      id="contact"
      title="Contact"
      filePath={process.env.PUBLIC_URL + "/images/background_4.JPG"}
    >
      <div className="contact-text">
        <div className="contact-item">
          <h3>Email</h3>
          <div className="contact-info">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
            <button onClick={() => copyToClipboard(email)} className="copy-btn">
              ⧉
            </button>
          </div>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <div className="contact-info">
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>{phone}</a>
            <button onClick={() => copyToClipboard(phone)} className="copy-btn">
              ⧉
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Contact;
