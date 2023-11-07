import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";


const Privaterounte = ({children}) => {
    const {user}=useContext(Authcontext)
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'} ></Navigate>
    );
};

export default Privaterounte;