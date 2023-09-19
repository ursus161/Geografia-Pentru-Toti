import Image from "next/image"
import astronaut from './photos/astronaut.png'
import copac from './photos/copac.png'
import carte from './photos/carte.png'
import continentele from './photos/continentele.png'
import incalzirea from  './photos/incalzire.png'
import fenomene from './photos/fenomene.png'
import heart from './photos/help.png'
export default function Home() {
  
  return (
    <div  >

      <div className="relative bottom-20">
        <Image className="relative top-44 left-20 pt-0 mt-0" src={carte} alt="Carte" width={100} height={90}/>
        <h1 className="titlu">Geografia Distractiva</h1>
        </div>
     
    <div className="container relative bottom-12 left-32 ">
        <div className="grid">
        
          <div className="sistemulsolar" >
            <Image className="relative top-9 left-16" src={astronaut} width={120} height={120} alt="Astronaut"/>
           <span className="titlucategorie mt-8">Sistemul Solar</span>
          </div>
          <div className="ecosistemeleterestre">
          <Image className="relative top-9 left-20" src={copac} width={80} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-11">Ecosistemele Terestre</span>
          </div>
          <div className="continentelepamantului">
          <Image className="pb-0 mb-0 relative left-12 top-4" src={continentele} width={150} height={90} alt="Astronaut"/>
          <span className="titlucategorie relative bottom-7">Continentele Pamantului</span>
          </div>
          <div className="fenomenenaturale">
          <Image className="relative left-16 ml-3 top-10" src={fenomene} width={100} height={90} alt="Astronaut"/>
          <span className="titlucategorie mt-5">Fenomene Naturale</span>
          </div>
          <div className="incalzireaglobala">
          <Image className="relative left-16 ml-2 top-6" src={incalzirea} width={100} height={80} alt="Astronaut"/>
          <span className="titlucategorie">Incalzariea Globala</span>
          </div>
          <div className="help">
          <Image className="relative left-14 ml-2 top-6 bottom-0" src={heart} width={130} height={90} alt="Astronaut"/>
         <p className=" relative bottom-4 "><span className="titlucategorie  ">Ajutor</span></p> 
          </div>
        </div>

       

        </div>
    </div>
  )
}
