import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TechnicalEvents from "./components/Events/subpages/TechnicalEvents";
import Workshops from "./components/Events/subpages/Workshops";
import GamingEvents from "./components/Events/subpages/GamingEvents";
import CulturalEvents from "./components/Events/subpages/CulturalEvents";
import SportEvents from "./components/Events/subpages/SportEvents";
import Nuv from "./components/Nuv";
import Members from "./components/Members/Members";
import Sponsor from "./components/Sponsor/sponsor";
const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route exact path="/sports" element={ <SportEvents />} />
        <Route exact path="/cultural" element={ <CulturalEvents />} />
        <Route exact path="/gaming" element={ <GamingEvents />} />
        <Route exact path="/workshops" element={ <Workshops />} />
        <Route exact path="/technical" element={ <TechnicalEvents />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/team" element={<Members />} />
        <Route exact path="/nuv" element={<Nuv />} />
        <Route exact path="/sponsor" element={<Sponsor />}/>
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
