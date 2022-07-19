import "./longinIndex.scss";
import Login from "./Login";
import Register from "./Register";
//* RTK
import { useSelector, useDispatch } from "react-redux";
import { toggleLoggingActive } from "./loginSlice";
//* React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginIndex() {
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (handleValidation()) {
	// 		// console.log(loginValues);
	// 		// setLoginValues({ username: "", password: "" });
	// 		toast.success("C'est okay", toastOptions);
	// 	}
	// };

	// const handleValidation = () => {
	// 	const { username, password } = loginValues;
	// 	if (username === "") {
	// 		toast.error("Email is required", toastOptions);
	// 		return false;
	// 	}
	// 	if (password === "") {
	// 		toast.error("Password is required", toastOptions);
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const toastOptions = {
	// 		position: "top-right",
	// 		autoClose: 800,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		theme: "light",
	// 	};

	// useEffect(() => {
	// 	const getUser = () => {
	// 		fetch("http://localhost:3002/login/success", {
	// 			method: "GET",
	// 			credentials: "include",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 				"Access-Control-Allow-Credentials": true,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				if (response.status === 200) return response.json();
	// 				throw new Error("authentication error");
	// 			})
	// 			.then((resObject) => {
	// 				console.log(resObject.user);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	};
	// 	getUser();
	// }, [isLoggingActive]);

	const isLoggingActive = useSelector((state) => state.login.isLoggingActive);
	const dispatch = useDispatch();

	return (
		<>
			<div className="App">
				<div className="login">
					<div className="container">
						{isLoggingActive && (
							<Login
							// values={loginValues}
							// setValues={setLoginValues}
							// handleSubmit={handleSubmit}
							/>
						)}
						{!isLoggingActive && <Register />}
					</div>
					<RightSide
						handleClick={() => dispatch(toggleLoggingActive())}
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
