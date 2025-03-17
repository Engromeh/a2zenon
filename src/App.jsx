
import './App.css'
import Dashboardsection from './Component/Pages/Dashboardsection/Dashboardsection'
import Footer from './Component/Pages/Footer/Footer'
import Hero from './Component/Pages/Hero/Hero'
import Navbar from './Component/Pages/Navbar/Navbar'
import Payment from './Component/Pages/Payment/Payment'
import TeamSection from './Component/Pages/TeamSection/TeamSection'

function App() {

  return (
    <>
   <Navbar />
   <Hero />
   <Payment />
   <Dashboardsection />
   <TeamSection />
   <Footer />
    </>
     )
}

export default App
