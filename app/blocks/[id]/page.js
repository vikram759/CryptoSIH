"use client"

import { use } from 'react';


import React from 'react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

import Footer from '@/components/Footer';

const Page = ({params}) => {
    const { id } = use(params);
  const [selected, setselected] = useState("Overview")
  
    return (
    
    <>
    <Navbar bool1={false}/>
     <div className='w-[100vw] flex justify-start p-3 gap-3  h-[40px] mb-[20px]'>
        
        <div className='text-xl'>
           Block 
            </div> 
            

            <div className='text-gray-400 text-base'>

            #{id}
            </div>
        
        
      
     </div>


     <div className='flex justify-start gap-3 p-3 mb-5 ml-[10vw]'>
        <div onClick={()=>{setselected("Overview")}} className={selected==="Overview"?'p-2 text-white bg-blue-600 rounded-lg':'p-2 text-black bg-gray-300 rounded-lg'}>Overview</div>
        <div onClick={()=>{setselected("Blob")}} className={selected==="Blob"?'p-2 text-white bg-blue-600 rounded-lg':'p-2 text-black bg-gray-300 rounded-lg'}>Blob</div>
     </div>

   {selected==="Overview" &&( <div className='bg-white rounded-xl shadow-lg min-h-[60vh] m-auto w-[80vw]'>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
      Block Height:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
            {id}
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
      Status:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
            {id}
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
      Timestamp:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
        3 hrs ago (Dec-07-2024 06:46:47 AM +UTC)
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
       Transaction

        </div>

        <div className='text-[16px] w-[70%] p-2'>
           
181 transactions and 69 contract internal transactions in this block
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
      Withdrawls

        </div>

        <div className='text-[16px] w-[70%] p-2'>
          
16 withdrawals in this block

        </div>
       </div>
       <div className='w-full flex h-[40px] mt-5'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
     Hash:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
        0x0ec19983f0456f4aadcc932af169f4e87e47c04e5c261391116d0c0293659cad
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
     Prev Hash:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
          

        0x2c860b1cfe24999330046741ebfbf37163cac628f73d9d4f62dd03610c3726a4

        </div>
       </div>
       

     </div>)}

     {selected==="Blob" &&( <div className='bg-white rounded-xl shadow-lg min-h-[60vh] m-auto w-[80vw]'>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
      Blob tx:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
            3 transactions
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
        Blob Size:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
        640 KiB (5 blobs)
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
        Blob Utilisation:


        </div>

        <div className='text-[16px] w-[70%] p-2'>
     
5.00 Blobs
(83.33%)

        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
        Blob Gas Price:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
           
        0.00000000716782025 ETH
        </div>
       </div>
       <div className='w-full flex h-[40px]'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
        Blob Gas Used:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
          
        655,360

        </div>
       </div>
       <div className='w-full flex h-[40px] mt-5'>
        <div className='text-gray-500 font-medium text-[16px] w-[30%] p-2 my-2'>
        Blob Gas Limit:

        </div>

        <div className='text-[16px] w-[70%] p-2'>
       584,958
        </div>
       </div>
  
       

     </div>)}
    

    <Footer/>
    
    </>
    
    
    
  );
}

export default Page;
