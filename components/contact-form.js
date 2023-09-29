import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="contact-form flx column center" onSubmit={handleSubmit}>
      <div className="contact-form-input">
        <label className="label-name" htmlFor="name">
          <span className="text-hide">Name</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="contact-form-name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="contact-form-input">
        <label className="label-email" htmlFor="email">
          <span className="text-hide">Email</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="contact-form-email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="contact-form-input">
        <label className="label-message" htmlFor="message">
          <span className="text-hide">Message</span>
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="contact-form-message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="contact-form-button">
        <span className="text-hide">Submit</span>
      </button>
    </form>
  );
};

export default ContactForm;