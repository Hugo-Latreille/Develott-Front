import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/home";
import Projects from "../Projects/projects";
import Connexion from "../Login/connexion";
import Project from "./../Project/project";
import Profil from "../Profiles/profiles";
import CreateProject from "../Project/createProject";
import Dashboard from "../Dashboard/dashboard";
import Layout from "../../utils/Layout/Layout";
import RequireAuth from "../../utils/RequireAuth";
import Welcome from "./../Login/WelcomeTest";
import AuthTest from "./../Login/AuthTest";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewPassword from "../Login/NewPassword";
import ForgotPassword from "../Login/ForgotPassword";
import PersistLogin from "../../utils/PersistLogin";
import Erreur from "../404/404";
import ReactCursorPosition from "react-cursor-position";

import Charte from "../Charte/charte";
import About from "../About/about";

import Loader1 from "../../components/Loader1/loader1";
// import Loader2 from "../../components/Loader2/loader2";
import TeamCreation from "../TeamCreation/teamCreation";
import CharteModal from "../../components/Modal-Charte/modalcharte";
import Calendar from "../../components/Calendar/calendar";

import Game from "../../components/Game/game";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const modalIsOpen = useSelector((state) => state.auth.loggingModalOpen);
  const displayDarkMode = useSelector((state) => state.app.displayDarkMode);
  const teamModalIsOpen = useSelector(
    (state) => state.teamCreation.teamModalIsOpen
  );
  const charteModalIsOpen = useSelector(
    (state) => state.modal.charteModalIsOpen
  );

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (teamModalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [teamModalIsOpen]);

  useEffect(() => {
    if (charteModalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [charteModalIsOpen]);

  return (
    <div id={displayDarkMode === true ? "dark" : "light"}>
      <div className="app">
        <Routes location={background || location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}>
              <Route path="connexion" element={<Connexion />} />
              <Route path="newpassword/:userId" element={<NewPassword />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
            </Route>

            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="welcome" element={<Welcome />} />
                <Route path="authTest" element={<AuthTest />} />
                <Route path="projets" element={<Projects />} />
                <Route path="projet/:projectId" element={<Project />}>
                  <Route path="postuler" element={<TeamCreation />} />
                </Route>
                <Route path="projet/create" element={<CreateProject />} />
                <Route path="charte" element={<Charte />} />
                <Route
                  path="modal-charte"
                  element={<CharteModal />}
                  background={<Profil />}
                />
                <Route path="about" element={<About />} />
                <Route path="profil/:profilId" element={<Profil />}>
                  {/* <Route path="modal-charte" element={<CharteModal />} /> */}
                </Route>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="game" element={<Game />} />
                <Route path="V2" element={<Loader1 />} />
              </Route>
              <Route
                path="*"
                element={
                  <ReactCursorPosition>
                    <Erreur />
                  </ReactCursorPosition>
                }
              />
            </Route>
          </Route>
        </Routes>

        {background && (
          <Routes>
            <Route path="connexion" element={<Connexion />} />
            <Route path="postuler" element={<TeamCreation />} />
            <Route path="modal-charte" element={<CharteModal />} />
            <Route path="newpassword/:userId" element={<NewPassword />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
