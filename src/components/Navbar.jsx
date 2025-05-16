import React, { useRef, useState } from 'react';
import veata_logo from '../assets/images/Veata_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link,NavLink } from 'react-router-dom';
import "./css/Navbar.css";



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState (false)


  return (
      <nav>
      <div>
      <Link to="/veata"><img src={veata_logo} alt="Veata Logo" className='w-[90px] h-auto' /></Link>
      </div>
      <div>
      <button className='mobile-menu' 
      onClick={() =>{
        setMenuOpen(!menuOpen);
        }}>
        <FontAwesomeIcon icon={faBars } size="lg"/>
      </button>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/veata">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/event">Events</NavLink></li>
      </ul>
      
      </nav>
  )
}

export default Navbar;
