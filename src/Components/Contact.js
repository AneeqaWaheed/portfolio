import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import './CSS/contact.css';

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5m44gvj",
        "template_58gd1jw",
        form.current,
        "8fcQ6YBVay9n25H0a"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-div">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    
  );
};

export default ContactForm;

