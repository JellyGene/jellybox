import React from "react";
import BubbleCanvas from "../bubbles-canvas";
import ContactForm from "../contact-form";

const style = {
  backgroundColor: "#fff",
  borderRadius: "20px",
  fontSize: "18px",
  padding: "6px 12px",
};

const ContactSection = () => {
  return (
    <>
      <div className="flx column center container above">
        <h1 className="contact-title">
          <span className="text-hide">Contact</span>
        </h1>
        <div className="email" style={style}>
          business@jellybox.studio
        </div>
      </div>
      <BubbleCanvas />
    </>
  );
};

export default ContactSection;
