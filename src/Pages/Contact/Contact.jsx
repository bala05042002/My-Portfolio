import React, { useState } from 'react'
import './Contact.scss'
import myImage from '../../assets/IMG_20240907_153214.jpg';
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceId = 'service_wxrj7nc'
  const template = "template_5nl3ayr"
  const userId = "1m4rx6yfZWefXEtMw"

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId, // Replace with your EmailJS Service ID
        template, // Replace with your EmailJS Template ID
        formData,
        userId // Replace with your EmailJS User ID (API key)
      )
      .then(
        (response) => {
          setLoading(true);

          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setLoading(false);
          setFormData(prev => ({
            ...prev,
            name: "",
            email: "",
            message: "",
          }));
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email, please try again.");
          setFormData(prev => ({
            ...prev,
            name: "",
            email: "",
            message: "",
          }));
        }
      ).finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className='contact-container'>
      <div className='contact-img'>
        <img src={myImage} alt="" />
      </div>

      <div className='contact-text'>
        <h1>Contact Me</h1>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Recipient's Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Email</button>

          <p className='send-message'>*Send message to <span>19cad216@gmail.com</span> directly.</p>
        </form>
      </div>
    </section>
  )
}

export default Contact