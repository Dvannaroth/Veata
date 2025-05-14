import React, { useRef } from 'react';
import veata_logo from '../assets/images/Veata_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Navbar = () => {

  const navRef = useRef(); 

  const mobileMenu = () => {
    navRef.current.classList.toggle("visible");
  }

  return (
    <div className='flex justify-center bg-[#1f293736]'>
      <nav className='flex justify-between items-center w-[90%] h-[80px]' >
      <Link to="/veata"><img src={veata_logo} alt="Veata Logo" className='w-[90px] h-auto' /></Link>
      <ul className="invisible  text-amber-50 gap-4 transition duration-50 fixed right-24 top-24
      md:flex md:visible md:static" ref={navRef}>
        <li><Link to="/veata" class=' hover:text-cyan-600 transition duration-300'>Home</Link></li>
        <li><Link to="/about" class=' hover:text-cyan-600 transition duration-300'>About</Link></li>
        <li><Link to="/service" class=' hover:text-cyan-600 transition duration-300'>Service</Link></li>
        <li><Link to="/event" class=' hover:text-cyan-600 transition duration-300'>Events</Link></li>
      </ul>
      <button class='text-amber-50 md:invisible md:hidden cursor-pointer hover:text-cyan-600' onClick={mobileMenu}><FontAwesomeIcon icon={faBars} /></button>
      </nav>
    </div>
  )
}

export default Navbar;
