import "./App.css";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Highlights from "./components/Highlights/Highlights";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Highlights />      
      <Footer />
    </>
  );
}

export default App;
