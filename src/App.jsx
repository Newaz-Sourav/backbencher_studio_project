import Hero from "./Components/Hero"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Page4 from "./Components/Page4"
import TopNav from "./Components/TopNav"


function App() {


  return (
   <div className="flex flex-justify-center items-center w-full flex-col">
     <TopNav />
     <Hero></Hero>
     <Page2></Page2>
     <Page3></Page3>
     <Page4></Page4>
   </div>
  )
}

export default App
