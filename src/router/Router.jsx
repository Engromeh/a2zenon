import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Layout from "../Layout/Layout.jsx";
import Aboutus from "../Pages/Aboutus.jsx";
import Work from "../Pages/Work.jsx";
import Articles from "../Pages/Articles.jsx";
import Media from "../Component/Media/Media.jsx";
import Services from "../Pages/Services.jsx";
import Maps from "../Pages/Maps.jsx";
import ResponsiveIssues from "../Component/ResponsiveIssues/ResponsiveIssues.jsx";
import Markating from "../Pages/Markating.jsx";
import Hosting from "../Pages/Hosting.jsx";
import Design from "../Pages/Design.jsx";
import ServiceForm from "../Pages/ServiceForm.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/layout" element={<Layout />}>
        <Route path="/layout/Aboutus" element={<Aboutus />} />
        <Route path="/layout/Work" element={<Work />} />
        <Route path="/layout/Artical" element={<Articles />} />
        <Route path="/layout/Work/media" element={<Media/>} />
        <Route path="/layout/Service" element={<Services />} />
        <Route path="/layout/Maps" element={<Maps />} />       
         <Route path="/layout/Artical/issues" element={<ResponsiveIssues />} />
         <Route path="/layout/Markating" element={<Markating />} />       
         <Route path="/layout/Hosting" element={<Hosting />} />       
         <Route path="/layout/Design" element={<Design />} />  
         <Route path="/layout/Serviceform" element={<ServiceForm />} />       
     






      </Route>
    </>
  )
);

export default Router;
