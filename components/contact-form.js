import React, { useState } from "react";
import styles from "./form.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [form, setForm] = useState("");

  const isFormDisabled = () => {
    if (form.state === "success" || form.state === "loading") return true;

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <form
      className={`${styles["contact-form"]} flx column center ${
        isFormDisabled() ? styles["disabled"] : "active"
      }`}
      onSubmit={handleSubmit}
    >
      <div className={styles["contact-form-input"]}>
        <label className={styles["label-name"]} htmlFor="name">
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
          disabled={isFormDisabled()}
          required
        />
      </div>
      <div className={styles["contact-form-input"]}>
        <label className={styles["label-email"]} htmlFor="email">
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
          disabled={isFormDisabled()}
          required
        />
      </div>
      <div className={styles["contact-form-input"]}>
        <label className={styles["label-message"]} htmlFor="message">
          <span className="text-hide">Message</span>
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="contact-form-message"
          value={formData.message}
          onChange={handleChange}
          disabled={isFormDisabled()}
          required
        />
      </div>
      <button
        type="submit"
        className={styles["contact-form-button"]}
        disabled={isFormDisabled()}
      >
        <span className="text-hide">Submit</span>
      </button>
      {form.state === "loading" ? (
        <div>Sending....</div>
      ) : form.state === "error" ? (
        <div>{form.message}</div>
      ) : (
        form.state === "success" && <div>Sent successfully</div>
      )}
    </form>
  );
};

export default ContactForm;
