import "./home.scss";

import Navbar from "../../components/Navbar/navbar";
import Slider from "../../components/Slider/slider";
import Hero from "../../components/Home/Hero/hero";
import About from "../../components/Home/About/about";
import Presentation from "../../components/Home/Presentation/presentation";
import Sidebar from "../../components/SideBar/sidebar";
// import Testimonial from "../Home/Tertimonial/testimonial";

function Home() {
  return (
    // pour que la sidebar soit fixe il faut ajouter une div avec la class "sidebar_layout" a la page
    <div className="sidebar_layout">
      <Sidebar>
        <div className="hero">
          <Navbar />
          <Hero />
        </div>
        <Slider />
        <About />
        <Presentation />
        {/* <Testimonial />git  */}
      </Sidebar>
    </div>
  );
}

export default Home;
