import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import "./register.scss";
import { toggleRegisterVisibility } from "./authSlice";

function Register({ onSubmit }) {
	const {
		firstname,
		lastname,
		email,
		password,
		passwordConfirm,
		registerPasswordVisibility,
		gitHubUsername,
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
						name="gitHubUsername"
						value={gitHubUsername}
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
					<button type="submit" className="main-button-colored">
						S'inscrire
					</button>
					<a href="#" className="third-button-colored width-100">
						Déjà inscrit ?
					</a>
				</form>
			</div>
		</div>
	);
}
export default Register;
