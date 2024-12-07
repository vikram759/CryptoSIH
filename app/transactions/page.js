"use client"

import React from 'react';
import { useState,useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import Link from 'next/link';

const Page= () => {
 
  const [transactions, setTransactions] = useState([]);
  const [count, setcount] = useState(0);
  // const [filter, setfilter] = useState({receiver:"",sender:"",amount:0,topo:false,time:0});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Build the query string
  //   const query = {};

  //   if (startDate) query.startDate = startDate;
  //   if (endDate) query.endDate = endDate;
  //   if (senderId) query.senderId = senderId;
  //   if (receiverId) query.receiverId = receiverId;
  //   if (minAmount) query.minAmount = minAmount;
  //   if (maxAmount) query.maxAmount = maxAmount;

  //   // Push to the URL with the query parameters
  //   router.push({
  //       pathname: '/transactions',
  //       query: query,
  //   });
//   useEffect(() => {
//     const { query } = router;
//     if (Object.keys(query).length > 0) {
//         fetch(`/api/transactions?${new URLSearchParams(query)}`)
//             .then((res) => res.json())
//             .then((data) => setTransactions(data))
//             .catch((error) => console.error('Error fetching transactions:', error));
//     }
// }, [router.query]);
  

  useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const response = await fetch('/transactions.json'); // Fetch directly from the public folder
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    fetchTransactions();
}, []);

 
  return (
    <>
    
    
<Navbar bool1={false}/>

    <div className='mb-[100px] text-lg font-semibold'>
        Transactions
    </div>

    <div className='w-[80vw] border h-[2px] border-gray-200'>

    </div>

    <div className="    w-[100vw] flex justify-center gap-3 ">
 <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

   <div className="text-gray-800 text-sm ml-2">TRANSACTIONS</div>

      <div className="text-xl text-black group-hover:text-blue-800">123.1 Million</div>

   </div>
   <Link href="/pendingtxs">
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2">PENDING TRANSACTIONS(24 hrs)</div>
    <div className="text-xl text-black group-hover:text-blue-800">121,000</div>

        </div>

</Link>
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2 ">LATEST TRANSACTIONS(24hrs)</div>
    <div className="text-xl text-black group-hover:text-blue-800">23,455</div>

        </div>
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2">AVG EXCHANGED AMOUNT(24hrs)</div>
    <div className="text-xl text-black group-hover:text-blue-800">$200,000</div>

        </div>
       

     </div>


       <div className='m-auto mt-[40px]  w-[90vw] min-h-[60vh] flex flex-col gap-[1px] bg-gray-100 rounded-[10px]'>
        <div className=' flex justify-between bg-white rounded-t-[10px] rounded-r-[10px] shadow-md mb-[1px] text-md p-5'>
           <div className='text-md'>
           More than 100 transactions found
            </div> 
          <div className='flex gap-[30px]'>
            <div>
              <div >Start time</div>
              <input value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} className='border-[2px] border-gray-200 w-[100px] h-[30px] rounded-[4px]' type="text" />
            </div>
            <div>
              <div value={endDate} onChange={(e)=>{setEndDate(e.target.value)}} >End time</div>
              <input  className='border-[2px] border-gray-200 w-[100px] h-[30px] rounded-[4px]' type="text" />
            </div>
            <div>
              <div value={minAmount} onChange={(e)=>{setMinAmount(e.target.value)}}>Start amount</div>
              <input  className='border-[2px] border-gray-200 w-[100px] h-[30px] rounded-[4px]' type="text" />
            </div>
            <div>
              <div value={maxAmount} onChange={(e)=>{setMaxAmount(e.target.value)}}>End amount</div>
              <input  className='border-[2px] border-gray-200 w-[100px] h-[30px] rounded-[4px]' type="text" />
            </div>

            <button className='bg-blue-600 flex justify-center items-center h-[30px] text-white p-2 rounded-[4px]'>
              Filter
            </button>
          </div>
           
            <div className='flex gap-2'>
              <div onClick={()=>{
              if(count>1){
              setcount(count-1)
              
              }

              //await fetchtop()
              //settransaction(aman)
              
              }} className='text-center bg-gray-100 w-[40px] h-[40px] p-2 rounded-sm'>-</div>
              <div>pages {count} of 10</div>
              <div onClick={()=>{
              if(count<10){
              setcount(count+1)
              
              }

              //await fetchtop()
              //settransaction(aman)
              
              }} className='text-center bg-gray-100 w-[40px] h-[40px] p-2 rounded-sm'>+</div>
            </div>
        </div>

        <div className='w-full  bg-white flex text-[13px] shadow-md font-bold '>
        <div className='w-[10%]'>Transaction ID</div>
        <div className='w-[10%]'>Status</div>
        <div className='w-[12.5%] text-center'>Method</div>
        <div className='w-[12.5%] text-blue-600'>Age</div>
        <div className='w-[12.5%]'>Sender&apos;s ID</div>
        <div className='w-[12.5%]'>Receiver&apos;s ID</div>\
        <div className='w-[15%] text-blue-600'>Amount</div>
        <div className='w-[15%] text-blue-600'>Transaction fee</div>

        </div>
      {transactions.map(item=>{

        return(<>
      <Link key={item.transaction_id} href={`/transaction/${item.transaction_id}`}>
     
        <div  className='w-full h-[35px] shadow-md bg-white flex text-[15px]  '>
        
    
      
        <div className='overflow-hidden w-[10%] h-[35px] text-blue-600 '>{item.transaction_id}</div>
      
        <div className=' w-[10%]  text-blue-600'>{item.status}</div>
        <div className=' w-[11%]   p-2  text-center rounded-[4px] m-auto'><div className='h-[25px] w-[120px] p-1 rounded-[10px] mb-[5px] bg-gray-300'>{item.method}</div></div>
        <div className=' w-[12.5%]  '>{item.age}</div>
        <div className=' w-[12.5%]  text-blue-600'>{item.senderID}</div>
        <div className=' w-[12.5%]  text-blue-600'>{item.receiverID}</div>
        <div className=' w-[15%]  '>{item.amount}</div>
        <div className=' w-[15%]  '>{item.transaction_fee}</div>

        </div>
 </Link>
        </>)
      })}
      



       </div>



<Footer/>
    </>
    
   
  );
}

export default Page;
