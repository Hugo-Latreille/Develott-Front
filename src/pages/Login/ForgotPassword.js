import "./connexion.scss";
import "./../App/app.scss";
//? RTK
import { useSelector, useDispatch } from "react-redux";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { toggleLoggingModalOpen } from "./authSlice";
import Input from "../../components/Input/Input";
import { useForgotPasswordMutation } from "./authAPISlice";

function ForgotPassword() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state.auth);
	const [forgotPassword] = useForgotPasswordMutation();
	const handlePassword = (e) => {
		e.preventDefault();
		forgotPassword({ email });
		toast.success(
			"Vous devez valider votre lien d'activation reçu par mail pour pouvoir vous connecter",
			toastOptions
		);
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
						<span className={"link-is-active"}>Nouveau Mot de passe</span>
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
					<div className="login-container">
						<form className="login-form" onSubmit={handlePassword}>
							<div className="login-form-inputs">
								<div className="form">
									<Input
										name="email"
										value={email}
										label="Email"
										type="email"
										required={true}
									/>
								</div>
							</div>
							<div className="login-form-buttons">
								<button type="submit" className="main-button-colored">
									Valider
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>,
		document.getElementById("modal-root")
	);
}

export default ForgotPassword;
