import React from 'react';

const ContactSection = () => {
  return (
    <>
      <h1>Contact</h1>
      {/* Your contact content */}
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactSection;