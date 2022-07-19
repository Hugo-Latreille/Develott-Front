import "./styles.scss";

function Login({ values, setValues }) {
	const github = () => {
		window.open("http://localhost:3002/github", "_self");
	};

	return (
		<form className="base-container">
			<div className="header">Login</div>
			<div className="content">
				<div className="form">
					<div className="form-group">
						<input
							type="text"
							name="username"
							// value={}
							// onChange={()
							// }
						/>
						<div className="label">Username</div>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							// value={}
							// onChange={}							}
						/>
						<div className="label">Password</div>
					</div>
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
