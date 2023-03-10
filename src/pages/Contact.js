import { React, useEffect, useState } from "react";
import "../assets/styles/Contact.css";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/Logo.jpg";
import LinkdIn from "../assets/images/LinkedIn.svg";
import GitHub from "../assets/images/GitHub.svg";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_yksvsn7",
  //       "template_bkxbj1j",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className="contactBackground">
      <div className="contactOuterDiv">
        <Navbar />
        <div className="contactContainer">
          <div className="logoTitle">
            <img src={Logo} />
          </div>
          <ul className="listNone">
            <li>
              <a
                className="contactLinks"
                target="_blank"
                href="https://www.linkedin.com/in/savien-love-898429230/"
              >
                <img src={LinkdIn} className="QRcodes" />
                <p>LinkdIn</p>
              </a>
            </li>
            <li>
              <a
                className="contactLinks"
                target="_blank"
                href="https://github.com/brookelove"
              >
                <img src={GitHub} className="QRcodes" />
                <p>Github</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
