"use client"

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import "./log.css"

const Page= () => {
  
  
  
    const {
        register,
        handleSubmit,
        setError,                                 //Take a setError function here
        formState: { errors,isSubmitting },
      } = useForm();

      const onSubmit = async(data) => {
        // await delay(2) //simulating network delay
    
        // if(data.username!="Shubam"){
        
        //   setError("myform",{message:"Your form is not in good order because username is invalid"})
        // }
        //  if(data.username=="Harman"){
          
        //   setError("blocked",{message:"Sorry this user is blocked"})
        // }
        
        // let r=await fetch("http://localhost:3000/",{method:"POST", headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
        // let res=await r.text()
          console.log(data)
       
      }
  
    return (
    <div className=' hero1 h-[100vh] w-[100vw] flex justify-center items-center '>
        

        <div className='relative bg-white min-h-[90vh] w-[35vw] rounded-[8px] '>

            <div className='text-xl font-bold text-center w-full'>Sign In</div>
            <div className='text-md  text-center w-full mt-[30px]'>Welcome back to Cryptrail!</div>

           <form action="
           "   onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>

            <div className="flex flex-col w-full mt-[20px] ml-[20px]">
               <div className='font-bold text-[12px]'>Email</div>
               <input placeholder='email' {...register("email", { required:{value:true,message:"This field is Required"} , minLength:{value:3,message:"Min length is 3"}
          ,maxLength:{value:20,message:"Max length is 20"}})} type="text" className="w-[80%] h-[40px] mt-[10px] border rounded-lg border-gray-400"   />
           
           {errors.email&& <div className='text-red-500'>{errors.email.message}</div>}
            </div>
            <div className="flex flex-col w-full mt-[20px] ml-[20px]">
               <div className='font-bold text-[12px]'>Password</div>
               <input placeholder='password' {...register("password",{ required:{value:true,message:"This field is Required"} , minLength:{value:7,message:"Min length is 7"}})} className="w-[80%] h-[40px] mt-[10px] border rounded-lg border-gray-400"  type="password" />
               {errors.password&& <div className='text-red-500'>{errors.password.message}</div>}
           
            </div>

            {/* <div disabled={isSubmitting}  {...register("example")} type="submit" value="submit" className='bg-blue-600 hover:bg-blue-800 text-white p-2 text-center m-auto w-[90%] mt-[90px] rounded-lg'>
                Login
            
            
            </div> */}
            <input className='bg-blue-600 hover:bg-blue-800 text-white p-2 text-center  w-[90%] mt-[90px] rounded-lg' disabled={isSubmitting}  {...register("example")} type="submit" value="login"/>
           </form>



            <div className='w-full flex justify-between mt-[40px] '>
                <div className='text-blue-400 ml-[10px]'>Forgot Password</div>
                <div className='mr-[10px]'>Doesnt Have a account? <Link href="/signup" className='text-blue-400'>Create one</Link></div>
            </div>
        
        <div className='flex flex-wrap gap-5 absolute bottom-8 text-gray-500'>
            <div>&copy; Cryptotrail</div>
            <div className="text-gray-200">|</div>
            <div>Privacy</div>
            <div className="text-gray-200">|</div>
            <div>About us</div>
            <div className="text-gray-200">|</div>
            <div>Contact</div>
            <div className="text-gray-200">|</div>
            <div>Services</div>
            <div className="text-gray-200">|</div>
            
        </div>
        </div>


      
    </div>
  );
}

export default Page;
