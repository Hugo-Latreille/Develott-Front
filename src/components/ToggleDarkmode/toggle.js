import React, { useState } from "react";
import "./toggle.scss";

//☀︎ ☽
function ToggleDark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <i
          style={{ color: darkMode ? "grey" : "yellow" }}
          className="fas fa-sun sun"
        ></i>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <i
          style={{ color: darkMode ? "#204D83" : "grey" }}
          className="fas fa-moon-stars moon"
        ></i>
      </div>
    </div>
  );
}

export default ToggleDark;
