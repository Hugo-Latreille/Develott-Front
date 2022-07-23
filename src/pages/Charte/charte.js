import "./charte.scss";

// ajout léa
import { useNavigate } from "react-router-dom";

function Charte() {
  const navigate = useNavigate();

  return (
    (
      <div className="connexion">
        <div className="connexion-container">
          <div className="connexion-container-navigation">
            <img
              className="connexion-logo"
              src={require(`./../../assets/images/v3-large-white.png`)}
              alt="logo Develott"
            />
            <div className="navigation-links">
              <span
              // className={isLoggingActive ? "link-is-active" : ""}
              // onClick={() => dispatch(toggleLoggingActive())}
              >
                Connexion
              </span>
              <span
              // className={!isLoggingActive ? "link-is-active" : ""}
              // onClick={}
              >
                Inscription
              </span>
            </div>
          </div>
          <div className="connexion-container-form">
            <button
              className="close-modal"
              onClick={() => {
                // dispatch(toggleLoggingModalOpen());
                navigate(-1);
              }}
            >
              <i className="fas fa-times-circle"></i>
            </button>
            {/* {isLoggingActive && <Login onSubmit={handleLogin} />}
          {!isLoggingActive && <Register onSubmit={handleRegister} />} */}
          </div>
        </div>
      </div>
    ),
    document.getElementById("modal-root")
  );
}

export default Charte;
