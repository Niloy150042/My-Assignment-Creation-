
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineAppRegistration } from 'react-icons/Md';

import { Link } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";





const Log_in = () => {

  const {signIn}=useContext(Authcontext)
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handlegoogleclick =()=>{

    signInWithPopup(auth,provider)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const  handlesubmit =(e)=>{
         e.preventDefault()
         const email = e.target.email.value
         const password =e.target.password.value 
         if (/[A-Z]/.test(password)) {
          Swal.fire(
            'wrong !',
            'password should not be uppercase  character',
            'error'
          )
          return ;
        }
        if (/[!@#$%^&*]/.test(password)) {
          Swal.fire(
            'wrong !',
            'password should not be special  character',
            'error'
          )
          return ;
        }

         if(password.length<6){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'password cant be less then 6 character',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return
        }

         signIn (email,password)

       .then(result=>
        {
          console.log(result.user)
          if(result.user)
          {
            Swal.fire(
              'Good job!',
              'Log-in successful!',
              'success'
            )
          }
        }
          
        )
       .catch(error=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'log-in doesnot match with registration',
          footer: '<a href="">Why do I have this issue?</a>'
        })
       })


  }
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-lg h-[500px] shadow-2xl bg-base-100">
          
            <form onSubmit={handlesubmit} className="card-body">
                
              <div className="form-control">
                
                
         <p className="font-ubuntu text-2xl font-bold text-center mb-5 text-blue-600" > Log-in to our platform</p>
                <label className="label">
                  <span className="label-text font-ubuntu font-bold text-xl">Email :  </span>
                </label>
                <input type="email" name='email' placeholder="email" className="  input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-textfont-ubuntu font-bold text-xl ">Password :  </span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className='flex  gap-3  items-center justify-center font-ubuntu font-bold font-xl ' >
                Also Log-in with <Link onClick={handlegoogleclick} > <FcGoogle className='h-[30px] w-[40px]' ></FcGoogle></Link>
               
              </div>
              <div className="mb-3 flex font-ubuntu font-bold gap-5 justify-center  items-center" >
                  New to this platform ? 
                    <div  className="flex items-center text-blue-600 text-xl"  >
                    <Link to='/register'> Reg   </Link><MdOutlineAppRegistration/>  :
                    </div>
                  </div>
            </form>
          </div>
        </div>
    
    );
};

export default Log_in;