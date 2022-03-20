import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CulturalEvents from "./components/CulturalEvents/CulturalEvents";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App /> } />
        <Route exact path="/technical" element={ <TechnicalEvents /> } />
        <Route exact path="/workshops" element={ <Workshops /> } />
        <Route exact path="/gaming" element={ <GamingEvents /> } />
        <Route exact path="/cultural" element={ <CulturalEvents /> } />
        <Route exact path="/sports" element={ <SportEvents /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);