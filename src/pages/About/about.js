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
                    l.bramoulle@hotmail.fr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="https://github.com/Lea-Bramoulle">
                      {" "}
                      Lea-Bramoulle
                    </a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="https://www.linkedin.com/in/lea-bramoulle/">
                      {" "}
                      Léa Bramoullé
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> Develott.com</a>
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
                <img src={Clement} alt="Clement" />
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
                  <p className="big_mail">
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    moretticlement@outlook.fr
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="https://github.com/daddykoala"> clément-moretti</a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="https://www.linkedin.com/in/clement-moretti-39ab59220/">
                      {" "}
                      Clement Moretti
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> Develott.com</a>
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
                  <p className="big_mail">
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    hugo.latreille@gmail.com
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="https://github.com/Hugo-Latreille ">
                      {" "}
                      Hugo-Latreille
                    </a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="https://www.linkedin.com/in/hugo-latreille">
                      {" "}
                      Hugo Latreille
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="https://hugolatreilleportfolio.herokuapp.com">
                      {" "}
                      Mon Portefolio
                    </a>
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
                <img src={PA} alt="PA" />
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
                  <p className="big_mail_potage">
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    pierreantoinepotage@gmail.com
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="https://github.com/Pierreantoine-p">
                      {" "}
                      Pierreantoine-p
                    </a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="https://www.linkedin.com/in/pierre-antoine-potage/">
                      {" "}
                      Pierre-Antoine Potage
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> Develott.com</a>
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
                <img src={Charlelie} alt="Charlelie" />
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
                  <p className="big_mail">
                    <i className="fas fa-envelope color-secondary"></i>{" "}
                    latastecharlelie@gmail.com
                  </p>
                  <p>
                    <i className="fab fa-github color-secondary"></i>{" "}
                    <a href="https://github.com/Charlelielataste">
                      {" "}
                      Charlelielataste
                    </a>{" "}
                  </p>
                  <p>
                    <i className="fab fa-linkedin color-secondary"></i>{" "}
                    <a href="https://www.linkedin.com/in/charlelie-lataste-b28860108/">
                      {" "}
                      Charlélie Lataste
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe color-secondary"></i>{" "}
                    <a href="#"> Develott.com</a>
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
        <Footer />
      </div>
    </Sidebar>
  );
}

export default About;
