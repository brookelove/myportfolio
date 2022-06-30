import React from "react";
import "../styles/About.css";
export default function About() {
  return (
    <div className="aboutContainer">
      {/* paragraph text container */}
      <div className="aboutWords">
        <h1 className="pageTitle">About</h1>
        <h3 className="aboutBio">
          I'm Brooke. A zoologist, web designer, and organized
        </h3>
        <h4 className="aboutSubTitle">EXPERIENCE</h4>
        <h4 className="aboutSubTitle">SKILLS</h4>
        <button>
          <a>My Resume</a>
        </button>
        <h4 className="aboutSubTitle">SHOUT OUTS</h4>
        <button>
          <a>Contact me</a>
        </button>
        <button>
          <a>Blog</a>
        </button>
      </div>
      {/* photo container */}
      <div className="aboutPhoto">{/* image of myself that looks great */}</div>
    </div>
  );
}
