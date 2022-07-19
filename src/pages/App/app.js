import "./../../styles/_reset.css";
import "./app.scss";
import Navbar from "../../components/Navbar/navbar";
import Slider from "../Home/Slider/slider";
// import SearchBar from "../../components/SearchBar/searchBar";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Rejoignez la table ronde du code</h1>
            <p className="hero-baseline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="hero-right">
            <img
              className="hero-img"
              src={require(`./../../assets/images/hero-develott-presentation.png`)}
            />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default App;
