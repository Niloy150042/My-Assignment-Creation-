import { useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "../provider/Authprovider";

const Register = () => {
  const { createuser } = useContext(Authcontext);

  const handlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, photo, name, password);

    if(password.length<6){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password cant be less then 6 character',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return 
    }

    createuser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire("Good job!", "Registration is  successful!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'something went wrong to registration',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      
      
        
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-lg h-[650px] shadow-2xl bg-base-100">
        <form onSubmit={handlesubmit} className="card-body">
          <div className="form-control">
            <p className="font-ubuntu text-2xl font-bold text-center mb-5 text-blue-600 ">
              {" "}
              Register into our platform
            </p>
            <label className="label">
              <span className="label-text font-ubuntu font-bold text-xl">
                Name :{" "}
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="email"
              className="  input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-ubuntu font-bold text-xl">
                Phtot URL :{" "}
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="  input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-ubuntu font-bold text-xl">
                Email :{" "}
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="  input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-textfont-ubuntu font-bold text-xl ">
                Password :{" "}
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Atleast 6 character"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="mb-3 flex font-ubuntu font-bold gap-2 justify-center  items-center">
            Already have an account ?
            <div className="flex items-center text-blue-600 text-xl">
              <Link to="/login"> Log-in </Link>
              <FiLogIn />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
