"use client"

import React from 'react';

import { useState,useEffect } from 'react';
import { AlertContext } from './provider/SessionWrapper';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';



// const Navbar = () => {
//   return (
//     <nav>
//     <div className="logo">
//         <h1>CryptTrail</h1>\
//     </div>
//     <div className='flex w-[400px] justify-around item-center'>
//         <a className='px-3 h-[20px] w-[80px] hover:text-blue-800' href="/">Home</a>
//         <a className='px-3 h-[20px] w-[80px] hover:text-blue-800' href="/#features">About</a>
//         <a className='px-3 h-[20px] w-[80px] hover:text-blue-800' href="/#about">Transaction</a>
//         <a className='px-3 h-[20px] w-[80px] hover:text-blue-800' href="#">Analytics</a>
//     </div>
// </nav>
//   );
// }

// export default Navbar;
import Link from "next/link";

const Navbar = ({bool1}) => {
  console.log("Navbar is rendered")
  const {removeAlert,alerts,addToCart,clearAlert}=useContext(AlertContext);
  
const [scrolled, setscrolled] = useState(false)

useEffect(() => {
  const onScroll=()=>{
    if(window.scrollY>50){
      setscrolled(true)
  
      // setactive("skills")

    }


    
  
    else{
      setscrolled(false)
      // setactive("home")
      
    }

  }
window.addEventListener("scroll",onScroll)

return ()=>{
  window.removeEventListener("scroll",onScroll)
}

}, [])

if(bool1){
  return (
    
  
    

    
    <nav className={scrolled?"bg-blue-800 min-h-[70px] mt-[23px] p-4 sticky transition-all duration-300 top-[0px]":"p-4 mt-[23px] min-h-[70px] transition-all duration-300 sticky top-[0px]"}>
         <div className="logo"> 
         <h1>CryptTrail</h1>
    </div>
      <ul className="flex justify-around gap-7 mr-10">
        {/* Home with Dropdown */}
        <li className="relative group">
          <div className='group'>
          <Link
            href="/"
            className="text-white hover:text-gray-300 relative group"
          >
            Home
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}
       
        </li>
        
        <li className="relative group">
          <div className='group'>
          <Link
            href="#"
            className="text-white hover:text-gray-300 relative group"
          >
            Transactions
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}
          <ul className="absolute left-0 hidden w-40 mt-2 bg-gray-700 rounded-lg shadow-lg group-hover:block group-focus-within:block">
            <li>
              <Link
                href="/transactions"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Post Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/flagged"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Suspicious Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/pendingtxs"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Pending Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/blocks"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
               Block Txns
              </Link>
            </li>

          </ul>
        </li>
        <li className="relative group">
          <div className='group'>
          <Link
            href="#"
            className="text-white hover:text-gray-300 relative group"
          >
            Alert
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
{alerts.length>=1&&(

          <div className='absolute top-[11px] left-0 text-center flex items-center h-[20px] w-[20px] rounded-full bg-red-600 text-white text-xs p-1'>
{alerts.length}

          </div>

)}
          {/* Dropdown Menu */}
          <div className='overflow-scroll h-[200px]  absolute left-0 hidden mt-2 rounded-lg  group-hover:flex group-hover:flex-col group-hover:gap-3 group-focus-within:flex-col group-focus-within:gap-3  group-focus-within:flex'>
          <ul className="h-max    w-40 mt-2 rounded-lg  flex flex-col gap-3">
        
           {alerts.map((item,index)=>{

              return(<>
              <Link href={`/flagged/${item.transaction_id}`} key={index}>
              
              <li  className='bg-white rounded-lg h-[90px] w-[150px] overflow-hidden'>
              {/* <Link
                href="#"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
             Transactionid -9834rjefijhnef
              </Link> */}

              <div className='text-sm p-2 text-red-500'>
                Transaction ID
              </div>
              <div className='text-black p-1 '> 
                 {item.transaction_id}
              </div>
            </li>
              </Link>
           
              </>)
            })}
            <li className="relative group">
          <div className='group'>
          <Link
            href="/aboutus"
            className="text-white hover:text-gray-300 relative group"
          >
           check suspicious
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}
     
        </li>
         
           
         
          </ul>

          </div>
        </li>
    

  
        {/* Static Links */}
     
      </ul>
    </nav>
  );

}
else{
  return (
    
  
    

    
    <nav className="bg-blue-800 min-h-[70px] mt-[23px] p-4 sticky transition-all duration-300 top-[0px]">
         <div className="logo"> 
         <h1>CryptTrail</h1>
    </div>
      <ul className="flex justify-around gap-7 mr-10">
        {/* Home with Dropdown */}
        <li className="relative group">
          <div className='group'>
          <Link
            href="/"
            className="text-white hover:text-gray-300 relative group"
          >
            Home
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}

        </li>
       
        <li className="relative group">
          <div className='group'>
          <Link
            href="#"
            className="text-white hover:text-gray-300 relative group"
          >
            Transactions
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}
          <ul className="absolute left-0 hidden w-40 mt-2 bg-gray-700 rounded-lg shadow-lg group-hover:block group-focus-within:block">
          <li>
              <Link
                href="/transactions"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Post Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/flagged"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Suspicious Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/pendingtxs"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                Previous Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/blocks"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
               Block Txs
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <div className='group'>
          <Link
            href="#"
            className="text-white hover:text-gray-300 relative group"
          >
            Alert
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>

          {alerts.length>=1&&(

<div className='absolute top-[11px] left-0 text-center flex items-center h-[20px] w-[20px] rounded-full bg-red-600 text-white text-xs p-1'>
{alerts.length}

</div>

)}
          {/* Dropdown Menu */}
          <div className='overflow-scroll h-[200px]  absolute left-0 hidden mt-2 rounded-lg  group-hover:flex group-hover:flex-col group-hover:gap-3 group-focus-within:flex-col group-focus-within:gap-3  group-focus-within:flex'>
          <ul className="h-max    w-40 mt-2 rounded-lg  flex flex-col gap-3">
        
           {alerts.map((item,index)=>{

              return(<>
              <Link href={`/flagged/${item.transaction_id}`} key={index}>
              
              <li  className='bg-white rounded-lg h-[90px] w-[150px] overflow-hidden'>
              {/* <Link
                href="#"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white"
              >
             Transactionid -9834rjefijhnef
              </Link> */}

              <div className='text-sm p-2 text-red-500'>
                Transaction ID
              </div>
              <div className='text-black p-1 '> 
                 {item.transaction_id}
              </div>
            </li>
              </Link>
           
              </>)
            })}
            
         
           
         
          </ul>

          </div>
        </li>

        <li className="relative group">
          <div className='group'>
          <Link
            href="/aboutus"
            className="text-white hover:text-gray-300 relative group"
          >
            Check suspicious transactions here
            {/* Underline effect */}
          </Link>
            <span className="absolute mt-[40px] left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>

          </div>
          {/* Dropdown Menu */}
      
        </li>

     

        {/* Static Links */}
     
      </ul>
    </nav>
  );

}
};

export default Navbar;
