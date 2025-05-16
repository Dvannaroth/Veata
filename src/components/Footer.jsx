import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import veata_logo from '../assets/images/Veata_logo.png';

const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white mt-7  bg-[#1f293736] p-4 gap-8'>
      <div className='pl-4 pr-4 flex flex-col'>
        <Link to="/veata"><img src={veata_logo} alt="Veata Logo" className='w-[90px] h-auto' /></Link>
        <p className='text-sm  text-gray-400'>ទទួលទានអាហារ ភេសជ្ជៈឆ្ងាញ់ៗ អបជាមួយទេសភាពដ៏ស្រស់ស្អាតពីទឹកដីជ្រោយចង្វារ។</p>
      </div>

      <div className='pl-4 flex flex-col'>
      <h1 className='text-xl font-bold'>Quick Links</h1>
      <ul className='text-sm  text-gray-400 flex flex-col gap-0.5 pt-2'>
        <li><Link to="/veata">Home</Link></li>
        <li><Link to="/veata/about">About</Link></li>
        <li><Link to="/veata/service">Service</Link></li>
      </ul>
      </div>

      <div className='pl-4 flex flex-col'>
      <h1 className='text-xl font-bold '>Contact Us</h1>
      <ul className='text-sm  text-gray-400'>
        <li><FontAwesomeIcon icon={faPhone} className="mr-2" />012 345 678</li>
        <li><FontAwesomeIcon icon={faEnvelope} className="mr-2"  />veata@mekongviewtower.com </li>
        </ul>
      </div>

      
    </div>
    <div className='col-start-1 col-end-4  border-t border-gray-700 pt-6 text-center text-gray-500 mt-12 pb-8'>
        <span className='border-t-2 border-amber-300'></span>
      <h1>© 2025 Veata SkyLounge & Restaurant. All Rights Reserved.</h1>
    </div>
    
    </>
  )
}

export default Footer;
