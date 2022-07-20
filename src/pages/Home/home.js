import "./home.scss";

import Navbar from "../../components/Navbar/navbar";
import Slider from "../../components/Slider/slider";
import Hero from "../../components/Home/Hero/hero";
import About from "../../components/Home/About/about";
import Presentation from "../../components/Home/Presentation/presentation";
// import Testimonial from "../Home/Tertimonial/testimonial";

function Home() {
	return (
		<>
			<div className="hero">
				<Navbar />
				<Hero />
			</div>
			<Slider />
			<About />
			<Presentation />
			{/* <Testimonial />git  */}
		</>
	);
}

export default Home;
