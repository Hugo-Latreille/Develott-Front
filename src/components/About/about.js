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
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 2,
            }}
            pagination={true}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Lea} />
              <p className="cube_name">Léa Bramoullé</p>
              <p className="cube_name">Product Owner / Dev Front</p>
              <div class="overlay">
                <div class="text">
                  <i class="fas fa-arrow-alt-left swipe_icon"></i>Swipe
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Clement} />
              <p className="cube_name">Clément Moretti</p>
              <p className="cube_name">Lead Dev Back</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Hugo} />
              <p className="cube_name">Hugo Latreille</p>
              <p className="cube_name">Lead Dev Front</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={PA} />
              <p className="cube_name">Pierre-Antoine Potage</p>
              <p className="cube_name">Git Master / Dev Back</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Charlelie} />
              <p className="cube_name">Charlelie Lataste</p>
              <p className="cube_name">Scrum Master / Dev Front</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="about_container_end"></div>
      </div>
    </div>
  );
}

export default About;
