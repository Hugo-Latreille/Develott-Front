import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/home";
import Projects from "../Projects/projects";
import Connexion from "../Login/connexion";
import NotFound from "./../../components/NotFound/notFound";
import Project from "./../Project/project";
import Profil from "../Profiles/profiles";
import CreateProject from "../Project/createProject";
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
				<Route path="*" element={<Erreur />} />

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
							<Route path="projet/:projectId" element={<Project />} />
							<Route path="projet/create" element={<CreateProject />} />
							<Route path="la-charte" element={<Home />} />
							<Route path="profil" element={<Profil />} />
						</Route>
					</Route>
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
