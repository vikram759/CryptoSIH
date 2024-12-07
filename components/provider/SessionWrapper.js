"use client"
import { SessionProvider } from "next-auth/react"

import { useState,useEffect } from "react";
import { createContext } from "react";

export const AlertContext=createContext({})




const SessionWrapper = ({children}) => {
  
const [alerts, setalerts] = useState([])

const ls=typeof window!=='undefined'?window.localStorage:null;

useEffect(() => {
 if(ls&&ls.getItem('alert')){
  setalerts(JSON.parse(ls.getItem('alert')))
 }
 
  
}, [ls])

function clearAlert(){
 setalerts([]);
 saveCartProductsToStorage([]);
}

function removeAlert(id){
  setalerts(prev=>{
    const newp=prev.filter((v)=>v.transaction_id!==id);
    saveCartProductsToStorage(newp);
    return newp;
  })
}

function saveCartProductsToStorage(alerts){

  if(ls){
    ls.setItem('alert', JSON.stringify(alerts))
  }
}
function addToCart(transaction){
  setalerts(prevalert=>{

   const newalert=[...prevalert,{...transaction}];

   saveCartProductsToStorage( newalert)

   return newalert;

  })
  console.log(alerts);
}

  
  return (
    
    <SessionProvider>
      <AlertContext.Provider value={{alerts,setalerts,addToCart,removeAlert,clearAlert}}>

      {children} 
      </AlertContext.Provider>
      </SessionProvider>
  );
}

export default SessionWrapper;