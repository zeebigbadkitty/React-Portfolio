import React from "react";
import '../css/style.css'; 

export default function Footer() {
  return (
    <div>
    <footer id="footer" class="text-center text-lg-start text-white">
      <div class="container p-4">
        <div class="row my-4">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

            <ul class="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a class="text-white px-2" href="mailto:candice.radam@gmail.com">
                    <i class="devicon-google-plain"></i>
                </a>
              </li>
              <li>
                <a class="text-white px-2" href="https://github.com/zeebigbadkitty">
                    <i class="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a class="text-white ps-2" href="https://www.linkedin.com/in/candice-radam/">
                    <i class="devicon-linkedin-plain"></i> 
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Navigation</h5>

            <ul id="footerli" class="list-unstyled">
                <li><a href="#sec0">About Me</a></li>
                <li><a href="#sec1">Projects and Portfolio</a></li>
                <li><a href="#sec2">Skills</a></li>
                <li><a href="#sec3">Resume</a></li>
                <li><a href="#sec4">Licenses and Certifications</a></li>
                <li><a href="#sec5">Contact Form</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact</h5>

            <ul class="list-unstyled">
              <li>
                <p><i class="fas fa-map-marker-alt pe-2"></i>Austin, Texas</p>
              </li>
              <li></li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0"></i><a href="mailto:candice.radam@gmail.com">candice.radam@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)"><p>© 2023 Copyright: Candice Radam</p>
      </div>
    </footer>
    </div>
  );
}
