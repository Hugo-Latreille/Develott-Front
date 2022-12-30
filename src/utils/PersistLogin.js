import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../pages/Login/authSlice";
import Loader2 from "./../components/Loader2/loader2";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const refreshToken = async () => {
		const response = await axios.get(
			// "https://develott.herokuapp.com/v1/user/refreshToken",
			// "http://localhost:3002/v1/user/refreshToken",
			"https://api.develott.fr/v1/user/refreshToken",
			// "http://api.develott.fr/v1/user/refreshToken",
			{
				withCredentials: true,
			}
		);
		// console.log("ici:", response.data);
		dispatch(
			setCredentials({
				accessToken: response.data.accessToken,
				email: response.data.user,
			})
		);
		return response.data;
	};

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refreshToken();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!token ? verifyRefreshToken() : setIsLoading(false);

		return () => (isMounted = false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// useEffect(() => {
	// 	console.log(`isLoading: ${isLoading}`);
	// 	console.log(`aT: ${JSON.stringify(token)}`);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [isLoading]);

	return <>{isLoading ? <Loader2 /> : <Outlet />}</>;
};
export default PersistLogin;
