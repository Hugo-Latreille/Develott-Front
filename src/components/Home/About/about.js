import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-container">
          <h2 className="about-title">Lorem ipsum dolor sit amet</h2>
          <div className="about-container-card">
            <img
              className="about-img"
              src={require(`./../../../assets/images/home-icon1.png`)}
              alt="Develott dashboard presentation"
            />
            <h3 className="about-subtitle">Parcourez les projets</h3>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="about-container-card">
            <img
              className="about-img"
              src={require(`./../../../assets/images/home-icon2.png`)}
              alt="Develott dashboard presentation"
            />
            <h3 className="about-subtitle">Trouvez vos co-équipiers</h3>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="about-container-card">
            <img
              className="about-img"
              src={require(`./../../../assets/images/home-icon3.png`)}
              alt="Develott dashboard presentation"
            />
            <h3 className="about-subtitle">Développez des projets concrets</h3>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
