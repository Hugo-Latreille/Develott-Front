import "./hero.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoggingModalOpen } from "../../../pages/Login/authSlice";

function Hero() {
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero-container container">
      <div className="hero-left">
        <h1 className="hero-title">Rejoignez la table ronde du code</h1>
        <p className="hero-baseline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link
          onClick={scrollToTop()}
          className="main-button-bg-white"
          to="/connexion"
        >
          <a
            href="/connection"
            onClick={() => dispatch(toggleLoggingModalOpen())}
          >
            {" "}
            Découvrir les projets
          </a>
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
