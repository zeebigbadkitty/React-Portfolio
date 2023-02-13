import React from "react";
import "../css/style.css";
import Portfolio from './portfolio.js';

export default function App() {
  return (
    <div>
      <div className="container flex-main" style={'width:100%'}>
        <div className="row">
          <div className="col-md-3" id="leftCol">
            <ul className="nav nav-stacked" id="sidebar">
              <li>
                <a href="#sec0">About Me</a>
              </li>
              <li>
                <a href="#sec1">Projects and Portfolio</a>
              </li>
              <li>
                <a href="#sec2">Skills</a>
              </li>
              <li>
                <a href="#sec3">Resume</a>
              </li>
              <li>
                <a href="#sec4">Licenses and Certifications</a>
              </li>
              <li>
                <a href="#sec5">Contact Form</a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="about">
        <h2 id="sec0">About Me</h2>

        <p>
          I am currently a fulltime student at the University of Texas at Austin
          working towards the completion of a fullstack developer bootcamp;
          graduation will commence March 2023. I reside in Austin, Texas and am
          the mother of two wonderful children. In my 'free time' I like to
          enjoy live music, martial arts, and casually playing video games.
        </p>

        <hr />
        <Portfolio />
      </div>
      </div>
    </div>
  );
}
