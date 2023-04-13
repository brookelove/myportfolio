import { React, useEffect, useState } from "react";
import "../assets/styles/Contact.css";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/Contact/contactHeader.jpg";
import LinkdIn from "../assets/images/Contact/hand2.png";

export default function Contact() {
  return (
    <div className="contactBackground">
      <div className="contactOuterDiv">
        <Navbar />
        <div className="contactContainer">
          <div>
            <iframe
              src="https://giphy.com/embed/iWqk4xFVi4nNSgKHfO"
              width="480"
              height="425"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            {/* <p>
                <a href="https://giphy.com/gifs/3d-tech-geometric-iWqk4xFVi4nNSgKHfO">
                  via GIPHY
                </a>
              </p> */}
            {/* </div> */}
            {/* <p>
              <a href="https://giphy.com/gifs/3d-tech-geometric-iWqk4xFVi4nNSgKHfO">
                via GIPHY
              </a>
            </p> */}

            {/* <img src={Logo} className="contactHeader" />
          <img src={LinkdIn} className="arms" /> */}
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
    </div>
  );
}
