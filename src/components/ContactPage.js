import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>
        For inquiries, you can contact us via email or phone.
      </p>

      <div style={{ marginTop: '20px' }}>
        <p>Email: <a href="mailto:viplow.291@gmail.com">viplow.291@gmail.com</a></p>
        <p>Phone: <a href="tel:+917290953823">+91 7290953823</a></p>
      </div>
    </div>
  );
};

export default ContactPage;