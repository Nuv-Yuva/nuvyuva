import React from "react";
import './About.css';
import img from './Group 94.svg'
import Brochure from "../brochure/brochure.pdf";
const Circle1 = require("../images/circles/Circle1.png");

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img className="about-img" src={img}/>
      </div>
          <div className="about-content">
            <div className="about-heading">
              <div>ABOUT</div>
              <img src={Circle1} className="about-circle-img1 circle-svgs" alt="circle-png"/>
            </div>
            <p className="about-info">
            NUV-YUVA is an inter-college festival that encourages students from various institutions all over gujarat to demonstrate their ability and talents in various fields and events. The event aims to bring together cultural, technical and sports aspects and merge them together with knowledge and enjoyment. And for the first time we are organising MUN and Hackathon.
            </p>
            <a href={Brochure} download="Brochure" target='_blank' className="download-link">
            <btn className="about-btn">BROCHURE</btn>
            </a>
        </div>
      </div>
  );
};

export default About;