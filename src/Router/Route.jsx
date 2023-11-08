import { createBrowserRouter } from "react-router-dom";
import Log_in from "../Authentication/Log_in";
import Register from "../Authentication/Register";
import Banner from "../Banner/Banner";
import Layout from "../Layout/Layout";
import Allassignment from "../components/Allassignment";
import Allassignments from "../components/Allassignments";
import Createassignment from "../components/Createassignment";
import Detailsassignment from "../components/Detailsassignment";
import Errorpage from "../components/Errorpage";
import Myassignment from "../components/Myassignment";
import Ourfeature from "../components/Ourfeature";
import Updatedassignment from "../components/Updatedassignment";
import Privaterounte from "../privateroute/Privaterounte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Log_in></Log_in>,
      },
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/",
        element: <Ourfeature></Ourfeature>,
      },
      {
        path: "/createassignment",
        element: (
          <Privaterounte>
            <Createassignment></Createassignment>
          </Privaterounte>
        ),
      },
      {
        path: "/createdassignment",
        element: (
          <Privaterounte>
            <Allassignment></Allassignment>
          </Privaterounte>
        ),
        loader: () =>
          fetch(
            "https://assignment-11-server-sigma-olive.vercel.app/createdassignments"
          ),
      },
      {
        path: "/*",
        element: <Errorpage></Errorpage>,
      },
      {
        path: "/updatedassignment/:id",
        element: (
          <Privaterounte>
            <Updatedassignment></Updatedassignment>
          </Privaterounte>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-sigma-olive.vercel.app/allassignment/${params.id}`
          ),
      },
      {
        path: "/allassignment",
        element: <Allassignments></Allassignments>,
        loader: () =>
          fetch(
            "https://assignment-11-server-sigma-olive.vercel.app/allassignment"
          ),
      },
      {
        path: "/assignmentdetails/:_id",
        element: <Detailsassignment></Detailsassignment>,
        loader: () =>
          fetch(
            "https://assignment-11-server-sigma-olive.vercel.app/allassignment"
          ),
      },
      {
        path: "/myassignment",
        element: <Privaterounte><Myassignment></Myassignment></Privaterounte>,
      },
    ],
  },
]);
export default router;
