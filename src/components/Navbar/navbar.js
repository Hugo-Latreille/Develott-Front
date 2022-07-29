import "./navbar.scss";
import { Link, Outlet, useLocation } from "react-router-dom";

import SearchBar from "../SearchBar/searchBar";
// import ToggleDark from "../ToggleDarkmode/toggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoggingModalOpen } from "../../pages/Login/authSlice";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src={require(`./../../assets/images/v3-large-white.png`)}
          alt="logo Develott"
        />
      </Link>
      {/* <ToggleDark /> */}

      {/* <SearchBar className="navbar-searchbar" /> */}
      <div className="navbar-link">
        {/* TO DO : AJOUTER LIEN DARK/LIGHT MODE */}
        {!token && (
          <Link
            to="/connexion"
            className="main-button-white"
            state={{ background: location }}
            // onClick={toggleModal}
            onClick={() => dispatch(toggleLoggingModalOpen())}
          >
            Se connecter
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
