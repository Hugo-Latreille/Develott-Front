import Input from "../../components/Input/Input";
// import { useSelector } from "react-redux";

// function Register({ onSubmit }) {
// 	const { firstname, lastname, email, password, passwordConfirm } = useSelector(
// 		(state) => state.auth
// 	);

// 	return (
// 		<form className="base-container" onSubmit={onSubmit}>
// 			<div className="header">Register</div>
// 			<div className="content">
// 				<div className="form">
// 					<Input
// 						name="firstname"
// 						value={firstname}
// 						label="Prénom"
// 						type="text"
// 						required={true}
// 					/>
// 					<Input
// 						name="lastname"
// 						value={lastname}
// 						label="Nom"
// 						type="text"
// 						required={true}
// 					/>
// 					<Input
// 						name="email"
// 						value={email}
// 						label="Email"
// 						type="email"
// 						required={true}
// 					/>
// 					<Input
// 						name="password"
// 						value={password}
// 						label="Mot de passe"
// 						type="password"
// 						required={true}
// 					/>
// 					<Input
// 						name="passwordConfirm"
// 						value={passwordConfirm}
// 						label="Confirmez votre mot de passe"
// 						type="password"
// 						required={true}
// 					/>
// 				</div>
// 			</div>
// 			<div className="footer">
// 				<button type="submit" className="btn">
// 					Register
// 				</button>
// 			</div>
// 		</form>
// 	);
import "./register.scss";

function Register() {
	return (
		// <div className="register-container">
		//   {/* <h2>Inscription</h2> */}
		//   <form className="register-form">
		//     <div className="register-form-inputs">
		//       <div className="form">
		//         <
		//       </div>
		//     </div>
		//     <div className="form-form-buttons">
		//       <button type="submit" className="main-button-bg-colored">
		//         S'inscrire
		//       </button>
		//     </div>
		//   </form>
		// </div>
		<div className="register-container">
			<div className="content ">
				<div className="form">
					<div className="inputs-container">
						<Input name="text" label="Prénom" />
						<Input name="text" label="Nom" />
					</div>
					<Input name="email" label="Email" />
					<Input name="password" label="Mot de passe" />
					<Input name="password" label="`Confirmer le mot de passe" />
					<button type="submit" className="main-button-colored">
						Se connecter
					</button>
					<a href="#" className="third-button-colored width-100">
						Déjà inscrit ?
					</a>
				</div>
			</div>
		</div>
	);
}
export default Register;
