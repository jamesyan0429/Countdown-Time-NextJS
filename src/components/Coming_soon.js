/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

export default function Coming_soon() {
  const [deployTime, setDeployTime] = useState({
    days: "0",
    hours: "0",
    mins: "0",
    seconds: "0"
  });

  const loadCurrentTime = () => {
    const currentTime = new Date();
    const deployTime0 = new Date(2022, 4, 18, 12, 0, 0, 0);
    const restTime = new Date(deployTime0 - currentTime);

    setDeployTime({
      days: restTime.getDate(),
      hours: restTime.getHours(),
      mins: restTime.getMinutes(),
      seconds: restTime.getSeconds()
    });
  }

  useEffect(() => {
    setInterval(() => {
      loadCurrentTime();
    }, 1000);
  }, [])

  return (
    <div className="site-main coming-soon-page">
      <img src="/logo192.png" className="logo-img" />
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="time-count-section">
              <div className="time-circle">
                <span>{deployTime.days}</span>
                <label>DAYS</label>
              </div>
              <div className="time-circle">
                <span>{deployTime.hours}</span>
                <label>HOURS</label>
              </div>
              <div className="time-circle">
                <span>{deployTime.mins}</span>
                <label>MINUTES</label>
              </div>
              <div className="time-circle">
                <span>{deployTime.seconds}</span>
                <label>SECONDS</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="description-section">
              <h1>WE'RE COMING SOON!</h1>
              <p>Our website is under construction, we are working very hard to give you the best experience with this one.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="email-section">
              <input type="email" placeholder="Your Email Address..." />
              <button>&#8594;</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="social-section">
              <ul className="social-icons list-inline">
                <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}