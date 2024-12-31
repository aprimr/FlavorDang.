import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router";

const EmailVerification = () => {
  const email = "example@gmail.com";
  const Navigate = useNavigate();

  const handleBackBtn = () => {
    Navigate("/register");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-start justify-start bg-white">
      {/* Back Button */}
      <div className="h-20 w-screen flex items-center pl-8">
        <div onClick={handleBackBtn} className="h-10 w-10 flex items-center justify-center md:hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer" >
          <FiArrowLeft className="text-black text-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-md p-10 pt-8 w-full max-w-md mx-auto">
        <p className="text-2xl font-semibold font-poppins">Email Verification</p>
        <p className="text-gray-500 text-sm font-poppins mt-2">
          We have sent the verification code to {email}. Please check your
          email and verify your account.
        </p>

        {/* Verification Input */}
        <div className="mt-6">
          <p className="text-gray-600 font-poppins text-[15px] mb-2">
            Enter the 5-digit verification code:
          </p>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <input key={index} type="tel" maxLength="1" className="w-12 h-12 md:h-14 md:w-14 text-center text-2xl border-2 border-gray-300 rounded-md focus:ring-gray-800 focus:border-gray-800 outline-none" />
            ))}
          </div>
          <button type="button" className="mt-6 w-full px-4 py-3 text-xl font-poppins text-white bg-black rounded shadow-sm hover:bg-gray-800 ">
            Verify
          </button>
          <button className="w-full text-gray-600 font-poppins text-[20px] text-center mt-4 hover:underline">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
