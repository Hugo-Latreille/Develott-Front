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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            botbot.{" "}
          </p>
        </div>
        <div className="footer-container-column">
          <p>
            <a href="#">Voir tous les projets</a>
          </p>
          <p>
            <a href="#">Lire la charte</a>
          </p>
          <p>
            <a href="#">Découvrir l'équipe</a>
          </p>
          <p>
            <a href="#">S'inscrire / Se connecter</a>
          </p>
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
