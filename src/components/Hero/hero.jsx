import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

import "./heroElement.css";
import logo from "./logo.png";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 06, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundColor: 0x00010F,
          color1: 0x39063A,
          color2: 0xb40a98,
          colorMode: "lerp",
          wingSpan: 30.00,
          separation: 40.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="Countdown" id="#Countdown" ref={myRef}>
      <section className="container">
        <section className="timer">
          <div>
            <img src={logo} className="logo" alt="logo"></img>
          </div>
          <div className="clock">
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerDays}</div>
                <div className="clock-txt">DAYS</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerHours}</div>
                <div className="clock-txt">HOURS</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerMinutes}</div>
                <div className="clock-txt">MINUTES</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerSeconds}</div>
                <div className="clock-txt">SECONDS</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Countdown;