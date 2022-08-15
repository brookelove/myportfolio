import React from "react";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/images/me.png";
import "../assets/styles/About.css";
export default function About() {
  return (
    <div className="clayBackground">
      <div className="aboutContainer">
        <Navbar />
        {/* paragraph text container */}
        <div className="aboutInfo animate__animated animate__fadeInDown">
          <div className="aboutWords">
            <div className="top">
              <h1 className="BioTitle aboutContainers">BROOKE LOVE</h1>
              <img
                className="myPhoto"
                src={myPhoto}
                alt="Photo of Brooke Love"
                width="305"
              />
            </div>
            <div className="middle">
              <div className="factContainer aboutContainers">
                <h4 className="aboutSubTitle factTitle">FUN FACTS</h4>
                <ul className="factList">
                  <li>I love to cook all different kinds of foods</li>
                  <li>I have read over 150 books in one summer</li>
                  <li>I have never been outside of the continent </li>
                </ul>
              </div>
              <div className="experienceContainer aboutContainers">
                <h4 className="aboutSubTitle">EXPERIENCE</h4>
                <br></br>
                <ul>
                  <li className="aboutContext listElement">
                    Graduated from WSU with a BS of Biology 2021
                  </li>
                  <li className="aboutContext listElement">
                    Graduated from University of Washington with a Certificate
                    of FullStack development 2022
                  </li>
                </ul>
              </div>
              <br></br>
              <div className="skillsContainer aboutContainers">
                <h4 className="aboutSubTitle">SKILLS</h4>
                <br></br>
                <p>
                  Object Oriented Design - Organization - Full-stack development
                  - PWA - HTML - Handlebars - Collaboration - Project Management
                  - CSS - React - JS - Sequilize - MongoDB - Apollo
                </p>
              </div>
            </div>
            <div className="bottom">
              <div className="shoutOutContainer aboutContainers">
                <h4 className="aboutSubTitle">SHOUT OUTS</h4>
                <br></br>
                <p className="aboutContext">
                  I would like to thank the poeple that have helped me thoughout
                  my journey beginning my career in Fullstack development. I
                  would like to thak my family, who support me though all of my
                  aspirations in my career. I would also like to thank the
                  people who helped me breech the world of tech through working
                  on projects or helped me: <a>Joe Refuss</a>,{" "}
                  <a>Lucas Roman</a>, <a>Frantz Felix </a>, <a>James Harding</a>
                  , <a>Dahlia Graves</a>, <a>Evan Hosni</a>,{" "}
                  <a>Lindsay Fitzgerald</a>, <a>Niles Bingham</a>
                </p>
              </div>
              <div className="aboutContainers buttonContainer">
                <button>
                  <a className="buttonLink" href="/resume">
                    My Resume
                  </a>
                </button>
                <br></br>
                <br></br>
                <button>
                  <a href="/contact" className="buttonLink">
                    Contact me
                  </a>
                </button>
              </div>

              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
