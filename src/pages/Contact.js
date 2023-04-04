import { React, useEffect, useState } from "react";
import "../assets/styles/Contact.css";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/contactHeader.jpg";
import LinkdIn from "../assets/images/hand2.png";
import GitHub from "../assets/images/GitHub.svg";

export default function Contact() {
  return (
    <div className="contactBackground">
      <div className="contactOuterDiv">
        <Navbar />
        <div className="contactContainer">
          <img src={Logo} className="contactHeader" />
          <img src={LinkdIn} className="arms" />
          <ul className="contactLinks">
            <li>
              <a
                href="https://www.linkedin.com/in/brooke-s-love/"
                target={"_blank"}
              >
                LINKDIN: Brooke Love
              </a>
            </li>
            <li>
              <a href="mailto:brookelovedevelops@gmail.com" target={"_blank"}>
                brookelovedevelops@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/brookelove" target={"_blank"}>
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
