import React, {useEffect, useRef, useState} from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import menuIcon from '../../assets/menu-portfolio.svg';

const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const menuRef = useRef(null);

  const outSideClick = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuDrop(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', outSideClick);

    return () => {
      document.removeEventListener('mousedown', outSideClick)
    }
  })

  return (
    <header className='header'>
        <h1>
          <NavLink to={"/"}>Bala Krishnan</NavLink>
        </h1>

        <ul 
          className={`nav ${menuDrop ? "show" : "hide"}`}
          ref={menuRef}
        >
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/projects"}>Projects</NavLink></li>
          <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>

        <img src={menuIcon} alt="" onClick={() => setMenuDrop(!menuDrop)}/>
    </header>
  )
}

export default Header