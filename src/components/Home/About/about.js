import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-container">
          <h2 className="about-title">
            C'est quoi <span className="span-instance">une instance</span>{" "}
            Develott ?
          </h2>
          <div className="about-container-card">
            <img
              className="about-img"
              src={require(`./../../../assets/images/home-icon1.png`)}
              alt="Develott dashboard presentation"
            />

            <h3 className="about-subtitle">Parcourez les projets</h3>
            <p className="about-text">
              Recherchez et filtrez les projets partagés par la communauté en
              fonctions des compétences que vous souhaitez développer.
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
              Constituez votre équipe en fonction des besoins du projet, et
              échangez en temps réel via notre système de messagerie.
            </p>
          </div>
          <div className="about-container-card">
            <img
              className="about-img"
              src={require(`./../../../assets/images/home-icon3.png`)}
              alt="Develott dashboard presentation"
            />
            <h3 className="about-subtitle">Et ensemble, développez !</h3>
            <p className="about-text">
              Une fois votre équipe constituée, accédez à votre dashboard
              personnalisé, et ensemble, collaborez en toute agilité ! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
