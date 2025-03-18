import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import Hero from "../Pages/Hero/Hero";
import Payment from "../Pages/Payment/Payment";
import ServiceSection from "../Pages/ServiceSection/ServiceSection";
import DashboardSection from "../Pages/Dashboardsection/Dashboardsection";
import SubServices from "../Pages/SubServices/SubServices";
import Discover from "../Pages/Discover/Discover";
import Previousworks from "../Pages/Previous works/previousworks";
import FeaturesSection from "../Pages/FeaturesSection/FeaturesSection";
import Tools from "../Pages/Tools/Tools";
import TeamSection from "../Pages/TeamSection/TeamSection";
import CustomerOpinions from "../Pages/Customeropinions/Customeropinions";
import FAQ from "../Pages/Faq/Faq";
import Footer from "../Pages/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Payment />
      <ServiceSection />
      <DashboardSection />
      <SubServices />
      <Discover />
      <Previousworks />
      <FeaturesSection />
      <Tools />
      <TeamSection />
      <CustomerOpinions />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
