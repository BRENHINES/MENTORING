import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route} from "react-router-dom/dist/index";

import "./fontawesome/css/all.min.css";
import "./assets/styles/tailwind.css";


// layouts
import Dashboard from "./views/admin/Dashboard";
import MentorDash from './views/admin/MentorDash';
// views without layouts


import Landing from "./views/Landing.js";

// Authentification
import Login from "./views/auth/Login.js";
import Register from "./views/auth/Register.js";

import Profile from './views/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      {/* add routes for authentification */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      {/* <Route path="/admin" element={<Admin />}> */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/MentorDash" element={<MentorDash />} /> 

      <Route path="/Profile" element={<Profile />} /> 
    </Route>
  
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


