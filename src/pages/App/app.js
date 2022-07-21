import "./app.scss";

import { Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import LoginIndex from "../Login/LoginIndex";
import RequireAuth from "../Login/RequireAuth";
import Welcome from "../Login/WelcomeTest";
import { Layout } from "./../../components/Layout/Layout";
import AuthTest from "../Login/AuthTest";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/auth" element={<LoginIndex />} />

					<Route element={<RequireAuth />}>
						<Route path="/welcome" element={<Welcome />} />
						<Route path="/authTest" element={<AuthTest />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
