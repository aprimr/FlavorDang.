import React from 'react'
import { useNavigate } from 'react-router';
import { LogoName } from '../Constants/AppConstants';

function PageNotFound() {

  const Navigate = useNavigate();

  const handleLogoClick = () => { 
    Navigate("/");
  }

  const handleGoToHome = () => {
    Navigate("/");
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-start justify-start bg-white">
      <div className="h-20 w-screen flex items-center pl-8">
        <div onClick={handleLogoClick} className="h-10 w-auto flex items-center justify-center cursor-pointer" >
          <button className="text-black text-[30px] font-semibold font-poppins">{LogoName}</button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-md p-10 pt-8 w-full max-w-md mx-auto">
        <p className="text-2xl font-semibold font-poppins">Page Not Found</p>
        <p className="text-gray-500 text-sm font-poppins mt-2">
          The page you are looking for is not available. Please go back to the home page. Please enter the correct URL.
        </p>
        <button onClick={handleGoToHome} className='text-gray-400 text-sm font-poppins mt-3 underline'>Go back to homepage</button>
      </div>
    </div>
  )
}

export default PageNotFound