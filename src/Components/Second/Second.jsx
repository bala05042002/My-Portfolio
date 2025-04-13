import React from 'react';
import './Second.scss';
import whatsapp from "../../assets/whatsapp.svg";
import { Link } from 'react-router-dom';

const Second = () => {
  const phoneNumber = "916382028774"; // Replace with your phone number (use country code without the "+" sign)
  const message = "Hello! I would like to chat with you.";

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <section className='second-section'>
      <div className='wrapper'>
        <p className='title'>MY BIOGRAPHY</p>
        <h1>FullStack Web Developer Based In India</h1>
        <p className='description'>I love graphic design and photography.And also web development I can give your business a new creative start right away! Contact me and we will discuss your projects!</p>

        <ul>
          <li>
            <h1>Name: <span>Bala Krishnan</span></h1>
          </li>
          <li>
            <h1>From: <span>Thanjavur, Tamilnadu</span></h1>
          </li>
          <li>
            <h1>Email: <span>19cad216@gmail.com</span></h1>
          </li>
          <li>
            <h1>Phone: <span>+91 6382028774</span></h1>
          </li>
        </ul>

        <div className='hire-button'>
          <Link to={'https://drive.google.com/file/d/1p7Gs82jGpUss0QLBUc1PYb6XPYpKZzNb/view?usp=sharing'} target='_blank'>
            <button className='download-cv'>Download CV</button>
          </Link>
          
          <div className='talk-me' onClick={openWhatsApp}>
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Second