import Image from "next/image"
import carte from "./photos/carte.png"
import Grid from "./grid";

export default function Home() {
  
  return (
    <div className="mb-28">
    <div className="relative bottom-20 left-6 mb-6">
        <Image className="relative top-48 left-16 pt-0 mt-0" src={carte} alt="Carte" width={100} height={90}/>
        <h1 className="titlu relative right-2 ">GeoSmart</h1>
      </div>
     
     <div className="flex justify-center items-center  relative top-24 ">
     
      <Grid/>
    </div>
    </div>
  ) 
}
