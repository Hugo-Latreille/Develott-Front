/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";

// import required modules
import { Navigation, Pagination } from "swiper";

function Slider() {
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
  };

  return (
    <div data-tip data-for="slide" className="slider-container">
      <ReactTooltip
        id="slide"
        place="top"
        effect="solid"
        border
        textColor="white"
        backgroundColor="black"
        borderColor="#A2A1FD"
        arrowColor="#A2A1FD"
      >
        Attrapez et glisser pour faire défiler les projets !
      </ReactTooltip>
      <div className="container">
        {/* ***************************************PARAMETRES EFFET************************************ */}
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            760: {
              width: 760,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            900: {
              width: 900,
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* ***************************************PARAMETRES EFFET************************************ */}
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-vector/realistic-ui-ux-landing-page-template_52683-68898.jpg?t=st=1657989378~exp=1657989978~hmac=7dbf26d36ff7850abde76f313dbb1a591b368ffb72079a26be1dda0f2e93256e&w=996"
                className="slide-img"
              />
              <div className="img-content">
                <div className="img-content-btns">
                  <div className="icone_content_btns">
                    <span
                      className="icone_button"
                      onClick={handleToggleTechnos}
                    >
                      <i className="fal fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_technologies_container">
                <div className="icone_button" onClick={handleToggleTechnos}>
                  <img
                    src={require("./../../assets/images/v3-logo-colorize.png")}
                  />
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
                    <i className="devicon-javascript-plain colored icon-techno"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="fal fa-chevron-right icon-next"></i>{" "}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
                </p>
                <div className="card_main_profiles">
                  <span data-tip data-for="co-worker" className="span-strong">
                    4{" "}
                    <ReactTooltip
                      id="co-worker"
                      place="right"
                      effect="solid"
                      border
                      textColor="#000000"
                      backgroundColor="#A2A1FD"
                      borderColor="#000000"
                      arrowColor="#000000"
                    >
                      Developpeur Front-End, DevOps, UX Designer
                    </ReactTooltip>
                  </span>
                  Co-équipier(s) recherché(s)
                </div>
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
                      alt=""
                    />
                    <span className="slider-user-name">Uleur hank</span>
                  </div>
                  <span className="slider-date">Le 12 mars 2022</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
                className="slide-img"
                alt=""
              />
              <div className="img-content">
                <div className="img-content-btns">
                  <div className="icone_content_btns">
                    <span
                      className="icone_button"
                      onClick={handleToggleTechnos}
                    >
                      <i className="fal fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_technologies_container">
                <div className="icone_button" onClick={handleToggleTechnos}>
                  <img
                    src={require("./../../assets/images/v3-logo-colorize.png")}
                    alt=""
                  />
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
                    <i className="devicon-javascript-plain colored icon-techno"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="fal fa-chevron-right icon-next"></i>{" "}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
                </p>
                <p className="card_main_profiles">
                  <span data-tip data-for="co-worker" className="span-strong">
                    4{" "}
                  </span>
                  Co-équipier(s) recherché(s)
                </p>
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
                      alt=""
                    />
                    <span className="slider-user-name">Uleur hank</span>
                  </div>
                  <span className="slider-date">Le 12 mars 2022</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg?t=st=1657989532~exp=1657990132~hmac=08608f29d21284c783fd75aeffcf6524583b99dcc59a6a7793a305f39890f587&w=996"
                className="slide-img"
                alt=""
              />
              <div className="img-content">
                <div className="img-content-btns">
                  <div className="icone_content_btns">
                    <span
                      className="icone_button"
                      onClick={handleToggleTechnos}
                    >
                      <i className="fal fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_technologies_container">
                <div className="icone_button" onClick={handleToggleTechnos}>
                  <img
                    src={require("./../../assets/images/v3-logo-colorize.png")}
                    alt=""
                  />
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
                    <i className="devicon-javascript-plain colored icon-techno"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="fal fa-chevron-right icon-next"></i>{" "}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
                      alt=""
                    />
                    <span className="slider-user-name">Uleur hank</span>
                  </div>
                  <span className="slider-date">Le 12 mars 2022</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
                className="slide-img"
                alt=""
              />
              <div className="img-content">
                <div className="img-content-btns">
                  <div className="icone_content_btns">
                    <span
                      className="icone_button"
                      onClick={handleToggleTechnos}
                    >
                      <i className="fal fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_technologies_container">
                <div className="icone_button" onClick={handleToggleTechnos}>
                  <img
                    src={require("./../../assets/images/v3-logo-colorize.png")}
                    alt=""
                  />
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
                    <i className="devicon-javascript-plain colored icon-techno"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="fal fa-chevron-right icon-next"></i>{" "}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
                      alt=""
                    />
                    <span className="slider-user-name">Uleur hank</span>
                  </div>
                  <span className="slider-date">Le 12 mars 2022</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-psd/whatsapp-messenger-template-mobile-phone-ui-ux-app-presentation-mockup_106244-1512.jpg?t=st=1658753998~exp=1658754598~hmac=cc07d20adc270f09bbbdac5a54f6fe157673ed5fff2e6a7ecffdf58914405209&w=900"
                className="slide-img"
                alt=""
              />
              <div className="img-content">
                <div className="img-content-btns">
                  <div className="icone_content_btns">
                    <span
                      className="icone_button"
                      onClick={handleToggleTechnos}
                    >
                      <i className="fal fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_technologies_container">
                <div className="icone_button" onClick={handleToggleTechnos}>
                  <img
                    src={require("./../../assets/images/v3-logo-colorize.png")}
                    alt=""
                  />
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
                    <i className="devicon-javascript-plain colored icon-techno"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="fal fa-chevron-right icon-next"></i>{" "}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
                      alt=""
                    />
                    <span className="slider-user-name">Uleur hank</span>
                  </div>
                  <span className="slider-date">Le 12 mars 2022</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
