import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
