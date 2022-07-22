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

function App() {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<div className="app">
			<Routes location={background || location}>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}>
						<Route path="connexion" element={<Connexion />} />
					</Route>
					<Route element={<RequireAuth />}>
						<Route path="/welcome" element={<Welcome />} />
						<Route path="/authTest" element={<AuthTest />} />
						<Route path="projets" element={<Projects />} />
						<Route path="projet/1" element={<Project />} />
						<Route path="projet/create" element={<CreateProject />} />
						<Route path="la-charte" element={<Home />} />
						<Route path="profil" element={<Profil />} />
						<Route path="*" element={<NotFound />} />
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
