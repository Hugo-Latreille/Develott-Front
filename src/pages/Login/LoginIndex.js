import "./longinIndex.scss";
import Login from "./Login";
import Register from "./Register";
//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, toggleLoggingActive } from "./loginSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllUsersQuery } from "./loginApi";

function LoginIndex() {
	const { data: allUsers, error, isLoading } = useGetAllUsersQuery();

	console.log(allUsers);

	const dispatch = useDispatch();
	const { username, password } = useSelector((state) => state.login);
	const isLoggingActive = useSelector((state) => state.login.isLoggingActive);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (handleValidation()) {
			toast.success("C'est okay", toastOptions);
			dispatch(clearInputs());
		}
	};

	const handleValidation = () => {
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
						{isLoggingActive && <Login onSubmit={handleSubmit} />}
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
