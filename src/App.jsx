import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import HowToWorks from './components/Features/HowToWorks'
import Integration from './components/Features/Integration'
import Industry from './components/Features/Industry'
import Testimonials from './components/Features/Testimonials'
import FAQ from './components/Features/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowToWorks/>
      <Integration/>
      <Industry/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
