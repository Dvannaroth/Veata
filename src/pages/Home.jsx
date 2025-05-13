import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/hero';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Footer />
    </>
  )
}

export default Home
