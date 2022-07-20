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
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="icone_button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="icone_content_stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="icone_content_stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="card_main">
          <h1 className="card_main_title">Develott</h1>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <div className="card_desc">
            <div className="card_desc_user">
              <img
                className="card_desc_user_avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="card_desc_user_name">John D'oeuf</span>
            </div>
            <span className="card_desc_user_date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      {/* FIN DE LA CARTE */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="icone_button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="icone_content_stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="icone_content_stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="card_main">
          <h1 className="card_main_title">Develott</h1>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <div className="card_desc">
            <div className="card_desc_user">
              <img
                className="card_desc_user_avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="card_desc_user_name">John D'oeuf</span>
            </div>
            <span className="card_desc_user_date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="icone_button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="icone_content_stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="icone_content_stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="card_main">
          <h1 className="card_main_title">Develott</h1>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <div className="card_desc">
            <div className="card_desc_user">
              <img
                className="card_desc_user_avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="card_desc_user_name">John D'oeuf</span>
            </div>
            <span className="card_desc_user_date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="icone_button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="icone_content_stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="icone_content_stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="card_main">
          <h1 className="card_main_title">Develott</h1>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <div className="card_desc">
            <div className="card_desc_user">
              <img
                className="card_desc_user_avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="card_desc_user_name">John D'oeuf</span>
            </div>
            <span className="card_desc_user_date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleJobs}>
              {" "}
              <i class="fad fa-users color-prmary"></i>{" "}
            </span>
            <span className="icone_button" onClick={handleToggleTechnos}>
              {" "}
              <i class="fad fa-tools color-prmary"></i>{" "}
            </span>
          </div>
          {toggleTechnos === true && (
            <div className="icone_content_stacks">
              <i>Technos</i>
              <i class="devicon-javascript-plain colored">Javascript</i>
              <i class="devicon-nodejs-plain colored">Node.js</i>
              <i class="devicon-postgresql-plain colored">Postgresql</i>
              <i class="devicon-react-original colored">React</i>
            </div>
          )}
          {toggleJobs === true && (
            <div className="icone_content_stacks">
              <i class="fad fa-database"></i>
              <i class="fad fa-code"></i>
              <i class="fad fa-code-branch"></i>
              <i class="fad fa-crop-alt"></i>
              <i class="fad fa-angle-right  color-prmary"></i>
            </div>
          )}
        </div>
        <div className="card_main">
          <h1 className="card_main_title">Develott</h1>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <div className="card_desc">
            <div className="card_desc_user">
              <img
                className="card_desc_user_avatar"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
              />
              <span className="card_desc_user_name">John D'oeuf</span>
            </div>
            <span className="card_desc_user_date">Le 12 mars 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
