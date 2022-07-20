import "./app.scss";

import { Routes, Route } from "react-router-dom";

import Home from "../Home/home";
import LoginIndex from "../Login/LoginIndex";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<LoginIndex />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
