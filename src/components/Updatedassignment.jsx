import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Updatedassignment = () => {
    const assignments =useLoaderData()
    const {title,_id ,description , marks , image , difficulty, date,User}=assignments
  

    const handleupdate =(e)=>{
        e.preventDefault()
        const title =e.target.title.value
        const description =e.target.description.value
        const marks =e.target.marks.value
        const image =e.target.image.value
        const difficulty = e.target.difficulty.value
        const date = e.target.date.value
        const User=e.target.user.value
    
        const updatedassignment ={ title,description,marks,image,difficulty,date,User}
        console.log(updatedassignment);

        fetch(`http://localhost:5000/createdassignments1/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedassignment)
        })
        .then(res=>res.json()
        
        )
        .then (data=>{
            if(data.insertedId)
            {
                Swal.fire(
                    'Good job!',
                    'Assignment Updated successfuly!',
                    'success'
                  )
            }
        })

         


    }
   

     


    return (
        <div className="hero min-h-screen bg-base-400">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="card flex-shrink-0 lg:w-[800px] max-w-sm shadow-2xl bg-base-100">
              <p className="text-2xl font-ubuntu font-bold text-center">please Update Your assignment ! </p>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span  className="label-text font-ubuntu font-bold text-xl">Title :</span>
                </label>
                <input  name="title"  defaultValue={title}  type="text" placeholder="Title" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-ubuntu font-bold text-xl ">Description :</span>
                </label>
                
                <textarea className="border border-black rounded" name="description" id="" defaultValue={description} cols="10" rows="2"></textarea>
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-textfont-ubuntu font-bold text-xl ">Marks : </span>
                </label>
                <input type="text" placeholder="Title" name="marks" className="input input-bordered" defaultValue={marks}  required />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-ubuntu font-bold text-xl ">Image URL: </span>
                </label>
                <input type="text" placeholder="image" name="image" className="input input-bordered" defaultValue={image} required />
                
              </div>
            
              <label className="font-ubuntu font-bold text-xl" >Choose the difficulty level:</label>
      
      <select name="difficulty" defaultValue={difficulty} className="border border-black">
        <option value="easy">easy</option>
        <option value="medium">meidum</option>
        <option value="hard">hard</option>
      </select>
       
        <label className="mt-4 font-ubuntu font-bold text-xl " > choose date: </label>
       <input type="date" defaultValue={date} name="date" id="" />
      
       <div className="form-control">
                <label className="label">
                  <span  className="label-text font-ubuntu font-bold text-xl">Created by :</span>
                </label>
                <input type="text" defaultValue={User} placeholder="image" name="user" className="input input-bordered" required />
              </div>
        
      
           
              <div className="form-control mt-6">
                <button onClick={handleupdate} className="btn btn-primary">Update </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Updatedassignment;