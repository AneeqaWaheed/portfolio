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
   

<div className="vw-100 h-100 d-flex align-items-center justify-content-center mb-5 p-5" id='home'
style={{backgroundColor:'#0854a6'}}
>
<div className="row m-3 w-50">
  
  {/* <div className="contact-div"> */}
  <h2 className="fw-bold fs-1" style={{ color: 'orange' }}>Contact </h2>

      <form ref={form} onSubmit={sendEmail}>
        <label className="text-white">Name</label>
        <input type="text" name="user_name" />
        <label className="text-white">Email</label>
        <input type="email" name="user_email" />
        <label className="text-white">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      
  {/* </div> */}
  </div>
  <div className="row m-3 " id="contact">
    <div className="">
      <img
        src="./assets/contactUs.png"
        alt="Right Column"
        style={{ width: '400px', height: 'auto' }}
        className="img-fluid" // Added class for responsive images
      />
    </div>
  </div>
</div>

    
  );
};

export default ContactForm;

