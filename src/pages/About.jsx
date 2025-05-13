import React from 'react'
import hero from '../assets/images/hero-banner.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar />
     <div>
      <img src={hero} alt="hero-banner" className='h-auto w-[95%] m-auto' />
      </div>
      <div className='home-content'>
        <h1 className='text-amber-50 text-xl font-bold'>Our Story</h1>
        <p>This is the about page of our application.</p>
      </div>
    <Footer />
    </>
  )
}

export default About
