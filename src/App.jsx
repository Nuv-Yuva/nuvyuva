import "./App.css";
import Hero from "./component/Hero/hero";
import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
<Navbar/>
       <Hero/>
    </Router>
  );
}

export default App;