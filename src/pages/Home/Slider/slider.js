import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";

// import required modules
import { Navigation, Pagination } from "swiper";

function Slider() {
  const [toggleJobs, setToggleJobs] = useState(false);
  const [toggleTechnos, setToggleTechnos] = useState(false);

  const handleToggleJobs = () => {
    setToggleJobs(!toggleJobs);
  };

  const handleToggleTechnos = () => {
    setToggleTechnos(!toggleTechnos);
  };

  return (
    <div className="slider-container">
      <div className="container">
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
          //   pagination={{
          //     type: "progressbar",
          //   }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
                className="slide-img"
                alt="project image presentation"
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
                <div className="icons-container">
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
                    <div className="img-content-jobs">
                      <i class="fad fa-database"></i>
                      <i class="fad fa-code"></i>
                      <i class="fad fa-code-branch"></i>
                      <i class="fad fa-crop-alt"></i>
                      <i class="fad fa-angle-right  color-prmary"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/free-vector/realistic-ui-ux-landing-page-template_52683-68898.jpg?t=st=1657989378~exp=1657989978~hmac=7dbf26d36ff7850abde76f313dbb1a591b368ffb72079a26be1dda0f2e93256e&w=996"
                className="slide-img"
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Réseau social like</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
                </p>
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://korben.info/app/uploads/2020/03/avatar-hexatar.png"
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
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Panel d'administration</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
                </p>
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4ESrgV1fyKimFM4LDdSFJodqGzUDlLaPA&usqp=CAU"
                    />
                    <span className="slider-user-name">John D'oeuf</span>
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
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Site e-commerce Ruby</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
                </p>
                <div className="slider-content-container">
                  <div className="slider-user-container">
                    <img
                      className="slider-avatar"
                      src="https://www.jardins-du-taillefer.fr/wp-content/uploads/2021/02/avatar.png"
                    />
                    <span className="slider-user-name">John D'oeuf</span>
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
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
                className="slide-img"
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
                className="slide-img"
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
                className="slide-img"
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://img.freepik.com/premium-photo/blue-devices-top-view-creative-website-builder-3d-rendering_72104-3666.jpg?w=1380"
                className="slide-img"
              />
              <div class="img-content">
                <div className="img-content-btns">
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-users color-prmary"></i>{" "}
                  </span>
                  <span className="stack-button">
                    {" "}
                    <i class="fad fa-tools color-prmary"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="slider-main-content">
                <h1 className="slider-title">Develott</h1>
                <p className="slider-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod... <a href="#">voir plus.</a>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
