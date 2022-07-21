import "./longinIndex.scss";
import Login from "./Login";
import Register from "./Register";
//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, toggleLoggingActive } from "./authSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//? RTK Query
import { useCreateUserMutation, useUserLoginMutation } from "./authAPI";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "./authSlice";

function LoginIndex() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggingActive = useSelector((state) => state.auth.isLoggingActive);
	const [createUser] = useCreateUserMutation();
	const [userLogin, { isLoading }] = useUserLoginMutation();
	const { firstname, lastname, email, password, passwordConfirm } = useSelector(
		(state) => state.auth
	);

	const handleRegister = (e) => {
		//* TODO Try/Catch + redirect
		e.preventDefault();
		if (handleValidation()) {
			toast.success("C'est okay", toastOptions);
			createUser({ firstname, lastname, email, password });
			dispatch(clearInputs());
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userData = await userLogin({ email, password }).unwrap();
			console.log(userData.accessToken);
			dispatch(
				setCredentials({ accessToken: userData.accessToken, email: email })
			);
			navigate("/welcome");
		} catch (err) {
			if (!err?.originalStatus) {
				console.log("No Server Response");
			} else if (err.originalStatus === 400) {
				console.log("Missing Username or Password");
			} else if (err.originalStatus === 401) {
				console.log("Unauthorized");
			} else {
				console.log("Login Failed");
			}
		}
	};

	const handleValidation = () => {
		if (firstname === "" || lastname === "") {
			toast.error("Email is required", toastOptions);
			return false;
		}
		//* TODO verification password regex
		if (password !== passwordConfirm) {
			toast.error("Les mots de passe ne correspondent pas", toastOptions);
			return false;
		}
		return true;
	};

	const toastOptions = {
		position: "top-right",
		autoClose: 800,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
	};

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

	return (
		<>
			<div className="App">
				<div className="login">
					<div className="container">
						{isLoggingActive && <Login onSubmit={handleLogin} />}
						{!isLoggingActive && <Register onSubmit={handleRegister} />}
						{isLoading && <p>Loading...</p>}
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
