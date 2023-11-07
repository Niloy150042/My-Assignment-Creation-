import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../Authentication/Register";
import Log_in from "../Authentication/Log_in";
import Banner from "../Banner/Banner";
import Ourfeature from "../components/Ourfeature";
import Createassignment from "../components/Createassignment";
import Allassignment from "../components/Allassignment";
import Privaterounte from "../privateroute/Privaterounte";
import Errorpage from "../components/Errorpage";



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
            
         },
         {
            path:'/createassignment',
            element:<Privaterounte><Createassignment></Createassignment></Privaterounte>,
         
         },
         {
            path:'/createdassignment',
            element:<Privaterounte><Allassignment></Allassignment></Privaterounte>,
            loader: ()=>fetch('http://localhost:5000/createdassignments')
         },
         {
            path:'/*',
            element:<Errorpage></Errorpage>

         }
       
      ]
      

    },
  ]);
  export default router