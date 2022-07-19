import "./../../styles/_reset.css";
import "./app.scss";
import Navbar from "../../components/Navbar/navbar";
import Slider from "../Home/Slider/slider";
import Hero from "../Home/Hero/hero";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <Slider />
    </div>
  );
}

export default App;
