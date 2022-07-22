import { useAuthTestQuery, useUserLogoutMutation } from "./authAPI";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./authSlice";

const AuthTest = () => {
	const { data, isLoading, isSuccess, isError, error } = useAuthTestQuery();
	const [userLogout] = useUserLogoutMutation();

	const dispatch = useDispatch();

	const handleLogout = async () => {
		await userLogout();
		dispatch(logOut());
	};

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{isSuccess && <p>{data.test}</p>}
			{isError && <p>{JSON.stringify(error)}</p>}
			<Link to="/welcome">Back to Welcome</Link>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
export default AuthTest;
