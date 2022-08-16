import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Project.css";
import bigImage from "../assets/images/project03/cakeManWeb.png";
import smallImage01 from "../assets/images/project03/about.png";
import smallImage02 from "../assets/images/project03/desserts.png";

export default function Project03() {
  return (
    <div className="project01LandingBeigeBkgrd">
      <div className="ProjectContainer">
        <Navbar />
        <div className="outsideContianer">
          <h1 className="projectTitle">CAKE MAN</h1>

          <br></br>
          <br></br>
          <h3 className="projectShortBlurb">
            A side scroller retro battle game where you battle the creators of
            the game
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
              href="https://github.com/brookelove/cakeman"
              className="linksToProject"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://62f5dc4e1a561e70098e6756--gorgeous-gnome-16643d.netlify.app/"
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
            So this is my first project that I have completed for someone else.
            It was created for my uncle Jason to run his cake business. He makes
            crazy cakes thate are inventive and creative. I created this with
            the intention of cool relazed vibe with not that many flashy colors
            other than the cakes, which speak for themselves.
          </p>
          <br></br>
          <div className="project01SmallImage01">
            <img
              src={smallImage01}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <div className="project01SmallImage02">
            <img
              src={smallImage02}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <p className="projectDescription">
            During this program used a lot of technologies.A lot of things were
            used React.js, react-scroll, react-icons
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="projectButton">
            <button>
              {" "}
              <a
                href="https://62f5dc4e1a561e70098e6756--gorgeous-gnome-16643d.netlify.app/"
                target="_blank"
                className="buttonLink"
              >
                Battle Trail
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
