import { useContext } from "react";
import { Link} from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";

import Swal from "sweetalert2";
import picture from  "./niloy_profile_pic.jpg"





const Navbar = () => {

  const {user,logout}=useContext(Authcontext)
   
  const  handlelogout =()=>{
    logout()
    .then(result=>{
       console.log(result);
        Swal.fire(
          'Good job!',
          'Log-out successful!',
          'success'
        )

      
    
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

const navitems = <>

<Link to='/' ><li className=" font-ubuntu font-bold " ><a>Home </a></li></Link>
<Link to='/createassignment' ><li className=" font-ubuntu font-bold " ><a>Create Assignment </a></li></Link>
<Link to='/createdassignment' ><li className=" font-ubuntu font-bold " ><a>Created Assignments </a></li></Link>
<Link to='/allassignment' ><li className=" font-ubuntu font-bold " ><a>All Assignments </a></li></Link>
<Link to='/myassignment' ><li className=" font-ubuntu font-bold " ><a>My Assignments </a></li></Link>



    
    </>
    return (
       <div>
         <div className="navbar bg-base-200 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52 ">
                {navitems}
            
            </ul>
          </div>
          <div className="flex items-center">
            <img className="h-[50px] rounded-se-2xl" src="https://i.ibb.co/nzHPCbL/righting-check-logo-design-template-7dc687a42c30ed98e888feaa3e67f8a4-screen.jpg" alt="" />
          <p className=" ml-3 font-bold  normal-case text-4xl font-Lobstar ">Tenasine</p> 
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navitems}

          </ul>
        </div>
        <div className="navbar-end gap-4 sm:invisible lg:visible flex flex-wrap  ">
          <Link to='/register' ><a className="btn btn-success "> Register </a></Link>
       
         {
          user?<button onClick={handlelogout} className="btn btn-accent" > Log-out</button> : <Link to='/login' ><a className="btn btn-success ">Log-in</a></Link>
         }

         {
          user?<img className="h-[40px] rounded-full" src={picture}></img>:<img src="https://i.ibb.co/s9mBpPh/download-3.jpg" className="h-[50px]"></img>

         }
      

        </div>
      </div>
    
       </div>
    );
};

export default Navbar;