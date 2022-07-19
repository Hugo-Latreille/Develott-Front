import "./navbar.scss";

import SearchBar from "../SearchBar/searchBar";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src={require(`./../../assets/images/v3-large-white.png`)}
        alt="logo Develott"
      />
      <SearchBar />
      <div className="navbar-link">
        <a href="#" className="main-button">
          Se connecter
        </a>
      </div>
    </div>
  );
}

export default Navbar;
