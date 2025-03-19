import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import Payment from "../Component/Payment/Payment";
import ServiceSection from "../Component/ServiceSection/ServiceSection";
import DashboardSection from "../Component/Dashboardsection/Dashboardsection";
import SubServices from "../Component/SubServices/SubServices";
import Discover from "../Component/Discover/Discover";
import Previousworks from "../Component/Previous works/previousworks";
import FeaturesSection from "../Component/FeaturesSection/FeaturesSection";
import Tools from "../Component/Tools/Tools";
import TeamSection from "../Component/TeamSection/TeamSection";
import CustomerOpinions from "../Component/Customeropinions/Customeropinions";
import FAQ from "../Component/Faq/Faq";
import Footer from "../Component/Footer/Footer";
import Goals from "../Component/Goals/Goals";

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
      <Goals />
      <Tools />
      <TeamSection />
      <CustomerOpinions />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
