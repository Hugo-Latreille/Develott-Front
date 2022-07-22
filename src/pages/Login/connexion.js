import "./connexion.scss";
import Login from "./Login";
import Register from "./Register";

//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, setCredentials, toggleLoggingActive } from "./authSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserMutation, useUserLoginMutation } from "./authAPI";

// ajout léa
import { useNavigate } from "react-router-dom";

function Connexion() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [userLogin] = useUserLoginMutation();
	const [createUser] = useCreateUserMutation();
	const { firstname, lastname, email, password, passwordConfirm } = useSelector(
		(state) => state.auth
	);
	const isLoggingActive = useSelector((state) => state.auth.isLoggingActive);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userData = await userLogin({ email, password }).unwrap();
			console.log(userData);
			dispatch(
				setCredentials({ accessToken: userData.accessToken, email: email })
			);
			navigate("/welcome");
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
			toast.success("C'est okay", toastOptions);
			createUser({ firstname, lastname, email, password });
			dispatch(clearInputs());
		}
	};

	const handleValidation = () => {
		if (firstname === "" || lastname === "") {
			toast.error("Email is required", toastOptions);
			return false;
		}
		//* TODO verification password regex
		if (password !== passwordConfirm) {
			toast.error("Les mots de passe ne correspondent pas", toastOptions);
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
					{isLoggingActive && <Login onSubmit={handleLogin} />}
					{!isLoggingActive && <Register onSubmit={handleRegister} />}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default Connexion;
