import React, { useState } from "react";
import "./toggle.scss";

//☀︎ ☽
function ToggleDark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="toggle_container">
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round">
              <i
                className={`${
                  darkMode ? "fas fa-sun sun_inside" : "fas fa-moon moon_inside"
                }`}
              ></i>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ToggleDark;
