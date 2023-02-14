import React from "react";
import "../css/style.css";
import About from "./about.js";
import Portfolio from "./portfolio.js";
import Skills from "./skills.js";
import Sidenav from "./sidenav";

export default function Body() {
  return (
    <div className="container flex-main">
        <div className="row">
          <Sidenav />
      </div>
      <div className="col-md-10" id="leftCol">
      <About />
      <Portfolio />
      <Skills />
      </div>

    </div>
  );
}
