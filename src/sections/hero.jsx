import React from 'react';
import '../components/css/home.css';
import { Link } from 'react-router-dom';

const hero = () => {
  return (
    <div>
    <div className='container'>
      <div className='home-content'>
        <h1 className='font-bold text-2xl'>Veata Skylounge and Restaurant</h1>
        <p className='w-[50%]'>where an unforgettable dining experience unfolds against the backdrop of Phnom Penh's most spectacular panoramic views.</p>

        <div class='grid grid-cols-1 gap-4 md:grid-cols-2 font-bold'>
        <Link to="/about" className="bg-[#81ba1e] text-cyan-950 px-6 py-3 rounded-md text-lg hover:bg-cyan-700 hover:text-white transition duration-300">Discover</Link>
        <Link to="/about" className="bg-[#81ba1e] text-cyan-950 px-6 py-3 rounded-md text-lg hover:bg-cyan-700 hover:text-white transition duration-300">Reservation</Link>
        </div>



      </div>
    </div>

    <div class='mt-12'>
    <h1 class='text-4xl font-bold text-white text-center' > Our Venue </h1>
    <div class="mt-8 grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 md:px-0 gap-8">
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                    <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-vr-cardboard"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Khmer Food</h3>
                    <p class="text-gray-600 mb-4">Step inside spaces like never before with our interactive VR tours.</p>
                    <a href="services.php#vr-tours" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                    <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-camera-retro"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Thai Food</h3>
                    <p class="text-gray-600 mb-4">Capture stunning 360° views with professional VR photography.</p>
                    <a href="services.php#vr-photo" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                     <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-cube"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Europe Food</h3>
                    <p class="text-gray-600 mb-4">Showcase products from every angle with interactive 3D object views.</p>
                    <a href="services.php#object-vr" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                    <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-mobile-alt"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Chinese Food</h3>
                    <p class="text-gray-600 mb-4">Bring digital objects into the real world with Augmented Reality.</p>
                    <a href="services.php#ar-objects" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                     <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-cube"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Short Menu</h3>
                    <p class="text-gray-600 mb-4">Showcase products from every angle with interactive 3D object views.</p>
                    <a href="services.php#object-vr" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                    <div class="text-blue-600 mb-4 text-4xl"><i class="fas fa-mobile-alt"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Drink Menu</h3>
                    <p class="text-gray-600 mb-4">Bring digital objects into the real world with Augmented Reality.</p>
                    <a href="services.php#ar-objects" class="text-blue-600 hover:underline">Learn More →</a>
                </div>
    </div>
    </div>
    </div>
  )
}

export default hero
