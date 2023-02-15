import React from 'react';
import '../css/style.css';
import cardgif from '../images/cardgif.gif';

export default function Header() {
  
    return (
      <div>
      <nav className="navbar navbar-bright navbar-expand-lg">
      <a className="navbar-brand" href="#sec0">Candice Radam</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#sec0"
              >About Me <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sec1">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sec2">Skills</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"

              id="navbarDropdownMenuLink"
              data-bs-theme="dark"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              
            >
              See More...
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#sec3">Resume</a>
              <a className="dropdown-item" href="#sec4">Credentials</a>
              <a className="dropdown-item" href="#sec5">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div id="masthead">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>
                Candice Radam
              <p className="lead">Future fullstack developer.</p>
            </h1>
          </div>
          <div className="col-md-5">
            <div className="well well-lg">
              <div className="row">
                <div className="col-sm-6">
                  <img
                    src={cardgif}
                    className="img-responsive"
                  />
                </div>
                <div className="col-sm-6">
                  <br></br>
                  <strong>Candice Radam</strong>
                  <p>Reach me:</p>
                  <p><i className="devicon-google-plain"></i><a href="mailto:candice.radam@gmail.com">   Gmail</a></p>
                  <p><i className="devicon-github-original"></i><a href="https://github.com/zeebigbadkitty">   Github</a></p>
                  <p><i className="devicon-linkedin-plain"></i><a href="https://www.linkedin.com/in/candice-radam/">   LinkedIn</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    );
  }