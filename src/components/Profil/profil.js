// import PropTypes from 'prop-types';
// import React, { useState } from "react";
import "./profil.scss";

function Profil() {
  return (
    <div className="profil">
      <div className="profil_desc">
        <div className="name_container">
          <span className="name_container_user">Bruce Wayne</span>
          <img
            className="name_container_avatar"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
            alt="Profil"
          />
        </div>
        <div className="desc_container">
          <h2 className="desc_container_title">Description</h2>
          <p className="desc_container_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...
          </p>
          <h2 className="desc_container_title">E-Mail</h2>
          <p className="desc_container_email">batman@batmail.batfr</p>
          <h2 className="desc_container_title">Mot de Passe</h2>
          <a href="#" className="desc_container_password">
            Changer mon mot de passe
          </a>
          <h2 className="desc_container_title">Github</h2>
          <a href="#" className="desc_container_github">
            supermansuck
          </a>
          <h2 className="desc_container_title">Linkedin</h2>
          <a href="#" className="desc_container_linkedin">
            Bruce Wayne
          </a>
        </div>
      </div>
      <div className="profil_technos">
        <div className="name_container">
          <span className="card_desc_user_name">John D'oeuf</span>
        </div>
        <div className="desc_container">
          <h2 className="desc_container_title">Description</h2>
          <p className="desc_container_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...
          </p>
          <h2 className="desc_container_title">E-Mail</h2>
          <p className="desc_container_email">batman@batmail.batfr</p>
          <h2 className="desc_container_title">Mot de Passe</h2>
          <a href="#" className="desc_container_password">
            Changer mon mot de passe
          </a>
          <h2 className="desc_container_title">Github</h2>
          <a href="#" className="desc_container_github">
            supermansuck
          </a>
          <h2 className="desc_container_title">Linkedin</h2>
          <a href="#" className="desc_container_linkedin">
            Bruce Wayne
          </a>
        </div>
      </div>
      <div className="profil_projets">
        <div className="name_container">
          <span className="card_desc_user_name">John D'oeuf</span>
        </div>
        <div className="desc_container">
          <h2 className="desc_container_title">Description</h2>
          <p className="desc_container_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...
          </p>
          <h2 className="desc_container_title">E-Mail</h2>
          <p className="desc_container_email">batman@batmail.batfr</p>
          <h2 className="desc_container_title">Mot de Passe</h2>
          <a href="#" className="desc_container_password">
            Changer mon mot de passe
          </a>
          <h2 className="desc_container_title">Github</h2>
          <a href="#" className="desc_container_github">
            supermansuck
          </a>
          <h2 className="desc_container_title">Linkedin</h2>
          <a href="#" className="desc_container_linkedin">
            Bruce Wayne
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profil;
