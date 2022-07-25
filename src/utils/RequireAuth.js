import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
	const token = useSelector((state) => state.auth.token);
	const location = useLocation();
	console.log(token);

	return token ? (
		<Outlet />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};
export default RequireAuth;
