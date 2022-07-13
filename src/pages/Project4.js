import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import P04image from "../assets/images/project04/BL_landing.png";
import project04image02 from "../assets/images/project04/BL_socket.png";
import project04image03 from "../assets/images/project04/BL-review.png";
export default function Project01() {
  return (
    <div className="project04LandingBeigeBkgrd">
      <div className="ProjectContainer">
        <Navbar />
        <div>
          <h1 className="projectTitle">Booklastic</h1>

          <br></br>
          <br></br>
          <h3 className="projectShortBlurb">
            A place for bookies to interact and chat about their favorite books.
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
              href="https://github.com/brookelove/booklastic-blog-place"
              className="linksToProject"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fathomless-bastion-58602.herokuapp.com/"
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
            Welcome to Booklastic Blog Place! We aim to create a community of
            people who love to read! Come visit our site to share with our
            community what you have been reading and your review about your
            book. Save your review to your personal library page, but also share
            it with the world! Additionally, you can use live chat feature to
            communicate with bookies in real time! On the backend, we have a
            library database of books that stores both titles and authors and
            links to associated genres. This website is for use of finding a
            good book recommendations for the next time you are ready to head to
            the bookstore!
          </p>
          <br></br>
          <div className="project04smallImage01">
            <img
              src={project04image02}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <div className="project04smallImage02">
            <img
              src={project04image03}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <p className="projectDescription">
            During this program used a lot of technologies. Using Javascript,
            HTML, and CSS. Durnign theis project a new application called
            Socket.io was implemented and allows for live communication between
            people. This project was intense but, taught my team and I a lot of
            organization and great accomplishments.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="projectButton">
            <button>
              {" "}
              <a
                href="https://fathomless-bastion-58602.herokuapp.com/"
                target="_blank"
                className="buttonLink"
              >
                Booklastic
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
