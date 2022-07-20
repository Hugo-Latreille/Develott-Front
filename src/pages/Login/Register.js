import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import { useCreateUserMutation } from "./loginApi";
import { clearInputs } from "./loginSlice";

function Register() {
	const dispatch = useDispatch();
	const [createUser] = useCreateUserMutation();
	const { firstname, lastname, email, password, passwordConfirm } = useSelector(
		(state) => state.login
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		//! faire les vérifications, notamment password et confirm password
		createUser({ firstname, lastname, email, password });
		dispatch(clearInputs());
	};

	return (
		<form className="base-container" onSubmit={handleSubmit}>
			<div className="header">Register</div>
			<div className="content">
				<div className="form">
					<Input name="firstname" value={firstname} label="Prénom" />
					<Input name="lastname" value={lastname} label="Nom" />
					<Input name="email" value={email} label="Email" />
					<Input name="password" value={password} label="Mot de passe" />
					<Input
						name="passwordConfirm"
						value={passwordConfirm}
						label="Confirmez votre mot de passe"
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
