'use client'
import Image from "next/image"
import carte from "./photos/carte.png"
import Grid from "./grid";
import Anglia from '../app/photos/Anglia.png' ;
import { useState } from "react";
import Romania from '../app/photos/Romania.png'
import { relative } from "path";
 

export default function Home() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ro');
    } else {
      setLanguage('en');
    }
  };
  return (
    <div className="mb-28">
    <div className="relative bottom-20  right-2 mb-6">
        <Image className="relative top-48 left-16 pt-0 mt-0" src={carte} alt="Carte" width={100} height={90}/>
        <h1 className="titlu relative  right-6 ">GeoSmart</h1>
      </div> 

      <div className="h-min fixed top-0 right-0 z-50">
      <button onClick={toggleLanguage} className="text-bold text-teal-300 flex flex-col z-9 content-center">
        <Image src={language === 'en' ? Anglia : Romania} alt={language ? "English" : "Romanian"} width={55} height={38} className="relative left-10"/>
        Toggle Language</button>
      </div>
     

     <div className="flex justify-center items-center relative top-24 ">
      <Grid/>
    </div>

    </div>
  ) 
}
