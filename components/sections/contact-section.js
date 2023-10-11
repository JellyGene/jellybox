import React from "react";
import BubbleCanvas from "../bubbles-canvas";
import ContactForm from "../contact-form";

const ContactSection = () => {
  return (
    <>
      <div className="flx column center container above">
        <h1 className="contact-title">
          <span className="text-hide">Contact</span>
        </h1>
        <ContactForm />
      </div>
      <BubbleCanvas />
    </>
  );
};

export default ContactSection;
