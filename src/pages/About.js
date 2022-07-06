import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
export default function About() {
  return (
    <div className="beigeBackgd">
      <div className="aboutContainer">
        <Navbar />
        {/* paragraph text container */}
        <div className="aboutWords">
          <h1 className="pageTitle">About</h1>
          <h3 className="aboutBio">
            I'm Brooke. A zoologist, web designer, and organized
          </h3>
          <h4 className="aboutSubTitle">EXPERIENCE</h4>
          <ul>
            <li className="aboutContext listElement">Graduated from WSU with a BS of Biology 2021</li>
            <li className="aboutContext listElement">
              Graduated from University of Washington with a Certificate of
              FullStack development 2022
            </li>
          </ul>
          <h4 className="aboutSubTitle">SKILLS</h4>
          <p className="aboutContext"> Object Oriented Design - Organization - Full-stack development - Collaboration - Project Management - CSS - React - JS - Sequilize - MongoDB - Apollo </p>
          <button>
            <a className="buttonLink">My Resume</a>
          </button>
          <h4 className="aboutSubTitle">SHOUT OUTS</h4>
          <p className="aboutContext">I would like to thank the poeple that have helped me thoughout my journey beginning my career in Fullstack development. I would like to thak my family, who support me though all of my aspirations in my career. I would also like to thank the people who helped me breech the world of tech through working on projects or helped me: <a>Joe Refuss</a>, <a>Lucas Roman</a>, <a>Frantz Felix </a>, <a>James Harding</a>, <a>Dahlia Graves</a>, <a>Evan Hosni</a>,  <a>Lindsay Fitzgerald</a>, <a>Niles Bingham</a></p>
          <button>
            <a href="/contact" className="buttonLink">
              Contact me
            </a>
          </button>
          <button>
            <a className="buttonLink">Blog</a>
          </button>
        </div>
        {/* photo container */}
        <div className="aboutPhoto">
          {/* image of myself that looks great */}
        </div>
      </div>
    </div>
  );
}
