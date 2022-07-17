import "./longinIndex.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginIndex() {
	const [isLoggingActive, setIsLoggingActive] = useState(true);
	const [loginValues, setLoginValues] = useState({
		username: "",
		password: "",
	});
	const toastOptions = {
		position: "top-right",
		autoClose: 800,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (handleValidation()) {
			console.log(loginValues);
			setLoginValues({ username: "", password: "" });
			toast.success("C'est okay", toastOptions);
		}
	};

	const handleValidation = () => {
		const { username, password } = loginValues;
		if (username === "") {
			toast.error("Email is required", toastOptions);
			return false;
		}
		if (password === "") {
			toast.error("Password is required", toastOptions);
			return false;
		}
		return true;
	};

	return (
		<>
			<div className="App">
				<div className="login">
					<div className="container">
						{isLoggingActive && (
							<Login
								values={loginValues}
								setValues={setLoginValues}
								handleSubmit={handleSubmit}
							/>
						)}
						{!isLoggingActive && <Register />}
					</div>
					<RightSide
						handleClick={() => setIsLoggingActive(!isLoggingActive)}
						isLoggingActive={isLoggingActive}
					/>
				</div>
			</div>
			<ToastContainer />
		</>
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
