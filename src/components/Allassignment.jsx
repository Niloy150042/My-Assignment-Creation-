import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Createdcard from "./Createdcard";

const Allassignment = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, []);
 

  const Assignments = useLoaderData();

  const [assignments, setassignments] = useState(Assignments);

  console.log(assignments);
  return (
    <div
      className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 items-center"
      data-aos="fade-up"
    >
      {assignments?.map((assignment) => (
        <Createdcard
          key={assignment.id}
          assignment={assignment}
          assignments={assignments}
          setassignments={setassignments}
        ></Createdcard>
      ))}
    </div>
  );
 




};

export default Allassignment;
