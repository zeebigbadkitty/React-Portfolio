import React from "react";
import "../css/style.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Blah",
    },
    {
      title: "Project 2",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Blah",
    },
  ];

  return (
    <div>
      <h2 id="sec1">Projects and Portfolio</h2>
      <p>
        For any questions or comments regarding the below applications, please
        don't hesitate to contact me.
      </p>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} className="btn btn-primary">
                  Github
                </a>
                <a href={project.deployed} className="btn btn-primary">
                  Deployed
                </a>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
