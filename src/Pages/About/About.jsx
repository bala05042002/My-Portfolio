import React from 'react'
import { NavLink } from 'react-router-dom'
import myImg from '../../assets/IMG_20240907_153214.jpg'
import './About.scss';

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-img'>
        <img src={myImg} alt="" style={{width: '300px', height: '480px', objectFit: 'cover', borderRadius: '10px'}} />
      </div>
      <div className='about-me'>
        <h1>My Name is Krish</h1>
        <h1>Nice to meet you</h1>
        <p>
          👋 Hi there! I'm a dynamic web and app developer who loves crafting seamless digital experiences. With expertise in React.js, React Native, and SCSS, I bring ideas to life on both web and mobile platforms. My backend skills include Node.js and Express, seamlessly paired with MongoDB for robust, scalable applications. I also have a passion for UI design, where I harness Figma to create user-friendly and visually stunning interfaces.

          Whether it's building innovative products, problem-solving, or exploring creative solutions, I aim to deliver impact through design and code. Let’s build something great together! 🌟
        </p>

        <ul>
            <h1>Contact Information</h1>
          <li>
            <h2>Phone Number: <span>+91 916382028774</span></h2>
          </li>
          <li>
            <h2>Email: <span>19cad216@gmail.com</span></h2>
          </li>
        </ul>

        <div className='about-links'>
          <NavLink to={'/projects'}>My Projects: <span style={{color: 'lightblue', textDecoration: 'underline', marginLeft: '10px'}}>Projects</span></NavLink>
          <NavLink to={'/contact'}>Contact Me: <span style={{color: 'lightblue', textDecoration: 'underline', marginLeft: '10px'}}>Contact</span></NavLink>
        </div>

      </div>
    </section>
  )
}

export default About