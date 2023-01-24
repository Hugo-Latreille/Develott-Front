import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./pages/App/app";
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import { SocketContext, socket } from "./utils/SocketContext";

registerLicense(
	"ORg4AjUWIQA/Gnt2VVhiQlFadVlJVHxPYVF2R2FJelRydl9GY0wxOX1dQl9hSXZTcURkW3tccnJTQ2g="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<SocketContext.Provider value={socket}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SocketContext.Provider>
	</Provider>
	// </React.StrictMode>
);
