import e from "cors";



const Createassignment = () => {
   
    const handlesubmit =(e)=>{
        e.preventDefault()
        const title =e.target.title.value
        const description =e.target.description.value
        const marks =e.target.marks.value
        const image =e.target.image.value
        const difficulty = e.target.difficulty.value
        const date = e.target.date.value
        console.log(title,description,marks,image,difficulty,date);
        
    }

    return (
        <div className="hero min-h-screen bg-base-400">
  <div className="hero-content flex-col lg:flex-row">
    
    <div className="card flex-shrink-0 lg:w-[800px] max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span  className="label-text font-ubuntu font-bold text-xl">Title :</span>
          </label>
          <input name="title" type="text" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-ubuntu font-bold text-xl ">Description :</span>
          </label>
          
          <textarea className="border border-black rounded" name="description" id="" cols="10" rows="2"></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-textfont-ubuntu font-bold text-xl ">Marks : </span>
          </label>
          <input type="text" placeholder="Title" name="marks" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-ubuntu font-bold text-xl ">Image URL: </span>
          </label>
          <input type="text" placeholder="image" name="image" className="input input-bordered" required />
          
        </div>
      
        <label className="font-ubuntu font-bold text-xl" >Choose the difficulty level:</label>

<select name="difficulty" className="border border-black">
  <option value="easy">easy</option>
  <option value="medium">meidum</option>
  <option value="hard">hard</option>
</select>
 
  <label className="mt-4 font-ubuntu font-bold text-xl " > choose date: </label>
 <input type="date" name="date" id="" />
     
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Createassignment;