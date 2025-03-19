import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
 import Home from "../Pages/Home.jsx"
import Layout from "../Layout/Layout.jsx";
import Aboutus from "../Pages/Aboutus.jsx";
  
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
   
  <Route path="/" element={<Home/>}/>
  <Route path="/layout" element={<Layout />}>
<Route path="/layout/Aboutus" element={<Aboutus />} />
     
  </Route>
  
   </>
    )
  );
  
  export default Router;
  