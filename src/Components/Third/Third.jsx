import React, {useState, useEffect} from 'react'
import './Third.scss'
import Footer from '../Footer/Footer'

const ProgressComponent = ({name, progress}) => {
    return (
        <div>
            <div className='skill'>{name}</div>
            <div className='skill-progress'>
                <div style={{
                    width: `${progress}%`,
                    height: '4px',
                    backgroundColor: 'green',
                    paddingTop: '1px'
                }}></div>
            </div>
        </div>
    )
}

const Third = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollingDown(true);
            } else {
                setScrollingDown(false);
            }
                setLastScrollY(currentScrollY);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
            window.removeEventListener("scroll", handleScroll);
            };
    }, [lastScrollY]);

  return (
    <section className='third-section'>
        <div className='main-third'>
            <h2>My Skills</h2>
            <p>Here are some of the skills I have acquired over the years.</p>
            <div className={`skills ${scrollingDown ? 'animated' : ''}`}>
                <ProgressComponent name={"HTML"} progress={92} />
                <ProgressComponent name={"CSS"} progress={90} />
                <ProgressComponent name={"JavaScript"} progress={85} />
                <ProgressComponent name={"React Js"} progress={85} />
                <ProgressComponent name={"React Native - Mobile Development"} progress={75} />
                <ProgressComponent name={"Node Js"} progress={80} />
                <ProgressComponent name={"Express"} progress={80} />
                <ProgressComponent name={"Mongo Db"} progress={75} />
                <ProgressComponent name={"Git"} progress={70} />
                <ProgressComponent name={"UI Design - Figma"} progress={70} />
            </div>
        </div>
        <div className='footer-section'>
            <Footer />
        </div>
    </section>
  )
}

export default Third