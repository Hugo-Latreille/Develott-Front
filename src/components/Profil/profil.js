// import PropTypes from 'prop-types';
// import React, { useState } from "react";
import "./profil.scss";
import "../Cards/cards.scss";

function Profil() {
  return (
    <div className="profil ">
      <div className="profil_desc">
        <div className="name_container">
          <img
            className="name_container_avatar"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
            alt="Profil"
          />
        </div>
        <div className="desc_container_description">
          <div className="desc_container_description-user">
            <span className="name_container_user">Bruce Wayne</span>

            <p className="desc_container_role">Lead Dev Front</p>
            <p className="desc_container_title">
              <i class="fal fa-map-marked"></i> Montpellier
            </p>
          </div>
          <div className="desc_container_description-links">
            <p className="desc_container_title">
              <i class="fal fa-envelope"></i> batman@batmail.batfr
            </p>

            <p className="desc_container_title">
              <i class="fab fa-github"></i> <a href="#"> Superman-Suck</a>
            </p>

            <p className="desc_container_title">
              <i class="fab fa-linkedin"></i> <a href="#"> Bruce Wayne</a>
            </p>

            <p className="desc_container_title">
              <i class="far fa-laptop"></i> <a href="#"> brucewayne.com</a>
            </p>
          </div>

          <p className="desc_container_title">
            <i class="fal fa-key"></i> Mot de Passe
          </p>
        </div>
      </div>
      <div className="profil-middle">
        <div className="profil_technos">
          <div className="desc_container">
            <h4 className="desc_container_main">Bruce en quelques mots...</h4>
            <p>
              Vous savez, moi je ne crois pas qu’il y ait de bonne ou de
              mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui
              avec vous, je dirais que c’est d’abord des rencontres. <br />
              <br />
              Des gens qui m’ont tendu la main, peut-être à un moment où je ne
              pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de
              se dire que les hasards, les rencontres forgent une destinée...
              <a className="card_main_desc_link" href="#">
                voir plus.
              </a>
            </p>
          </div>
          <div className="desc_container_technos">
            <div className="big_title">
              <h4 className="desc_container_main">Compétences</h4>
            </div>
            <div className="user-technologies">
              <div className="project-technologies-languages">
                <h4>Langages</h4>
                <p>
                  <i class="devicon-javascript-plain colored"></i> kllkj
                </p>
                <p>
                  <i class="devicon-html5-plain colored"></i>
                  Javascript
                </p>
                <p>
                  <i class="devicon-css3-plain colored"></i>
                  Css3
                </p>
                <p>
                  <i class="devicon-postgresql-plain colored"></i>
                  PostgreSql
                </p>
              </div>
              <div className="project-technologies-frameworks">
                <h4>Frameworks</h4>
                <p>
                  <i class="devicon-bootstrap-plain colored"></i>
                  Bootstrap
                </p>
                <p>
                  <i class="devicon-react-plain colored"></i>
                  React
                </p>
                <p>
                  <i class="devicon-redux-plain colored"></i>
                  Redux
                </p>
                <p>
                  <i class="devicon-rails-plain colored"></i>
                  Rails
                </p>
              </div>
              <div className="project-technologies-others">
                <h4>Autres</h4>
                <p>
                  <i class="devicon-github-plain colored"></i>
                  Github
                </p>
                <p>
                  <i class="devicon-trello-plain colored"></i>
                  Trello
                </p>
                <p>
                  <i class="devicon-illustrator-plain colored"></i>
                  Illustrator
                </p>
                <p>
                  <i class="devicon-canva-plain colored"></i>
                  Canva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profil_projets">
        <div className="desc_container_project">
          <div className="big_title">
            <h4 className="desc_container_main">Projet(s)</h4>
          </div>
          <div className="card_project">
            <img
              src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
              className="card_img"
            />
            <div className="card_main">
              <h3 className="card_main_title-project">Develott</h3>
              <p className="card_main_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod...{" "}
                <a className="card_main_desc_link" href="#">
                  voir plus.
                </a>
              </p>
            </div>
          </div>
          <div className="card_project">
            <img
              src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
              className="card_img"
            />
            <div className="card_main">
              <h3 className="card_main_title-project">Develott</h3>
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
