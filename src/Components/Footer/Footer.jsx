import React, { useState, useEffect } from 'react';
import './footer.scss';
import upArrow from '../../assets/up-arrow.svg';
import whatsapp from '../../assets/whatsapp copy.svg';
import instgram from '../../assets/instagram copy.svg';
import linked from '../../assets/linked.svg';
import email from '../../assets/email.svg';
import address from '../../assets/address.svg';
import telegram from '../../assets/telegram.svg';
import github from '../../assets/github.svg';

const ChatComponent = ({logo, title, tooltip, onclickEvent}) => {
    return (
        <div className='chat-component' title={tooltip} onClick={onclickEvent}>
            <img className='logo-img' src={logo} alt="" />
            <p>{title}</p>
        </div>
    )
}

const Footer = () => {
    const phoneNumber = "916382028774"; // Replace with your phone number (use country code without the "+" sign)
    const message = "Hello! I would like to chat with you.";

    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // Open in a new tab
    };

    const openInstagramProfile = () => {
        const url = "https://www.instagram.com/mr_coco428/"; // Replace 'your_username' with your Instagram handle
        window.open(url, "_blank"); // Open the URL in a new browser tab
    };

    const openLinkedInProfile = () => {
        const url = "https://www.linkedin.com/in/bala-krishnan-36bb862a8/"; // Replace 'your-username' with your LinkedIn profile handle
        window.open(url, "_blank"); // Open the URL in a new browser tab
    };    

    const openEmailClient = () => {
        const email = "19cad216@gmail.com"; // Replace with your email address
        const subject = "Hello from your website"; // Optional: Add a subject
        const body = "I wanted to reach out to you."; // Optional: Add a message body
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink; // Open the email client
    };

    const navigateToGitHub = () => {
        const url = "https://github.com/bala05042002";
        window.open(url, "_blank") // Replace 'your-username' with your GitHub username
      };
    

    const openTelegramChat = () => {
        const phoneNumber = "916382028774"; // Replace with your phone number (include the country code, no '+' sign)
        const url = `https://t.me/${phoneNumber}`;
        window.open(url, "_blank"); // Open in a new tab
      };

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <footer>
            <div className='connect-component'>

                <ChatComponent logo={whatsapp} title={'Chat On Whatsapp'} tooltip='WhatsApp' onclickEvent={openWhatsApp} />

                <ChatComponent logo={instgram} title={'Connect with Instagram'} tooltip='Instagram' onclickEvent={openInstagramProfile} />

                <ChatComponent logo={linked} title={'Open profile in Liked In'} tooltip='Linked In' onclickEvent={openLinkedInProfile} /> 

                <ChatComponent logo={email} title={'Email Me'} tooltip='Email' onclickEvent={openEmailClient} /> 
                
                <ChatComponent logo={github} title={'Open GitHub'} tooltip='Github' onclickEvent={navigateToGitHub} /> 

                <ChatComponent logo={telegram} title={'Connect with Telegram'} tooltip='Telegram' onclickEvent={openTelegramChat} /> 
            </div>

            <div className='copy-right'>
                <p>Balakrishnan Portfolio</p>
                <p>&copy; 2025</p>
            </div>

             <button className="back-to-top" onClick={scrollToTop}>
                <img src={upArrow} alt="" style={{width: '25px'}} />
            </button>
        </footer>
    )
}

export default Footer