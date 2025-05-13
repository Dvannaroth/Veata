import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Event = () => {
  return (
    <>
    <Navbar />
    <div className='w-full h-screen flex flex-col justify-center items-center text-amber-50'>
      <h1>Welcome to the Event Page</h1>
    </div>
    <Footer />
    </>
  )
}

export default Event
