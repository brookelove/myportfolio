import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Work.css";
export default function Work() {
  return (
    <div className="blackBackground">
      <div className="workContainer">
        <Navbar />
        <div className="workTextContainer">
          {/* container for the work text */}

          <h4 className="pageTitle">WORK</h4>
          <br />
          <p>
            This is some of my greatest works currently. I have decided to show
            all of my passions and works that I have done over the year. Some
            are by resquest but, all are passion projects of mine.
          </p>
        </div>
        {/* container for the project title */}
        <div className="projectContainer">
          <a href="/project01" className="workAnchor">
            <h1 className="projectTitle">
              <button className="projectLink">Battle Trail</button>
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
          {/*  <a href="/project01" className="workAnchor"><h1 className="projectTitle">
            <button href="/project05" className="projectLink">
              Project 5
            </button>
          </h1></a>
          <a href="/project01" className="workAnchor">
          <h1 className="projectTitle">
            <button href="/project06" className="projectLink">
              Project 6
            </button>
          </h1></a> */}
        </div>
      </div>
    </div>
  );
}
