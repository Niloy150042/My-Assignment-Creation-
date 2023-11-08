import { useEffect, useState } from "react";
import Ourfeature from "./Ourfeature";
import Allcards from "./Allcards";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Carts = () => {

    useEffect(()=>{
        Aos.init({duration:3000})
    },[])

    const [cards,setcards]=useState(null)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
   
    return (
       <div >
        <p data-aos="fade-up"  className="text-center font-Lobstar mt-6 text-4xl "> our assignment example</p>
        
         <div className="grid lg:grid-cols-3 gap-4 py-10 "data-aos="fade-up" >
            
             {
                
                cards?.map(card=> <Allcards key={card.id} card={card} ></Allcards> )
             }
        </div>
        <Ourfeature></Ourfeature>
       </div>
    );
};

export default Carts;