import { GrGroup } from "react-icons/Gr";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/Vsc";
import { MdAssignmentInd } from "react-icons/Md";
import { BiAlarmExclamation } from "react-icons/Bi";

const Ourfeature = () => {
  return (
    <div>
      <div className="text-center">
        <p className="font-ubuntu text-3xl ">Our features</p>
        <div>
          <p className="text-xl text-cyan-500 font-Lobstar ">
            we are providing the best features in our tenasine platform !{" "}
            <br></br>
            so stay with us and explore and enjoy the features{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 justify-center items-center py-10  gap-7" >
        <div  className="text-center font-ubuntu ">
         <p className="flex justify-center text-3xl" > <GrGroup  /></p>
          <p> we provide the awesome team work for your experience </p>
        </div>

        <div className="text-center font-ubuntu" >
     <p className="flex justify-center  text-3xl" >  <VscDebugBreakpointFunctionUnverified /></p>
       <p>We provide the wonderful functionality and wondeeful services</p>

        </div>

        <div className="text-center font-ubuntu" >
  <p className="text-3xl flex justify-center" >    <MdAssignmentInd/></p>
      <p>Wonderful Assignment you will get to explore!  </p>

        </div>

        <div className="text-center font-ubuntu"  >
            <p className="text-3xl flex justify-center" ><BiAlarmExclamation/></p>
            <p>Wonderful time management you will have and explore</p>
        </div>
      </div>
    </div>
  );
};

export default Ourfeature;
