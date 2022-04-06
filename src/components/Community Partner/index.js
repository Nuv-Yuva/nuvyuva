import React from "react";
import Hackclub from "./images/Group 95.svg";
import SparkAR from "./images/Group 97.svg";
import CDS from "./images/Group 100.svg";
import GDC from "./images/Group 99.svg";
import MozNUV from "./images/Group 101.svg";
import Gameroo from "./images/Group 102.svg";
import Kanan from './images/Kanan.svg';
import { Container,row,col } from "react-bootstrap";
import "./CommunityPartner.css";

export default function communityPartner() {
  return (
    <div class="container-fluid">
      <div class="title">
        <h2>COMMUNITY PARTNER</h2>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={SparkAR} alt="Spark AR"/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={CDS} alt="Community of Data Science"/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={GDC} alt="Google Developer Club"/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={MozNUV} alt="Mozilla"/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={Gameroo} alt="Mozilla"/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={Hackclub} alt="Hackclub"/>
        </div>
      </div>
      <div class="title2">
        <h2>TITLE SPONSOR</h2>
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <img src={Kanan} alt="kanan" className="kanan"/>
        </div>
        </div>
      </div>
    </div>
  );
}
