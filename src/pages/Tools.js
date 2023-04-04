import React from "react";
import Navbar from "../components/Navbar";
// import "../assets/styles/Tools.css";

export default function Tool() {
  const tools = [
    "Handlebars.js",
    "HTML",
    "MVC",
    "HTML5",
    "React",
    "Notion",
    "Zoom",
    "Python",
    "Kotlin",
    "Java",
    "MySQL",
    "Apollo",
    "Express.js",
    "Node.js",
    "NoSQL",
    "SQL",
    "APIs",
    "PWA",
  ];
  return (
    <div className="toolsContainer">
      <h2 className="subText">TOOLS</h2>
      <p className="toolInfo">
        This is a place where I have colleted all of the helpful tools I have
        used either daily or fun new applications to use.
      </p>
      {/* <br />
          <br /> */}
      <div className="chipContainer">
        {tools.map((tool) => {
          return (
            <div className="chip">
              <h5 className="chipText">{tool}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
