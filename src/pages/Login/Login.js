import "./styles.scss";

function Login({ forwardRef }) {
	return (
		<div className="base-container">
			<div className="header">Login</div>
			<div className="content">
				<div className="form">
					<div className="form-group">
						<input type="text" name="username" placeholder="" />
						<div className="label">Username</div>
					</div>
					<div className="form-group">
						<input type="password" name="password" placeholder="" />
						<div className="label">Password</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<button type="button" className="btn">
					Login
				</button>
			</div>
		</div>
	);
}
export default Login;
