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
import { useSelector } from "react-redux";
import NewPassword from "../Login/NewPassword";
import ForgotPassword from "../Login/ForgotPassword";
import PersistLogin from "../../utils/PersistLogin";
import Erreur from "../404/404";
import ReactCursorPosition from "react-cursor-position";
import Charte from "../Charte/charte";
import About from "../About/about";

import Loader1 from "../../components/Loader1/loader1";
import Loader2 from "../../components/Loader2/loader2";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const modalIsOpen = useSelector((state) => state.auth.loggingModalOpen);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalIsOpen]);

  return (
    <div className="app">
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<About />}>
            <Route path="connexion" element={<Connexion />} />
            <Route path="newpassword/:userId" element={<NewPassword />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
          </Route>

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="authTest" element={<AuthTest />} />
              <Route path="projets" element={<Projects />} />
              <Route path="projet/:projectId" element={<Project />} />
              <Route path="projet/create" element={<CreateProject />} />
              <Route path="charte" element={<Charte />} />
              <Route path="about" element={<About />} />
              <Route path="profil" element={<Profil />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <ReactCursorPosition>
                {" "}
                <Erreur />
              </ReactCursorPosition>
            }
          />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="connexion" element={<Connexion />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
