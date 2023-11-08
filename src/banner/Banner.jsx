import Carts from "../components/Carts";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Banner = () => {
  useEffect(()=>{
   
    Aos.init({duration:3000})

  },[])
    return (
 <div>
           <div className="hero min-h-screen bg-base-300 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://i.ibb.co/fSnrvLV/istockphoto-611301080-1024x1024.jpg" className="rounded-lg shadow-2xl h-[500px ] w-[600px] " />
    <div className="w-[60%]" data-aos="fade-left" >
      <h1 className="text-4xl font-ubuntu font-bold  lg:w-3/4 sm:w-full ">Create Awesome assignment in our suitable platform </h1>
      <p className="py-6 text-xl font-mono  ">An assignment is a piece of (academic) work or task. It provides opportunity for students to learn, practice and demonstrate they have achieved the learning goals. It provides the evidence for the teacher that the students have achieved the goals.</p>
      <button className="btn btn-accent text-white">explore Us </button>
    </div>
  </div>
</div>
    <Carts></Carts>
 </div>
    );
};

export default Banner;