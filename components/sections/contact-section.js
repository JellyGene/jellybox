import React from "react";

import ContactForm from "../contact-form";

const ContactSection = () => {
  return (
    <div className="flx column center container">
      <h1 className="contact-title"><span className="text-hide">Contact</span></h1>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
