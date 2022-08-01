import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayDarkMode } from "../../pages/App/appSlice";
import "./toggle.scss";

function ToggleDark() {
  const displayDarkMode = useSelector((state) => state.app.displayDarkMode);
  const dispatch = useDispatch();
  return (
    <div className="toggle_dm" onClick={() => dispatch(setDisplayDarkMode())}>
      <i className="fas fa-sun sun_inside"></i>
      <i className="fas fa-moon moon_inside"></i>
      <div
        className="toggle_dm_button"
        style={{
          left: displayDarkMode ? "25px" : "0",
          backgroundColor: displayDarkMode
            ? "rgba(25, 138, 153, 1)"
            : "#3c097be4",
        }}
      ></div>
    </div>
  );
}

export default ToggleDark;
