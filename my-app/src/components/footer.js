import React from "react";
import {ResponsiveEmbed, Image} from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#111155" }}
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Candice Radam</h5>

            <p>
              <Image className="rounded-circle shadow-4-strong"
                source={require('../images/photo3.jpg')}  
              />
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
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
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <i class="fas fa-map-marker-alt pe-2"></i>Austin, Texas
                </p>
              </li>
              <li></li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0"></i>
                  <a href="mailto:candice.radam@gmail.com">
                    candice.radam@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-white"
          href="https://github.com/zeebigbadkitty?tab=repositories"
        >
          Candice Radam
        </a>
      </div>
    </MDBFooter>
  );
}
