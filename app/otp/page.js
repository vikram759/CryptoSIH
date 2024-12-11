
"use client"



import React from 'react'
import "./otp.css"
import { useState,useRef } from 'react'

const page = () => {
  
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);

  // Create an array of refs to reference each input field
  const inputRefs = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;

    // If the current input has a value, focus the next input
    if (value && index + 1 < inputs.length) {
      inputRefs.current[index + 1].focus(); // Move focus to next input
    }

    setInputs(updatedInputs);
  };
  
  
  
  return (
    <div className=' hero1 h-[100vh] w-[100vw] flex justify-center items-center '>
      <div className='flex flex-col gap-[90px] items-center relative bg-white min-h-[90vh] w-[35vw] rounded-[8px] ' >
         <div className='text-center text-black  font-bold text-[20px] mt-[60px] '>
            Enter the OTP
         </div>

       <div className='flex w-[80%] h-[60px] justify-center items-center gap-2'>
         {/* <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" />
         <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" />
         <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" />
         <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" />
         <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" />
         <input className='w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md' type="text" name="" id="" /> */}
{inputs.map((value, index) => (
        <input
          key={index}
          
       
          type="text"
          maxLength="1" // Limit input to 1 character
          value={value}
          onChange={(e) => handleChange(e, index)}
          ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
      
          className="w-[60px] h-[60px] bg-gray-200 border border-gray-600 rounded-md"
        />
      ))}

       </div>


       <div className='w-[80%] h-[40px] text-center bg-blue-600 hover:bg-blue-800 text-white p-2 text-submit rounded-md '>
        Submit
       </div>

       <div className='cursor-pointer'>
        Resend OTP
       </div>

      </div>
    </div>
  )
}

export default page
