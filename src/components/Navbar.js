import "../assets/styles/Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="innerNav">
        {document.location.pathname === "/" && (
          <p className="navLink">
            <a
              className="leftlink"
              target="_blank"
              href="https://www.linkedin.com/in/savien-love-898429230/"
            >
              LI
            </a>
          </p>
        )}
        {document.location.pathname === "/" && (
          <p className="navLink">
            <a
              className="leftlink"
              target="_blank"
              href="https://github.com/brookelove"
            >
              GH
            </a>
          </p>
        )}
        {document.location.pathname === "/" && (
          <p className="navLink">
            {/* codepen */}
            <a
              className="leftlink"
              target="_blank"
              href="https://codepen.io/brookeLove99"
            >
              CP
            </a>
          </p>
        )}
        {document.location.pathname === "/" && (
          <p className="navLink">
            {/* stack Overflow */}
            <a
              className="leftlink"
              target="_blank"
              href="https://stackoverflow.com/users/19544519/brooke-love"
            >
              SO
            </a>
          </p>
        )}
        {document.location.pathname !== "/" && (
          <p className="navLink">
            {/* stack Overflow */}
            <a
              className="leftlink"
              target="_blank"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              HOME
            </a>
          </p>
        )}
        <span className="line"></span>
      </div>
    </div>
  );
}
