import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Home from './Pages/Home/Home';
import MainLayout from './LayOut/MainLayout';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthContext/AuthProvider';
import SignIn from './Pages/SignIn/SignIn';
import JobDetails from './Pages/JobDetails/JobDetails';
import PrivateRoute from './Pages/PrivateRoute';
import ApplyJob from './Pages/ApplyJob/ApplyJob';
import MyApplications from './Pages/MyApplications/MyApplications';
import AddJob from './Pages/AddJob/AddJob';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import JobSearch from './Pages/JobSearch/JobSearch';
import ResumeUpload from './Pages/Resume/ResumeUpload';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/job search",
        element: <PrivateRoute><JobSearch></JobSearch></PrivateRoute>
      },
      {
        path:"/resume upload",
        element: <PrivateRoute> <ResumeUpload></ResumeUpload> </PrivateRoute>
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute> <ApplyJob></ApplyJob> </PrivateRoute>
      },
      {
        path: "/addJob",
        element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
      },
      {
        path: "/myApplications",
        element: <PrivateRoute><MyApplications></MyApplications> </PrivateRoute>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
