import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Work.css";
export default function Work() {
  return (
    <div className="darkBkgrnd">
      <div className="workContainer">
        <Navbar />
        <div className="workTextContainer">
          {/* container for the work text */}
          <h4 className="pageTitle darkTitle">Work</h4>
          <br />
          <p>
            This is some of my greatest works currently. I have decided to show
            all of my passions and works that I have done over the year. Some
            are by resquest but, all are passion projects of mine.
          </p>
          {/* this is some of my greatest work that coveres different fields */}
          <br />
          <button>
            <a className="buttonLink" href="/tools">
              Helpful Tools
            </a>
          </button>
        </div>
        {/* container for the project title */}
        <div className="projectContainer">
          <h1 className="projectTitle">
            <a href="/project1" className="projectLink">
              Battle Trail
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project2" className="projectLink">
              Evergreen Body Mod
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project3" className="projectLink">
              Cake Man
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project4" className="projectLink">
              Project 4
            </a>{" "}
          </h1>
          <h1 className="projectTitle">
            <a href="/project5" className="projectLink">
              Project 5
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project6" className="projectLink">
              Project 6
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
