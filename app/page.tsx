'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import astronaut from './photos/astronaut.png'
import copac from './photos/copac.png'
import carte from './photos/carte.png'
import continentele from './photos/continentele.png'
import incalzirea from  './photos/incalzire.png'
import fenomene from './photos/fenomene.png'
import heart from './photos/help.png'
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
     <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-x-32 gap-y-20 max-sm:grid-cols-1 max-md:grid-cols-2  lg:grid-cols-3">
            <div className="sistemulsolar" >
          <Link href={language==='en'? "https://prezi.com/view/4OBVTnOMWZIxUyTIBlXi/": "https://prezi.com/view/Qp0IGCvwb2Y5pFsRXGgI"}>
            
          <div className="sistemulsolar" >
            

            <Image className="relative top-9 left-16" src={astronaut} width={120} height={120} alt="Astronaut"/>
           <span className="titlucategorie mt-8 overflow-hidden whitespace-nowrap "  style={{ fontSize: '18px' }}>{language==='en' ? "The Solar System" : "Sistemul Solar"}</span>
          </div>
          </Link>
          </div>

          <div className="ecosistemeleterestre">
          <Link href={language==='en'?"https://prezi.com/view/xtdgFuLOXEjA9QUWJLYp/":"https://prezi.com/view/amKXa7A77Vpi0uXRhNGg"}>         
          <Image className="relative top-9 left-20" src={copac} width={80} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-11 overflow-hidden whitespace-nowrap"  style={{ fontSize: '18px' }}>{language==='en' ? "The Planet's Ecosystems" : "Ecosistemele Planetei"}</span>
          </Link>
          </div>

          <div className="continentelepamantului">
          <Link href={language==='en'? "https://prezi.com/view/5yUzrCJX7tMd9V6j19go/":'https://prezi.com/view/oU0tWVwyVUm6RS6qupek' }>     
          <Image className="pb-0 mb-0 relative left-12 top-4" src={continentele} width={150} height={90} alt="Astronaut"/>
          <span className="titlucategorie relative bottom-12 overflow-hidden whitespace-nowrap" style={{ fontSize: '18px' }}>
            {language==='en' ? "Countries and Cities" : "Tari si Orase"}</span>
          </Link>
          </div>

          <Link href={language==='en' ? "https://prezi.com/view/aVufNDiMMPGaO0vAIRSD/":'https://prezi.com/view/l8A9oi0bjZqZNGx2JI2i'}>
          <div className="fenomenenaturale">
          <Image className="relative left-16 ml-3 top-10" src={fenomene} width={100} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-5 overflow-hidden whitespace-nowrap" style={{ fontSize: '18px' }}>{language==='en' ? "Natural Phenomena" : "Fenomene Naturale"}</span>
          </div>
          </Link>

                <Link href={language==='en'? "https://prezi.com/view/bsE6XqtUThwW2tak4DeE/" : 'https://prezi.com/view/yGLmnfqbSBaKetL1drLj'}>
          <div className="incalzireaglobala">
          <Image className="relative left-16 ml-2 top-6" src={incalzirea} width={100} height={80} alt="Astronaut"/>
          <span className="titlucategorie overflow-hidden whitespace-nowrap"  style={{ fontSize: '18px' }}>{language==='en' ? "Global Warming" : "Incalzirea Globala"}</span>
          </div>
          </Link>

          <div className="help">
            <Link href='about'>

          <Image className="relative left-14 ml-2 top-6 bottom-0" src={heart} width={130} height={90} alt="Astronaut"/>
         <p className=" relative bottom-4 "><span className="titlucategorie overflow-hidden whitespace-nowrap"  style={{ fontSize: '18px' }}>About Us</span></p> 
         </Link> 
          </div>
            </div>  
        </div>
    </div>

    </div>
  ) 
}
