import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import EventCategory from "../EventCategory";
import Countdown from "../Countdown";
import Highlights from "../Highlights";
import { BodyGradient } from "./HomeElements";
import { EventsData } from "../EventCategory/EventsData";
import Footer from "../Footer";
import Members from "../Members/Members";
import GoogleMaps from "./../Maps/GoogleMap";
import Events from "../Events/Events";
import About from "../About";
import Nuv from "../Nuv";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Countdown />
      <About />
      {/* <EventCategory {...EventsData} /> */}
      <Events />
      <Highlights />
      <GoogleMaps />
      <ScrollToTop
        smooth
        top="1000"
        color="#570658"
        viewbox="5 5 5 5"
        height="20"
        width="20"
      />
      <Footer />
    </>
  );
};

export default Home;
