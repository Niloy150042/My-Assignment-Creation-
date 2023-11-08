

const Faqsection = () => {
    return (
       <div className="lg:flex items-center  justify-between py-10 "  >
       <div>
        <p className="font-ubuntu text-4xl py-5 text-center" >Feel free to Ask !   </p>
        <img className="h-[300px]  rounded-2xl" src="https://i.ibb.co/vwgss9v/pexels-pixabay-221164.jpg" alt="" />
       </div>
         <div className="w-[50%]  " >


         <div className="collapse collapse-arrow  bg-base-200 ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-ubuntu font-bold">
   How can we reach you ?
  </div>
  <div className="collapse-content"> 
    <p>you can reach to us by typing   WWW.Tenasine.com  </p>
  </div>
</div>
<div className="collapse collapse-arrow  bg-base-200 ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-ubuntu font-bold">
    How you can create the assignment ?
  </div>
  <div className="collapse-content"> 
    <p>We can create an assignment by clicking the create and assignment and fill up the form with required input</p>
  </div>
</div>
<div className="collapse collapse-arrow  bg-base-200 ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-ubuntu font-bold">
    How you can submit an assignment?
  </div>
  <div className="collapse-content"> 
    <p>You can submit an assignment by clicking the submit button from my assignment page </p>
  </div>
</div>
<div className="collapse collapse-arrow  bg-base-200 ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-ubuntu font-bold">
    How you can mark our assignment?
  </div>
  <div className="collapse-content"> 
    <p>you can mark an assignment by clicking the mark button </p>
  </div>
</div>
<div className="collapse collapse-arrow  bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-ubuntu font-bold">
     How You will Update any assignment?
  </div>
  <div className="collapse-content"> 
    <p>You can update an assignment by clicking the update button besides the view assignment</p>
  </div>
</div>
            
            

</div>

            
       </div>
      
    );
};

export default Faqsection;