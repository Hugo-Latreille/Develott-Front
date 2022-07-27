/* eslint-disable jsx-a11y/img-redundant-alt */
import "./project.scss";
import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

function Project() {
  return (
    <>
      <Sidebar>
        <div className="project">
          <div className="project-container ">
            <div className="project-container-left">
              <img
                src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
                className="project-img"
                alt="Projet image"
              />
              <div className="project-user">
                <img
                  className="slider-avatar"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                  alt="User profile image"
                />
                <p className="project-user-name">Uller Mr</p>
                <div className="project-user-links">
                  <p>
                    <i class="fab fa-github"></i>
                  </p>
                  <p>
                    <i class="fab fa-linkedin"></i>
                  </p>
                  <p>
                    <i class="fas fa-laptop-code"></i>
                  </p>
                </div>
                <div className="project-jobs">
                  <h3 lassName="project-jobs-title">Profil(s) recherché(s)</h3>
                  <div className="project-jobs-container">
                    <p>
                      <i class="fas fa-check-circle success"></i> Développeur
                      Back-End
                    </p>
                    <p>
                      <i class="fas fa-check-circle success"></i> Développeur
                      Back-End
                    </p>
                    <p>
                      <i class="fas fa-check-circle"></i> Développeur Front-End
                    </p>
                    <p>
                      <i class="fas fa-check-circle"></i> UX-UI Designer
                    </p>
                    <p>
                      <i class="fas fa-check-circle success"></i> Scrum Master
                    </p>
                  </div>
                </div>
                <div className="project-dates">
                  <h3 lassName="project-jobs-title">Dates du projet</h3>
                  <p>
                    <i class="far fa-calendar-check success"></i> Dès maintenant
                  </p>
                  <p>
                    <i class="far fa-calendar-exclamation warning"></i> 6
                    semaines
                  </p>
                </div>
              </div>
            </div>
            <div className="project-container-right">
              <div className="project-header">
                <div className="project-header-left">
                  <h1 className="project-header-title">
                    Develott - La table ronde du code
                  </h1>
                  <p className="project-header-short-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vel ex quis lorem tempus consequat.
                  </p>
                </div>
                <div className="project-header-right">
                  <button className="main-button-bg-white">
                    {" "}
                    Postuler <i className="far fa-rocket"></i>
                  </button>
                </div>
              </div>
              <div className="project-description">
                <div className="project-description-container">
                  <h2 className="project-description-title">
                    Description du projet
                  </h2>
                  <span>
                    <i className="fas fa-edit"></i>
                  </span>
                </div>
                <p className="project-description-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vel ex quis lorem tempus consequat. Pellentesque ornare eros
                  eget ante elementum blandit. Aenean sed neque venenatis,
                  ultrices risus vel, dignissim.Ut vel ex quis lorem tempus
                  consequat. Pellentesque ornare eros. dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut vel ex quis lorem tempus
                </p>
                <a className="project-description-see-more">Voir plus...</a>
              </div>
              <div className="project-technologies">
                <div className="project-technologies-languages">
                  <h4>Langages</h4>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-javascript-plain`}
                      style={{ backgroundColor: "red" }}
                    ></i>
                    Javascript
                  </span>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-ruby-plain`}
                      style={{ backgroundColor: "green" }}
                    ></i>
                    ruby
                  </span>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-php-plain`}
                      style={{ backgroundColor: "blue" }}
                    ></i>
                    php
                  </span>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-javascript-plain`}
                      style={{ backgroundColor: "red" }}
                    ></i>
                    Javascript
                  </span>
                </div>
                <div className="project-technologies-frameworks">
                  <h4>Frameworks</h4>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-ruby-plain`}
                      style={{ backgroundColor: "chartreuse" }}
                    ></i>
                    ruby
                  </span>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-php-plain`}
                      style={{ backgroundColor: "pink" }}
                    ></i>
                    php
                  </span>
                </div>
                <div className="project-technologies-database">
                  <h4>Base de donnée</h4>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-mongodb-plain`}
                      style={{ backgroundColor: "green" }}
                    ></i>
                    mongodb
                  </span>
                  <span className="technologies-icon-container">
                    <i
                      className={`devicon-php-plain`}
                      style={{ backgroundColor: "blue" }}
                    ></i>
                    php
                  </span>
                </div>
                <div className="project-technologies-others">
                  <h4>Autres</h4>
                  <p>
                    <i className="devicon-github-plain colored"></i> kllkj
                  </p>
                  <p>
                    <i className="devicon-trello-plain colored"></i>
                    hjkhkjh
                  </p>
                  <p>
                    <i className="devicon-illustrator-plain colored"></i>
                    hjkhkjh
                  </p>
                  <p>
                    <i className="devicon-canva-plain colored"></i>
                    hjkhkjh
                  </p>
                </div>
                <div className="project-technologies-edit">
                  <span>
                    <i className="fas fa-edit"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterColored />
      </Sidebar>
    </>
  );
}

export default Project;
