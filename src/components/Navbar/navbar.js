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
      <SearchBar className="navbar-searchbar" />
      <div className="navbar-link">
        {/* TO DO : AJOUTER LIEN DARK/LIGHT MODE */}
        <a href="#" className="main-button-white">
          Se connecter
        </a>
      </div>
    </div>
  );
}

export default Navbar;
