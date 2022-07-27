// import PropTypes from 'prop-types';
// import React, { useState } from "react";
import "./profil.scss";
import "../Cards/cards.scss";

import SearchBarTechnologiesUserProfile from "../SearchBar/searchBarTechnologiesUserProfile";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useSelector, useDispatch } from "react-redux";

import {
  setIsEditDescriptionActive,
  setIsEditTechnologiesActive,
  removeUserTechnologyData,
} from "./../../pages/Profiles/updtateUserProfileSlice";

function Profil() {
  const dispatch = useDispatch();

  const isEditDescriptionActive = useSelector(
    (state) => state.updateProfile.isEditDescriptionActive
  );

  const isEditTechnologiesActive = useSelector(
    (state) => state.updateProfile.isEditTechnologiesActive
  );

  const technologiesData = useSelector(
    (state) => state.updateProfile.userTechnologiesData
  );

  console.log(technologiesData);

  const languagesData = technologiesData.filter((technology) =>
    technology.tags.includes("language")
  );

  const frameworksData = technologiesData.filter((technology) =>
    technology.tags.includes("framework")
  );

  const othersData = technologiesData.filter(
    (technology) =>
      !technology.tags.includes("framework") &&
      !technology.tags.includes("language")
  );

  return (
    <div className="profil ">
      <div className="profil_desc">
        <div className="desc_container_description">
          <img
            className="name_container_avatar"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
            alt="Profil"
          />
          <div className="desc_container_description-user">
            <span className="name_container_user">Bruce Wayne</span>

            <p className="desc_container_role">Lead Dev Front</p>
            <p className="desc_container_title">
              <i class="fas fa-circle success"></i> Disponible pour débuter un
              nouveau projet
            </p>
          </div>
          <div className="desc_container_description-links">
            <p className="desc_container_title">
              <i class="fal fa-map-marked"></i> Montpellier
            </p>
            <p className="desc_container_title">
              <i class="fal fa-envelope"></i> batman@batmail.batfr
            </p>
            <p className="desc_container_title">
              <i class="fab fa-github"></i> <a href="#"> Superman-Suck</a>{" "}
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
            {isEditDescriptionActive === true && (
              <form>
                <Editor
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  toolbar={{
                    options: [
                      "inline",
                      "blockType",
                      "fontSize",
                      "list",
                      "textAlign",
                      "colorPicker",
                      "link",
                      "emoji",
                      "history",
                    ],
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: false },
                    image: { component: undefined },
                    blockType: {
                      inDropdown: true,
                      options: ["Normal", "Blockquote", "Code"],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                  }}
                />
                <button
                  type="submit"
                  className="main-button-colored create-project-button"
                  onClick={() => dispatch(setIsEditDescriptionActive())}
                >
                  Valider
                </button>
              </form>
            )}
            {isEditDescriptionActive === false && (
              <>
                <div className="profile-edition-btns-container">
                  <h4 className="desc_container_main">
                    Bruce en quelques mots...
                  </h4>
                  <i
                    class="fal fa-edit"
                    onClick={() => dispatch(setIsEditDescriptionActive())}
                  ></i>
                </div>
                <p>
                  Vous savez, moi je ne crois pas qu’il y ait de bonne ou de
                  mauvaise situation. Moi, si je devais résumer ma vie
                  aujourd’hui avec vous, je dirais que c’est d’abord des
                  rencontres. <br />
                  <br />
                  Des gens qui m’ont tendu la main, peut-être à un moment où je
                  ne pouvais pas, où j’étais seul chez moi. Et c’est assez
                  curieux de se dire que les hasards, les rencontres forgent une
                  destinée...
                  <a className="card_main_desc_link" href="#">
                    voir plus.
                  </a>
                </p>
              </>
            )}
          </div>
          {isEditTechnologiesActive === true && (
            <div className="desc_container_technos">
              <div className="desc_container_technos">
                <SearchBarTechnologiesUserProfile />
                <div className="user-technologies margin-top2">
                  <div className="project-technologies-languages">
                    <h4>Langages</h4>
                    {languagesData.length === 0 && (
                      <span className="form-technologies-empty">vide...</span>
                    )}
                    {languagesData.map((techno) => (
                      <div
                        key={techno.name}
                        className="form-technologies-items"
                      >
                        <p className="margin0">
                          <i
                            className={`devicon-${techno.name}-plain colored`}
                          ></i>{" "}
                          {techno.name}
                        </p>
                        <i
                          className="fal fa-backspace form-technologies-delete"
                          onClick={() =>
                            dispatch(removeUserTechnologyData(techno.name))
                          }
                        ></i>
                      </div>
                    ))}
                  </div>
                  <div className="project-technologies-frameworks">
                    <h4>Frameworks</h4>
                    {frameworksData.length === 0 && (
                      <span className="form-technologies-empty">vide...</span>
                    )}
                    {frameworksData.map((techno) => (
                      <div
                        key={techno.name}
                        className="form-technologies-items"
                      >
                        <p className="margin0">
                          <i
                            className={`devicon-${techno.name}-plain colored`}
                          ></i>{" "}
                          {techno.name}
                        </p>
                        <i
                          className="fal fa-backspace form-technologies-delete"
                          onClick={() =>
                            dispatch(removeUserTechnologyData(techno.name))
                          }
                        ></i>
                      </div>
                    ))}
                  </div>
                  <div className="project-technologies-others">
                    <h4>Autres</h4>
                    {othersData.length === 0 && (
                      <span className="form-technologies-empty">vide...</span>
                    )}
                    {othersData.map((techno) => (
                      <div
                        key={techno.name}
                        className="form-technologies-items"
                      >
                        <p className="margin0">
                          <i
                            className={`devicon-${techno.name}-plain colored`}
                          ></i>{" "}
                          {techno.name}
                        </p>
                        <i
                          className="fal fa-backspace form-technologies-delete"
                          onClick={() =>
                            dispatch(removeUserTechnologyData(techno.name))
                          }
                        ></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="main-button-colored create-project-button"
                onClick={() => dispatch(setIsEditTechnologiesActive())}
              >
                Valider
              </button>
            </div>
          )}
          {isEditTechnologiesActive === false && (
            <div className="desc_container_technos">
              <div className="profile-edition-btns-container">
                <h4 className="desc_container_main">Compétences</h4>
                <i
                  class="fal fa-edit"
                  onClick={() => dispatch(setIsEditTechnologiesActive())}
                ></i>
              </div>
              <div className="user-technologies">
                <div className="project-technologies-languages">
                  <h4>Langages</h4>
                  {languagesData.length === 0 && (
                    <span className="form-technologies-empty">vide...</span>
                  )}
                  {languagesData.map((techno) => (
                    <p>
                      <i class={`devicon-${techno.name}-plain colored`}></i>
                      {techno.name}
                    </p>
                  ))}
                </div>
                <div className="project-technologies-frameworks">
                  <h4>Frameworks</h4>
                  {frameworksData.length === 0 && (
                    <span className="form-technologies-empty">vide...</span>
                  )}
                  {frameworksData.map((techno) => (
                    <p>
                      <i class={`devicon-${techno.name}-plain colored`}></i>
                      {techno.name}
                    </p>
                  ))}
                </div>
                <div className="project-technologies-others">
                  <h4>Autres</h4>
                  {othersData.length === 0 && (
                    <span className="form-technologies-empty">vide...</span>
                  )}
                  {othersData.map((techno) => (
                    <p>
                      <i class={`devicon-${techno.name}-plain colored`}></i>
                      {techno.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
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
