// import PropTypes from 'prop-types';
import React, { useState } from "react";
import "./cards.scss";

import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

function ProjectList() {
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      width: "auto",
      padding: "8px 20px",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const [toggleJobs, setToggleJobs] = useState(false);
  const [toggleTechnos, setToggleTechnos] = useState(false);

  const handleToggleJobs = () => {
    setToggleJobs(!toggleJobs);
  };

  const handleToggleTechnos = () => {
    setToggleTechnos(!toggleTechnos);
    setToggleJobs(!toggleJobs);
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
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            Co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-vector/realistic-ui-ux-landing-page-template_52683-68898.jpg?t=st=1657989378~exp=1657989978~hmac=7dbf26d36ff7850abde76f313dbb1a591b368ffb72079a26be1dda0f2e93256e&w=996"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg?t=st=1657989532~exp=1657990132~hmac=08608f29d21284c783fd75aeffcf6524583b99dcc59a6a7793a305f39890f587&w=996"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/whatsapp-messenger-template-mobile-phone-ui-ux-app-presentation-mockup_106244-1512.jpg?t=st=1658753998~exp=1658754598~hmac=cc07d20adc270f09bbbdac5a54f6fe157673ed5fff2e6a7ecffdf58914405209&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg?t=st=1657989532~exp=1657990132~hmac=08608f29d21284c783fd75aeffcf6524583b99dcc59a6a7793a305f39890f587&w=996"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/phone-screen-ui-ux-app-presentation-mockup_165789-263.jpg?t=st=1658753998~exp=1658754598~hmac=f3537ea4a10c5ce2498f1ba19be5ba19a1945803d5d484d557edd29b8e3c1cfe&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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

      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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
      {/* UNE CARTE  */}
      <div className="card">
        <img
          src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
          className="card_img"
        />
        <div class="icone_content">
          <div className="icone_content_btns">
            <span className="icone_button" onClick={handleToggleTechnos}>
              <i class="fal fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="card_technologies_container">
          <div className="icone_button" onClick={handleToggleTechnos}>
            <img src={require("./../../assets/images/v3-logo-colorize.png")} />
          </div>
        </div>
        <AnimatePresence>
          {toggleTechnos && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="card_technologies_container_icons"
            >
              <i class="devicon-javascript-plain colored icon-techno"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-postgresql-plain colored"></i>
              <i class="fal fa-chevron-right icon-next"></i>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card_main">
          <Link to="/projet/1">
            <h1 className="card_main_title">Develott</h1>
          </Link>
          <p className="card_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...{" "}
            <a className="card_main_desc_link" href="#">
              voir plus.
            </a>
          </p>
          <p className="card_main_profiles">
            <span
              title="Developpeur Front-End, DevOps, UX Designer"
              className="span-strong"
            >
              4{" "}
            </span>
            co-équipier(s) recherché(s)
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
    </div>
  );
}

export default ProjectList;
