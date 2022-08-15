import React from "react";
import "../assets/styles/Landing.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "animate.css";

export default function Landing() {
  return (
    <div className="vanGoughBackground ">
      <div></div>
      <div className="landingContainer">
        <Navbar />
        {/* container that is for short blurb */}
        <div className="introContainer animate__animated animate__fadeInDown">
          <p>
            <b className="beigeHighlight">BROOKE LOVE</b>
          </p>
          <br />
          <p className="beigeHighlight">Passionate Full Stack Developer</p>
          <br />
          <p className="beigeHighlight">
            Currently working on <a>Evergreen Body Mod</a>
          </p>
        </div>
        {/* contaier for the landing link tabs */}
        <div className="linkContainer animate__animated animate__fadeInDown">
          <Link className="linkLanding" to="/work">
            <h1 className="landingLink">WORK</h1>
          </Link>
          <Link className="linkLanding" to="/about">
            <h1 className="landingLink">ABOUT</h1>
          </Link>
          <Link className="linkLanding" to="/contact">
            <h1 className="landingLink">CONTACT</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
