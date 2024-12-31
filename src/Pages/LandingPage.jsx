import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/LandingPage/bg-image.png'
import bgImageDesktop from '../assets/LandingPage/bg-image-desktop.jpg'

import { LogoName } from '../Constants/AppConstants'


function LandingPage() {

  const navigate = useNavigate()

  const handleContinueBtn = ()=>{
    navigate('/login')
  }

  return (
    <div className='relative h-screen w-screen bg-gray-900 flex justify-center items-center'>
      <img src={bgImage} alt="bg-image" className="block object-cover w-full h-full md:hidden" />
      <img src={bgImageDesktop} alt="bg-image" className="hidden object-cover w-full h-full md:block" />
      <div className="absolute h-16 w-screen flex items-center top-0 opacity-95">
        <p className="text-white text-[30px] px-6 font-semibold font-poppins">{LogoName}</p>
      </div>
      <div className='absolute px-6 py-4 bottom-0 h-auto w-full flex flex-col gap-2 bg-white md:flex-row'>
        <h2 className='w-full md:w-2/3 text-[27px] flex items-center md:text-3xl font-bold text-black font-montserrat'>Get started with {LogoName}</h2>
        <button onClick={handleContinueBtn} className='w-full md:w-1/3 py-2 md:py-3 text-[26px] font-medium bg-black text-white font-poppins rounded-sm hover:bg-gray-900 transition-all duration-300'>Continue</button>
      </div> 
    
    </div>
  )
}

export default LandingPage