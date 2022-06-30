import "../styles/Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="innerNav">
        <p className="navLink">
          <a
            className="leftlink"
            href="https://www.linkedin.com/in/savien-love-898429230/"
          >
            LI
          </a>
        </p>
        <p className="navLink">
          <a className="leftlink" href="https://github.com/brookelove">
            GH
          </a>
        </p>
        <p className="navLink">
          <a className="leftlink">CP</a>
        </p>
        <p className="navLink">
          <a className="leftlink">SO</a>
        </p>
        <span className="line"></span>
      </div>
      <p className="navLink">© 2022</p>
    </div>
  );
}
