import { useEffect, useState } from "react";
import Ourfeature from "./Ourfeature";
import Allcards from "./Allcards";


const Carts = () => {

    const [cards,setcards]=useState(null)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
   
    return (
       <div>
        <p  className="text-center font-Lobstar mt-6 text-4xl "> our assignment example</p>
        
         <div className="grid lg:grid-cols-3 gap-4 py-10 " >
            
             {
                
                cards?.map(card=> <Allcards key={card.id} card={card} ></Allcards> )
             }
        </div>
        <Ourfeature></Ourfeature>
       </div>
    );
};

export default Carts;