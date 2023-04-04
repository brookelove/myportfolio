import React from "react";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/images/me.png";
import aboutHeader from "../assets/images/aboutHeader.jpg";
import Resume from "../components/Resume";

import "../assets/styles/About.css";
import Tool from "./Tools";
export default function About() {
  return (
    <div className="clayBackground">
      <div className="aboutContainer">
        <Navbar />
        {/* paragraph text container */}
        <div className="aboutInfo animate__animated animate__fadeInDown">
          <img src={aboutHeader} className="aboutHeader"></img>

          <div className="nameAndQuick">
            <ul>
              <p className="subText">QUICK PEEK:</p>
              <li>
                My background is in biology with a focus in Zoology and animals
              </li>
              <li>I love to coook and bake with my family</li>
              <li>
                My favorite language is JavaScrpit even though it did not start
                out that way
              </li>
              <li>
                I am currently pursuing my Masters's in Software Development
              </li>
            </ul>
            <img
              className="myPhoto"
              src={myPhoto}
              alt="Photo of Brooke Love"
              width="400"
              height="470"
            />
          </div>
          <Tool />
          <Resume />
        </div>
      </div>
    </div>
  );
}
