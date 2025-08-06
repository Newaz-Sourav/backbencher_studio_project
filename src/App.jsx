import Backed_by_Sc from "./Components/Backed_by_Sc"
import FAQSection from "./Components/FAQSection"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NasalClipFeatures from "./Components/NasalClipFeatures"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Page4 from "./Components/Page4"
import PricingPlans from "./Components/PricingPlans"
import RealResults from "./Components/RealResults"
import Reviews from "./Components/Reviews"
import TestimonialSlider from "./Components/TestimonialSlider"
import TopNav from "./Components/TopNav"
import VideoCards from "./Components/VideoCards"


function App() {


  return (
   <div className="font-montserrat ">

    <TopNav />

    <Hero  />

    <div id="features" className="px-[112px]">
      <Page2 />
    </div>

    <div >
      <Page3 />
    </div>

    <div className="px-[112px]" >
      <NasalClipFeatures />
      <TestimonialSlider />
    </div>

    <div >
      <Page4 />
    </div>

    <div className="px-[112px]">
      <RealResults />
    </div>

    <VideoCards />

    <div className="px-[112px]" >
      <Reviews />
    </div>

    <Backed_by_Sc />

    <div className="px-[112px]" >
      <FAQSection />
      <PricingPlans  />
    </div>

    <Footer />

   </div>
  )
}

export default App