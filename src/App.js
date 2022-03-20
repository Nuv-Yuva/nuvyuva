import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TechnicalEvents from "./components/Events/TechnicalEvents";
import Workshops from "./components/Events/Workshops";
import GamingEvents from "./components/Events/GamingEvents";
import CulturalEvents from "./components/Events/CulturalEvents";
import SportEvents from "./components/Events/SportEvents";


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/sports" element={ <SportEvents />} />
        <Route exact path="/cultural" element={ <CulturalEvents />} />
        <Route exact path="/gaming" element={ <GamingEvents />} />
        <Route exact path="/workshops" element={ <Workshops />} />
        <Route exact path="/technical" element={ <TechnicalEvents />} />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </>
  );
};

export default App;
