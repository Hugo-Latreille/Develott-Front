import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import LoginIndex from "./pages/Login/LoginIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<LoginIndex />
	</Provider>
	// </React.StrictMode>
);
