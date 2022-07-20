import React from "react";
import ReactDOM from "react-dom/client";
import LoginIndex from "./pages/Login/LoginIndex";
import App from "./pages/App/app";
import Projects from "./pages/Projects/projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <LoginIndex />
  <Projects />
  // </React.StrictMode>
);
