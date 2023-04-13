import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "./Project";
import "../assets/styles/Work.css";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/ProjectData";
import WorkImage from "../assets/images/WorkHeader.png";

export default function Work() {
  const navigate = useNavigate();
  return (
    <div className="blackBackground">
      <div className="workContainer">
        <Navbar />
        <div className="workContent">
          <div className="workTextContainer">
            {/* <br /> */}
            <img src={WorkImage} className="workImage" />
            <p className="workText">
              This is some of my projects that I am currently working on. I have
              decided to show all of the anvenues tha t I have discovered over
              the year!
            </p>
          </div>
          {/* container for the project title */}
          <div className="projectContainer">
            {projectData.map((project) => {
              return (
                <a
                  className="workAnchor"
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
          </div>
        </div>
      </div>
    </div>
  );
}
