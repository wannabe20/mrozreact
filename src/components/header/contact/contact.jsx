import React, { useState } from 'react';
import './contact_styl.css'

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Zde můžete provést logiku odeslání formuláře
    console.log('Odesláno:', { email, message });
  };

  return (
    <div className="contact">
      <h2>Contact me!</h2>
      <form className='yes' onSubmit={handleSubmit}>
        <input
          className="cont"
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          className="cont"
          placeholder="HALOO"
          value={message}
          onChange={handleInputChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
