import { useLoaderData } from "react-router-dom";
import Assignmentcards from "./Assignmentcards";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Allassignments = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    const allassignments =useLoaderData()

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-7" data-aos="fade-down" >
            {
                allassignments?.map(assignment=><Assignmentcards key={assignment._id } assignment={assignment} > </Assignmentcards>)

            }
            
        </div>
    );
};

export default Allassignments;