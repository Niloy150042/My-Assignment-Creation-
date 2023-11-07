

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Createdcard from "./Createdcard";




const Allassignment = () => {


   
    const Assignments = useLoaderData()

    const [assignments,setassignments]=useState(Assignments)


   

   

    console.log(assignments);
    return (
        <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 items-center" >
             {
                assignments?.map(assignment=><Createdcard key={assignment.id} assignment={assignment} assignments={assignments} setassignments={setassignments} ></Createdcard>)
             }
        </div>

    );

    
    


};

export default Allassignment;