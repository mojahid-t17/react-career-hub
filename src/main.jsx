
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import FeatureJobs from './components/FeatureJobs/FeatureJobs';

import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Root from './components/Root/Root';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
     
      {
        path: '/jobs',
        element: <FeatureJobs></FeatureJobs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/jobs.json')
      },
       {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/jobs.json')
       },
    ]
    
  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
