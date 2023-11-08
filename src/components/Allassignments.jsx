import { useLoaderData } from "react-router-dom";
import Assignmentcards from "./Assignmentcards";


const Allassignments = () => {
    const allassignments =useLoaderData()

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-7" >
            {
                allassignments?.map(assignment=><Assignmentcards key={assignment._id } assignment={assignment} > </Assignmentcards>)

            }
            
        </div>
    );
};

export default Allassignments;