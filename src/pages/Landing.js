import React from "react";
import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <div>
      {/* container that is for short blurb */}
      <div>
        <h3>Brooke Love</h3>
        <p>Oriendted Full Stack Developer</p>
        <p>
          Currently working on <a>Evergreen Body Mod</a>
        </p>
      </div>
      {/* contaier for the landing link tabs */}
      <div>
        <Link to="/"><h1>Work</h1></Link>
        <Link to="/about"><h1>About</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
      </div>
    </div>
  );
}
