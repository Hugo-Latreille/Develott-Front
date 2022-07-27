import "./home.scss";

import Navbar from "../../components/Navbar/navbar";
import Slider from "../../components/Slider/slider";
import Hero from "../../components/Home/Hero/hero";
import About from "../../components/Home/About/about";
import Presentation from "../../components/Home/Presentation/presentation";
import { useGithubLoginQuery } from "../Login/authAPI";
// import Sidebar from "../../components/SideBar/sidebar";
// import Testimonial from "../Home/Tertimonial/testimonial";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
	const navigate = useNavigate();
	const { isSuccess } = useGithubLoginQuery();

	useEffect(() => {
		if (isSuccess) {
			navigate("/projets");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess]);

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
