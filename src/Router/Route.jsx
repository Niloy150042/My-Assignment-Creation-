import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../Authentication/Register";
import Log_in from "../Authentication/Log_in";
import Banner from "../Banner/Banner";
import Ourfeature from "../components/Ourfeature";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children :[
         
         {
            path:'/register',
            element:<Register></Register>
         },
         {
            path:'/login',
            element:<Log_in></Log_in>
         },
         {
            path:'/',
            element:<Banner></Banner>
    
         },
         {
            path:'/',
            element:<Ourfeature></Ourfeature>
            
         }
       
      ]
      

    },
  ]);
  export default router