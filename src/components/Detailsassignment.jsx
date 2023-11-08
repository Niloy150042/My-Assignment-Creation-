import { useEffect, useState } from "react";
import { Link, useLoaderData,  useParams } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Detailsassignment = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
    const [assignment,setassignment]=useState([])
    const details= useLoaderData()
    const {_id} =useParams()

    useEffect(()=>{
        const assignments =details.find(assignment=>assignment._id == _id)
    setassignment(assignments)
 
    },[])


    const {title,picture,marks,difficulty}=assignment;

        return (
            <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[500px]" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-ubuntu  "> Title: {title}</h2>
              <p className="font-ubuntu" >Marks :{marks}</p>
              <p className="font-ubuntu font-semibold" >Difficulty :{difficulty}</p>
              <div className="card-actions justify-end">
          <Link to={`/myassignment`}>      <button className="btn btn-accent">Take assignment</button></Link>
              </div>
            </div>
          </div>
    );
};

export default Detailsassignment;