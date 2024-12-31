import React from 'react'
import { AppName, LogoName } from '../Constants/AppConstants'
import bgImage from '../assets/LoginPage/bgImage.jpg'

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';

function LoginPage() {
  const Navigate = useNavigate()

  const handleRegisterBtn = ()=>{
    Navigate('/register')
  }
  return (
    <div className='h-screen w-screen flex flex-row'>
      {/* image section */}
      <div className='relative hidden md:block h-full w-1/2 bg-gray-900'>
        {/* Bg Image */}
        <img src={bgImage} alt="bg" className='block object-cover w-full h-full opacity-65' />
        {/* Logo for web only*/}
        <div className="absolute md:flex hidden h-16 w-screen items-center top-0 opacity-95">
          <p className="text-white text-[30px] px-6 font-semibold font-poppins">{LogoName}</p>
        </div>
        {/* Text */}
        <div className="absolute h-full w-2/3 flex flex-col px-6 justify-center top-0 left-10 gap-3">
          <p className="text-white text-[28px] font-medium font-poppins">Your Favorite Foods, Delivered in a Dash – Tasty Meals, Just a Click Away!</p>
          <div className="w-1/3 border border-white border-t-4"></div>
        </div>
        {/* Login as resturant*/}
        <button className="absolute py-2 bg-white/50 items-center bottom-2 right-4 backdrop-blur-lg opacity-65 cursor-pointer rounded-md hover:bg-black/30 transition-all duration-200 group">
          <p className="text-black text-[20px] px-6 font-semibold font-poppins group-hover:text-white">Login as resturant</p>
        </button>
      </div>
      {/* form section */}
      <div className='relative h-full w-full md:w-1/2 flex justify-center items-center'>
        {/* Form */}
        <div className='h-[70%] md:h-4/5 w-5/6 flex flex-col gap-8 justify-start items-center'>
          {/* Heading */}
          <div className='h-auto w-full flex flex-col justify-center items-center'>
            <p className="text-black text-[30px] md:text-[35px] px-6 font-semibold font-poppins">Welcome Back!</p>
            <p className="text-gray-700 text-[13px] md:text-[15px] px-6 font-normal font-poppins text-center">Continue with google or enter your details.</p>
          </div>
          {/* Google login btn */}
          <div className='h-auto w-full md:w-2/3 py-2 flex justify-center items-center gap-2 border-2 border-black rounded cursor-pointer'>
            <FcGoogle className='text-3xl'/>
            <span className='text-lg font-poppins font-medium text-black'>Continue with Google</span>
          </div>
          {/* Input fields */}
          <div className='h-auto w-full md:w-2/3 flex flex-col gap-3'>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='email' className="text-black text-[16px] md:text-[18px] font-medium font-poppins">Email</label>
              <input id='email' type="email" placeholder='example@gmail.com' className='h-12 w-auto px-3 md:text-lg border-2 placeholder:text-gray-400 border-gray-300 rounded'/>
            </div>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='password' className="text-black text-[16px] md:text-[18px] font-medium font-poppins">Password</label>
              <input id='password' type="password" placeholder='********' className='h-12 w-auto px-3 md:text-lg border-2 placeholder:text-gray-400 border-gray-300 rounded'/>
              <button className="text-gray-700 text-[14px] md:text-[15px] pt-1 flex justify-end font-normal font-poppins cursor-pointer underline">Forgot password?</button>
            </div>
          </div>
          {/* Login btn and signup link */}
          <div className='h-auto w-full md:w-2/3 flex flex-col gap-1'>
            {/* Login btn */}
            <button className='w-full py-3 bg-black text-xl font-poppins font-medium text-white rounded hover:bg-gray-800'>Login</button>
            {/* Signup link */}
            <span onClick={handleRegisterBtn} className="text-gray-700 text-[14px] md:text-[15px] pt-1 flex justify-center font-normal font-poppins gap-1">Don't have an account?<button className='underline cursor-pointer'>Register here.</button></span>
          </div>        
        </div>
        {/* Logo for mobile only */}
        <div className="absolute h-16 w-screen flex md:hidden items-center top-0 opacity-95">
          <p className="text-black text-[30px] px-6 font-semibold font-poppins">{LogoName}</p>
        </div>
        {/* bottom text */}
        <div className="absolute h-16 md:w-3/4 flex  items-center bottom-0 opacity-95">
          <p className="text-gray-600 text-[8px] md:text-[10px] px-6 font-normal font-poppins">By proceeding, you agree to our <span className='underline cursor-pointer'>terms and conditions</span> and you consent to get calls, WhatsApp or SMS messages, including by automated means, from {AppName} and its affiliates to the number or email provided.</p>
        </div> 
      </div>     
    </div>
  )
}

export default LoginPage