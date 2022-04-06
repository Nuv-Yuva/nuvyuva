import React from "react";
import { Carousel } from "3d-react-carousal";
import "./Events.css";
import tech from "../images/eventcategories/tech.webp";
import workshop from "../images/eventcategories/workshop.webp";
import gaming from "../images/eventcategories/gaming.webp";
import cultural from "../images/eventcategories/cultural.webp";
import sports from "../images/eventcategories/sports.webp";
import { Link } from "react-router-dom";
const Circle1 = require("../images/circles/Circle1.png");

const Events = () => {
  let slides = [
    <Link to="/technical">
      <img className="events-img" src={tech} alt="Technical Events" />
    </Link>,
    <Link to="/workshops">
      <img className="events-img" src={workshop} alt="Workshops" />
    </Link>,
    <Link to="/gaming">
      <img className="events-img" src={gaming} alt="Gaming Events" />
    </Link>,
    <Link to="/cultural">
      <img className="events-img" src={cultural} alt="Cultural Events" />{" "}
    </Link>,
    <Link to="/sports">
      <img className="events-img" src={sports} alt="Sports Events" />{" "}
    </Link>,
  ];

  return (
    <div className="events">
      <img src={Circle1} className="events-img1 circle-svgs" alt="circle-png" />
      <img src={Circle1} className="events-img2 circle-svgs" alt="circle-png" />
      <img src={Circle1} className="events-img3 circle-svgs" alt="circle-png" />
      <div className="event-heading">EVENTS</div>
      <div className="events-cards">
        <Carousel
          slides={slides}
          autoplay={true}
          interval={2000}
          arrows={true}
        />
      </div>
    </div>
  );
};

export default Events;
