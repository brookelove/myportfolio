import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "./Project";
import "../assets/styles/Work.css";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/ProjectData";

export default function Work() {
  const [currentProj, setCurrentProject] = useState([]);
  const navigate = useNavigate();
  // const indProject = (projName) => {
  //   projectData.filter((project) => {
  //     if (project.projectTitle == projName) {
  //       setCurrentProject(project);
  //       <Project state={project} />;
  //       window.location.href = `/project`;
  //     }
  //   });
  // };
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
          {/* <a href="/project01" className="workAnchor">
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
          </a> */}
          {projectData.map((project) => {
            return (
              <a
                className="workAnchor"
                // onClick={() => indProject(project.projectTitle)}
                onClick={() => {
                  navigate("/project", {
                    replace: true,
                    state: {
                      title: project.projectTitle,
                      blurb: project.blurb,
                      description: project.description,
                      tools: project.tools,
                      bigImage: project.bigImage,
                      small01: project.smallImage01,
                      small02: project.smallImage02,
                      github: project.github,
                      website: project.weblink,
                    },
                  });
                }}
                key={project.id}
              >
                <h1 className="projectTitle">
                  <button
                    // href="/project04"
                    className="projectLink"
                  >
                    {project.projectTitle}
                  </button>
                </h1>
              </a>
            );
          })}
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
