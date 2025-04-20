import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
const notify = () => toast("Message sent successfully!");
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w7avi0c',     // Replace with your EmailJS service ID
      'template_8xgxu5r',    // Replace with your EmailJS template ID
      form.current,
      'udNRgggpTEBT1aVcS'      // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      notify()
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Something went wrong. Please try again!');
    });
  };

  // center of the screen
      const projectRef = useRef(null);
    
      const scrollToProjects = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    // center of the screen

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <ToastContainer/>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
