import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="" >
            <div className=" flex justify-center text-center py-7">
           <img  className="h-[400px]" src="https://i.ibb.co/Nx2ZfmB/pngtree-error-404-page-not-found-png-image-6681621.jpg" alt="" />
          
        </div>
       <Link to={`/`} className="flex justify-center py-4" > <button className="btn btn-accent text-center" >Go home</button></Link>
        </div>
    );
};

export default Errorpage;