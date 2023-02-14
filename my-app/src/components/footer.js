import React from "react";
import '../css/style.css'; 
import photo2 from '../images/photo2.jpg';

export default function Footer() {
  return (
    <div>
    <footer id="footer" className="text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row my-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="mailto:candice.radam@gmail.com">
                    <i className="devicon-google-plain"></i>
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="https://github.com/zeebigbadkitty">
                    <i className="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a className="text-white ps-2" href="https://www.linkedin.com/in/candice-radam/">
                    <i className="devicon-linkedin-plain"></i> 
                </a>
              </li>
            </ul>
            <img src={photo2} class="photo2"></img>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Navigation</h5>

            <ul id="footerli" className="list-unstyled">
                <li><a href="#sec0">About Me</a></li>
                <li><a href="#sec1">Projects and Portfolio</a></li>
                <li><a href="#sec2">Skills</a></li>
                <li><a href="#sec3">Resume</a></li>
                <li><a href="#sec4">Licenses and Certifications</a></li>
                <li><a href="#sec5">Contact Form</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <p><i className="fas fa-map-marker-alt pe-2"></i>Austin, Texas</p>
              </li>
              <li></li>
              <li>
                <p>
                  <i className="fas fa-envelope pe-2 mb-0"></i><a href="mailto:candice.radam@gmail.com">candice.radam@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
