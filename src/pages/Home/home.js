import "./home.scss";

import Navbar from "../../components/Navbar/navbar";
import Slider from "../../components/Slider/slider";
import Hero from "../../components/Home/Hero/hero";
import About from "../../components/Home/About/about";
import Presentation from "../../components/Home/Presentation/presentation";
import { useDispatch } from "react-redux";
import { useGithubLoginQuery } from "../Login/authAPI";
import { setCredentials } from "../Login/authSlice";
// import Sidebar from "../../components/SideBar/sidebar";
// import Testimonial from "../Home/Tertimonial/testimonial";
import { useNavigate } from "react-router-dom";

function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, isSuccess, error } = useGithubLoginQuery({
		// refetchOnMountOrArgChange: true,
	});

	if (isSuccess) {
		console.log(data);
		dispatch(
			setCredentials({
				accessToken: data.accessToken,
				email: data.foundUser.email,
			})
		);
		navigate("/projets");
	}
	if (error) {
		console.log(error);
	}

	return (
		// pour que la sidebar soit fixe il faut ajouter une div avec la class "sidebar_layout" a la page
		<div className="sidebar_layout">
			<div className="hero">
				<Navbar />
				<Hero />
			</div>
			<Slider />
			<About />
			<Presentation />
			{/* <Testimonial />git  */}
		</div>
	);
}

export default Home;
