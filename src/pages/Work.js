import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Work.css";
export default function Work() {
  return (
    <div className="blackBackground">
      <div className="workContainer">
        <Navbar />
        <div className="workTextContainer">
          <br />
          <p>
            This is some of my projects that I am currently working on. I have
            decided to show all of the anvenues tha t I have discovered over the
            year!
          </p>
        </div>
        {/* container for the project title */}
        <div className="projectContainer">
          <a href="/project01" className="workAnchor">
            <h1 className="projectTitle">
              <button className="projectLink">the W.</button>
            </h1>
          </a>
          <a href="/project02" className="workAnchor">
            <h1 className="projectTitle">
              <button href="/project02" className="projectLink">
                Evergreen Body Mod
              </button>
            </h1>
          </a>
          <a href="/project03" className="workAnchor">
            <h1 className="projectTitle">
              <button href="/project03" className="projectLink">
                Cake Man
              </button>
            </h1>
          </a>
          <a href="/project04" className="workAnchor">
            <h1 className="projectTitle">
              <button href="/project04" className="projectLink">
                Booklastic
              </button>
            </h1>
          </a>
          {/* <a href="/project01" className="workAnchor">
            <h1 className="projectTitle">
              <button href="/project05" className="projectLink">
                Project 5
              </button>
            </h1>
          </a>
          <a href="/project01" className="workAnchor">
            <h1 className="projectTitle">
              <button href="/project06" className="projectLink">
                Project 6
              </button>
            </h1>
          </a> */}
        </div>
      </div>
    </div>
  );
}
