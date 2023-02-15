import React from "react";
import "../css/style.css";
import About from "./about.js";
import Portfolio from "./portfolio.js";
import Skills from "./skills.js";
import Sidenav from "./sidenav";
import Resume from "./resume";
import Forms from "./forms";
import Certs from "./certs";

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
      <Resume />
      <Certs />
      <Forms />
      </div>

    </div>
  );
}
