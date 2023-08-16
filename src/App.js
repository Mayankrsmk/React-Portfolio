import About from "./components/About";
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
    <SocialHandles></SocialHandles>
   </div>
  )
}

export default App;
