
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";






const Layout = () => {
    return (
        <div className="max-w-[1330px] mx-auto " > 

            <Navbar></Navbar>
    
        
         <div>
            
         <Outlet></Outlet>
         </div>

       <Footer></Footer>
         
          
        
      

        </div>
    );
};

export default Layout;