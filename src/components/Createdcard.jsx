import { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../provider/Authprovider";


const Createdcard = ({assignment ,assignments,setassignments}) => {
    const {user}=useContext(Authcontext)

    const {title,image,_id,description,User}=assignment

   
        //     deleting operation 
        const handledelete =_id=>{
        
           if(user.email==User){
            fetch(`http://localhost:5000/createdassignments/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0)
                {
                    Swal.fire({
                        title: "Good job!",
                        text: " users matched ! assignment deleted successfully",
                        icon: "success"
                      });
                      const remainingassignment = assignments.filter(assignment=>assignment._id !== _id);
                      setassignments(remainingassignment)
    
                }
            })
           }
           else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "users doesnt match ",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
           }
          
        }

        // Updating operation 

      
    
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-[380px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-ubuntu font-bold "> Title: {title}</h2>
    <p className="font-ubuntu" >{description}</p>
   <p className="font-ubuntu font-semibold " >created by {User}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handledelete(_id)} className="btn btn-accent">Delete</button>
     
    </div>
  </div>
</div>
    );
};

export default Createdcard;