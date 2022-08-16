import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Project.css";

export default function Project02() {
  return (
    <div className="comingSoonBkgrd">
      <div className="comingContainer">
        <Navbar />
        <div className="comingSoon">
          <h1>EVERGREEN BODY MOD</h1>
          <p>Comming Soon!</p>
          <a
            href="https://github.com/brookelove/evergreen-body-mod"
            className="linksToProject"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
