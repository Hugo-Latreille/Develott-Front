import { Swiper, SwiperSlide } from "swiper/react";
import "./about.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import Sidebar from "../../components/SideBar/sidebar";
import Footer from "../../components/Footer/footerColored";
import Lea from "../../assets/images/Lea.png";
import PA from "../../assets/images/PA.png";
import Hugo from "../../assets/images/Hugo.png";
import Clement from "../../assets/images/Clement.png";
import Charlelie from "../../assets/images/Charlelie.png";

// import required modules
import { Autoplay, EffectCube } from "swiper";

function About() {
  return (
    <Sidebar>
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
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.55,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={false}
              modules={[Autoplay, EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide className="test-test">
                <img src={Lea} />

                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
              <p className="cube_name">Léa Bramoullé</p>
              <p className="cube_name_job">Product Owner / Dev Front</p>
              <SwiperSlide>
                <div className="info_contain">
                  <p>
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    batman@batmail.batfr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="#"> Superman-Suck</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="#"> Bruce Wayne</a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> brucewayne.com</a>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className="cube_letter">M</p>
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-right swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.55,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={false}
              modules={[Autoplay, EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Clement} />
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
              <p className="cube_name">Clément Moretti</p>
              <p className="cube_name_job">Lead Dev Back</p>
              <SwiperSlide>
                <div className="info_contain">
                  <p>
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    batman@batmail.batfr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="#"> Superman-Suck</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="#"> Bruce Wayne</a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> brucewayne.com</a>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className="cube_letter">E</p>
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-right swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.55,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={false}
              modules={[Autoplay, EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Hugo} />
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
              <p className="cube_name">Hugo Latreille</p>
              <p className="cube_name_job">Lead Dev Front</p>
              <SwiperSlide>
                <div className="info_contain">
                  <p>
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    batman@batmail.batfr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="#"> Superman-Suck</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="#"> Bruce Wayne</a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> brucewayne.com</a>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className="cube_letter">R</p>
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-right swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.55,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={false}
              modules={[Autoplay, EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={PA} />
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
              <p className="cube_name">Pierre-Antoine Potage</p>
              <p className="cube_name_job">Git Master / Dev Back</p>
              <SwiperSlide>
                <div className="info_contain">
                  <p>
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    batman@batmail.batfr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="#"> Superman-Suck</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="#"> Bruce Wayne</a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> brucewayne.com</a>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className="cube_letter">C</p>
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-right swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.55,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={false}
              modules={[Autoplay, EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Charlelie} />
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
              <p className="cube_name">Charlelie Lataste</p>
              <p className="cube_name_job">Scrum Master / Dev Front</p>
              <SwiperSlide>
                <div className="info_contain">
                  <p>
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    batman@batmail.batfr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="#"> Superman-Suck</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="#"> Bruce Wayne</a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> brucewayne.com</a>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className="cube_letter">I</p>
                <div className="overlay">
                  <div className="text">
                    <i className="fas fa-arrow-alt-right swipe_icon"></i>Swipe
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="socialmedia_container">
          <section className="socialmedia_container_section">
            <ul className="ul_media">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    </Sidebar>
  );
}

export default About;
