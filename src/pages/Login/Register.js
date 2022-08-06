import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import "./register.scss";
import { toggleLoggingActive, toggleRegisterVisibility } from "./authSlice";

function Register({ onSubmit }) {
	const {
		firstname,
		lastname,
		email,
		password,
		passwordConfirm,
		registerPasswordVisibility,
		passwordFocus,
		passwordValidity,
		username_gith,
	} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<div className="register-container">
			<div className="content ">
				<form className="form" onSubmit={onSubmit}>
					<div className="inputs-container">
						<Input
							name="firstname"
							value={firstname}
							label="Prénom"
							type="text"
							required={true}
						/>
						<Input
							name="lastname"
							value={lastname}
							label="Nom"
							type="text"
							required={true}
						/>
					</div>
					<Input
						name="username_gith"
						value={username_gith}
						label="Nom d'utilisateur GitHub"
						type="text"
						required={false}
					/>

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
						type={registerPasswordVisibility ? "text" : "password"}
						required={true}
					/>
					<Input
						name="passwordConfirm"
						value={passwordConfirm}
						label="Confirmez votre mot de passe"
						type={registerPasswordVisibility ? "text" : "password"}
						required={true}
					/>
					<div onClick={() => dispatch(toggleRegisterVisibility())}>
						{registerPasswordVisibility ? (
							<MdOutlineVisibility />
						) : (
							<MdOutlineVisibilityOff />
						)}
					</div>
					{passwordFocus && (
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
					)}
					<button type="submit" className="main-button-colored">
						S'inscrire
					</button>
					<span
						className="third-button-colored width-100"
						onClick={() => dispatch(toggleLoggingActive())}
					>
						Déjà inscrit ?
					</span>
				</form>
			</div>
		</div>
	);
}
export default Register;
