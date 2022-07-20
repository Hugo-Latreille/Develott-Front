import "./connexion.scss";
import Login from "./Login";
import Register from "./Register";

import React, { useState } from "react";
//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, toggleLoggingActive } from "./loginSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllUsersQuery, useCreateUserMutation } from "./loginApi";

// ajout léa
import { useNavigate } from "react-router-dom";

function Connexion() {
  //ajout léa
  const [activeForm, setActiveForm] = useState("login");

  const navigate = useNavigate();

  const { data: allUsers, error, isLoading } = useGetAllUsersQuery();
  const [createUser, { isLoading: test }] = useCreateUserMutation();

  console.log(allUsers);

  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  const isLoggingActive = useSelector((state) => state.login.isLoggingActive);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("C'est okay", toastOptions);
      createUser(username, password);
      dispatch(clearInputs());
    }
  };

  const handleValidation = () => {
    if (username === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    }
    return true;
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 800,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // STATE LOGIN SIGN UP

  const handleSwitchSignUp = () => {
    setActiveForm("signup");
  };
  const handleSwitchLogin = () => {
    setActiveForm("login");
  };

  return (
    <div className="connexion">
      <div className="connexion-container">
        <div className="connexion-container-navigation">
          <img
            className="connexion-logo"
            src={require(`./../../assets/images/v3-large-white.png`)}
            alt="logo Develott"
          />
          <div className="navigation-links">
            <span
              className={activeForm === "login" ? "link-is-active" : ""}
              onClick={handleSwitchLogin}
            >
              Connexion
            </span>
            <span
              className={activeForm === "signup" ? "link-is-active" : ""}
              onClick={handleSwitchSignUp}
            >
              Inscription
            </span>
          </div>
        </div>
        <div className="connexion-container-form">
          {activeForm === "login" && <Login onSubmit={handleSubmit} />}
          {activeForm === "signup" && <Register />}
          <button onClick={() => navigate(-1)}>Close</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Connexion;
