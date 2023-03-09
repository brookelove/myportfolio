import React from "react";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/images/me.png";
import Lines from "../assets/images/Logo.gif";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import {
  SiHandlebarsdotjs,
  SiSass,
  SiApollographql,
  SiMysql,
  SiPwa,
  SiNotion,
  SiGithub,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";
import { IconName } from "react-icons/fa";
import "../assets/styles/About.css";
export default function About() {
  return (
    <div className="clayBackground">
      <div className="aboutContainer">
        <Navbar />
        {/* paragraph text container */}
        <div className="aboutInfo animate__animated animate__fadeInDown">
          <div className="aboutWords">
            <div className="top border">
              <h1 className="BioTitle aboutContainers">WHO IS BROOKE?</h1>
              <div className="innerTop">
                <img
                  className="myPhoto"
                  src={myPhoto}
                  alt="Photo of Brooke Love"
                  width="300"
                  // height="350"
                />
                <div className="gifSubText">
                  <img
                    className="myPhoto"
                    src={Lines}
                    alt="Photo of Brooke Love"
                    width="300"
                  ></img>
                  <h3> GET TO KNOW ME AS A CODER & A PERSON</h3>
                </div>
              </div>
            </div>
            <div className="border middle">
              <div className="factContainer aboutContainers">
                <h4 className="aboutSubTitle factTitle">FUN FACTS</h4>
                <ul className="factList">
                  <li>I love to cook all different kinds of foods</li>
                  <li>I have read over 150 books in one summer</li>
                  <li>I have never been outside of the continent </li>
                </ul>
              </div>
              <div className="factContainer aboutContainers">
                <h4 className="aboutSubTitle">EXPERIENCE</h4>
                <br></br>
                <ul className="factList">
                  <li>Graduated from WSU with a BS of Biology 2021</li>
                  <li>
                    Graduated from University of Washington with a Certificate
                    of FullStack development 2022
                  </li>
                  <li>
                    Working towards my Master's in Science in Software
                    Developemnt at Boston University
                  </li>
                </ul>
              </div>
              {/* <br></br> */}
            </div>
            {/* <div className="bottom"> */}
            <div className="skillsContainer border">
              <h4 className="aboutSubTitle">SKILLS</h4>
              <br></br>
              <h4>Concepts</h4>
              <p>
                Object Oriented Design - Organization - Collaboration - Project
                Management -{" "}
              </p>
              <h4>Languages</h4>
              <div>
                <SiPwa size={30} /> <IoLogoHtml5 size={30} />
                <SiHandlebarsdotjs size={30} />
                <IoLogoCss3 size={30} /> <SiJavascript size={30} />
                <SiMysql size={30} />
                <SiApollographql size={30} /> <SiSass size={30} />
                <SiNotion size={30} /> <SiGithub size={30} />
                <SiMongodb size={30} /> <SiPython size={30} />
                <SiReact size={30} />
              </div>
            </div>
            <div className="buttonFun border">
              <div>
                {/* <div className="shoutOutContainer aboutContainers">
                <h4 className="aboutSubTitle">SHOUT OUTS</h4>
                <br></br>
                <p className="aboutContext">
                  I would like to thank the poeple that have helped me thoughout
                  my journey beginning my career in Fullstack development. I
                  would like to thak my family, who support me though all of my
                  aspirations in my career. I would also like to thank the
                  people who helped me breech the world of tech through working
                  on projects or helped me: <a>Joe Refuss</a>,{" "}
                  <a>Lucas Roman</a>, <a>Frantz Felix </a>, <a>James Harding</a>
                  , <a>Dahlia Graves</a>, <a>Evan Hosni</a>,{" "}
                  <a>Lindsay Fitzgerald</a>, <a>Niles Bingham</a>
                </p>
              </div> */}

                <button>
                  <a className="buttonLink" href="/resume">
                    My Resume
                  </a>
                </button>
                <br></br>
                <br></br>
                <button>
                  <a href="/contact" className="buttonLink">
                    Contact me
                  </a>
                </button>
              </div>
            </div>

            <br></br>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
