import { Link } from "react-router-dom";


const Assignmentcards = ({assignment}) => {

    const {picture,marks,title,difficulty,_id}=assignment
    return (
        <div className="card h-[500px]  bg-base-100 shadow-xl">
  <figure><img className="h-[500px] w-[500px]" src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-ubuntu "> Title :  {title}</h2>
   <p className="font-ubuntu" >Mark :{marks}</p>
   <p className="font-ubuntu font-semibold" >Difficulty :{difficulty}</p>
    <div className="card-actions justify-end">
     <Link to={`/assignmentdetails/${_id}`} > <button className="btn btn-accent">View assignment</button></Link>
     <Link to={`/updatedassignment/${_id}`} > <button className="btn btn-accent">Update assignment</button></Link>
    </div>
  </div>
</div>
    );
};

export default Assignmentcards;