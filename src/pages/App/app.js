import "./../../styles/_reset.css";
import "./app.scss";

import { Routes, Route } from "react-router-dom";

import Home from "../Home/home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Projects from "../Projects/projects";
import Connexion from "../Login/connexion";
import Connexion2 from "../Login/connexion2";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/connexion2" element={<Connexion2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
