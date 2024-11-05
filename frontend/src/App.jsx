import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

import Home from './components/Home';
import Login from "./components/Login";
import ProfileDash from "./components/ProfileDash";
import Timetable from "./components/Timetable";


const router  = createBrowserRouter(
  [{path:"/", element: <Home/>},
  {path:"/login",element:<Login/>},
  {path:'/dashboard', element:<ProfileDash/>},
{path:'/dashboard/timetable', element:<Timetable/>}]

)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App