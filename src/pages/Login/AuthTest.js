import { useAuthTestQuery } from "./authAPI";
import { Link } from "react-router-dom";

const AuthTest = () => {
	const { data, isLoading, isSuccess, isError, error } = useAuthTestQuery();

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{isSuccess && <p>{data.test}</p>}
			{isError && <p>{JSON.stringify(error)}</p>}
			<Link to="/welcome">Back to Welcome</Link>
		</div>
	);
};
export default AuthTest;
