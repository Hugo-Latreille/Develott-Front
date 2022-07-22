import "./app.scss";

// import { Routes, Route } from "react-router-dom";
// import Home from "../Home/home";
// import LoginIndex from "../Login/LoginIndex";
// import RequireAuth from "../Login/RequireAuth";
// import Welcome from "../Login/WelcomeTest";
// import { Layout } from "./../../components/Layout/Layout";
// import AuthTest from "../Login/AuthTest";

// function App() {
// 	return (
// 		<div className="app">
// 			<Routes>
// 				<Route path="/" element={<Layout />}>
// 					<Route index element={<Home />} />
// 					<Route path="/auth" element={<LoginIndex />} />

// 					<Route element={<RequireAuth />}>
// 						<Route path="/welcome" element={<Welcome />} />
// 						<Route path="/authTest" element={<AuthTest />} />
// 					</Route>
// 				</Route>
// 			</Routes>
// 		</div>
// 	);

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home/home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Projects from "../Projects/projects";
import Connexion from "../Login/connexion";
import NotFound from "./../../components/NotFound/notFound";

import Project from "./../Project/project";
import Profil from "../Profiles/profiles";
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
