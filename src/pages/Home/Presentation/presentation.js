import "./presentation.scss";

function Presentation() {
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
          <a href="#" className="main-button-white mr-1">
            Parcourir les projets
          </a>
          <a href="#" className="main-button-bg-white mr-1">
            S'inscrire
          </a>
        </div>
        <div className="presentation-container-right">
          <img
            className="presentation-img"
            src={require(`./../../../assets/images/hero-develott-presentation2.png`)}
            alt="Develott dashboard presentation"
          />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
