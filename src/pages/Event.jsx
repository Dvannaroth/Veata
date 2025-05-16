import React from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/images/hero-banner.jpg'
import Footer from '../components/Footer'

const Event = () => {
  return (
    <>
    <Navbar />
    <div class="flex flex-col items-center mt-12 mb-12">
            <h1 className='text-amber-50 text-xl font-bold mb-8'>Event & Meeting</h1>
            <p class="w-180 indent-8">At Veata, we offer a unique blend of breathtaking scenery, exceptional cuisine, and impeccable service. We are more than just a restaurant; we are a destination. Our prime location provides a 360° vista of the city, showcasing the mesmerizing confluence of four rivers, stunning architectural landmarks, and captivating sunsets.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
        <img class="rounded-[24px]" src={hero} alt="" />
            </div>
            <div>
              <h1 class="font-bold mb-4">Our Story</h1>
            <p>Veata Skylounge and Restaurant was born from a vision to create a landmark dining experience in Phnom Penh. Founded in [ Insert Founding Year ], we have been dedicated to providing a memorable experience for every guest, blending culinary excellence with unparalleled views. Over the years, we have [ Add a brief, compelling detail about a key achievement or evolution of the restaurant, e.g., "become renowned for our innovative Khmer fusion cuisine" or "hosted numerous prestigious events." ]</p>
            </div>
          </div>
    <Footer />
    </>
  )
}

export default Event
