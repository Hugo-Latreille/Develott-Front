// import PropTypes from 'prop-types';
// import React, { useState } from "react";
import "./profil.scss";
import "../Cards/cards.scss";

function Profil() {
  return (
    <div className="profil container">
      <div className="profil_desc">
        <div className="name_container">
          <span className="name_container_user">Bruce Wayne</span>
          <img
            className="name_container_avatar"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
            alt="Profil"
          />
        </div>
        <div className="desc_container_description">
          <h4 className="desc_container_titlefirst">
            <i class="far fa-crown"></i> Rôle
          </h4>
          <p className="desc_container_role">Lead Dev Front</p>
          <h4 className="desc_container_title">
            <i class="fal fa-envelope"></i> E-Mail
          </h4>
          <a className="desc_container_email">batman@batmail.batfr</a>
          <h4 className="desc_container_title">
            <i class="fal fa-key"></i> Mot de Passe
          </h4>
          <a href="#" className="desc_container_password">
            Changer mon mot de passe
          </a>
          <h4 className="desc_container_title">
            <i class="fab fa-github"></i> Github
          </h4>
          <a href="#" className="desc_container_github">
            supermansuck
          </a>
          <h4 className="desc_container_title">
            <i class="fab fa-linkedin"></i> Linkedin
          </h4>
          <a href="#" className="desc_container_linkedin">
            Bruce Wayne
          </a>
        </div>
      </div>
      <div className="profil_technos">
        <div className="desc_container">
          <h4 className="desc_container_main">Description</h4>
          <p>
            Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise
            situation. Moi, si je devais résumer ma vie aujourd’hui avec vous,
            je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu
            la main, peut-être à un moment où je ne pouvais pas, où j’étais seul
            chez moi. Et c’est assez curieux de se dire que les hasards, les
            rencontres forgent une destinée...
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
        </div>
        <div className="desc_container_technos">
          <div className="big_title">
            <h4 className="desc_container_main">Technos</h4>
          </div>
          <div className="icone_container">
            <i
              title="Javascript"
              className="devicon-javascript-plain colored technos_logo"
            >
              <p className="icone_container_text">Javascript</p>
            </i>

            <i
              title="Node.js"
              className="devicon-nodejs-plain colored technos_logo"
            >
              <p className="icone_container_text">Node.js</p>
            </i>
            <i
              title="Postgresql"
              className="devicon-postgresql-plain colored technos_logo"
            >
              <p className="icone_container_text">Postgresql</p>
            </i>
            <i
              title="React"
              className="devicon-react-original colored technos_logo"
            >
              <p className="icone_container_text">React</p>
            </i>
            <i
              title="Angular.js"
              className="devicon-angularjs-plain colored technos_logo"
            >
              <p className="icone_container_text">Angular.js</p>
            </i>
            <i
              title="C++"
              className="devicon-cplusplus-plain colored technos_logo"
            >
              <p className="icone_container_text">C++</p>
            </i>
            <i
              title="Docker"
              className="devicon-docker-plain colored technos_logo"
            >
              <p className="icone_container_text">Docker</p>
            </i>
            <i
              title="After-Effects"
              className="devicon-aftereffects-plain colored technos_logo"
            >
              <p className="icone_container_text">After Effects</p>
            </i>
            <i title="Hugo" className="devicon-hugo-plain colored technos_logo">
              <p className="icone_container_text">Hugo</p>
            </i>
            <i
              title="Pandas"
              className="devicon-pandas-plain colored technos_logo"
            >
              <p className="icone_container_text">Pandas</p>
            </i>
          </div>
        </div>
      </div>
      <div className="profil_projets">
        <div className="desc_container_project">
          <div className="big_title">
            <h4 className="desc_container_main">Mon Projet</h4>
          </div>
          <div className="card_project">
            <img
              src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
              className="card_img"
            />
            <div className="card_main">
              <h1 className="card_main_title">Develott</h1>
              <p className="card_main_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod...{" "}
                <a className="card_main_desc_link" href="#">
                  voir plus.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
