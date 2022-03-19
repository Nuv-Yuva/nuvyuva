import React from "react";
import './About.css';
import img from './about-img.png'

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img className="about-img" src={img}/>
      </div>
      <div className="about-content">
        <h2 className="about-heading">About</h2>
        <p className="about-info">
        Traditionally, the purpose of college education has been to create individuals who know everything about something. Unfortunately, this methodology also results in individuals who know little about anything else, except their subject. At NUV, we aim to create T-shaped personalities. Our students have working knowledge about a wide range of subjects and deep domain knowledge in one area of specialisation. We enable this through three synergies - Synergy of Theory & Practice, Synergy of Faculty & Industry, and Synergy of Youth & Experience.
        </p>
        <button className="about-btn" onClick={() => window.open("https://nuv.ac.in/", "_blank")}>Visit Website</button>
      </div>
    </div>
  );
};

export default About;
