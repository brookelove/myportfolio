import React from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="beigeBackgd">
      <div className="contactOuterDiv">
        <Navbar />
        <div className="contactContainer">
          <h1 className="pageTitle">bonjour!</h1>
          <p className="contactSubTitle">
            If you want to chat feel free to reach out on these links
          </p>
          <ul className="listNone">
            <li>
              <a
                className="contactLinks"
                target="_blank"
                href="https://www.linkedin.com/in/savien-love-898429230/"
              >
                LinkdIn: Brooke Love
              </a>
            </li>
            <li>
              <a
                className="contactLinks"
                target="_blank"
                href="https://github.com/brookelove"
              >
                Github: brookelove
              </a>
            </li>
            <li>
              <a
                className="contactLinks"
                target="_blank"
                href="mailto:brookelovedevelops@gmail.com"
              >
                Email: brookelovedevelops@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
