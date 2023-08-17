import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialHandles from "./components/SocialHandles";

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>
    <SocialHandles></SocialHandles>
   </div>
  )
}

export default App;
