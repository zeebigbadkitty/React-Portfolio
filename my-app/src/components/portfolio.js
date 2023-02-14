import React from "react";
import "../css/style.css";


export default function Portfolio() {
  const projects=[]; // Minimum of 6 and map over components. 
  return ( 
<div>
  <h2 id="sec1">Projects and Portfolio</h2>
  <p>
    For any questions or comments regarding the below applications, please don't hesitate to contact me. 
  </p>
  <div className="row">
    <div className="col-md-4">
      <img src="//placehold.it/300x300" className="img-responsive" />
    </div>
    <div className="col-md-4">
      <img src="//placehold.it/300x300" className="img-responsive" />
    </div>
    <div className="col-md-4">
      <img src="//placehold.it/300x300" className="img-responsive" /> 
    </div>
  </div>

  <hr /> 
  </div> )};