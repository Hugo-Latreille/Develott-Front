import "./dashboard.scss";

import Sidebar from "../../components/SideBar/sidebar";

function Dashboard() {
  return (
    <Sidebar>
      <div className="dashboard">
        <div className="dashboard-main">
          <div className="dashboard-main-header">
            <div className="dashboard-main-titles">
              <h2 className="dashboard-main-title">Hi prénom,</h2>
              <h1 className="dashboard-main-subtitle">
                Bienvenue sur le dashboard du projet Develott
              </h1>
            </div>
            <div className="dashboard-main-cta">qd</div>
          </div>
          <div className="dashboard-main-navigation">
            <div className="dashboard-main-navigation-accueil">
              <div className="dashboard-main-navigation-accueil-content">
                <h3>
                  <i class="far fa-rocket"></i>Accueil
                </h3>
                <p>djsqjdqkdj qmldj</p>
                <img
                  src={require("./../../assets/images/dashboard-accueil.png")}
                  alt="icon accueil dashboard"
                />
              </div>
            </div>
            <div className="dashboard-main-navigation-messagerie">
              <div className="dashboard-main-navigation-messagerie-content">
                <h3>
                  <i class="far fa-comment-alt-dots"></i>Messagerie
                </h3>
                <p>djsqjdqkdj qmldj</p>
                <img
                  src={require("./../../assets/images/dashboard-message.png")}
                  alt="icon messagerie dashboard"
                />
              </div>
            </div>
            <div className="dashboard-main-navigation-calendrier">
              <div className="dashboard-main-navigation-calendrier-content">
                <h3>
                  <i class="far fa-calendar-alt"></i>
                  Calendrier
                </h3>
                <p>djsqjdqkdj qmldj</p>
                <img
                  src={require("./../../assets/images/dashboard-calendar.png")}
                  alt="icon calendrier dashboard"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-right">
          <p>vouvou dash</p>
        </div>
      </div>
    </Sidebar>
  );
}

export default Dashboard;
