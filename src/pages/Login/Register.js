function Register({ forwardRef }) {
	return (
		<div className="base-container">
			<div className="header">Register</div>
			<div className="content">
				<div className="form">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" placeholder="" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="text" name="email" placeholder="" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="text" name="password" placeholder="" />
					</div>
				</div>
			</div>
			<div className="footer">
				<button type="button" className="btn">
					Register
				</button>
			</div>
		</div>
	);
}
export default Register;
