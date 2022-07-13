import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Work.css";
export default function Work() {
  return (
    <div className="beigeBackgd">
      <div className="workContainer">
        <Navbar />
        <div className="workTextContainer">
          {/* container for the work text */}
          <h4 className="pageTitle">Work</h4>
          <br />
          <p>
            This is some of my greatest works currently. I have decided to show
            all of my passions and works that I have done over the year. Some
            are by resquest but, all are passion projects of mine.
          </p>
          {/* this is some of my greatest work that coveres different fields */}
          <br />
          {/* <button>
            <a className="buttonLink" href="/tools">
              Helpful Tools
            </a>
          </button> */}
        </div>
        {/* container for the project title */}
        <div className="projectBackContainer"></div>
        <div className="projectContainer">
          <h1 className="projectTitle">
            <a href="/project01" className="projectLink">
              Battle Trail
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project02" className="projectLink">
              Evergreen Body Mod
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project03" className="projectLink">
              Cake Man
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project04" className="projectLink">
              Booklastic
            </a>
          </h1>
          {/*  <h1 className="projectTitle">
            <a href="/project05" className="projectLink">
              Project 5
            </a>
          </h1>
          <h1 className="projectTitle">
            <a href="/project06" className="projectLink">
              Project 6
            </a>
          </h1> */}
        </div>
      </div>
    </div>
  );
}
