
import './App.css'
import Dashboardsection from './Component/Pages/Dashboardsection/Dashboardsection'
import Discover from './Component/Pages/Discover/Discover'
import FAQ from './Component/Pages/Faq/Faq'
import Footer from './Component/Pages/Footer/Footer'
import Hero from './Component/Pages/Hero/Hero'
import Navbar from './Component/Pages/Navbar/Navbar'
import Payment from './Component/Pages/Payment/Payment'
import Previousworks from './Component/Pages/Previous works/previousworks'
import ServiceSection from './Component/Pages/ServiceSection/ServiceSection'
import SubServices from './Component/Pages/SubServices/SubServices'
import TeamSection from './Component/Pages/TeamSection/TeamSection'

function App() {

  return (
    <>
   <Navbar />
   <Hero />

   <Payment />
   <ServiceSection />
  <Dashboardsection /> 
  <SubServices />
  <Discover/>
  <Previousworks />
   <TeamSection />
   <FAQ />
   <Footer />
    </>
     )
}

export default App
