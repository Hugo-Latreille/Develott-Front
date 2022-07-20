import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
// import LoginIndex from "./pages/Login/LoginIndex";
// import App from "./pages/App/app";
import Profiles from "./pages/Profiles/profiles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Profiles />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
