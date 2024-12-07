import React from 'react';
import Navbar from '@/components/Navbar';

const page = ({params}) => {
  return (
    <>
   <Navbar bool1={false}/>
   
    <div className='m-auto  mt-[50px] h-[100vh] w-[40vw] shadow-lg bg-white rounded-lg'>
      <div className='text-lg p-2'>Transaction Details</div>

      <div className='flex justify-between mb-[50px] mt-[50px]'>
        <div className='bg-blue-800 w-[120px] h-[30px] text-white py-2 rounded-full text-center'>Bank Transfer</div>
        <div className='text-semibold p-2'>18th Nov, 2024</div>
       
      </div>
    

      <div className='w-[90%] m-auto mt-[10px] mb-[10px] h-[2px] border border-black'></div>

      <div className='m-auto text-center text-5xl'>$14.3</div>
      <div className='text-green-400 rounded-full  w-[120px] h-[30px] text-center m-auto'>
        Completed
      </div>

      <div className='w-[80%] mt-[60px] flex flex-col justify-around bg-gray-200 rounded-lg m-auto h-[300px]'>
         <div className='flex w-[80%] m-auto h-[60px] justify-between p-2 '>
            <div>
         <div className='text-sm text-gray-700'>Sender&apos;s ID</div>
         <div className='text-lg text-black'>jdwhfdjhfedjwnduf</div>
            </div>
            <div>
         <div className='text-sm text-gray-700'>Receiver&apos;s ID</div>
         <div className='text-lg text-black'>dnjenjejvnrjv</div>
            </div>
         
         </div>
         <div className='flex w-[80%] m-auto h-[60px] justify-between p-2 text-white '>
            <div>
         <div className='text-sm text-gray-700'>Tranaction ID</div>
         <div className='text-lg text-black'>{params.id}</div>
            </div>
            <div>
         <div className='text-sm text-gray-700'>Tranaction Fee</div>
         <div className='text-lg text-black'>$2</div>
            </div>
         
         </div>
        
      </div>
    </div>
    
    </>
  );
}

export default page;
