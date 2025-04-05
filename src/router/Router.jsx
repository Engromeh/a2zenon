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


      </Route>
    </>
  )
);

export default Router;
