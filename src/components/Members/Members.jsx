import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { memberData } from "./list";
import "../../styles/style.css";
import MemCard from "./MemCard";
import {HeadRow, BackButton} from '../Nuv/NuvElements'
import {BiArrowBack} from 'react-icons/bi';

const Circle1 = require("../images/circles/Circle1.png");

export const styles = {

  wholeComponent:{
    backgroundColor:"#000015",
    paddingTop:"0px"
  },

  box: {
    padding: "1rem 4rem ",
  },

  col_card: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
    padding: "0.8rem",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  title: {
    color: " #f3f3f7",
    fontSize: "3rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
    position: "relative",
    padding: "2rem"
  },
  subtitle: {
    color: " #f3f3f7",
    fontSize: "2rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
    marginBottom: " 3rem",
  },
  card: {
    width: "21rem",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    backgroundColor: "#130735",
    boxShadow: "0 0 1rem 0 #d941c0",
    padding: "0rem",
  },
  card_title: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: " #f3f3f7",
  },
  card_subtitle: {
    fontFamily: "'Courier New' , monospace ",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: " #f3f3f7",
  },
  teamsSvgImg: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '6rem'
  }
};

const Members = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState(memberData);

  return (
    <div style={styles.wholeComponent}>
      <HeadRow>
        <BackButton onClick={() => navigate(-1)}><BiArrowBack /></BackButton>
      </HeadRow>
      <div style={styles.header}>
        <h2 style={styles.title}>
          <div style={{ position: 'relative', zIndex: 5}}>The Team</div>
          <img src={Circle1} className="circle-svgs" style={styles.teamsSvgImg} alt="circle-png"/>
        </h2>
      </div>
      <div style={styles.box} className="team-cat">
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Presidents</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 2).map((val, index) => {

            return (
              <MemCard data={val} key={index}/>
            );
          })}
        </Row>
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Student Coordinators</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 1).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} key={index}/>

            );
          })}
        </Row>

        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Committee Heads</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 3).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} key={index}/>

            );
          })}
        </Row>
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Faculty COORDINATORS</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 4).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} key={index}/>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Members;
