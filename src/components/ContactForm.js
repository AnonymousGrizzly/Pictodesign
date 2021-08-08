import React from 'react';
import emailjs from 'emailjs-com';
import '../design/ContactForm.css';


export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_pwg85i6', 'template_p2xzziu', e.target, 'user_lUZAwz8eoO8W0tYfXrPYC')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!");
      }, (error) => {
          console.log(error.text);
          alert("An error occured!");
      });
      e.target.reset(); 
  }
  // validation
  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <h1 id ="ContactUs">Contact us</h1>
        <p> We'd love to hear from you!</p>
        <input type="text" name="user_name" id="user_name" placeholder="  Name or Company"  required/>
        <input type="email" name="user_email" id="user_email" placeholder="  Email" clasname="field" required/>
        <textarea name="message" id="message" placeholder="  How can we help you?" required />
        <input type="submit" value="Send Message"  className="submit-btn"/>
    </form>
  );
}