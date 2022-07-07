import React from "react";
import "../styles/Landing.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="beigeBackgd">
      <div className="landingContainer">
        <Navbar />
        {/* container that is for short blurb */}
        <div className="introContainer">
          <p>
            <b>BROOKE LOVE</b>
          </p>
          <br />
          <p>Passionate Full Stack Developer</p>
          <br />
          <p>
            Currently working on <a>Evergreen Body Mod</a>
          </p>
        </div>
        {/* contaier for the landing link tabs */}
        <div className="linkContainer">
          <Link className="linkLanding" to="/work">
            <h1 className="landingLink">Work</h1>
          </Link>
          <Link className="linkLanding" to="/about">
            <h1 className="landingLink">About</h1>
          </Link>
          <Link className="linkLanding" to="/contact">
            <h1 className="landingLink">Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
