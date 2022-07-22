import "./project.scss";

import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";

function Project() {
  return (
    <>
      <div className="project">
        <NavbarColor />
        <div className="project-container container">
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
              />
              <p className="project-user-name">Uller Hank</p>
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
          </div>
          <div className="project-container-right">
            <div className="project-description">
              <h2 className="project-description-title">Develott</h2>
              <p className="project-description-subDesc">
                Le mot go peut faire référence à : g aire référence à : go aire
                référence à : goo
              </p>
              <p className="project-description-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                ex quis lorem tempus consequat. Pellentesque ornare eros eget
                ante elementum blandit. Aenean sed neque venenatis, ultrices
                risus vel, dignissim.Ut vel ex quis lorem tempus consequat.
                Pellentesque ornare eros. dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <a className="project-description-see-more">Voir plus...</a>
            </div>
            <div className="project-technologies">
              <div className="project-technologies-languages">
                <h4>Langages</h4>
                <p>
                  <i class="devicon-javascript-plain colored"></i> kllkj
                </p>
                <p>
                  <i class="devicon-html5-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-css3-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-postgresql-plain colored"></i>
                  hjkhkjh
                </p>
              </div>
              <div className="project-technologies-frameworks">
                <h4>Frameworks</h4>
                <p>
                  <i class="devicon-bootstrap-plain colored"></i> kllkj
                </p>
                <p>
                  <i class="devicon-react-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-redux-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-rails-plain colored"></i>
                  hjkhkjh
                </p>
              </div>
              <div className="project-technologies-others">
                <h4>Autres</h4>
                <p>
                  <i class="devicon-github-plain colored"></i> kllkj
                </p>
                <p>
                  <i class="devicon-trello-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-illustrator-plain colored"></i>
                  hjkhkjh
                </p>
                <p>
                  <i class="devicon-canva-plain colored"></i>
                  hjkhkjh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterColored />
    </>
  );
}

export default Project;
