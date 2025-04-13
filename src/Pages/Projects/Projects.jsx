import React from 'react'
import './Projects.scss'
import restuarant from '../../assets/Restuarant-Sample.png';
import hackerman from '../../assets/hackerman.png';
import medicalApp from '../../assets/medical-app.jpeg';
import chatApp from '../../assets/Chat_App.png';

const CardComponent = ({image, title, des, click, mobile, git, mobileText}) => {
  return (
    <div className='project_card'>
      <img src={image} alt="" style={mobile ? {
        width: '100%',
        height: '200px',
        objectFit: 'contain'
      }: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
      }} />
      <div className='project_card_text'>
        <h1>{title}</h1>
        <p>{des}</p>

        <button onClick={click}>See Project</button>
        <button onClick={git} style={{backgroundColor: 'green'}}>Download Source Code</button>
      </div>

      {mobile && <div className='mobile-view'>
        <p>{mobileText}</p>
      </div>}
    </div>
  )
}

const Portfolio = () => {
  const restuarantPage = () => {
    const url = `https://restaurant-complete.onrender.com/`;
    window.open(url, "_blank"); 
  };

  const gitRestuarant = () => {
    const url = `https://github.com/bala05042002/restaurant-complete.git`;
    window.open(url, "_blank");
  }

  const hackerManGit = () => {
    const url = `https://github.com/bala05042002/bala-hacker-man-for-alan.git`;
    window.open(url, "_blank"); 
  }

  const hackerMan = () => {
    const url = `https://bala-hacker-man.onrender.com/`;
    window.open(url, "_blank"); 
  };

  const medicalAppDown = () => {
    const url = `https://expo.dev/artifacts/eas/j6gznWC69FcsmbrjrJKusU.apk`;
    window.open(url, "_blank");
  }

  const medicalAppDownGit = () => {
    const url = `https://github.com/bala05042002/my-app.git`;
    window.open(url, "_blank");
  }

  const chatAppProject = () => {
    const url = `https://balachatapp.onrender.com/`;
    window.open(url, "_blank");
  }

  const chatAppProjectGit = () => {
    const url = `https://github.com/bala05042002/balachatapp.git`;
    window.open(url, "_blank");
  }

  return (
    <section className='projects'>
      <div className='projects_title'>
        <h1>Recent Projects</h1>
        <p>
          Below you can see some examples of my recent work.
        </p>
      </div>

      <div className='projects_container'>
        <CardComponent image={restuarant} title={'Restuarant Self Food Order'} des={'A MERN Stack restuarant self food order web-app and website only for mobile.'} click={restuarantPage} mobile={true} git={gitRestuarant} mobileText={'Only for mobile view'} />

        <CardComponent image={hackerman} title={'Hacker Man'} des={'A Simple and Static Word guessing game'} click={hackerMan} mobile={false} git={hackerManGit} />

        <CardComponent image={medicalApp} title={'MedApp'} des={'React Native mobile app, related to Medical field with Ai & Dr Appoinment.'} click={medicalAppDown} mobile={true} git={medicalAppDownGit} mobileText={'Test in your mobile'} />

        <CardComponent image={chatApp} title={'Chat App'} des={'React Js and Firebase, website and web-app for Realtime Chatting.'} click={chatAppProject} mobile={true} git={chatAppProjectGit} mobileText={'Working in both'} />
      </div>
    </section>
  )
}

export default Portfolio