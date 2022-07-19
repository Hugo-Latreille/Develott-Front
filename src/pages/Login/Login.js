import Input from "./Input";
import "./styles.scss";
import { useSelector } from "react-redux";

function Login({ onSubmit }) {
	const github = () => {
		window.open("http://localhost:3002/github", "_self");
	};

	const { username, password } = useSelector((state) => state.login);

	return (
		<form className="base-container" onSubmit={onSubmit}>
			<div className="header">Login</div>
			<div className="content">
				<div className="form">
					<Input name="username" value={username} label="Username" />
					<Input name="password" value={password} label="Password" />
				</div>
			</div>
			<div className="footer">
				<button type="submit" className="btn">
					Login
				</button>
			</div>
			<button type="button" className="btn" onClick={github}>
				Github
			</button>
		</form>
	);
}
export default Login;
