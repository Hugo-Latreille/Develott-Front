/* eslint-disable jsx-a11y/anchor-is-valid */
import Input from "../../components/Input/Input";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { togglePasswordVisibility } from "./authSlice";

function Login({ onSubmit }) {
	const dispatch = useDispatch();

	const github = () => {
		// window.open("https://develott.herokuapp.com/v1/auth/github", "_self");
		// window.open("http://localhost:3002/v1/auth/github", "_self");
		// window.open("https://api.develott.fr/v1/auth/github", "_self");
		// window.open("https://develottapi.fly.dev/v1/auth/github", "_self");
		window.open("http://develott.quasiquiz.fr/auth/github", "_self");
	};

	const {
		email,
		password,
		passwordVisibility,
		passwordFocus,
		passwordValidity,
	} = useSelector((state) => state.auth);

	return (
		<div className="login-container">
			{/* <h2>Se connecter</h2> */}
			<form className="login-form" onSubmit={onSubmit}>
				<div className="login-form-inputs">
					<div className="form">
						<Input
							name="email"
							value={email}
							label="Email"
							type="email"
							required={true}
						/>
						<Input
							name="password"
							value={password}
							label="Mot de passe"
							type={passwordVisibility ? "text" : "password"}
							required={true}
						/>
						<div
							className="toogle_eye"
							onClick={() => dispatch(togglePasswordVisibility())}
						>
							{passwordVisibility ? (
								<MdOutlineVisibility />
							) : (
								<MdOutlineVisibilityOff />
							)}
						</div>
					</div>

					{/* {passwordFocus && (
						<div>
							Le mot de passe doit contenir :
							<ul>
								<li className={passwordValidity.minChar ? "" : ""}>
									Au moins 8 caractères
								</li>
								<li className={passwordValidity.uppercase ? "" : ""}>
									Au moins une majuscule
								</li>
								<li className={passwordValidity.number ? "" : ""}>
									Un chiffre
								</li>
								<li className={passwordValidity.specialChar ? "" : ""}>
									Un caractère spécial
								</li>
							</ul>
						</div>
					)} */}
				</div>
				<div className="login-form-buttons">
					<button type="submit" className="main-button-colored">
						Se connecter
					</button>
					<a href="#" className="secondary-button-colored" onClick={github}>
						<i className="fab fa-github"></i> Github
					</a>
					<Link
						to={"../forgotpassword"}
						className="third-button-colored width-100"
					>
						Mot de passe oublié ?
					</Link>
				</div>
			</form>
		</div>
	);
}
export default Login;
