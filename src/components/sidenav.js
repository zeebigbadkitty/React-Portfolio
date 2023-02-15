import React from "react";
import "../css/style.css";
// import Portfolio from './portfolio.js';

export default function Sidenav() {
  return (

    <div> <ul className="nav nav-stacked" id="sidebar">
      <li>
        <a href="#sec0">▹ About Me</a>
      </li>
      <li>
        <a href="#sec1">▹ Projects and Portfolio</a>
      </li>
      <li>
        <a href="#sec2">▹ Skills</a>
      </li>
      <li>
        <a href="#sec3">▹ Resume</a>
      </li>
      <li>
        <a href="#sec4">▹ Licenses and Certifications</a>
      </li>
      <li>
        <a href="#sec5">▹ Contact Form</a>
      </li>
    </ul></div>
  );
}