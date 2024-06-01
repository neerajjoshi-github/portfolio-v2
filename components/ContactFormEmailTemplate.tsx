import React from "react";

interface ContactFormEmailProps {
  username: string;
  email: string;
  message: string;
}

const ContactFormEmailTemplate: React.FC<Readonly<ContactFormEmailProps>> = ({
  username,
  email,
  message,
}) => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Portfolio Contact Form Submission</h1>
    <p style={styles.info}>
      From <strong>{username}</strong> at{" "}
      <a href={`mailto:${email}`} style={styles.emailLink}>
        {email}
      </a>
    </p>
    <h2 style={styles.subHeading}>Message:</h2>
    <p style={styles.message}>{message}</p>
  </div>
);

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  info: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  emailLink: {
    color: "#1a0dab",
    textDecoration: "none",
  },
  subHeading: {
    fontSize: "20px",
    color: "#333",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "8px",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default ContactFormEmailTemplate;
