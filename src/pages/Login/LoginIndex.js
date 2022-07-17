import "./longinIndex.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function LoginIndex() {
	const [isLoggingActive, setIsLoggingActive] = useState(true);

	return (
		<div className="App">
			<div className="login">
				<div className="container">
					{isLoggingActive && <Login />}
					{!isLoggingActive && <Register />}
				</div>
				<RightSide
					handleClick={() => setIsLoggingActive(!isLoggingActive)}
					isLoggingActive={isLoggingActive}
				/>
			</div>
		</div>
	);
}

const RightSide = ({ handleClick, isLoggingActive }) => {
	return (
		<div
			className={isLoggingActive ? "right-side right" : "right-side left"}
			onClick={handleClick}
		>
			<div className="inner-container">
				<div className="text">{isLoggingActive ? "Register" : "Login"}</div>
			</div>
		</div>
	);
};

export default LoginIndex;
