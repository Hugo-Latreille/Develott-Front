import Input from "../../components/Input/Input";
import { useSelector } from "react-redux";

function Register({ onSubmit }) {
	const { firstname, lastname, email, password, passwordConfirm } = useSelector(
		(state) => state.auth
	);

	return (
		<form className="base-container" onSubmit={onSubmit}>
			<div className="header">Register</div>
			<div className="content">
				<div className="form">
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
						type="password"
						required={true}
					/>
					<Input
						name="passwordConfirm"
						value={passwordConfirm}
						label="Confirmez votre mot de passe"
						type="password"
						required={true}
					/>
				</div>
			</div>
			<div className="footer">
				<button type="submit" className="btn">
					Register
				</button>
			</div>
		</form>
	);
}
export default Register;
