"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertContext } from "@/components/provider/SessionWrapper";
import { useContext } from "react";
import  { v4 as uuidv4 } from 'uuid';
import "./globals.css"
export default function Home() {

    return (
    <>
    <Navbar bool1={true}/>
     <div className="hero  video pb-52">
        <h1 className="">Welcome to P2P Transaction Tracker</h1>
        <video autoPlay={true} loop muted>
    <source src="/12421669_3840_2160_30fps.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
        <p>Your go-to platform for tracking and analyzing P2P and Blockchain transactions.</p>
        <Link href="/crypta" className="bg-white px-5 flex justify-center items-center text-center text-sm text-blue-600  h-[50px] rounded-md mt-[10px] hover:bg-gray-200">Explore CryptTrail </Link >
    </div>

       <div className=" bg-gray-200   w-[100vw] flex justify-center gap-3 ">
 <Link href="/transactions">
 <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

   <div className="text-gray-800 text-sm ml-2">TRANSACTIONS</div>

      <div className="text-xl text-black group-hover:text-blue-800">123.1 Million</div>

   </div>
 
 </Link>

 <Link href="/flagged">
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2">FLAGGED SUSPICIOUS</div>
    <div className="text-xl text-black group-hover:text-blue-800">123.1 Million</div>

        </div>
 
 </Link>
 
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2 ">MARKET CAP</div>
    <div className="text-xl text-black group-hover:text-blue-800">$14 Billion</div>

        </div>
    <div className="shadow-lg group hover:shadow-xl flex flex-col items-start justify-center gap-3 rounded-[10px]  h-[100px] w-[300px] bg-white">

        <div className="text-gray-800 text-sm ml-2">ILLEGAL TRANSACTION DETECTED</div>
    <div className="text-xl text-black group-hover:text-blue-800">$120,000</div>

        </div>
       

     </div>

    <div className="features" id="features">
        <h2 className="font-bold text-3xl mb-2">Platform Features</h2>
        <div className="feature-grid">
            <div className="feature-item flex flex-col justify-around items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1425/1425312.png" alt="Blockchain Icon"/>
                <h3><Link className="text-blue-600 font-bold text-xl hover:text-blue-800" href="/cryptrail">Blockchain Explorer</Link></h3> 
                <p>Track transactions across various blockchain networks with real-time updates.</p>
            </div>
            {/* <div className="feature-item flex flex-col justify-around items-center">
                <img src="/icons8-crypto-100.png" alt="Blockchain Icon"/>
                <h3><Link className="text-blue-600 font-bold text-xl hover:text-blue-800" href="/transaction">See Previous Logs</Link></h3> 
                <p>See the record of previous transactions.</p>
            </div> */}
            <div className="feature-item flex flex-col justify-around items-center">
                <img src="/icons8-cdn-100.png" alt="Blockchain Icon"/>
                <h3><Link className="text-blue-600 font-bold text-xl hover:text-blue-800" href="/cryptrail">Delete Logs</Link></h3> 
                <p>You can delete any previous log.</p>
            </div>
            <div className="feature-item flex flex-col justify-around items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/2020/2020494.png" alt="Crypto Icon"/>
                <h3><Link className="text-blue-600 font-bold text-xl hover:text-blue-800" href="/crypta">CryptTrail Prototype</Link></h3>
                <p>Submit and monitor transactions in a user-friendly blockchain tracking system.</p>
            </div>
            <div className="feature-item  flex flex-col justify-around items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/2089/2089027.png" alt="Analytics Icon"/>
                <h3 className="font-bold text-xl">Advanced Analytics</h3>
                <p>Get insights into blockchain trends and transaction patterns.</p>
            </div>
           
            <div className="feature-item flex flex-col justify-around items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4204/4204814.png" alt="Suspicious Activity Icon"/>
                <h3><Link className="text-blue-600 font-bold text-xl hover:text-blue-800" href="/flagged">Suspicious Activity Alert</Link></h3>
                <p>Receive alerts for transactions flagged as suspicious, helping to mitigate fraudulent activities.</p>
            </div>

            <div className="feature-item flex flex-col justify-around items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041856.png" alt="Traceability Icon"/>
                <h3 className="font-bold text-xl">Transaction Traceability</h3>
                <p>Trace peer-to-peer crypto transactions to uncover beneficiary details and transaction origins.</p>
            </div>
            <div className="feature-item flex flex-col justify-around items-center">
                <img src="https://cdn4.vectorstock.com/i/1000x1000/16/48/growing-graph-colored-outline-icon-on-dark-vector-21381648.jpg" alt="Reporting Icon"/>
                <h3 className="font-bold text-xl">Comprehensive Reporting</h3>
                <p>Generate detailed reports on transaction histories, beneficiaries, and usage patterns for better analysis.</p>
            </div>
        </div>
    </div>


    <div className="about" id="about">
        <h2 className="font-bold text-3xl mb-2">About Blockchain Tracker</h2>
        <p>Blockchain Tracker is a platform designed to help users track and analyze blockchain transactions in real time, providing crucial data for better decision-making.</p>
    </div>
   
   <div>

    <Link href="/login" className='text-blue-500 cursor-not-allowed'>
Go to the link

</Link>

   </div>
   

    <Footer/>
    </>
  );
}
