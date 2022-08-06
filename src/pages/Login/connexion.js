import "./connexion.scss";
import "./../App/app.scss";
import Login from "./Login";
import Register from "./Register";

//? RTK
import { useSelector, useDispatch } from "react-redux";
import {
	clearInputs,
	setCredentials,
	toggleLoggingActive,
	toggleLoggingModalOpen,
} from "./authSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserMutation, useUserLoginMutation } from "./authAPISlice";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

function Connexion() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [userLogin] = useUserLoginMutation();
	const [createUser] = useCreateUserMutation();
	const {
		firstname,
		lastname,
		email,
		password,
		passwordConfirm,
		username_gith,
	} = useSelector((state) => state.auth);
	const isLoggingActive = useSelector((state) => state.auth.isLoggingActive);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await userLogin({ email, password })
				.unwrap()
				.then((data) => {
					if (data.foundUser.validate === false) {
						return toast.error(
							"Vous devez valider votre lien d'activation reçu par mail pour pouvoir vous connecter",
							toastOptions
						);
					} else {
						dispatch(
							setCredentials({
								accessToken: data.accessToken,
								email: email,
							})
						);
						dispatch(toggleLoggingModalOpen());
						navigate("/projets");
					}
				})
				.catch((err) => {
					if (err.data.message === "le mail n'existe pas") {
						return toast.error(
							"L'email entré ne correspond à aucun utilisateur",
							toastOptions
						);
					}
					if (err.data.message === "Wrong password") {
						return toast.error("Le mot de passe est incorrect", toastOptions);
					}
				});
		} catch (err) {
			if (!err?.originalStatus) {
				console.log("No Server Response");
			} else if (err.originalStatus === 400) {
				console.log("Missing Username or Password");
			} else if (err.originalStatus === 401) {
				console.log("Unauthorized");
			} else {
				console.log("Login Failed");
			}
		}
	};

	const handleRegister = (e) => {
		//* TODO Try/Catch + redirect
		e.preventDefault();

		if (handleValidation()) {
			createUser({ firstname, lastname, email, password, username_gith })
				.unwrap()
				.then((data) => {
					if (data) {
						toast.success(
							"On y est presque ! Vérifiez vos emails pour valider votre inscription",
							toastOptions
						);
						dispatch(clearInputs());
					}
				})
				.catch((err) => {
					if (err?.data.message === "This email already use") {
						return toast.error(
							"Cet email existe déjà, vous pouvez renouveler votre mot de passe dans l'onglet 'Connexion' en cas d'oubli",
							toastOptions
						);
					}
				});
		}
	};

	const handleValidation = () => {
		if (password !== passwordConfirm) {
			toast.error("Les mots de passe ne correspondent pas", toastOptions);
			return false;
		}
		const validatePassword = new RegExp(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/
		);
		if (!validatePassword.test(password)) {
			toast.error(
				"Votre password doit avoir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial",
				toastOptions
			);
			return false;
		}

		return true;
	};

	const toastOptions = {
		position: "top-right",
		autoClose: 6000,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
	};

	return ReactDOM.createPortal(
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
					<button
						className="close-modal"
						onClick={() => {
							dispatch(toggleLoggingModalOpen());
							navigate(-1);
						}}
					>
						<i className="fas fa-times-circle"></i>
					</button>
					{isLoggingActive && <Login onSubmit={handleLogin} />}
					{!isLoggingActive && <Register onSubmit={handleRegister} />}
				</div>
			</div>
			<ToastContainer />
		</div>,
		document.getElementById("modal-root")
	);
}

export default Connexion;
