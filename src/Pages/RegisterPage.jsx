import React, { useState } from 'react'
import { LogoName } from '../Constants/AppConstants'
import bgImage from '../assets/RegisterPage/bg-image.jpg'

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';

function RegisterPage() {
  const Navigate = useNavigate()

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [hideErr, setHideErr] = useState(true)

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Regex pattern for Nepali phone numbers
    const phoneRegex = /^(98[0-9]{8}|97[0-9]{8}|96[0-9]{8}|95[0-9]{8}|94[0-9]{8}|93[0-9]{8}|92[0-9]{8}|91[0-9]{8}|90[0-9]{8}|89[0-9]{8})$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (validatePhoneNumber(phoneNumber)) {
      setIsValid(true);
      setHideErr(true);
      console.log('Valid Phone Number');
      
      Navigate('/email-verification');
    } else {
      setIsValid(false);
      setHideErr(false);
    }
  }

  const handleLoginBtn = ()=>{
    Navigate('/login')
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
          <p className="text-white text-[28px] font-medium font-poppins">Craving Something Delicious? Sign Up and Get it Delivered Fast!</p>
          <div className="w-1/3 border border-white border-t-4"></div>
        </div>
        {/* Register as resturant*/}
        <button className="absolute py-2 bg-white/50 items-center bottom-2 right-4 backdrop-blur-lg opacity-65 cursor-pointer rounded-md hover:bg-black/30 transition-all duration-200 group">
          <p className="text-black text-[20px] px-6 font-semibold font-poppins group-hover:text-white">Register as resturant</p>
        </button>
      </div>
      {/* form section */}
      <div className='relative h-full w-full md:w-1/2 flex justify-center items-center'>
        {/* Form */}
        <div className='h-[70%] md:h-4/5 w-5/6 flex flex-col gap-8 justify-start items-center'>
          {/* Heading */}
          <div className='h-auto w-full flex flex-col justify-center items-center'>
            <p className="text-black text-[30px] md:text-[35px] px-6 font-semibold font-poppins">Get Started.</p>
            <p className="text-gray-700 text-[12px] md:text-[15px] px-6 font-normal font-poppins text-center">Register with google or enter your details.</p>
          </div>
          {/* Google login btn */}
          <div className='h-auto w-full md:w-2/3 py-2 flex justify-center items-center gap-2 border-2 border-black rounded cursor-pointer'>
            <FcGoogle className='text-3xl'/>
            <span className='text-lg font-poppins font-medium text-black'>Register with Google</span>
          </div>
          {/* Input fields */}
          <div className='h-auto w-full md:w-2/3 flex flex-col gap-3'>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='fullname' className="text-black text-[16px] md:text-[18px] font-medium font-poppins">Fullname</label>
              <input id='fullname' type="text" placeholder='John Doe' className='h-12 w-auto px-3 md:text-lg border-2 placeholder:text-gray-400 border-gray-300 rounded'/>
            </div>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='email' className="text-black text-[16px] md:text-[18px] font-medium font-poppins">Email</label>
              <input id='email' type="email" placeholder='example@gmail.com' className='h-12 w-auto px-3 md:text-lg border-2 placeholder:text-gray-400 border-gray-300 rounded'/>
            </div>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='phone' className="text-black text-[16px] md:text-[18px] font-medium font-poppins flex gap-2 items-end"> Phone {!hideErr ? <span className='text-[11px] text-rose-300'>*Please use valid phone number</span> : ''} </label>
              <div className='h-12 w-auto flex gap-2 items-center border-2 border-gray-300 font-poppins rounded focus-within:border-black'>
                <input type="text" value="+977 |" className='h-full w-16 pl-3 outline-none bg-white rounded' disabled />
                <input id='phone' type='tel' placeholder='9847000000' value={phoneNumber} onChange={handleInputChange} maxLength='10' className='phone-input h-full w-full outline-none rounded'/>
              </div>
            </div>
            <div className='h-auto w-full flex flex-col gap-1 justify-start'>
              <label htmlFor='password' className="text-black text-[16px] md:text-[18px] font-medium font-poppins">Password</label>
              <input id='password' type="password" placeholder='********' className='h-12 w-auto px-3 md:text-lg border-2 placeholder:text-gray-400 border-gray-300 rounded'/>
            </div>
          </div>
          {/* Login btn and signup link */}
          <div className='h-auto w-full md:w-2/3 flex flex-col gap-1'>
            {/* Login btn */}
            <button onClick={handleSubmit} className='w-full py-3 bg-black text-xl font-poppins font-medium text-white rounded hover:bg-gray-800'>Register</button>
            {/* Signup link */}
            <span onClick={handleLoginBtn} className="text-gray-700 text-[14px] md:text-[15px] pt-1 flex justify-center font-normal font-poppins gap-1">Already have an account?<button className='underline cursor-pointer'>Login here.</button></span>
          </div>        
        </div>
        {/* Logo for mobile only */}
        <div className="absolute h-16 w-screen flex md:hidden items-center top-0 opacity-95">
          <p className="text-black text-[30px] px-6 font-semibold font-poppins">{LogoName}</p>
        </div> 
      </div>   
    </div>
  )
}

export default RegisterPage