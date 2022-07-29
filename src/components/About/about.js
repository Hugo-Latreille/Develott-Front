import { Swiper, SwiperSlide } from "swiper/react";
import "./about.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Lea from "../../assets/images/Lea.png";
import PA from "../../assets/images/PA.png";
import Hugo from "../../assets/images/Hugo.png";
import Clement from "../../assets/images/Clement.png";
import Charlelie from "../../assets/images/Charlelie.png";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

function About() {
  return (
    <div className="about_container">
      <div className="about_container_main">
        <div className="about_container_title">
          <h1 className="about_title">About</h1>
        </div>
        <div className="about_main">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={false}
            modules={[Autoplay, EffectCube, Pagination]}
            className="swippertest"
          >
            <SwiperSlide>
              <img src={Lea} />
              <p className="cube_name">Léa Bramoullé</p>
              <p className="cube_name_job">Product Owner / Dev Front</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="desc_container_title">
                <i className="fas fa-envelope color-secondary"></i>{" "}
                batman@batmail.batfr
              </p>
              <p className="desc_container_title">
                <i className="fab fa-github color-secondary"></i>{" "}
                <a href="#"> Superman-Suck</a>{" "}
              </p>
              <p className="desc_container_title">
                <i className="fab fa-linkedin color-secondary"></i>{" "}
                <a href="#"> Bruce Wayne</a>
              </p>
              <p className="desc_container_title">
                <i className="fas fa-globe color-secondary"></i>{" "}
                <a href="#"> brucewayne.com</a>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="cube_letter">M</p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={false}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Clement} />
              <p className="cube_name">Clément Moretti</p>
              <p className="cube_name_job">Lead Dev Back</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="desc_container_title">
                <i className="fas fa-envelope color-secondary"></i>{" "}
                batman@batmail.batfr
              </p>
              <p className="desc_container_title">
                <i className="fab fa-github color-secondary"></i>{" "}
                <a href="#"> Superman-Suck</a>{" "}
              </p>
              <p className="desc_container_title">
                <i className="fab fa-linkedin color-secondary"></i>{" "}
                <a href="#"> Bruce Wayne</a>
              </p>
              <p className="desc_container_title">
                <i className="fas fa-globe color-secondary"></i>{" "}
                <a href="#"> brucewayne.com</a>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="cube_letter">E</p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={false}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Hugo} />
              <p className="cube_name">Hugo Latreille</p>
              <p className="cube_name_job">Lead Dev Front</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="desc_container_title">
                <i className="fas fa-envelope color-secondary"></i>{" "}
                batman@batmail.batfr
              </p>
              <p className="desc_container_title">
                <i className="fab fa-github color-secondary"></i>{" "}
                <a href="#"> Superman-Suck</a>{" "}
              </p>
              <p className="desc_container_title">
                <i className="fab fa-linkedin color-secondary"></i>{" "}
                <a href="#"> Bruce Wayne</a>
              </p>
              <p className="desc_container_title">
                <i className="fas fa-globe color-secondary"></i>{" "}
                <a href="#"> brucewayne.com</a>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="cube_letter">R</p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={false}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={PA} />
              <p className="cube_name">Pierre-Antoine Potage</p>
              <p className="cube_name_job">Git Master / Dev Back</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="desc_container_title">
                <i className="fas fa-envelope color-secondary"></i>{" "}
                batman@batmail.batfr
              </p>
              <p className="desc_container_title">
                <i className="fab fa-github color-secondary"></i>{" "}
                <a href="#"> Superman-Suck</a>{" "}
              </p>
              <p className="desc_container_title">
                <i className="fab fa-linkedin color-secondary"></i>{" "}
                <a href="#"> Bruce Wayne</a>
              </p>
              <p className="desc_container_title">
                <i className="fas fa-globe color-secondary"></i>{" "}
                <a href="#"> brucewayne.com</a>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="cube_letter">C</p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={false}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Charlelie} />
              <p className="cube_name">Charlelie Lataste</p>
              <p className="cube_name_job">Scrum Master / Dev Front</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="desc_container_title">
                <i className="fas fa-envelope color-secondary"></i>{" "}
                batman@batmail.batfr
              </p>
              <p className="desc_container_title">
                <i className="fab fa-github color-secondary"></i>{" "}
                <a href="#"> Superman-Suck</a>{" "}
              </p>
              <p className="desc_container_title">
                <i className="fab fa-linkedin color-secondary"></i>{" "}
                <a href="#"> Bruce Wayne</a>
              </p>
              <p className="desc_container_title">
                <i className="fas fa-globe color-secondary"></i>{" "}
                <a href="#"> brucewayne.com</a>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="cube_letter">I</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="about_container_end"></div>
      </div>
    </div>
  );
}

export default About;
