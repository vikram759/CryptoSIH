import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex bg-gray-100 text-black min-h-[300px]">
    <div className='w-[30%] flex flex-col justify-between min-h-[300px]'>
        <div>
            <div className='font-bold'>Community</div>
            <ul className='flex justify-center gap-4'>
                <li><a href="https://www.instagram.com/Binance/" target="_self"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
</svg></a></li>
                <li><a href="https://www.instagram.com/Binance/" target="_self"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
</svg></a></li>
                <li><a href="https://www.binance.com/en-IN/community" target="_self"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg></a></li>
            </ul>
        </div>
    <p>&copy; 2024 Blockchain Tracker. All rights reserved. | <a href="#">Privacy Policy</a></p>
    

</div>
<div className='flex justify-around w-[70%]'>

<div>
<div className='font-semibold text-sm mb-2 pr-[74px]'>Company</div>
<ul className='text-sm font-light flex flex-col items-start gap-2'>
      
<li>
    <Link href="/aboutus">
    About
    </Link>
    </li>
    <li>Contact</li>
    <li>Services</li>
    <li>Careers</li>
    <li>Privacy</li>
    <li>Terms and Conditions</li>
</ul>

</div>
<div>
<div className='font-semibold text-sm mb-2 pr-[74px]'>Services</div>
<ul className='text-sm font-light flex flex-col items-start gap-2'>
    <li>API</li>
    <li>Transaction Records</li>
    <li>Add transactions</li>
   
    <li>Trace transactions</li>

</ul>

</div>
<div>
<div className='font-semibold text-sm mb-2 pr-[74px]'>Products</div>
<ul className='text-sm font-light flex flex-col items-start gap-2'>
    
   
    <li>
    <Link href="/aboutus">
    About
    </Link>
    </li>
    <li>Contact</li>
    <li>Services</li>
    <li>Careers</li>
    <li>Privacy</li>
    <li>Terms and Conditions</li>
</ul>

</div>

</div>
</footer>
  );
}

export default Footer;
