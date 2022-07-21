import "./hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container container">
      <div className="hero-left">
        <h1 className="hero-title">Rejoignez la table ronde du code</h1>
        <p className="hero-baseline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link to="/projets" className="main-button-bg-white">
          Découvrir les projets
        </Link>
      </div>
      <div className="hero-right">
        <img
          className="hero-img"
          src={require(`./../../../assets/images/hero-develott-presentation.png`)}
          alt="Develott dashboard presentation"
        />
      </div>
    </div>
  );
}

export default Hero;
