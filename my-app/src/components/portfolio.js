import React from "react";
import "../css/style.css";

export default function Portfolio() {
  const projects = [
    {
      title: "HTML And CSS Refactoring",
      image: "./public/images/htmlcss.png",
      github: "https://github.com/zeebigbadkitty/Advanced-CSS-Portfolio",
      deployed: "https://github.com/zeebigbadkitty/Advanced-CSS-Portfolio",
      description: "This was my first introduction to HTML and CSS. I was tasked with refactoring the code to make it more accessible and cleaner.",
    },
    {
      title: "Group Project - Safe Nyt",
      image: "./public/images/safenyt.png",
      github: "https://github.com/ceca24/Project-Safe-Nyt",
      deployed: "https://ceca24.github.io/Project-Safe-Nyt/",
      description: "In this group project, we worked together to use APIs to create a website that would allow users to search for safe venues in the location of their choice.",
    },
    {
      title: "Weather Dashboard",
      image: "./public/images/weather.png",
      github: "https://github.com/zeebigbadkitty/Weather-Dashboard",
      deployed: "https://github.com/zeebigbadkitty/Weather-Dashboard",
      description: "In this project, I used APIs to create a weather dashboard that would allow users to search for the weather in any city.",
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
