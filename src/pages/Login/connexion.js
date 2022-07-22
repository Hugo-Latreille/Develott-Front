import "./connexion.scss";
import Login from "./Login";
import Register from "./Register";

import React, { useState } from "react";
//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, toggleLoggingActive } from "./authSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllUsersQuery, useCreateUserMutation } from "./authAPI";

// ajout léa
import { useNavigate } from "react-router-dom";

function Connexion() {
	//ajout léa
	const [activeForm, setActiveForm] = useState("login");

	const navigate = useNavigate();
	const [createUser] = useCreateUserMutation();

	const dispatch = useDispatch();
	const { email, password } = useSelector((state) => state.auth);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("ok");
		// if (handleValidation()) {
		// 	toast.success("C'est okay", toastOptions);
		// 	createUser(email, password);
		// 	dispatch(clearInputs());
		// }
	};

	// const handleValidation = () => {
	// 	if (username === "") {
	// 		toast.error("Email is required", toastOptions);
	// 		return false;
	// 	}
	// 	if (password === "") {
	// 		toast.error("Password is required", toastOptions);
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const toastOptions = {
	// 	position: "top-right",
	// 	autoClose: 800,
	// 	pauseOnHover: true,
	// 	draggable: true,
	// 	theme: "light",
	// };

	// STATE LOGIN SIGN UP AJOUT Léa

	const isLoggingActive = useSelector((state) => state.auth.isLoggingActive);

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
							className={isLoggingActive ? "link-is-active" : ""}
							onClick={() => dispatch(toggleLoggingActive())}
						>
							Connexion
						</span>
						<span
							className={!isLoggingActive ? "link-is-active" : ""}
							onClick={() => dispatch(toggleLoggingActive())}
						>
							Inscription
						</span>
					</div>
				</div>
				<div className="connexion-container-form">
					<button className="close-modal" onClick={() => navigate(-1)}>
						<i className="fas fa-times-circle"></i>
					</button>
					{isLoggingActive && <Login onSubmit={handleSubmit} />}
					{!isLoggingActive && <Register />}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default Connexion;
