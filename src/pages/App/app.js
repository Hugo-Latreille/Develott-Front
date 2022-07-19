import "./../../styles/_reset.css";
import "./app.scss";
import Navbar from "../../components/Navbar/navbar";
import Slider from "../Home/Slider/slider";
import Hero from "../Home/Hero/hero";
import About from "../Home/About/about";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <Slider />
      <About />
    </div>
  );
}

export default App;
