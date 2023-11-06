import { Link } from "react-router-dom";


const Allcards = ({card}) => {
    const {picture,title}=card
    return (
       <Link to='/createassignment' >
        <div className="card gap-2 bg-base-100 shadow-xl image-full h-[300px] w-[400px] ">
        <figure><img className="h-[400px] w-[400px]" src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="font-ubuntu text-xl ">{title}</h2>
         
        </div>
      </div></Link>
    );
};

export default Allcards;