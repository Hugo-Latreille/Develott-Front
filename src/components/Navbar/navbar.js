import "./navbar.scss";
import { Link, useLocation, Outlet } from "react-router-dom";

import SearchBar from "../SearchBar/searchBar";

function Navbar() {
  const location = useLocation();

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
        <Link
          to="/connexion"
          className="main-button-white"
          state={{ background: location }}
        >
          Se connecter
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
