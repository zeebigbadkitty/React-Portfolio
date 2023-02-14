import React from "react";
import "../css/style.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 1",
    },
    {
      title: "Project 2",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 2",
    },
    {
      title: "Project 3",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 3",
    },
    {
      title: "Project 4",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 4",
    },
    {
      title: "Project 5",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 5",
    },
    {
      title: "Project 6",
      image: "//placehold.it/300x300",
      github: "google.com",
      deployed: "google.com",
      description: "Project 6",
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
                <a href={project.github} className="btn btn-secondary btn-sm">
                  Github
                </a>
                <a href={project.deployed} className="btn btn-secondary btn-sm">
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
