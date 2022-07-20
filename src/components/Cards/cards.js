// import PropTypes from 'prop-types';
import React, { useState } from "react";

import "./cards.scss";

function ProjectList() {
  const [toggleJobs, setToggleJobs] = useState(false);
  const [toggleTechnos, setToggleTechnos] = useState(false);

  const handleToggleJobs = () => {
    setToggleJobs(!toggleJobs);
  };

  const handleToggleTechnos = () => {
    setToggleTechnos(!toggleTechnos);
  };

  return (
    <div className="cards">
      {/* UNE CARTE  */}
      <div className="slide">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="slide-img"
        />
        <div class="img-content">
          <div className="img-content-btns">
            <span className="stack-button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="stack-button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
        </div>
        <div className="slider-main-content">
          {toggleTechnos === true && (
            <div className="img-content-stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
              {/* <i class="devicon-redux-original colored"></i> */}
            </div>
          )}
          {toggleJobs === true && (
            <div className="img-content-stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
          <h1 className="slider-title">Develott</h1>
          <p className="slider-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod... <a href="#">voir plus.</a>
          </p>
          <div className="slider-content-container">
            <div className="slider-user-container">
              <img
                className="slider-avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="slider-user-name">John D'oeuf</span>
            </div>
            <span className="slider-date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      {/* FIN DE LA CARTE */}
      <div className="slide">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="slide-img"
        />
        <div class="img-content">
          <div className="img-content-btns">
            <span className="stack-button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="stack-button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="img-content-stacks">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              {/* <i class="devicon-redux-original colored"></i> */}
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="img-content-stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="slider-main-content">
          <h1 className="slider-title">Develott</h1>
          <p className="slider-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod... <a href="#">voir plus.</a>
          </p>
          <div className="slider-content-container">
            <div className="slider-user-container">
              <img
                className="slider-avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="slider-user-name">John D'oeuf</span>
            </div>
            <span className="slider-date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="slide">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="slide-img"
        />
        <div class="img-content">
          <div className="img-content-btns">
            <span className="stack-button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="stack-button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="img-content-stacks">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              {/* <i class="devicon-redux-original colored"></i> */}
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="img-content-stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="slider-main-content">
          <h1 className="slider-title">Develott</h1>
          <p className="slider-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod... <a href="#">voir plus.</a>
          </p>
          <div className="slider-content-container">
            <div className="slider-user-container">
              <img
                className="slider-avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="slider-user-name">John D'oeuf</span>
            </div>
            <span className="slider-date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="slide">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="slide-img"
        />
        <div class="img-content">
          <div className="img-content-btns">
            <span className="stack-button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="stack-button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="img-content-stacks">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              {/* <i class="devicon-redux-original colored"></i> */}
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="img-content-stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="slider-main-content">
          <h1 className="slider-title">Develott</h1>
          <p className="slider-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod... <a href="#">voir plus.</a>
          </p>
          <div className="slider-content-container">
            <div className="slider-user-container">
              <img
                className="slider-avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="slider-user-name">John D'oeuf</span>
            </div>
            <span className="slider-date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="slide">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="slide-img"
        />
        <div class="img-content">
          <div className="img-content-btns">
            <span className="stack-button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="stack-button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="img-content-stacks">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              {/* <i class="devicon-redux-original colored"></i> */}
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="img-content-stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="slider-main-content">
          <h1 className="slider-title">Develott</h1>
          <p className="slider-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod... <a href="#">voir plus.</a>
          </p>
          <div className="slider-content-container">
            <div className="slider-user-container">
              <img
                className="slider-avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="slider-user-name">John D'oeuf</span>
            </div>
            <span className="slider-date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
