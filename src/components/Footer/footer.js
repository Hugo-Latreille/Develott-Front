import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-container-column">
          <img
            className="footer-logo"
            src={require(`./../../assets/images/v3-large-white.png`)}
            alt="logo Develott"
          />
          <p>Rejoignez la table ronde du code, et ensemble, codez !</p>
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
        </div>
        <div className="footer-container-column">
          <p> © 2022 - Made with ♡</p>
          <p> Projet d'Apothéose</p>
          <p> Ecole O'clock</p>
          <p> Team Cassini</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
