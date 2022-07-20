// import PropTypes from 'prop-types';
// import React, { useState } from "react";
import "./profil.scss";
import "../Cards/cards.scss";
import logomail from "../../assets/images/mailicon.png";
import logokey from "../../assets/images/keyicon.png";
import logogit from "../../assets/images/githubicon.png";
import logolink from "../../assets/images/linkedinicone.png";

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
          <h2 className="desc_container_main">Description</h2>
          <p className="desc_container_description">
            Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise
            situation. Moi, si je devais résumer ma vie aujourd’hui avec vous,
            je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu
            la main, peut-être à un moment où je ne pouvais pas, où j’étais seul
            chez moi. Et c’est assez curieux de se dire que les hasards, les
            rencontres forgent une destinée... Parce que quand on a le goût de
            la chose, quand on a le goût de la chose bien faite, le beau geste,
            parfois on ne trouve pas l’interlocuteur en face je dirais, le
            miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je
            disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la
            vie, je lui dis merci, je chante la vie, je danse la vie... je ne
            suis qu’amour ! Et finalement, quand des gens me disent « Mais
            comment fais-tu pour avoir cette humanité ? », je leur réponds très
            simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé
            aujourd’hui à entreprendre une construction mécanique... mais demain
            qui sait ? Peut-être simplement à me mettre au service de la
            communauté, à faire le don, le don de soi.
          </p>
          <div className="desc_container_icon_container">
            <img className="desc_container_icon" src={logomail} alt="Mail" />
            <h2 className="desc_container_title">E-Mail</h2>
          </div>
          <a className="desc_container_email">batman@batmail.batfr</a>
          <div className="desc_container_icon_container">
            <img className="desc_container_icon" src={logokey} alt="Password" />
            <h2 className="desc_container_title">Mot de Passe</h2>
          </div>
          <a href="#" className="desc_container_password">
            Changer mon mot de passe
          </a>
          <div className="desc_container_icon_container">
            <img className="desc_container_icon" src={logogit} alt="Github" />
            <h2 className="desc_container_title">Github</h2>
          </div>
          <a href="#" className="desc_container_github">
            supermansuck
          </a>
          <div className="desc_container_icon_container">
            <img
              className="desc_container_icon"
              src={logolink}
              alt="Linkedin"
            />
            <h2 className="desc_container_title">Linkedin</h2>
          </div>
          <a href="#" className="desc_container_linkedin">
            Bruce Wayne
          </a>
        </div>
      </div>
      <div className="profil_technos">
        <div className="big_title">
          <h2 className="desc_container_main">Technos</h2>
        </div>
        <div className="icone_container">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-react-original colored"></i>
        </div>
        <div className="techno_title">
          <h2 className="desc_container_main">Mes Roles</h2>
        </div>
        <div className="desc_container">
          <h2 className="desc_container_title">Role Principale</h2>
          <p className="desc_container_description">Lead Dev Front</p>
          <h2 className="desc_container_title">Mon deuxieme Choix</h2>
          <p className="desc_container_description">Justicier Masqué</p>
        </div>
      </div>
      <div className="profil_projets">
        <div className="big_title">
          <h2 className="project_container">Mon Projet</h2>
        </div>
        <div className="project_container_main">
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
