import React, { useRef } from 'react';
import './Contact.css';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dnp82jj',      // Your actual Service ID
        'template_zy1hime',     // Your actual Template ID
        form.current,
        'RkARlZhP_PKyo2L_3'     // Your actual Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h2>Let's Connect</h2>
          <p>Email: akashchouhan1209@gmail.com</p>
          <p>Phone: +91 62660 68835</p>
          <p>Alternate Phone: +91 74770 68835</p>

          <div className="social-icons">
            <a href="https://linkedin.com/in/akash-chouhan-a06320202" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/akash.chouhan.58958343" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/__akash__chouhan__patel_" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="to_name" placeholder="Recipient Name" value="Fill The Form" readOnly />
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="tel" name="number" placeholder="Your Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;




