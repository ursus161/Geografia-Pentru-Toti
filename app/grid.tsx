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

const Grid = () => {
    return ( 
     
        <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-x-32 gap-y-20 sm:grid-cols-1   lg:grid-cols-3">
            <div className="sistemulsolar" >
          <Link href="https://prezi.com/view/Qp0IGCvwb2Y5pFsRXGgI">
            
          <div className="sistemulsolar" >
            <Image className="relative top-9 left-16" src={astronaut} width={120} height={120} alt="Astronaut"/>
           <span className="titlucategorie mt-8">Sistemul Solar</span>
          </div>
          </Link>
          </div>

          <div className="ecosistemeleterestre">
          <Link href="https://prezi.com/view/amKXa7A77Vpi0uXRhNGg">         
          <Image className="relative top-9 left-20" src={copac} width={80} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-11">Ecosisteme</span>
          </Link>
          </div>

          <div className="continentelepamantului">
          <Link href='https://prezi.com/view/oU0tWVwyVUm6RS6qupek'>     
          <Image className="pb-0 mb-0 relative left-12 top-4" src={continentele} width={150} height={90} alt="Astronaut"/>
          <span className="titlucategorie relative bottom-7">Tari si orase</span>
          </Link>
          </div>

          <Link href='https://prezi.com/view/l8A9oi0bjZqZNGx2JI2i'>
          <div className="fenomenenaturale">
          <Image className="relative left-16 ml-3 top-10" src={fenomene} width={100} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-5">Fenomene Naturale</span>
          </div>
          </Link>

                <Link href='https://prezi.com/view/yGLmnfqbSBaKetL1drLj'>
          <div className="incalzireaglobala">
          <Image className="relative left-16 ml-2 top-6" src={incalzirea} width={100} height={80} alt="Astronaut"/>
          <span className="titlucategorie">Incalzirea Globala</span>
          </div>
          </Link>

          <div className="help">
            <Link href='about'>

          <Image className="relative left-14 ml-2 top-6 bottom-0" src={heart} width={130} height={90} alt="Astronaut"/>
         <p className=" relative bottom-4 "><span className="titlucategorie  ">About</span></p> 
         </Link> 
          </div>
            </div>
        </div>
    );
};

export default Grid;