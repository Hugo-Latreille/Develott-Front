import "./navbar.scss";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useState } from "react";

import SearchBar from "../SearchBar/searchBar";

function Navbar({ toggleModal }) {
  const location = useLocation();
  const [isModalOpen, setIsModalopen] = useState(false);

  const handleOpenModal = () => {
    setIsModalopen(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src={require(`./../../assets/images/v3-large-white.png`)}
          alt="logo Develott"
        />
      </Link>

      <SearchBar className="navbar-searchbar" />
      <div className="navbar-link">
        {/* TO DO : AJOUTER LIEN DARK/LIGHT MODE */}
        <Link
          to="/connexion"
          className="main-button-white"
          state={{ background: location }}
          onClick={toggleModal}
        >
          Se connecter
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
