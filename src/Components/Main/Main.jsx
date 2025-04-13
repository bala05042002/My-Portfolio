import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import fb from "../../assets/git.svg";
import instagram from "../../assets/instagram.svg";
import callLogo from "../../assets/call.svg";
import whatsapp from "../../assets/whatsapp.svg";
import htmlLogo from "../../assets/html.svg";
import javascriptLogo from "../../assets/javascript.svg";
import mongo from "../../assets/mongo.svg";
import node from "../../assets/node.svg";
import scss from "../../assets/scss.svg";
import sql from "../../assets/sql.svg";
import reactLogo from "../../assets/react.svg";
import myImg from "../../assets/my-img.png";

const Main = () => {
  return (
    <main className='main-content'>
        <section className="section-1">
            <div>
                <h3>Hello, It's Me</h3>
                <h1>Bala Krishnan</h1>
                <h3>And I'm a <span>Fullstack Web Developer</span></h3>
            </div>
            <p>I know how to develop websites by using
                <img src={htmlLogo} alt="" style={{width: "15px"}} />,
                <img src={scss} alt="" style={{width: "15px"}} />,
                <img src={javascriptLogo} alt="" style={{width: "13px"}} />,
                <img src={reactLogo} alt="" style={{width: "13px", marginBottom: "-1px", marginRight: "5px"}} />
                by Front-End.
                <img src={node} alt="" style={{width: "15px"}} /> & Express.js By Server and 
                <img src={sql} alt="" style={{width: "15px"}}  />And 
                <img src={mongo} alt="" style={{width: "15px"}}  />for Back-End.</p>
            <div className='contact-links'>
                <Link to={'https://api.whatsapp.com/send?phone=6382028774&text=Hello from Your Resume..'} target='_blank'>
                    <div className='contact-logos'>
                        <img className='logo-img' src={whatsapp} alt="" />
                    </div>
                </Link>
                <Link to={'https://www.instagram.com/mr_coco428/'} target='_blank'>
                    <div className='contact-logos'>
                        <img className='logo-img' src={instagram} alt="" />
                    </div>
                </Link>
                <Link to={"tel:6382028774"}>
                    <div className='contact-logos'>
                        <img className='logo-img' src={callLogo} alt="" />
                    </div>
                </Link>
                <Link to={'https://github.com/bala05042002'} target='_blank'>
                    <div className='contact-logos'>
                        <img className='logo-img' src={fb} alt="" />
                    </div>
                </Link>
            </div>
            <button className='download-resume'>Download Resume</button>
        </section>

        <section className="section-2">
            <img src={myImg} alt="" />
        </section>
    </main>
  )
}

export default Main