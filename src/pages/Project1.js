import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Project.css";
import bigImage from "../assets/images/project01/beginning.png";
import smallImage01 from "../assets/images/project01/middle.png";
import smallImage02 from "../assets/images/project01/Spotify.png";
export default function Project01() {
  return (
    <div className="project01LandingBeigeBkgrd">
      <div className="ProjectContainer">
        <Navbar />
        <div className="outsideContianer">
          <h1 className="projectTitle">the W.</h1>

          <br></br>
          <br></br>
          <h3 className="projectShortBlurb">
            A widget website where you can get you rdaily information
          </h3>
          <br></br>
          <div className="project01BigImage">
            <img
              src={bigImage}
              alt="Landing Page of Battle Trail"
              className="project01Image1"
            />
          </div>
          <div className="linksToProjectContainer">
            <a
              href="https://github.com/brookelove/weather"
              className="linksToProject"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://thunderous-selkie-c74591.netlify.app/"
              target="_blank"
              className="linksToProject"
            >
              Website
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <p className="projectDescription">
            The W. started off as a weather application that turned into more of
            a widget collection. Iwanted to create a widget application that
            grabbed all of my elements that I use on a daily.
          </p>
          <br></br>
          <div className="project01SmallImage01">
            <img
              src={smallImage02}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <div className="project01SmallImage02">
            <img
              src={smallImage01}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <p className="projectDescription">
            This application used the Third-Party Apps Spotify, WeatherApi, and
            Date and Time to get the acurrent date. I also used React, CSS, and
            Netlify to deploy teh application. As I continue to grow this
            application I want to add mroe widgets such as a calender that
            tracts al your monthly meetings that you can add onto. Make the
            alerts and prompts more appealing by making them into modals. As
            well as, including te Google Maps API to plan out your day
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="projectButton">
            <button>
              {" "}
              <a
                href="https://thunderous-selkie-c74591.netlify.app/"
                target="_blank"
                className="buttonLink"
              >
                the W.
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
