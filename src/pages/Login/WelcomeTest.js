import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
	const user = useSelector((state) => state.auth.email);
	const token = useSelector((state) => state.auth.token);

	const welcome = user ? `Welcome ${user}!` : "Welcome!";
	const tokenAbbr = `${token.slice(0, 9)}...`;

	const content = (
		<section className="welcome">
			<h1>{welcome}</h1>
			<p>Token: {tokenAbbr}</p>
			<p>
				<Link to="/authTest">Go to the test</Link>
			</p>
		</section>
	);

	return content;
};
export default Welcome;
