import React from "react"
import "../assets/styles/Project.css";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom"
export default function Project(){
    const location = useLocation();


    console.log(location)
    return(
        <div className="project01LandingBeigeBkgrd">
        <div className="ProjectContainer">
          <Navbar />
          <div className="outsideContianer">
            <h1 className="projectTitle">{location.state.title}</h1>
{/*   
            <br></br>
            <br></br> */}
            <h3 className="projectShortBlurb">
              {location.state.blurb}
            </h3>
            <br></br>
            <div className="projectMainImage">
              <img
                src={location.state.bigImage}
                alt="Landing Page of Battle Trail"
                className="projectImage"
              />
            </div>
            <section className="linksToProjectContainer">
              <a
                href={location.state.github}
                className="linksToProject"
                target="_blank"
              >
                Github
              </a>
              <a
                href={location.state.website}
                target="_blank"
                className="linksToProject"
              >
                Website
              </a>
            </section>
            <section className="toolsContainer"> 
              <h3 className="subText">Tools Used</h3>
              <section className="chipContainer">
                {location.state.tools.map(tool=> {
                  return<p className="chip">{tool}</p>
                })

                }
              </section>
            </section>
            {/* <br></br>
            <br></br>
            <br></br> */}
            <p className="projectDescription">
              {location.state.description}
            </p>
            <br></br>
            <div className="projectLeftImage">
              <img
                src={location.state.small02}
                alt="Character Select"
                className="project01Image02 projectImage"
              />
            </div>
            <div className="projectRightImage">
              <img
                src={location.state.small01}
                alt="Character Select"
                className="project01Image02 projectImage"
              />
            </div>
            <div className="projectButton">
              <button>
                <a
                  href={location.state.website}
                  target="_blank"
                  className="buttonLink"
                >
                  {location.state.title}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}