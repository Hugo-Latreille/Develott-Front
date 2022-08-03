import "./presentation.scss";
import Footer from "../../Footer/footer";
import { useDispatch } from "react-redux";
import { toggleLoggingModalOpen } from "../../../pages/Login/authSlice";

import { Link } from "react-router-dom";

function Presentation() {
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="presentation">
      <div className="presentation-container container">
        <div className="presentation-container-left">
          <h2 className="presentation-title">
            Prêts ? Recherchez... Dévelottez !
          </h2>
          <h3 className="presentation-title">Parcourez les projets</h3>
          <p className="presentation-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="presentation-links">
            <Link
              onClick={scrollToTop()}
              className="main-button-white"
              to="/connexion"
            >
              <a
                href="/connection"
                onClick={() => dispatch(toggleLoggingModalOpen())}
              >
                {" "}
                Parcourir les projets
              </a>
            </Link>
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
                S'inscrire
              </a>
            </Link>
          </div>
        </div>
        <div className="presentation-container-right">
          <img
            className="presentation-img"
            src={require(`./../../../assets/images/hero-develott-presentation2.png`)}
            alt="Develott dashboard presentation"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Presentation;
