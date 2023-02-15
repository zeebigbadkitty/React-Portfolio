import React from "react";
import "../css/style.css";
import HTMLCSS from "../images/htmlcss.png";
import BOTTOMSUP from '../images/bottomsup.PNG';
import SAFENYT from '../images/safenyt.png';
import WEATHERDASHBOARD from '../images/weather.PNG';
import SQLTRACKER from '../images/sqltracker.PNG';
import REGEX from '../images/regex.PNG';


export default function Portfolio() {
  const projects = [
    {
      title: "HTML And CSS Refactoring",
      image: HTMLCSS,
      github: "https://github.com/zeebigbadkitty/Advanced-CSS-Portfolio",
      deployed: "https://github.com/zeebigbadkitty/Advanced-CSS-Portfolio",
      description: "This was my first introduction to HTML and CSS. I was tasked with refactoring the code to make it more accessible and cleaner.",
    },
    {
      title: "Group Project - Safe Nyt",
      image: SAFENYT,
      github: "https://github.com/ceca24/Project-Safe-Nyt",
      deployed: "https://ceca24.github.io/Project-Safe-Nyt/",
      description: "In this group project, we worked together to use APIs to create a website that would allow users to search for safe venues in the location of their choice.",
    },
    {
      title: "Weather Dashboard",
      image: WEATHERDASHBOARD,
      github: "https://github.com/zeebigbadkitty/Weather-Dashboard",
      deployed: "https://github.com/zeebigbadkitty/Weather-Dashboard",
      description: "In this project, I used APIs to create a weather dashboard that would allow users to search for the weather in any city.",
    },
    {
      title: "SQL Employee Tracker",
      image: SQLTRACKER,
      github: "https://github.com/zeebigbadkitty/SQL-Employee-Tracker",
      deployed: "https://github.com/zeebigbadkitty/SQL-Employee-Tracker",
      description: "The task was to create an employee tracker using SQL and Node.js.",
    },
    {
      title: "Regex Tutorial - E-mail Validation",
      image: REGEX,
      github: "https://github.com/zeebigbadkitty/Regex-Tutorial",
      deployed: "https://github.com/zeebigbadkitty/Regex-Tutorial",
      description: "For this assignment, we had to hone our technical writing skills by creating a tutorial on a regex expression of our choice.",
    },
    {
      title: "Group Project - Bottoms Up",
      image: BOTTOMSUP,
      github: "https://github.com/zeebigbadkitty/Bottoms-Up",
      deployed: "https://bottoms-up-2023-app.herokuapp.com/",
      description: "In this group project, we worked together to create a fullstack application that would allow users to manage an inventory.",
    },
  ];

  return (
    <div>
      <h2 id="sec1">Projects and Portfolio</h2>
      <p>
        For any questions or comments regarding the below applications, please
        don't hesitate to contact me.
      </p>
      <div className="row" id="card">
        {projects.map((project) => (
          <div className="col-md-4" key={project.title}>
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
