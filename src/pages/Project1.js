import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";

export default function Project01() {
  return (
    <div className="beigeBackgd">
      <Navbar />
      <div>
        <h1>Battle Trail</h1>
        <h3>
          A side scroller retro battle game where you battle the creators of the
          game
        </h3>
        <h3>Description ~</h3>
        <p>
          Welcome to the Battle Trail, a fun and exiting 2D RPG that is heavily
          inspired by 2000s pixelated games. As enginners, we liked the thought
          of a game that combined all of our love for games and challlenged us
          to create something new. We used technologies like React, JavaScript,
          and Phaser Game Engine to bring our idea of a quirky, sprite dominated
          game to life. Throughout the game you will see lots of pixel art from
          open soure sprite resources and characters that are based off the
          creators. We hope that you find joy in the little things will working
          your way through Battle Trail!
        </p>
        <a>Github </a>
        <a>Website</a>
        <h4>Technology Used</h4>
        <h6>General ~</h6>
        <ul>
          <li>CSS</li>
          <li>JS</li>
          <li>Node.js</li>
          <li>Heroku</li>
          <li>Phaser</li>
        </ul>
        <h6>NPM Packages ~</h6>
        <ul>
          <li>react-router-dom</li>
          <li>nodemon</li>
          <li>Express.js</li>
        </ul>
        <h4>Team</h4>
        <ul>
          <li>
            <a>Lucas Roman</a>
          </li>
          <li>
            <a>Dahlia Graves</a>
          </li>
          <li>
            <a>James Harding</a>
          </li>
        </ul>
        <button>Battle Trail</button>
      </div>
    </div>
  );
}
