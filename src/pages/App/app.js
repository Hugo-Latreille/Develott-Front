import "./../../styles/_reset.css";
import "./app.scss";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home/home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Projects from "../Projects/projects";
import Connexion from "../Login/connexion";
import NotFound from "./../../components/NotFound/notFound";
import Project from "./../Project/project";

import { useState } from "react";
import CreateProject from "../Project/createProject";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="app">
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="connexion" element={<Connexion />} />
        </Route>
        <Route path="/projets" element={<Projects />} />
        <Route path="/projet/1" element={<Project />} />
        <Route path="/projet/create" element={<CreateProject />} />
        <Route path="la-charte" element={<Home />} />
        {/* <Route path="/connexion2" element={<Connexion />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/profil" element={<Profil />} /> */}
        <Route path="*" element={<NotFound />} />
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
