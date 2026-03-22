import "./Contact.css";

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied: ${text}`))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const email = "portfolio@buck-marshall.mozmail.com";
  const phone = "+1 (307) 800-3132";

  return (
    <div className="contact-content">
      <div className="contact-item">
        <h3>Email</h3>
        <div className="contact-info">
          <button onClick={() => copyToClipboard(email)} className="copy-btn">
            {email}
          </button>
        </div>
      </div>

      <div className="contact-item">
        <h3>Phone</h3>
        <div className="contact-info">
          <button onClick={() => copyToClipboard(phone)} className="copy-btn">
            {phone}
          </button>
        </div>
      </div>
    </div>
  );
};

const contactModual = {
  id: "contact",
  label: "Contact",
  background: "/images/background_contact.JPG",
  component: Contact,
};

export default contactModual;
