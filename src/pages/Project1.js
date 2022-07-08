import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import P04image from "../assets/images/project04/BL_landing.png";
import project04image02 from "../assets/images/project04/BL_socket.png";
import project04image03 from "../assets/images/project04/BL-review.png";
export default function Project01() {
  return (
    <div className="project01LandingBeigeBkgrd">
      <div className="ProjectContainer">
        <Navbar />
        <div>
          <h1 className="projectTitle">Battle Trail</h1>

          <br></br>
          <br></br>
          <h3 className="projectShortBlurb">
            A side scroller retro battle game where you battle the creators of
            the game
          </h3>
          <br></br>
          <div className="project01BigImage">
            <img
              src={P04image}
              alt="Landing Page of Battle Trail"
              className="project01Image1"
            />
          </div>
          <div className="linksToProjectContainer">
            <a
              href="https://github.com/JaHa675/project-3"
              className="linksToProject"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://battle-trail.herokuapp.com"
              target="_blank"
              className="linksToProject"
            >
              Website
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <p className="projectDescription">
            Welcome to the Battle Trail, a fun and exiting 2D RPG that is
            heavily inspired by 2000s pixelated games. As enginners, we liked
            the thought of a game that combined all of our love for games and
            challlenged us to create something new. We used technologies like
            React, JavaScript, and Phaser Game Engine to bring our idea of a
            quirky, sprite dominated game to life. Throughout the game you will
            see lots of pixel art from open soure sprite resources and
            characters that are based off the creators. We hope that you find
            joy in the little things will working your way through Battle Trail!
          </p>
          <br></br>
          <div className="project01SmallImage01">
            <img
              src={project04image02}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <div className="project01SmallImage02">
            <img
              src={project04image03}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <p className="projectDescription">
            During this program used a lot of technologies.A lot of things were
            learned while creating this project by learing React.js and Phaser.
            It was a grat and interesting learning curve. Other technologies I
            have had more comfort with wso they did not cause too much of
            concern: Express, Heroku, Node, CSS, and JS.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="projectButton">
            <button>
              {" "}
              <a
                href="https://battle-trail.herokuapp.com"
                target="_blank"
                className="buttonLink"
              >
                Battle Trail
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
