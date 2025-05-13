import React from 'react';
import veata_logo from '../assets/images/Veata_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-center bg-[#1f293736]'>
      <nav className='flex justify-between items-center w-[90%] h-[80px]'>
      <Link to="/veata"><img src={veata_logo} alt="Veata Logo" className='w-[90px] h-auto' /></Link>
      <ul className="flex text-amber-50 gap-4">
        <li><Link to="/veata" class=' hover:text-cyan-600 transition duration-300'>Home</Link></li>
        <li><Link to="/about" class=' hover:text-cyan-600 transition duration-300'>About</Link></li>
        <li><Link to="/service" class=' hover:text-cyan-600 transition duration-300'>Service</Link></li>
        <li><Link to="/event" class=' hover:text-cyan-600 transition duration-300'>Events</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar;
