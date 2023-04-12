import React from "react";
import Navbar from "../components/Navbar";
import { tools } from "../data/Tools";
import "../assets/styles/Tool.css"
// import "../assets/styles/Tools.css";

export default function Tool() {
  return (
    <div className="toolsContainer">
      <h2 className="subText">TOOLS & LAUNGUAGES</h2>
      <p className="toolInfo">
        This is a place where I have colleted all of the helpful tools I have
        used either daily or fun new applications to use.
      </p>
      {/* <br />
          <br /> */}
        <h3 className="subHeaders">LANGUAGES</h3>
      <div className="chipContainer">
        {tools.map((tool) => {
          if(tool.category == "Language"){
            return (
              <div className="chip">
                <h5 className="chipText">{tool.name}</h5>
              </div>
            );

          }
        })}
      </div>
        <h3 className="subHeaders">Tools & Concepts</h3>
        <div className="chipContainer">
        {tools.map((tool) => {
          if(tool.category == "Tool" || tool.category == "Concepts"){
            return (
              <div className="chip">
                <h5 className="chipText">{tool.name}</h5>
              </div>
            );
          }
        })}
        </div>
        {/* <h3 className="subHeaders">CONCEPTS</h3>
        <div className="chipContainer">
        {tools.map((tool) => {
          if(tool.category == "Concepts"){
            return (
              <div className="chip">
                <h5 className="chipText">{tool.name}</h5>
              </div>
            );
          }
        })}
        </div> */}
    </div>
  );
}
