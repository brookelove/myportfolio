import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import bigImage from "../assets/images/project01/BT_landing.png";
import smallImage01 from "../assets/images/project01/BT_charselet.png";
import smallImage02 from "../assets/images/project01/BT_battle.png";
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
              src={bigImage}
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
            Welcome to Booklastic Blog Place! This application is a full-stack
            blog where bookies can bond. We aim to recruit users from around the
            world, to create a community of people who love to read! Come visit
            our site to share with our community what you have been reading and
            your review (including thoughts, opinions and questions) about your
            book. Save your review to your personal library page, but also share
            it with the world! From your personal library page, you can
            edit/delete your reviews if needed. From the homepage, you can read
            all reviews and leave comments on their! Interact with others by
            including questions in your review for them to comment on, or
            commenting on others reviews. Additionally, use our live chat
            feature to communicate with bookies in real time! On the backend, we
            have a library database of books that stores both titles and authors
            and links to associated genres. You can choose from a book with
            already have, or add a new one! Additionally, we house a database of
            our user accounts (first name, email and encrypted passwords).
            Associated to each user are their blogs, books, and comments! We aim
            to help you find a good book recommendation (or a few) for the next
            time you are ready to head to the bookstore!
          </p>
          <br></br>
          <div className="project01SmallImage01">
            <img
              src={smallImage01}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <div className="project01SmallImage02">
            <img
              src={smallImage02}
              alt="Character Select"
              className="project01Image02"
            />
          </div>
          <p className="projectDescription">
            During this program used a lot of technologies. Socket.io was new
            but allows for live communication between people. This project was
            intense but, taught my team and I a lot of organization and great
            accomplishments.
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
